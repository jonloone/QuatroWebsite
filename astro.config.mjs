import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://quatro.io',
  redirects: {
    '/industries/space-satcom': '/industries/networks',
    '/industries/infrastructure': '/industries/networks',
    '/solutions/satellite-revenue-assurance': '/solutions/hybrid-service-assurance',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
})
