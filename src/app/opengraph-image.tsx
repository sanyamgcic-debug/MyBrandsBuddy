import { ImageResponse } from 'next/og';

export const alt = 'MyBrandsBuddy — The Best Buddy for Your Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '70px 85px',
        background: '#0b0b21',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 8C48 8 36 12 28 24C24 30 24 36 24 36L16 44L24 44L28 52L36 44C36 44 42 44 48 40C60 32 64 20 64 20C64 20 52 24 48 8Z"
            fill="url(#og_grad)"
          />
          <circle cx="42" cy="22" r="5" fill="#0b0b21" />
          <path
            d="M14 46C10 50 8 56 12 58C16 60 22 56 26 50C20 52 16 50 14 46Z"
            fill="#a855f7"
          />
          <defs>
            <linearGradient id="og_grad" x1="16" y1="52" x2="64" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7c3aed" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ fontSize: 34, fontWeight: 800, display: 'flex', letterSpacing: '-1px' }}>
          My<span style={{ color: '#b98af7' }}>Brands</span>Buddy
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            fontSize: 66,
            fontWeight: 800,
            display: 'flex',
            lineHeight: 1.15,
            letterSpacing: '-2px',
            color: '#ffffff',
          }}
        >
          The Best Buddy
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 800,
            display: 'flex',
            lineHeight: 1.15,
            letterSpacing: '-2px',
            color: '#ce8cf5',
          }}
        >
          for Your Business.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: 28,
        }}
      >
        <div style={{ fontSize: 22, display: 'flex', color: '#c7c0d4' }}>
          SEO · Social Media · Brand Strategy · Growth
        </div>
        <div style={{ fontSize: 22, display: 'flex', color: '#b98af7', fontWeight: 600 }}>
          mybrandsbuddy.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
