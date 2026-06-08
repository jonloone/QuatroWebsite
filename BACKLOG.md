# BACKLOG — active ticket ledger

The single working queue. Read top to bottom; the **first `[ ]` whose `blockedBy`
are all `[x]`** is the next ticket. Protocol: **`docs/TICKET_PROTOCOL.md`**.
Spec for every ticket: **`docs/REALIGNMENT_2026-06-08.md`**. Run `/next-ticket`.

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked · size `S`/`M`/`L`.
Verify gate for this repo: ticket `verify:` + `npm run build` green (+ `npx astro check`
where types matter). No lint/test harness; visual/copy tickets name a manual check and
report "needs human eyes."

---

## P0 — Shared substrate (build first)

- [ ] `SPINE-1` (S) — Build reusable Sense/Unify/Act spine data + SpineBand component — blockedBy: — — spec: REALIGNMENT_2026-06-08 §1 — verify: `npm run build` green + needs human eyes: SpineBand renders 3 beats
- [ ] `DEMO-1` (M) — Build the reusable DemoSlot component (sense|unify|act configs, honest placeholder when asset null) — blockedBy: — — spec: REALIGNMENT_2026-06-08 §2, §0.1 — verify: `npm run build` green + needs human eyes: null-asset renders placeholder, not fabricated visual
- [ ] `SOLN-TIER-1` (S) — Add `tier` field (live-field|xops|dataos) to solutions content schema/frontmatter — blockedBy: — — spec: REALIGNMENT_2026-06-08 §9 — verify: `npx astro check` green + `npm run build` green

## P1 — Homepage spine

- [ ] `HOME-1` (M) — Add spine band to homepage + spine promise line under hero — blockedBy: SPINE-1,DEMO-1 — spec: REALIGNMENT_2026-06-08 §3 — verify: `npm run build` green + needs human eyes: spine band present, promise line under hero
- [ ] `HOME-2` (S) — Unhide proof strip, repoint at xOps scale numbers — blockedBy: — — spec: REALIGNMENT_2026-06-08 §3 — verify: `npm run build` green + needs human eyes: proof strip visible with xOps figures
- [ ] `HOME-3` (S) — Reframe Full-Stack panel as four-layer map under the spine — blockedBy: SPINE-1 — spec: REALIGNMENT_2026-06-08 §3 — verify: `npm run build` green + needs human eyes: four-layer map renders

## P2 — How-it-works section (the spine pages)

- [ ] `NAV-1` (S) — Rename `/utility` section to "How it works"; update nav labels; alias old routes — blockedBy: — — spec: REALIGNMENT_2026-06-08 §4 — verify: `npm run build` green + needs human eyes: nav reads How it works, old URLs still resolve
- [ ] `HIW-1` (M) — `/utility/technology` → "The stack": reframe over four-layer map; link out to Hardware — blockedBy: NAV-1,SPINE-1 — spec: REALIGNMENT_2026-06-08 §5 — verify: `npm run build` green + needs human eyes: stack page leads with spine
- [ ] `HIW-2` (M) — NEW Hardware & IoT page (Sense beat + Sense demo slot) — blockedBy: NAV-1,DEMO-1 — spec: REALIGNMENT_2026-06-08 §6 — verify: `npm run build` green + needs human eyes: page renders, demo slot honest if no asset
- [ ] `HIW-3` (S) — `/utility/xops` → "The platform": foreground scale, embed Unify demo — blockedBy: NAV-1,DEMO-1 — spec: REALIGNMENT_2026-06-08 §7 — verify: `npm run build` green + needs human eyes: scale numbers + Unify demo present
- [ ] `FIELD-1` (M) — NEW Quatro Field page (Act beat; names the app; Act demo slot) — blockedBy: NAV-1,DEMO-1 — spec: REALIGNMENT_2026-06-08 §8 — verify: `npm run build` green + needs human eyes: page names Quatro Field, Act demo present

## P3 — Solutions + industries

- [ ] `SOLN-1` (M) — Solutions index: render grouped by tier, lead with Live in Field — blockedBy: SOLN-TIER-1 — spec: REALIGNMENT_2026-06-08 §9 — verify: `npm run build` green + needs human eyes: three tier groups, Live first
- [ ] `SOLN-2` (S) — Fix fleet-health collision (satellite→Constellation Health/DataOS; vehicle fleet leads) — blockedBy: SOLN-TIER-1 — spec: REALIGNMENT_2026-06-08 §10 — verify: `npm run build` green + needs human eyes: two distinct SKUs, no name clash
- [ ] `SOLN-3` (S) — Source, label, or cut every solution-page metric; attribute integration counts — blockedBy: — — spec: REALIGNMENT_2026-06-08 §11 — verify: `npm run build` green + needs human eyes: no unsourced measured-outcome stats remain
- [ ] `IND-1` (S) — Industry-page template: add proof badge + one authority line — blockedBy: SPINE-1 — spec: REALIGNMENT_2026-06-08 §12 — verify: `npm run build` green + needs human eyes: badge + single authority line on each industry page
- [ ] `IND-2` (M) — Embed the three demo slots per industry page (vertical-swap, fallback-aware) — blockedBy: IND-1,DEMO-1 — spec: REALIGNMENT_2026-06-08 §12 — verify: `npm run build` green + needs human eyes: demos render or fall back honestly

## P4 — Expertise thread (light — do not over-index)

- [ ] `EXP-1` (S) — Add expertise authority paragraph to About + one How-it-works line — blockedBy: HIW-1 — spec: REALIGNMENT_2026-06-08 §13 — verify: `npm run build` green + needs human eyes: one paragraph on About, one line on HIW
- [ ] `EXP-2` (S) — Add Elementos routing CTA for services-led intent — blockedBy: — — spec: REALIGNMENT_2026-06-08 §13 — verify: `npm run build` green + needs human eyes: Elementos CTA present, no "Services" nav item

---

## Done

_(Closed tickets move here with their SHA as history. Empty until the first close.)_
