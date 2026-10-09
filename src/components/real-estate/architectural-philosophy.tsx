'use client';

import Image from 'next/image';
import { Camera, Compass, Layers, Sparkles, TrendingUp, Users } from 'lucide-react';

export function ArchitecturalPhilosophy() {
  return (
    <section id="philosophy" className="section-clean-white py-24 md:py-32 relative overflow-hidden architectural-grid-bg-light">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header: Pure White Space with High-Contrast Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-black/10 pb-8">
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold mb-3">
              02 // The Spatial Contrast
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#070709] tracking-tight leading-tight max-w-2xl">
              Square footage alone never sold an icon.{' '}
              <span className="font-serif italic font-normal text-[#8b5cf6]">
                Curvature and emotion do.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base text-[#4a4a55] font-light leading-relaxed">
              When a buyer scrolls through generic real estate portals, listings blur together in
              seconds. We engineer high-contrast cinematic campaigns that frame space, light, and
              architectural distinction.
            </p>
          </div>
        </div>

        {/* Dramatic Curved Architectural Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Sculptural Cantilever */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#070709] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#8b5cf6] mb-8 group-hover:border-[#8b5cf6] transition-colors">
                <Camera size={24} />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#a855f7] block mb-2 font-bold">
                Pillar 01
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                Cinematic Spatial Filming
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                Walkthroughs, anamorphic architectural frames, and interior pace designed around how
                the human eye experiences premium spaces.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
              <span>FPV + GIMBAL 4K</span>
              <span className="text-[#8b5cf6] font-semibold">● ACTIVE</span>
            </div>
          </div>

          {/* Card 2: Asymmetric Arch Curve with Image Preview */}
          <div className="curved-asymmetric-arch p-8 sm:p-10 bg-white border border-black/10 text-[#070709] shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#8b5cf6]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6] text-white flex items-center justify-center mb-8 shadow-md">
                <TrendingUp size={24} />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#8b5cf6] block mb-2 font-bold">
                Pillar 02
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#070709] mb-4">
                Precision Buyer Acquisition
              </h3>
              <p className="text-sm text-[#4a4a55] leading-relaxed font-light mb-6">
                Targeted Meta & Google ad funnels reaching verified high-net-worth investors, NRI
                buyers, and luxury lifestyle seekers.
              </p>
            </div>
            <div className="pt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#4a4a55]">
              <span>ZERO TIME-WASTERS</span>
              <span className="font-bold text-[#8b5cf6]">FILTERED LEADS</span>
            </div>
          </div>

          {/* Card 3: Deep Matte Monolith */}
          <div className="p-8 sm:p-10 rounded-[36px] bg-[#070709] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#8b5cf6] mb-8 group-hover:border-[#8b5cf6] transition-colors">
                <Users size={24} />
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#a855f7] block mb-2 font-bold">
                Pillar 03
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                Developer Authority & Prestige
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                Personal branding for elite brokers and architects. We turn individual projects into
                landmark design achievements.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
              <span>FOUNDER STATURE</span>
              <span className="text-[#8b5cf6] font-semibold">● BESPOKE</span>
            </div>
          </div>
        </div>

        {/* High-Contrast Architectural Comparison Strip */}
        <div className="rounded-[40px] bg-black text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a855f7] block mb-2 font-bold">
                The Disconnect
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Standard Portals vs. Our Architectural Narrative
              </h4>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Generic static phone photos attract casual price-shoppers. Cinematic architectural
                storytelling attracts decision-makers ready for serious conversations.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-mono text-white/40 uppercase block mb-2">Common Pitfall</span>
                <h5 className="font-semibold text-white/80 mb-2">Fragmented Social Posts</h5>
                <p className="text-xs text-white/50 leading-relaxed">
                  Low-resolution reels without storytelling leave viewers uncertain about scale,
                  amenities, and prestige.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/40 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <span className="text-xs font-mono text-[#a855f7] font-bold uppercase block mb-2">The MyBrandsBuddy Standard</span>
                <h5 className="font-semibold text-white mb-2">Curated Launch Experience</h5>
                <p className="text-xs text-white/80 leading-relaxed">
                  Every angle, curve, lighting mood, and ad lead form works in harmony to drive
                  qualified high-ticket buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
