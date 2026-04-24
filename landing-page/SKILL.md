---
name: astro-tailwind-motion-lenis
description: Use this skill to build visually striking Astro landing pages or microsites with Tailwind CSS, Motion for entrance/hover/scroll reveal animation, and Lenis for smooth scrolling. Trigger when the user asks for an Astro + Tailwind page, animated landing page, high-end landing page template, Motion/Lenis interaction system, or a reusable frontend project skeleton.
---

# Astro Tailwind Motion Lenis

Build a polished Astro landing page or microsite using:

- Astro for page structure and content islands only when needed.
- Tailwind CSS for layout, tokens, responsive styling, and component utilities.
- Motion for entrance animation, hover response, scroll reveal, and lightweight timeline effects.
- Lenis for smooth scrolling with reduced-motion respect.

## Start From The Template

Copy `template/` into the target project, then adapt content and visuals before adding abstractions.

Expected template shape:

```text
template/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
└── src/
    ├── components/
    │   ├── FeatureRail.astro
    │   ├── Hero.astro
    │   └── MetricsBand.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

Use `npm install`, `npm run dev`, and `npm run build` from the copied project.

## Experience Rules

1. First viewport must show the product, brand, venue, or object clearly. Use real or generated bitmap media when the topic is concrete; do not rely on abstract decoration as the primary visual.
2. Make the page feel built, not assembled: strong type scale, dense but readable spacing, and deliberate contrast between editorial sections, metrics, and action areas.
3. Use animation to clarify hierarchy. Entrance effects should be fast, staggered, and directional; hover effects should respond to intent; scroll reveals should be subtle and one-time.
4. Respect `prefers-reduced-motion`. Disable Lenis and use simple opacity transforms when reduced motion is requested.
5. Keep cards for repeated items only. Avoid nested cards and avoid decorative blobs/orbs.
6. Use a multi-accent palette. Do not let the whole page become a single purple, beige, brown, or dark-blue theme.
7. Build responsive constraints into fixed-format elements such as hero media, metric tiles, and feature rows so hover states cannot shift layout.

## Implementation Pattern

Use Astro components for sections and a single inline module script for page-level Motion/Lenis behavior:

```js
import Lenis from "lenis";
import { animate, inView, stagger } from "motion";
```

Recommended behavior:

- Initialize Lenis only when reduced motion is not requested.
- Animate `[data-hero]` elements on load with `stagger`.
- Reveal `[data-reveal]` elements with `inView(..., { margin: "-12% 0px" })`.
- Add hover response to `[data-magnetic]` using pointer movement and reset on pointer leave.
- Keep animation durations under 0.9 seconds unless the effect is intentionally ambient.

## Quality Bar

Before finishing:

- Run formatting or the repo's normal checks if available.
- Run `npm run build` for generated Astro projects when dependencies are installed.
- Inspect desktop and mobile widths for text overflow, overlapping UI, blank media, and broken animation assumptions.
- If the project cannot be built because dependencies are not installed or network is blocked, state that clearly and leave the file tree ready to install.
