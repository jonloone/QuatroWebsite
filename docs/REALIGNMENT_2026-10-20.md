# Website Realignment Spec — 2026-10-20

**Status:** active. Canonical, repo-local spec for the sitewide realignment. `BACKLOG.md`
tickets point at the sections below by number. **Supersedes `REALIGNMENT_2026-06-08.md`**
(retired; see §14 for what carries forward).

**Origin:** condensed from `docs/REALIGNMENT_AUDIT_2026-10-20.md` (the engagement-vs-site
audit; also at `LMIQuatro/Quatro-Website-Realignment-Audit-2026-10-20.md`). This file is
self-sufficient for executing a ticket; read the audit for the evidence.

**The job:** rebuild the middle of the site (capabilities, industries, how it works, proof,
engagement model) around the offer the 2026 proposals actually describe: one sovereign
operational picture built from territorial monitoring from space (Klarety), operational
intelligence from the plant and network (DataMiner xOps), and Quatro's own layer
(integration, IoT and OT communications, reasoning and evidence workflows, intelligence
baseline, in-country managed service). **Sprint 0 is Energy**, because the Ministerio de
Ambiente y Energía (Ecuador) is the live pursuit and the Energy page is what the Minister's
staff will open after the briefing.

---

## §0 Invariants (never break these)

1. **Never render invented state.** No fabricated screenshot, metric, logo, client, or
   engagement. Honest placeholder beats fake. Every number is attributed (xOps scale to
   DataMiner; demonstration figures only where the consortium produced them and Jonathan
   has approved the line).
2. **Voice gate is law.** `docs/VOICE_GATE.md` on every customer-facing string. Hard bans
   include `platform`, `digital twin`, `OT/IT`, `empower/enable/unlock/leverage`,
   exclamation points, em-dash connective tissue, "not X, Y" antitheses.
3. **Mission verbatim.** "We exist to make critical infrastructure intelligent…" and the
   hero "Making critical infrastructure intelligent." stay.
4. **Buyer is the hero.** Quatro integrates and operates; the client owns the intelligence,
   the deployment, and the data from day one. Humans decide; the system proposes; every
   action is signed.
5. **No named early engagements.** Describe the capability essence (a 1,000-km hydrocarbon
   corridor, a marine reserve, a mine-site remediation) without naming the client until
   Jonathan clears it.
6. **Spanish is first-class.** Every page touched by this spec ships EN and ES in the same
   ticket or has an explicit `ES-*` follow-on in the same sprint.
7. **Visual system unchanged.** `quatro-ui-system` (Reckless/Roobert/JetBrains Mono, forest
   green #0f4c3a, Bayer dither hero, `img-technical`, three radii, 8px grid). Reuse
   components before adding new ones. Images follow `image-generation` (v7.1 documentary
   for heroes and proof, v7t tactical for capability visuals) and the editorial direction
   toward end-state community imagery (reserves protected, lights on, corridors quiet).

---

## §1 Naming and transparency rules (decided 2026-10-20)

- **1a.** Tier 1 (homepage hero, industry heroes, nav): capabilities named as Quatro's
  ("territorial monitoring from space", "operational intelligence from the plant and
  network", "the Quatro IoT & Edge Suite"), no partner names.
- **1b.** **Decided 2026-10-20: the geospatial analysis capability is named "Quatro
  Klarety"** on every tier, the way hardware is "the Quatro IoT & Edge Suite". Tier 1 uses
  the product name alone ("Quatro Klarety, territorial monitoring from space"). Tier 1.5 and
  below may add one plain-language line that it is delivered with our earth-observation
  partner Klarety, and name **DataMiner xOps** for the operational model. No `TODO(KLARETY-
  NAME)` markers remain; capability page 5A is titled "Quatro Klarety".
- **1c.** Removed from every Quatro page: DataOS, ECR, Second Wind, SES, Intelsat, Telesat,
  SMARTS, TEKTELIC, IoT Orbital. Hardware is "the Quatro IoT & Edge Suite". QuatroOS and
  Quatro Field do not appear on marketing pages; the Architecture page (§6D) may say "the
  reasoning layer is being extended on a governed, bitemporal fact ledger".
- **1d.** Elementos appears once per relevant page as the affiliate for intelligence-led
  scope (risk baseline, threat networks), with a routing CTA.
- **1e.** Identity: "Headquartered in Quito, Ecuador, with a US entity." Active markets:
  Ecuador, Colombia, Venezuela, Panama, Guyana; MENA through a channel partner.

---

## §2 The story (homepage-grade, Tier 1.5)

**Hero:** "Making critical infrastructure intelligent." (verbatim)
**Sub:** One operational picture of your territory and your operations, from satellite to
SCADA to the field, run in your country and owned by you from day one.
**Promise line:** See the territory. Run the operation. Own the intelligence.

**Three layers (the band under the hero, and the Capabilities index):**

| Layer | Headline | What the buyer gets | Substrate hint (Tier 1.5+) |
|---|---|---|---|
| Territory (**Quatro Klarety**) | See what changed, where, and when. | Continuous change detection over corridors, reserves, mine sites and cities from open satellite data; high-resolution and all-weather radar only on confirmed change, tasked from inside the picture; plain-language questions with cited answers; alerts delivered to the systems you already run. | Delivered with Klarety (§1b) |
| Operation | Every system you run, in one live model. | SCADA, historians, GIS, detection systems, video and sensors correlated into one real-time operational model: alarming, automation, command center. 8,000+ integrations, proven across 1,000+ operators. | Skyline DataMiner xOps |
| Quatro's layer | Integrate, sense, reason, operate. | The IoT & Edge Suite with OT communications (satellite, L-band failover, LoRaWAN); the orchestration and reasoning module that correlates domains; operational agents that triage, assemble evidence, and propose dispatch; chain-of-custody records; the intelligence and risk baseline; hosting in-country, managed service, a forward-deployed engineer, training in Spanish. | Quatro Ecuador / Quatro US |

**Engagement ladder (one paragraph, reused on How-it-starts and every industry page):**
A proof of value in 30 to 90 days on your highest-risk area, satellite baseline first because it
needs no field hardware, measured against indicators agreed in advance, with a year of access
retained. Then an annual service your team runs. Then, for national programs, a tranche build
through a consortium led by a local prime. Hosted in your country or on your infrastructure;
data and derived products are yours; AI governance is written into the contract annex.

---

## §3 Navigation and sitemap

```
Capabilities            /capabilities            (index: the three layers + six pages)
  Quatro Klarety (territorial monitoring) /capabilities/quatro-klarety            NEW
  Operational intelligence (xOps)        /capabilities/operational-intelligence   from /utility/xops
  IoT, edge and OT communications        /capabilities/iot-edge                   NEW
  Reasoning, agents and evidence         /capabilities/reasoning-and-evidence     NEW
  Intelligence and risk baseline         /capabilities/risk-baseline              NEW (short; Elementos CTA)
  Managed service and sovereign hosting  /capabilities/managed-service            NEW
Industries              /industries
  Energy and pipelines                   /industries/energy                       REWRITE (Sprint 0)
  Environment and protected areas        /industries/environment                  NEW
  Mining and remediation                 /industries/mining                       NEW
  Cities and public services             /industries/cities                       REWRITE
  Security and critical infrastructure   /industries/security                     MERGE defense + critical-infrastructure
  Agriculture and aquaculture            /industries/agriculture                  NEW, status: emerging
How it works            /how-it-works                                             from /utility
  The operational picture                /how-it-works                            REWRITE of /utility/index + technology (Tier 1.5)
  How an engagement runs                 /how-it-works/engagement                 REWRITE of /utility/how-it-starts
  Sovereignty, hosting and governance    /how-it-works/sovereignty                NEW
  Architecture                           /how-it-works/architecture               NEW (Tier 3, not in nav)
Proof                   /proof
  Reference work                         /proof                                   NEW (abstracted)
  Insights                               /insights                                KEEP
Partners                /partners                                                 REWRITE
Company                 /company/about, /company/leadership, /contact             EDIT
```

Redirects (`astro.config.mjs` + `netlify.toml`): `/utility` → `/how-it-works`,
`/utility/xops` → `/capabilities/operational-intelligence`, `/utility/technology` →
`/how-it-works`, `/utility/how-it-starts` → `/how-it-works/engagement`,
`/utility/what-you-get` → `/capabilities`, `/industries/{finance,broadcast-media,networks,
industrial,transportation,water-environment}` → `/industries`, `/industries/defense` and
`/industries/critical-infrastructure` → `/industries/security`, `/solutions` → `/capabilities`.

---

## §4 Sprint 0 — Energy page for the Ministerio de Ambiente y Energía

> Drop-in copy: **`docs/COPY_ENERGY_2026-10-20.md`** (EN; ES in `ES-ENERGY-1`).
> Images: **`image-prompts/energy-ministry-2026-10.csv`** (see §12); generated files are in `public/images/` as of 2026-10-20.

**Audience.** The Minister's staff, CENACE, ARCOM, EP Petroecuador, CNEL, and the
multilateral desks that fund them, opening the page after the five-slide briefing. Tier 1.5.
Spanish is the reading language; English is the review language.

**What changes.** Today's Energy page is written for a US utility (NERC CIP, PHMSA, EPA
methane, DER, SunSpec, storm playbooks). Rewrite it around the one-ministry portfolio
(electricity, hydrocarbons, mining, environment, water) and the four initiatives the
briefing applies the operational picture to, in the Ministry's order of urgency:

1. **Dry season and El Niño operations.** Dispatch, reserve, reservoir, inflow, forecast
   (INAMHI, INOCAR, NOAA fused, never forecast by us) and transmission loading in one daily
   dry-season brief; satellite observation of reservoir extent and coastal flooding
   confirms the models. No field hardware to start. First brief within 30 days.
2. **Illegal-mining watch and legal-concession compliance.** Continuous change detection
   over known illegal sites and the basins around them (vegetation loss, new pooling,
   turbidity, excavation, road cutting), confirmed on demand with high-resolution and
   radar; concessions monitored against the license footprint; dated, geolocated evidence
   for the regulator, the Armed Forces and the prosecutor. Baseline over priority zones in
   30 days.
3. **Hydrocarbon corridor protection.** Three SCADAs, historians, GIS, leak-detection and
   field sensing in one picture; right-of-way observed continuously; tap precursors
   confirmed from orbit and correlated with line pressure and field events; chain-of-custody
   evidence; the intelligence layer maps the network behind a confirmed site.
4. **Distribution-loss recovery and grid fragility.** Metering, consumption and field
   data correlated to localize non-technical loss by feeder and neighborhood; loading and
   asset health on the priority transmission nodes; a defensible record for recovery and
   for investigations.

Plus a fifth, lighter block for **refinery and plant control modernization** (the
engineering-assessment pattern: a live connected model left behind instead of a PDF).

**Page structure (top → bottom), reusing the existing industry template fields:**

1. `hero` — eyebrow "Energy and pipelines"; H1 and sub from the copy deck; CTA "Talk to our
   team". Hero image: new v7.1 (§12, `industry-energy-andes-hydro.png`).
2. `stats` — replace with three attributed facts: `8,000+ integrations (DataMiner xOps)`,
   `30 days to a first operational picture (satellite baseline, no hardware)`,
   `In-country hosting and managed service`.
3. `challenges` (four, retitled from the ministry's four fronts, environment as the
   cross-cutting line; 400×400 icons, three new, one reused).
4. `capabilities` (five featured blocks = the four initiatives + refinery; each with
   `outcome` and an 800×600 v7t visual; two reused, three new).
5. **Authority line** (one line; §13): "We know the control room and the right of way:
   SCADA alarms, leak-detection systems, dispatch under a dry-season deficit, and the
   regulators who hold you to it (ARCERNNR, ARCOM, CENACE, SNGR, MAE)."
6. `platformMapping` → rename the three keys in the template to **see / correlate / act**
   and fill from the deck (Tier 1.5 language, no substrate names at Tier 1).
7. **Proof row** — two abstracted reference cards: the corridor demonstration (figures only
   if Jonathan approves the line in the deck) and the reservoir / El Niño assessment
   pattern; link to `/proof`.
8. **Engagement ladder** paragraph (§2) with the 30 / 90-day gates.
9. `proofPoint` → replace the "Unified Energy Intelligence" block with the Ministry-portfolio
   line from the deck.
10. CTA; microcopy "Hosted in your country · Your team owns it from day one".

**Acceptance.** `npm run build` green; voice gate pass; zero hits for `NERC`, `PHMSA`,
`EPA`, `SunSpec`, `OCPP`, `DER`, `platform`, `digital twin`; every stat attributed; ES page
present or `ES-ENERGY-1` open; needs human eyes: the page reads as one portfolio, not five
sub-sector solutions.

---

## §5 Capabilities (six pages, one template)

Build one `CapabilityLayout` with: hero (eyebrow = layer, H1, sub), "what you get" (four to
six plain lines), "how it shows up in your operation" (two or three industry examples
linking to industry pages), substrate line (Tier 1.5, per §1), proof card or honest
placeholder, hand-off to the next layer, engagement-ladder paragraph, CTA.

- **5A Quatro Klarety, territorial monitoring from space.** Source: ministry Card 4 walk (flag → confirm
  cheaply → confirm decisively → correlate → act), Galápagos spec §6 (lakehouse, alerts by
  webhook, natural-language query with citations, tasking), mining PoV (contamination
  screening, vegetation and watershed impact). Title and H1 use "Quatro Klarety" (§1b).
- **5B Operational intelligence (xOps).** Apply `docs/COPY_UNIFY_XOPS_2026-06-08.md`
  (title "The operational model", scale band high, zero `platform`/`digital twin`), add
  hand-offs to 5A and 5D, keep "Powered by DataMiner".
- **5C IoT, edge and OT communications.** Apply `docs/COPY_HARDWARE_2026-06-08.md`; add
  OT communications (satellite primary, L-band failover, cellular backup, LoRaWAN field
  capillarity, solar power, enclosures) and the "hardware only where confirmed risk
  justifies it" rule.
- **5D Reasoning, agents and evidence.** Multivariable correlation (pressure, flow,
  temperature, status, acoustic, vibration, EO, field reports), four operational agents
  (event triage, evidence assembly, right-of-way alert triage, field dispatch), chain-of-
  custody records, human-in-the-loop, plain-language query in Spanish. Tier-3 link to §6D.
- **5E Intelligence and risk baseline.** Historical incident analysis, threat mapping,
  terrain and population overlay, heat map, sensor placement plan; threat-network mapping
  through Elementos (routing CTA). Short page.
- **5F Managed service and sovereign hosting.** In-country operation, extended-hours
  support, 90-day hypercare after go-live, service levels reported monthly, hosting
  options (on-premise, national cloud region, hybrid), the confidentiality and
  AI-sovereignty annex, forward-deployed engineer, training in Spanish.

---

## §6 How it works

- **6A The operational picture** (`/how-it-works`): the three layers as a band, the
  human-in-the-loop and ownership paragraph, the engagement ladder, a quiet link to
  Architecture. Replaces `/utility/index` and the Tier 1.5 part of `technology.astro`.
  Remove the retail purchase-behaviour example, "semantic substrate", "ontology",
  "knowledge graph", "governed data product", the three telecom case studies, "seven
  questions".
- **6B How an engagement runs** (`/how-it-works/engagement`): PoV (30 to 90 days, gates,
  what starts without hardware, what the client supplies: data access, a validator, a
  hosting decision) → annual service → program (tranches, consortium, local prime,
  open-book). No prices unless Jonathan decides otherwise (§13).
- **6C Sovereignty, hosting and governance**: generalized from the Galápagos annex
  (sensitive surveillance information, personal data under LOPDP, derived-product
  ownership, system configuration and credentials, in-country deployment, AI behaviour
  bounds). Plain language, no legal text.
- **6D Architecture** (Tier 3, not in nav): the full layered architecture with substrate
  names allowed per §1, governance and audit chain, deployment model. Absorbs the honest
  depth from `technology.astro` minus DataOS/ECR/Second Wind.

---

## §7 Industries

Template changes: `status: active | emerging | retired`, `proofBadge`, `authorityLine`,
`proofCards[]` (abstracted reference work), engagement-ladder paragraph, three-layer band
with per-industry captions. Keep the existing `hero/challenges/capabilities` fields.

| Industry | Status | Source material | Badge |
|---|---|---|---|
| Energy and pipelines | active (Sprint 0, §4) | ministry outline and cards, PetroEcuador v2.0, PDVSA brief | Demonstrated on a corridor |
| Environment and protected areas | active | Galápagos spec and v2 proposal, El Niño module, Klarety demo | Demonstrated on a reserve |
| Mining and remediation | active | Fossato PoV, mining-remediation meeting, Grantiera, ARCOM watch | Demonstrated on a site |
| Cities and public services | active | Colombia PoV (disaster relief, cadaster, block surveys), Klarety municipal verticals (tax evasion by building change, waste routes), xOps CityOp | Proven at scale (xOps) + demonstrated |
| Security and critical infrastructure | active | Champmar, PetroEcuador corridor, Elementos scope, custody-of-evidence | Demonstrated |
| Agriculture and aquaculture | emerging | Champmar, Klarety channel verticals (cacao, shrimp, forestry) | Emerging (no proof claims) |
| Finance, Broadcast & Media, Networks | retired | 301 to `/industries` (or to the Modern site where a page exists) | — |
| Industrial, Transportation, Water & Environment | folded | industrial → Energy and Mining; ports and fleet → Cities (xOps-proven note); water → Cities and Environment | — |

---

## §8 Solutions and use cases

- Retire the `solutions` collection as a navigable surface (it already 301s). Keep the
  files; add `status: moved-to-dataos` to teleport-operations, space-domain-awareness,
  fleet-health (satellite), revenue-assurance, credit-risk, npa-early-warning,
  claims-classification, customer-360; add `capability:` and `industry:` to the rest so
  they can render as example cards under the relevant industry.
- Use cases: keep and rewrite `galapagos-conservation` (→ "marine reserve vigilance",
  abstracted), `pipeline-integrity`, `mining-operations` (→ remediation), `maritime-
  awareness`, `environmental-compliance-energy`, `grid-operations` (→ dry-season
  operations). Retire the rest (`.retired`).
- Metrics: every hard stat on any card is sourced, relabeled "declared vendor performance"
  or "target agreed at proof of value", or cut.

---

## §9 Proof

- **9A Reference work** (`/proof`): four abstracted pieces with white-labeled captures
  (partner consent required; honest placeholder until supplied): a hydrocarbon corridor
  screened from orbit and confirmed by radar; a marine reserve's El Niño multi-system
  assessment; a mine-site landslide before and after; a grid operational picture (xOps
  story lane). Each: what the operator saw, what the team did, what it took (days, not
  claims).
- **9B Reference programs**: DataMiner public references only with Skyline's written OK;
  labeled "partner-delivered reference programs", never "our past performance".
- **9C Insights**: wire by tag into capability and industry pages (three per page); update
  the blog-cadence category map to the new industries.

---

## §10 Homepage

Hero verbatim + new sub + promise line (§2). Six captions rewritten to the 2026 work:
a corridor, a reserve, a mine site, a city after an earthquake, a dry-season grid, a
refinery. Three-layer band with captions. Industry rows (six). Ecosystem band per §1c.
Proof stories from §9A. "Where we operate" per §1e. FAQ: rewrite three answers (how
different from an SI; lock-in; what the engagement looks like) and add "Can this run in
our country?" Footer per §1e.

---

## §11 Partners, Company

- **Partners**: three-tier channel (local partner → Quatro → platform partners), what
  Quatro brings to a partner (sensing, security, data integration, in-country operation,
  proposal support, flat-fee treatment for platform partners), active markets per §1e,
  ideal partners (local primes with past performance, geospatial and engineering firms,
  development-bank-aligned programs). Remove Africa and Southeast Asia as active.
- **About**: Quito HQ with a US entity; Elementos as affiliate; one line on ventures
  (Sphera, Occupy) without detail; leadership unchanged.

---

## §12 Images (Sprint 0 scope; `image-generation` skill)

Reuse: `industry-energy.png` as fallback only; keep `challenge-energy-scada.png`,
`challenge-energy-vendor-silos.png`; keep `cap-energy-scada-overlay.png`,
`cap-energy-pipeline.png`. Retire from the Energy page: `cap-energy-der.png`,
`cap-energy-storm-response.png`, `cap-energy-compliance.png`, `cap-energy-emissions-esg.png`,
`challenge-energy-der-complexity.png` (they describe a US utility).

Generate (prompts in `image-prompts/energy-ministry-2026-10.csv`):

| File | Type | Style | Scene |
|---|---|---|---|
| `industry-energy-andes-hydro.png` | Hero 1920×1080 | v7.1 World | Andean hydro reservoir and dam at dawn, dry-season shoreline visible, transmission lines leaving the valley, a town with lights on below. Clear zone top-left for the headline. |
| `cap-energy-dry-season.png` | Featured capability 800×600 | v7t | Reservoir outline and inflow basins as a tactical overlay, dispatch and transmission loading traces, a forecast band, one flagged basin. |
| `cap-energy-mining-watch.png` | Featured capability 800×600 | v7t | Satellite change-detection grid over a forested basin, flagged cells, a concession footprint outline, before/after swatches. |
| `cap-energy-corridor.png` | Featured capability 800×600 | v7t | A pipeline right of way from orbit with flagged cells, a pressure trace, and a field-sensor cluster marker. |
| `cap-energy-loss-recovery.png` | Featured capability 800×600 | v7t | Feeder map with loss hotspots ranked, meter-event ticks, one neighborhood highlighted. |
| `cap-energy-refinery-model.png` | Capability 800×600 | v7t | Refinery unit map with a live connected model overlay replacing a paper assessment. |
| `challenge-energy-dry-season.png` | Challenge icon 400×400 | v7.1 Detail | Exposed reservoir shoreline with the waterline mark high above the water. |
| `challenge-energy-illegal-mining.png` | Challenge icon 400×400 | v7.1 Vantage | Aerial of river turbidity plume and excavated pits beside intact forest. |
| `challenge-energy-corridor-theft.png` | Challenge icon 400×400 | v7.1 Detail | Pipeline right of way with a fresh clearing and tire tracks, dusk. |
| `proof-energy-corridor.png` | Proof 1200×750 | v7.1 Transition | Operators in a control room in Ecuador looking at a corridor map while a field crew checks in over radio; optimistic, lights on. |

Rules: no typography, no logos, no faces; clear overlay zone built into the prompt; the
editorial direction is end-state (the valley lit, the reserve quiet), not process.
Generate at 2K for heroes and proof, 1K for capabilities and icons.

---

## §13 Decisions needed (planner escalates per `docs/DECISION_AUTHORITIES.md`)

1. ~~Name Klarety on the public site~~ Resolved 2026-10-20: "Quatro Klarety" (§1b).
2. Publish the corridor demonstration figures (14 flagged cells, 7 dB radar drop) on the
   Energy page, or keep them in the deck only.
3. Price bands on the engagement page, or timeline and gates only.
4. Where DataOS-native solution SKUs 301 to.
5. Agriculture and aquaculture: publish as "emerging" now, or hold.
6. Partner consent for white-labeled captures (Klarety, Skyline) before `PROOF-1`.
7. Confirm the live domain and the Netlify source branch before anything ships.

---

## §14 What carries forward from REALIGNMENT_2026-06-08 (retired)

Kept: §0 invariants 1, 2, 3, 5, 7 (renumbered above); `VOICE_GATE.md`; `TICKET_PROTOCOL.md`;
`DECISION_AUTHORITIES.md`; the honest placeholder pattern (as proof cards); the solutions
retier and metrics rule (§8); Elementos routing (§5E); the `/utility` rename (§3); the
xOps and hardware copy decks (§5B, §5C); `SpineBand` from `SPINE-1` if it can carry three
layers. Retired: Sense → Unify → Act as the spine; the Quatro Field page and Act demo;
"keep all nine industries"; `COPY_QUATRO_FIELD_2026-06-08.md`; `COPY_HOMEPAGE_2026-06-08.md`
(promise line and band copy); `COPY_INDUSTRIES_2026-06-08.md` (demo captions; the
authority-line table is replaced by §7).

## §15 Verify notes

Package manager npm. Gate: `npm run build` (+ `npx astro check` where types matter), voice
gate on copy tickets, "needs human eyes" named per ticket. Start on a clean tree. One
ticket per commit. The local iCloud checkout cannot run git (bus errors on cloud-only
files); work from a GitHub clone and push, then let iCloud sync.
