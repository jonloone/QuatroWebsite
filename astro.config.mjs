import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://quatro.io',
  redirects: {
    '/industries/space-satcom': '/industries',
    '/industries/infrastructure': '/industries',
    '/industries/finance': '/industries',
    '/industries/broadcast-media': '/industries',
    '/industries/networks': '/industries',
    '/industries/industrial': '/industries/energy',
    '/industries/transportation': '/industries/cities',
    '/industries/water-environment': '/industries/environment',
    '/solutions/satellite-revenue-assurance': '/solutions/hybrid-service-assurance',
    '/network': '/how-it-works',
    '/platform': '/how-it-works',
    '/utility': '/how-it-works',
    '/utility/how-it-starts': '/how-it-works/engagement',
    '/utility/technology': '/how-it-works',
    '/utility/xops': '/capabilities/operational-intelligence',
    '/industries/defense': '/industries/security',
    '/industries/critical-infrastructure': '/industries/security',
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