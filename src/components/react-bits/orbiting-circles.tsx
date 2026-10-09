'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  strokeColor?: string;
  strokeDasharray?: string;
  pauseOnHover?: boolean;
}

export function OrbitingCircles({
  className = '',
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  strokeColor = 'rgba(176, 136, 213, 0.22)',
  strokeDasharray = '3 5',
  pauseOnHover = true,
  ...props
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-current transition-all"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.2"
            strokeDasharray={strokeDasharray}
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': `${duration}s`,
            '--radius': radius,
            '--delay': `-${delay}s`,
          } as React.CSSProperties
        }
        className={cn(
          'absolute flex items-center justify-center transform-gpu',
          reverse ? 'animate-orbit-reverse' : 'animate-orbit',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export default OrbitingCircles;
