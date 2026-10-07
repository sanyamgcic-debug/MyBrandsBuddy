// This migration is retained for provenance and must not overwrite the editable catalog.
import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
// One-time migration helper: move presentation copy into a typed editable catalog.
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((item) =>
      item.isDirectory() ? walk(path.join(dir, item.name)) : [path.join(dir, item.name)],
    );
if (fs.existsSync('src/data/copy.ts'))
  throw new Error('Copy is already extracted. Edit src/data/copy.ts directly.');
const catalog = {};
for (const file of [...walk('src/app'), ...walk('src/components')].filter(
  (p) => p.endsWith('.tsx') && !p.includes('opengraph-image'),
)) {
  let source = fs.readFileSync(file, 'utf8');
  if (source.includes('@/data/copy')) continue;
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const group = file
    .replaceAll('\\', '/')
    .replace('src/', '')
    .replace('/page.tsx', '')
    .replace('.tsx', '')
    .replaceAll('[slug]', 'detail')
    .replaceAll('/', '_');
  const entries = {};
  const edits = [];
  function add(node, text, attribute = false) {
    if (!/[A-Za-z]/.test(text)) return;
    const normalized = text.replace(/\s+/g, ' ').trim();
    let key =
      normalized
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .split(' ')
        .slice(0, 7)
        .filter(Boolean)
        .join('_') || 'text';
    let i = 2;
    const base = key;
    while (key in entries && entries[key] !== text) key = `${base}_${i++}`;
    entries[key] = text;
    edits.push({
      start: attribute ? node.getStart(ast) : node.pos,
      end: node.end,
      replacement: `{copy.${group}.${key}}`,
    });
  }
  function visit(node) {
    if (ts.isJsxText(node) && node.text.trim()) add(node, node.text);
    if (
      ts.isJsxAttribute(node) &&
      ['eyebrow', 'title', 'description', 'placeholder'].includes(node.name.getText(ast)) &&
      node.initializer &&
      ts.isStringLiteral(node.initializer)
    )
      add(node.initializer, node.initializer.text, true);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  if (!edits.length) continue;
  catalog[group] = entries;
  for (const edit of edits.sort((a, b) => b.start - a.start))
    source = source.slice(0, edit.start) + edit.replacement + source.slice(edit.end);
  const directive = source.startsWith('"use client";') ? source.indexOf('\n') + 1 : 0;
  source =
    source.slice(0, directive) + "import { copy } from '@/data/copy';\n" + source.slice(directive);
  fs.writeFileSync(file, source);
}
fs.writeFileSync(
  'src/data/copy.ts',
  '// Editable headings, labels and page prose. Grouped by route/component.\nexport const copy = ' +
    JSON.stringify(catalog, null, 2) +
    ' as const;\n',
);
console.log(`Extracted copy from ${Object.keys(catalog).length} page and component modules.`);
