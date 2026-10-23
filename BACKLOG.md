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
- [x] `CAP-3` (S) — IoT, edge and OT communications page — blockedBy: CAP-0 — spec: §5C — done: e2718b0
  > note: build green, `astro check` zero new (166), voice gate pass, no vendor or satellite-operator names. OT communications lines are new copy in the deck amendment (needs Jonathan's read). June §4 authority line held (no template field; unconfirmed per §0.1). One industry example (Energy).
- [x] `CAP-4` (M) — Reasoning, agents and evidence page — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5D — done: 70877de
  > note: build green, `astro check` zero new (166), voice gate pass, human-in-the-loop stated ("Agents propose. Your operators and your chain of command decide"). Deck's Architecture-page sentence held until /how-it-works/architecture exists (add it with that HIW ticket). Security example and risk-baseline hand-off unlinked until IND-4 / CAP-5.
- [!] `CAP-5` (S) — Intelligence and risk baseline page with Elementos CTA — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5E — verify: `npm run build` green; voice gate pass
  > BLOCKED (2026-10-22): page shipped in cbdabb2 (build green, `astro check` zero new, voice gate pass); the Elementos CTA is the remaining criterion and needs a real URL (sources only have `elementos.[domain]`). Add `affiliate.cta` to `src/content/capabilities/risk-baseline.md` once Jonathan supplies it, then flip to [x].
- [x] `CAP-6` (S) — Managed service and sovereign hosting page — blockedBy: CAP-0, SPEC-COPY-1 — spec: §5F — done: 61573e9
  > note: build green, `astro check` zero new (166), voice gate pass. Hosting follows the annex's three modalities (spec says "hybrid"; Jonathan to confirm). Hand-off to /how-it-works/engagement renders unlinked until HIW-2 builds it. Index now links all six capability pages.
- [ ] `ES-CAP-1` (L) — Spanish versions of the six capability pages and index — blockedBy: CAP-1, CAP-2, CAP-3, CAP-4, CAP-5, CAP-6 — spec: §0.6 — verify: `npm run build` green; voice gate pass

## P3 — How it works, navigation

- [x] `SPEC-COPY-2` (M) — Copy deck `docs/COPY_HOW_IT_WORKS_2026-10.md` for HIW-1..4 (EN + ES) — blockedBy: DEC-2 — spec: §6 — done: 58f68c8
  > note: voice gate pass (A grep clean; one tricolon fixed; no client, partner or §1c names; no prices). Open for Jonathan: "open-book" exists only as a partner cost rule in teaming docs, so it is off the public page; no source names "a validator" (deck uses the counterpart team that signs the gate); hosting follows the annex's three modalities, retiring the old five deployment modes.
- [x] `NAV-1` (S) — New top nav (Capabilities · Industries · How it works · Proof · Partners · Company) in `src/lib/navigation.ts` EN/ES; footer per §1e; `/utility/*` aliases — blockedBy: CAP-0 — spec: §3 — done: 17b42e7
  > note: build green, `astro check` zero new (166), voice gate pass on nav strings (em-dashes removed). All 25 nav+footer links resolve in EN and ES. How it works → /utility/* aliases (repoint in HIW-1..3); Proof → Insights (repoint in PROOF-1); industry items unchanged except Energy label (IND-* update them). ES Capabilities/How it works/Partners/Networks link to EN pages until ES pages exist. Needs human eyes: nav and footer, both locales.
- [x] `HIW-1` (M) — `/how-it-works`: the operational picture (replaces `/utility/index` and the Tier 1.5 part of `technology.astro`) — blockedBy: NAV-1, SPEC-COPY-2 — spec: §6A — done: 81b4c3f
  > note: build green, `astro check` zero new (166), voice gate pass, zero banned terms on the page. /utility → /how-it-works 301 (netlify.toml + astro.config); /network and /platform repointed (no chain). Netlify /platform/* → /utility/:splat still hops once for subpaths. technology.astro's Tier 1.5 content stays until HIW-4 retires it. ES in ES-HIW-1.
- [x] `HIW-2` (M) — `/how-it-works/engagement`: the ladder with gates (replaces `/utility/how-it-starts`) — blockedBy: NAV-1, SPEC-COPY-2, DEC-2 — spec: §6B — done: 31e2834
  > note: build green, `astro check` zero new (166), voice gate pass, no prices. /utility/how-it-starts → /how-it-works/engagement 301. The EN Energy CTA (404 since NRG-1) now resolves; ES /es/how-it-works/engagement still 404s until ES-HIW-1. Open-book left off pending Jonathan (SPEC-COPY-2 note).
- [x] `HIW-3` (S) — `/how-it-works/sovereignty` — blockedBy: NAV-1, SPEC-COPY-2 — spec: §6C — done: 7bc6e43
  > note: build green, `astro check` zero new (166), voice gate pass, no legal text (grep for shall/hereby/article and standards names clean). In nav and footer (ES links EN until ES-HIW-1).
- [x] `HIW-4` (L) — `/how-it-works/architecture` (Tier 3, not in nav): move honest depth out of `technology.astro`, strip DataOS/ECR/Second Wind; retire `technology.astro` with 301 — blockedBy: HIW-1 — spec: §6D, §1c — done: 3f3d7f5
  > note: build green, `astro check` zero new (166), voice gate pass. Name grep zero across built sources in src/pages and src/content, and zero §1c names in any built page; hits remain only in unbuilt `.retired` / `_`-prefixed files. Found and fixed a leak: `src/pages/national-intelligence.retired/` was still routed (12 pages, ECR named); renamed `_national-intelligence.retired`, so those URLs now 404 (no redirect; none linked). Homepage partner strip trimmed ahead of HOME-1 (DataOS, Second Wind, satellite operators out; SMARTS & TEKTELIC → the Quatro IoT & Edge Suite). /utility/technology → /how-it-works 301 per §3.
- [x] `ES-HIW-1` (M) — Spanish for HIW-1..3 — blockedBy: HIW-1, HIW-2, HIW-3 — spec: §0.6 — done: 26a098e
  > note: build green, `astro check` zero new (166), ES voice gate pass. ES nav/footer How it works links localized; the ES Energy CTA (/es/how-it-works/engagement) now resolves. Architecture has no ES page (Tier 3; ES 6D copy is in the deck if wanted). Needs human eyes: Esteban reads it.

## P4 — Industries (after Energy)

- [x] `SPEC-COPY-3` (L) — Copy deck `docs/COPY_INDUSTRIES_2026-10.md` for IND-1..5 (EN + ES) — blockedBy: DEC-2 — spec: §7 — done: 96a08bc
  > note: voice gate pass (A grep clean; one tricolon fixed); name grep clean (no client, place, partner, vendor, mission, figure or price). Open for Jonathan: Mining badge "Demonstrated on a site" and Cities "+ demonstrated" have no delivered result behind them ([approve], fallbacks given); Mining stats are dated public figures (ARCOM via Expreso, Army via El Universo); Security drops Elementos from the corridor program (affiliate mention only) and cuts youth/counter-cartel framing; Agriculture covers aquaculture only (cacao/forestry named as next). Layer captions written for all five (Energy still has none). Needs human eyes: no named early engagement.
- [x] `IND-1` (M) — Environment and protected areas (new) + images — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — done: 7652f2f
  > note: build green, `astro check` zero new (166), voice gate pass on the page copy (the template's photo-break em-dash is the NRG-2 split item). In nav and footer (ES links EN until ES-IND-1). Images split to IND-IMG-1: hero reuses industry-water-environment.png; the three featured capabilities show the gradient placeholder until generated. Badge "Demonstrated on a reserve" rests on Card B (Jonathan's read).
- [!] `IND-IMG-1` (S) — Generate the four Environment images from `image-prompts/environment-2026-10.csv` (image-generation skill; Jonathan runs or approves the paid generation) and wire them into `environment.md` — blockedBy: IND-1 — spec: §12 rules — verify: files present and referenced; needs human eyes: hero headline zone clear, no faces or text
  > BLOCKED (2026-10-22): paid image generation needs Jonathan's OK (asked 2026-10-22).
- [x] `IND-2` (M) — Mining and remediation (new) + images — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — done: 77b33ee
  > note: build green, `astro check` zero new (166), voice gate pass on page copy (template photo-break em-dashes are the NRG-2 split item). Badge uses the deck fallback until Jonathan approves "Demonstrated on a site". Stats are in content but the EN industry template does not render stats (NRG-2 split item). No proof card (landslide piece waits for PROOF-1). Images split to IND-IMG-2.
- [!] `IND-IMG-2` (S) — Generate the three Mining images from `image-prompts/mining-2026-10.csv` and wire them into `mining.md` (Jonathan runs or approves the paid generation) — blockedBy: IND-2 — spec: §12 rules — verify: files present and referenced; needs human eyes: hero headline zone clear, no faces or text
  > BLOCKED (2026-10-22): paid image generation needs Jonathan's OK (asked 2026-10-22).
- [x] `IND-3` (M) — Cities and public services rewrite (disaster response, cadaster, waste, water; ports and fleet folded with an xOps-proven note) — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — done: f0c41e9
  > note: build green, `astro check` zero new (166), voice gate pass on page copy. Old unsourced claims (fifteen consoles, gunshot/LPR, 5-10 consoles) removed. Badge "Proven at scale (DataMiner xOps)"; §7's "+ demonstrated" waits for Jonathan. Images reuse existing cities visuals; cadaster capability shows the placeholder. Water appears as a challenge only (sources thin). ES cities still old until ES-IND-1.
- [x] `IND-4` (M) — Security and critical infrastructure merge (defense + critical-infrastructure; 301s) — blockedBy: NRG-2, SPEC-COPY-3 — spec: §7 — done: e0edc8b
  > note: build green, `astro check` 149 (17 fewer: the retired page's errors), voice gate pass, no youth/counter-cartel framing, Elementos once. /industries/defense and /industries/critical-infrastructure → /industries/security (netlify 301 + astro meta refresh). ES defense page stays until ES-IND-1 merges it; ES homepage still links /es/industries/critical-infrastructure (404, pre-existing; ES-HOME-1). /industries/infrastructure → /industries/networks left for IND-6 (candidate target: /industries/security).
- [!] `IND-5` (S) — Agriculture and aquaculture (`status: emerging`, no proof claims) — blockedBy: NRG-2, SPEC-COPY-3, DEC-2 — spec: §7, §13.5 — verify: `npm run build` green; voice gate pass
  > DECISION-NEEDED (2026-10-22): §13.5 — publish Agriculture and aquaculture as "emerging" now, or hold.
  >   Authorities: T1 §0.1 allows it only with no proof claims (the deck has none: no stats, no proof cards, capabilities marked "offered, not yet demonstrated"). T2 spec §13.5 and DECISION_AUTHORITIES list it OPEN; the docs audit (line 258) recommends "publish as emerging with no proof claims". Sources cover coastal aquaculture only (one coastal producer's program); cacao and forestry are named interests.
  >   Option A — Publish now (`status: emerging`, deck IND-5 as written): the industry is visible to the channel; risk is a thin page.
  >   Option B — Hold until a signed engagement: no thin page; the industry is invisible.
  >   Recommendation: A (the audit's), copy is ready in COPY_INDUSTRIES IND-5.
- [!] `IND-6` (S) — Retire Finance, Broadcast & Media, Networks (`.retired`), fold Industrial, Transportation, Water & Environment; 301s; industries index shows six — blockedBy: IND-1, IND-2, IND-3, IND-5 — spec: §7, §3 — verify: `npm run build` green; index lists six
  > BLOCKED (2026-10-22): work shipped in a623ac6 (build green, `astro check` 148 with zero new, voice gate pass on the index; eight retired/folded paths redirect). Index lists five; it reads the collection, so Agriculture appears as the sixth once IND-5 lands (§13.5 decision), then flip to [x]. Use-case subpages under retired parents remain for UC-1. ES index and ES industrial/infrastructure pages wait for ES-IND-1.
- [x] `LINK-1` (S) — Site-wide internal link audit: fix or redirect the 131 internal 404s found 2026-10-22 (old /contact/* assessment pages, retired use-case paths, the ES language switch on EN-only pages such as /capabilities and /how-it-works/architecture) — blockedBy: — — spec: §3 — done: c86297a
  > note: build green, `astro check` zero new (148); scripted scan of dist: 0 internal 404s (was 131 + 99 switch targets). Use-case pages still carry old copy; UC-1 keeps six and retires the rest.
- [x] `SOLN-1` (M) — Solutions: tag `status`/`capability`/`industry` on all 23; `moved-to-dataos` on the eight DataOS SKUs; render remaining as example cards under industries; `/solutions` → `/capabilities` — blockedBy: SCHEMA-2, CAP-0 — spec: §8 — done: caa0103
  > note: build green, `astro check` zero new (148); scripted scan: no moved-to-dataos title visible on any EN page; zero internal 404s. Mapping (judgment, Jonathan to confirm): energy ← asset-health, grid-health, operational-intelligence, pipeline-integrity, regulatory-compliance; environment ← environmental-compliance, environmental-governance; cities ← airport, fleet-logistics, network-operations, port, service-assurance, water-systems; security ← corridor-intelligence, physical-security; mining has none. Cards show title + capability only (taglines fail the voice gate; SOLN-2 owns metrics). ES /es/solutions pages unchanged (no ES ticket yet). §13.4 (where DataOS SKUs 301) still open; EN detail pages already 301 to /capabilities. Needs human eyes: no DataOS SKU visible.
- [x] `SOLN-2` (S) — Metrics: source, relabel ("declared vendor performance" / "target agreed at proof of value") or cut every hard stat on solution and use-case cards — blockedBy: SOLN-1 — spec: §8 — done: e857753
  > note: build green, `astro check` zero new (148); `grep %` over solutions, solutions-es and use-cases returns nothing; scripted scan finds no rendered % on use-case or ES solution pages; zero internal 404s. All cut (no source found to relabel as "declared vendor performance"). 18 emptied required strings rewritten metric-free (EN + ES). Frontmatter reformatted by js-yaml (quoting/wrapping only). Needs human eyes: spot-check two use-case pages and one ES solution page.
- [x] `UC-1` (S) — Use cases: keep and rewrite six, `.retired` the rest — blockedBy: SOLN-1 — spec: §8 — done: b42c369
  > note: build green, `astro check` zero new (148), voice gate pass on all six pages (bans, figures, names, em-dashes clean apart from the <title> separator); zero internal 404s; old paths redirect (renamed three, reparented two). Copy pasted from COPY_ENERGY and COPY_INDUSTRIES; no new claims. objections/adjacentSolutions/crossVertical dropped. Needs human eyes: the six pages read as examples, not case studies.
- [ ] `ES-IND-1` (L) — Spanish for IND-1..5 and the industries index — blockedBy: IND-1, IND-2, IND-3, IND-4, IND-5 — spec: §0.6 — verify: `npm run build` green; voice gate pass

## P5 — Proof, homepage, partners, company

- [x] `PROOF-1` (M) — `/proof` reference work: four abstracted pieces with white-labeled captures or honest placeholders — blockedBy: DEC-2, NRG-3 — spec: §9A, §13.6 — done: 27edb9b
  > note: build green, `astro check` zero new (148), voice gate pass, zero internal 404s. No partner capture is used (card A's image is the generated v7.1 asset; B, C, D show the placeholder), so no consent is needed yet; §13.6 consent gates any white-labeled capture added later. C and D have no write-up in any source; titles only until one exists. Needs human eyes: partner consent recorded before any capture replaces a placeholder.
- [ ] `ES-PROOF-1` (S) — Spanish `/es/proof` from COPY_ENERGY §7 ES (cards A and B) with the two pending pieces titled in Spanish (§0.6) — blockedBy: PROOF-1 — spec: §0.6, §9A — verify: `npm run build` green; voice gate pass (ES)
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
