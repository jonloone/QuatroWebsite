# Decision Authorities — what to consult, in what order

When a ticket hits a scope, design-system, or product/copy question, resolve it
against these authorities **in this precedence**. Higher wins on conflict. Only
escalate to the human when the authorities are silent or genuinely conflict.

Underneath: **research informs, it never overrides.** External best practice is the
last tier and only ever produces *options for the human*. The `planner` subagent runs
this walk.

## Precedence (highest first)

1. **Invariants — non-negotiable.** `docs/REALIGNMENT_2026-06-08.md` §0. Never render
   invented state; keep the mission and hero verbatim; keep all nine industries; the
   buyer is the hero; the visual system is fixed. A violation stops the work; it is
   not a call.
2. **Recorded decisions — already settled.** This realignment spec
   (`docs/REALIGNMENT_2026-06-08.md`, all sections) and the prior audits in `docs/`.
   **Most forks are answered here — look before escalating.** The two source planning
   docs (audit + blueprint) live in the LMIQuatro working folder if deeper rationale
   is needed.
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
