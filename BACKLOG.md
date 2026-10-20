# BACKLOG — active ticket ledger

The single working queue. Read top to bottom; the **first `[ ]` whose `blockedBy`
are all `[x]`** is the next ticket. Protocol: **`docs/TICKET_PROTOCOL.md`**.
Spec for every ticket: **`docs/REALIGNMENT_2026-10-20.md`** (supersedes the 2026-06-08
spec; the old ledger is archived at `docs/BACKLOG_2026-06-08_retired.md`). Run `/next-ticket`.

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked · size `S`/`M`/`L`.
Verify gate for this repo: ticket `verify:` + `npm run build` green (+ `npx astro check`
where types matter). No lint/test harness; visual/copy tickets name a manual check and
report "needs human eyes." **Any ticket that adds or changes customer-facing copy must
also pass `docs/VOICE_GATE.md` and report "voice gate: pass" — this is part of done.**
**Any ticket that touches a page must ship or open the matching `ES-*` ticket (§0.6).**

### Copy decks (paste finished copy from these; don't free-write)

| Ticket(s) | Copy deck |
|---|---|
| NRG-1, NRG-2, NRG-3, ES-ENERGY-1 | `docs/COPY_ENERGY_2026-10-20.md` |
| CAP-2 | `docs/COPY_UNIFY_XOPS_2026-06-08.md` (title "The operational model"; add §5B hand-offs) |
| CAP-3 | `docs/COPY_HARDWARE_2026-06-08.md` (add OT communications per §5C) |
| CAP-1, CAP-4, CAP-5, CAP-6, HIW-*, HOME-*, IND-*, PART-1 | copy deck to be written in `SPEC-COPY-*` tickets before the build ticket starts |

### Image prompt files

| Ticket | CSV |
|---|---|
| NRG-IMG-1 | `image-prompts/energy-ministry-2026-10.csv` |

---

## P0 — Decisions and substrate (this week)

- [ ] `DEC-1` (S) — Confirm live domain + Netlify source; push local `docs/`, September insights and this ledger to GitHub `main` — blockedBy: — — spec: REALIGNMENT_2026-10-20 §13.7, §15 — verify: `git log origin/main -1` shows this commit; needs human eyes: Netlify deploy log points at the right branch
- [ ] `DEC-2` (S) — Record decisions in `docs/DECISION_AUTHORITIES.md`: §1b RESOLVED 2026-10-20 ("Quatro Klarety" is the geospatial capability name); still open: §13.2 corridor figures on the web page, §13.3 price bands in `docs/DECISION_AUTHORITIES.md` as DECISION-NEEDED or resolved — blockedBy: — — spec: §1, §13 — verify: file updated; needs human eyes: Jonathan has answered or the escalation is logged
- [ ] `SCHEMA-1` (S) — Industries schema: add `status`, `proofBadge`, `authorityLine`, `proofCards[]`, rename `platformMapping` keys to `see/correlate/act` (keep old keys readable) — blockedBy: — — spec: §7 — verify: `npx astro check` green + `npm run build` green
- [ ] `SCHEMA-2` (S) — Add `capabilities` content collection (six entries, `layer`, `substrate`, `proof`) and `status`/`capability`/`industry` fields on solutions — blockedBy: — — spec: §5, §8 — verify: `npx astro check` green + `npm run build` green

## P1 — Sprint 0: Energy for the Ministerio de Ambiente y Energía

- [ ] `NRG-1` (M) — Rewrite `src/content/industries/energy.md` from `docs/COPY_ENERGY_2026-10-20.md`: hero, stats, four challenges, five capabilities, authority line, see/correlate/act, proof row, engagement paragraph, CTA. Strip NERC/PHMSA/EPA/DER/SunSpec/storm copy — blockedBy: SCHEMA-1 — spec: §4 — verify: `npm run build` green; grep zero for `NERC|PHMSA|EPA|SunSpec|OCPP|DER|platform|digital twin`; voice gate pass; needs human eyes: reads as one portfolio
- [ ] `NRG-IMG-1` (S) — Ten Energy images already generated and reviewed (2026-10-20) and placed in `public/images/` (see `image-prompts/energy-ministry-2026-10.csv`); this ticket wires the paths in `energy.md` (done inside NRG-1 if sequenced together) and removes the five US-utility images from the page — blockedBy: NRG-1 — spec: §12 — verify: all ten files referenced and render; needs human eyes: hero headline zone clear
- [ ] `NRG-2` (S) — Industry template: render `proofBadge`, `authorityLine`, `proofCards` (honest placeholder when `asset` null), the engagement paragraph, and the three-layer band with per-industry captions — blockedBy: SCHEMA-1 — spec: §4, §7 — verify: `npm run build` green; needs human eyes: placeholder, not fabricated visual, where no asset
- [ ] `NRG-3` (S) — Energy proof cards: corridor demonstration (figures gated on DEC-2) and reservoir / El Niño assessment pattern; link to `/proof` — blockedBy: NRG-2, DEC-2 — spec: §4.7, §9A — verify: `npm run build` green; voice gate pass; needs human eyes: no client named
- [ ] `ES-ENERGY-1` (M) — Spanish `industries-es/energy.md` from the ES half of the copy deck, same structure, Spanish-first phrasing (not a translation of the English idiom) — blockedBy: NRG-1 — spec: §0.6, §4 — verify: `npm run build` green; voice gate pass (ES bans mirrored); needs human eyes: Esteban reads it
- [ ] `NRG-4` (S) — Insights wiring: pin three energy posts to the Energy page by tag (dry season, corridor, losses); update the blog-cadence category map — blockedBy: NRG-1 — spec: §9C — verify: `npm run build` green; needs human eyes: three relevant posts show
- [ ] `NRG-5` (S) — Redirects for the retired/folded industries and `/solutions` so links from the ministry deck resolve; sitemap regenerates — blockedBy: NRG-1 — spec: §3 — verify: `npm run build` green; `curl -I` on each old path returns 301 in preview

## P2 — Capabilities (the layer the buyer is buying)

- [ ] `SPEC-COPY-1` (M) — Copy deck `docs/COPY_CAPABILITIES_2026-10.md` for CAP-1, CAP-4, CAP-5, CAP-6 (EN + ES) — blockedBy: DEC-2 — spec: §5 — verify: voice gate pass on the deck; needs human eyes: Jonathan approves substrate naming
- [ ] `CAP-0` (M) — Build `CapabilityLayout` (hero, what you get, how it shows up, substrate line, proof card/placeholder, hand-off, engagement paragraph, CTA) + `/capabilities` index with the three-layer band — blockedBy: SCHEMA-2 — spec: §5 — verify: `npm run build` green; needs human eyes: index reads as three layers, six pages
- [ ] `CAP-1` (M) — Quatro Klarety page (territorial monitoring from space) at `/capabilities/quatro-klarety` — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5A, §1b — verify: `npm run build` green; voice gate pass; H1 reads "Quatro Klarety"
- [ ] `CAP-2` (M) — Operational intelligence (xOps) page from the June deck; move `/utility/xops` with 301 — blockedBy: CAP-0 — spec: §5B — verify: `npm run build` green; voice gate pass; zero `platform`/`digital twin`
- [ ] `CAP-3` (S) — IoT, edge and OT communications page — blockedBy: CAP-0 — spec: §5C — verify: `npm run build` green; voice gate pass; no vendor names
- [ ] `CAP-4` (M) — Reasoning, agents and evidence page — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5D — verify: `npm run build` green; voice gate pass; human-in-the-loop stated
- [ ] `CAP-5` (S) — Intelligence and risk baseline page with Elementos CTA — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5E — verify: `npm run build` green; voice gate pass
- [ ] `CAP-6` (S) — Managed service and sovereign hosting page — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5F — verify: `npm run build` green; voice gate pass
- [ ] `ES-CAP-1` (L) — Spanish versions of the six capability pages and index — blockedBy: CAP-1, CAP-2, CAP-3, CAP-4, CAP-5, CAP-6 — spec: §0.6 — verify: `npm run build` green; voice gate pass

## P3 — How it works, navigation

- [ ] `SPEC-COPY-2` (M) — Copy deck `docs/COPY_HOW_IT_WORKS_2026-10.md` for HIW-1..4 (EN + ES) — blockedBy: DEC-2 — spec: §6 — verify: voice gate pass
- [ ] `NAV-1` (S) — New top nav (Capabilities · Industries · How it works · Proof · Partners · Company) in `src/lib/navigation.ts` EN/ES; footer per §1e; `/utility/*` aliases — blockedBy: CAP-0 — spec: §3 — verify: `npm run build` green; needs human eyes: nav and footer, both locales
- [ ] `HIW-1` (M) — `/how-it-works`: the operational picture (replaces `/utility/index` and the Tier 1.5 part of `technology.astro`) — blockedBy: NAV-1, SPEC-COPY-2 — spec: §6A — verify: `npm run build` green; voice gate pass; zero `semantic substrate|ontology|knowledge graph|governed data product`
- [ ] `HIW-2` (M) — `/how-it-works/engagement`: the ladder with gates (replaces `/utility/how-it-starts`) — blockedBy: NAV-1, SPEC-COPY-2, DEC-2 — spec: §6B — verify: `npm run build` green; voice gate pass
- [ ] `HIW-3` (S) — `/how-it-works/sovereignty` — blockedBy: NAV-1, SPEC-COPY-2 — spec: §6C — verify: `npm run build` green; voice gate pass; no legal text
- [ ] `HIW-4` (L) — `/how-it-works/architecture` (Tier 3, not in nav): move honest depth out of `technology.astro`, strip DataOS/ECR/Second Wind; retire `technology.astro` with 301 — blockedBy: HIW-1 — spec: §6D, §1c — verify: `npm run build` green; grep zero for `DataOS|ECR|Second Wind|Intelsat|Telesat|SES ` across `src/pages` and `src/content`
- [ ] `ES-HIW-1` (M) — Spanish for HIW-1..3 — blockedBy: HIW-1, HIW-2, HIW-3 — spec: §0.6 — verify: `npm run build` green; voice gate pass

## P4 — Industries (after Energy)

- [ ] `SPEC-COPY-3` (L) — Copy deck `docs/COPY_INDUSTRIES_2026-10.md` for IND-1..5 (EN + ES) — blockedBy: DEC-2 — spec: §7 — verify: voice gate pass; needs human eyes: no named early engagement
- [ ] `IND-1` (M) — Environment and protected areas (new) + images — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — verify: `npm run build` green; voice gate pass
- [ ] `IND-2` (M) — Mining and remediation (new) + images — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — verify: `npm run build` green; voice gate pass
- [ ] `IND-3` (M) — Cities and public services rewrite (disaster response, cadaster, waste, water; ports and fleet folded with an xOps-proven note) — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — verify: `npm run build` green; voice gate pass
- [ ] `IND-4` (M) — Security and critical infrastructure merge (defense + critical-infrastructure; 301s) — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — verify: `npm run build` green; voice gate pass; old paths 301
- [ ] `IND-5` (S) — Agriculture and aquaculture (`status: emerging`, no proof claims) — blockedBy: NRG-2, SPEC-COPY-3, DEC-2 — spec: §7, §13.5 — verify: `npm run build` green; voice gate pass
- [ ] `IND-6` (S) — Retire Finance, Broadcast & Media, Networks (`.retired`), fold Industrial, Transportation, Water & Environment; 301s; industries index shows six — blockedBy: IND-1, IND-2, IND-3 — spec: §7, §3 — verify: `npm run build` green; index lists six
- [ ] `SOLN-1` (M) — Solutions: tag `status`/`capability`/`industry` on all 23; `moved-to-dataos` on the eight DataOS SKUs; render remaining as example cards under industries; `/solutions` → `/capabilities` — blockedBy: SCHEMA-2, CAP-0 — spec: §8 — verify: `npm run build` green; needs human eyes: no DataOS SKU visible
- [ ] `SOLN-2` (S) — Metrics: source, relabel ("declared vendor performance" / "target agreed at proof of value") or cut every hard stat on solution and use-case cards — blockedBy: SOLN-1 — spec: §8 — verify: grep for `%` in solutions/use-cases returns only attributed lines; needs human eyes
- [ ] `UC-1` (S) — Use cases: keep and rewrite six, `.retired` the rest — blockedBy: SOLN-1 — spec: §8 — verify: `npm run build` green; voice gate pass
- [ ] `ES-IND-1` (L) — Spanish for IND-1..5 and the industries index — blockedBy: IND-1, IND-2, IND-3, IND-4, IND-5 — spec: §0.6 — verify: `npm run build` green; voice gate pass

## P5 — Proof, homepage, partners, company

- [ ] `PROOF-1` (M) — `/proof` reference work: four abstracted pieces with white-labeled captures or honest placeholders — blockedBy: DEC-2, NRG-3 — spec: §9A, §13.6 — verify: `npm run build` green; voice gate pass; needs human eyes: partner consent recorded for each capture
- [ ] `PROOF-2` (S) — Reference programs (partner-delivered, labeled) — blockedBy: PROOF-1 — spec: §9B — verify: `npm run build` green; needs human eyes: Skyline written OK on file
- [ ] `SPEC-COPY-4` (M) — Copy deck `docs/COPY_HOMEPAGE_2026-10.md` (captions, sub, promise line, band, FAQ, ecosystem, where-we-operate) EN + ES — blockedBy: DEC-2 — spec: §10 — verify: voice gate pass
- [ ] `HOME-1` (L) — Homepage rebuild per §10 — blockedBy: CAP-0, NAV-1, SPEC-COPY-4, PROOF-1 — spec: §10, §1c, §1e — verify: `npm run build` green; voice gate pass; grep zero for `DataOS|Second Wind|SMARTS|TEKTELIC|Intelsat|Telesat|US-headquartered`
- [ ] `PART-1` (M) — Partners rewrite — blockedBy: NAV-1, DEC-2 — spec: §11 — verify: `npm run build` green; voice gate pass; Africa/SE Asia removed from active markets
- [ ] `ABOUT-1` (S) — About: Quito HQ + US entity, Elementos, ventures line — blockedBy: — — spec: §11, §1e — verify: `npm run build` green; voice gate pass
- [ ] `ES-HOME-1` (M) — Spanish homepage, partners, about — blockedBy: HOME-1, PART-1, ABOUT-1 — spec: §0.6 — verify: `npm run build` green; voice gate pass
- [ ] `CLEAN-1` (S) — Delete `.retired` page files older than 90 days, drop `src/content/verticals/*`, `products*`, `national-intelligence.retired`; update `CLAUDE.md` authorities to point at this spec — blockedBy: IND-6, HIW-4 — spec: §15 — verify: `npm run build` green

---

## Done

_(Closed tickets move here with their SHA as history.)_

- [x] `SPINE-1` (S) — Sense/Unify/Act spine data + `SpineBand` component (2026-06 spec) — done: 40315e2 — note: component may be reused for the three-layer band (§2); the three-beat copy is retired.
