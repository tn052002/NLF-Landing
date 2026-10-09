import assert from 'node:assert/strict'
import {randomUUID} from 'node:crypto'
import {neon,neonConfig} from '@neondatabase/serverless'
import {registrationSchema} from '../shared/registration.ts'
import {consumeLimit,existingRegistration,hash,payloadHash,saveRegistration} from '../server/services/registrations.ts'
// Explicit integration test. Writes only synthetic fixtures to the configured dev database.
if(process.env.NLF_TEST_DATABASE!=='development')throw new Error('Set NLF_TEST_DATABASE=development after checking the selected connection')
neonConfig.fetchFunction=(url,options)=>fetch(url,{...options,signal:AbortSignal.timeout(15000)})
const sql=neon(process.env.NUXT_DATABASE_URL!)
const secret=process.env.NUXT_RATE_LIMIT_SECRET!
const key=randomUUID()
const input=registrationSchema.parse({name:'NLF AUTOMATED TEST '+key.slice(0,8),phone:'+84900000001',programmeId:'fundamental',locale:'en',consent:true,idempotencyKey:key,message:'Synthetic development fixture, not a real lead.'})
const first=await saveRegistration(sql,input,secret)
console.log('Persisted synthetic registration')
const retry=await saveRegistration(sql,input,secret)
console.log('Deduplicated retry')
assert.equal(first.reference,retry.reference)
assert.equal((await existingRegistration(sql,input,secret))?.reference,first.reference)
await assert.rejects(()=>existingRegistration(sql,{...input,message:'changed'},secret),{status:409})
const rows=await sql`SELECT r.kind,r.payload_hash,(SELECT count(*)::int FROM integration_outbox o WHERE o.registration_id=r.id) AS outbox_count FROM registrations r WHERE r.id=${first.reference}`
assert.equal(rows[0]!.kind,'interest');assert.equal(rows[0]!.outbox_count,1);assert.equal(rows[0]!.payload_hash,payloadHash(secret,input))
await assert.rejects(()=>saveRegistration(sql,{...input,idempotencyKey:randomUUID(),eventId:randomUUID()},secret),{status:409})
const rateKey=hash(secret,'test:'+key)
await consumeLimit(sql,rateKey,2);await consumeLimit(sql,rateKey,2)
await assert.rejects(()=>consumeLimit(sql,rateKey,2),{status:429})
console.log('PASS: live database persistence, retry deduplication, payload conflict, invalid event, atomic outbox and rate limiting.')
console.log('Synthetic fixture retained on development branch:',first.reference)
