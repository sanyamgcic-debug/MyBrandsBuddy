import { writeFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { allServices as services } from '../../src/data/services';
import { caseStudies } from '../../src/data/case-studies';
import { articles } from '../../src/data/blog';
const routes = [
  '/',
  '/services',
  '/case-studies',
  '/pricing',
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/work',
  '/get-started',
  ...services.map((s) => `/services/${s.slug}`),
  ...caseStudies.map((s) => `/case-studies/${s.slug}`),
  ...articles.map((a) => `/blog/${a.slug}`),
];
test('every public route loads with metadata, one heading and no horizontal overflow', async ({
  page,
  request,
}) => {
  test.setTimeout(120_000);
  const internalLinks = new Set<string>();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const path of routes) {
    const response = await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute('href')!)))
      internalLinks.add(href.split('#')[0]);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(path === '/' ? '^https://mybrandsbuddy\\.com/?$' : `${path}$`),
    );
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      path,
    ).toBe(true);
  }
  for (const href of internalLinks) expect((await request.get(href)).status(), href).toBe(200);
  expect(errors).toEqual([]);
});
test('case-study and blog filters change the visible cards', async ({ page }) => {
  await page.goto('/case-studies');
  await page.getByRole('button', { name: 'Salon', exact: true }).click();
  await expect(page.locator('.case-card')).toHaveCount(1);
  await expect(page.locator('.case-card')).toContainText('Glamour Studio');
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await expect(page.locator('.case-card')).toHaveCount(3);
  await page.goto('/blog');
  await page.getByRole('button', { name: 'SEO', exact: true }).click();
  await expect(page.locator('.article-card')).toHaveCount(1);
});
test('pricing choice reaches contact, consent is required and email fallback is explicit', async ({
  page,
}) => {
  await page.goto('/pricing');
  await page.getByRole('link', { name: 'Choose Growth', exact: true }).click();
  await expect(page.locator('#interest')).toHaveValue('Growth Buddy');
  await page.getByLabel('Your name').fill('Test Owner');
  await page.getByLabel('Email address').fill('owner@example.com');
  await page.getByLabel('Business name').fill('My Local Business');
  await page
    .getByLabel('What would you like to grow?')
    .fill('I want more customers to discover my local shop.');
  await expect(page.getByRole('button', { name: 'Start the Conversation' })).toBeVisible();
  expect(
    await page
      .locator('input[name="consent"]')
      .evaluate((el: HTMLInputElement) => el.checkValidity()),
  ).toBe(false);
  await page.locator('input[name="consent"]').check();
  await page.getByRole('button', { name: 'Start the Conversation' }).click();
  await expect(page.getByRole('status')).toContainText('Nothing has been submitted');
});
test('navigation works on mobile and FAQ opens', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Work', exact: true })
      .click();
    await expect(page).toHaveURL(/\/work$/);
    await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  }
  await page.goto('/pricing');
  await page.locator('summary').filter({ hasText: 'Is advertising spend included?' }).click();
  await expect(page.locator('details[open]')).toContainText('separate from the management fee');
});
test('core pages pass automated WCAG AA checks', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  test.setTimeout(240_000);
  for (const path of routes) {
    await page.goto(path);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    writeFileSync(
      testInfo.outputPath(path.replaceAll('/', '_') + '.json'),
      JSON.stringify(result.violations),
    );
    expect
      .soft(
        result.violations.map((v) => ({
          rule: v.id,
          nodes: v.nodes.map((n) => ({ target: n.target, issue: n.failureSummary })),
        })),
        path,
      )
      .toEqual([]);
  }
});
test('security headers, sitemap, social image and missing routes behave correctly', async ({
  request,
}) => {
  const home = await request.get('/');
  expect(home.headers()['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(home.headers()['x-content-type-options']).toBe('nosniff');
  expect(home.headers()['x-powered-by']).toBeUndefined();
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain('/services/seo');
  expect((await request.get('/robots.txt')).status()).toBe(200);
  const image = await request.get('/opengraph-image');
  expect(image.status()).toBe(200);
  expect(image.headers()['content-type']).toContain('image/png');
  expect((await request.get('/services/not-a-service')).status()).toBe(404);
  expect((await request.get('/missing-page')).status()).toBe(404);
  const blocked = await request.post('/api/contact', {
    headers: { Origin: 'https://other.example' },
    data: {},
  });
  expect(blocked.status()).toBe(403);
});
test('capture homepage and contact for visual review', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true, scale: 'css' });
  await page
    .locator('.premium-hero')
    .screenshot({ path: testInfo.outputPath('hero.png'), scale: 'css' });
  await page.goto('/contact');
  await page.screenshot({ path: testInfo.outputPath('contact.png'), fullPage: true, scale: 'css' });
});

test('narrow phone and tablet layouts stay within the viewport', async ({ page }) => {
  test.setTimeout(180_000);
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        `${width}px ${route}`,
      ).toBe(true);
    }
  }
});
