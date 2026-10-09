'use client';
import { useEffect, useRef } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Direction the element slides in from. Default: 'up' */
  direction?: RevealDirection;
  /** Extra delay in ms before this element begins its transition (use for stagger) */
  delay?: number;
  /** Distance in px the element travels. Default: 32 */
  distance?: number;
  /** Duration in ms. Default: 800 */
  duration?: number;
  /** IntersectionObserver threshold. Default: 0.08 */
  threshold?: number;
}

const directionTransform: Record<RevealDirection, (d: number) => string> = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
  none: () => 'none',
};

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  distance = 32,
  duration = 800,
  threshold = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Only prepare the element if it's below the fold
    if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
      el.style.opacity = '0';
      el.style.transform = directionTransform[direction](distance);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply the reveal transition inline for full control over timing
          el.style.transition = [
            `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          ].join(', ');
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, distance, duration, threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/**
 * Convenience wrapper: reveals children one-by-one with staggered timing.
 * Wrap multiple siblings inside <RevealStagger> to get automatic delays.
 */
export function RevealStagger({
  children,
  className = '',
  direction = 'up' as RevealDirection,
  staggerMs = 100,
  distance = 28,
  duration = 750,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  staggerMs?: number;
  distance?: number;
  duration?: number;
}) {
  // Flatten children into an array so we can apply per-child delay
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal
          key={i}
          direction={direction}
          delay={i * staggerMs}
          distance={distance}
          duration={duration}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
