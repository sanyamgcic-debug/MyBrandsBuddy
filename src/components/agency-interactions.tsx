'use client';
import SpotlightCard from './react-bits/spotlight-card';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Rocket,
  Search,
  Sparkles,
  Monitor,
  Aperture,
  ChartNoAxesCombined,
} from 'lucide-react';
import { growthLevers, industryStories } from '@/data/agency';
const orbitItems = [
  {
    title: 'Strategy',
    icon: Sparkles,
    detail: 'A clear direction.',
    slug: 'business-marketing-consulting',
  },
  {
    title: 'Creative',
    icon: Aperture,
    detail: 'An unmistakable presence.',
    slug: 'graphic-design',
  },
  {
    title: 'Technology',
    icon: Monitor,
    detail: 'An experience that works.',
    slug: 'website-development',
  },
  {
    title: 'Marketing',
    icon: Search,
    detail: 'A reason to get noticed.',
    slug: 'social-media-marketing',
  },
  {
    title: 'Growth',
    icon: ChartNoAxesCombined,
    detail: 'A considered next move.',
    slug: 'performance-marketing',
  },
];
export function HeroEcosystem() {
  const [active, setActive] = useState(0);
  const item = orbitItems[active];
  return (
    <div className="hero-system">
      <div className="system-rings" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="system-center">
          <Rocket strokeWidth={1} />
          <small>
            YOUR NEXT
            <br />
            BIG THING
          </small>
        </span>
      </div>
      <div className="orbit-controls" role="group" aria-label="Explore our capabilities">
        {orbitItems.map((o, i) => {
          const Glyph = o.icon;
          return (
            <button
              key={o.title}
              className={`orbit-node node-${i} ${i === active ? 'selected' : ''}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <Glyph size={17} aria-hidden="true" />
              <span>{o.title}</span>
            </button>
          );
        })}
      </div>
      <div className="system-caption" aria-live="polite">
        <span>CONNECTED BY DESIGN</span>
        <Link href={`/services/${item.slug}`}>
          {item.detail}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <span className="system-cross cross-one" aria-hidden="true">
        +
      </span>
      <span className="system-cross cross-two" aria-hidden="true">
        +
      </span>
    </div>
  );
}
export function GrowthEcosystem() {
  const [active, setActive] = useState(0);
  const item = growthLevers[active];
  return (
    <div className="growth-system">
      <div className="growth-tabs" role="group" aria-label="Explore growth levers">
        {growthLevers.map((lever, i) => (
          <button
            key={lever.title}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={active === i ? 'active' : ''}
          >
            <span>0{i + 1}</span>
            {lever.title}
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        ))}
      </div>
      <SpotlightCard className="growth-explanation" aria-live="polite">
        <span className="oversized-index" aria-hidden="true">
          0{active + 1}
        </span>
        <div key={item.title} className="panel-swap">
          <span className="eyebrow">Each part makes the next stronger</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
          <Link className="text-link" href={`/services/${item.service}`}>
            {item.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </SpotlightCard>
    </div>
  );
}
export function Industries() {
  const [active, setActive] = useState(0);
  const item = industryStories[active];
  return (
    <div className="industry-explorer">
      <div className="industry-options" role="group" aria-label="Explore your industry">
        {industryStories.map((industry, i) => (
          <button
            key={industry.name}
            className={active === i ? 'active' : ''}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {industry.name}
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
      <SpotlightCard className="industry-story" aria-live="polite">
        <span className="eyebrow">A plan shaped around your world</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <Link className="text-link" href={`/services/${item.slug}`}>
          Explore the approach
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </SpotlightCard>
    </div>
  );
}
