import type {WorkshopEvent} from '../../shared/catalogue'
export default defineEventHandler(async(event):Promise<WorkshopEvent[]>=>{
  const config=useRuntimeConfig(event)
  try{
    const sql=database(config.databaseUrl)
    const rows=await sql`SELECT e.id,e.programme_id AS "programmeId",e.starts_at AS "startsAt",e.ends_at AS "endsAt",e.location,e.fee_vnd AS "feeVnd",e.status FROM workshop_events e JOIN programmes p ON p.id=e.programme_id WHERE e.status IN ('open','full') AND p.active=true AND e.starts_at>now() ORDER BY e.starts_at LIMIT 100`
    return rows as WorkshopEvent[]
  }catch{throw createError({statusCode:503,statusMessage:'Workshop dates unavailable'})}
})
