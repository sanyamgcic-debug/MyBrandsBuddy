import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';
import { allServices } from '../../src/data/services';

for (const service of allServices) {
  test(`scene ${service.slug}: responsive composition, interaction and image integrity`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`/services/${service.slug}`);
    await page.evaluate(() => document.fonts.ready);
    const scene = page.locator('.studio-scene');
    await expect(scene).toHaveCount(1);
    await expect(scene.getByRole('img')).toBeVisible();
    const controls = scene.getByRole('button');
    await expect(controls).toHaveCount(4);
    await controls.last().click();
    await expect(scene).toHaveAttribute('data-stage', '3');
    await expect(controls.last()).toHaveAttribute('aria-pressed', 'true');
    await controls.first().focus();
    await page.keyboard.press('Enter');
    await expect(scene).toHaveAttribute('data-stage', '0');
    for (const img of await scene.locator('img').all()) {
      await expect
        .poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    await page.evaluate(() => {
      (document.activeElement as HTMLElement)?.blur();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
    await page.screenshot({ path: info.outputPath(`${service.slug}.png`), fullPage: true });
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await expect
        .poll(() => page.evaluate(() => document.documentElement.scrollWidth))
        .toBe(width);
      const box = await scene.boundingBox();
      expect(box!.width).toBeGreaterThan(240);
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await scene.scrollIntoViewIfNeeded();
    await expect(scene.locator('.scene-space')).toHaveCSS('transform', 'none');
    await expect(scene.locator('.scene-space')).toHaveCSS('transition-duration', '0s');
    const resources = await page.evaluate(() =>
      performance.getEntriesByType('resource').map((entry) => {
        const r = entry as PerformanceResourceTiming;
        return { url: r.name, bytes: r.encodedBodySize, kind: r.initiatorType };
      }),
    );
    const metrics = {
      jsBytes: resources.filter((r) => r.kind === 'script').reduce((n, r) => n + r.bytes, 0),
      imageBytes: resources.filter((r) => r.kind === 'img').reduce((n, r) => n + r.bytes, 0),
      resources: resources.length,
    };
    await info.attach('resource-budget.json', {
      body: JSON.stringify(metrics),
      contentType: 'application/json',
    });
    expect(resources.every((r) => new URL(r.url).hostname === '127.0.0.1')).toBe(true);
    expect(metrics.jsBytes).toBeLessThan(750000);
    if (
      ['seo-local-search', 'app-store-optimization', 'whatsapp-marketing'].includes(service.slug)
    ) {
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(axe.violations.map((v) => v.id)).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}

test('scene pointer depth, scroll progression and no-JavaScript fallback', async ({
  page,
  browser,
  isMobile,
}) => {
  await page.goto('/services/social-media-marketing');
  const scene = page.locator('.studio-scene');
  await scene.scrollIntoViewIfNeeded();
  if (!isMobile) {
    const box = (await scene.boundingBox())!;
    await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.3);
    await expect
      .poll(() => scene.evaluate((el) => el.style.getPropertyValue('--pointer-x')))
      .not.toBe('0');
  }
  await page.evaluate(() => window.scrollBy(0, 250));
  await expect.poll(() => scene.getAttribute('data-stage')).not.toBe('0');
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto('http://127.0.0.1:3000/services/social-media-marketing');
  await expect(staticPage.locator('.scene-art')).toBeVisible();
  await expect(staticPage.locator('h1')).toHaveText(
    'Social Media That Gets You Noticed, Remembered, and Called',
  );
  await context.close();
});
