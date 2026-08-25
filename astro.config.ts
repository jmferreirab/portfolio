import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://jmferreirab.github.io',
  base: '/portfolio',
  integrations: [],
  vite: { plugins: [tailwindcss()] },
  compressHTML: true,
  prefetch: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true },
  },
});
