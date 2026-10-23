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
**Type-check gate (standing rule, Jonathan 2026-10-20):** `astro check` passes when it adds
zero errors vs the HEAD baseline (168 pre-existing errors as of `fd1fbb9`); diff the error
lines, not the count. Clearing the baseline is its own ticket, not part of any other.

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

- [!] `DEC-1` (S) — Confirm live domain + Netlify source; push local `docs/`, September insights and this ledger to GitHub `main` — blockedBy: — — spec: REALIGNMENT_2026-10-20 §13.7, §15 — verify: `git log origin/main -1` shows this commit; needs human eyes: Netlify deploy log points at the right branch
  > BLOCKED (2026-10-20): local half committed `fcac304` (not pushed; agent never auto-pushes). Local `main` is 10 ahead / 5 behind `origin/main` (merge-base `087323e`; origin tip `ba8db82` "site-wide cleanup") — needs a human-chosen merge/rebase from a GitHub clone (§15), then push + confirm domain and Netlify branch (§13.7).
- [x] `DEC-2` (S) — Record decisions in `docs/DECISION_AUTHORITIES.md`: §1b RESOLVED 2026-10-20 ("Quatro Klarety" is the geospatial capability name); still open: §13.2 corridor figures on the web page, §13.3 price bands in `docs/DECISION_AUTHORITIES.md` as DECISION-NEEDED or resolved — done: 06c8609 — spec: §1, §13
  > note: §13.2 still DECISION-NEEDED (see `docs/DECISION_AUTHORITIES.md` → Open escalations); figures stay unrendered until Jonathan answers. Build gate not run: iCloud checkout stalls (§15); docs-only change.
- [x] `SCHEMA-1` (S) — Industries schema: add `status`, `proofBadge`, `authorityLine`, `proofCards[]`, rename `platformMapping` keys to `see/correlate/act` (keep old keys readable) — blockedBy: — — done: 7351d43 — spec: §7
  > note: build green (167 pages). `astro check` 168 errors, all pre-existing (identical on HEAD, none in config.ts); committed on Jonathan's call 2026-10-20.
- [x] `SCHEMA-2` (S) — Add `capabilities` content collection (six entries, `layer`, `substrate`, `proof`) and `status`/`capability`/`industry` fields on solutions — blockedBy: — — done: d42f4fc — spec: §5, §8
  > note: build green (167 pages); `astro check` zero new errors vs baseline (standing rule).

## P1 — Sprint 0: Energy for the Ministerio de Ambiente y Energía

- [x] `NRG-1` (M) — Rewrite `src/content/industries/energy.md` from `docs/COPY_ENERGY_2026-10-20.md`: hero, stats, four challenges, five capabilities, authority line, see/correlate/act, proof row, engagement paragraph, CTA. Strip NERC/PHMSA/EPA/DER/SunSpec/storm copy — blockedBy: SCHEMA-1 — done: 53b3ce2 — spec: §4
  > note: build green, `astro check` zero new, ticket grep zero, voice gate pass (4.5 heading cut per Jonathan). 4.3 figures omitted (§13.2). Needs human eyes: reads as one portfolio. Open: featured capped at 3 by template; cross-cutting line has no field (NRG-2).
- [!] `NRG-IMG-1` (S) — Ten Energy images already generated and reviewed (2026-10-20) and placed in `public/images/` (see `image-prompts/energy-ministry-2026-10.csv`); this ticket wires the paths in `energy.md` (done inside NRG-1 if sequenced together) and removes the five US-utility images from the page — blockedBy: NRG-1 — spec: §12 — verify: all ten files referenced and render; needs human eyes: hero headline zone clear
  > BLOCKED (2026-10-21): 10/10 files present; 9 referenced in energy.md (53b3ce2); 5 US-utility images gone. Only 4 render: `[slug].astro` never renders `challenge.image` (all industries) and shows images only for the first 3 featured caps, so 3 challenge icons + loss-recovery + refinery-model don't show. `proof-energy-corridor.png` wires with Card A in NRG-3. Needs a template change (NRG-2 or a new ticket) — Jonathan's call.
- [x] `NRG-2` (S) — Industry template: render `proofBadge`, `authorityLine`, `proofCards` (honest placeholder when `asset` null), the engagement paragraph, and the three-layer band with per-industry captions — blockedBy: SCHEMA-1 — spec: §4, §7 — done: ce4eb71
  > note: build green, `astro check` zero new (168), voice gate pass; placeholder proven with a scratch-only test card. Forks resolved by planner (insert, don't reorder; band = SpineBand with `layers` data). Energy layer captions: no deck source; add to COPY_ENERGY (Jonathan) before they render. Template still diverges from §4 order (capabilities before challenges; stats and proofPoint not rendered) and keeps two "not X, Y" strings (dither break, programs intro): proposed split ticket, Jonathan to accept. Needs human eyes: placeholder, not fabricated visual, where no asset.
- [x] `SPEC-COPY-ES-1` (S) — Add the Spanish three-layer band (promise line, layer names, headlines from §2) and the proof-card placeholder label to `docs/COPY_ENERGY_2026-10-20.md` ES half, written Spanish-first — blockedBy: — — spec: §0.6, §2 — done: 0be07ca
  > note: deck §11 (ES half). ES ban grep clean; voice gate pass (promise is a tricolon but mirrors the recorded §2 promise). Needs human eyes: Esteban approves, in particular "sensar" and "Conduzca la operación".
- [x] `ES-NRG-2` (S) — ES industry template (`src/pages/es/industries/[slug].astro`) renders badge, three-layer band, authority line, proof row and engagement paragraph; ES paragraph from the deck's ES half (§8) — blockedBy: NRG-2, SPEC-COPY-ES-1 — spec: §0.6, §7 — done: 472af4c
  > BLOCKED (2026-10-22): the ES deck has the engagement paragraph (§8), authority line (§5), Ver / correlacionar / actuar (§6) and proof-card labels (§7), but no Spanish for the band (promise line, three layer names, three headlines) or the null-asset placeholder ("Capture in preparation."). Copy is pasted from the deck, never free-written or auto-translated (CLAUDE.md), so it waits on SPEC-COPY-ES-1.
  > UNBLOCKED (2026-10-22): band and labels now in deck §11 (draft; Esteban to approve before publish).
  > note: build green, `astro check` zero new (168), ES ban grep clean, voice gate pass; badge, authority line and placeholder card proven with scratch-only test data (ES energy has none yet; ES-ENERGY-1). Needs human eyes: Esteban reads it.
- [x] `NRG-3` (S) — Energy proof cards: corridor demonstration (figures gated on DEC-2) and reservoir / El Niño assessment pattern; link to `/proof` — blockedBy: NRG-2, DEC-2 — spec: §4.7, §9A — done: 6471d54
  > note: build green, `astro check` zero new (168), voice gate pass. Card A without figures (§13.2 interim default; reopen if Jonathan picks option A), asset proof-energy-corridor.png; Card B honest placeholder. `/proof` link deferred: page does not exist until PROOF-1 (set `href` on both cards there). ES cards ride with ES-ENERGY-1. Needs human eyes: no client named.
- [x] `ES-ENERGY-1` (M) — Spanish `industries-es/energy.md` from the ES half of the copy deck, same structure, Spanish-first phrasing (not a translation of the English idiom) — blockedBy: NRG-1 — spec: §0.6, §4 — done: 1e1cead
  > note: build green, `astro check` zero new (168), §4 acceptance grep zero on content (NERC/PHMSA/EPA/SunSpec/OCPP/DER/plataforma/gemelo digital), ES voice gate pass. 4.3 [aprobar] line omitted (§13.2). Open: no Spanish proofBadge in the deck (EN has "Demonstrated on a corridor"); cross-cutting line has no field (as NRG-1); secondary CTA /how-it-works/engagement 404s in EN and ES until HIW builds it; ES template's DualCta still says "en 4 semanas" and the ES nav has em-dashes (outside this ticket). Needs human eyes: Esteban reads it.
- [x] `NRG-4` (S) — Insights wiring: pin three energy posts to the Energy page by tag (dry season, corridor, losses); update the blog-cadence category map — blockedBy: NRG-1 — spec: §9C — done: 0b993e8
  > note: build green, `astro check` zero new (166, two fewer than baseline). Pinned: dry-season → the-forecast-belongs-to-someone-else, corridor → between-the-alarm-and-the-valve, losses → when-loss-has-an-author (pipeline theft; no post on distribution non-technical loss exists yet). Cadence-map half split to NRG-4b (the task lives outside the repo). Needs human eyes: three relevant posts show.
- [!] `NRG-4b` (S) — Update the blog-cadence category map to the new industries (energy, environment, mining, cities, security, agriculture) in the scheduled task `~/Documents/Claude/Scheduled/proposal-driven-blog-cadence/SKILL.md` (outside the repo; Jonathan approves the edit) — blockedBy: NRG-4 — spec: §9C — verify: needs human eyes: next cadence post carries a new-industry slug
  > BLOCKED (2026-10-22): editing a scheduled task outside the repo needs Jonathan's OK (asked 2026-10-22).
- [!] `NRG-5` (S) — Redirects for the retired/folded industries and `/solutions` so links from the ministry deck resolve; sitemap regenerates — blockedBy: NRG-1 — spec: §3 — verify: `npm run build` green; `curl -I` on each old path returns 301 in preview
  > DECISION-NEEDED (2026-10-22): NRG-5 has nothing safe to ship. Every §3 source still renders and every target but /industries is unbuilt; the only broken link near the deck is the Energy CTA /how-it-works/engagement (404 EN/ES), which §3 doesn't list.
  >   Authorities consulted: T1 §0.6 (ES mirrors ship with each redirect). T2 ledger gives the 301s to CAP-2, HIW-4, IND-4, IND-6 (blockedBy IND-1..3), SOLN-1; /utility, /utility/how-it-starts, /utility/what-you-get map to HIW-1, HIW-2, CAP-0. Spec §4 and COPY_ENERGY show the deck links /industries/energy, /contact/demo, /how-it-works/engagement; the deck itself isn't in the repo. T3–T5 silent.
  >   Option A — Re-block NRG-5 as the final sweep (blockedBy CAP-0, CAP-2, HIW-1, HIW-2, HIW-4, IND-4, IND-6, SOLN-1): owners ship their own 301s + /es/ mirrors; NRG-5 checks chains (space-satcom, infrastructure → networks), sitemap, curl -I on all of §3.
  >   Option B — Close NRG-5 as superseded; add the redirect lines to each owner ticket. Fewer tickets, no final chain check.
  >   Option C — Stopgap now: temporary 302 /how-it-works/engagement → /utility/how-it-starts (EN; ES has no target) until HIW-2. New scope, Jonathan's call.
  >   Best practice: Google Search Central (301 only when the move is final; temporary otherwise). Informs, does not decide.
  >   Recommendation: A, plus Jonathan confirms the deck's URLs; if the deck carries /how-it-works/engagement, add C as a separate S ticket.

## P2 — Capabilities (the layer the buyer is buying)

- [x] `SPEC-COPY-1` (M) — Copy deck `docs/COPY_CAPABILITIES_2026-10.md` for CAP-1, CAP-4, CAP-5, CAP-6 (EN + ES) — blockedBy: DEC-2 — spec: §5 — done: 3b2878e
  > note: voice gate pass (A grep clean on copy; one tricolon fixed). Open for Jonathan: substrate naming on each page; Elementos URL (none in sources); 5F follows the annex's three hosting modalities (spec says "hybrid"); no corridor figures (§13.2). Industry examples link /industries/{mining,environment,security}, built in IND-1..4. Needs human eyes: Jonathan approves substrate naming.
- [x] `CAP-0` (M) — Build `CapabilityLayout` (hero, what you get, how it shows up, substrate line, proof card/placeholder, hand-off, engagement paragraph, CTA) + `/capabilities` index with the three-layer band — blockedBy: SCHEMA-2 — spec: §5 — done: 488d68e
  > note: build green, `astro check` zero new (166). Layout proven with scratch-only test copy on quatro-klarety (all eight blocks render; index links it). No capability page builds until CAP-1..6 set `hero`; the index lists all six unlinked until then. Not in nav yet. Needs human eyes: index reads as three layers, six pages.
- [x] `CAP-1` (M) — Quatro Klarety page (territorial monitoring from space) at `/capabilities/quatro-klarety` — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5A, §1b — done: 2d67aae
  > note: build green, `astro check` zero new (166), voice gate pass, H1 reads "Quatro Klarety"; index now links it. Mining/Environment examples and both hand-off links render unlinked until IND-1/IND-2 and CAP-2/CAP-4 land. Substrate line still awaits Jonathan's approval (SPEC-COPY-1). ES in ES-CAP-1.
- [x] `CAP-2` (M) — Operational intelligence (xOps) page from the June deck; move `/utility/xops` with 301 — blockedBy: CAP-0 — spec: §5B — done: 5529f01
  > note: build green, `astro check` zero new (166), voice gate pass, zero platform/digital twin on the page. Deck amended (Service assurance line and band eyebrow were "not X" antitheses; Quatro Field hand-off retired per §1c; new 5A/5D hand-off line, needs Jonathan's read). Collection title is now "The operational model" (index shows it; §3 nav label still says Operational intelligence). Only one industry example (Energy) has a deck source. 301 is in netlify.toml (true 301 on deploy) and astro.config (meta refresh in preview); no ES page existed.
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
