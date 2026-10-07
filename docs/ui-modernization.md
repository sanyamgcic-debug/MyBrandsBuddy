# UI modernization

The existing purple/navy theme and typed business content are retained. The supplied brand guide informs the purple Brands wordmark, rocket motif, typography and contrast.

## Design system

- Tailwind CSS 4.3.3 runs through @tailwindcss/postcss in postcss.config.mjs.
- src/app/framework.css defines Tailwind and the custom daisyUI 5.7.47 theme. daisyUI uses the du- prefix to avoid existing selector collisions.
- src/app/modern.css contains responsive refinements, component surfaces, focus states and reduced-motion fallbacks. It loads after existing base and premium styles.
- Montserrat is served locally through @fontsource-variable/montserrat; no external font request is required.
- Business content remains in src/data. Service-search interface copy lives in src/data/interface.ts.

## React Bits and motion

Adapted copies of React Bits BlurText and SpotlightCard live in src/components/react-bits. The full upstream MIT + Commons Clause license is preserved in LICENSE.md. BlurText uses motion/react with visible server-rendered text and screen-reader text. Spotlight follows fine pointers only; both respect reduced-motion preferences. PageTools adds reading progress and a keyboard-friendly return-to-top control. Mobile navigation makes page tools inert while open.

Sources:

- https://github.com/DavidHDev/react-bits/tree/main/src/ts-default/TextAnimations/BlurText
- https://github.com/DavidHDev/react-bits/tree/main/src/ts-default/Components/SpotlightCard
- https://tailwindcss.com/docs/installation/framework-guides/nextjs
- https://daisyui.com/docs/install/nextjs/

## Interaction behavior

The service directory combines category filtering and text search, with live counts and a resettable empty state. Service enquiry and pricing links retain preselected contact context. Forms use daisyUI controls, inline feedback, focus on invalid fields, consent and pending-state protection. The form prepares an explicit email draft until server delivery is configured; no live delivery is claimed.

## Verification

See verification.md. Browser tests cover all public routes, internal links, responsive overflow, automated accessibility, menus, forms and new interactions. Native Safari and Firefox have not been separately tested.
