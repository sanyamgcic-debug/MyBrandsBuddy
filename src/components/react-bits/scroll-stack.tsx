'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { Badge } from '@/components/shadcn/badge';
import { cn } from '@/lib/utils';

export interface ScrollStackItem {
  id: string;
  number: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  glowColor?: string;
  deliverables: string[];
  subServices: { title: string; slug: string }[];
  primaryLink: string;
  primaryLabel?: string;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
}

export function ScrollStack({ items, className }: ScrollStackProps) {
  const [activeTab, setActiveTab] = useState<string>(items[0]?.id || '');
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Track which card is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = cardRefs.current.get(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToCard = (id: string) => {
    const el = cardRefs.current.get(id);
    if (!el) return;
    const yOffset = -156;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveTab(id);
  };

  return (
    <div
      className={cn('w-full scroll-stack-wrapper font-manrope', className)}
      style={{ fontFamily: "var(--font-manrope, 'Manrope'), 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Clean, minimalist discipline switcher across full width */}
      <div className="scroll-stack-nav sticky top-[88px] z-50 mb-8 flex flex-wrap items-center justify-between gap-3 border border-white/10 bg-[#090714]/95 py-3.5 px-4 sm:px-6 md:px-8 backdrop-blur-md shadow-lg shadow-black/30 rounded-xl w-full">
        <div className="flex flex-wrap items-center gap-2">
          {items.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToCard(item.id)}
                className={cn(
                  'group flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer font-manrope',
                  isActive
                    ? 'bg-white/12 text-white border border-white/25 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                )}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: item.accentColor }}
                  aria-hidden="true"
                />
                <span>{item.category}</span>
                <span className="text-[10px] opacity-60">({item.number})</span>
              </button>
            );
          })}
        </div>

        <span className="hidden md:inline-block text-[11px] font-mono text-zinc-400">
          Scroll to explore disciplines ↓
        </span>
      </div>

      {/* The Stacking Cards: Full-Width, Crisp & Professional */}
      <div className="relative flex flex-col pb-36 sm:pb-48 w-full">
        {items.map((item, index) => {
          const zIndex = 10 + index;
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardRefs.current.set(item.id, el);
                else cardRefs.current.delete(item.id);
              }}
              className={cn(
                'scroll-stack-card font-manrope sticky top-[156px] w-full transition-all duration-300',
                !isLast ? 'mb-28 lg:mb-44' : 'mb-12'
              )}
              style={{
                zIndex,
                fontFamily: "var(--font-manrope, 'Manrope'), 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {/* Full-width professional card with clean hairline border and solid matte dark background */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#100d20] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                {/* Subtle hairline top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: item.accentColor }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center w-full">
                  {/* Left Column: Content (6 cols on lg for balanced 50/50 split) */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Eyebrow & Category Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <Badge
                          variant="outline"
                          className="border-white/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-zinc-300 font-manrope"
                        >
                          <span
                            className="mr-2 inline-block w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          {item.number} / {item.category}
                        </Badge>
                      </div>

                      {/* Main Title in Manrope Font */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold tracking-tight text-white mb-2 leading-[1.18] font-manrope">
                        {item.title}
                      </h3>

                      {/* Sub-headline */}
                      <p
                        className="text-sm sm:text-base font-medium italic mb-4 font-manrope"
                        style={{ color: item.accentColor }}
                      >
                        {item.headline}
                      </p>

                      {/* Body Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-manrope">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Deliverables Tags */}
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 font-manrope">
                        Key deliverables:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((del) => (
                          <span
                            key={del}
                            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 font-manrope"
                          >
                            <Check
                              size={12}
                              className="shrink-0"
                              style={{ color: item.accentColor }}
                              aria-hidden="true"
                            />
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sub-Services Quick Links & CTA */}
                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-manrope">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-manrope">
                        <span>Includes:</span>
                        {item.subServices.slice(0, 3).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${sub.slug}`}
                            className="text-zinc-300 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white font-medium font-manrope"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>

                      <Link
                        href={item.primaryLink}
                        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 group/btn font-manrope"
                        style={{
                          backgroundColor: `${item.accentColor}20`,
                          color: '#ffffff',
                          border: `1px solid ${item.accentColor}50`,
                        }}
                      >
                        <span>{item.primaryLabel || 'Explore discipline'}</span>
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Full-Height Image Showcase (6 cols on lg) */}
                  <div className="lg:col-span-6 relative w-full">
                    <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Clean bottom pill overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-white/10 bg-[#0c091d]/85 px-3 py-2 backdrop-blur-md font-manrope">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.accentColor }}
                            aria-hidden="true"
                          />
                          <span className="text-xs font-semibold text-white/90 font-manrope">
                            {item.category} Overview
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {item.number} / {String(items.length).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
