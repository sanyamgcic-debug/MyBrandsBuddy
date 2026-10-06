import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/data/site';
import { serializeJsonLd } from '@/lib/seo';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: 'MyBrandsBuddy | Small Businesses. Bigger Tomorrows.', template: '%s | MyBrandsBuddy' }, description: site.description, openGraph: { type: 'website', locale: 'en_IN', siteName: site.name, title: site.tagline, description: site.description, images: [{ url: '/opengraph-image', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image' }, robots: { index: true, follow: true } };
export const viewport: Viewport = { themeColor: '#0b0b21' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({ '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, email: site.email, description: site.description, areaServed: 'India' }) }}/></body></html>; }
