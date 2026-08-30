/// <reference types="astro/client" />

// Vite `?raw` imports: load a file's contents as a string at build time.
declare module '*.yaml?raw' {
  const content: string;
  export default content;
}
