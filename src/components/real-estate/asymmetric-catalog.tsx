'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Eye, MapPin, Maximize2, Sparkles } from 'lucide-react';

interface CatalogItem {
  id: string;
  category: 'CURVED ARCHITECTURE' | 'ULTRA-LUXURY RESIDENCES' | 'PENTHOUSES & VILLAS' | 'CINEMATIC SHOWCASES';
  title: string;
  tagline: string;
  location: string;
  coordinates: string;
  sqft: string;
  badge: string;
  image: string;
  aspect: 'wide' | 'tall' | 'standard';
  leadMetric: string;
  inquiryName: string;
}

const catalogData: CatalogItem[] = [
  {
    id: 'residence-01',
    category: 'CURVED ARCHITECTURE',
    title: 'The Copenhagen Curvilinear Pavilion',
    tagline: 'Sweeping organic facade louvers with dramatic waterfront contrast and geometric light play.',
    location: 'Copenhagen Harbor District',
    coordinates: '55.6761° N, 12.5683° E',
    sqft: '24,500 SQ M ICON',
    badge: 'CINEMATIC LAUNCH READY',
    image: '/images/real-estate/copenhagen-curved-hero.jpg',
    aspect: 'wide',
    leadMetric: '140k+ High-Intent Watch Time',
    inquiryName: 'Copenhagen Curvilinear Pavilion',
  },
  {
    id: 'residence-02',
    category: 'ULTRA-LUXURY RESIDENCES',
    title: 'Nordic Geometric Residential Block',
    tagline: 'Precision rhythmic balconies, warm timber soffits, and balanced Scandinavian architectural proportion.',
    location: 'Berlin-Mitte // Tiergarten',
    coordinates: '52.5200° N, 13.4050° E',
    sqft: '48 APARTMENT RESIDENCES',
    badge: 'MULTI-UNIT ACQUISITION',
    image: '/images/real-estate/catalog-modern-block.jpg',
    aspect: 'wide',
    leadMetric: '92% Pre-Launch Units Reserved',
    inquiryName: 'Nordic Geometric Residential Block',
  },
  {
    id: 'residence-03',
    category: 'PENTHOUSES & VILLAS',
    title: 'The Obsidian Curved Lounge',
    tagline: 'Organic sculptural ceiling vaults overlooking panoramic city lights with ultra-deep contrast.',
    location: 'Golf Course Extension, Gurugram',
    coordinates: '28.4595° N, 77.0266° E',
    sqft: '8,400 SQ FT PENTHOUSE',
    badge: 'EXCLUSIVE WALKTHROUGH',
    image: '/images/real-estate/lounge-interior.jpg',
    aspect: 'tall',
    leadMetric: '120k+ Organic Reel Views',
    inquiryName: 'Obsidian Curved Lounge Penthouse',
  },
  {
    id: 'residence-04',
    category: 'CINEMATIC SHOWCASES',
    title: 'Rhythmic Balcony Grid Facade',
    tagline: 'Crisp shadow patterns and modular screening elements framing curated urban vistas.',
    location: 'Hafencity, Hamburg',
    coordinates: '53.5413° N, 9.9986° E',
    sqft: '18,200 SQ M COMPLEX',
    badge: 'FPV + DRONE 4K',
    image: '/images/real-estate/catalog-facade-detail.jpg',
    aspect: 'standard',
    leadMetric: '5.2x Higher Watch-Through Rate',
    inquiryName: 'Rhythmic Balcony Grid Facade',
  },
  {
    id: 'residence-05',
    category: 'CURVED ARCHITECTURE',
    title: 'The Solarium Cantilever Villa',
    tagline: 'Sweeping concrete arches with reflective infinity pool and architectural dusk illumination.',
    location: 'Goa Coastal Ridges',
    coordinates: '15.4909° N, 73.8278° E',
    sqft: '14,800 SQ FT',
    badge: 'EXCLUSIVE ESTATE',
    image: '/images/real-estate/hero-villa.jpg',
    aspect: 'wide',
    leadMetric: '42 Qualified Enquiries in 14 Days',
    inquiryName: 'Solarium Cantilever Villa',
  },
  {
    id: 'residence-06',
    category: 'ULTRA-LUXURY RESIDENCES',
    title: 'Aura Monolith Tower',
    tagline: 'Futuristic vertical fluid arches with kinetic lighting accents at twilight.',
    location: 'Worli Sea Face, Mumbai',
    coordinates: '19.0176° N, 72.8166° E',
    sqft: '22 FLOORS // SIGNATURE TOWER',
    badge: 'FULL LAUNCH NARRATIVE',
    image: '/images/real-estate/curved-facade.jpg',
    aspect: 'tall',
    leadMetric: '₹85Cr+ Total Expressions of Interest',
    inquiryName: 'Aura Monolith Tower',
  },
];

const categories = [
  'ALL DEVELOPMENTS',
  'CURVED ARCHITECTURE',
  'ULTRA-LUXURY RESIDENCES',
  'PENTHOUSES & VILLAS',
  'CINEMATIC SHOWCASES',
] as const;

export function AsymmetricCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL DEVELOPMENTS');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = catalogData.filter((item) =>
    activeCategory === 'ALL DEVELOPMENTS' ? true : item.category === activeCategory,
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -480 : 480;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectProperty = (name: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-property', { detail: { property: name } });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="catalog" className="section-matte-black py-24 md:py-32 relative overflow-hidden architectural-grid-bg">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Header with Horizontal Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold mb-3">
              03 // Asymmetric Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Architectural Portfolio &{' '}
              <span className="font-serif italic font-normal text-[#8b5cf6]">
                Launch Catalog
              </span>
            </h2>
            <p className="text-sm text-white/60 font-light mt-3 max-w-xl">
              Explore signature properties transformed by our cinematic video production,
              high-contrast visual styling, and targeted buyer marketing campaigns.
            </p>
          </div>

          {/* Navigation Controls: Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#8b5cf6] hover:border-[#8b5cf6] text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#8b5cf6] hover:border-[#8b5cf6] text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#8b5cf6] text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="catalog-horizontal-scroll"
          role="region"
          aria-label="Property catalog items"
        >
          {filteredItems.map((item) => {
            const isWide = item.aspect === 'wide';
            const isTall = item.aspect === 'tall';

            return (
              <div
                key={item.id}
                className={`catalog-card-snap relative rounded-[36px] bg-[#0c0c10] border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:border-[#8b5cf6]/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] ${
                  isWide
                    ? 'w-[320px] sm:w-[480px] md:w-[580px]'
                    : isTall
                    ? 'w-[280px] sm:w-[360px] md:w-[400px]'
                    : 'w-[300px] sm:w-[420px] md:w-[460px]'
                }`}
              >
                {/* Media Container with Dramatic Curvature */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isTall ? 'h-[360px] sm:h-[440px]' : 'h-[260px] sm:h-[320px]'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#8b5cf6]/40 text-[10px] font-mono tracking-widest text-[#c8a4ff] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-ping" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Coordinates & Location Tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-white/80">
                    <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      <MapPin size={12} className="text-[#8b5cf6]" />
                      <span>{item.location}</span>
                    </div>
                    <span className="hidden sm:inline text-white/50">{item.sqft}</span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1">
                      {item.coordinates}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4 text-xs font-mono">
                      <span className="text-white/50">CAMPAIGN RESULT:</span>
                      <span className="text-[#8b5cf6] font-bold">{item.leadMetric}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectProperty(item.inquiryName)}
                      className="w-full py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold border border-white/20 bg-white/5 text-white hover:bg-[#8b5cf6] hover:border-[#8b5cf6] transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                    >
                      <span>Inquire On Launch</span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Navigation Hint */}
        <div className="mt-6 flex items-center justify-between text-xs font-mono text-white/40 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
            <span>SWIPE OR USE ARROWS TO BROWSE FULL ASYMMETRIC CATALOG</span>
          </div>
          <span>{filteredItems.length} ARCHITECTURAL DEVELOPMENTS</span>
        </div>
      </div>
    </section>
  );
}
