import type { NextConfig } from 'next';
const dev = process.env.NODE_ENV !== 'production';
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${dev ? ' ws: wss:' : ''}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
].join('; ');
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/services/seo', destination: '/services/seo-local-search', permanent: true },
      {
        source: '/services/social-media',
        destination: '/services/social-media-marketing',
        permanent: true,
      },
      {
        source: '/services/brand-strategy',
        destination: '/services/branding-brand-strategy',
        permanent: true,
      },
      {
        source: '/services/website-design',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/services/paid-ads',
        destination: '/services/performance-marketing',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          ...(!dev ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000' }] : []),
        ],
      },
    ];
  },
};
export default nextConfig;
