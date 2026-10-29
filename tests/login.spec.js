import {test} from '@playwright/test'


test("Login Test",async({page})=>{

    await page.goto("http://orangehrm.qedgetech.com")
    await page.locator("#txtUsername").fill("Admin")
    await page.locator("#txtPassword").fill("Qedge1231@#")
    await page.getByRole('button',{name:'Login'}).click()



})