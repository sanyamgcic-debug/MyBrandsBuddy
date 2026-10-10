'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface AuditCriterion {
  id: string;
  category: string;
  title: string;
  description: string;
  metrics: string[];
  impactScore: number;
}

const auditCriteria: AuditCriterion[] = [
  {
    id: 'cinematic-flow',
    category: 'VISUAL ASSETS & CINEMA',
    title: 'Spatial Walkthrough & Cinematic Pacing',
    description:
      'We audit whether video walkthroughs create emotional resonance and architectural scale, or feel like flat portal slideshows that cause prospective buyers to scroll away.',
    metrics: ['FPV & 4K Resolution Benchmark', 'Color Contrast & Twilight Lighting', 'Average Watch-Through Completion Rate'],
    impactScore: 94,
  },
  {
    id: 'buyer-ux',
    category: 'CONVERSION & MOBILE UX',
    title: 'Lead Capture & Mobile Landing Friction',
    description:
      'High-net-worth investors access launches primarily on mobile. We audit tap targets, page load speed, layout clarity, and 1-tap WhatsApp consultation pathways.',
    metrics: ['Sub-1.8s Mobile Load Speed', 'Zero-Distraction Layout Architecture', 'Instant WhatsApp Route Integration'],
    impactScore: 98,
  },
  {
    id: 'ad-targeting',
    category: 'ACQUISITION ARCHITECTURE',
    title: 'Paid Media Funnel & NRI Audience Precision',
    description:
      'Eliminate ad waste on non-accredited price-checkers. We audit your Meta & Google ad audience filters, geographical NRI targeting, and high-intent creative hooks.',
    metrics: ['Accredited Buyer Exclusions', 'Cross-Border NRI Targeting Funnel', 'Cost Per Qualified Site Visit Lead'],
    impactScore: 92,
  },
  {
    id: 'prestige-authority',
    category: 'BRAND REPUTATION & POSITIONING',
    title: 'Developer Authority & Listing Differentiation',
    description:
      'Benchmark how your development is perceived against tier-1 benchmark residences. We evaluate developer stature, architectural credibility, and media coverage.',
    metrics: ['Signature Identity Positioning', 'Competitive Pricing Stature', 'Press & Architectural Endorsements'],
    impactScore: 89,
  },
];

export function RealEstateAudit() {
  const [activeCriterion, setActiveCriterion] = useState<string>('cinematic-flow');

  const selectedItem = auditCriteria.find((c) => c.id === activeCriterion) || auditCriteria[0];

  const handleClaimAudit = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-property', { detail: { property: 'Comprehensive Property Marketing UI/UX Audit' } });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="audit" className="py-24 md:py-32 bg-[#0a0a0e] relative overflow-hidden architectural-grid-bg border-t border-white/10">
      {/* Ambient Brand Purple Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#8b5cf6]/30 text-[11px] font-mono tracking-widest uppercase text-white/90 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#662d91] to-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
              <span className="text-[#c8a4ff] font-bold">PROPERTY MARKETING DIAGNOSTIC</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">UI/UX & CREATIVE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Audit the Gaps.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#c8a4ff] font-serif italic font-normal text-2xl sm:text-4xl lg:text-5xl mt-2">
                Turn Traffic into Qualified Buyers.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
              Before allocating more capital to paid media or standard property listings, benchmark your
              development against the 4 critical pillars of luxury real estate conversion.
            </p>
            <button
              type="button"
              onClick={handleClaimAudit}
              className="re-glow-btn px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free 30-Min Property Audit</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Audit Pillars Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Selectable Audit Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {auditCriteria.map((item, index) => {
              const isSelected = item.id === activeCriterion;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCriterion(item.id)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#14141a] border-[#8b5cf6] shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                      : 'bg-[#0f0f14]/60 border-white/10 hover:border-white/20 hover:bg-[#14141a]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] font-bold">
                      0{index + 1} {'//'} {item.category}
                    </span>
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#c8a4ff]' : 'text-white/40'}`}>
                      {item.impactScore}% BENCHMARK
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-white/60 font-light line-clamp-2">{item.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Diagnostic Card for Selected Pillar */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#121217] border border-[#8b5cf6]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#a855f7] block mb-1 font-semibold">
                      Diagnostic Evaluation
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {selectedItem.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {selectedItem.impactScore}
                      <span className="text-[#8b5cf6]">/100</span>
                    </span>
                    <span className="block text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      Conversion Impact
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  {selectedItem.description}
                </p>

                {/* Audit Inspection Points */}
                <h5 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4 font-bold">
                  Key Deliverables Covered in Audit Report
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {selectedItem.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between">
                      <CheckCircle2 size={18} className="text-[#8b5cf6] mb-3" />
                      <span className="text-xs font-mono text-white/90 leading-snug">{m}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                    <Sparkles size={14} className="text-[#8b5cf6]" />
                    <span>Includes 14-day action roadmap & competitive analysis</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleClaimAudit}
                    className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-white text-black hover:bg-white/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Request Audit For This Project</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
