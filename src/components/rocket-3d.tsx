'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ShinyText } from './react-bits/shiny-text';
import { cn } from '@/lib/utils';

interface Rocket3DProps {
  className?: string;
  onLaunchClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Rocket3D({
  className = '',
  onLaunchClick,
  size = 'md',
  showText = true,
}: Rocket3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Smooth 3D tilt tracking cursor (max ~14 degrees)
    const tiltX = (mouseY / (rect.height / 2)) * -12;
    const tiltY = (mouseX / (rect.width / 2)) * 14;

    setRotate({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 800);
    if (onLaunchClick) onLaunchClick();
  };

  const sizeDimensions = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-48 h-48 md:w-56 md:h-56',
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        'relative flex flex-col items-center justify-center cursor-pointer select-none',
        className
      )}
      style={{
        perspective: '1000px',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Interactive 3D Rocket - Hover or click to explore"
    >
      {/* 3D Levitating & Hovering Rocket Body - ZERO BOX BACKGROUND */}
      <div
        className={cn(
          'relative z-10 flex flex-col items-center transition-all duration-300 ease-out',
          isLaunching ? '-translate-y-8 scale-110 opacity-95' : 'animate-rocket-float'
        )}
        style={{
          transform: isLaunching
            ? 'translateY(-24px) scale(1.12)'
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${
                isHovered ? 'scale(1.08) translateY(-6px)' : 'scale(1)'
              }`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Rendered 3D Rocket with 100% Native Alpha Transparency (No background, no boxes) */}
        <div className={cn('relative transition-all duration-300', sizeDimensions[size])}>
          <Image
            src="/images/rocket-3d.png"
            alt="3D Space Rocket Hovering"
            fill
            sizes="(max-width: 768px) 160px, 200px"
            priority
            className={cn(
              'object-contain transition-all duration-300 pointer-events-none',
              isHovered
                ? 'drop-shadow-[0_10px_25px_rgba(168,85,247,0.7)]'
                : 'drop-shadow-[0_8px_18px_rgba(168,85,247,0.4)]'
            )}
          />

          {/* Dynamic Plasma Thruster Pulse under the engine nozzle */}
          <div
            className={cn(
              'pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300',
              isHovered || isLaunching
                ? 'w-12 h-12 bg-cyan-400/50 blur-md scale-125'
                : 'w-8 h-8 bg-purple-500/35 blur-md scale-100'
            )}
            aria-hidden="true"
          />
        </div>

        {/* Shimmering Center Slogan */}
        {showText && (
          <div className="mt-1 flex flex-col items-center text-center pointer-events-none">
            <ShinyText
              text="YOUR NEXT"
              speed={2.8}
              className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-purple-200 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]"
            />
            <ShinyText
              text="BIG THING"
              speed={2.8}
              className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-purple-100 drop-shadow-[0_0_12px_rgba(216,180,254,0.7)]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Rocket3D;
