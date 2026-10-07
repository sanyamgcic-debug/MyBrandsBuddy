# Exact service content implementation

Source: `Pasted markdown.md`, copied byte-for-byte from the supplied Downloads file.

SHA-256: `cc528f8df970d7f18c8d3e881b1f3a66633f9330300b866c186b1cf27bc0ddc5`

The complete source was read before changes. Its 12 service-page sections are rendered from structured data without rewriting. Site-wide overview/footer suggestions were not applied, preserving unrelated pages and the existing footer as requested.

## Page audit

| Page                                                          | Route                                     | Verification                                         | Visual                                             |
| ------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| 1 — Social Media Marketing & Management                       | `/services/social-media-marketing`        | PASS — exact copy + SEO + responsive + accessibility | Social content and Reel card composition           |
| 2 — Branding & Brand Strategy                                 | `/services/branding-brand-strategy`       | PASS — exact copy + SEO + responsive + accessibility | Typography, colour swatches and identity board     |
| 3 — Business & Marketing Consulting                           | `/services/business-marketing-consulting` | PASS — exact copy + SEO + responsive + accessibility | Audience/offer/channel strategy diagram            |
| 4 — Business Loan Assistance & Guidance                       | `/services/business-loan-assistance`      | PASS — exact copy + SEO + responsive + accessibility | Application readiness and documentation sheet      |
| 5 — Website Development (WordPress & Custom Code)             | `/services/website-development`           | PASS — exact copy + SEO + responsive + accessibility | Browser mockup and development interface           |
| 6 — Graphic Design & Creative Content                         | `/services/graphic-design`                | PASS — exact copy + SEO + responsive + accessibility | Layered typography posters and design boards       |
| 7 — Video Editing & Video Production                          | `/services/video-production`              | PASS — exact copy + SEO + responsive + accessibility | Cinema camera image with video treatment           |
| 8 — Photography & Videography                                 | `/services/photography-videography`       | PASS — exact copy + SEO + responsive + accessibility | New product-photography studio image               |
| 9 — iPhone & Camera Shoots                                    | `/services/iphone-camera-shoots`          | PASS — exact copy + SEO + responsive + accessibility | New smartphone and compact-camera cafe shoot image |
| 10 — Content Creation                                         | `/services/content-creation`              | PASS — exact copy + SEO + responsive + accessibility | Editorial calendar and content workflow            |
| 11 — Performance Marketing                                    | `/services/performance-marketing`         | PASS — exact copy + SEO + responsive + accessibility | Campaign funnel and targeting diagram              |
| 12 — Real Estate Marketing (Video Shoots, Ads & Social Media) | `/services/real-estate-marketing`         | PASS — exact copy + SEO + responsive + accessibility | Courtyard residence image and property framing     |

## Content and SEO

The importer preserves paragraphs, list items, ordered steps, emphasis, headings, FAQs and CTA strings. Only Markdown syntax becomes HTML. An independent browser audit reads the original source and compares the entire rendered copy in order, plus exact title, description, Open Graph fields, canonical, one H1, and real contact-form preselection. Absolute Next.js titles prevent the global brand suffix being appended twice.

FAQ answers are rendered on the server and initially expanded. The existing SEO/local-search and two legacy service routes retain their previous implementation. Header, footer, navigation, global styles and unrelated page files remain unchanged.

## Links and assets

All contact buttons use `/contact?service=...`, with the existing service name so form validation and preselection remain compatible. No WhatsApp URL or phone number exists in the project; that supplied label is retained as a disabled control with a visible explanation. Configure `serviceContact.whatsappUrl` in `src/data/service-copy.ts` when a verified URL is supplied. No destination was invented.

Two generated editorial assets were added: photography-studio.webp (96,788 bytes) and mobile-content-shoot.webp (158,078 bytes). They are concept imagery, not client-project evidence. Existing code-native service artwork, cinema imagery and property imagery are reused in their relevant contexts. Next Image uses responsive sizes and priority for the single hero; there are no duplicate below-fold hero images.

## Maintenance

Edit the authoritative source, then run `node scripts/import-service-copy.mjs`. The generated JSON has a typed facade in `src/data/service-copy.ts`. The source Markdown is excluded from Prettier to preserve its exact bytes. Run `pnpm build`, then the exact-content browser suite against the production preview.

## Files changed in this request

- Pasted markdown.md (source copy added)
- .prettierignore (protect source formatting)
- scripts/import-service-copy.mjs (importer)
- src/data/service-copy.json (all 12 source pages)
- src/data/service-copy.ts (types and link configuration)
- src/components/exact-service-page.tsx (server renderer)
- src/components/exact-service-page.css (scoped styles)
- src/app/services/[slug]/page.tsx (route selection and exact SEO)
- public/images/photography-studio.webp
- public/images/mobile-content-shoot.webp
- tests/e2e/exact-content.spec.ts (source-to-browser audit)
- tests/e2e/upgrade.spec.ts (existing assertions updated for supplied section counts and CTA location)
- docs/service-content-audit.md (this report)

## Validation

- Production build passed (38 generated page/metadata entries); TypeScript passed during the build.
- ESLint and repository-wide Prettier checks passed.
- All 24 exact-content browser checks passed (12 pages × desktop/mobile Chromium), with no failures or retries.
- Every page matches the source H1, subheadline, intro, section headings, paragraphs, list items, numbered steps, FAQ text and CTA text. Only Markdown syntax and whitespace layout are normalised in comparison.
- Exact SEO titles/descriptions and Open Graph titles/descriptions passed; canonical URLs and one H1 verified.
- All 12 pages passed automated WCAG A/AA checks and overflow checks at 320, 768 and 1280 CSS pixels. Native Safari and Firefox were not separately tested.
- All contact CTAs reached the existing contact form with the correct service selected.
- Desktop/mobile screenshots captured for every page. All twelve desktop hero treatments and the mobile content layout were visually reviewed.
- Eight existing unit/API tests passed.
- The source copy is byte-identical to the supplied 700-line file, verified by SHA-256.
- Shared navigation/route regression: 10 checks passed across desktop/mobile, including all 31 public routes, internal links, service enquiry preselection, menus and server-rendered content.
