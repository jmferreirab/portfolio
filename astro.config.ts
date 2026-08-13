import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mandev.github.io',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
  prefetchAll: true,
});
