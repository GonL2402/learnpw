import {test as base, BrowserContext, expect, Page} from '@playwright/test';
import { HomePage } from '../_page-objects/utest/homePage';
import { RegisterPage } from '../_page-objects/utest/registerPage';

type CustomFixtures = 
{
    utestPage: Page;
    pomPage: HomePage;
    registerPage: Page;
    pomRegisterPage: RegisterPage;
    context: BrowserContext;
    contextPage: Page;
}

export const test = base.extend<CustomFixtures>({
    utestPage: async ({ page }, use) => {
        await page.goto('https://utest.com/');
        await use(page);
        // Custom teardown can be done here
    },
    pomPage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.gotoHomePage();
        await use(homePage);
    },
    registerPage: async ({ page }, use) => {
        await page.goto('https://utest.com/signup/personal');
        await use(page);
    },
    pomRegisterPage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        const registerPage = new RegisterPage(page);
        await homePage.gotoHomePage();
        await homePage.clickOnJoinNowButton();
        await use(registerPage);
    },
    context: async ({ browser }, use) => {
        const context = await browser.newContext( {storageState: 'storageState.json' });
        await use(context);
        await context.close();
    },
    contextPage: async ({ context }, use) => {
        const page = await context.newPage();
        await use(page);
    }
});

export {expect};
