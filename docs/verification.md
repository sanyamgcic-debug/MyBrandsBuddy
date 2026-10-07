# Verification

Validated against the local production build on 6 October 2026.

- Production build: passed, generating all 38 build-time page/metadata entries.
- TypeScript, ESLint and Prettier: passed.
- Unit/API tests: 8 passed, including phone/budget validation, origin restrictions, body limits, rate limiting, safe JSON-LD and mocked delivery success/failure.
- Browser coverage: all 34 desktop/mobile Chromium tests passed with no failures or retries, including service search/reset, reduced motion, JavaScript-disabled headline readability, and scroll-to-top keyboard focus.
- All 31 public pages return 200, have one H1 and canonical metadata, and produce no page runtime errors. Internal page links were checked.
- All 31 pages fit 320, 768 and 1024 CSS-pixel viewports, as well as the desktop/mobile project viewports.
- Axe WCAG 2 A/AA and WCAG 2.1 AA checks: no violations on all public pages and expanded navigation menus. Reduced motion is enabled during these audits to avoid measuring transient animation opacity.
- Verified capability buttons, seven growth levers, industry explorer, work filters, service mega menu, mobile Escape/focus handling, FAQs, blog filters/empty states, pricing preselection, service enquiry preselection, required consent, and explicit email-draft handoff.
- All 13 primary service pages have six inclusions, four process steps, three FAQs and three related services. Their visual themes and full-page screenshots were inspected on desktop and mobile; main pages were also captured and reviewed.
- Verified useful server-rendered service content with JavaScript disabled.
- Verified permanent legacy service redirects, security headers, sitemap, robots, social preview image and 404 behavior.
- Second polish pass corrected contrast, pricing surfaces, footer hierarchy, form readability, search illustration sizing, shared CTAs and spacing. The final app build contains these changes.

External delivery was mocked. No live webhook credentials are configured and no real enquiry was sent. The form honestly prepares an email draft until a delivery endpoint is configured. Chromium was tested; native Safari and Firefox were not separately verified. Automated checks do not constitute a complete accessibility or security audit.

UI modernization adds Tailwind CSS 4, daisyUI 5, locally hosted Montserrat, and adapted React Bits BlurText/SpotlightCard components. See ui-modernization.md for maintenance and licensing.
