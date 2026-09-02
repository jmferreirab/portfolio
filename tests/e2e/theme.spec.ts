import { test, expect } from '@playwright/test';

test.describe('Theme Management', () => {
  test('should toggle dark mode on click', async ({ page }) => {
    await page.goto('');

    const themeToggle = page.locator('#theme-toggle-btn');
    await expect(themeToggle).toBeVisible();

    // Initial state check (assume light by default or system)
    const initialClass = await page.locator('html').getAttribute('class');

    await themeToggle.click();

    // Verify .dark class is applied/removed
    const newClass = await page.locator('html').getAttribute('class');
    if (initialClass?.includes('dark')) {
      expect(newClass).not.toContain('dark');
    } else {
      expect(newClass).toContain('dark');
    }
  });

  test('should persist theme preference in localStorage', async ({ page }) => {
    await page.goto('');

    const themeToggle = page.locator('#theme-toggle-btn');
    await themeToggle.click();

    const storageValue = await page.evaluate(() => localStorage.getItem('portfolio-theme-preference'));
    expect(storageValue).not.toBeNull();
    expect(JSON.parse(storageValue!)).toHaveProperty('mode');
  });
});
