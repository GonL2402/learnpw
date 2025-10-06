import {Page, expect} from '@playwright/test';

export class RegisterPage {
    constructor(readonly page: Page) {}

    private readonly firstNameWarningText = 'form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="firstNameError"]';
    private readonly lastNameWarningText = 'form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="lastNameError"]';
    private readonly emailWarningText = 'form[contains(@class," invalid")]//i[text()="warning"]/following-sibling::span[@id="emailError"]';

}