import {test as base, BrowserContext, chromium} from '@playwright/test'
import { HomePage } from '../_page-objects/utest/home-page/utest-home.page'
import { read } from 'fs';

type pageFixture = {
    context: BrowserContext;
    homepage: HomePage;

}

export const test = base.extend<pageFixture>({
    context: async ({browser}, use) => {
        const context = await browser.newContext({
            storageState: 'storageState.json',
        });
        await use(context);
        await context.close();
    },

    homepage: async ({context}, use) => {
        const homePage = new HomePage(await context.newPage());
        await use(homePage);
    },
});