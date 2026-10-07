'use client';
import { copy } from '@/data/copy';
import { blogCategories } from '@/data/agency';
import { useState } from 'react';
import { caseStudies, caseStudyDisclosure } from '@/data/case-studies';
import { articles } from '@/data/blog';
import { CaseCard, ArticleCard } from './cards';
export function FilterGrid({ kind }: { kind: 'cases' | 'blog' }) {
  const [active, setActive] = useState('All');
  const items = kind === 'cases' ? caseStudies : articles;
  const categories =
    kind === 'blog' ? blogCategories : ['All', ...new Set(items.map((item) => item.category))];
  const count = items.filter((item) => active === 'All' || item.category === active).length;
  return (
    <>
      <div
        className="filter-bar"
        role="group"
        aria-label={kind === 'cases' ? 'Filter by industry' : 'Filter by topic'}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? 'filter active' : 'filter'}
            onClick={() => setActive(category)}
            aria-pressed={active === category}
          >
            {category}
          </button>
        ))}
      </div>
      <span className="sr-only" aria-live="polite">
        {copy.components_filter_grid.showing}
        {count} {kind === 'cases' ? 'growth plans' : 'articles'}
      </span>
      {kind === 'cases' && <p className="disclosure">{caseStudyDisclosure}</p>}
      {count === 0 && (
        <div className="insights-empty">
          <span className="eyebrow">A new chapter in the journal</span>
          <h2>More thinking on {active.toLowerCase()}, coming soon.</h2>
          <p>Explore our existing guides while we develop the next collection.</p>
          <button className="button button-secondary" onClick={() => setActive('All')}>
            Explore all insights
          </button>
        </div>
      )}
      <div className="grid-three">
        {kind === 'cases'
          ? caseStudies
              .filter((item) => active === 'All' || item.category === active)
              .map((item) => <CaseCard key={item.slug} study={item} />)
          : articles
              .filter((item) => active === 'All' || item.category === active)
              .map((item) => <ArticleCard key={item.slug} article={item} />)}
      </div>
    </>
  );
}
