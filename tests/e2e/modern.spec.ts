import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('service search, empty state and reset lead to a real service', async ({ page }) => {
  await page.goto('/services');
  const search = page.getByRole('searchbox', { name: 'Find a service' });
  await search.fill('WordPress');
  await expect(page.locator('.service-row')).toHaveCount(1);
  await expect(page.locator('.service-row')).toHaveAttribute(
    'href',
    '/services/website-development',
  );
  await search.fill('no-matching-discipline');
  await expect(page.locator('.directory-empty')).toBeVisible();
  await page.getByRole('button', { name: 'Show all services', exact: true }).click();
  await expect(page.locator('.service-row')).toHaveCount(13);
  await expect(search).toBeFocused();
  await search.fill('WordPress');
  await page.locator('.service-row').click();
  await expect(page).toHaveURL(/website-development$/);
});

test('scroll control returns keyboard focus and reduced motion keeps the headline visible', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.rb-blur-word').first()).toHaveCSS('opacity', '1');
  await expect(page.locator('.rb-blur-word').first()).toHaveCSS('filter', 'none');
  await page.locator('.agency-cta').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Back to top', exact: true }).click();
  await expect(page.locator('#main-content')).toBeFocused();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});

test('branded controls and service search pass accessibility after interaction', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/services');
  await page.getByRole('searchbox', { name: 'Find a service' }).fill('unmatched');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual(
    [],
  );
  await page.goto('/contact');
  await expect(page.locator('#email')).toHaveClass(/du-input/);
  await expect(page.locator('#interest')).toHaveClass(/du-select/);
  await expect(page.locator('#message')).toHaveClass(/du-textarea/);
});

test('animated headline is readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/');
  await expect(page.locator('.rb-blur-word').first()).toBeVisible();
  await expect(page.locator('.rb-blur-word').first()).toHaveCSS('opacity', '1');
  await context.close();
});
