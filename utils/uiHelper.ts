import {Locator, Page} from '@playwright/test'

export class UiHelper {
    static findElement(page: Page, locator: string): Locator
    {
        const isXpath = locator.trim().startsWith("//") || locator.trim().startsWith("(");
        return page.locator(isXpath ? `xpath=${locator}` : locator);
    }
}