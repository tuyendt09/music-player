import { defineConfig } from 'astro/config';

// Static, read-only showcase — no adapter, no SSR.
// Output is a plain `dist/` folder deployable to any static host.
//
// Deployed to GitHub Pages as a *project* site → served under /<repo>/.
// `site` + `base` must match the repo, and all asset paths go through
// withBase() (src/utils/base.ts) so they resolve under that subpath.
// If you later attach a custom domain (root), set base to '/'.
export default defineConfig({
  output: 'static',
  site: 'https://tuyendt09.github.io',
  base: '/music-player',
  compressHTML: true,
});
