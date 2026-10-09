import {test} from 'node:test'
import assert from 'node:assert/strict'
import {createApp, defineEventHandler, toWebHandler} from 'h3'
import {readRegistrationBody} from '../server/utils/registrationBody'

const app = createApp()
app.use(defineEventHandler(readRegistrationBody))
const handle = toWebHandler(app)
const request = (body: string, headers: Record<string, string> = {}) => handle(new Request('https://example.com/api/registrations', {
  method: 'POST', headers: {'content-type': 'application/json', ...headers}, body,
}))

test('reads JSON through the Web Request adapter used by Netlify', async () => {
  const response = await request('{"name":"Nguyễn"}')
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), {name: 'Nguyễn'})
})
test('malformed and empty JSON return 400 rather than 500', async () => {
  for (const body of ['{', '']) assert.equal((await request(body)).status, 400)
})
test('enforces byte limit without trusting content-length', async () => {
  const body = JSON.stringify('é'.repeat(8192))
  assert.equal((await request(body)).status, 413)
  assert.equal((await request(body, {'content-length': '1'})).status, 413)
  assert.equal((await request('{}', {'content-length': '16385'})).status, 413)
})
test('accepts JSON at the exact 16 KiB boundary', async () => {
  assert.equal((await request(JSON.stringify('x'.repeat(16382)))).status, 200)
})
