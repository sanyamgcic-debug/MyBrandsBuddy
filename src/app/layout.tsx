import { copy } from '@/data/copy';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { site } from '@/data/site';
import { serializeJsonLd } from '@/lib/seo';
import { Manrope } from 'next/font/google';
import '@fontsource-variable/montserrat';
import './framework.css';
import './globals.css';
import './premium.css';
import './modern.css';
import { PageTools } from '@/components/page-tools';
import { SmoothScroll } from '@/components/smooth-scroll';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'MyBrandsBuddy | The Best Buddy for Your Business',
    template: '%s | MyBrandsBuddy',
  },
  description: site.description,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/brand/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    title: site.tagline,
    description: site.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#0b0b21' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="mybrandsbuddy" data-scroll-behavior="smooth">
      <body className={manrope.variable}>
        <a href="#main-content" className="skip-link">
          {copy.app_layout.skip_to_content}
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <PageTools />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              url: site.url,
              logo: `${site.url}/brand/logo-wide.png`,
              slogan: 'The Best Buddy for Your Business',
              email: site.email,
              description: site.description,
              areaServed: 'India',
            }),
          }}
        />
      </body>
    </html>
  );
}
