import {test,expect} from '@playwright/test'
test('bilingual navigation, selection, validation, and responsive layout',async({page})=>{
  await page.goto('/vi')
  await expect(page.locator('h1')).toHaveText('1 tuần để thay đổi cuộc đời bạn.')
  await page.getByRole('link',{name:'EN',exact:true}).click()
  await expect(page.locator('h1')).toHaveText('1 Week to change your life')
  await page.locator('.card').filter({has:page.getByRole('heading',{name:'Fundamental Movement',exact:true})}).getByRole('button').click()
  await expect(page.locator('select[name=programme]')).toHaveValue('fundamental')
  await page.getByRole('button',{name:'Send my enquiry'}).click()
  await expect(page.locator('.confirmation')).toHaveCount(0)
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy()
  await page.getByRole('link',{name:'VI',exact:true}).click()
  await expect(page.locator('select[name=programme]')).toHaveValue('fundamental')
})
test('form displays durable success from API response',async({page})=>{
  await page.route('**/api/registrations',route=>route.fulfill({status:201,contentType:'application/json',body:JSON.stringify({reference:'browser-test-reference',status:'received'})}))
  await page.goto('/en');await page.locator('[name=name]').fill('Browser Test');await page.locator('[name=phone]').fill('0901234567');await page.locator('[name=programme]').selectOption('compact');await page.locator('input[type=checkbox]').check();await page.getByRole('button',{name:'Send my enquiry'}).click();await expect(page.locator('.confirmation')).toContainText('browser-test-reference')
})
