'use client';

import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface StarfieldProps {
  className?: string;
  count?: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

// Deterministic pseudo-random distribution: pure render, no effect, no hydration mismatch
function getDeterministicStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const seed1 = ((i * 9301 + 49297) % 233280) / 233280;
    const seed2 = (((i + 13) * 9301 + 49297) % 233280) / 233280;
    const seed3 = (((i + 29) * 9301 + 49297) % 233280) / 233280;
    const seed4 = (((i + 47) * 9301 + 49297) % 233280) / 233280;
    return {
      id: i,
      x: Number((seed1 * 100).toFixed(2)),
      y: Number((seed2 * 100).toFixed(2)),
      size: Number((seed3 * 2 + 1.2).toFixed(2)),
      opacity: Number((seed4 * 0.6 + 0.25).toFixed(2)),
      duration: Number((seed2 * 3 + 2.5).toFixed(2)),
      delay: Number((seed3 * 4).toFixed(2)),
    };
  });
}

export function Starfield({ className = '', count = 30 }: StarfieldProps) {
  const stars = useMemo(() => getDeterministicStars(count), [count]);

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-particle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
