import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export const slugs = [
  'social-media-marketing',
  'branding-brand-strategy',
  'business-marketing-consulting',
  'business-loan-assistance',
  'website-development',
  'graphic-design',
  'video-production',
  'photography-videography',
  'iphone-camera-shoots',
  'content-creation',
  'performance-marketing',
  'real-estate-marketing',
];
export function parseSource(source) {
  const chunks = [
    ...source
      .replace(/\r\n/g, '\n')
      .matchAll(/^# PAGE (\d+): (.+)\n([\s\S]*?)(?=^# PAGE |^# SITE-WIDE: Closing|$(?![\s\S]))/gm),
  ];
  if (chunks.length !== 12) throw new Error(`Expected 12 pages, received ${chunks.length}`);
  return chunks.map(([, number, title, body], index) => {
    const field = (name) => {
      const match = body.match(new RegExp(`\\*\\*${name}:\\*\\* (.+)`));
      if (!match) throw new Error(`Missing ${name} on ${title}`);
      return match[1];
    };
    const intro = body.split('**Intro:**\n')[1].split('\n## ')[0].trim().split(/\n\n+/);
    const content = body
      .slice(body.indexOf('\n## ') + 1)
      .split('**Call to Action:**')[0]
      .trim();
    const sections = [...content.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(
      ([, heading, text]) => {
        const blocks = [];
        const lines = text.trim().split('\n');
        for (let i = 0; i < lines.length;) {
          const line = lines[i];
          if (!line.trim()) {
            i++;
            continue;
          }
          if (line.startsWith('### ')) {
            blocks.push({ kind: 'h3', text: line.slice(4) });
            i++;
            continue;
          }
          const ordered = /^\d+\. /.test(line);
          if (ordered || line.startsWith('- ')) {
            const items = [];
            const pattern = ordered ? /^\d+\. / : /^- /;
            while (i < lines.length && pattern.test(lines[i]))
              items.push(lines[i++].replace(pattern, ''));
            blocks.push({ kind: ordered ? 'ol' : 'ul', items });
            continue;
          }
          if (heading === 'FAQs' && /^\*\*.+\*\*$/.test(line)) {
            const question = line.slice(2, -2);
            const answer = [];
            i++;
            while (i < lines.length && lines[i].trim()) answer.push(lines[i++]);
            blocks.push({ kind: 'faq', question, answer: answer.join('\n') });
            continue;
          }
          const paragraph = [];
          while (i < lines.length && lines[i].trim() && !lines[i].startsWith('### '))
            paragraph.push(lines[i++]);
          blocks.push({ kind: 'p', text: paragraph.join('\n') });
        }
        return { heading, blocks };
      },
    );
    const cta = body
      .split('**Call to Action:**\n')[1]
      .replace(/\n---\s*$/, '')
      .trim();
    return {
      number: Number(number),
      slug: slugs[index],
      title,
      seoTitle: field('SEO Title'),
      metaDescription: field('Meta Description'),
      h1: field('H1'),
      subheadline: field('Subheadline'),
      intro,
      sections,
      cta,
    };
  });
}
const source = readFileSync('Pasted markdown.md', 'utf8');
const result = {
  sourceSha256: createHash('sha256').update(source).digest('hex'),
  pages: parseSource(source),
};
writeFileSync('src/data/service-copy.json', JSON.stringify(result, null, 2) + '\n');
console.log(`Imported ${result.pages.length} complete pages without rewriting text.`);
