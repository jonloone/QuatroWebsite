# Realignment 2026-11-02 — Cull and refocus: what Quatro sells today

Supersedes `docs/REALIGNMENT_2026-10-20.md` §3 (navigation), §5 (capabilities) and §7 (industries) where they conflict; §0 invariants, §1 naming rules and `docs/VOICE_GATE.md` still apply. Companion: `docs/REALIGNMENT_2026-11-02_ENERGY_BLOCKS.md` (energy blocks page, P6). Tickets: `BACKLOG.md` P7.

## §A Audit (as of 2026-11-02, working tree)

**What the site says Quatro sells:** six capabilities (Klarety, operational model, IoT/edge/OT, reasoning and agents, risk baseline, managed service), six industries (Energy, Environment, Mining, Security, Cities, Agriculture), four How-it-works pages (picture, engagement, sovereignty, architecture), Proof, Partners, Company (About, Leadership, Careers, News), Contact (index, demo, sales, support), plus legacy `/resources/*` (case studies, documentation, white papers, insights alias), 23 solutions (8 tagged moved-to-dataos), 6 use cases, 60 insights tagged to retired industries (industrial 12, networks 4, finance 4, transportation 3, defense 3).

**What Quatro sells (Jonathan, 2026-11-02):** DataMiner xOps (operational model, delivered as reseller and integrator), Quatro Klarety (geospatial), DataOS (ontology and agent work), and now energy blocks (P6), into the industries with traction: Energy and hydrocarbons (ministry, PetroEcuador, PDVSA), Mining and remediation (Fossato), Environment, forestry and protected areas (Cotopaxi, Galápagos), Security and critical infrastructure (Champmar).

**Gap:** three capability pages describe layers Quatro does not sell as products (reasoning/agents as a Quatro-built layer, risk baseline as a standalone service, IoT hardware as a line), two industries have no engagement behind them (Cities, Agriculture), How it works is four pages where one would do, and the nav carries 21 dropdown items. Decision of record from 2026-06 (DataOS not a Quatro partner) is superseded: DataOS returns as the ontology-and-agents capability.

## §B Target information architecture (nav: 4 + 4 + 1 + 1 + 1 = 11 items)

| Nav | Items | Notes |
|---|---|---|
| **Capabilities** | DataMiner xOps — The operational model · Quatro Klarety — Territorial monitoring from space · DataOS — Ontology and agents · Energy blocks — Firm power in 90 to 120 days | Four pages, one `CapabilityLayout`. Index shows four. |
| **Industries** | Energy and hydrocarbons · Mining and remediation · Environment, forestry and protected areas · Security and critical infrastructure | Four pages. Index shows four. |
| **How it works** | single page (no dropdown) | Sections: the operational picture (from §6A), how an engagement runs (ladder, from §6B), sovereignty, hosting and managed service (from §6C + capability 5F). Architecture page retired (301). |
| **Proof** | Reference work · Insights | Unchanged. |
| **Company** | About (absorbs Leadership and Partners summary) · Partners · Contact | Careers and News retired (301 to About). |

Footer mirrors the nav; "Talk to our team" stays the single CTA.

## §C Capability pages (four)

- **C1 DataMiner xOps — The operational model.** Existing page, retitled with the product named in the H1 eyebrow ("Powered by DataMiner" already allowed, §1). Absorbs one paragraph each from the retired pages: field sensing and OT communications (from IoT/edge, as "what connects"), and multivariable correlation and alarm triage (from Reasoning, as "what the model does with the signal"). Quatro's role stated once: reseller and integrator, in-country operation.
- **C2 Quatro Klarety.** Unchanged in substance; proof card gains the Cotopaxi and Fossato patterns as abstracted references when SPEC-COPY allows (no client names, §0).
- **C3 DataOS — Ontology and agents.** New page replacing `reasoning-and-evidence`. Scope: the governed ontology of the operation (assets, rules, regulators), agents that propose against it (triage, evidence assembly, dispatch proposal), every step recorded, operators decide. Tier 1.5 substrate line names DataOS. The June 2026 solution SKUs tagged `moved-to-dataos` stay retired; this page is the capability, not a catalog.
- **C4 Energy blocks.** Per `REALIGNMENT_2026-11-02_ENERGY_BLOCKS.md`.

Retired as pages, with 301s: `/capabilities/iot-edge` → C1; `/capabilities/reasoning-and-evidence` → C3; `/capabilities/risk-baseline` → `/how-it-works#engagement` (the baseline is the first rung of the ladder, not a product); `/capabilities/managed-service` → `/how-it-works#sovereignty`. Content files move to `.retired`.

## §D Industries (four)

Keep Energy, Mining, Security as they stand; rename Environment to "Environment, forestry and protected areas" and add one forestry capability card (forest estate monitoring, fire and encroachment, harvest and road change) drawn from the Cotopaxi deck. Retire Cities and Agriculture: `cities.md` → 301 to Security (disaster response moves there as one card), `agriculture.md` → 301 to Environment (aquaculture perimeter moves there as one card). Each kept page caps at five capability cards and three challenges; remove the rest.

## §E How it works (one page)

Merge `index`, `engagement`, `sovereignty` into `/how-it-works` with anchors `#picture`, `#engagement`, `#sovereignty`; keep the three-layer band once. Retire `architecture.astro` with a 301 to `#picture` (Tier 3 depth moves to a PDF on request; no public architecture page). Managed service content (in-country operation, hypercare, service levels, hosting options, AI annex) lands under `#sovereignty` as a short table.

## §F Legacy and long tail

- `/resources/*`: 301 `case-studies` → `/proof`, `documentation` and `white-papers` → `/insights`, `resources/insights` → `/insights`; delete the four pages and the `case-studies` collections (3 EN, 3 ES; fold any usable abstracted line into `/proof`).
- Solutions: `.retired` all 23 and the 7 ES; `/solutions` already 301s to `/capabilities`. Use cases: `.retired` the six remaining; `/industries/[industry]/[slug]` route removed.
- Insights: retag to the four industries; posts tagged industrial/networks/finance/transportation/defense get `industry: archive` and stay reachable by URL but leave the category pages. Testimonials collection deleted (unverifiable).
- Company: `careers.astro`, `news.astro` → 301 `/company/about`; `leadership.astro` folded into About as a section.
- Contact: keep `index` and `demo`; `sales` and `support` → 301 `/contact`.
- Dev pages (`/dev/*`) excluded from build.

## §G Homepage

Hero and mission verbatim (§0). Below the hero: four capability cards (C1–C4), four industry cards, the three-layer band, one proof card, CTA. Remove any section that names a retired capability or industry. Page target: six sections.

## §H Copy rules for this cull

Each new or rewritten page gets a copy deck section in `docs/COPY_CULL_2026-11.md` (EN + ES) before its build ticket. Voice gate applies; "platform" stays banned even when describing DataOS and xOps (use "operational model", "data and AI layer"). DataOS and DataMiner are named at Tier 1.5 in substrate lines and the capability eyebrows only; everything else is Quatro's. The June 2026 DataOS decision is recorded as superseded in `docs/DECISION_AUTHORITIES.md`.

## §I Verify

`npm run build` green; `astro check` zero new vs baseline; `/capabilities` and `/industries` indexes show four each; nav has 11 dropdown items EN and ES; every retired path returns a 301 (list in §C–§F) and the LINK-1 crawl shows zero new internal 404s; VOICE_GATE A grep zero on changed files; sitemap excludes `.retired` and `/dev`.
