import { ImageResponse } from 'next/og';
export const alt = 'MyBrandsBuddy — Small businesses. Bigger tomorrows.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '70px 85px',
        background: '#0b0b21',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: 28, display: 'flex', color: '#d2a4ff', marginBottom: 65 }}>
        MyBrandsBuddy.
      </div>
      <div style={{ fontSize: 74, fontWeight: 700, display: 'flex' }}>Small businesses.</div>
      <div style={{ fontSize: 74, fontWeight: 700, display: 'flex', color: '#ce8cf5' }}>
        Bigger tomorrows.
      </div>
      <div style={{ fontSize: 23, display: 'flex', marginTop: 38, color: '#c7c0d4' }}>
        SEO · Social media · Brand strategy · Your growth buddy
      </div>
    </div>,
    { ...size },
  );
}
