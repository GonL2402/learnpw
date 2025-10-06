import { test } from "../../_fixtures/customer-fixture";

test('Access Register page', async ({ pomPage }) => {
    await pomPage.goToRegisterPage();
    await pomPage.verifyRegisterPageLoaded();
});