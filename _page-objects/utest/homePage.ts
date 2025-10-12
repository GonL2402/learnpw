import {Page, expect} from '@playwright/test';

export class HomePage {
    constructor(readonly page: Page) {}

    private readonly  joinNowButton = 'header[role="banner"] a[ui-sref="signup.personal"]';
    private readonly acceptAllCookies = 'button[id="onetrust-accept-btn-handler"]';


    async clickOnJoinNowButton() {
        await this.page.click(this.joinNowButton);
    }

    async verifyRegisterPageLoaded() {
        await expect(this.page).toHaveURL(/.*signup\/personal/);
    }

    async gotoHomePage() {
        await this.page.goto('https://utest.com/');
        await this.page.click(this.acceptAllCookies);
        await this.page.context().storageState({ path: 'storageState.json' });
    }
}