'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, PenTool, Layout, Palette, ShieldCheck, MessageSquare } from 'lucide-react';
import { GraphicDesignHero } from './graphic-design-hero';
import { InlineCopy } from '../exact-service-page';
import type { ServiceCopy, CopyBlock } from '@/data/service-copy';
import type { Service } from '@/data/services';
import { serializeJsonLd } from '@/lib/seo';
import { site } from '@/data/site';
import './graphic-design.css';

interface GraphicDesignPageProps {
  content: ServiceCopy;
  service: Service;
}

export function GraphicDesignPage({ content, service }: GraphicDesignPageProps) {
  const contactHref = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <article className="graphic-design-page selection:bg-[#8b5cf6] selection:text-white">
      {/* 1. Polished Production-Ready Video Hero */}
      <GraphicDesignHero />

      {/* 2. Editorial Philosophy / Strategic Intro Section */}
      <section className="py-20 md:py-28 gd-body-section border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-3">
                01 // Design Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Design That Earns Trust{' '}
                <span className="text-[#8b5cf6] font-serif italic font-normal">
                  Before You Speak.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-white/75 font-light leading-relaxed">
              {content.intro.map((p, idx) => (
                <p key={idx} className="border-l-2 border-[#8b5cf6]/40 pl-6">
                  <InlineCopy text={p} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Design (Interactive Visual Service Matrix) */}
      {content.sections.map((section, idx) => {
        if (section.heading === 'What We Design') {
          const listBlock = section.blocks.find((b) => b.kind === 'ul');
          const items = listBlock && listBlock.kind === 'ul' ? listBlock.items : [];

          return (
            <section key={idx} className="py-20 md:py-28 bg-[#09090c] border-t border-white/10 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-2">
                      02 // Deliverables Matrix
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      What We Design
                    </h2>
                  </div>
                  <p className="text-sm text-white/60 font-light max-w-md">
                    Every asset is crafted to communicate your brand story with clarity,
                    consistency, and commercial impact.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="gd-card p-6 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] mb-5 group-hover:bg-[#8b5cf6] group-hover:text-white transition-all">
                          <Palette size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                          <InlineCopy text={item} />
                        </h3>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                        <span>ASSET {String(itemIdx + 1).padStart(2, '0')}</span>
                        <span className="text-[#8b5cf6]">✦ READY</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.heading === 'How We Work') {
          const olBlock = section.blocks.find((b) => b.kind === 'ol');
          const steps = olBlock && olBlock.kind === 'ol' ? olBlock.items : [];

          return (
            <section key={idx} className="py-20 md:py-28 gd-body-section border-t border-white/10 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-2">
                    03 // Creative Process
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    How We Work
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, stepIdx) => (
                    <div
                      key={stepIdx}
                      className="p-8 rounded-2xl bg-[#141418] border border-white/10 relative overflow-hidden group hover:border-[#8b5cf6]/50 transition-colors"
                    >
                      <div className="text-4xl font-mono font-bold text-white/15 mb-4 group-hover:text-[#8b5cf6]/30 transition-colors">
                        0{stepIdx + 1}
                      </div>
                      <div className="text-sm text-white/80 leading-relaxed font-light">
                        <InlineCopy text={step} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.heading === 'Why Brands Choose Us') {
          const ulBlock = section.blocks.find((b) => b.kind === 'ul');
          const points = ulBlock && ulBlock.kind === 'ul' ? ulBlock.items : [];

          return (
            <section key={idx} className="py-20 md:py-28 bg-[#09090c] border-t border-white/10 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-2">
                      04 // The Advantage
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
                      Why Brands Choose Us
                    </h2>
                    <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                      We treat design not as decoration, but as a direct driver of brand value,
                      audience trust, and commercial conversion.
                    </p>
                    <Link
                      href={contactHref}
                      className="gd-btn-primary px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <span>Share Your Requirement</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    {points.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-6 rounded-2xl bg-[#141418] border border-white/10 flex items-start gap-4 hover:border-[#8b5cf6]/40 transition-colors"
                      >
                        <CheckCircle2 size={20} className="text-[#8b5cf6] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                          <InlineCopy text={p} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (section.heading === 'FAQs') {
          return (
            <section key={idx} className="py-20 md:py-28 gd-body-section border-t border-white/10 relative">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-2">
                    05 // Clear Answers
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.blocks.map((block, qIdx) => {
                    if (block.kind !== 'faq') return null;
                    return (
                      <details
                        key={qIdx}
                        className="group p-6 rounded-2xl bg-[#141418] border border-white/10 open:border-[#8b5cf6]/40 open:bg-[#181622] transition-colors"
                      >
                        <summary className="flex items-center justify-between cursor-pointer list-none text-base font-semibold text-white">
                          <span>
                            <InlineCopy text={block.question} />
                          </span>
                          <ChevronDown
                            size={18}
                            className="text-[#8b5cf6] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4"
                          />
                        </summary>
                        <div className="mt-4 pt-4 border-t border-white/10 text-sm text-white/70 font-light leading-relaxed">
                          <InlineCopy text={block.answer} />
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* 4. Cohesive Brand Consultation CTA Strip */}
      <section className="py-24 bg-gradient-to-b from-[#09090c] to-[#120d20] border-t border-[#8b5cf6]/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold block mb-3">
            Ready to Begin?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Need designs that elevate your brand?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Let’s craft visual assets that command attention, build credibility, and drive real results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={contactHref}
              className="gd-btn-primary px-8 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-xl"
            >
              <span>Share Your Requirement</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/work"
              className="gd-btn-secondary px-7 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: content.title,
            description: content.metaDescription,
            url: `${site.url}/services/${content.slug}`,
            provider: { '@type': 'Organization', name: site.name, url: site.url },
          }),
        }}
      />
    </article>
  );
}
