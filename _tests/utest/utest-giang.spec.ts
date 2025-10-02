import { test, expect } from '@playwright/test';
import { log } from 'console';

test('Launch Page', async ({ page }) => { //async ({ page } là callback function, và callback function này là async

    await page.goto('https://www.utest.com'); // bất đồng bộ

    await page.locator('//a[text()="Join Now"]').click(); // như này chưa đúng vì phải tìm được element mới click, nếu không sẽ có trường hợp lỗi
    
    await page.waitForTimeout(3000);
    const joinNow = page.locator('//a[text()="Join Now"]');
    try {
        await joinNow.waitFor({ state: 'visible', timeout: 5000 });
        const check = await joinNow.isVisible();
        log('Join Now visible:', check);
        await joinNow.click()
    } catch (e) {
        log(e);
    }
    ;

    // const nextLocation = page.locator('//span[text()="Next: Location"]');
    // try {
    //     await nextLocation.waitFor({ state: 'visible', timeout: 3000 });
    //     const checkNextLocation = await nextLocation.isVisible();
    //     log('Next: Location visiable', checkNextLocation);
    //     await nextLocation.click();
    // } catch (e) {
    //     log(e);
    // }


    //span[@id='lastNameError']
    //span[@id='emailError']
    //span[@id='birthDateError']
    // await expectErrorVisible(page, "//span[@id='firstNameError']", 'First name is required')
    const text = await page.locator("//span[@id='firstNameError']").textContent();
    console.log('Actual text:', text);
    await expect(page.locator("//span[@id='firstNameError']")).toHaveText('First name is required');

    await page.pause();


});
async function expectErrorVisible(page: any, text: string, error: string) {
    // await expect(page.locator(`text=${text}`)); // lay duoc the theo selector
    // kiem tra co the day khong
    const text1 = page.locator(text);
    await text1.waitFor({ state: 'visible', timeout: 3000 });
    const checkText1 = await text1.isVisible();
    log(checkText1)
    // lay text trong the trong the ma selector duoc
    if (checkText1 == true) {
        var check2 = await text1.textContent();
        log(check2)
    }
    // so sanh
    if (check2.trim() == error) {
        log('Teng đã đúng');
    } else {
        log("Nội dung không đúng")
    }


}