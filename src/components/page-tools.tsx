'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { site } from '@/data/site';

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

      {/* Floating WhatsApp Quick Action for all pages */}
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp group"
        aria-label={`Chat on WhatsApp with MyBrandsBuddy at ${site.whatsapp}`}
      >
        <div className="whatsapp-icon-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            className="whatsapp-svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509s1.078 2.909 1.229 3.11c.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.378.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.544 2 2.08 6.464 2.08 11.96c0 1.758.46 3.475 1.334 4.989L2 22l5.228-1.37a9.923 9.923 0 0 0 4.812 1.33h.004c5.494 0 9.96-4.464 9.96-9.96.002-2.66-1.031-5.161-2.915-7.045A9.907 9.907 0 0 0 12.04 2z" />
          </svg>
          <span className="whatsapp-pulse-ring" />
        </div>
        <div className="whatsapp-label-content">
          <span className="whatsapp-heading">WhatsApp</span>
          <span className="whatsapp-number">{site.whatsapp}</span>
        </div>
      </a>

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
