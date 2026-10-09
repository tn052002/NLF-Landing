import {neon} from '@neondatabase/serverless'
export function database(url:string){
  if(!url)throw createError({statusCode:503,statusMessage:'Service unavailable'})
  return neon(url,{fetchOptions:{signal:AbortSignal.timeout(12000)}})
}
