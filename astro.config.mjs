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
    '/solutions/satellite-revenue-assurance': '/capabilities',
    '/solutions': '/capabilities',
    '/network': '/how-it-works',
    '/platform': '/how-it-works',
    '/utility': '/how-it-works',
    '/utility/how-it-starts': '/how-it-works/engagement',
    '/utility/technology': '/how-it-works',
    '/utility/xops': '/capabilities/operational-intelligence',
    '/industries/defense': '/industries/security',
    '/industries/cities/galapagos-conservation': '/industries/environment/marine-reserve-vigilance',
    '/industries/industrial/mining-operations': '/industries/mining/mining-remediation',
    '/industries/energy/grid-operations': '/industries/energy/dry-season-operations',
    '/industries/defense/maritime-awareness': '/industries/security/maritime-awareness',
    '/industries/defense/base-protection': '/industries/security',
    '/industries/defense/mission-logistics': '/industries/security',
    '/industries/industrial/oee-optimization': '/industries/energy',
    '/industries/industrial/process-quality': '/industries/energy',
    '/industries/infrastructure/fleet-logistics': '/industries/cities',
    '/industries/infrastructure/noc-operations': '/industries/cities',
    '/industries/infrastructure/smart-facilities': '/industries/cities',
    '/industries/energy/predictive-maintenance': '/industries/energy',
    '/industries/cities/youth-violence-prevention': '/industries/cities',
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