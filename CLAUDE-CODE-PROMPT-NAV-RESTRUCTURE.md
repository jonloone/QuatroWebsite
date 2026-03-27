# Claude Code Prompt — Navigation Restructure & Industries Hub

## Context

Quatro's website navigation is being consolidated from long dropdown menus to three clean top-level items:

**Platform | Industries | Company**

The Industries dropdown currently lists 10 individual industries. We are consolidating these into **5 industry pillars** that serve as the primary routing layer. Each pillar is a market-facing category that groups related sub-verticals. The `/industries` hub page becomes the primary routing surface.

Additionally, we are adding a **Finance** pillar (new content — banking, insurance, compliance).

## The 5 Industry Pillars

| Pillar | Sub-Verticals (existing pages) | New |
|--------|-------------------------------|-----|
| **Energy** | energy, industrial | Absorbs industrial as sub-vertical |
| **National Security** | defense, national-intelligence (hub + 3 sub-pages) | Merge into single pillar |
| **Networks** | space-satcom, broadcast-media, + solutions: teleport-operations, fleet-health, satellite-revenue-assurance, space-domain-awareness, network-operations | Telco/SATCOM convergence play |
| **Critical Infrastructure** | cities, water-environment, transportation, infrastructure, + solutions: port-operations, airport-operations, corridor-intelligence, water-systems, environmental-compliance | Public-sector & regulated-asset play |
| **Finance** | NEW — finance.md | Banking, insurance, compliance |

## Task 1 — Update `src/lib/navigation.ts`

### Primary Navigation (EN)

Replace the current Industries dropdown (10 items, variant `'featured'`) and Solutions dropdown with:

```typescript
// Remove the Solutions dropdown entirely (if still present)
// Replace Industries dropdown with 5 pillars:
{
  name: 'Industries',
  href: '/industries',
  variant: 'stacked',
  items: [
    { name: 'Energy', description: 'Oil, gas, renewables, grid, and industrial operations', href: '/industries/energy', icon: BoltIcon },
    { name: 'National Security', description: 'Defense and sovereign intelligence operations', href: '/industries/national-security', icon: ShieldIcon },
    { name: 'Networks', description: 'Satellite, telecom, and broadcast infrastructure', href: '/industries/networks', icon: SignalIcon },
    { name: 'Critical Infrastructure', description: 'Cities, water, transportation, and built environment', href: '/industries/critical-infrastructure', icon: BuildingLibraryIcon },
    { name: 'Finance', description: 'Banking, insurance, and regulatory compliance', href: '/industries/finance', icon: ChartBarIcon },
  ],
  cta: { name: 'All Industries', href: '/industries' },
},
```

### Primary Navigation (ES)

Mirror the same 5-pillar structure:

```typescript
{
  name: 'Industrias',
  href: '/industries',
  variant: 'stacked',
  items: [
    { name: 'Energía', description: 'Petróleo, gas, renovables, red eléctrica e industrial', href: '/industries/energy', icon: BoltIcon },
    { name: 'Seguridad Nacional', description: 'Defensa e inteligencia soberana', href: '/industries/national-security', icon: ShieldIcon },
    { name: 'Redes', description: 'Infraestructura satelital, telecomunicaciones y broadcast', href: '/industries/networks', icon: SignalIcon },
    { name: 'Infraestructura Crítica', description: 'Ciudades, agua, transporte y entorno construido', href: '/industries/critical-infrastructure', icon: BuildingLibraryIcon },
    { name: 'Finanzas', description: 'Banca, seguros y cumplimiento regulatorio', href: '/industries/finance', icon: ChartBarIcon },
  ],
  cta: { name: 'Todas las Industrias', href: '/industries' },
},
```

### Footer Navigation

Update the footer to reflect the new pillar structure. Keep all sub-verticals listed under their parent pillar for SEO:

**EN Footer — Industries section:**
```typescript
industries: {
  title: 'Industries',
  items: [
    { name: 'Energy', href: '/industries/energy' },
    { name: 'National Security', href: '/industries/national-security' },
    { name: 'Networks', href: '/industries/networks' },
    { name: 'Critical Infrastructure', href: '/industries/critical-infrastructure' },
    { name: 'Finance', href: '/industries/finance' },
  ],
},
```

**Keep Solutions in footer** for SEO — no changes to solutions footer section.

**Remove the separate `intelligence` footer section** — National Intelligence is now under National Security pillar.

### What to remove

- Remove the Solutions dropdown from primaryNavigationData (both EN and ES) if still present
- Remove the `intelligence` footer section (both EN and ES) — absorbed into National Security

## Task 2 — Redesign `/industries/index.astro` as Pillar Routing Hub

The Industries hub page becomes the primary discovery surface. Replace the current flat grid of 9 cards with a **pillar-first layout** — 5 large pillar cards, each showing its sub-verticals.

### New structure:

```astro
---
import { getCollection } from 'astro:content'
import MarketingLayout from '@/layouts/MarketingLayout.astro'
import Hero from '@/components/marketing/Hero.astro'
import Section from '@/components/marketing/Section.astro'
import CtaBanner from '@/components/marketing/CtaBanner.astro'

// Define the 5 pillars with their sub-vertical mappings
const pillars = [
  {
    name: 'Energy',
    slug: 'energy',
    description: 'Overlay modernization for grid, pipeline, and industrial operations. Unified intelligence across SCADA, DER, and distributed energy assets.',
    icon: 'bolt',
    subVerticals: [
      { name: 'Oil & Gas', href: '/industries/energy' },
      { name: 'Grid Operations', href: '/solutions/grid-operations' },
      { name: 'Pipeline Security', href: '/solutions/pipeline-security' },
      { name: 'Industrial & Manufacturing', href: '/industries/industrial' },
      { name: 'Asset Monitoring', href: '/solutions/asset-monitoring' },
    ],
    stat: { value: '75%', label: 'Fewer False Alarms' },
    href: '/industries/energy',
  },
  {
    name: 'National Security',
    slug: 'national-security',
    description: 'Unified command across physical, cyber, and intelligence domains — sovereign deployment, defense-grade compliance, and AI-powered operations in air-gapped environments.',
    icon: 'shield',
    subVerticals: [
      { name: 'Defense', href: '/industries/defense' },
      { name: 'National Intelligence', href: '/national-intelligence' },
      { name: 'Counter-Cartel Operations', href: '/national-intelligence/counter-cartel-operations' },
      { name: 'Physical Security', href: '/solutions/physical-security' },
    ],
    stat: { value: '80%', label: 'Fewer False Alarms' },
    href: '/industries/defense',
  },
  {
    name: 'Networks',
    slug: 'networks',
    description: 'Operational intelligence for the convergence of satellite, telecom, and broadcast infrastructure. Fleet health, signal chain, and revenue assurance at scale.',
    icon: 'signal',
    subVerticals: [
      { name: 'Space & SATCOM', href: '/industries/space-satcom' },
      { name: 'Broadcast & Media', href: '/industries/broadcast-media' },
      { name: 'Teleport Operations', href: '/solutions/teleport-operations' },
      { name: 'Network Operations', href: '/solutions/network-operations' },
      { name: 'Fleet Health', href: '/solutions/fleet-health' },
    ],
    stat: { value: '50+', label: 'Satellites Managed' },
    href: '/industries/space-satcom',
  },
  {
    name: 'Critical Infrastructure',
    slug: 'critical-infrastructure',
    description: 'Intelligence for the systems cities and nations depend on — water networks, transportation corridors, municipal operations, and the built environment.',
    icon: 'building',
    subVerticals: [
      { name: 'Cities & Municipal', href: '/industries/cities' },
      { name: 'Water & Environment', href: '/industries/water-environment' },
      { name: 'Transportation', href: '/industries/transportation' },
      { name: 'Infrastructure', href: '/industries/infrastructure' },
      { name: 'Port Operations', href: '/solutions/port-operations' },
    ],
    stat: { value: '8,000+', label: 'Connectors' },
    href: '/industries/cities',
  },
  {
    name: 'Finance',
    slug: 'finance',
    description: 'Intelligence products that unify the 15–30 systems your bank already operates. Customer 360, credit risk, NPA early warning, and regulatory compliance — production-ready in weeks.',
    icon: 'chart',
    subVerticals: [
      { name: 'Banking Intelligence', href: '/industries/finance' },
      { name: 'Customer 360', href: '/solutions/customer-360' },
      { name: 'Credit Risk', href: '/solutions/credit-risk' },
      { name: 'Regulatory Compliance', href: '/solutions/regulatory-compliance' },
      { name: 'Claims & Insurance', href: '/solutions/claims-classification' },
    ],
    stat: { value: '4–6 Weeks', label: 'To Production' },
    href: '/industries/finance',
  },
]
---

<MarketingLayout
  title="Industries — Operational Intelligence for Critical Operations"
  description="Quatro delivers operational intelligence across energy, national security, networks, critical infrastructure, and finance — 8,000+ integrations, deployed your way."
>
  <Hero
    variant="dark"
    eyebrow="Industries"
    title="Intelligence for the Operations That Matter Most"
    description="Five domains. One platform. Quatro delivers unified operational intelligence tailored to your sector — from grid operations to banking compliance."
    primaryCta={{ label: 'Schedule an Assessment', href: '/contact/demo' }}
  />

  <Section>
    <div class="space-y-8">
      {pillars.map((pillar, index) => (
        <div class={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          <!-- Pillar card -->
          <div class="flex-1 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 text-brand-600">
                <!-- Icon placeholder — use phosphor or heroicon by pillar.icon -->
              </span>
              <h2 class="font-display text-2xl font-bold text-neutral-800">{pillar.name}</h2>
            </div>
            <p class="text-neutral-600 mb-6">{pillar.description}</p>
            <div class="flex items-center gap-2 mb-6">
              <span class="text-2xl font-bold text-brand-600">{pillar.stat.value}</span>
              <span class="text-sm text-neutral-500">{pillar.stat.label}</span>
            </div>
            <a
              href={pillar.href}
              class="inline-flex items-center font-display text-sm font-semibold text-brand-500 hover:underline"
            >
              Explore {pillar.name} &rarr;
            </a>
          </div>

          <!-- Sub-verticals list -->
          <div class="lg:w-72 flex-shrink-0">
            <h3 class="font-display text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Solutions
            </h3>
            <ul class="space-y-2">
              {pillar.subVerticals.map((sub) => (
                <li>
                  <a
                    href={sub.href}
                    class="group flex items-center gap-2 text-sm text-neutral-700 hover:text-brand-600"
                  >
                    <span class="h-1.5 w-1.5 rounded-full bg-brand-400 group-hover:bg-brand-600" />
                    {sub.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>

  <CtaBanner
    title="See Operational Intelligence for Your Industry"
    description="Pick one challenge. We deploy on your systems in 4 weeks. You see the value before you commit."
    primaryCta={{ label: 'Schedule an Assessment', href: '/contact/demo' }}
    secondaryCta={{ label: 'Talk to an Engineer', href: '/contact/sales' }}
  />
</MarketingLayout>
```

### Key design decisions:
- Alternating layout (editorial style) — odd-indexed pillars reverse the flex direction
- Each pillar card shows: icon, name, description, hero stat, and link
- Sub-vertical sidebar shows clickable links to the actual detail pages
- No dropdown complexity — the page itself IS the navigation
- Responsive: stacks to single column on mobile

## Task 3 — Create National Security Hub Page

Create `src/pages/industries/national-security.astro` that serves as the landing page for the National Security pillar, routing to both Defense and National Intelligence:

- Hero section with National Security framing
- Two main cards: Defense + National Intelligence (with descriptions and links)
- Sub-pages listed under each (e.g., Counter-Cartel, Youth Vulnerability, Resource Protection under National Intelligence)
- This page does NOT need its own content collection entry — it's a routing page built directly in Astro

## Task 4 — Create Networks Hub Page

Create `src/pages/industries/networks.astro` — same pattern as National Security:

- Routes to Space & SATCOM and Broadcast & Media industry pages
- Lists solutions: Teleport Operations, Fleet Health, Satellite Revenue Assurance, Space Domain Awareness, Network Operations

## Task 5 — Create Critical Infrastructure Hub Page

Create `src/pages/industries/critical-infrastructure.astro`:

- Routes to Cities, Water & Environment, Transportation, Infrastructure
- Lists solutions: Port Operations, Airport Operations, Corridor Intelligence, Water Systems, Environmental Compliance

## Task 6 — No Changes to Existing Industry/Solution Content Files

The existing `.md` content files (energy.md, defense.md, cities.md, etc.) remain exactly as they are. The pillar hub pages are Astro routing pages that link to them — they don't replace the content.

## Execution Order

1. Update `navigation.ts` (Task 1)
2. Rebuild `industries/index.astro` (Task 2)
3. Create pillar hub pages: national-security, networks, critical-infrastructure (Tasks 3-5)
4. Verify the build compiles: `npm run build`

## White-Label Rules

- Never mention DataMiner, Skyline, or upstream technology by name
- Quatro is the brand. DataOS is the platform. These are the only names that appear.
- Finance content references "powered by the DataOS platform" — never expose DataMiner internals.
