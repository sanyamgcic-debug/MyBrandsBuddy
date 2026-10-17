# MyBrandsBuddy Design System Master (Source of Truth)
*Generated via `ui-ux-pro-max` intelligence system*

## 1. Project & Brand Overview
- **Project Name:** MyBrandsBuddy
- **Industry:** Digital Marketing, Creative Production, Real Estate Marketing & Strategy
- **Core Aesthetic:** Modern Editorial Minimal + High-Contrast Luxury Real Estate Cinema + Dark Neon / Glassmorphic Accents
- **Tech Stack:** Next.js (App Router), React 19, Tailwind CSS 4, DaisyUI 5, Lucide React, Motion

---

## 2. Layout, Responsive Breakpoints & Margin Architecture

### Standardized Container Widths & Side Gutters
In accordance with UI/UX Pro Max guidelines (Rule Priority 5: Layout & Responsive), side margins are optimized to maximize readable content area without cramping on mobile or stranding text on ultra-wide screens.

| Viewport Category | Screen Width | Container Width | Effective Side Margins |
| :--- | :--- | :--- | :--- |
| **Large Desktop / 4K** | ≥ 1280px | `min(1280px, calc(100% - 48px))` | 24px minimum side gutter (centered) |
| **Desktop / Laptop** | 1025px - 1279px | `calc(100% - 48px)` | 24px each side |
| **Tablet Landscape / iPad** | 769px - 1024px | `calc(100% - 40px)` | 20px each side |
| **Mobile / Tablet Portrait** | 481px - 768px | `calc(100% - 32px)` | 16px each side |
| **Mobile Standard** | 381px - 480px | `calc(100% - 28px)` | 14px each side |
| **Compact Mobile** | ≤ 380px | `calc(100% - 20px)` | 10px each side |

### Spacing Scale
- Section vertical rhythm: `padding: 100px 0` on desktop, `padding: 65px 0` on tablet, `padding: 50px 0` on small mobile.
- Card padding: `p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12` (never fixed `p-8` on 360px viewports).
- Real estate section wrappers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (replacing legacy `px-20` / 80px side margins).

---

## 3. Color Tokens
- **Background Deep:** `#0d0b1c` / `#070709` / `#000000` (Matte Black Surface)
- **Paper / Light Surface:** `#ffffff` / `#f8f9fa`
- **Primary Brand Purple:** `#8b5cf6` (Rocket Violet)
- **Deep Purple:** `#662d91`
- **Soft Accent:** `#c8a4ff` / `#d8b4fe`
- **High-Intent Emerald:** `#25D366` / `#34d399` (WhatsApp & Conversion Action)
- **Border / Hairline:** `rgba(255, 255, 255, 0.12)` (Dark), `rgba(0, 0, 0, 0.08)` (Light)

---

## 4. Typography
- **Display & Headings:** `Montserrat Variable`, `Manrope`, sans-serif (`font-weight: 550` to `700`, `letter-spacing: -0.04em` to `-0.055em`)
- **Body:** `Manrope`, Arial, sans-serif (`font-size: 15px - 16px`, `line-height: 1.7 - 1.8`)
- **Editorial Sub-headlines:** Serif italic accents (`font-serif italic font-normal`)
- **Monospace Tags & Eyebrows:** `font-mono tracking-widest uppercase`

---

## 5. Interaction & Accessibility Checks (Pre-Delivery Verified)
- [x] All buttons and interactive links meet minimum touch target sizes (≥ 44×44px).
- [x] Visible focus rings provided via `:focus-visible` with high contrast (`#9e59ed` / `#c8a4ff`).
- [x] Decorative icons hidden with `aria-hidden="true"`; standalone actionable buttons have descriptive `aria-label`s.
- [x] No emojis used as structural interface icons (clean vector Lucide SVGs throughout).
- [x] Respects `prefers-reduced-motion` for background video and spring animations.
- [x] Form inputs include visible labels, autocomplete hints, and inline recovery guidance.
- [x] Planetary orbit system scales gracefully down to compact 360px mobile viewports without horizontal clipping.
