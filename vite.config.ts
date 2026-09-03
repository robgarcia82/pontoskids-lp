import { defineConfig } from 'vite';

// PAGES_BASE=/pontoskids-lp/ é definido pelo workflow do GitHub Pages; local e build único usam '/'.
export default defineConfig({
  base: process.env.PAGES_BASE ?? '/',
  build: {
    rollupOptions: {
      output: {
        // Nomes estáveis (sem hash): um HTML em cache nunca aponta para um CSS/JS que deixou de existir
        // entre dois deploys no GitHub Pages (que guarda respostas por 10 minutos).
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
