'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export function SceneFrame({
  name,
  theme,
  stages,
  children,
}: {
  name: string;
  theme: string;
  stages: string[];
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const manual = useRef(false);
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const fine = matchMedia('(hover: hover) and (pointer: fine)');
    let frame = 0,
      visible = false,
      px = 0,
      py = 0;
    const draw = () => {
      frame = 0;
      if (reduced.matches || !visible) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (innerHeight * 0.35 - rect.top) / (rect.height * 0.8)),
      );
      el.style.setProperty('--pointer-x', `${px}`);
      el.style.setProperty('--pointer-y', `${py}`);
      el.style.setProperty('--travel', `${progress}`);
      if (!manual.current)
        setStage(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
    };
    const queue = () => {
      if (!frame && !reduced.matches && visible) frame = requestAnimationFrame(draw);
    };
    const move = (e: PointerEvent) => {
      if (!fine.matches) return;
      const r = el.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width - 0.5;
      py = (e.clientY - r.top) / r.height - 0.5;
      queue();
    };
    const reset = () => {
      px = 0;
      py = 0;
      queue();
    };
    const preference = () => {
      if (reduced.matches) {
        el.style.setProperty('--pointer-x', '0');
        el.style.setProperty('--pointer-y', '0');
        el.style.setProperty('--travel', '0');
      } else queue();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) queue();
      },
      { rootMargin: '40px' },
    );
    observer.observe(el);
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', reset);
    window.addEventListener('scroll', queue, { passive: true });
    reduced.addEventListener('change', preference);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
      window.removeEventListener('scroll', queue);
      reduced.removeEventListener('change', preference);
    };
  }, [stages.length]);
  return (
    <div
      ref={root}
      className={`studio-scene scene-${theme} visual-${theme}`}
      data-stage={stage}
      style={
        {
          '--stage': stage,
          '--phase': stage / Math.max(1, stages.length - 1),
        } as React.CSSProperties
      }
    >
      <div className="scene-art" role="img" aria-label={name}>
        <div className="scene-space" aria-hidden="true">
          {children}
        </div>
      </div>
      <div className="scene-controls" role="group" aria-label={`Explore ${name}`}>
        {stages.map((label, i) => (
          <button
            type="button"
            key={label}
            aria-pressed={stage === i}
            onClick={() => {
              manual.current = true;
              setStage(i);
            }}
          >
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
