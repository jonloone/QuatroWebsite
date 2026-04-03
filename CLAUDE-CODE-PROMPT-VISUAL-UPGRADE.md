# Claude Code Prompt — Visual Upgrade: Secondary Capability Images, Challenge Icons, Tier Pill Removal

Copy everything below this line into Claude Code.

---

## Overview

Three related visual upgrades to the Quatro website:

1. **Remove tier pills** ("Connect", "Operate", "Command") from `BentoUseCases.astro`
2. **Add images to all secondary (non-featured) capabilities** using new 3D abstract illustrations
3. **Redesign the Challenges section** — replace generic Phosphor icons with custom challenge icons and improve the card layout

All new images will be generated separately and placed in `public/images/`. This prompt handles the component and content file changes.

---

## Task 1 — Remove Tier Pills from BentoUseCases

**File:** `src/components/marketing/BentoUseCases.astro`

Remove every instance of the tier badge rendering. There are ~12 occurrences of this pattern:

```astro
{featured[N].tier && (
  <span class="inline-flex items-center rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400 mb-2">{featured[N].tier.charAt(0).toUpperCase() + featured[N].tier.slice(1)}</span>
)}
```

And this variant for the flat list:
```astro
{cap.tier && (
  <span class="inline-flex items-center rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400 mb-2">{cap.tier.charAt(0).toUpperCase() + cap.tier.slice(1)}</span>
)}
```

**Action:** Delete every `{...tier && ( <span>...</span> )}` block in the file. Keep the `tier` field in the TypeScript interface (it's used for data modeling), just stop rendering it.

**Do NOT remove** the `outcome` rendering — those green italic lines ("80% fewer false alarms") should stay. Only remove the pill badges.

---

## Task 2 — Add Images to All Secondary (Non-Featured) Capabilities

The secondary capabilities render via `EditorialCapability.astro` in an alternating image-left/image-right layout. The component already supports an `image` prop but most capabilities don't have one, so it falls back to a gradient placeholder.

### 2A — Verify EditorialCapability supports images

**File:** `src/components/marketing/EditorialCapability.astro`

Confirm it accepts an `image` prop and renders it. It should already work — just verify.

### 2B — Add `image:` field to every non-featured capability in content files

For each industry, add the `image:` field to non-featured capabilities. Place it at the same YAML indentation level as `name:` and `description:`.

**Cities** (`src/content/industries/cities.md`):
```yaml
- name: "Smart Infrastructure Monitoring"
  image: "/images/cap-cities-infra-monitoring.png"
- name: "Municipal Fleet Optimization"
  image: "/images/cap-cities-fleet.png"
- name: "Environmental Intelligence"
  image: "/images/cap-cities-environmental.png"
- name: "Water Infrastructure Intelligence"
  image: "/images/cap-cities-water-intel.png"
```

**Defense** (`src/content/industries/defense.md`):
```yaml
- name: "Automated Force Protection"
  image: "/images/cap-defense-force-protection.png"
- name: "Logistics Intelligence: Hours to Minutes"
  image: "/images/cap-defense-logistics.png"
- name: "Compliance Audit Trails"
  image: "/images/cap-defense-compliance.png"
- name: "Space Domain Awareness"
  image: "/images/cap-defense-space-awareness.png"
- name: "National Security Intelligence"
  image: "/images/cap-defense-national-intel.png"
```

**Energy** (`src/content/industries/energy.md`):
```yaml
- name: "DER Integration: Every New Energy Source, One View"
  image: "/images/cap-energy-der.png"
- name: "Grid Storm Response"
  image: "/images/cap-energy-storm-response.png"
- name: "Compliance Automation"
  image: "/images/cap-energy-compliance.png"
- name: "AI-Powered Operator Guidance"
  image: "/images/cap-energy-ai-guidance.png"
```

**Finance** (`src/content/industries/finance.md`):
```yaml
- name: "Credit Risk Intelligence"
  image: "/images/cap-finance-credit-risk.png"
- name: "Next Best Action Intelligence"
  image: "/images/cap-finance-next-action.png"
- name: "Claims Classification Intelligence"
  image: "/images/cap-finance-claims.png"
- name: "M&A Integration Intelligence"
  image: "/images/cap-finance-ma-integration.png"
- name: "Data Fingerprinting & Cataloging"
  image: "/images/cap-finance-fingerprinting.png"
```

**Industrial** (`src/content/industries/industrial.md`):
```yaml
- name: "OEE Optimization: Find Every Point of Loss"
  image: "/images/cap-industrial-oee.png"
- name: "Cross-Domain Correlation"
  image: "/images/cap-industrial-correlation.png"
- name: "Real-Time Operational Model"
  image: "/images/cap-industrial-digital-twin.png"
- name: "Legacy Coexistence: No Rip-and-Replace"
  image: "/images/cap-industrial-legacy.png"
- name: "Multi-Plant Coordination"
  image: "/images/cap-industrial-multi-plant.png"
```

**Infrastructure** (`src/content/industries/infrastructure.md`):
```yaml
- name: "Multi-Site Tower Monitoring"
  image: "/images/cap-infra-tower-monitoring.png"
- name: "Predictive Fleet Optimization"
  image: "/images/cap-infra-fleet-optimization.png"
- name: "Predictive Maintenance"
  image: "/images/cap-infra-predictive-maint.png"
- name: "Smart Building Intelligence"
  image: "/images/cap-infra-smart-building.png"
```

**Broadcast & Media** (`src/content/industries/broadcast-media.md`):
```yaml
- name: "Facility Health Monitoring"
  image: "/images/cap-broadcast-facility-health.png"
- name: "Content Distribution Intelligence"
  image: "/images/cap-broadcast-distribution.png"
- name: "Predictive Equipment Health"
  image: "/images/cap-broadcast-predictive.png"
```

**Space & SATCOM** (`src/content/industries/space-satcom.md`):
```yaml
- name: "Real-Time Anomaly Detection"
  image: "/images/cap-satcom-anomaly.png"
- name: "Constellation-Scale Fleet Monitoring"
  image: "/images/cap-satcom-fleet.png"
- name: "Automated Failover and Orchestration"
  image: "/images/cap-satcom-failover.png"
- name: "Cross-Domain Correlation"
  image: "/images/cap-satcom-cross-domain.png"
- name: "Sovereign and Air-Gapped Deployment"
  image: "/images/cap-satcom-sovereign.png"
```

**Transportation** (`src/content/industries/transportation.md`):
```yaml
- name: "Runway and Airfield Intelligence"
  image: "/images/cap-transport-runway.png"
- name: "Corridor Traffic and Flow Management"
  image: "/images/cap-transport-corridor.png"
- name: "Customs and Border Integration"
  image: "/images/cap-transport-customs.png"
- name: "Predictive Routing Intelligence"
  image: "/images/cap-transport-routing.png"
- name: "Sovereign Multi-Agency Sharing"
  image: "/images/cap-transport-sovereign-sharing.png"
```

**Water & Environment** (`src/content/industries/water-environment.md`):
```yaml
- name: "Predictive Pipe Health"
  image: "/images/cap-water-pipe-health.png"
- name: "Water Quality Monitoring"
  image: "/images/cap-water-quality.png"
- name: "Multi-Media Environmental Monitoring"
  image: "/images/cap-water-env-monitoring.png"
- name: "Enforcement-Ready Evidence Packages"
  image: "/images/cap-water-enforcement.png"
- name: "ESG and Climate Adaptation Tracking"
  image: "/images/cap-water-esg.png"
```

**IMPORTANT:** Match capabilities by name semantics. The exact name string in the .md file may differ slightly — match on the closest capability.

---

## Task 3 — Redesign Challenges Section

### 3A — Update the challenge data model

Add an `image` field to the challenges in each industry content file. This replaces the current icon-based system.

**Pattern for each challenge:**
```yaml
challenges:
  - title: "Legacy SCADA Limitations"
    description: "Control systems installed 15-25 years ago..."
    image: "/images/challenge-energy-scada.png"
```

Here is the complete challenge → image mapping per industry:

**Smart Cities:**
```yaml
- title: "Departmental Data Silos"           → image: "/images/challenge-cities-silos.png"
- title: "Vendor Lock-In Across Systems"      → image: "/images/challenge-cities-vendor-lock.png"
- title: "Reactive Operations"                → image: "/images/challenge-cities-reactive.png"
- title: "Multi-Agency Coordination Gaps"     → image: "/images/challenge-cities-coordination.png"
```

**Defense:**
```yaml
- title: "Siloed Physical and Cyber Security"  → image: "/images/challenge-defense-silos.png"
- title: "Classification Boundaries"           → image: "/images/challenge-defense-classification.png"
- title: "Legacy Integration Burden"           → image: "/images/challenge-defense-legacy.png"
- title: "Distributed Operations"              → image: "/images/challenge-defense-distributed.png"
- title: "Multi-Domain Expansion"              → image: "/images/challenge-defense-multi-domain.png"
```

**Energy:**
```yaml
- title: "Legacy SCADA Limitations"            → image: "/images/challenge-energy-scada.png"
- title: "Vendor-Siloed Operations"            → image: "/images/challenge-energy-vendor-silos.png"
- title: "DER Integration Complexity"          → image: "/images/challenge-energy-der-complexity.png"
- title: "Fragmented Operational Visibility"   → image: "/images/challenge-energy-fragmented.png"
```

**Finance:**
```yaml
- title: "The Meaning Gap"                    → image: "/images/challenge-finance-meaning-gap.png"
- title: "Reactive Risk Detection"            → image: "/images/challenge-finance-reactive-risk.png"
- title: "Compliance as Manual Reconciliation" → image: "/images/challenge-finance-manual-compliance.png"
- title: "M&A Integration Drag"               → image: "/images/challenge-finance-ma-drag.png"
```

**Industrial:**
```yaml
- title: "Data Fragmentation"                 → image: "/images/challenge-industrial-fragmentation.png"
- title: "Unplanned Downtime"                 → image: "/images/challenge-industrial-downtime.png"
- title: "Tag-Based Licensing Penalties"       → image: "/images/challenge-industrial-licensing.png"
- title: "Workforce Knowledge Erosion"         → image: "/images/challenge-industrial-workforce.png"
```

**Infrastructure:**
```yaml
- title: "Multi-Vendor Fragmentation"          → image: "/images/challenge-infra-vendor-fragment.png"
- title: "Alert Fatigue"                       → image: "/images/challenge-infra-alert-fatigue.png"
- title: "Skilled Labor Shortage"              → image: "/images/challenge-infra-labor-shortage.png"
- title: "Reactive Maintenance"                → image: "/images/challenge-infra-reactive-maint.png"
```

**Broadcast & Media:**
```yaml
- title: "Vendor-Fragmented Signal Management" → image: "/images/challenge-broadcast-vendor-fragment.png"
- title: "Hybrid Infrastructure Complexity"    → image: "/images/challenge-broadcast-hybrid.png"
- title: "Facility Health Blind Spots"         → image: "/images/challenge-broadcast-blind-spots.png"
- title: "Distribution Chain Opacity"          → image: "/images/challenge-broadcast-opacity.png"
```

**Space & SATCOM:**
```yaml
- title: "Fragmented Ground Segment Monitoring"           → image: "/images/challenge-satcom-ground-fragment.png"
- title: "Disconnected M&C and OSS/BSS Systems"          → image: "/images/challenge-satcom-disconnected.png"
- title: "Multi-Orbit Complexity"                          → image: "/images/challenge-satcom-multi-orbit.png"
- title: "Revenue Leakage from Billing Gaps"               → image: "/images/challenge-satcom-revenue-leak.png"
- title: "Space Domain Threats Without Operational Context" → image: "/images/challenge-satcom-threats.png"
```

**Transportation:**
```yaml
- title: "Port Coordination Bottlenecks"                → image: "/images/challenge-transport-port-bottleneck.png"
- title: "Airport Operational Silos"                    → image: "/images/challenge-transport-airport-silos.png"
- title: "Corridor Fragmentation Across Jurisdictions"  → image: "/images/challenge-transport-corridor-fragment.png"
- title: "Cross-Node Visibility Gaps"                   → image: "/images/challenge-transport-visibility-gaps.png"
- title: "Security and Logistics Asymmetry"             → image: "/images/challenge-transport-asymmetry.png"
```

**Water & Environment:**
```yaml
- title: "Invisible Water Loss"                → image: "/images/challenge-water-invisible-loss.png"
- title: "Fragmented Sensor Infrastructure"    → image: "/images/challenge-water-sensor-fragment.png"
- title: "Regulatory Compliance Burden"        → image: "/images/challenge-water-compliance-burden.png"
- title: "Environmental Detection Gaps"        → image: "/images/challenge-water-detection-gaps.png"
- title: "ESG and Climate Adaptation Pressure" → image: "/images/challenge-water-esg-pressure.png"
```

### 3B — Update FeatureGrid.astro to render challenge images

**File:** `src/components/marketing/FeatureGrid.astro`

Currently the component uses Phosphor icons via an `icon` field. Redesign it to support an `image` field as the primary visual, with the Phosphor icon as a fallback.

**Updated interface:**
```typescript
interface Feature {
  icon?: string
  image?: string    // NEW — takes priority over icon
  name: string
  description?: string
  href?: string
  keywords?: string[]
}
```

**Updated card rendering** — replace the icon-only display with an image-first approach:

```astro
{feature.image ? (
  <div class:list={[
    'mb-4 flex h-16 w-16 items-center justify-center rounded-lg overflow-hidden',
    dark ? 'bg-white/5' : 'bg-neutral-50'
  ]}>
    <img src={feature.image} alt="" class="h-full w-full object-cover" />
  </div>
) : IconComponent ? (
  <div class:list={[
    'mb-3 flex h-10 w-10 items-center justify-center rounded-md',
    dark ? 'bg-brand-500/20 text-brand-400' : 'bg-brand-50 text-brand-600'
  ]}>
    <IconComponent size={22} />
  </div>
) : null}
```

### 3C — Update industry page template to pass challenge images

**File:** `src/pages/industries/[slug].astro`

Update the FeatureGrid call to include the `image` field from challenges:

**Before:**
```astro
<FeatureGrid
  title={`${title} Challenges`}
  subtitle="The operational challenges holding your industry back."
  features={challenges.map(c => ({ name: c.title, description: c.description }))}
  columns={challenges.length === 4 ? 4 : challenges.length === 3 ? 3 : 2}
/>
```

**After:**
```astro
<FeatureGrid
  title={`${title} Challenges`}
  subtitle="The operational challenges holding your industry back."
  features={challenges.map(c => ({ name: c.title, description: c.description, image: c.image }))}
  columns={challenges.length === 4 ? 4 : challenges.length === 3 ? 3 : 2}
/>
```

### 3D — Update the Astro content schema (if applicable)

**File:** `src/content/config.ts` (or wherever the content collection schema is defined)

Add `image` as an optional string field to the challenges array schema:

```typescript
challenges: z.array(z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),  // ADD THIS
})).optional(),
```

---

## Verification

After all changes, run:
```bash
npm run build
```

Then check:
1. **Energy industry page** — tier pills should be GONE from bento cards, but outcome text should remain
2. **Energy industry page** — secondary capabilities should show 3D abstract images instead of gradient placeholders
3. **Energy challenges section** — should show custom isometric icons instead of generic Phosphor icons
4. Repeat spot-checks for Finance, Defense, and at least one of the newer industries (Space, Transportation, Water)

---

## Image Generation Note

The images referenced in this prompt need to be generated before or after running this prompt. Two CSV files contain the generation prompts:

- `image-prompts/secondary-capabilities.csv` — 45 secondary capability images (800×600, 3D abstract style)
- `image-prompts/challenge-icons.csv` — 44 challenge icons (400×400, minimal 3D isometric style)

Use the same `generate_images.py` script with these CSVs. Update the script's `CSV_PATH` and `OUTPUT_DIR` variables, and set `RESOLUTION = "1K"` for these smaller images to save cost.
