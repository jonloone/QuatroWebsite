# Decision Authorities — what to consult, in what order

When a ticket hits a scope, design-system, or product/copy question, resolve it
against these authorities **in this precedence**. Higher wins on conflict. Only
escalate to the human when the authorities are silent or genuinely conflict.

Underneath: **research informs, it never overrides.** External best practice is the
last tier and only ever produces *options for the human*. The `planner` subagent runs
this walk.

## Precedence (highest first)

1. **Invariants — non-negotiable.** `docs/REALIGNMENT_2026-10-20.md` §0 and §1. Never render
   invented state; keep the mission and hero verbatim; the buyer is the hero; no named
   early engagements; Spanish is first-class; the naming rules (§1); the visual system
   is fixed. A violation stops the work; it is
   not a call.
2. **Recorded decisions — already settled.** This realignment spec
   (`docs/REALIGNMENT_2026-10-20.md`, all sections), the audit
   (`docs/REALIGNMENT_AUDIT_2026-10-20.md`), the decision log below, and the prior
   audits in `docs/`.
   **Most forks are answered here — look before escalating.** The engagement evidence behind the audit lives in the LMIQuatro working
   folder (proposals, Granola notes) if deeper rationale is needed.
3. **Product definition & positioning.** The `quatro-cascade` skill
   (`.claude/skills/quatro-cascade`) — industrial AI integrator, four-layer stack,
   tiered transparency, the eight discriminators, ownership principle,
   human-in-the-loop. A scope/copy question is answered by *what the positioning
   allows at this tier* before any aesthetic call.
4. **Design system & chrome.** The `quatro-ui-system` skill — typography stack, forest
   green, Bayer dither, `img-technical`, three radii, 8px grid, dark-section rhythm.
   Reuse existing components before adding new ones.
5. **Brand voice.** The `jonathan-voice` skill + `quatro-cascade` language rules —
   banned vocabulary, tone, customer-facing claim rules (REALIGNMENT §0.2).
6. **External best practice — informs only, last resort.** If 1–5 are silent,
   research, then surface a `DECISION-NEEDED` note (options + citation +
   recommendation) for the human. Never applied autonomously; never overrides 1–5.

## How to use this

1. Hit a fork → walk tiers 1→6, stop at the first that answers it.
2. Tiers 1–2 answer it → follow, proceed, no escalation.
3. Tiers 3–5 answer it → follow; higher tier wins on conflict; note it.
4. All silent → tier 6: research, write the `DECISION-NEEDED` note, flip the ticket to
   `[!]`, stop. The human decides; record it back into tier 2 (the realignment spec).

## Decision log (tier 2; newest first)

| Date | Decision | Where it applies |
|---|---|---|
| 2026-10-23 | §13.5 resolved, option A: Agriculture and aquaculture publish now as `status: emerging`, with no proof claims (deck IND-5 as written). | §13.5, IND-5, IND-6, HOME-1 rows |
| 2026-10-23 | Spanish mission line: **"Hacemos inteligente la infraestructura crítica."** (the homepage-deck wording) everywhere the mission renders in Spanish, the ES homepage H1 and ES About included. The About deck's "Existimos para…" variant is retired. | §0.3, §0.6, ES-HOME-1 |
| 2026-10-23 | Elementos is not named on the website. Risk baselines and threat-network mapping are Quatro capabilities, folded into the intelligence and risk baseline page; no affiliate block, link or CTA. Supersedes §1d and §5E's Elementos CTA for the site only. | §1d, §5E, CAP-5, ELEM-1 (About, Security, homepage) |
| 2026-10-23 | NRG-5 option A: owners ship their own 301s; NRG-5 is the final redirect sweep (chains, sitemap, `curl -I` on all of §3). | §3, NRG-5 |
| 2026-10-23 | §13.7: the live domain is **withquatro.com**; Netlify deploys from GitHub `main`. Email addresses are unchanged. | §13.7, DEC-1 |
| 2026-10-23 | Paid generation approved for the Environment and Mining images; results are shown to Jonathan before they ship. The industry template change that renders challenge images and every featured capability image is approved as its own ticket. | §12, IND-IMG-1, IND-IMG-2, NRG-2b, NRG-IMG-1 |
| 2026-10-23 | The blog-cadence category map (scheduled task outside the repo) may be updated to the six new industries. | §9C, NRG-4b |
| 2026-10-20 | Engagement page shows timeline and gates, no price bands (default per §6B and audit §10.5; reopen only if Jonathan chooses). | §6B, §13.3, HIW-2, SPEC-COPY-2 |
| 2026-10-20 | The geospatial analysis capability is named **"Quatro Klarety"** on every tier (as hardware is "the Quatro IoT & Edge Suite"). One plain-language line below Tier 1 may say it is delivered with our earth-observation partner Klarety. | REALIGNMENT_2026-10-20 §1b, §5A, §13.1 (resolved); `COPY_ENERGY_2026-10-20.md` |
| 2026-10-20 | DataMiner xOps is named from How-it-works down; DataOS, ECR, Second Wind, SES/Intelsat/Telesat, SMARTS, TEKTELIC, IoT Orbital are never named on Quatro pages. | §1c |
| 2026-10-20 | Identity line: "Headquartered in Quito, Ecuador, with a US entity." Active markets: Ecuador, Colombia, Venezuela, Panama, Guyana; MENA via channel. | §1e |
| 2026-10-20 | The 2026-06-08 spec (Sense → Unify → Act, Quatro Field page) is retired; §14 of the new spec lists what carries forward. | all |
| DECISION-NEEDED | Corridor demonstration figures (14 cells, 7 dB) on the public Energy page, or deck only. Escalation below; until answered the figures do not render (§0.1). | §13.2, `COPY_ENERGY` `[approve]` lines, NRG-1, NRG-3, ES-ENERGY-1 |
| OPEN | Where DataOS-native solution SKUs 301 to. | §13.4, SOLN-1 |
| OPEN | Partner consent for white-labeled Klarety / Skyline captures; Skyline's written OK for DataMiner references (Jonathan obtaining). | §13.6, §9B, PROOF-1, PROOF-2 |

## Open escalations

**§13.2 — corridor figures** (logged by DEC-2)

> DECISION-NEEDED (2026-10-20): Publish the corridor demo figures (1,000-km corridor, 14 disturbance-suspected cells, 7 dB backscatter drop) on the public Energy page (`COPY_ENERGY` 4.3 proof line + Card A), or keep them in the ministry deck only.
>   Authorities consulted: T1 §0.1 makes figures conditional on Jonathan's approval (default until then: not rendered); §0.5 allows "1,000-km corridor" as unnamed wording and the deck already drops the place name. T2 §4.7/§13.2 leave it open; audit Drift 5 says the real work "can be shown" if unnamed, but records it as a 154 km corridor and 7.09 dB, so the 1,000-km extent needs confirming. T3 quatro-cascade not consulted (not in repo); T4 silent; T5 VOICE_GATE: every number real and attributed.
>   Option A — Publish (EN + ES) once Jonathan confirms the screened extent and partner consent: the page carries its only measured proof · honors audit Drift 5, §0.1 once approved.
>   Option B — Deck only: Card A runs without figures (already written), no measured result on the page · honors §0.1/§0.5 most cautiously.
>   Best practice: B2B case-study guidance (Scale VP; Orange Marketing on anonymous case studies) — specific numbers carry credibility, more so unnamed; confirm figures with the source first. Informs, does not decide.
>   Recommendation: A, conditional on the extent check; if 1,000 km cannot be confirmed, B.
>   Interim default: NRG-1 / ES-ENERGY-1 omit the 4.3 `[approve]` proof line (EN `:100-102`, ES `:258-260`); NRG-3 renders Card A without figures.
