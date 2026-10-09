import {createError, getHeader, getRequestWebStream, type H3Event} from 'h3'

export async function readRegistrationBody(event: H3Event): Promise<unknown> {
  const limit = 16384
  if (Number(getHeader(event, 'content-length')) > limit) {
    throw createError({statusCode: 413, statusMessage: 'Request too large'})
  }
  // H3 bridges both Node requests and Netlify's Web Request adapter.
  const reader = getRequestWebStream(event)?.getReader()
  const chunks: Buffer[] = []
  let size = 0
  if (reader) {
    try {
      while (true) {
        const {done, value} = await reader.read()
        if (done) break
        const chunk = Buffer.from(value)
        size += chunk.length
        if (size > limit) {
          await reader.cancel().catch(() => {})
          throw createError({statusCode: 413, statusMessage: 'Request too large'})
        }
        chunks.push(chunk)
      }
    } finally {
      reader.releaseLock()
    }
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    throw createError({statusCode: 400, statusMessage: 'Invalid JSON'})
  }
}
