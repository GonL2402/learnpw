import {Page, Locator} from '@playwright/test';

export const findElement = (page: Page, locator: string, value?: string): Locator => {
    const element = value ? locator.replace('${}', value) : locator;
    return page.locator(element);
}