import {test} from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
test('sales narrative leads with visitor goals before method and offer',()=>{
  const page=readFileSync('app/pages/[locale]/index.vue','utf8')
  const sections=['Hero','Goals','Practice','Stories','Trainer','Workshops','Values','Faq'].map(s=>page.indexOf(`<Sections${s}Section`))
  assert.ok(sections.every((position,i)=>position>=0&&(i===0||position>sections[i-1]!)))
})
test('student evidence is not illustrated or fabricated',()=>{
  const source=readFileSync('app/components/sections/StoriesSection.vue','utf8')
  assert.ok(!source.includes('MediaImage'))
  assert.ok(source.includes('stories.pending'))
})
test('form keeps the retry key and provides a success handoff',()=>{
  const source=readFileSync('app/components/RegistrationSection.vue','utf8')
  assert.ok(source.includes("programme:'advice'"))
  assert.ok(source.includes("errorKey?'signup.retry'"))
  assert.ok(source.includes("t('signup.successBody')"))
})
