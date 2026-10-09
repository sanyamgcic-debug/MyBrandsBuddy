import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'glow' | 'planet';
  active?: boolean;
}

export function Badge({
  className,
  variant = 'default',
  active = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border text-foreground',
    glow: 'border border-purple-400/30 bg-purple-950/40 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.25)]',
    planet: cn(
      'border border-white/20 bg-[#1a142e]/90 text-purple-100 backdrop-blur-md',
      'shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300',
      'hover:border-purple-400 hover:shadow-[0_0_24px_rgba(192,132,252,0.45)] hover:scale-105',
      active && 'border-purple-300 bg-purple-900/90 shadow-[0_0_25px_rgba(216,180,254,0.6)] text-white scale-105'
    ),
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors select-none',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;
