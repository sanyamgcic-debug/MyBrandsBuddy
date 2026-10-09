'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';
import { Eye, Move, Sparkles, Layers, Sliders } from 'lucide-react';

export function PeekMaskViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState({ x: 300, y: 250 });
  const [isHovered, setIsHovered] = useState(false);
  const [lensRadius, setLensRadius] = useState(130);
  const [activeRevealMode, setActiveRevealMode] = useState<'interior' | 'night' | 'wireframe'>('interior');

  const updateCoordinates = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
    setLensPos({ x, y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    // Set initial position towards center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLensPos({ x: rect.width * 0.45, y: rect.height * 0.45 });
    }
  }, []);

  return (
    <section id="peek-mask" className="section-clean-white py-24 md:py-32 relative overflow-hidden architectural-grid-bg-light">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-black/10 pb-8">
          <div>
            <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold mb-3">
              04 // Interactive Spatial Immersion
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#070709] leading-tight">
              Floating Circular Peek Mask.{' '}
              <span className="font-serif italic font-normal text-[#8b5cf6]">
                Look Beyond the Surface.
              </span>
            </h2>
            <p className="text-sm text-[#4a4a55] font-light mt-3 max-w-xl">
              Move your cursor over the curved architecture below. The interactive lens
              reveals the bespoke penthouse interiors and structural flow underneath.
            </p>
          </div>

          {/* Interactive Mode Pills & Radius Adjuster */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveRevealMode('interior')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeRevealMode === 'interior'
                  ? 'bg-[#8b5cf6] text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'bg-black/5 text-[#070709] border border-black/10 hover:bg-black/10'
              }`}
            >
              Interior Vault Peek
            </button>
            <button
              type="button"
              onClick={() => setActiveRevealMode('night')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeRevealMode === 'night'
                  ? 'bg-[#8b5cf6] text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'bg-black/5 text-[#070709] border border-black/10 hover:bg-black/10'
              }`}
            >
              Villa Reflecting Pool
            </button>
          </div>
        </div>

        {/* Peek Mask Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsHovered(true)}
          className="peek-mask-stage relative shadow-2xl"
          role="region"
          aria-label="Interactive circular peek mask architectural viewer"
        >
          {/* Base Layer: Exterior Curved Facade */}
          <div className="absolute inset-0">
            <Image
              src="/images/real-estate/curved-facade.jpg"
              alt="Futuristic luxury architectural building facade with sculptural curved balconies"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Overlay Revealed Layer: Clipped via CSS circle() clipPath to create the Peek Mask */}
          <div
            className="absolute inset-0 pointer-events-none transition-[clip-path] duration-75 ease-out"
            style={{
              clipPath: `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`,
              WebkitClipPath: `circle(${lensRadius}px at ${lensPos.x}px ${lensPos.y}px)`,
            }}
          >
            <Image
              src={
                activeRevealMode === 'interior'
                  ? '/images/real-estate/lounge-interior.jpg'
                  : '/images/real-estate/hero-villa.jpg'
              }
              alt="Revealed architectural interior via circular peek mask"
              fill
              className="object-cover object-center scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Subtle brand purple interior ambient tint */}
            <div className="absolute inset-0 bg-[#8b5cf6]/10 mix-blend-overlay" />
          </div>

          {/* Floating Lens Ring Indicator */}
          <div
            className="peek-mask-lens"
            style={{
              left: `${lensPos.x}px`,
              top: `${lensPos.y}px`,
              width: `${lensRadius * 2}px`,
              height: `${lensRadius * 2}px`,
              borderColor: '#8b5cf6',
              boxShadow: '0 0 35px rgba(139, 92, 246, 0.5), inset 0 0 25px rgba(139, 92, 246, 0.25)',
            }}
          >
            {/* Center crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
            </div>

            {/* Lens Coordinates Badge */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white border border-[#8b5cf6] px-3 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase whitespace-nowrap shadow-md">
              <span className="text-[#a855f7]">●</span> REVEALING {activeRevealMode.toUpperCase()}
            </div>
          </div>

          {/* Overlay Stage Hud Controls */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 pointer-events-none">
            <div className="bg-black/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-xs text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a855f7] block mb-1 font-semibold">
                Spatial Lens HUD
              </span>
              <h4 className="text-sm font-bold tracking-tight mb-1">
                {activeRevealMode === 'interior'
                  ? 'Penthouse Vault Interior Revealed'
                  : 'Cantilever Villa Twilight View'}
              </h4>
              <p className="text-[11px] text-white/70 font-light leading-relaxed">
                Move cursor across the architectural frame to inspect interior craftsmanship and
                structural flow.
              </p>
            </div>
          </div>

          {/* Bottom HUD Bar */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-30 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            <div className="flex items-center gap-3 text-xs font-mono text-white/90 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <Move size={14} className="text-[#8b5cf6] animate-pulse" />
              <span>
                LENS COORDINATES: X: {Math.round(lensPos.x)}px | Y: {Math.round(lensPos.y)}px
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/80 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 pointer-events-auto">
              <span>LENS APERTURE:</span>
              <button
                type="button"
                onClick={() => setLensRadius(100)}
                className={`px-2 py-0.5 rounded ${lensRadius === 100 ? 'bg-[#8b5cf6] text-white font-bold' : 'hover:bg-white/10'}`}
              >
                100px
              </button>
              <button
                type="button"
                onClick={() => setLensRadius(140)}
                className={`px-2 py-0.5 rounded ${lensRadius === 140 ? 'bg-[#8b5cf6] text-white font-bold' : 'hover:bg-white/10'}`}
              >
                140px
              </button>
              <button
                type="button"
                onClick={() => setLensRadius(180)}
                className={`px-2 py-0.5 rounded ${lensRadius === 180 ? 'bg-[#8b5cf6] text-white font-bold' : 'hover:bg-white/10'}`}
              >
                180px
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
