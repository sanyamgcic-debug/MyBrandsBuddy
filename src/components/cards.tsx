import { copy } from '@/data/copy';
import Link from 'next/link';
import {
  ArrowUpRight,
  Utensils,
  Scissors,
  GraduationCap,
  Search,
  Camera as Instagram,
  Sparkles,
} from 'lucide-react';
import type { Service } from '@/data/services';
import type { CaseStudy } from '@/data/case-studies';
import type { Article } from '@/data/blog';
import { Icon } from './icon';
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="card-top">
        <span className="icon-tile">
          <Icon name={service.icon} />
        </span>
        <span className="card-index">0{index + 1}</span>
      </div>
      <h3>{service.shortTitle}</h3>
      <p>{service.description}</p>
      <span className="text-link">
        {copy.components_cards.explore_service}
        <ArrowUpRight size={17} aria-hidden="true" />
      </span>
    </Link>
  );
}
export function CaseCard({ study }: { study: CaseStudy }) {
  const Glyph =
    study.theme === 'restaurant' ? Utensils : study.theme === 'salon' ? Scissors : GraduationCap;
  return (
    <Link className="case-card" href={`/case-studies/${study.slug}`}>
      <div className={`case-art ${study.theme}`}>
        <span className="art-tag">
          {study.category} · {study.location}
        </span>
        <Glyph aria-hidden="true" strokeWidth={0.9} />
        <div className="art-word">
          {study.theme === 'restaurant'
            ? 'Good food.\nGreat discovery.'
            : study.theme === 'salon'
              ? 'A little beauty.\nA bigger audience.'
              : 'Local expertise.\nLimitless classrooms.'}
        </div>
        <span className="art-arrow">
          <ArrowUpRight aria-hidden="true" />
        </span>
      </div>
      <div className="case-card-body">
        <span className="tiny-label">{copy.components_cards.illustrative_growth_plan}</span>
        <h3>{study.name}</h3>
        <p>{study.summary}</p>
        <span className="text-link">
          {copy.components_cards.explore_the_strategy}
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
export function ArticleCard({ article }: { article: Article }) {
  const Glyph =
    article.theme === 'search' ? Search : article.theme === 'social' ? Instagram : Sparkles;
  return (
    <Link href={`/blog/${article.slug}`} className="article-card">
      <div className={`article-art ${article.theme}`}>
        <Glyph aria-hidden="true" strokeWidth={1} />
        <span>
          {article.theme === 'search'
            ? 'Be found.'
            : article.theme === 'social'
              ? 'Be connected.'
              : 'Be intentional.'}
        </span>
        <ArrowUpRight className="article-arrow" aria-hidden="true" />
      </div>
      <div className="article-body">
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="text-link">
          {copy.components_cards.read_the_guide}
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
