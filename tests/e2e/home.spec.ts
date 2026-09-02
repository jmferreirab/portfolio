import { test, expect } from '@playwright/test';
import { site } from '../../src/data/site';

test.describe('Home Page', () => {
  test('should load the home page and show critical sections', async ({
    page,
  }) => {
    await page.goto('');

    // Check if the page title or a main heading is present
    await expect(page).toHaveTitle(`${site.name} - ${site.title}`);

    // Check for core sections
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#skills')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Switch to dark mode' })
    ).toBeVisible();
  });
});
