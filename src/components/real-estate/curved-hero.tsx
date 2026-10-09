'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { RotatingBadge } from './rotating-badge';

export function CurvedHero() {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden architectural-grid-bg">
      {/* Decorative ambient brand purple atmospheric glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8b5cf6]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">

        {/* Hero Typography: High Contrast, Dramatic Scale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#a855f7] mb-3 font-semibold">
              01 // Architectural Distinction & Launch Cinema
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              A Property is a Place.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#c8a4ff] font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                Make People Feel It.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6">
              Connect high-contrast cinematic walkthrough films, paid high-intent buyer campaigns,
              and bespoke developer positioning into one unmissable launch story.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="re-glow-btn px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2 cursor-pointer"
              >
                Launch With Us
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#catalog"
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                View Catalog
              </a>
            </div>
          </div>
        </div>

        {/* Fluid Curved Architectural Framing Above the Fold - Full Width Stature */}
        <div className="relative">
          <div className="curved-hero-frame relative w-full h-[520px] sm:h-[620px] md:h-[720px] lg:h-[820px] bg-[#0c0c10] group overflow-hidden rounded-[32px] sm:rounded-[48px]">
            {/* Authentic High-Resolution Architectural Masterpiece Visual */}
            <Image
              src="/images/real-estate/copenhagen-curved-hero.jpg"
              alt="High-contrast modern sculptural organic curved building facade in Copenhagen at dusk"
              fill
              priority
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-black/20 to-black/30 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/60 via-transparent to-transparent pointer-events-none z-10" />

            {/* Architectural Frame Top Tag */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-white/90">
                SCULPTURAL FAÇADE // COPENHAGEN
              </span>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[#8b5cf6]/20 backdrop-blur-md border border-[#8b5cf6]/40 text-[10px] font-mono tracking-widest uppercase text-[#c8a4ff]">
                CINEMATIC PERSPECTIVE
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 max-w-md">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#a855f7] block mb-1">
                Visual Concept
              </span>
              <p className="text-xs sm:text-sm text-white/80 font-light backdrop-blur-sm bg-black/40 p-2.5 rounded-xl border border-white/10">
                Monochrome structural rhythm with curvilinear louvers framing the urban waterfront.
              </p>
            </div>
          </div>

          {/* Circular Rotating Text Badge Overlapping the Curved Frame Corner */}
          <div className="absolute -bottom-10 right-4 sm:-bottom-12 sm:right-12 z-20">
            <RotatingBadge
              text="• LUXURY ARCHITECTURE • CINEMATIC FILM • MYBRANDSBUDDY REAL ESTATE "
              targetId="catalog"
            />
          </div>
        </div>

        {/* Quick Architectural Value Proof Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10">
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              ₹140M<span className="text-[#8b5cf6]">+</span>
            </span>
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest mt-1 block">
              Asset Value Showcased
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              4.8<span className="text-[#8b5cf6]">x</span>
            </span>
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest mt-1 block">
              Verified Enquiry Rate
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              100<span className="text-[#8b5cf6]">%</span>
            </span>
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest mt-1 block">
              Cinematic Production
            </span>
          </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              7-14<span className="text-[#8b5cf6]">d</span>
            </span>
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest mt-1 block">
              Campaign Turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
