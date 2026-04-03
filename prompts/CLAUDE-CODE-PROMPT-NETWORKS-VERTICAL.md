# Claude Code Prompt — Networks Vertical Implementation

Copy everything below this line into Claude Code.

---

## Overview

Merge the **Space & SATCOM** and **Infrastructure (Telco)** industry verticals into a single **Networks** industry page. This reflects the real-world convergence of satellite and terrestrial operations (3GPP NTN, D2D, multi-orbit hybrid connectivity). Quatro's positioning advantage: no competitor has native coverage across both satellite ground segments AND terrestrial NOC operations.

**Broadcast & Media stays separate** — distinct buyers, workflows, and proof points.

This prompt handles:

1. **Create** the new `/industries/networks` content file
2. **Create** a new Hybrid Service Assurance solution page
3. **Update** existing solution pages (Network Operations, Fleet Health) with hybrid context
4. **Update** navigation to reflect the new structure
5. **Set up redirects** from old URLs
6. **Remove** retired industry pages from content (Space & SATCOM, Infrastructure)
7. **Clean up** retired solution pages
8. **Generate image prompts** for new Networks assets

---

## Task 1 — Create `/industries/networks` Content File

**File:** `src/content/industries/networks.md`

Create this file with the following YAML frontmatter (no body content needed — the template renders from frontmatter):

```yaml
---
title: "Networks"
tagline: "Unified Terrestrial & Satellite Operations"
heroImage: "/images/industry-networks.png"
description: "One operations platform from ground to orbit. Terrestrial towers, satellite ground segments, multi-orbit constellations, and hybrid connectivity — unified in a single operational picture. 8,000+ connectors across every vendor, every orbit, every transport layer."
order: 3
hero:
  eyebrow: "Networks"
  title: "One Operations Platform. Ground to Orbit."
  description: "Terrestrial towers, satellite ground segments, multi-orbit constellations, and hybrid connectivity — unified in a single operational picture. 8,000+ connectors across every vendor, every orbit, every transport layer. The same platform that won Teleport Technology of the Year 2026."
  primaryCta:
    label: "Schedule a Network Assessment"
    href: "/contact/demo"
  secondaryCta:
    label: "Talk to a Network Engineer"
    href: "/contact/sales"
stats:
  - value: "8,000+"
    label: "Connectors"
  - value: "80%"
    label: "Fewer False Alarms"
  - value: "<60s"
    label: "Anomaly Detection"
  - value: "GEO+LEO+MEO+Terrestrial"
    label: "Coverage"
challenges:
  - title: "Multi-Vendor NMS Fragmentation"
    description: "Telco runs Nokia NSP, Ericsson OSS, and Cisco Crosswork. Satellite runs iDirect, Newtec, and Comtech consoles. Nobody has a unified view. Operators toggle between 5-15 separate platforms to diagnose a single service degradation — and that's before they check which orbit the traffic was on."
    image: "/images/challenge-networks-nms-fragment.png"
  - title: "Fault Correlation Across Domains"
    description: "When a customer loses service, was it the terrestrial tower, the backhaul link, the satellite gateway, or an orbital anomaly? Each NMS sees only its domain. Manual alarm correlation across 3-4 dashboards means MTTR of 4-6 hours when it should be 30 minutes."
    image: "/images/challenge-networks-fault-correlation.png"
  - title: "Multi-Orbit Complexity"
    description: "GEO is static. LEO passes every 10-15 minutes with 1,000+ simultaneous satellites. MEO sits between. Operators managing hybrid constellations need ephemeris-aware capacity planning and predictive routing — not static monitoring dashboards built for GEO-only operations."
    image: "/images/challenge-networks-multi-orbit.png"
  - title: "Revenue Leakage Across Transport Layers"
    description: "Transponder utilization is tracked manually or lags 24+ hours in billing systems. Terrestrial SLA compliance is measured separately from satellite SLAs. E2E service assurance doesn't exist when operational and financial data live in different worlds."
    image: "/images/challenge-networks-revenue-leakage.png"
  - title: "Convergence Without a Convergence Platform"
    description: "3GPP NTN standardizes the UE side. But the operations side — provisioning, monitoring, fault management, capacity planning — remains fragmented across terrestrial and satellite toolchains. Standards don't solve operations fragmentation."
    image: "/images/challenge-networks-convergence-gap.png"
capabilities:
  - name: "Unified Multi-Domain Operations"
    description: "One command center across terrestrial towers, satellite ground segments, and multi-orbit constellations. 8,000+ pre-built connectors normalize data from Nokia, Ericsson, Cisco, iDirect, Newtec, Comtech, and every other vendor into a single correlated view. AI-driven root cause identification spans domains — not just alerts."
    featured: true
    outcome: "5-15 vendor platforms → 1. Every domain. Every orbit."
    tier: "connect"
  - name: "Hybrid Service Assurance"
    description: "End-to-end SLA management across terrestrial and satellite transport layers. Real-time SLA breach prediction 24+ hours in advance. Automated billing correlation between transponder utilization and terrestrial capacity. When traffic shifts from terrestrial to satellite (or between orbits), SLA tracking follows automatically."
    featured: true
    outcome: "E2E SLA visibility across every transport layer."
    tier: "operate"
  - name: "Predictive Fleet & Constellation Intelligence"
    description: "Predictive failure detection 2-4 weeks in advance across both terrestrial equipment (towers, cabinets, power) and satellite assets (GEO, LEO, MEO fleet health). Cross-domain correlation surfaces compound issues that siloed tools cannot detect — a terrestrial backhaul degradation that will cascade into satellite capacity overload."
    featured: true
    outcome: "2-4 week advance warning. Cross-domain cascade detection."
    tier: "operate"
  - name: "Autonomous Fault Remediation"
    description: "When issues are detected, the platform diagnoses root cause across domains, recommends remediation, and executes proven playbooks autonomously. Institutional expertise captured — new operators perform like 20-year veterans."
    image: "/images/cap-networks-fault-remediation.png"
    outcome: "55% faster MTTR. Institutional expertise captured."
    tier: "command"
  - name: "Multi-Orbit Capacity Orchestration"
    description: "Ephemeris-aware capacity planning that predicts LEO satellite availability 30 minutes ahead and dynamically steers traffic across GEO, MEO, LEO, and terrestrial based on real-time demand, weather, and orbital mechanics."
    image: "/images/cap-networks-multi-orbit.png"
    outcome: "Dynamic load steering across every orbit and transport layer."
    tier: "operate"
  - name: "Teleport & Ground Segment Command"
    description: "Real-time monitoring of antennas, RF chains, VSAT hubs, modems, and spectrum analyzers. Sub-minute anomaly detection with automated failover. The same platform that satellite operators trust for mission-critical ground segment operations."
    image: "/images/cap-networks-teleport.png"
    outcome: "<60s detection. 85% faster failover. 7,000+ connectors."
    tier: "operate"
  - name: "Space Domain Awareness Integration"
    description: "Multi-source ISR integration with operational impact correlation. Conjunction assessment tied to ground asset dependency and mission continuity. Predictive threat alerts 24-48 hours ahead — connected to your network operations picture."
    image: "/images/cap-networks-sda.png"
    outcome: "Threat-to-impact-to-response in one view."
    tier: "operate"
  - name: "Sovereign & Air-Gapped Deployment"
    description: "Cloud, hybrid, self-managed, or fully air-gapped. All network data remains under operator control with end-to-end encryption. FIPS and NIST compliance for defense and government customers."
    image: "/images/cap-networks-sovereign.png"
    outcome: "Full sovereignty. No data leaves your perimeter."
    tier: "connect"
platformMapping:
  connect: "8,000+ connectors with protocol-native adapters — SNMP, NETCONF, TL1, gRPC, iDirect DVB-RCS, Newtec Dialog, satellite telemetry, GPS/telematics. Edge processing at tower sites, satellite gateways, and network nodes. Sub-minute data ingestion from every vendor across every domain."
  operate: "AI-powered intelligence with cross-domain alarm correlation, root cause analysis spanning terrestrial and satellite, and operator guidance. Predictive failure models trained on operational telemetry across orbits and transport layers. Real-time fleet health scoring, transponder utilization, tower performance, and SLA breach prediction."
  command: "Automated failover orchestration across ground stations and terrestrial infrastructure. Provisioning and service activation workflows. Revenue assurance correlation with billing systems. Coordinated response playbooks that span terrestrial NOC, satellite operations, and space domain awareness."
proofPoint:
  industry: "Networks — Telecom Tower Operator"
  headline: "Multi-Site Tower Operations"
  metrics:
    - value: "80%"
      label: "Fewer False Alarms"
    - value: "55%"
      label: "MTTR Reduction"
    - value: "40%"
      label: "Fewer Truck Rolls"
  narrative: "A telecom tower operator managing 900+ sites consolidated 5 monitoring platforms into Quatro. AI-driven alarm correlation reduced false alarms by 80% and MTTR by 55%. Remote diagnostics eliminated 40% of truck rolls. Separately, a global satellite operator deployed Quatro across multi-vendor ground segments managing GEO and NGSO constellations — replacing 7 M&C tools, achieving sub-minute anomaly detection, and eliminating 80% of billing disputes within 90 days."
cta:
  primary:
    label: "Schedule a Network Assessment"
    href: "/contact/demo"
  secondary:
    label: "Talk to a Network Engineer"
    href: "/contact/sales"
  microcopy: "Typical assessment: 45-60 minutes. We'll map your vendor tools across terrestrial and satellite domains — and show how unified operational intelligence delivers real-time visibility from ground to orbit. 90-day proof of value · Credited toward contract"
---
```

---

## Task 2 — Create New Solution: Hybrid Service Assurance

**File:** `src/content/solutions/hybrid-service-assurance.md`

This is a **new page** that merges Satellite Revenue Assurance capabilities with terrestrial SLA management into one E2E story.

```yaml
---
title: "Hybrid Service Assurance"
tagline: "End-to-End SLA Intelligence Across Every Transport Layer"
heroImage: "/images/solution-hybrid-service-assurance.png"
description: "Real-time SLA management across terrestrial and satellite transport layers. Breach prediction, automated billing correlation, and revenue optimization — whether traffic is on fiber, tower, GEO transponder, or LEO pass."
order: 10
hero:
  eyebrow: "Hybrid Service Assurance"
  title: "One SLA View. Every Transport Layer."
  description: "Terrestrial SLAs and satellite SLAs measured in different systems, reconciled in different spreadsheets, disputed in different meetings. Quatro unifies service assurance across every transport layer — fiber, tower, GEO, LEO, MEO — with real-time breach prediction, automated billing correlation, and revenue optimization intelligence."
  primaryCta:
    label: "Request a Revenue Assessment"
    href: "/contact/demo"
  secondaryCta:
    label: "Explore Service Assurance"
    href: "/contact/sales"
stats:
  - value: "1-3%"
    label: "Revenue Recovery Year 1"
  - value: "24+ hrs"
    label: "SLA Breach Prediction"
  - value: "80%"
    label: "Fewer Billing Disputes"
  - value: "E2E"
    label: "Cross-Domain SLA Tracking"
challenges:
  - title: "Separate SLA Worlds"
    description: "Terrestrial SLA compliance is measured in one system with one set of KPIs. Satellite SLAs — transponder availability, link budget margins, rain fade compensation — are tracked in a completely different system. When customers buy hybrid connectivity, nobody owns the end-to-end SLA."
  - title: "Billing Data Latency"
    description: "Transponder utilization data reaches billing systems 12-48 hours after the event. Terrestrial capacity charges are calculated monthly. Real-time service quality has no real-time financial visibility."
  - title: "Revenue Leakage at Domain Boundaries"
    description: "5-15% of transponder capacity sits idle while billed at full rate. Terrestrial over-provisioning costs accumulate silently. The boundary between satellite and terrestrial billing is where revenue leaks compound — because nobody correlates across both."
  - title: "Manual Dispute Resolution"
    description: "SLA disputes take 2-4 weeks to resolve through manual correlation across 3+ systems. When traffic moves between satellite and terrestrial during a service event, determining SLA accountability becomes a multi-team forensic exercise."
capabilities:
  - name: "End-to-End SLA Tracking"
    description: "Unified SLA monitoring across fiber, tower, GEO transponder, LEO pass, and hybrid paths. When traffic shifts between transport layers, SLA tracking follows automatically. One SLA dashboard for the entire service, not per-domain fragments."
  - name: "SLA Breach Prediction"
    description: "24+ hour advance warning before SLA breaches occur. The platform correlates terrestrial performance trends with satellite capacity forecasts to predict compound breaches that span domains. Pre-approved mitigation workflows trigger before breach, not after."
  - name: "Automated Billing Correlation"
    description: "Real-time billing runs correlated with operational reality across all transport layers. Customer invoices show allocated vs. actual capacity, SLA availability across domains, and credits auto-applied per contract terms. Transparency replaces disputes."
  - name: "Revenue Optimization Intelligence"
    description: "Recommendations for pricing optimization and capacity right-sizing based on real-time utilization patterns across terrestrial and satellite resources. Identifies idle capacity, over-provisioned links, and upsell opportunities."
  - name: "Dispute Prevention Workflows"
    description: "When issues span domains, the platform provides a complete audit trail — which transport layer was affected, for how long, what the SLA impact was, and what credit is owed. Disputes resolve in days with shared data, not weeks of forensic reconciliation."
  - name: "Cross-Domain Revenue Intelligence"
    description: "Connect transponder events, terrestrial performance, and customer contract terms into a unified commercial intelligence view. Revenue per service path, customer churn risk, and competitive pricing benchmarks across your hybrid service portfolio."
platformMapping:
  connect: "Ground segment telemetry, terrestrial NMS data, VSAT hub utilization, modem throughput, RF power levels, tower site performance, fiber capacity metrics, billing system feeds, contract terms, service definitions. Real-time data ingestion from every transport layer."
  operate: "Real-time SLA breach prediction spanning terrestrial and satellite domains. Cross-domain billing correlation mapping operational reality to invoice generation. Revenue leakage detection at domain boundaries where siloed tools have blind spots."
  command: "Revenue optimization recommendations based on cross-domain demand forecasting. Automated SLA credit application with full audit trail. Proactive customer communication when service events span transport layers. Dispute prevention through transparent, shared operational data."
proofPoint:
  industry: "Networks — Commercial Satellite Operator"
  headline: "Revenue Recovery and Billing Transformation"
  metrics:
    - value: "2.1%"
      label: "Revenue Recovered Year 1"
    - value: "80%"
      label: "Fewer Billing Disputes"
    - value: "90%+"
      label: "SLA Credit Recovery Rate"
  narrative: "A satellite operator with $50M annual revenue deployed Quatro revenue assurance across its commercial operations. Real-time utilization tracking and SLA breach prediction recovered 2.1% incremental revenue in Year 1. Automated billing correlation reduced disputes by 80%, and transparent breach documentation improved SLA credit recovery from 55% to 92%."
cta:
  primary:
    label: "Request a Revenue Assessment"
    href: "/contact/demo"
  secondary:
    label: "Talk to a Revenue Leader"
    href: "/contact/sales"
  microcopy: "90-day revenue baseline assessment. Full cross-domain billing audit. Revenue leakage quantified on your actual data across terrestrial and satellite operations. Credited toward contract."
---
```

---

## Task 3 — Update Existing Solution Pages

### 3A — Update Network Operations

**File:** `src/content/solutions/network-operations.md`

Update the hero description and several fields to reference hybrid terrestrial+satellite context:

**Replace** the `hero.description`:
```
FROM: "Stop toggling between 5-10 vendor tools. Unified network intelligence with AI-driven correlation, automated remediation, and SLA compliance in one platform."
TO:   "Stop toggling between 5-15 vendor tools across terrestrial and satellite domains. Unified network intelligence with AI-driven correlation, automated remediation, and cross-domain SLA compliance in one platform — from tower site to ground station to orbit."
```

**Replace** the `description` (top-level):
```
FROM: "Replace vendor silos with unified network intelligence. 80% fewer false alarms, 55% faster MTTR, and one platform for any vendor's equipment."
TO:   "Replace vendor silos with unified network intelligence across terrestrial and satellite domains. 80% fewer false alarms, 55% faster MTTR, and one platform for any vendor's equipment — ground to orbit."
```

### 3B — Update Fleet Health

**File:** `src/content/solutions/fleet-health.md`

Add terrestrial fleet context. Update the `description` (top-level) to include terrestrial equipment alongside constellation assets. The exact changes depend on the current file — add references to "terrestrial equipment (towers, cabinets, power systems)" alongside the existing constellation monitoring language.

**Specifically, find and update:**
- Hero description: Add ", terrestrial equipment health," alongside satellite fleet monitoring
- Add a capability for cross-domain correlation if one doesn't already exist

### 3C — Leave Teleport Operations and Space Domain Awareness as-is

These pages are already well-scoped and don't need changes for the Networks merger. They'll naturally be surfaced under the Networks vertical through navigation.

---

## Task 4 — Update Navigation

**File:** `src/lib/navigation.ts`

### 4A — Update Industries dropdown description

Find the Networks entry in the English primary navigation `items` array:
```
FROM: { name: 'Networks', description: 'Satellite, telecom, and broadcast infrastructure', href: '/industries/networks', icon: SignalIcon },
TO:   { name: 'Networks', description: 'Terrestrial, satellite, and hybrid connectivity operations', href: '/industries/networks', icon: SignalIcon },
```

And the Spanish equivalent:
```
FROM: { name: 'Redes', description: 'Infraestructura satelital, telecomunicaciones y broadcast', href: '/industries/networks', icon: SignalIcon },
TO:   { name: 'Redes', description: 'Operaciones terrestres, satelitales y conectividad híbrida', href: '/industries/networks', icon: SignalIcon },
```

### 4B — Update footer solutions list

In `footerNavigationData.en.solutions.items`, update to reflect the consolidated solution set:

**Replace** the full solutions items array (both `en` and `es`) to remove retired solutions and add the new one:

**English footer solutions — replace the full items array with:**
```javascript
items: [
  { name: 'Asset Monitoring', href: '/solutions/asset-monitoring' },
  { name: 'Pipeline Security', href: '/solutions/pipeline-security' },
  { name: 'Operational Intelligence', href: '/solutions/operational-intelligence' },
  { name: 'Physical Security', href: '/solutions/physical-security' },
  { name: 'Fleet & Logistics', href: '/solutions/fleet-logistics' },
  { name: 'Grid Operations', href: '/solutions/grid-operations' },
  { name: 'Network Operations', href: '/solutions/network-operations' },
  { name: 'Teleport Operations', href: '/solutions/teleport-operations' },
  { name: 'Fleet Health', href: '/solutions/fleet-health' },
  { name: 'Hybrid Service Assurance', href: '/solutions/hybrid-service-assurance' },
  { name: 'Space Domain Awareness', href: '/solutions/space-domain-awareness' },
  { name: 'Port Operations', href: '/solutions/port-operations' },
  { name: 'Airport Operations', href: '/solutions/airport-operations' },
  { name: 'Corridor Intelligence', href: '/solutions/corridor-intelligence' },
  { name: 'Water Systems', href: '/solutions/water-systems' },
  { name: 'Environmental Compliance', href: '/solutions/environmental-compliance' },
],
```

**Spanish footer solutions — replace with:**
```javascript
items: [
  { name: 'Monitoreo de Activos', href: '/solutions/asset-monitoring' },
  { name: 'Seguridad de Ductos', href: '/solutions/pipeline-security' },
  { name: 'Inteligencia Operacional', href: '/solutions/operational-intelligence' },
  { name: 'Seguridad Física', href: '/solutions/physical-security' },
  { name: 'Flotas y Logística', href: '/solutions/fleet-logistics' },
  { name: 'Operaciones de Red Eléctrica', href: '/solutions/grid-operations' },
  { name: 'Operaciones de Red', href: '/solutions/network-operations' },
  { name: 'Operaciones Teleport', href: '/solutions/teleport-operations' },
  { name: 'Salud de Flota', href: '/solutions/fleet-health' },
  { name: 'Aseguramiento de Servicio Híbrido', href: '/solutions/hybrid-service-assurance' },
  { name: 'Conciencia Espacial', href: '/solutions/space-domain-awareness' },
  { name: 'Operaciones Portuarias', href: '/solutions/port-operations' },
  { name: 'Operaciones Aeroportuarias', href: '/solutions/airport-operations' },
  { name: 'Inteligencia de Corredor', href: '/solutions/corridor-intelligence' },
  { name: 'Sistemas de Agua', href: '/solutions/water-systems' },
  { name: 'Cumplimiento Ambiental', href: '/solutions/environmental-compliance' },
],
```

**NOTE:** We're keeping Asset Monitoring, Operational Intelligence, and Satellite Revenue Assurance in the footer for now (soft retirement) — they still render as valid pages. We'll fully retire them in a future pass once inbound links are mapped. The key change is replacing `Revenue Assurance` with `Hybrid Service Assurance`.

---

## Task 5 — Set Up Redirects

**File:** Check if there's an existing redirects configuration. Look for:
- `astro.config.mjs` or `astro.config.ts` → `redirects` property
- A `_redirects` file in `/public/`
- A middleware file

If an `astro.config.mjs` `redirects` property exists, add:
```javascript
redirects: {
  '/industries/space-satcom': '/industries/networks',
  '/industries/infrastructure': '/industries/networks',
  '/solutions/satellite-revenue-assurance': '/solutions/hybrid-service-assurance',
}
```

If using a `_redirects` file in `/public/`, add:
```
/industries/space-satcom /industries/networks 301
/industries/infrastructure /industries/networks 301
/solutions/satellite-revenue-assurance /solutions/hybrid-service-assurance 301
```

If neither exists, create the redirects in `astro.config.mjs` using Astro's built-in redirect support:
```javascript
export default defineConfig({
  // ... existing config
  redirects: {
    '/industries/space-satcom': '/industries/networks',
    '/industries/infrastructure': '/industries/networks',
    '/solutions/satellite-revenue-assurance': '/solutions/hybrid-service-assurance',
  },
})
```

---

## Task 6 — Remove Retired Industry Pages

**Do NOT delete** the files yet — rename them with a `.retired` extension so they're excluded from the content collection but preserved for reference:

```bash
mv src/content/industries/space-satcom.md src/content/industries/space-satcom.md.retired
mv src/content/industries/infrastructure.md src/content/industries/infrastructure.md.retired
```

This prevents the Astro build from generating `/industries/space-satcom` and `/industries/infrastructure` as pages (the redirects in Task 5 handle incoming traffic).

---

## Task 7 — Update Content Schema (if needed)

**File:** `src/content/config.ts`

Verify that the industries collection schema supports all the fields used in the new `networks.md` file. The schema should already support everything (challenges with images, capabilities with featured/image/outcome/tier, platformMapping, proofPoint, cta). No changes expected, but verify:

1. `challenges[].image` is `z.string().optional()` ✓
2. `capabilities[].image` is `z.string().optional()` ✓
3. `capabilities[].featured` is `z.boolean().optional()` ✓
4. `platformMapping` has `connect`, `operate`, `command` as strings ✓

---

## Task 8 — Handle Industry Hub Page (if it exists)

Check if there's an industries index page at `src/pages/industries/index.astro` or similar. If it dynamically lists all industries from the content collection, the new `networks.md` will appear automatically and the retired `.md.retired` files won't. Verify this renders correctly.

If the hub page has any hardcoded references to "Space & SATCOM" or "Infrastructure", update them to reference "Networks" instead.

---

## Verification

After all changes, run:
```bash
npm run build
```

Then verify:
1. `/industries/networks` renders with the full Networks page (hero, 5 challenges, 8 capabilities, proof point)
2. `/solutions/hybrid-service-assurance` renders correctly
3. `/industries/space-satcom` redirects to `/industries/networks`
4. `/industries/infrastructure` redirects to `/industries/networks`
5. `/solutions/satellite-revenue-assurance` redirects to `/solutions/hybrid-service-assurance`
6. Navigation dropdown shows "Networks" with updated description
7. Footer shows "Hybrid Service Assurance" instead of "Revenue Assurance"
8. No build errors from the retired `.md.retired` files

---

## Image Generation Note

The following new images need to be generated for the Networks vertical. These are NOT in the existing image directories — they need new generation prompts:

### Hero Image (1 image)
- `industry-networks.png` — Hybrid ground station + terrestrial tower infrastructure at twilight. Satellite dishes and cell towers sharing the frame. The convergence of terrestrial and orbital infrastructure. (1920×1080, cinematic)

### Challenge Icons (5 images, 400×400 each)
- `challenge-networks-nms-fragment.png` — Multi-vendor NMS fragmentation
- `challenge-networks-fault-correlation.png` — Fault correlation across domains
- `challenge-networks-multi-orbit.png` — Multi-orbit complexity
- `challenge-networks-revenue-leakage.png` — Revenue leakage across transport layers
- `challenge-networks-convergence-gap.png` — Convergence without a convergence platform

### Non-Featured Capability Images (5 images, 800×600 each)
- `cap-networks-fault-remediation.png` — Autonomous fault remediation
- `cap-networks-multi-orbit.png` — Multi-orbit capacity orchestration
- `cap-networks-teleport.png` — Teleport & ground segment command
- `cap-networks-sda.png` — Space domain awareness integration
- `cap-networks-sovereign.png` — Sovereign & air-gapped deployment

### Solution Hero (1 image)
- `solution-hybrid-service-assurance.png` — Hybrid service assurance concept

**Total: 12 new images** to be generated with Replicate before or after running this prompt.

---

## Solution Page Mapping for Networks Vertical

For reference, the Networks vertical links to these solution pages:

```
Networks
├── Network Operations (/solutions/network-operations) — terrestrial NOC
├── Teleport Operations (/solutions/teleport-operations) — satellite ground segment
├── Fleet Health (/solutions/fleet-health) — constellation + terrestrial equipment
├── Hybrid Service Assurance (/solutions/hybrid-service-assurance) — E2E SLA across domains (NEW)
└── Space Domain Awareness (/solutions/space-domain-awareness) — orbital intelligence
```

### Solution pages to soft-retire (keep files, remove from primary navigation):
- `/solutions/satellite-revenue-assurance` → Redirects to Hybrid Service Assurance
- `/solutions/asset-monitoring` → Capabilities absorbed into Network Operations and Fleet Health
- `/solutions/operational-intelligence` → Capabilities absorbed into Network Operations
