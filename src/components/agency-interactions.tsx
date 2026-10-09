'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SpotlightCard from './react-bits/spotlight-card';
import {
  ArrowUpRight,
  Search,
  Sparkles,
  Monitor,
  Aperture,
  ChartNoAxesCombined,
  Pause,
  Play,
} from 'lucide-react';
import { growthLevers, industryStories } from '@/data/agency';
import { Rocket3D } from './rocket-3d';
import { OrbitingCircles } from './react-bits/orbiting-circles';
import { Starfield } from './react-bits/starfield';
import { Badge } from './shadcn/badge';
import { cn } from '@/lib/utils';

const planets = [
  {
    id: 'strategy',
    title: 'Strategy',
    icon: Sparkles,
    detail: 'A clear direction.',
    slug: 'business-marketing-consulting',
    orbit: 1,
    duration: 28,
    delay: 0,
    reverse: false,
    accent: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.45)',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: Search,
    detail: 'A reason to get noticed.',
    slug: 'social-media-marketing',
    orbit: 1,
    duration: 28,
    delay: 14,
    reverse: false,
    accent: '#34d399',
    glow: 'rgba(52, 211, 153, 0.45)',
  },
  {
    id: 'creative',
    title: 'Creative',
    icon: Aperture,
    detail: 'An unmistakable presence.',
    slug: 'graphic-design',
    orbit: 2,
    duration: 38,
    delay: 0,
    reverse: true,
    accent: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.45)',
  },
  {
    id: 'growth',
    title: 'Growth',
    icon: ChartNoAxesCombined,
    detail: 'A considered next move.',
    slug: 'performance-marketing',
    orbit: 2,
    duration: 38,
    delay: 19,
    reverse: true,
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.45)',
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: Monitor,
    detail: 'An experience that works.',
    slug: 'website-development',
    orbit: 3,
    duration: 48,
    delay: 8,
    reverse: false,
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.45)',
  },
];

export function HeroEcosystem() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const r1 = isMobile ? 85 : 120;
  const r2 = isMobile ? 130 : 185;
  const r3 = isMobile ? 175 : 250;

  const getRadius = (orbit: number) => {
    switch (orbit) {
      case 1:
        return r1;
      case 2:
        return r2;
      case 3:
      default:
        return r3;
    }
  };

  const currentIdx = hovered !== null ? hovered : active;

  return (
    <div
      className="hero-system relative flex items-center justify-center w-full min-h-[500px] md:min-h-[560px] lg:min-h-[600px] select-none overflow-visible md:-translate-y-8 lg:-translate-y-14"
      role="region"
      aria-label="Solar System capability explorer"
    >
      {/* Background Starfield Cosmic Dust */}
      <Starfield count={40} />

      {/* Decorative Star Dust Crosses */}
      <span className="system-cross cross-one opacity-40 select-none" aria-hidden="true">
        +
      </span>
      <span className="system-cross cross-two opacity-40 select-none" aria-hidden="true">
        +
      </span>

      {/* Planetary Solar System Orbit Container (Full unclipped circular space) */}
      <div className="relative flex items-center justify-center w-full h-[500px] md:h-[560px] lg:h-[600px]">
        {/* Full Orbit Circles */}
        <OrbitingCircles radius={r1} path strokeColor="rgba(192, 132, 252, 0.25)" strokeDasharray="4 6" />
        <OrbitingCircles radius={r2} path strokeColor="rgba(168, 85, 247, 0.2)" strokeDasharray="5 7" />
        <OrbitingCircles radius={r3} path strokeColor="rgba(147, 51, 234, 0.16)" strokeDasharray="6 8" />

        {/* Orbiting Capability Badges */}
        {planets.map((planet, index) => {
          const Glyph = planet.icon;
          const isSelected = index === currentIdx;
          const radius = getRadius(planet.orbit);

          return (
            <OrbitingCircles
              key={planet.id}
              radius={radius}
              duration={planet.duration}
              delay={planet.delay}
              reverse={planet.reverse}
              path={false}
              pauseOnHover={false}
              className={cn(
                'z-20 transition-transform duration-300',
                isPaused && '[animation-play-state:paused]'
              )}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                aria-label={`Explore ${planet.title}: ${planet.detail}`}
                aria-pressed={isSelected}
                className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full"
              >
                <Badge
                  variant="planet"
                  active={isSelected}
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium tracking-wide shadow-xl border border-white/15 bg-[#161028]/95 backdrop-blur-md transition-all duration-300 hover:scale-105"
                  style={{
                    boxShadow: isSelected
                      ? `0 0 22px ${planet.glow}, 0 4px 14px rgba(0,0,0,0.5)`
                      : '0 4px 14px rgba(0,0,0,0.4)',
                    borderColor: isSelected ? planet.accent : undefined,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: planet.accent }}
                    aria-hidden="true"
                  />
                  <Glyph
                    size={14}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: planet.accent }}
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-white">{planet.title}</span>
                </Badge>
              </button>
            </OrbitingCircles>
          );
        })}
      </div>

      {/* Center 3D Space Rocket (Floating upright with no lower text slogan) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="pointer-events-auto">
          <Rocket3D
            showText={false}
            onLaunchClick={() => {
              setActive((prev) => (prev + 1) % planets.length);
            }}
          />
        </div>
      </div>
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
