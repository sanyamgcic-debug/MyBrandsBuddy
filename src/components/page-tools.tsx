'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'motion/react';
import Image from 'next/image';

export function PageTools() {
  const { scrollY, scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 35 });
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 450));

  return (
    <div id="page-tools">
      <motion.div
        className="reading-progress"
        aria-hidden="true"
        style={{ scaleX: reduced ? scrollYProgress : smooth }}
      />
      <button
        type="button"
        className={`du-btn du-btn-circle back-to-top group relative ${visible ? 'is-visible' : ''}`}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
          document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true });
        }}
        data-route={pathname}
      >
        <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <Image
            src="/images/rocket-3d.png"
            alt=""
            width={30}
            height={30}
            className="object-contain drop-shadow-[0_4px_14px_rgba(168,85,247,0.8)] pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/90 blur-[2px] animate-pulse pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <span className="sr-only">Back to top</span>
      </button>
    </div>
  );
}
