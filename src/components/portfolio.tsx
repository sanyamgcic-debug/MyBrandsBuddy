'use client';
import SpotlightCard from './react-bits/spotlight-card';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { workConcepts, portfolioCategories } from '@/data/agency';
import { ServiceVisual } from './service-visual';
export function Portfolio({ featured = false }: { featured?: boolean }) {
  const [category, setCategory] = useState('All');
  const items = featured
    ? workConcepts.slice(0, 3)
    : workConcepts.filter((p) => category === 'All' || p.category === category);
  return (
    <>
      {!featured && (
        <div className="filter-bar" role="group" aria-label="Filter work concepts">
          {portfolioCategories.map((c) => (
            <button
              className={category === c ? 'filter active' : 'filter'}
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className={`portfolio-grid ${featured ? 'featured' : ''}`}>
        {items.map((work) => (
          <Link
            href={`/services/${work.slug}`}
            key={work.title}
            className={`portfolio-card portfolio-${work.size}`}
          >
            <SpotlightCard className="portfolio-image">
              <ServiceVisual theme={work.theme} />
              <span className="concept-badge">CONCEPT DIRECTION · NOT CLIENT WORK</span>
              <span className="portfolio-circle">
                <ArrowUpRight aria-hidden="true" />
              </span>
            </SpotlightCard>
            <div className="portfolio-meta">
              <div>
                <span>{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
              <small>Explore capability ↗</small>
            </div>
          </Link>
        ))}
      </div>
      <p className="portfolio-disclosure">
        A look at our creative direction. These are illustrative concepts; verified client case
        studies will be added when available.
      </p>
    </>
  );
}
