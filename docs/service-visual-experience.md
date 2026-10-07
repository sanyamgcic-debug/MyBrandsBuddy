# Service visual experience — implementation report

Implemented and verified on 7 October 2026 (Asia/Calcutta).

## Scope and visual concepts

All 13 primary services and both retained legacy services have their own implemented scene. Header, footer, navigation, logo, global typography, source copy, routing and SEO metadata were preserved.

| Route under /services/        | Visual concept and progression                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| social-media-marketing        | Publishing phone, editorial calendar and conversation slip; Idea → Content → Publish → Community             |
| branding-brand-strategy       | Guideline book, construction grid, colour system and stationery; Sketch → Identity → System → Brand          |
| business-marketing-consulting | Dimensional milestone roadmap and priorities sheet; Analyse → Plan → Execute → Review                        |
| business-loan-assistance      | Folder, application sheet and preparation checklist; Requirements → Documents → Application → Guidance       |
| website-development           | Desktop, tablet and phone with related responsive interfaces; Design → Desktop → Tablet → Mobile             |
| graphic-design                | Cutting mat, typography poster, swatches, ruler and packaging; Sketch → Type → Colour → Compose              |
| video-production              | Editing monitor, tracks, playhead, grade wipe, clapper and lens; Footage → Edit → Grade → Export             |
| photography-videography       | Product set, softbox, camera, focus frame and contact print; Frame → Light → Focus → Capture                 |
| iphone-camera-shoots          | Gimbal-mounted phone, ring light and export frame; Capture → Reel → Story → Post                             |
| content-creation              | Bound notebook, script sheet and publication layout; Idea → Script → Content → Publish                       |
| performance-marketing         | Audience console, creative A/B pair and layered funnel; Awareness → Interest → Consider → Convert            |
| real-estate-marketing         | Architectural plinth, property frame, floor plan and listing device; Property → Content → Campaign → Enquiry |
| seo-local-search              | Crawl architecture, search results and code marker; Search → Crawl → Index → Discover                        |
| app-store-optimization        | App listing device, preview screens and discovery sheet; Listing → Screens → Discover → Review               |
| whatsapp-marketing            | Conversation device and opt-in sheet; Opt in → Message → Reply → Follow up                                   |

The artwork is original code-native composition, not copied Pinterest imagery. The paper/device surfaces use CSS transforms, perspective, layered gradients, restrained shadows and inline SVG. These are CSS 3D compositions, not mesh-based 3D models or WebGL simulations. No new raster assets were generated in this pass.

## Motion and interaction

- A small React controller coalesces pointer/scroll events into requestAnimationFrame updates.
- IntersectionObserver prevents motion work when the scene is offscreen. There is no continuous render loop, animation timer, video autoplay or heavy canvas.
- Fine pointers move depth layers subtly. Scroll advances the service-specific sequence; choosing a stage manually keeps that stage selected.
- Every stage has a keyboard-accessible button with aria-pressed. The scene has an accessible description and decorative sub-elements are hidden from screen readers.
- Reduced motion removes transitions, pointer movement and scroll progression. Manual stage selection remains available without animated interpolation.
- Mobile uses adjusted object proportions, placements and four compact touch controls; the visual is retained and does not require hover.
- Existing reveal behavior supports service process items. A connected numbered treatment and restrained CTA hover provide visual continuity below the hero.

## Reused assets and performance

The existing local WebP images are reused as contextual textures: mobile-content-shoot.webp, photography-studio.webp, production-studio.webp and residence-concept.webp. Images use Next Image responsive sizing, with priority only on principal hero textures. Secondary textures use default lazy loading. No third-party assets, fonts, videos or trackers were added.

No new package dependency was installed. The server component renders only the selected service composition, with a shared small client controller. The new scoped source CSS is approximately 41 KB before build minification/compression; controller source is approximately 3.6 KB. These are source sizes, not network bundle sizes.

Browser resource measurements across 30 desktop/mobile service visits recorded at most 264,453 encoded JavaScript bytes and 156,864 image bytes. These include the existing application, not just the scene. Browser caching and local conditions affect these values. They are not a field Core Web Vitals or Lighthouse score.

## Preservation and verification

- The approved 700-line Markdown and generated content hash remain unchanged.
- All 24 exact-source checks passed: twelve pages × desktop/mobile, verifying full text, exact SEO fields, canonical, one H1, contact preselection, accessibility and responsive overflow.
- All 32 scene checks passed: fifteen routes × desktop/mobile plus two pointer/scroll/no-JavaScript checks. All stage controls, images, console-error checks, 320/768/1280 layouts and reduced-motion fallbacks passed.
- Each service was opened by browser automation and its rendered screenshot inspected; mobile compositions were also reviewed.
- Production build, TypeScript, lint and formatting passed. Eight unit/API tests passed.
- Additional SEO/legacy accessibility and all-route regression: all eight desktop/mobile checks passed. All 31 public routes and their internal links remain valid.

## Changed files

- src/components/service-scenes/scene-frame.tsx — event and stage controller.
- src/components/service-scenes/service-scene.tsx — fifteen original scene compositions.
- src/components/service-scenes/service-scenes.css — scoped art direction, mobile and motion rules.
- src/components/exact-service-page.tsx — scene integration and process reveals; no copy change.
- src/app/services/[slug]/page.tsx — scene integration for SEO and retained legacy routes; SEO logic unchanged.
- tests/e2e/service-scenes.spec.ts — interaction, image, resource, viewport and accessibility verification.
- docs/service-visual-experience.md — this report.

## Limits

Native Safari/Firefox and real-user Core Web Vitals were not measured. Existing image textures are editorial concepts, not client evidence. The existing WhatsApp CTA remains disabled because no verified WhatsApp destination has been supplied; no number or URL was fabricated. Existing contact delivery configuration is unchanged.
