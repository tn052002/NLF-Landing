import {registrationSchema} from '../../shared/registration'
import {readRegistrationBody} from '../utils/registrationBody'
import {consumeLimit,existingRegistration,hash,RegistrationError,saveRegistration} from '../services/registrations'
export default defineEventHandler(async(event)=>{
  const config=useRuntimeConfig(event)
  const origin=getHeader(event,'origin')
  const allowed=config.allowedOrigin || (import.meta.dev?getRequestURL(event).origin:'')
  if(!allowed||origin!==allowed)throw createError({statusCode:403,statusMessage:'Origin not allowed'})
  if(!getHeader(event,'content-type')?.startsWith('application/json'))throw createError({statusCode:415,statusMessage:'JSON required'})
  const body=await readRegistrationBody(event)
  const parsed=registrationSchema.safeParse(body)
  if(!parsed.success)throw createError({statusCode:400,statusMessage:'Invalid registration'})
  const input=parsed.data
  if(input.website)throw createError({statusCode:400,statusMessage:'Invalid registration'})
  if(config.rateLimitSecret.length<32)throw createError({statusCode:503,statusMessage:'Service unavailable'})
  // Fail closed on a public build until bot protection is configured.
  if(!import.meta.dev && !config.turnstileSecret)throw createError({statusCode:503,statusMessage:'Signup is not configured'})
  try{
    const sql=database(config.databaseUrl)
    const ip=getRequestIP(event,{xForwardedFor:config.trustProxy===true})
    if(ip)await consumeLimit(sql,hash(config.rateLimitSecret,'ip:'+ip),30)
    const previous=await existingRegistration(sql,input,config.rateLimitSecret)
    if(previous)return previous
    if(config.turnstileSecret){
      if(!input.turnstileToken)throw new RegistrationError(400,'Complete the verification')
      const verification=await $fetch<{success:boolean;hostname?:string;action?:string}>('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:{secret:config.turnstileSecret,response:input.turnstileToken},timeout:8000})
      if(!verification.success||verification.hostname!==new URL(allowed).hostname||verification.action!=='registration')throw new RegistrationError(400,'Verification failed')
    }
    await consumeLimit(sql,hash(config.rateLimitSecret,'phone:'+input.phone),5)
    const result=await saveRegistration(sql,input,config.rateLimitSecret)
    setResponseStatus(event,201)
    return result
  }catch(error){
    if(error instanceof RegistrationError){if(error.status===429)setHeader(event,'retry-after',3600);throw createError({statusCode:error.status,statusMessage:error.message})}
    // Never log payloads or raw driver errors (which may contain PII/credentials).
    throw createError({statusCode:503,statusMessage:'Please retry later'})
  }
})
