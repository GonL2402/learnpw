import {Page, expect} from '@playwright/test';

export class HomePage {
    constructor(readonly page: Page) {}

    private readonly  joinNowButton = 'header[role="banner"] a[ui-sref="signup.personal"]';

    async goToRegisterPage() {
        await this.page.click(this.joinNowButton);
    }

    async verifyRegisterPageLoaded() {
        await expect(this.page).toHaveURL(/.*signup\/personal/);
    }

    async gotoHomePage() {
        await this.page.goto('https://utest.com/');
    }
}