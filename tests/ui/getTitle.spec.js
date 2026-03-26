import { test, expect } from '@playwright/test';

test('deve validar o título da página inicial', async ({ page }) => {
  await page.goto('https://jsonplaceholder.typicode.com/');
  await expect(page).toHaveTitle('JSONPlaceholder - Free Fake REST API');
});
