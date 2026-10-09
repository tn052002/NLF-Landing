import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {registrationSchema,normalizePhone} from '../shared/registration.ts'
import {payloadHash} from '../server/services/registrations.ts'
const input={name:'Test Participant',phone:'0901234567',programmeId:'fundamental',locale:'vi',consent:true,idempotencyKey:'00000000-0000-4000-8000-000000000001'}
test('normalises Vietnamese and international numbers',()=>{assert.equal(normalizePhone('090 123 4567'),'+84901234567');assert.equal(normalizePhone('0084 901234567'),'+84901234567')})
test('valid minimal enquiry gets safe defaults',()=>{const value=registrationSchema.parse(input);assert.equal(value.eventId,null);assert.equal(value.message,'');assert.equal(value.phone,'+84901234567')})
test('rejects invalid input, unapproved programme and missing consent',()=>{for(const change of [{consent:false},{name:' '},{phone:'hello'},{phone:'0'},{programmeId:'invented'},{locale:'fr'},{eventId:'x'},{message:'x'.repeat(2001)},{extra:'not allowed'}])assert.equal(registrationSchema.safeParse({...input,...change}).success,false)})
test('payload hash ignores CAPTCHA token but binds content',()=>{const a=registrationSchema.parse(input);assert.equal(payloadHash('secret',a),payloadHash('secret',{...a,turnstileToken:'renewed'}));assert.notEqual(payloadHash('secret',a),payloadHash('secret',{...a,message:'Changed'}))})
test('VI and EN keys are aligned and approved headline survives',()=>{const vi=JSON.parse(readFileSync('app/content/vi.json','utf8')),en=JSON.parse(readFileSync('app/content/en.json','utf8'));assert.deepEqual(Object.keys(vi),Object.keys(en));assert.equal(en['hero.title'],'1 Week to change your life');assert.match(en['values.growthBody'],/Everything is training/);assert.match(en['values.humilityBody'],/genuine environment/)})
