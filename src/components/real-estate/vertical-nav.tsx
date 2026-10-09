'use client';

import { useEffect, useState } from 'react';

const navSections = [
  { id: 'hero', label: '01 // Vision' },
  { id: 'philosophy', label: '02 // Contrast' },
  { id: 'catalog', label: '03 // Catalog' },
  { id: 'peek-mask', label: '04 // Immersion' },
  { id: 'contact', label: '05 // Inquire' },
];

export function VerticalNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section based on element positions
      const sectionElements = navSections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="vertical-side-nav" aria-label="Page sections">
      {/* Scroll indicator hairline bar */}
      <div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="w-full bg-[#8b5cf6] transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {navSections.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={`vertical-nav-item ${isActive ? 'active' : ''}`}
            aria-label={`Jump to ${item.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="vertical-nav-dot" />
            <span className="vertical-nav-label font-mono font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
