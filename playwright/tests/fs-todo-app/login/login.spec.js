const {test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('./login');
});

test.describe('login', async () => {

    test('can login', async ({ page }) => {
        await page.getByLabel('Email address').fill('kilianjimenez1234@test.com');
        await page.getByLabel('Password').fill('Test1234');

        await page.getByRole('button', {name: '/submit/i'}).click();

        await expect(page).toHaveURL('/todos');
        await expect(page.getByRole('heading', {name: 'Todos'})).toBeVisible();
        await expect(page.getByLabel('Kilian Jimenez')).toBeVisible();
    });

});