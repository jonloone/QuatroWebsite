import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://withquatro.com',
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
    // NRG-5 sweep (2026-10-23): the last §3 source and the /es/ mirrors
    '/utility/what-you-get': '/capabilities',
    '/es/utility': '/es/how-it-works',
    '/es/utility/xops': '/es/capabilities/operational-intelligence',
    '/es/utility/technology': '/es/how-it-works',
    '/es/utility/how-it-starts': '/es/how-it-works/engagement',
    '/es/utility/what-you-get': '/es/capabilities',
    '/es/industries/finance': '/es/industries',
    '/es/industries/broadcast-media': '/es/industries',
    '/es/industries/networks': '/es/industries',
    '/es/industries/transportation': '/es/industries/cities',
    '/es/industries/water-environment': '/es/industries/environment',
    '/es/industries/critical-infrastructure': '/es/industries/security',
    '/es/solutions': '/es/capabilities',
    // ES-IND-1 (2026-10-23): ES mirrors of the IND-4/IND-6 merges and folds
    '/es/industries/defense': '/es/industries/security',
    '/es/industries/industrial': '/es/industries/energy',
    '/es/industries/infrastructure': '/es/industries',
    '/es/industries/space-satcom': '/es/industries',
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