# MyBrandsBuddy

A complete Next.js App Router website for MyBrandsBuddy, using the supplied startup kit, growth strategy workbook and visual reference.

## Run locally

Use Node.js 24 LTS and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. For a production server:

```sh
pnpm build
pnpm start
```

## Edit the content

All business content is maintained in typed modules in `src/data`:

| File              | What to edit                                                         |
| ----------------- | -------------------------------------------------------------------- |
| `site.ts`         | Brand, email, URL, navigation, industries, process, reasons and FAQs |
| `copy.ts`         | Page headings, section labels, page prose and component text         |
| `services.ts`     | Service descriptions, deliverables, audiences and detail pages       |
| `pricing.ts`      | Monthly packages, features, add-ons and pricing notes                |
| `case-studies.ts` | Illustrative growth plans, phases and expected targets               |
| `blog.ts`         | Articles, topics, excerpts and complete article sections             |
| `about.ts`        | Brand story and values                                               |

Adding an item to the services, case studies or blog arrays generates its detail route and sitemap entry. Keep each slug unique. The copy catalog groups presentation text by route or component; JSX layouts remain in the pages. `scripts/extract-copy.mjs` is the guarded one-time migration used to create the catalog; editing does not require running it.

## Premium agency upgrade

The primary service directory contains 13 complete services. Edit `src/data/services.ts` for service content and `src/data/agency.ts` for positioning, industries, work concepts, budgets, and onboarding steps. Existing specialist URLs are preserved through `legacy-services.ts`; five renamed services use permanent redirects in `next.config.ts`.

`premium.css` layers the dark editorial design system over the retained base components. `service-visual.tsx` provides distinct art direction by discipline. Small client components handle the mega menu, capability explorer, service directory, growth levers, industry stories and concept filters. Work is explicitly labelled as concepts, not verified client results. `/get-started` preserves the selected service from the enquiry link.

## Contact delivery

Without credentials, the validated form prepares a `mailto:` draft. The visitor must send it in their own email app. The UI clearly states that no website submission occurred. A direct email link is also provided.

For direct submission, copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`: the canonical production origin; rebuild after changing it.
- `CONTACT_WEBHOOK_URL`: an HTTPS endpoint under your control that accepts enquiry JSON.
- `CONTACT_WEBHOOK_TOKEN`: a server-only bearer token for that endpoint.

The endpoint receives `{ name, email, business, phone, budget, interest, message, consent, source }` and must return a successful 2xx response only after accepting delivery. It is responsible for routing the enquiry to your mailbox/CRM and any durable storage. The website does not store enquiries. Never put the token in a `NEXT_PUBLIC_` variable. Do not configure a public request-inspection service with real visitor data.

No external delivery credentials were supplied, and no live enquiries were sent during implementation. The delivery success/failure paths are tested with mocked requests.

## Architecture

- Server-rendered App Router layouts and pages; static generation for marketing and detail pages.
- Small client components for mobile navigation, category filters and the contact form.
- Typed content modules separated from reusable UI components and page composition.
- Plain CSS with shared color, spacing, radius and layout tokens; responsive breakpoints and reduced-motion support.
- Local CSS/SVG concept illustrations and two optimized WebP editorial images; no remote image or font requests.
- Node.js contact route with shared Zod validation, strict origin checks, a 16 KiB body limit, honeypot, timeout and bounded per-process rate limits.
- Canonical metadata, social preview image, organization/article structured data, sitemap and robots rules.

See [content provenance](docs/content-provenance.md) and [security notes](docs/security.md).

## Verify

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
pnpm format:check
pnpm audit --prod
```

Playwright runs against the production build, on desktop Chromium and a mobile Chromium viewport. It checks every public route, horizontal overflow, metadata, filters, navigation, package selection, contact validation, security headers, error pages, social previews and automated WCAG AA rules. Screenshots and failure traces go to ignored test output folders. Automated accessibility checks complement manual review; they are not a full accessibility certification.

ESLint is pinned to 9.39.1 because the React, import and accessibility plugins bundled with the current Next.js config do not support ESLint 10. TypeScript is pinned to a compatible stable version. The lockfile is committed for reproducible installation. Only the esbuild and unrs-resolver installation scripts are allowed.

## Deployment

Deploy as a Node.js Next.js application, not a static export: the contact page and API are dynamic. Run the production build, configure the environment variables on the host, and serve over HTTPS. There is no dependency on a particular hosting provider. Before enabling form delivery, verify the actual destination with a controlled test enquiry. Multi-instance deployments should add shared rate limiting at the hosting/WAF layer.
