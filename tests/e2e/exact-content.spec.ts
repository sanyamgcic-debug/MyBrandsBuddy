import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';
import { serviceCopy } from '../../src/data/service-copy';

const source = readFileSync('Pasted markdown.md', 'utf8').replace(/\r\n/g, '\n');
const blocks = [
  ...source.matchAll(
    /^# PAGE (\d+): (.+)\n([\s\S]*?)(?=^# PAGE |^# SITE-WIDE: Closing|$(?![\s\S]))/gm,
  ),
];
const normalise = (s: string) => s.replace(/\s+/g, ' ').trim();
// Derive expected text directly from the authoritative Markdown, independently of the importer.
function visibleSource(body: string) {
  return normalise(
    body
      .slice(body.indexOf('**H1:**'))
      .replace(/^\*\*(?:H1|Subheadline|Intro|Call to Action):\*\*\s*/gm, '')
      .replace(/^---\s*$/gm, '')
      .replace(/^#{2,3} /gm, '')
      .replace(/^(?:- |\d+\. )/gm, '')
      .replace(/\*\*|\*/g, '')
      .replace(/\[([^\]]+)\]/g, '$1'),
  );
}
for (const [index, sourcePage] of blocks.entries()) {
  const content = serviceCopy[index];
  test(`source page ${index + 1}: exact rendered copy, SEO, CTA and responsive layout`, async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`/services/${content.slug}`);
    await page.evaluate(() => document.fonts.ready);
    const title = sourcePage[3].match(/\*\*SEO Title:\*\* (.+)/)![1];
    const description = sourcePage[3].match(/\*\*Meta Description:\*\* (.+)/)![1];
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', description);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      'content',
      description,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(`/services/${content.slug}$`),
    );
    await expect(page.locator('h1')).toHaveCount(1);
    const text = await page.locator('[data-copy-unit], [data-copy-cta]').allTextContents();
    expect(normalise(text.join(' '))).toBe(visibleSource(sourcePage[3]));
    const buttons = page.locator('[data-copy-cta] a');
    for (const button of await buttons.all()) {
      await expect(button).toHaveAttribute('href', /^\/contact\?service=/);
    }
    if (index === 0)
      await expect(page.getByRole('button', { name: 'Chat with us on WhatsApp' })).toBeDisabled();
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, targets: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath(`${content.slug}.png`), fullPage: true });
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await expect
        .poll(() => page.evaluate(() => document.documentElement.scrollWidth), {
          message: `Viewport ${width}`,
        })
        .toBe(width);
    }
    await buttons.first().click();
    await expect(page).toHaveURL(/\/contact\?service=/);
    await expect(page.locator('#interest')).not.toHaveValue('Free brand audit');
  });
}
