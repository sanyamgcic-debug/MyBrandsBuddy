"use client";
import { useState } from 'react';
import { caseStudies, caseStudyDisclosure } from '@/data/case-studies';
import { articles } from '@/data/blog';
import { CaseCard, ArticleCard } from './cards';
export function FilterGrid({ kind }: { kind: 'cases' | 'blog' }) { const [active, setActive] = useState('All'); const items = kind === 'cases' ? caseStudies : articles; const categories = ['All', ...new Set(items.map(item => item.category))]; const count = items.filter(item => active === 'All' || item.category === active).length;
 return <><div className="filter-bar" role="group" aria-label={kind === 'cases' ? 'Filter by industry' : 'Filter by topic'}>{categories.map(category => <button key={category} className={active === category ? 'filter active' : 'filter'} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}</div><span className="sr-only" aria-live="polite">Showing {count} {kind === 'cases' ? 'growth plans' : 'articles'}</span>{kind === 'cases' && <p className="disclosure">{caseStudyDisclosure}</p>}<div className="grid-three">{kind === 'cases' ? caseStudies.filter(item => active === 'All' || item.category === active).map(item => <CaseCard key={item.slug} study={item}/>) : articles.filter(item => active === 'All' || item.category === active).map(item => <ArticleCard key={item.slug} article={item}/>)}</div></>;
}
