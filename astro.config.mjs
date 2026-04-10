import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://quatro.io',
  redirects: {
    '/industries/space-satcom': '/industries/networks',
    '/industries/infrastructure': '/industries/networks',
    '/solutions/satellite-revenue-assurance': '/solutions/hybrid-service-assurance',
    '/network': '/utility',
    '/platform': '/utility',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap(), react()],
  vite: {
    cacheDir: '/tmp/vite-cache',
    css: {
      postcss: './postcss.config.mjs',
    },
  },
})