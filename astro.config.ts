import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.VERCEL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://jmferreirab.github.io';

export default defineConfig({
  site: site,
  base: process.env.VERCEL ? '/' : '/portfolio',
  integrations: [],
  vite: { plugins: [tailwindcss()] },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
