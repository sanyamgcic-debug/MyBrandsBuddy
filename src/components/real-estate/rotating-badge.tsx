'use client';

import { ArrowDownRight, Compass } from 'lucide-react';

interface RotatingBadgeProps {
  text?: string;
  className?: string;
  targetId?: string;
}

export function RotatingBadge({
  text = '• LUXURY ARCHITECTURE • CINEMATIC PRODUCTION • MYBRANDSBUDDY REAL ESTATE ',
  className = '',
  targetId = 'catalog',
}: RotatingBadgeProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`rotating-badge-container group cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label="Scroll to property catalog"
    >
      {/* Background soft frosted backdrop */}
      <div className="absolute inset-2 rounded-full bg-[#0a0a0d]/90 backdrop-blur-md border border-white/15 transition-all duration-300 group-hover:border-[#8b5cf6]/60 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]" />

      {/* Rotating SVG circular text */}
      <svg
        className="rotating-badge-svg w-full h-full text-white/80 group-hover:text-white transition-colors duration-300"
        viewBox="0 0 160 160"
      >
        <path
          id="circlePathBadge"
          d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          fill="none"
        />
        <text className="text-[10px] uppercase font-bold tracking-[0.24em] fill-current">
          <textPath href="#circlePathBadge" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Central Sharp Brand Highlight Core with Official Rocket Gradient */}
      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#662d91] to-[#8b5cf6] text-white flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.6)] transition-transform duration-300 group-hover:scale-110">
        <ArrowDownRight
          size={20}
          className="transition-transform duration-300 group-hover:rotate-45"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
