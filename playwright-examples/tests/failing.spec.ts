// example.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Go to Playwright homepage
  await page.goto('https://playwright.dev/');

  // Expect the title to contain "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Click on the "Get Started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify the URL contains "docs/intro"
  await expect(page).toHaveURL(/.*docs\/intro/);

  // Toggle theme (dark/light mode)
  await page.getByRole('button', { name: 'Toggle theme' }).click();

  // Verify the theme is toggled
  await expect(page).toHaveClass('dark');
});
