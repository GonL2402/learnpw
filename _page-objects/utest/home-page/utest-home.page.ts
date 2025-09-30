import { Page, expect } from "@playwright/test";
import * as UiHelper from "../../../_utils/ui.helper";

export class HomePage {
  constructor(readonly page: Page) {}

  private readonly joinNowButton = 'div[class*="nav-bar__right-group"] a[ui-sref="signup.personal"]';
  private readonly stepHeader = '[class*="step-header"]';
  private readonly stepCurrentProgress = '[aria-label="Step ${}, current"]';
  private readonly acceptAllCookiesButton = 'button[id="onetrust-accept-btn-handler"]';

  async clickJoinNowButton() {
    await this.page.locator(this.joinNowButton).click();
  }

  async verifyRegisterPageDisplay()
  {
    const stepNumber = '1';
    await expect(this.page.locator(this.stepHeader)).toBeVisible();
    await expect(UiHelper.findElement(this.page, this.stepCurrentProgress, "1")).toBeVisible();
  }

  async open()
  {
    await this.page.goto('https://utest.com');
  }

  async clickAcceptAllCookiesButton()
  {
    await UiHelper.findElement(this.page, this.acceptAllCookiesButton).click({timeout: 5000});
  }
}
