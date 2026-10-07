import { serviceCopy } from '../../src/data/service-copy';
import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';
import { services } from '../../src/data/services';
test('capability controls, industry explorer, work filters and service enquiries connect', async ({
  page,
  isMobile,
}) => {
  await page.goto('/');
  await page
    .getByRole('group', { name: 'Explore our capabilities' })
    .getByRole('button', { name: 'Technology', exact: true })
    .click();
  await expect(page.locator('.system-caption a')).toHaveAttribute(
    'href',
    '/services/website-development',
  );
  await page
    .getByRole('group', { name: 'Explore growth levers' })
    .getByRole('button', { name: /Brand/ })
    .click();
  await expect(page.locator('.growth-explanation h3')).toHaveText('Brand');
  await page
    .getByRole('group', { name: 'Explore your industry' })
    .getByRole('button', { name: /Real Estate/i })
    .click();
  await expect(page.locator('.industry-story a')).toHaveAttribute(
    'href',
    '/services/real-estate-marketing',
  );
  await page.goto('/work');
  await page.getByRole('button', { name: 'Web', exact: true }).click();
  await expect(page.locator('.portfolio-card')).toHaveCount(1);
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('button', { name: 'Services', exact: true }).click();
  await expect(page.locator('#services-menu a')).toHaveCount(14);
  await page
    .locator('#services-menu')
    .getByRole('link', { name: /Website Development/ })
    .click();
  await expect(page).toHaveURL(/website-development$/);
  await page.locator('[data-copy-cta] a').first().click();
  await expect(page.locator('#interest')).toHaveValue(
    'Website Development — WordPress & Custom Code',
  );
  await expect(page.getByLabel('Phone (optional)')).toBeVisible();
  await expect(page.getByLabel('Indicative budget')).toBeVisible();
});
test('all service pages and primary pages have complete visuals', async ({ page }, testInfo) => {
  test.setTimeout(120000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const service of services) {
    await page.goto(`/services/${service.slug}`);
    const exact = serviceCopy.find((p) => p.slug === service.slug);
    if (exact) {
      await expect(page.locator('h1')).toHaveText(exact.h1);
      await expect(page.locator('.source-section h2')).toHaveText(
        exact.sections.map((s) => s.heading),
      );
      await expect(page.locator('.faq-list details')).toHaveCount(
        exact.sections.flatMap((s) => s.blocks).filter((b) => b.kind === 'faq').length,
      );
    } else {
      await expect(page.locator('.inclusion-row')).toHaveCount(6);
      await expect(page.locator('.service-process-steps article')).toHaveCount(4);
      await expect(page.locator('.faq-list details')).toHaveCount(3);
      await expect(page.locator('.related-services a')).toHaveCount(3);
    }
    await expect(page.locator(`.service-hero .visual-${service.theme}`)).toBeVisible();
    await page.screenshot({
      path: testInfo.outputPath(service.slug + '.png'),
      fullPage: true,
      scale: 'css',
    });
  }
  for (const route of ['/services', '/about', '/work', '/blog', '/get-started']) {
    await page.goto(route);
    for (const img of await page.locator('img').all())
      await expect(img).toHaveJSProperty('complete', true);
    await page.screenshot({
      path: testInfo.outputPath(route.slice(1) + '.png'),
      fullPage: true,
      scale: 'css',
    });
  }
});
test('server content remains useful without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/services/seo-local-search');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.inclusion-row')).toHaveCount(6);
  await expect(page.locator('.inclusion-row').first()).toBeVisible();
  await context.close();
});

test('blog empty categories and renamed service redirects are intentional', async ({
  page,
  request,
}) => {
  await page.goto('/blog');
  await page.getByRole('button', { name: 'Real Estate Marketing', exact: true }).click();
  await expect(page.locator('.insights-empty')).toBeVisible();
  await page.getByRole('button', { name: 'Explore all insights', exact: true }).click();
  await expect(page.locator('.article-card')).toHaveCount(3);
  const response = await request.get('/services/seo', { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe('/services/seo-local-search');
});

test('expanded navigation remains accessible and Escape restores focus', async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  if (isMobile) await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('button', { name: 'Services', exact: true }).click();
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual(
    [],
  );
  await page.keyboard.press('Escape');
  await expect(
    page.getByRole('button', { name: isMobile ? 'Open navigation' : 'Services', exact: true }),
  ).toBeFocused();
});
