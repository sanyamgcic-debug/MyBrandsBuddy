'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function PageTools() {
  const { scrollY, scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 35 });
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  useMotionValueEvent(scrollY, 'change', (value) => setVisible(value > 700));
  return (
    <div id="page-tools">
      <motion.div
        className="reading-progress"
        aria-hidden="true"
        style={{ scaleX: reduced ? scrollYProgress : smooth }}
      />
      <button
        type="button"
        className={`du-btn du-btn-circle back-to-top ${visible ? 'is-visible' : ''}`}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
          document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true });
        }}
        data-route={pathname}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
