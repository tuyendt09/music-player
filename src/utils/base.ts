// Prefix a root-relative asset path with Astro's configured `base`, so links
// work whether the site is served from a domain root ("/") or a GitHub Pages
// project subpath ("/music-player/"). Pass paths without a leading slash or
// with one — both are handled.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${BASE}/${path.replace(/^\//, '')}`;
}
