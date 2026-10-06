"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Rocket, Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation, site } from '@/data/site';
export function Header() {
 const [open, setOpen] = useState(false); const pathname = usePathname(); const toggle = useRef<HTMLButtonElement>(null);
 useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, []);
 return <header className="site-header"><div className="container header-inner"><Link href="/" aria-label={`${site.name} home`} className="brand" onClick={() => setOpen(false)}><span className="brand-icon"><Rocket size={24} aria-hidden="true" /></span><span>MyBrands<span className="brand-accent">Buddy</span><span className="brand-dot">.</span></span></Link><button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={(item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="button button-primary header-cta" href="/contact" onClick={() => setOpen(false)}>Free brand audit<ArrowUpRight size={16} aria-hidden="true" /></Link></nav></div></header>;
}
