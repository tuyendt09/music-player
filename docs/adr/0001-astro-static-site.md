# Build the Showcase as a static Astro site

The Showcase is a content-light, design-heavy, read-only site (~5 songs, one page, no backend). We chose **Astro** because it ships almost zero JavaScript by default (fast, premium feel), models a "collection of songs" cleanly, and exports to plain static files deployable to any host. Considered vanilla Vite (more manual wiring), Next.js (heavier than needed for one page), and no-build plain HTML (poor reuse/DRY). Astro is the best fit; the only JS shipped is the small audio-player/modal interactivity.

Deploy target is **Cloudflare Pages** (static `dist/` output); the site is host-agnostic and can move if needed.
