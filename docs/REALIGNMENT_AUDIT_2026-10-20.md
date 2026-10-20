# Quatro Website Realignment Audit: Engagements vs. Information Architecture

**Date:** 2026-10-20
**Scope:** what Quatro actually proposed and delivered from April to October 2026, compared page by page against the Quatro marketing site (`LMIQuatro/QuatroWebsite`, GitHub `jonloone/QuatroWebsite`), with a remediation plan.
**Supersedes:** `Quatro-Website-Drift-Audit-2026-06-08.md`, `Quatro-Unified-Story-and-IA-Blueprint-2026-06-08.md`, and the repo spec `docs/REALIGNMENT_2026-06-08.md` (see §9 for what survives from them).
**Anchor (confirmed 2026-10-20):** the delivered core is DataMiner xOps plus Klarety earth observation, wrapped in Quatro's own layer (integration, IoT and OT comms, reasoning and evidence workflows, in-country managed service). QuatroOS and the Quatro Field app are roadmap depth, not the headline.

---

## 1. The finding

The website still sells the company we designed in April and May: a vertical-agnostic "industrial AI integrator" with nine industries, twenty-three solution SKUs, a semantic-substrate architecture story, satellite-operator partners, finance and broadcast verticals, and a hero carousel whose proof points are a bank, a US ISR fusion scenario and an 18-agency youth-risk program.

The company we actually ran for the last six months is narrower and more concrete. Every live pursuit is a **territorial and operational intelligence engagement for a Latin American public-sector or regulated operator**, assembled from the same three pieces: Klarety's geospatial platform for what is happening on the ground, DataMiner xOps for what is happening in the plant, pipe or network, and Quatro's own layer that integrates the two, adds sensing and communications, fuses it with intelligence, and runs it in-country as a managed service the client owns. The commercial shape repeats too: a 30 to 90 day proof of value in the $50K range, an annual platform or managed-service contract in the $100K to $250K range, and (for the state programs) a multi-million tranche build.

None of that is visible on the site. "Klarety", "earth observation" as a capability, "managed service", "proof of value", "mining", "remediation", "conservation", "disaster response", "pipeline theft", "Quito" and "Colombia" do not appear on any page. The 60 insight posts do cover this work (satellite monitoring, conservation, pipeline corridors, consortium patterns), so the blog is ahead of the information architecture. The fix is not new positioning. It is to rebuild the middle of the site (capabilities, industries, how it works, proof, engagement model) around the offer that proposals and meetings already describe, and to retire the pages that belong to DataOS or to a market Quatro is not working.

A second, mechanical finding: the June 8 realignment (Sense → Unify → Act, with the Quatro Field demo app as the "Act" beat) was never executed. Only one of its nineteen tickets closed (`SPINE-1`). Its anchor, the Field demo app, is not what has been sold since. That spec should be retired rather than resumed.

---

## 2. Method and sources

**Engagement evidence (Apr–Oct 2026).** Project memory for Quatro; proposal packages in `LMIQuatro/` (PetroEcuador Formal Proposal v2.0 and Tranche 1, Oct 2026; Galápagos Foundation Proposal v2 and Especificaciones Técnicas, Aug–Sep 2026; Ministerio de Ambiente y Energía 5-slide outline and Gamma cards, Sep 2026; Champmar Security Program, Jul 2026; UCI prep and partner map, Jun–Jul 2026; PetroEcuador teaming and IWPC master agreement, Sep–Oct 2026); 94 Granola meetings from Jul 21 to Oct 19, 2026, with ten read in full (Galápagos ×2, Esteban syncs ×3, Fossato/Colombia ×2, PetroEcuador ×2, PDVSA ×1, Klarety channel ×1, mining remediation ×1).

**Website evidence.** The local iCloud copy of `QuatroWebsite` (pages, nav, content collections, `BACKLOG.md`, `docs/REALIGNMENT_2026-06-08.md` and copy decks) and the GitHub clone (last commit 2026-05-20, "site-wide cleanup"). The two differ only cosmetically in `src/` (nav labels, a few industry files); the June 8 docs and the September insight posts exist only locally and were never committed. The live site could not be fetched from this session (`quatro.io` is parked at GoDaddy; `quatro.lat` refuses automated fetches), so the audit treats the local copy as current. **Confirm which domain is live and whether Netlify is building from GitHub `main` (May 20) or from a newer push.**

**Not in scope.** Sphera (wealth intelligence, separate brand and buyer) and Occupy/KFC (occupational health) are real ventures but not Quatro-site material beyond a company-page mention. DataOS/Modern pursuits (SES, Unibap, NASA, credit unions) are Jonathan's other company and were excluded.

---

## 3. What we actually sold, April to October 2026

| Engagement | Buyer | What Quatro proposed or delivered | Commercial shape | Channel / consortium |
|---|---|---|---|---|
| **PetroEcuador pipeline leak and theft program** (1,069 km, five corridors) | EP PETROECUADOR via Ministerio de Ambiente y Energía | DataMiner xOps as the operational intelligence platform integrating three SCADAs, historians, GIS, detection outputs, field sensing and video; **Quatro Ecuador as managed-services and local partner**: in-country operation and hosting, the orchestration and reasoning module, the three-tier earth-observation layer (open Sentinel screening → commercial optical on confirmed change → tasked SAR), the intelligence and risk baseline (heat map, sensor placement), four operational agents, response and chain-of-custody evidence workflows; field instrumentation and OT communications (satellite primary, L-band failover, LoRaWAN capillarity) with Valpro | Build ≈ $8.4M midpoint, managed service ≈ $1.8M/yr, five-year ≈ $17.4M; Tranche 1 (two corridors) ≈ $6–7M with results at 30/60/90 days | Valpro prime; IWPC program development and government relations; Atmos detection; Skyline DataMiner; Elementos scope folded into the Quatro managed service. Stalled in October (minister focused on the energy crisis) |
| **Ministerio de Ambiente y Energía briefing** | Minister Blum (merged energy, mines, environment, water portfolio) | "One sovereign operational picture": xOps + Quatro module + EO layer, applied to the pipeline corridor, illegal mining and El Niño dry-season resilience; Predict → Detect & Locate → Dismantle → Prosecute; analyst workstation queried in plain Spanish | 30-day to operational on the highest-risk segments, 90-day measured evaluation, one year of platform access retained | Consortium led in-country by an Ecuadorian prime; DataMiner leads the naming, Quatro is the module |
| **Galápagos National Park (DPNG)** | Gobierno de Galápagos / DPNG and its TIC team | Control and vigilance platform for the land and marine domains: Klarity GEO GeoLakehouse + space-time knowledge graph, AIS/VMS/dark-vessel + SAR/optical fusion, tipping-and-cueing alerts by webhook, natural-language query with cited answers, Vantor satellite tasking from inside the platform, custom control-and-vigilance app, forward-deployed engineer, Spanish training, confidentiality and AI-sovereignty annex | $88K fixed price (GEOLakehouse $32K, custom app $28K, alerting + NL query $12K, engineer + training $16K); El Niño climate module as separately quoted add-on; targeting ≈ $250K/yr | Klarety supplies the platform, Quatro/Esteban carry the deal and the sovereignty posture; closing hinges on hosting (on-prem vs AWS vs hybrid) and a defined Phase 1 |
| **Fossato mining remediation** (Zamora Chinchipe landslide, illegal-mining damage) | Ecuadorian remediation contractor (Edmundo; ex-Minister of Environment on the team) | "QuatroClarity as the client's operating system": GIS lakehouse consolidating shapefiles and connected systems, pre/post satellite comparison, hyperspectral contamination screening, vegetation and watershed impact, remediation prioritization, role dashboards and threshold alerts, on-site engineer, drone-gap roadmap | $55K first engagement (split $27.5K / $27.5K), scaling to $120–150K/yr; 99% confirmed as of Oct 19 | Direct resell of Klarety; Quatro adds sensors, security and broader data work. Follow-ons already in proposal for Guyana and Venezuela; Grantiera Energy (Canadian producer, environmental liability) pitched with the same reference |
| **Colombia disaster relief and smart-city path** | Vice-Minister, escalation to the presidency | Clarity proof of value for earthquake relief (debris, reconstruction, "dame los tres barrios más afectados"), El Niño flood prediction and infrastructure risk mapping; seeded smart-city roadmap (satellite + field verification, crowdsourced block surveys, cadaster GIS) | PoV below $50K for 2–3 cities, ≈ $50K per additional city | Nicolás Almeida as Colombia partner; three-tier channel partner → Quatro → Klarety; Panama authorities next (early November) |
| **PDVSA Refinería Oriente DCS replacement (FEED)** | PDVSA via a Venezuelan state telco as fronting company | Embed a live DataMiner/Quatro instance in the EPC-led engineering assessment so field data is captured online, not in a PDF; keep the orchestration platform contractually separate from the EPC; telemetry track: sensor-agnostic IoT, edge compute, EO change detection, methane, drone dispatch | Multi-million, multi-phase; Phase 1 shapes Phase 2 | Team joins as individual SMEs; "say Quatro only, xOps and Klarety are capabilities under Quatro" |
| **Champmar aquaculture security** | Shrimp producer, Gulf of Guayaquil estuary | Detect / Deter / Account / Disrupt program: night cameras and VMS feeding the Quatro picture, measured loss-reduction gates, Elementos baseline and monthly intelligence products | Year 1 $195–225K, Year 2+ $90–110K/yr, Elementos retainer | Quatro integrator prime, Elementos as affiliate intelligence layer |
| **Klarety channel agreement** | (partnership) | Formal channel partner: embed Klarety in Quatro proposals and resell standalone across regional contacts. Verticals in play: municipal tax-evasion detection via building change, waste-route optimization, cacao, shrimp, forestry | Flat-fee treatment for Klarety and xOps inside programs | Klarety's SkyFi and Vantor imagery relationships are strategic |
| **UCI (Gulf/MENA)** | White-label channel | Vertical operating systems packaged under UCI product names; port logistics, telecom, automotive aftermarket sample data; xOps environment PRD | Government cycles 2–3+ months | UCI as channel/SI or co-development partner |

**The pattern the site must reflect.**

1. **Buyers** are ministries, state enterprises, protected-area authorities, municipalities and regulated private operators (mining, remediation, aquaculture, oil and gas). The buyer is Spanish-speaking first; English is the review language.
2. **The offer** is one sovereign operational picture built from three layers Quatro integrates: (a) territorial monitoring from space (Klarety: EO change detection, source selection, tasking, natural-language analysis), (b) operational data from the plant, pipe and sensor network (xOps: SCADA, historian, GIS, digital twin, alarms, automation), and (c) Quatro's own layer: integration, IoT and OT communications, reasoning and operational agents, evidence and custody workflows, intelligence baseline (with Elementos where security is material), and in-country hosting and managed service.
3. **The commercial ladder** is proof of value (30–90 days, ≈ $50K) → annual platform or managed service ($100–250K) → program build in tranches (multi-million, open-book, consortium).
4. **Delivery** is partner-led: a local prime or commercial partner holds the contract and the relationship; Quatro integrates and operates. Sovereignty (hosting in-country, data ownership, AI governance annex) is a closing condition, not a feature.
5. **Geography** is the Andean and Caribbean Americas: Ecuador (HQ in Quito, with a US entity holding platform IP), Colombia, Venezuela, Panama, Guyana, Brazil leads. MENA/Africa is channel-only (UCI).

---

## 4. What the website says today

**Navigation (local copy).** Industries (Energy, National Security, Networks, Cities) · How We Work (The Intelligence Utility, Capabilities, xOps, Technology) · Company (About, Partners, Insights) · CTA "Talk to Our Team". The GitHub copy's nav is the May 18 variant (Smart Cities & Utilities, Oil & Gas / Energy, Maritime / Ports, Logistics / Supply Chain, National Security). Either way, the nav and the content collections disagree: nine industry files exist, four or five are linked.

**Homepage.** Hero "Making critical infrastructure intelligent" with six rotating captions: 18 agencies youth risk, coastal surveillance, <30 s ISR fusion (sovereign/air-gapped), legacy grid + DER, 1,000 km pipeline, "the 15–30 systems your bank already runs". Sections: industries row (energy, defense, networks, cities), structural problem, "Not a consultant. Not a platform. An integrator that hands you the keys", Connect / Model / Act, integration ecosystem naming **Skyline DataMiner, DataOS, Second Wind, SMARTS & TEKTELIC, AWS/Azure/GCP, SES/Intelsat/Telesat**, "Where we operate" (North America, Latin America, MENA & Africa, Global), four proof stories (18 agencies, national broadband 20,000 fewer dispatches, <30 s defense fusion, 1,069 km pipeline), FAQ, footer "US-headquartered".

**How it works (`/utility/*`).** `index`: the three-question utility framing with a retail example (purchase behaviour, inventory, deals) and three layers (real-time operational model, governed semantic layer, domain-trained reasoning). `technology`: the DataOS architecture story (semantic substrate, ontology and knowledge graph, ECR reasoning models, Second Wind governed execution, "seven questions every regulated enterprise needs answered", three telecom case studies). `xops`: "your data defines the application", five operational domains, powered by DataMiner. `what-you-get` and `how-it-starts`: governed data products, four delivery mechanisms, "it starts with a conversation".

**Industries (content collection, 9 + 1).** Energy, National Security ("health, safety & sustainability"), Networks (terrestrial + satellite), Smart Cities, Industrial, Transportation, Water & Environment, Broadcast & Media, Finance ("15–30 systems your bank operates, production-ready in 4–6 weeks"), plus a standalone Critical Infrastructure page. Spanish mirror has five of them.

**Solutions (23 SKUs) and use cases (15).** Detail pages are retired by a Netlify redirect (`/solutions/* → /solutions/`), so the SKUs render only as cards. The set includes teleport operations, space domain awareness, satellite fleet health, revenue assurance, credit risk, NPA early warning, claims classification and Customer 360. Use cases include Galápagos conservation and youth violence prevention (both from early 2026) alongside OEE optimization and NOC operations.

**Partners page.** "Deliver intelligence in your market": full stack for regional integrators, domain models for "energy, networks, defense, smart cities, finance, and maritime", active markets Mexico/Central America, East & West Africa, MENA, South America, South & Southeast Asia. "US-headquartered".

**Insights (60 posts, bilingual build).** On-message and current: satellite-first baselines, conservation intelligence, pipeline intelligence beyond SCADA, the consortium pattern, capital follows the loss, the tasking order is a disclosure, when the capability arrives through a partner. The cadence task keeps producing from the proposals (two posts a week, 60 as of Oct 19, the two newest drawn from Galápagos and PetroEcuador material).

**Repo state.** `BACKLOG.md` carries 19 tickets against `docs/REALIGNMENT_2026-06-08.md` (Sense → Unify → Act, Quatro Field page, demo slots); 18 are open, one closed. Copy decks for all of it exist in `docs/COPY_*`. None of it, nor the September insights, is on GitHub.

---

## 5. The gap, ranked

### Drift 1. The capability the buyer is buying has no page (highest priority)

Earth-observation and territorial monitoring is the entry point of every 2026 engagement (Galápagos, Fossato, Colombia, the ministry's corridor walk, PetroEcuador's EO baseline, Grantiera, Guyana, Venezuela remediation). It is the thing demoed in every meeting (Klarity GEO, Fury agents, Vantor tasking). The site has no capability page for it, no mention of Klarety (named in the Galápagos contract documents), no vocabulary for change detection, source selection, tasking, or plain-language geospatial query. The closest artifacts are insight posts and a stale `galapagos-conservation` use case about AIS vessel detection.

### Drift 2. The engagement model is invisible

Every proposal is structured PoV → annual → program, with sovereignty and in-country hosting as closing conditions. The site's "How it starts" says "it starts with a conversation, not a contract" and never names a proof of value, a price band, a timeline, a managed service, hosting options in-country, or the confidentiality and AI-sovereignty annex that just unblocked Galápagos. The April decision retired "Connect → Prove → Expand" at Tier 1 because it was mechanism-first; the engagements since then show the buyer wants exactly that ladder, stated as outcomes and gates.

### Drift 3. Industries and solutions describe a different company

Finance, Broadcast & Media, Networks (satellite + terrestrial), teleport operations, space domain awareness, satellite fleet health, revenue assurance, credit risk, NPA, claims, Customer 360: none of these appears in any Quatro pursuit this year, and most are DataOS stories. Meanwhile mining and remediation, conservation and protected areas, disaster response, municipal cadaster and tax, aquaculture and agriculture, and refinery control-system engineering have no home. The June audit already found that the site "sells breadth without proof"; the breadth has since become actively misleading about who Quatro serves.

### Drift 4. The architecture story on the site is DataOS's, and DataOS is no longer a Quatro partner

`technology.astro` and the homepage ecosystem band present DataOS as the semantic substrate, ECR as the reasoning models, Second Wind as governed execution, and SES/Intelsat/Telesat as connectivity partners. Project memory records (June 2026) that DataOS is not a valid Quatro partner and must not be referenced in Quatro content; the satellite operators are Modern relationships. The reasoning layer Quatro actually ships is the xOps module plus Klarety's knowledge graph and agents (and QuatroOS on Fluree as the roadmap). This is a tiered-transparency breach in the wrong direction: Tier-3 partner names for partners we do not use, and silence on the two we do.

### Drift 5. Proof is hypothetical where real reference work exists

The homepage proof stories (18 agencies, <30 s ISR fusion, a bank's 15–30 systems) are scenarios, and the one that is real (national broadband, 20,000 fewer dispatches) is a DataMiner telecom reference presented as Quatro's. The real, showable work is the corridor EO demonstration (14 disturbance-suspected cells near Lago Agrio, a 7.09 dB backscatter drop on a flagged cell, a crude-theft network mapped end to end on a 154 km corridor), the Galápagos El Niño multi-system assessment (+3.86 °C SST anomaly, August 2026), pre/post landslide comparison for mining remediation, and the GridOps story lane. Under the no-named-early-engagements rule these must be abstracted, but they can be shown.

### Drift 6. Geography and identity

"US-headquartered" appears twice (homepage close, partners close). The September correction records Quito as HQ for LATAM-facing content, with the US entity as platform licensor. Partners page lists Africa and Southeast Asia as active markets; the active markets are Ecuador, Colombia, Venezuela, Panama and Guyana, with MENA via UCI. Spanish is the buyer's language and the ES mirror covers half the industries and a third of the solutions.

### Drift 7. Unsourced metrics (carried from June, still open)

"75% fewer false alarms", "0.5% of nominal flow", "sub-30-second response", "60% faster restoration", "14% fuel", "22% on-time", "reduces unplanned downtime by up to 60%" remain on solution cards. Nothing in the 2026 proposals supports them; the proposals use declared vendor performance and 30/60/90-day measured gates instead.

### Drift 8. The June 8 spec points at the wrong anchor

Its "Act" beat is the Quatro Field demo app, which no 2026 buyer has been shown; its "Unify" beat is correct (xOps); it has no "Sense from orbit" beat at all. Its good parts (solutions retier, metrics sourcing, Elementos routing, rename `/utility` → How it works, honest demo slots, voice gate) carry forward in §9.

---

## 6. The realigned story

The locked positioning holds: Quatro is an integrator, human-in-the-loop by design, the client owns the intelligence from day one, delivered through partners who know the market. What changes is the object of the integration and the proof.

**Hero (direction, jonathan-voice):** "Making critical infrastructure intelligent" stays. Sub: *One operational picture of your territory and your operations, from satellite to SCADA to the field, run in your country and owned by you from day one.* Promise line: **See the territory. Run the operation. Own the intelligence.**

**The three layers, stated as Quatro capabilities (Tier 1), with substrates named at Tier 1.5 and below:**

| Layer | What the buyer gets | Substrate (Tier 1.5+) | Proof it exists |
|---|---|---|---|
| **Territorial intelligence from space** | Continuous monitoring of corridors, reserves, mine sites and cities; change detection on open satellite data, high-resolution and radar only on confirmed change, tasking from inside the picture; plain-language questions with cited answers; alerts by webhook | Klarety (Klarity GEO: GeoLakehouse, knowledge graph, Fury agents, Vantor/SkyFi tasking) | Galápagos, Fossato, Colombia, corridor demo |
| **Operational intelligence from the plant and the network** | SCADA, historian, GIS, detection systems, video and sensors in one live model; digital twin, alarming, automation, command center; 8,000+ integrations, proven across 1,000+ operators | Skyline DataMiner xOps | PetroEcuador, PDVSA, ministry, GridOps story lane |
| **Quatro's layer: integrate, sense, reason, operate** | IoT and edge suite with OT communications (satellite, L-band, LoRaWAN); the orchestration and reasoning module that correlates domains; operational agents (triage, evidence assembly, right-of-way alert triage, field dispatch); chain-of-custody evidence; intelligence and risk baseline (heat map, sensor placement; Elementos for threat networks); in-country hosting, managed service, forward-deployed engineer, Spanish training | Quatro Ecuador + Quatro US (platform IP); QuatroOS on Fluree as the reasoning roadmap (Tier 3 only) | PetroEcuador Tranche 1 scope, Champmar, Galápagos engineer + annex |

**Naming rules for the site.** Name DataMiner and Klarety from the "How it works" level down (both are already named in customer contracts; Tier 1.5 permits ecosystem partners with plain-language descriptions). Keep hardware abstract ("Quatro IoT & Edge Suite"). Remove DataOS, ECR, Second Wind and the satellite operators from Quatro pages. Elementos appears once, as the affiliate for intelligence-led scopes. QuatroOS and Quatro Field do not appear on marketing pages until a buyer has seen them; the architecture deep-dive may mention the reasoning roadmap.

**Engagement model, stated plainly.** Proof of value: 30 to 90 days on your highest-risk area, satellite baseline first because it needs no field hardware, measured against indicators you agree in advance, a year of platform access retained. Then an annual platform or managed service. Then, for national programs, a tranche build through a consortium with a local prime. Sovereignty by design: hosted in-country or on your infrastructure, data and derived products owned by you, AI governance written into the contract annex.

**Identity.** Headquartered in Quito, with a US entity; delivery across the Andean and Caribbean Americas through local partners; Spanish-first.

---

## 7. Proposed information architecture

```
Home
├─ Capabilities  (what you get)
│   ├─ Territorial monitoring from space        NEW  (EO, change detection, tasking, NL query)
│   ├─ Operational intelligence (xOps)          REWRITE of /utility/xops
│   ├─ IoT, edge and OT communications          NEW  (from COPY_HARDWARE deck, re-aimed)
│   ├─ Reasoning, agents and evidence            NEW  (the Quatro module: correlation, agents, custody)
│   ├─ Intelligence and risk baseline            NEW, short; routes to Elementos
│   └─ Managed service and sovereign hosting     NEW
├─ Industries
│   ├─ Energy and pipelines                      REWRITE (theft, leaks, corridors, refineries, grid)
│   ├─ Environment and protected areas           NEW  (conservation, marine reserves, climate/El Niño)
│   ├─ Mining and remediation                    NEW  (illegal mining, contamination, landslides, liability)
│   ├─ Cities and public services                REWRITE of Cities (disaster response, cadaster, waste, water)
│   ├─ Security and critical infrastructure      MERGE Defense + Critical Infrastructure
│   └─ Agriculture and aquaculture               NEW, light (shrimp, cacao, forestry) or "emerging"
├─ How it works
│   ├─ The operational picture (three layers)    REWRITE of /utility + /utility/technology
│   ├─ How an engagement runs (PoV → annual → program)   REWRITE of /utility/how-it-starts
│   ├─ Sovereignty, hosting and governance       NEW  (from the Galápagos annex, generalized)
│   └─ Architecture (technical evaluators)       MOVE Tier-3 depth here; strip DataOS/ECR/Second Wind
├─ Proof
│   ├─ Reference work (abstracted)               NEW  (corridor EO, El Niño assessment, landslide pre/post, GridOps)
│   ├─ Insights                                  KEEP, wire into industry and capability pages
│   └─ Reference programs (partner-delivered, labeled)   NEW, careful
├─ Partners                                       REWRITE (LatAm markets, three-tier channel, Klarety + DataMiner)
└─ Company  (About, Leadership, Contact)          About: Quito HQ + US entity, Elementos, ventures line
```

**Page-by-page actions**

| Page / asset | Action | Why |
|---|---|---|
| `index.astro` hero captions | Rewrite six captions to the 2026 work (corridor, reserve, mine, city after an earthquake, grid, refinery) | Drift 5, 6 |
| Homepage "Integration ecosystem" band | Replace with DataMiner, Klarety, Quatro IoT & Edge Suite, cloud/on-prem; drop DataOS, Second Wind, SMARTS/TEKTELIC names, SES/Intelsat/Telesat | Drift 4 |
| Homepage proof stories | Replace with four abstracted reference pieces (§6) and the xOps scale band | Drift 5 |
| Homepage "Where we operate" | Quito HQ, Ecuador / Colombia / Venezuela / Panama / Guyana active, MENA via partner | Drift 6 |
| `utility/index.astro` | Rewrite as "The operational picture": three layers; drop the retail purchase-behaviour example | Drift 1, 4 |
| `utility/technology.astro` | Split: Tier 1.5 page (three layers, human-in-the-loop, ownership) + `/how-it-works/architecture` for depth; remove DataOS, ECR, Second Wind, "seven questions", telecom case studies | Drift 4 |
| `utility/xops.astro` | Sharpen per `COPY_UNIFY_XOPS` deck; foreground the scale band; add hand-off to the territorial layer and to the Quatro module | carries from June |
| `utility/what-you-get.astro` | Fold into Capabilities index; retire "governed data product" vocabulary | Drift 4 |
| `utility/how-it-starts.astro` | Rewrite as the engagement ladder with gates, price bands optional, sovereignty line | Drift 2 |
| Industries: `finance.md`, `broadcast-media.md`, `networks.md` | Retire (keep files `.retired`, 301 to Industries index or to the DataOS site) | Drift 3 |
| Industries: `industrial.md`, `transportation.md`, `water-environment.md` | Fold: industrial → Energy and Mining; transportation (ports, fleet) → Cities or an xOps-proven note; water → Cities and Environment | Drift 3 |
| Industries: `defense.md` + `critical-infrastructure.astro` | Merge into Security and critical infrastructure; keep the sovereign-ownership language, drop "air-gapped ISR fusion in 30 s" | Drift 3, 5 |
| Industries: `energy.md`, `cities.md` | Rewrite to the corridor / refinery / grid and disaster-response / cadaster / waste stories; add proof badge and authority line | Drift 1, 3 |
| New industries: Environment & protected areas; Mining & remediation; Agriculture & aquaculture | Write from Galápagos, Fossato, Champmar and Klarety-channel material (abstracted) | Drift 3 |
| Solutions collection (23) | Collapse to the six capabilities above; move teleport, SDA, satellite fleet-health, revenue assurance, credit risk, NPA, claims, Customer 360 out (DataOS); keep pipeline integrity, physical security, environmental compliance, grid, water, port, fleet as examples under the relevant industry | Drift 3, 7 |
| Use cases (15) | Keep galapagos-conservation, pipeline-integrity, mining-operations, maritime-awareness, environmental-compliance-energy, grid-operations (rewritten); retire or demote the rest | Drift 3 |
| Solution and use-case metrics | Source, relabel "declared vendor performance / target", or cut | Drift 7 |
| `partners.astro` | Rewrite: three-tier channel (local partner → Quatro → platform partners), LatAm active markets, flat-fee treatment for platform partners, what Quatro brings (sensing, security, data, in-country operation) | Drift 6 |
| `company/about.astro` | Quito HQ + US entity, Elementos as affiliate, one line on ventures (Sphera, Occupy) | Drift 6 |
| Spanish mirror | Treat ES as first-class for every new or rewritten page; backfill the five missing industries and the capabilities | Drift 6 |
| Footer | "Headquartered in Quito · US entity · Sovereign deployment"; link Capabilities, Industries, How it works, Proof | Drift 6 |
| `netlify.toml`, `astro.config.mjs` | Add 301s for retired industries and solutions; keep `/utility/*` aliases | hygiene |
| Repo | Commit local docs and September insights to GitHub; retire `REALIGNMENT_2026-06-08.md` with a pointer to the new spec; reset `BACKLOG.md` | Drift 8 |

---

## 8. Remediation backlog (ticket-ready)

Spec for every ticket: this document, §6 and §7. Verify gate stays as `BACKLOG.md` defines it (`npm run build` green, voice gate pass, "needs human eyes"). Sizes S/M/L.

**P0, decisions and substrate**

- `DEC-1` (S) Confirm the live domain and deploy source; push local `docs/` and September insights to GitHub. Blocked by nothing.
- `DEC-2` (S) Record naming rules: DataMiner and Klarety named from How-it-works down; DataOS, ECR, Second Wind, satellite operators removed; hardware abstract; Elementos once. Update `.claude/skills/quatro-cascade` partner table accordingly.
- `SPEC-1` (M) Write `docs/REALIGNMENT_2026-10-20.md` from this audit; mark the June spec superseded; rebuild `BACKLOG.md`.
- `CAP-SCHEMA-1` (S) Add a `capabilities` content collection (six entries) with `substrate`, `tier`, `proof` fields; add `status: active | emerging | retired` to industries.

**P1, the capability layer (Drift 1, 2, 4)**

- `CAP-1` (M) Territorial monitoring from space page (EN + ES). Copy from the ministry Card 4 walk and the Galápagos spec §6, abstracted.
- `CAP-2` (M) Operational intelligence (xOps) page: apply `COPY_UNIFY_XOPS_2026-06-08.md`, add hand-offs.
- `CAP-3` (S) IoT, edge and OT communications page: apply `COPY_HARDWARE_2026-06-08.md`, add satellite/L-band/LoRaWAN comms from PetroEcuador Workstream C.
- `CAP-4` (M) Reasoning, agents and evidence page: correlation of eight-plus variables, four operational agents, chain-of-custody, human-in-the-loop, Tier-3 link to architecture.
- `CAP-5` (S) Intelligence and risk baseline page with Elementos routing CTA (carries `EXP-2`).
- `CAP-6` (S) Managed service and sovereign hosting page: in-country operation, hypercare, service levels, hosting options, the annex.
- `HIW-1` (M) Rewrite `/utility/index` as "The operational picture" (three layers).
- `HIW-2` (L) Split `technology.astro` into the Tier 1.5 page and `/how-it-works/architecture`; strip DataOS/ECR/Second Wind.
- `HIW-3` (M) Rewrite `/utility/how-it-starts` as the engagement ladder (PoV → annual → program) with the sovereignty line.
- `HIW-4` (S) Sovereignty, hosting and governance page generalized from the Galápagos annex.
- `NAV-1` (S) New top nav (Capabilities · Industries · How it works · Proof · Partners · Company); aliases for `/utility/*`.

**P2, industries and solutions (Drift 3, 7)**

- `IND-1` (M) Energy and pipelines rewrite (corridor theft and leaks, refineries, grid).
- `IND-2` (M) Environment and protected areas (new).
- `IND-3` (M) Mining and remediation (new).
- `IND-4` (M) Cities and public services rewrite (disaster response, cadaster, waste, water).
- `IND-5` (M) Security and critical infrastructure merge.
- `IND-6` (S) Agriculture and aquaculture (new, "emerging" status).
- `IND-7` (S) Retire Finance, Broadcast & Media, Networks; fold Industrial, Transportation, Water & Environment; 301s.
- `SOLN-1` (M) Collapse the 23 SKUs: six capabilities + per-industry examples; move DataOS-native SKUs out.
- `SOLN-2` (S) Metrics: source, relabel or cut (carries June `SOLN-3`).
- `UC-1` (S) Use cases: keep and rewrite six, retire the rest.

**P3, proof, home, partners, company (Drift 5, 6)**

- `PROOF-1` (M) Reference work section: four abstracted pieces (corridor EO, El Niño assessment, landslide pre/post, GridOps picture) with real screenshots white-labeled; honest placeholder where no asset.
- `PROOF-2` (S) Reference programs page, labeled "partner-delivered reference programs", using only DataMiner public references with Skyline's written OK.
- `HOME-1` (M) Hero captions, promise line, three-layer band, ecosystem band, proof stories, where-we-operate, footer.
- `PART-1` (M) Partners rewrite (three-tier channel, LatAm markets).
- `ABOUT-1` (S) About: Quito HQ, US entity, Elementos, ventures line.
- `ES-1` (L) Spanish parity for every page touched above; Spanish-first for new industries.
- `INS-1` (S) Wire insights into capability and industry pages by tag; update the blog-cadence task's category map to the new industries.

---

## 9. What carries forward from the June 8 spec, and what is retired

**Keep:** the invariants (never render invented state; mission verbatim; buyer is the hero; visual system fixed), `VOICE_GATE.md`, `TICKET_PROTOCOL.md`, `DECISION_AUTHORITIES.md`, the honest demo-slot component idea (as `PROOF-1` placeholders), the solutions retier and metrics sourcing, the Elementos routing, the `/utility` → How it works rename, the xOps and hardware copy decks (re-aimed), and `SPINE-1`'s band component if it can carry three layers instead of three beats.

**Retire:** Sense → Unify → Act as the narrative spine; the Quatro Field page and Act demo; "keep all nine industries"; the DataOS-flavored "four-layer stack" labels on marketing pages (Data / Reasoning / Agents / Workflows stays as Tier-3 architecture vocabulary only); `COPY_QUATRO_FIELD_2026-06-08.md` and `COPY_HOMEPAGE_2026-06-08.md` (promise line and spine band copy).

---

## 10. Open decisions for Jonathan

1. **Name Klarety on the site?** The Galápagos contract names it; the PDVSA brief says "Quatro only". Recommendation: name DataMiner and Klarety from How-it-works down, keep Tier 1 generic ("territorial monitoring from space"). Decide before `CAP-1`.
2. **Headquarters line.** "Quito, with a US entity" everywhere, or US-first for North American readers? Recommendation: Quito everywhere on the Quatro site; the US entity is a licensing fact, not a marketing one.
3. **Where DataOS-native SKUs go.** Delete, or 301 to the Modern site? Recommendation: 301 to Modern's solution pages where they exist, otherwise delete.
4. **Agriculture and aquaculture.** Publish as an industry now (Champmar, Klarety channel verticals) or hold until a signed engagement? Recommendation: publish as "emerging" with no proof claims.
5. **Price bands on the engagement page.** State "proof of value typically under $60K" or keep ranges off the site? Recommendation: state the timeline and the gates, not the number.
6. **Reference screenshots.** White-labeled Klarity GEO and GridOps captures are usable only with partner consent; confirm with Mike and Skyline before `PROOF-1`.
7. **The live domain.** `quatro.io` is parked; confirm `quatro.lat` and the Netlify source before any of this ships.

---

## Sources

Memory (Quatro project): `project_integrator_positioning`, `project_petroecuador_rfi_structure`, `project_petroecuador_klarety`, `project_galapagos`, `project_mae_ministry_briefing`, `project_champmar_security`, `project_channel_partner_model`, `project_quatro_field_vs_xops_layers`, `project_elementos_role`, `feedback_dataos_not_quatro_partner`, `feedback_iot_language`, `feedback_intelligence_utility_framing`, `areas/pdvsa-dcs-feed`, `reference_quatro_blog_pipeline`, `user_role`.

Files: `LMIQuatro/PetroEcuador-Proposal-2026-10/PetroEcuador-Formal-Proposal-v2.0-EN.md`; `LMIQuatro/Galapagos/Especificaciones_Tecnicas_Galapagos_Control_Vigilancia.md`; `LMIQuatro/Galapagos/Galapagos-Foundation-Proposal-v2-EN.md`; `LMIQuatro/Ministerio-Ambiente-Energia-2026-08/Gamma-Deck-5-Cards-Ministerio-EN.md` and `Ministerio-5-Slide-Executive-Overview-Outline-2026-09-10.md`; `LMIQuatro/Champmar/Champmar-Security-Program-Scoped-Solution.md`; `LMIQuatro/Quatro-Website-Drift-Audit-2026-06-08.md`; `LMIQuatro/Quatro-Unified-Story-and-IA-Blueprint-2026-06-08.md`; `LMIQuatro/QuatroWebsite/` (`BACKLOG.md`, `CLAUDE.md`, `docs/REALIGNMENT_2026-06-08.md`, `src/lib/navigation.ts`, `src/pages/**`, `src/content/**`, `astro.config.mjs`, `netlify.toml`); GitHub `jonloone/QuatroWebsite` at commit of 2026-05-20.

Meetings (Granola): [Galápagos unified data platform, Oct 19](https://notes.granola.ai/d/6b9b570a-1457-4e71-901f-4ba8301ef1c9) · [Sphaera, Grantiera, Galápagos prep with Esteban, Oct 19](https://notes.granola.ai/d/abe386c0-487f-4bb6-89b2-a33ed274f13e) · [Fossato rescope and Colombia pricing, Oct 6](https://notes.granola.ai/d/300da940-0855-4e3d-ab4d-a38a51ca42a0) · [Clarity presentation and Colombia smart-city roadmap, Oct 1](https://notes.granola.ai/d/f74abe13-0dd5-4db2-aea0-650c7c2075f0) · [PetroEcuador demo and sales strategy with DataMiner, Sep 30](https://notes.granola.ai/d/4a5b735e-b7cb-48a7-901a-d79d8ca226a5) · [Venezuela refinery control system overhaul, Sep 28](https://notes.granola.ai/d/880ddc2b-3942-4078-874b-92d8a6aa6e60) · [Fossato, PetroEcuador drones, Venezuela with Esteban, Sep 28](https://notes.granola.ai/d/4aaaa800-a1eb-42de-8e3b-f9560d83f67c) · [Ecuador pipeline security with Esteban and Jorge, Sep 18](https://notes.granola.ai/d/25e35151-e2c1-40ba-abfc-4aaff55c0068) · [Geospatial monitoring for mining remediation, Jul 31](https://notes.granola.ai/d/6425137f-19b6-447d-b6dc-986febf04fb8) · [Klarety channel opportunities, Jul 27](https://notes.granola.ai/d/2753001b-2dbc-49ff-af34-c0a3c206a216) · [PetroEcuador pipeline security with Carlos, Sep 9](https://notes.granola.ai/d/cfc81796-ccb4-4290-b57f-3d61714713ab) · [SPHERA platform with Juan, Aug 21](https://notes.granola.ai/d/5bc26af0-7123-4e80-85bb-97d37cd2ff3a) · [XDC partnership and payment networks, Aug 11](https://notes.granola.ai/d/b190c1aa-e7fb-4718-b875-0521684a3ebb)
