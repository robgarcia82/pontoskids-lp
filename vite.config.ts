import { defineConfig } from 'vite';

// PAGES_BASE=/pontoskids-lp/ é definido pelo workflow do GitHub Pages; local e build único usam '/'.
export default defineConfig({
  base: process.env.PAGES_BASE ?? '/',
});
