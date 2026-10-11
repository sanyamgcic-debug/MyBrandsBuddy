'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Rocket, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { site } from '@/data/site';
import { services, serviceGroups } from '@/data/services';
export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const serviceToggle = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    setMega(false);
  };
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (open || mega)) {
        setOpen(false);
        setMega(false);
        (open ? toggle : serviceToggle).current?.focus();
      }
      if (event.key === 'Tab' && open) {
        const targets = Array.from(
          header.current?.querySelectorAll<HTMLElement>('a,button') || [],
        ).filter((el) => el.getClientRects().length > 0);
        const first = targets[0],
          last = targets.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMega(false);
    };
    document.addEventListener('keydown', key);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', key);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open, mega]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background = Array.from(
      document.querySelectorAll<HTMLElement>('main,footer,#page-tools'),
    );
    background.forEach((el) => (el.inert = true));
    return () => {
      document.body.style.overflow = previous;
      background.forEach((el) => (el.inert = false));
    };
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)');
    const changed = () => {
      if (media.matches) {
        setOpen(false);
        setMega(false);
      }
    };
    media.addEventListener('change', changed);
    return () => media.removeEventListener('change', changed);
  }, []);
  // -- Scroll-linked header response --
  useEffect(() => {
    const el = header.current;
    if (!el) return;
    const onScroll = () => {
      el.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    onScroll(); // check initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header ref={header} className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label={`${site.name} home`} className="brand" onClick={close}>
          <span className="brand-icon">
            <Rocket size={24} aria-hidden="true" />
          </span>
          <span>
            My<span className="brand-accent">Brands</span>Buddy
            <span className="brand-dot">.</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? 'main-nav is-open' : 'main-nav'}
          aria-label="Main navigation"
        >
          <div className="services-nav">
            <button
              ref={serviceToggle}
              className="services-toggle"
              aria-expanded={mega}
              aria-current={pathname.startsWith('/services') ? 'page' : undefined}
              aria-controls="services-menu"
              onClick={() => setMega(!mega)}
            >
              Services
              <ChevronDown size={13} aria-hidden="true" />
            </button>
            <div id="services-menu" className="mega-menu" hidden={!mega}>
              <div className="mega-intro">
                <span className="eyebrow">Connected capabilities</span>
                <strong>
                  Find your
                  <br />
                  <em>next move.</em>
                </strong>
                <Link href="/services" onClick={close}>
                  Explore all 13 services
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="mega-groups">
                {serviceGroups.map((group) => (
                  <div key={group}>
                    <h2>{group}</h2>
                    {services
                      .filter((s) => s.category === group)
                      .sort((a, b) => a.number.localeCompare(b.number))
                      .map((s) => (
                        <Link href={`/services/${s.slug}`} key={s.slug} onClick={close}>
                          <span>{s.number}</span>
                          {s.shortTitle}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {[
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/blog', label: 'Insights' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="du-btn du-btn-primary button button-primary header-cta"
            href="/get-started"
            onClick={close}
          >
            Start a Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
