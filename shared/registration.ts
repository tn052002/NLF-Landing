import {z} from 'zod'
export const consentVersion='2026-10-09-v1'
export function normalizePhone(value:string){
  const compact=value.replace(/[\s()-]/g,'')
  return /^0\d{9}$/.test(compact)?'+84'+compact.slice(1):compact.startsWith('00')?'+'+compact.slice(2):compact
}
export const registrationSchema=z.object({
  name:z.string().trim().min(2).max(100),
  phone:z.string().max(30).regex(/^[+\d\s()-]+$/).transform(normalizePhone).refine(s=>/^\+?[1-9]\d{7,14}$/.test(s)),
  programmeId:z.enum(['community','compact','fundamental','structured','advice']),
  eventId:z.string().uuid().nullable().default(null),
  locale:z.enum(['vi','en']),
  message:z.string().trim().max(2000).default(''),
  consent:z.literal(true),
  idempotencyKey:z.string().uuid(),
  website:z.string().max(200).default(''),
  turnstileToken:z.string().max(2048).default(''),
}).strict()
export type RegistrationInput=z.infer<typeof registrationSchema>
