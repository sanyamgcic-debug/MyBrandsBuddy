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
        <div style={{ fontSize: 32, fontWeight: 800, display: 'flex', letterSpacing: '-1px' }}>
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
