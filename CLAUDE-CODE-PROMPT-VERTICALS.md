# Claude Code Prompt — Build New Vertical Pages

Copy everything below this line into Claude Code.

---

## Task

Create content collection entries for four new industry verticals on the Quatro website. Framework-mapped messaging documents already exist in `src/content/verticals/`. Your job is to convert those messaging documents into proper content collection entries (YAML frontmatter `.md` files) that the existing dynamic routes will automatically render.

**This is a content creation task, not a page template task.** The site already has dynamic routes at `/industries/[slug].astro` and `/solutions/[slug].astro` that render any `.md` file placed in `src/content/industries/` and `src/content/solutions/`. You're creating the content files.

## Architecture — How This Works

The site uses Astro content collections with Zod schemas. When you add a file to `src/content/industries/` or `src/content/solutions/`, the dynamic route picks it up automatically. No new `.astro` templates needed.

**Content schema for industries** (`src/content/config.ts` — `industriesCollection`):
```yaml
---
title: string (required)
tagline: string (required)
description: string (required)
order: number (required)
heroImage: string (optional)
hero:
  eyebrow: string
  title: string
  description: string
  primaryCta:
    label: string
    href: string
  secondaryCta: (optional)
    label: string
    href: string
challenges: (array)
  - title: string
    description: string
capabilities: (array)
  - name: string
    description: string
stats: (array)
  - value: string
    label: string
platformMapping: (optional)
  connect: string
  operate: string
  command: string
proofPoint: (optional)
  industry: string
  headline: string
  metrics: (optional array of {value, label})
  narrative: string
cta: (optional)
  primary:
    label: string
    href: string
  secondary: (optional)
    label: string
    href: string
  microcopy: string (optional)
---
```

**Content schema for solutions** (`src/content/config.ts` — `solutionsCollection`):
Same schema as industries, using `challenges` instead of separate naming.

**IMPORTANT:** The capabilities array in solutions does NOT have an `icon` field. The capabilities array in industries does NOT have an `icon` field. Only the products collection has icons. Do not add `icon` to capabilities.

## Source Material — Framework Documents

These files contain the full framework-mapped messaging. Read each one and extract the relevant content into the YAML format above:

### Space & SATCOM (4 new industry files + solution files)
- `src/content/verticals/space-satcom/framework-space-satcom-hub.md` → Create `src/content/industries/space-satcom.md`
- `src/content/verticals/space-satcom/framework-teleport-operations.md` → Create `src/content/solutions/teleport-operations.md`
- `src/content/verticals/space-satcom/framework-fleet-health.md` → Create `src/content/solutions/fleet-health.md`
- `src/content/verticals/space-satcom/framework-satellite-revenue-assurance.md` → Create `src/content/solutions/satellite-revenue-assurance.md`
- `src/content/verticals/space-satcom/framework-space-domain-awareness.md` → Create `src/content/solutions/space-domain-awareness.md`

### Transportation & Logistics
- `src/content/verticals/transportation/framework-transportation-hub.md` → Create `src/content/industries/transportation.md`
- `src/content/verticals/transportation/framework-port-operations.md` → Create `src/content/solutions/port-operations.md`
- `src/content/verticals/transportation/framework-airport-operations.md` → Create `src/content/solutions/airport-operations.md`
- `src/content/verticals/transportation/framework-corridor-intelligence.md` → Create `src/content/solutions/corridor-intelligence.md`

### Water & Environment
- `src/content/verticals/water-environment/framework-water-environment-hub.md` → Create `src/content/industries/water-environment.md`
- `src/content/verticals/water-environment/framework-water-systems.md` → Create `src/content/solutions/water-systems.md`
- `src/content/verticals/water-environment/framework-environmental-compliance.md` → Create `src/content/solutions/environmental-compliance.md`

### Broadcast & Media
- `src/content/verticals/broadcast-media/framework-broadcast-media-hub.md` → Create `src/content/industries/broadcast-media.md`

**Total: 4 new industry files + 9 new solution files = 13 content entries**

## Reference Files — Read These First

Before creating any files, read these to understand the format and voice:

1. `src/content/industries/energy.md` — Gold standard for industry content format
2. `src/content/industries/defense.md` — Example with expanded capabilities
3. `src/content/solutions/pipeline-security.md` — Gold standard for solution content format
4. `src/content/solutions/operational-intelligence.md` — Example with AI-focused language
5. `src/content/config.ts` — The Zod schemas (your content MUST validate against these)
6. `src/lib/navigation.ts` — Navigation structure (you'll update this)

## Content Guidelines

**Voice:** Quatro brand — precise, confident, outcomes-focused. Lead with use cases and what buyers can do, not technology features.

**CRITICAL — Never mention:**
- DataMiner, Skyline, or any upstream technology partner names
- SatOps, MediaOps, GridOps, NetOps, DefenseOps, IoTOps, InfraOps (these are Skyline's branded solution names — we white-label)
- MCP, Model Context Protocol, Agent-to-Agent (internal architecture terms)
- "Layer 1/2/3/4" or xOps architecture references

**DO mention:**
- Named Quatro partners: ECR Platform X, NOVI Space, Elementos (where relevant)
- Quatro's three tiers: Connect → Operate → Command (Visibility → Operations → Intelligence)
- AI-powered capabilities framed as outcomes: "operator guidance," "intelligent agents," "pattern recognition," "autonomous response"
- 8,000+ integrations / 1,000+ vendors
- Sovereign deployment, air-gapped capability (where relevant)
- The enterprise intelligence expansion story: "When operational intelligence isn't enough, Quatro scales to enterprise intelligence — connecting ops data to financial, commercial, and strategic context"

**Order numbers:** Use these to control sort order on the industries and solutions index pages:
- Industries: Energy=1, Defense=2, Industrial=3, Infrastructure=4, Cities=5, Space/SATCOM=6, Transportation=7, Water/Environment=8, Broadcast/Media=9
- Solutions: Asset Monitoring=1, Pipeline Security=2, Operational Intelligence=3, Physical Security=4, Fleet & Logistics=5, Grid Operations=6, Network Operations=7, Teleport Operations=8, Fleet Health=9, Satellite Revenue Assurance=10, Space Domain Awareness=11, Port Operations=12, Airport Operations=13, Corridor Intelligence=14, Water Systems=15, Environmental Compliance=16

## What To Do

### Step 1 — Read reference files
Read the energy, defense, pipeline-security, and operational-intelligence content files to understand the exact YAML format. Read `config.ts` to understand schema requirements. Read the framework documents.

### Step 2 — Create industry content files
For each of the 4 new industry hub pages:
1. Read the corresponding `framework-*-hub.md`
2. Extract: hero (title, description, CTAs), challenges (4-5 items), capabilities (6-8 items), stats (4 items), platformMapping, proofPoint, cta
3. Write to `src/content/industries/[slug].md` matching the YAML format exactly
4. Ensure the content validates against the Zod schema (no extra fields, no missing required fields)

### Step 3 — Create solution content files
For each of the 9 new solution sub-pages:
1. Read the corresponding `framework-*.md`
2. Extract the same fields as industries (the schema is nearly identical)
3. Write to `src/content/solutions/[slug].md`
4. Ensure schema compliance

### Step 4 — Update navigation
Edit `src/lib/navigation.ts`:

**Header navigation (primaryNavigationData):**
Add to the Industries dropdown (both `en` and `es`):
```typescript
// English — add after Cities
{ name: 'Space & SATCOM', description: 'Satellite operations and space domain awareness', href: '/industries/space-satcom', icon: GlobeAltIcon },
{ name: 'Transportation', description: 'Port, airport, and corridor intelligence', href: '/industries/transportation', icon: TruckIcon },
```

Add to the Solutions dropdown (both `en` and `es`):
```typescript
// English — add after Network Operations
{ name: 'Teleport Operations', description: 'Satellite ground segment intelligence', href: '/solutions/teleport-operations', icon: GlobeAltIcon },
{ name: 'Port Operations', description: 'Maritime and cargo intelligence', href: '/solutions/port-operations', icon: ShieldCheckIcon },
```

**Footer navigation (footerNavigationData):**
Add new industry entries to the `industries.items` array (both `en` and `es`):
```typescript
// English
{ name: 'Space & SATCOM', href: '/industries/space-satcom' },
{ name: 'Transportation', href: '/industries/transportation' },
{ name: 'Water & Environment', href: '/industries/water-environment' },
{ name: 'Broadcast & Media', href: '/industries/broadcast-media' },
```

Add new solution entries to the `solutions.items` array (both `en` and `es`):
```typescript
// English
{ name: 'Teleport Operations', href: '/solutions/teleport-operations' },
{ name: 'Port Operations', href: '/solutions/port-operations' },
{ name: 'Water Systems', href: '/solutions/water-systems' },
```

### Step 5 — Build and verify
Run `npx astro build` and fix any errors. Common issues:
- YAML frontmatter syntax errors (missing quotes around strings with colons or special characters)
- Schema validation failures (extra fields, wrong types, missing required fields)
- Pre-existing build errors in unrelated files (fix those too)

If content collection errors appear, check:
1. Every required field is present
2. No `icon` field in industry/solution capabilities (only products have icons)
3. Strings with `:`, `"`, `'`, or `—` are wrapped in quotes
4. Array syntax is correct (dash + space for list items)

### Step 6 — Verify pages render
After a successful build, confirm:
- `/industries/space-satcom` renders
- `/industries/transportation` renders
- `/industries/water-environment` renders
- `/industries/broadcast-media` renders
- `/solutions/teleport-operations` renders
- All 9 solution pages render
- Navigation shows new items
- Industries index page (`/industries`) lists all 9 industries
- Solutions index page (`/solutions`) lists all 16 solutions

## Quality Checks

Before finishing, verify:
- [ ] All 13 new content files build without errors
- [ ] YAML validates against Zod schemas in config.ts
- [ ] No upstream technology names (DataMiner, Skyline, SatOps, etc.) appear anywhere
- [ ] Every page has: hero, 4+ challenges, 6+ capabilities, 4 stats, platformMapping, proofPoint, cta
- [ ] CTA labels follow 5-word-max rule with verb-first pattern
- [ ] Stats use concrete numbers where possible (not just generic "80%")
- [ ] Platform mapping tells the Connect → Operate → Command story for each vertical
- [ ] ProofPoint narratives are specific and credible (even if composited)
- [ ] Navigation updated in both English and Spanish
- [ ] `npx astro build` succeeds with zero errors
- [ ] All new pages accessible via their URLs
