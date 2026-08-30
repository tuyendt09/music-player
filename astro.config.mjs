import { defineConfig } from 'astro/config';

// Static, read-only showcase — no adapter, no SSR.
// Output is a plain `dist/` folder deployable to any static host (Cloudflare Pages).
export default defineConfig({
  output: 'static',
  site: 'https://castrol-music-showcase.pages.dev',
  compressHTML: true,
});
