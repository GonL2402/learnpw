import {test as base, expect, Page} from '@playwright/test';
import { HomePage } from '../_page-objects/utest/homePage';

type CustomFixtures = 
{
    utestPage: Page;
    pomPage: HomePage;
    registerPage: Page;
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
    }
});

export {expect};
