import {test as testWithFixture} from '../../_fixtures/utest-fixture';
import { HomePage } from '@pages/utest/home-page/utest-home.page';
import {test} from '@playwright/test';


test('Utest - access registeration page', async({page}) => {
    const homePage = new HomePage(page);
    await page.goto('https://utest.com');
    await homePage.clickAcceptAllCookiesButton();

    await page.context().storageState({path: 'storageState.json'});

    await homePage.clickJoinNowButton();
    await homePage.verifyRegisterPageDisplay();
});

testWithFixture('Utest - verify missing fields in registration step 1', async({homepage}) => {
    await homepage.open();
    await homepage.clickJoinNowButton();

    const homePage = new HomePage(homepage.page);
    await homePage.clickOnNextLocationbutton();

    //await homepage.page.pause();
});