import { test, expect } from '@playwright/test';

test.describe('Responsive UI', () => {
  test('should open and close mobile menu on small screens', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('');

    const menuBtn = page.locator('#mobile-menu-button');
    const menu = page.locator('#mobile-menu');
    const closeBtn = page.locator('#mobile-menu-close');

    // Initially hidden
    await expect(menu).toHaveClass(/translate-x-full/);
    await expect(menu).toHaveClass(/invisible/);

    // Open menu
    await menuBtn.click();
    await expect(menu).not.toHaveClass(/translate-x-full/);
    await expect(menu).not.toHaveClass(/invisible/);
    await expect(menu).toBeVisible();

    // Close menu
    await closeBtn.click();
    await expect(menu).toHaveClass(/translate-x-full/);
    await expect(menu).toHaveClass(/invisible/);
  });

  test('should not show mobile menu button on desktop', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('');

    const menuBtn = page.locator('#mobile-menu-button');
    await expect(menuBtn).not.toBeVisible();
  });
});
