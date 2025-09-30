import {Page, expect} from '@playwright/test'
import * as UiHelper from '../../../_utils/ui.helper'

export class RegisterPage {

    constructor(private page: Page) {}

    private readonly firstNameInput = 'form[name="userForm"] input[id="firstName"]';
    private readonly lastNameInput =  'form[name="userForm"] input[id="lastName"]';
    private readonly emailInput =  'form[name="userForm"] input[id="email"]';
    private readonly birthMonthSelect = 'select[id="birthMonth"]';
    private readonly birthDaySelect = 'select[id="birthDay"]';
    private readonly nextLocationButton =  'form[name="userForm"] button';

    async inputFirstName(firstName: string)
    {
        await UiHelper.findElement(this.page, this.firstNameInput).fill(firstName);
    }

    async clickOnNextLocationbutton()
    {
        await UiHelper.findElement(this.page, this.nextLocationButton).click();
    }



}