'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpotlightCard from './react-bits/spotlight-card';
import { ShinyText } from './react-bits/shiny-text';
import { Badge } from './shadcn/badge';
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Palette,
  Film,
  Code2,
  TrendingUp,
  Users,
  Rocket,
  CheckCircle2,
} from 'lucide-react';
import { growthLevers } from '@/data/agency';

export interface EnhancedGrowthLever {
  title: string;
  subtitle: string;
  stage: string;
  eyebrow: string;
  detail: string;
  service: string;
  label: string;
  image: string;
  imageAlt: string;
  metric: string;
  icon: typeof Compass;
  deliverables: string[];
}

export const enhancedGrowthLevers: EnhancedGrowthLever[] = [
  {
    title: growthLevers[0].title, // Strategy
    subtitle: 'Market & Commercial Direction',
    stage: 'PHASE 01 / STRATEGIC ROADMAP',
    eyebrow: 'EACH PART MAKES THE NEXT STRONGER',
    detail: growthLevers[0].detail,
    service: growthLevers[0].service,
    label: growthLevers[0].label,
    image: '/images/strategy-showcase.jpg',
    imageAlt: 'Executive strategy command center with real-time analytics and growth intelligence',
    metric: '+180% Strategic Focus',
    icon: Compass,
    deliverables: [
      'Market & Competitor Audit',
      'Growth Roadmap Architecture',
      'Audience Intent Mapping',
      'KPI & Margin Target Model',
    ],
  },
  {
    title: growthLevers[1].title, // Brand
    subtitle: 'Visual Identity & Systems',
    stage: 'PHASE 02 / IDENTITY & POSITIONING',
    eyebrow: 'DISTINCTIVE PRESENCE EVERYWHERE',
    detail: growthLevers[1].detail,
    service: growthLevers[1].service,
    label: growthLevers[1].label,
    image: '/images/creative-showcase.jpg',
    imageAlt: 'Luxury brand identity showcase featuring bespoke typography, stationary and guidelines',
    metric: '100% Brand Consistency',
    icon: Palette,
    deliverables: [
      'Positioning & Narrative Playbook',
      'Logomark & Iconography Suite',
      'Typography & Color System',
      'Brand Collateral Guidelines',
    ],
  },
  {
    title: growthLevers[2].title, // Content
    subtitle: 'Studio Production & Motion',
    stage: 'PHASE 03 / EDITORIAL CREATIVE',
    eyebrow: 'MAKE THE THINKING WORTH SEEING',
    detail: growthLevers[2].detail,
    service: growthLevers[2].service,
    label: growthLevers[2].label,
    image: '/images/production-studio.webp',
    imageAlt: 'Cinema camera rig in a professional studio production set',
    metric: '4.6x Higher Engagement',
    icon: Film,
    deliverables: [
      'Content Calendar Matrix',
      '4K Video & Studio Photography',
      'High-Impact Social Reels',
      'Authority & Editorial Articles',
    ],
  },
  {
    title: growthLevers[3].title, // Website
    subtitle: 'High-Performance Web Architecture',
    stage: 'PHASE 04 / DIGITAL EXPERIENCE',
    eyebrow: 'FRICTIONLESS CONVERSION PATHWAYS',
    detail: growthLevers[3].detail,
    service: growthLevers[3].service,
    label: growthLevers[3].label,
    image: '/images/technology-showcase.jpg',
    imageAlt: 'Responsive web platform and mobile dashboard interface on MacBook Pro',
    metric: '99+ Core Web Vitals',
    icon: Code2,
    deliverables: [
      'Next.js Custom Codebase',
      'Conversion Rate Optimization',
      'Interactive UI Design System',
      'WCAG AAA Accessibility',
    ],
  },
  {
    title: growthLevers[4].title, // Traffic
    subtitle: 'Targeted Paid & Search Signals',
    stage: 'PHASE 05 / PERFORMANCE MARKETING',
    eyebrow: 'REACH HIGH-INTENT AUDIENCES',
    detail: growthLevers[4].detail,
    service: growthLevers[4].service,
    label: growthLevers[4].label,
    image: '/images/hero-performance-marketing.webp',
    imageAlt: 'High-velocity performance marketing analytics and mobile user acquisition curves',
    metric: '3.8x Blended ROAS',
    icon: TrendingUp,
    deliverables: [
      'Google Paid Search Intent',
      'Meta & LinkedIn Ads Scaling',
      'High-Intent Retargeting Flow',
      'Search Signal Discovery',
    ],
  },
  {
    title: growthLevers[5].title, // Leads
    subtitle: 'Full-Funnel Pipeline & CRM Sync',
    stage: 'PHASE 06 / PIPELINE CONVERSION',
    eyebrow: 'TURN ATTENTION INTO SIGNED REVENUE',
    detail: growthLevers[5].detail,
    service: growthLevers[5].service,
    label: growthLevers[5].label,
    image: '/images/leads-pipeline-showcase.jpg',
    imageAlt: 'MyBrandsBuddy automated customer conversion funnel and CRM integration dashboard',
    metric: '+62% Inbound Pipeline',
    icon: Users,
    deliverables: [
      'High-Converting Form Capture',
      'Instant Lead Routing to CRM',
      'Automated Booking Schedules',
      'Multi-Touch Follow-Up Triggers',
    ],
  },
  {
    title: growthLevers[6].title, // Growth
    subtitle: 'Predictable Compounding & Scale',
    stage: 'PHASE 07 / REVENUE ACCELERATION',
    eyebrow: 'SUSTAINED COMPOUNDING MOMENTUM',
    detail: growthLevers[6].detail,
    service: growthLevers[6].service,
    label: growthLevers[6].label,
    image: '/images/growth-engine-showcase.jpg',
    imageAlt: 'MyBrandsBuddy executive analytics command center showing compounding YoY revenue growth',
    metric: '+85% YoY Compounding',
    icon: Rocket,
    deliverables: [
      'Cohort Retention Modeling',
      'CAC / LTV Profit Optimization',
      'Cross-Channel Budget Rebalance',
      'Executive Reporting Dashboard',
    ],
  },
];

export function GrowthEcosystem() {
  const [active, setActive] = useState(0);
  const item = enhancedGrowthLevers[active];
  const ActiveIcon = item.icon;

  return (
    <div className="growth-system">
      {/* Left side: Interactive Lever Selection Group with Hover Trigger */}
      <div className="growth-tabs" role="group" aria-label="Explore growth levers">
        {enhancedGrowthLevers.map((lever, i) => {
          const isActive = active === i;
          const LeverIcon = lever.icon;
          return (
            <button
              key={lever.title}
              onClick={() => setActive(i)}
              onPointerEnter={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={isActive}
              className={`growth-tab-btn ${isActive ? 'active' : ''}`}
            >
              <div className="growth-tab-left">
                <span className="growth-tab-num">0{i + 1}</span>
                <div className="growth-tab-text">
                  <span className="growth-tab-title">{lever.title}</span>
                  <span className="growth-tab-sub">{lever.subtitle}</span>
                </div>
              </div>

              <div className="growth-tab-right">
                <LeverIcon
                  size={16}
                  className={`growth-tab-icon ${isActive ? 'active-icon' : ''}`}
                  aria-hidden="true"
                />
                <ArrowUpRight
                  size={17}
                  className={`growth-tab-arrow ${isActive ? 'active-arrow' : ''}`}
                  aria-hidden="true"
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right side: Modern ReactBits Spotlight Card & Preloaded Image Showcase */}
      <SpotlightCard
        className="growth-explanation"
        spotlightColor="rgba(192, 132, 252, 0.22)"
        aria-live="polite"
      >
        {/* Background Editorial Oversized Index */}
        <span className="oversized-index" aria-hidden="true">
          0{active + 1}
        </span>

        {/* Media Frame with Instant Preloaded Cross-Fading Layers */}
        <div className="growth-media-frame">
          {enhancedGrowthLevers.map((lever, idx) => (
            <div
              key={lever.title}
              className={`growth-image-layer ${active === idx ? 'is-active' : ''}`}
              aria-hidden={active !== idx}
            >
              <Image
                src={lever.image}
                alt={lever.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="growth-showcase-img"
                priority
              />
              <div className="growth-image-overlay" />
            </div>
          ))}

          {/* Floating Top Badges */}
          <div className="growth-floating-badges">
            <Badge
              variant="glow"
              className="backdrop-blur-md bg-black/65 border-purple-400/40 text-purple-200 shadow-lg px-3 py-1"
            >
              <Sparkles size={12} className="text-purple-300" aria-hidden="true" />
              <ShinyText text={item.stage} speed={3.5} className="font-semibold tracking-wider text-[11px]" />
            </Badge>

            <div className="growth-metric-chip">
              <TrendingUp size={13} className="text-emerald-400" aria-hidden="true" />
              <span className="text-purple-100 font-semibold">{item.metric}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content Panel matching active lever */}
        <div key={item.title} className="panel-swap growth-content-body">
          <div className="growth-content-top">
            <div className="growth-eyebrow-row">
              <span className="growth-pulse-dot" aria-hidden="true" />
              <span className="eyebrow">{item.eyebrow}</span>
            </div>

            <div className="growth-heading-row">
              <h3>{item.title}</h3>
              <span className="growth-category-tag">
                <ActiveIcon size={14} className="text-purple-400" aria-hidden="true" />
                {item.subtitle}
              </span>
            </div>

            <p className="growth-description">{item.detail}</p>

            {/* Deliverables using Shadcn Badges */}
            <div className="growth-deliverables">
              <span className="growth-deliverables-title">Key Capabilities & Deliverables:</span>
              <div className="growth-badge-list">
                {item.deliverables.map((deliv) => (
                  <Badge
                    key={deliv}
                    variant="outline"
                    className="growth-deliverable-badge"
                  >
                    <CheckCircle2 size={12} className="text-purple-400 flex-shrink-0" aria-hidden="true" />
                    <span>{deliv}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="growth-action-footer">
            <Link className="text-link group" href={`/services/${item.service}`}>
              <span>{item.label}</span>
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>
            <span className="growth-step-counter">STEP 0{active + 1} OF 07</span>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export default GrowthEcosystem;
