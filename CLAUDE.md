# CLAUDE.md — Quatro marketing website

The Quatro marketing site. Astro 5 + React islands, Tailwind, npm. Bilingual
(en-US default, es mirror under `src/pages/es/`). Content collections under
`src/content/` (industries, solutions, use-cases, etc.).

## Session workflow

The active queue is `BACKLOG.md` (repo root), governed by `docs/TICKET_PROTOCOL.md`.
Run `/next-ticket` to work the next unblocked ticket. **No SHA → not done. One ticket
per commit. The ledger points at the spec; it never re-specs.** The current spec is
`docs/REALIGNMENT_2026-10-20.md` (three-layer realignment: territory, operation, Quatro's layer;
Sprint 0 = Energy for the Ministerio de Ambiente y Energía). The 2026-06-08 spec is retired.

When a ticket hits a scope/design/copy fork the spec doesn't settle, the `planner`
subagent walks `docs/DECISION_AUTHORITIES.md` and either resolves it or escalates a
`DECISION-NEEDED` note. Research informs; the human decides.

## Commands

```bash
npm install        # bootstrap
npm run dev        # http://localhost:4321 (astro dev)
npm run build      # production build — the type/compile gate
npx astro check    # type-check .astro/.ts where it matters
npm run preview    # preview the build
```

No lint or test harness is configured. Visual/copy tickets name a **manual check** as
their `verify:` and report "needs human eyes" — never silently auto-pass.

**Copy gate.** Any ticket touching customer-facing copy must pass `docs/VOICE_GATE.md`
and report "voice gate: pass". Finished copy lives in the `docs/COPY_*` decks (mapped
in `BACKLOG.md` → Copy decks) — paste from the deck, don't free-write.

## Authorities (precedence — see docs/DECISION_AUTHORITIES.md)

1. Invariants — `docs/REALIGNMENT_2026-10-20.md` §0 (never render invented state;
   mission + hero verbatim; buyer is the hero; no named early engagements; Spanish is
   first-class; visual system fixed) and §1 naming rules (DataMiner and Klarety named from
   How-it-works down; DataOS, ECR, Second Wind, satellite operators and hardware vendors
   never named).
2. Recorded decisions — the realignment spec + prior `docs/` audits.
3. Positioning — `.claude/skills/quatro-cascade` (industrial AI integrator, four-layer
   stack, tiered transparency, ownership, human-in-the-loop).
4. Design system — `.claude/skills/quatro-ui-system`.
5. Brand voice — `.claude/skills/jonathan-voice` + quatro-cascade language rules.

## Brand guardrails (REALIGNMENT_2026-10-20 §0.2 / VOICE_GATE — enforce on every string)

Banned: "platform" (use framework / integrator / utility), "OT/IT",
"empower/enable/unlock/leverage", "revolutionary/game-changing/cutting-edge/
world-class/best-in-class", exclamation points, em-dash connective tissue, "not X, Y"
antitheses, and delve/landscape/tapestry/pivotal/underscore/testament. The buyer is
the hero; Quatro integrates and enables, it does not "build" or "deliver" for them.

## Conventions

- Reuse existing components (`src/components/`) before adding new ones.
- Every `<img>` gets `class="img-technical"`; dark sections use `bg-quatro-ink`.
- Mirror en-US changes into `src/pages/es/` and `*-es` content where the ticket says
  so (parity is tracked separately; don't auto-translate unless the ticket asks).
- Start work only on a clean tree (`git status --porcelain`). One ticket per commit,
  staged explicitly.
