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
| 2026-10-20 | The geospatial analysis capability is named **"Quatro Klarety"** on every tier (as hardware is "the Quatro IoT & Edge Suite"). One plain-language line below Tier 1 may say it is delivered with our earth-observation partner Klarety. | REALIGNMENT_2026-10-20 §1b, §5A; `COPY_ENERGY_2026-10-20.md` |
| 2026-10-20 | DataMiner xOps is named from How-it-works down; DataOS, ECR, Second Wind, SES/Intelsat/Telesat, SMARTS, TEKTELIC, IoT Orbital are never named on Quatro pages. | §1c |
| 2026-10-20 | Identity line: "Headquartered in Quito, Ecuador, with a US entity." Active markets: Ecuador, Colombia, Venezuela, Panama, Guyana; MENA via channel. | §1e |
| 2026-10-20 | The 2026-06-08 spec (Sense → Unify → Act, Quatro Field page) is retired; §14 of the new spec lists what carries forward. | all |
| OPEN | Corridor demonstration figures (14 cells, 7 dB) on the public Energy page, or deck only. | §13.2, `COPY_ENERGY` `[approve]` lines |
| OPEN | Price bands on the engagement page, or timeline and gates only. | §13.3, HIW-2 |
| OPEN | Where DataOS-native solution SKUs 301 to. | §13.4, SOLN-1 |
| OPEN | Agriculture and aquaculture published as "emerging" now, or held. | §13.5, IND-5 |
| OPEN | Partner consent for white-labeled Klarety / Skyline captures. | §13.6, PROOF-1 |
| OPEN | Live domain and Netlify source branch. | §13.7, DEC-1 |
