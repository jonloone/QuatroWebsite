# Quatro Website — Claude Code Implementation Tasks

**Date:** April 1, 2026
**Context:** This is the consolidated mechanical task list for the Quatro site overhaul. All strategic decisions are locked. Every edit below has been aligned and approved. Execute these changes exactly as specified.

**Important files to read first for context:**
- `FUSION-MESSAGING-ANALYSIS.md` — The 5 aligned decisions (the "why" behind every change below)
- `SITE-MESSAGING-AUDIT.md` — Full audit with rationale for each fix
- `QUATRO-SERVICE-NAMING.md` — Complete service naming system and file change map
- `HOMEPAGE-REWORK-STRATEGY.md` — Voice rules, banned words, tone guidelines

---

## RULES (Apply to Every Change)

### Voice Rules
- **NEVER use:** empowering, enabling, powering, unlocking, complexity, handle
- **NEVER use:** DataMiner, Skyline, xOps, DataOS (in buyer-facing content)
- **NEVER use:** MCP, Agent-to-Agent, MediaOps, GridOps, SatOps, NetOps, IoTOps
- **Prefer "network" over "platform"** in all buyer-facing content
- **No exclamation points.** Ever.
- **Human is the hero.** The network is the tool, not the protagonist.

### Naming Rules
- Service names: two words max, no "Intelligence/Product/Platform/Module/Solution/System" suffix
- Outcome-named, not mechanism-named
- No tier labels (See/Understand/Orchestrate) on any service

---

## TASK GROUP 1: Navigation Rename (Platform → The Network)

### File: `src/lib/navigation.ts`

**1a. Primary nav — English (line 237-246)**

Replace:
```typescript
{
  name: 'Platform',
  href: '/platform',
  variant: 'stacked',
  items: [
    { name: 'See', description: 'Complete operational picture across every system', href: '/platform/see', icon: LinkIcon },
    { name: 'Understand', description: 'Predictive intelligence and automated root cause analysis', href: '/platform/understand', icon: CogIcon },
    { name: 'Orchestrate', description: 'End-to-end process orchestration across systems and teams', href: '/platform/orchestrate', icon: CommandLineIcon },
  ],
  cta: { name: 'Platform Overview', href: '/platform' },
},
```

With:
```typescript
{
  name: 'The Network',
  href: '/network',
  variant: 'stacked',
  items: [
    { name: 'How It Works', description: 'Two properties of one intelligence network', href: '/network', icon: LinkIcon },
    { name: 'Integrations', description: '9,000+ native integrations across 1,000+ vendors', href: '/network#integrations', icon: CogIcon },
    { name: 'Deployment', description: 'Cloud, on-premises, edge, air-gapped, or hybrid', href: '/network#deployment', icon: CommandLineIcon },
    { name: 'Security', description: 'Sovereign deployment. Your data never leaves your control', href: '/network#trust', icon: ShieldCheckIcon },
  ],
  cta: { name: 'Explore the Network', href: '/network' },
},
```

**1b. Primary nav — Spanish (line 274-284)**

Replace:
```typescript
{
  name: 'Plataforma',
  href: '/platform',
  variant: 'stacked',
  items: [
    { name: 'See', description: 'Visibilidad operacional completa en todos los sistemas', href: '/platform/see', icon: LinkIcon },
    { name: 'Understand', description: 'Inteligencia predictiva y análisis de causa raíz', href: '/platform/understand', icon: CogIcon },
    { name: 'Orchestrate', description: 'Orquestración de procesos de extremo a extremo', href: '/platform/orchestrate', icon: CommandLineIcon },
  ],
  cta: { name: 'Vista General', href: '/platform' },
},
```

With:
```typescript
{
  name: 'La Red',
  href: '/network',
  variant: 'stacked',
  items: [
    { name: 'Cómo Funciona', description: 'Dos propiedades de una red de inteligencia', href: '/network', icon: LinkIcon },
    { name: 'Integraciones', description: '9.000+ integraciones nativas de 1.000+ proveedores', href: '/network#integrations', icon: CogIcon },
    { name: 'Despliegue', description: 'Nube, on-premises, edge, air-gapped o híbrido', href: '/network#deployment', icon: CommandLineIcon },
    { name: 'Seguridad', description: 'Despliegue soberano. Sus datos nunca salen de su control', href: '/network#trust', icon: ShieldCheckIcon },
  ],
  cta: { name: 'Explorar la Red', href: '/network' },
},
```

**1c. Footer nav — English (line 59-67)**

Replace:
```typescript
products: {
  title: 'Platform',
  items: [
    { name: 'Overview', href: '/platform' },
    { name: 'See', href: '/platform/see' },
    { name: 'Understand', href: '/platform/understand' },
    { name: 'Orchestrate', href: '/platform/orchestrate' },
  ],
},
```

With:
```typescript
products: {
  title: 'The Network',
  items: [
    { name: 'How It Works', href: '/network' },
    { name: 'Integrations', href: '/network#integrations' },
    { name: 'Deployment', href: '/network#deployment' },
    { name: 'Security', href: '/network#trust' },
  ],
},
```

**1d. Footer nav — Spanish (line 134-141)**

Replace:
```typescript
products: {
  title: 'Plataforma',
  items: [
    { name: 'Vista General', href: '/platform' },
    { name: 'See', href: '/platform/see' },
    { name: 'Understand', href: '/platform/understand' },
    { name: 'Orchestrate', href: '/platform/orchestrate' },
  ],
},
```

With:
```typescript
products: {
  title: 'La Red',
  items: [
    { name: 'Cómo Funciona', href: '/network' },
    { name: 'Integraciones', href: '/network#integrations' },
    { name: 'Despliegue', href: '/network#deployment' },
    { name: 'Seguridad', href: '/network#trust' },
  ],
},
```

**1e. Footer solutions — English (line 78-97)**

Update solution names and hrefs to match the renames below. Change:
- `Asset Monitoring` → `Asset Health`, href `/solutions/asset-health`
- `Pipeline Security` → `Pipeline Integrity`, href `/solutions/pipeline-integrity`
- `Grid Operations` → `Grid Health`, href `/solutions/grid-health`
- `Hybrid Service Assurance` → `Service Assurance`, href `/solutions/service-assurance`

**1f. Footer solutions — Spanish (line 153-172)**

Apply same rename pattern:
- `Monitoreo de Activos` → `Salud de Activos`, href `/solutions/asset-health`
- `Seguridad de Ductos` → `Integridad de Ductos`, href `/solutions/pipeline-integrity`
- `Operaciones de Red Eléctrica` → `Salud de Red`, href `/solutions/grid-health`
- `Aseguramiento de Servicio Híbrido` → `Aseguramiento de Servicio`, href `/solutions/service-assurance`

---

## TASK GROUP 2: Global Find-and-Replace

### 2a. Update connector count: 8,000+ → 9,000+

Search the entire `src/content/` directory for any occurrence of `8,000+` or `8000+` and replace with `9,000+` or `9000+` respectively. Also check `src/pages/` for any instances.

**Known locations (non-exhaustive — grep to find all):**
- `src/content/industries/energy.md`
- `src/content/industries/networks.md`
- `src/content/industries/broadcast-media.md`
- `src/content/industries/cities.md`
- `src/content/industries/finance.md`
- `src/content/industries/industrial.md`
- `src/content/industries/transportation.md`
- `src/content/industries/water-environment.md`
- `src/content/solutions/operational-intelligence.md`
- `src/content/solutions/network-operations.md`
- `src/content/solutions/corridor-intelligence.md`
- `src/content/solutions/asset-monitoring.md`
- Various use-case, case-study, and insight files

### 2b. Replace "platform" with "network" in buyer-facing industry/solution content

This is NOT a blind find-and-replace. Only change "platform" to "network" (or "intelligence network") where it refers to Quatro's offering in buyer-facing descriptions. Do NOT change:
- `platformMapping` field names (those are removed separately in Task Group 4)
- Internal/code references
- Third-party platform references (e.g., "cloud platforms")

**Known location to fix:**
- `src/content/industries/networks.md` — description uses "One operations platform from ground to orbit" → change to "Unified operations from ground to orbit"

Grep for `platform` across all `.md` files in `src/content/` and evaluate each instance.

---

## TASK GROUP 3: Solution File Renames

Rename these solution content files. Update the `title` and `tagline` fields in each file's frontmatter to match the new name. Also update any `slug` field if present.

| Current File | New File | New Title |
|---|---|---|
| `solutions/grid-operations.md` | `solutions/grid-health.md` | Grid Health |
| `solutions/asset-monitoring.md` | `solutions/asset-health.md` | Asset Health |
| `solutions/pipeline-security.md` | `solutions/pipeline-integrity.md` | Pipeline Integrity |
| `solutions/hybrid-service-assurance.md` | `solutions/service-assurance.md` | Service Assurance |
| `solutions/satellite-revenue-assurance.md` | `solutions/revenue-assurance.md` | Revenue Assurance |

For each renamed file:
1. `git mv` the file to preserve history
2. Update the `title:` field in frontmatter
3. Update any `tagline:` or `description:` that references the old name
4. Search other files for references to the old slug (e.g., `grid-operations`) and update to the new slug (e.g., `grid-health`)

**Do NOT rename** these files — they keep their current names:
- `network-operations.md`
- `fleet-health.md`
- `teleport-operations.md`
- `space-domain-awareness.md`
- `physical-security.md`
- `water-systems.md`
- `environmental-compliance.md`
- `airport-operations.md`
- `port-operations.md`
- `corridor-intelligence.md`
- `fleet-logistics.md`

---

## TASK GROUP 4: Drop "Intelligence" Suffix from Finance Solutions

These files keep their filenames but need the "Intelligence" suffix removed from their `title:` frontmatter field:

| File | Current Title | New Title |
|---|---|---|
| `solutions/claims-classification.md` | Claims Classification Intelligence | Claims Classification |
| `solutions/credit-risk.md` | Credit Risk Intelligence | Credit Risk |
| `solutions/npa-early-warning.md` | NPA Early Warning Intelligence | NPA Early Warning |
| `solutions/customer-360.md` | Customer 360 Intelligence | Customer 360 |
| `solutions/regulatory-compliance.md` | Regulatory Compliance Intelligence | Regulatory Compliance |

For each: remove " Intelligence" from the `title:` field. Also check `tagline:`, `description:`, and any H1/heading text within the file body for the same suffix.

---

## TASK GROUP 5: Remove Tier References

### 5a. Remove `platformMapping` from ALL solution files

Every solution file in `src/content/solutions/` has a `platformMapping:` block structured like:
```yaml
platformMapping:
  see: "description of see-tier capabilities..."
  understand: "description of understand-tier capabilities..."
  orchestrate: "description of orchestrate-tier capabilities..."
```

**Remove the entire `platformMapping:` block** (the key and all three sub-keys) from every solution file. This is a YAML frontmatter field — delete from `platformMapping:` through the last `orchestrate:` line value.

**Affected files (all .md files in `src/content/solutions/`):**
All 22+ solution files have this field. Remove it from every one.

### 5b. Remove `tier:` field from industry capability lists

Industry content files (`src/content/industries/*.md`) have capabilities listed in their frontmatter, each with a `tier: see`, `tier: understand`, or `tier: orchestrate` field.

**Remove every `tier:` line** from every capability entry in every industry file. The capability entries keep their `name:`, `description:`, `outcome:`, `image:`, and `featured:` fields — only `tier:` is removed.

**Affected files:**
- `src/content/industries/energy.md`
- `src/content/industries/networks.md`
- `src/content/industries/defense.md`
- `src/content/industries/finance.md`
- `src/content/industries/broadcast-media.md`
- `src/content/industries/cities.md`
- `src/content/industries/water-environment.md`
- `src/content/industries/transportation.md`
- `src/content/industries/industrial.md`

Pattern to match and delete (including leading whitespace):
```
  tier: see
  tier: understand
  tier: orchestrate
```

---

## TASK GROUP 6: Retire Product Tier Pages

These three files should be removed (or moved to an archive directory):

- `src/content/products/see.md`
- `src/content/products/understand.md`
- `src/content/products/orchestrate.md`

**Option A (preferred):** `git mv` them to `src/content/products/_retired/` to preserve history without breaking anything unexpectedly.

**Option B:** Delete them and handle any build errors from missing content collection entries.

After moving/deleting, check for any page templates or routes that reference the `products` content collection:
- Grep for `products` in `src/pages/` to find any `[...slug].astro` or `platform/` route files
- If there's a `/platform/[slug].astro` or similar, it may need updating or removal

---

## TASK GROUP 7: Build Verification

After completing all changes:

```bash
cd /path/to/QuatroWebsite
npm run build
```

Fix any build errors. Common expected issues:
- Broken references to old solution slugs (grid-operations, asset-monitoring, etc.)
- Missing `products` collection entries if tier pages are deleted
- Astro content collection schema validation if `tier` or `platformMapping` were required fields

Check the content collection schema file (likely `src/content/config.ts` or similar) — if `platformMapping` or `tier` are defined as required fields in the schema, make them optional or remove them from the schema.

---

## TASK GROUP 8: Cross-Reference Cleanup

After the renames and tier removal, grep the entire `src/` directory for any remaining references to:

| Search For | Should Be |
|---|---|
| `grid-operations` (as a slug/href) | `grid-health` |
| `asset-monitoring` (as a slug/href) | `asset-health` |
| `pipeline-security` (as a slug/href) | `pipeline-integrity` |
| `hybrid-service-assurance` (as a slug/href) | `service-assurance` |
| `satellite-revenue-assurance` (as a slug/href) | `revenue-assurance` |
| `platform/see` (as a route) | Remove or redirect to `/network` |
| `platform/understand` (as a route) | Remove or redirect to `/network` |
| `platform/orchestrate` (as a route) | Remove or redirect to `/network` |
| `WHEN YOU NEED MORE` | Should not exist anywhere |
| `DataOS` (in .astro or content .md files) | Remove from buyer-facing content |

Also check:
- `src/pages/index.astro` — may still have old references
- Any layout or component files that reference platform/tier routes
- Sitemap generation config if one exists

---

## TASK GROUP 9: Homepage Bottom CTA Fix

In `src/pages/index.astro`, find the final CTA section (near the bottom, before the footer). It currently has a dual-CTA pattern. Change to:

**Single CTA:**
- H2: "Connect one system. Four weeks. Your infrastructure."
- Subhead: "Pick the system that costs you the most to operate. We connect it to the network, deploy on your stack, and prove the value before you commit."
- Single button: "Schedule an Assessment"
- Microcopy below button: "4-week proof of value. Credited toward contract."
- Add sovereignty signal line: "Deployed on your infrastructure. Air-gapped capable. Your data never leaves your control."

Remove any secondary/ghost CTA button from this section.

---

## DO NOT CHANGE (Out of Scope for This Pass)

- **Do not create new solution files** (storm-response.md, energy-compliance.md, facility-operations.md, mission-intelligence.md, domain-awareness.md, operator-guidance.md) — these need creative copy, not mechanical edits
- **Do not build The Network page** (`/network`) — this needs strategic copy and design work
- **Do not rewrite industry page body content** — only remove tier fields and fix 8000→9000
- **Do not touch** the insights, case-studies, or use-cases content collections
- **Do not add a social proof logo strip** — blocked on logo permissions
- **Do not modify images or visual assets**

---

## Execution Order

Run these task groups in this order to minimize cascading issues:

1. **Group 2a** — Global 8,000+ → 9,000+ (safe, no dependencies)
2. **Group 5a & 5b** — Remove platformMapping and tier fields (safe, no dependencies)
3. **Group 4** — Drop "Intelligence" suffix from Finance titles (safe, no dependencies)
4. **Group 3** — Solution file renames (creates new slugs)
5. **Group 1** — Navigation update (references new slugs from Group 3)
6. **Group 6** — Retire product tier pages
7. **Group 8** — Cross-reference cleanup (catches anything missed)
8. **Group 2b** — Platform → network language review (manual judgment needed)
9. **Group 9** — Homepage bottom CTA fix
10. **Group 7** — Build verification (run last, fix anything broken)

---

*Generated: April 1, 2026*
*Source documents: FUSION-MESSAGING-ANALYSIS.md, SITE-MESSAGING-AUDIT.md, QUATRO-SERVICE-NAMING.md*
*All decisions pre-approved by Jonathan Looney. Execute as specified.*
