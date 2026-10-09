'use client';

import Image from 'next/image';
import { ServiceMotionGraphic } from './service-motion-graphics';
import './service-scenes.css';
import './motion-graphics.css';

export const SERVICE_HERO_CONFIG: Record<
  string,
  {
    src: string;
    alt: string;
    hudTitle: string;
    hudAccent: string;
  }
> = {
  'seo-local-search': {
    src: '/images/hero-seo-local-search.webp',
    alt: 'A glowing location pin standing out among many dim pins on a city map, with a magnifying glass beside it.',
    hudTitle: 'SEO & LOCAL SEARCH // LIVE DISCOVERY',
    hudAccent: '#7c3aed',
  },
  'social-media-marketing': {
    src: '/images/hero-social-media.webp',
    alt: 'Floating phone screens with abstract social media posts, reactions and a content calendar linked by glowing light trails.',
    hudTitle: 'SOCIAL MEDIA MARKETING // VIRAL RHYTHM',
    hudAccent: '#a855f7',
  },
  'branding-brand-strategy': {
    src: '/images/hero-branding.webp',
    alt: 'A brand board showing a sketched logo mark becoming a finished one, beside colour swatches and a positioning compass.',
    hudTitle: 'BRAND IDENTITY & STRATEGY // SYSTEM SPECIMEN',
    hudAccent: '#8b5cf6',
  },
  'business-marketing-consulting': {
    src: '/images/hero-consulting.webp',
    alt: 'A glowing roadmap across a dark board, with several paths converging on one bright destination.',
    hudTitle: 'BUSINESS CONSULTING // STRATEGIC ROADMAP',
    hudAccent: '#c4a5ff',
  },
  'business-loan-assistance': {
    src: '/images/hero-loan-guidance.webp',
    alt: 'An organised document folder and calculator beside a small shopfront climbing a short staircase.',
    hudTitle: 'BUSINESS LOAN GUIDANCE // STAGED GROWTH',
    hudAccent: '#a78bfa',
  },
  'website-development': {
    src: '/images/hero-website-development.webp',
    alt: 'A laptop and phone shown in layers, from wireframe to finished page, with a cursor about to click a button.',
    hudTitle: 'WEBSITE DEVELOPMENT // LAYERED ARCHITECTURE',
    hudAccent: '#8b5cf6',
  },
  'graphic-design': {
    src: '/images/hero-graphic-design.webp',
    alt: 'A branded stationery set with a monogram business card, colour swatches and a glowing pen-tool curve.',
    hudTitle: 'GRAPHIC DESIGN // BRAND IDENTITY SUITE',
    hudAccent: '#7c3aed',
  },
  'video-production': {
    src: '/images/hero-video-editing-production.webp',
    alt: 'A glowing video editing timeline with clips, a playhead and a colour-grading wheel.',
    hudTitle: 'VIDEO PRODUCTION & EDITING // 3D TIMELINE',
    hudAccent: '#9333ea',
  },
  'photography-videography': {
    src: '/images/hero-photography-videography.webp',
    alt: 'A cinema camera and studio lighting set up around a product on a pedestal.',
    hudTitle: 'COMMERCIAL PHOTOGRAPHY // STUDIO LIGHTING',
    hudAccent: '#c084fc',
  },
  'iphone-camera-shoots': {
    src: '/images/hero-iphone-camera-shoots.webp',
    alt: 'A phone on a gimbal beside a small camera and ring light, with a vertical video frame floating above.',
    hudTitle: 'IPHONE & CAMERA SHOOTS // 9:16 REEL SYSTEM',
    hudAccent: '#a855f7',
  },
  'content-creation': {
    src: '/images/hero-content-creation.webp',
    alt: 'A glowing lightbulb surrounded by floating scripts, captions, storyboard frames and carousel slides.',
    hudTitle: 'CONTENT CREATION // MULTI-FORMAT EDITORIAL',
    hudAccent: '#8b5cf6',
  },
  'performance-marketing': {
    src: '/images/hero-performance-marketing.webp',
    alt: 'A glass funnel turning many glowing particles into one bright orb, beside rising bars and a target.',
    hudTitle: 'PERFORMANCE MARKETING // CONVERSION ENGINE',
    hudAccent: '#7c3aed',
  },
  'real-estate-marketing': {
    src: '/images/hero-real-estate.webp',
    alt: 'A lit contemporary courtyard home at dusk with a location pin and a small drone above it.',
    hudTitle: 'REAL ESTATE MARKETING // DUSK RESIDENCE',
    hudAccent: '#ff1a3c',
  },
};

export function ServiceScene({ theme, slug }: { theme: string; slug?: string }) {
  const config = (slug && SERVICE_HERO_CONFIG[slug]) || null;

  if (config) {
    return (
      <div className="motion-graphic-stage group relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0713]">
        {/* Ambient Purple Back Glow */}
        <div
          className="absolute -top-12 -right-12 w-72 h-72 bg-[#7c3aed]/20 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#c4a5ff]/15 rounded-full blur-[90px] pointer-events-none"
          aria-hidden="true"
        />

        {/* 4:3 3D Editorial Render Image */}
        <Image
          src={config.src}
          alt={config.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Left & Bottom Edge Vignette Gradient Fades smoothly into page */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a0713]/85 via-transparent to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0713]/85 via-transparent to-[#0a0713]/20 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Floating Top HUD Tag */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider uppercase text-white/90 shadow-lg">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: config.hudAccent }}
            />
            <span>{config.hudTitle}</span>
          </div>
        </div>

        {/* Floating Bottom Metadata Badge */}
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest uppercase text-white/60">
            <span>MYBRANDSBUDDY // 3D EDITORIAL</span>
          </div>
        </div>
      </div>
    );
  }

  return <ServiceMotionGraphic theme={theme} slug={slug} />;
}
