import { test, expect } from '@playwright/test';
import { ui } from '../../src/i18n/ui';
import { site } from '../../src/data/site';

test.describe('Internationalization', () => {
  test('should switch language from English to Spanish', async ({ page }) => {
    await page.goto('./en');

    // const langSwitcher = page.locator('header nav [data-lang-switcher]');
    const langSwitcher = page.getByRole('link', { name: 'ES', exact: true });
    await expect(langSwitcher).toBeVisible();
    await langSwitcher.click();

    // Verify URL changes to /es
    await expect(page).toHaveURL(/\/es/);

    // Verify content updates to Spanish (check a known translation)
    await expect(
      page.getByRole('navigation').getByRole('link', { name: ui.es.nav.about })
    ).toBeVisible();
  });

  test('should switch language from Spanish to English', async ({ page }) => {
    await page.goto('./es');

    const langSwitcher = page.getByRole('link', { name: 'EN', exact: true });
    await langSwitcher.click();

    // Verify URL changes to /en
    await expect(page).toHaveURL(/\/en/);

    // Verify content updates to English
    await expect(
      page.getByRole('navigation').getByRole('link', { name: ui.en.nav.about })
    ).toBeVisible();
  });
});
