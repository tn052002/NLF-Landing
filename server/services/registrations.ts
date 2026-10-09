import {createHmac} from 'node:crypto'
import type {NeonQueryFunction} from '@neondatabase/serverless'
import type {RegistrationInput} from '../../shared/registration'
import {consentVersion} from '../../shared/registration'
export class RegistrationError extends Error { constructor(public status:number,message:string){super(message)} }
export function hash(secret:string,value:string){return createHmac('sha256',secret).update(value).digest('hex')}
export function payloadHash(secret:string,input:RegistrationInput){return hash(secret,JSON.stringify([input.name,input.phone,input.programmeId,input.eventId,input.locale,input.message,consentVersion]))}
export async function consumeLimit(sql:NeonQueryFunction<false,false>,key:string,max:number){
  const rows=await sql`INSERT INTO rate_limits(key_hash,window_start,count) VALUES(${key},date_trunc('hour',now()),1)
    ON CONFLICT(key_hash,window_start) DO UPDATE SET count=rate_limits.count+1 WHERE rate_limits.count < ${max} RETURNING count`
  if(!rows.length)throw new RegistrationError(429,'Too many requests')
}
export async function existingRegistration(sql:NeonQueryFunction<false,false>,input:RegistrationInput,secret:string){
  const rows=await sql`SELECT id,payload_hash FROM registrations WHERE idempotency_key=${input.idempotencyKey}`
  if(!rows.length)return null
  if(rows[0]!.payload_hash!==payloadHash(secret,input))throw new RegistrationError(409,'Request changed; submit again')
  return {reference:rows[0]!.id as string,status:'received'}
}
export async function saveRegistration(sql:NeonQueryFunction<false,false>,input:RegistrationInput,secret:string){
  const programme=input.programmeId==='advice'?null:input.programmeId
  const digest=payloadHash(secret,input)
  // Select eligible event and write registration + integration event atomically.
  const rows=await sql`WITH eligible AS (
    SELECT CASE WHEN ${input.eventId}::uuid IS NULL THEN CASE WHEN ${programme}::text IS NULL THEN 'advice' ELSE 'interest' END
      ELSE CASE WHEN e.status='full' THEN 'waitlist' ELSE 'event_enquiry' END END AS kind
    FROM (SELECT 1) anchor
    LEFT JOIN programmes p ON p.id=${programme}
    LEFT JOIN workshop_events e ON e.id=${input.eventId}::uuid AND e.programme_id=p.id
    WHERE (${programme}::text IS NULL OR p.active=true)
      AND (${input.eventId}::uuid IS NULL OR (e.status IN ('open','full') AND e.starts_at>now()))
  ), saved AS (
    INSERT INTO registrations(idempotency_key,payload_hash,name,phone,programme_id,event_id,locale,message,kind,consent_version)
    SELECT ${input.idempotencyKey}::uuid,${digest},${input.name},${input.phone},${programme},${input.eventId}::uuid,${input.locale},${input.message},kind,${consentVersion} FROM eligible
    ON CONFLICT(idempotency_key) DO UPDATE SET idempotency_key=EXCLUDED.idempotency_key
      WHERE registrations.payload_hash=EXCLUDED.payload_hash
    RETURNING id
  ), queued AS (
    INSERT INTO integration_outbox(registration_id) SELECT id FROM saved ON CONFLICT(registration_id) DO NOTHING
  ) SELECT id FROM saved`
  if(!rows.length)throw new RegistrationError(409,'Selection or request is no longer valid')
  return {reference:rows[0]!.id as string,status:'received'}
}
