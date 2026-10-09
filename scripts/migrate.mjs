import fs from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {neon} from '@neondatabase/serverless'
const url=process.env.DATABASE_URL_UNPOOLED
if(!url || new URL(url).hostname.includes('-pooler.'))throw new Error('A direct DATABASE_URL_UNPOOLED is required')
const sql=neon(url)
await sql`CREATE TABLE IF NOT EXISTS schema_migrations (name text PRIMARY KEY, checksum text NOT NULL, applied_at timestamptz NOT NULL DEFAULT now())`
for(const name of (await fs.readdir(new URL('../db/migrations/',import.meta.url))).filter(f=>f.endsWith('.sql')).sort()){
  const source=await fs.readFile(new URL('../db/migrations/'+name,import.meta.url),'utf8')
  const checksum=createHash('sha256').update(source).digest('hex')
  const existing=await sql`SELECT checksum FROM schema_migrations WHERE name=${name}`
  if(existing.length){if(existing[0].checksum!==checksum)throw new Error('Modified applied migration: '+name);continue}
  // Migration files contain ordinary statements; no procedural bodies with semicolons.
  const statements=source.replace(/^--.*$/gm,'').split(';').map(s=>s.trim()).filter(Boolean)
  await sql.transaction([...statements.map(s=>sql.query(s,[])),sql`INSERT INTO schema_migrations(name,checksum) VALUES(${name},${checksum})`])
  console.log('Applied',name)
}
