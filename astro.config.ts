import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jmferreirab.github.io',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
  prefetchAll: true,
});
