'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = '',
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        'inline-block bg-clip-text text-transparent transition-all',
        !disabled && 'animate-shiny-text bg-gradient-to-r from-purple-200 via-white to-purple-300',
        className
      )}
      style={{
        backgroundImage: disabled
          ? undefined
          : 'linear-gradient(115deg, #a78bfa 0%, #ffffff 50%, #c084fc 100%)',
        backgroundSize: '200% 100%',
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}

export default ShinyText;
