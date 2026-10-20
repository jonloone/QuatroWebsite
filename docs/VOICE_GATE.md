# Voice Gate — the copy review every copy-bearing ticket must pass

Run this before marking any ticket done that adds or changes customer-facing copy.
It is part of the verify gate (`docs/TICKET_PROTOCOL.md` §4). A banned-word grep is
not enough; the subtle tells below need human eyes. Report results as
"voice gate: pass" or list the lines that failed.

Authorities: `.claude/skills/quatro-cascade` (positioning + language rules),
`.claude/skills/jonathan-voice` (prose tells). On conflict, quatro-cascade wins on
*what* to say, jonathan-voice wins on *how* it reads.

---

## A. Hard bans (grep these — zero hits allowed)

- `platform` (use operational model / utility / framework / integrator)
- `digital twin` (use real-time operational model)
- `OT/IT`, `OT/IT convergence`
- `empower`, `enable` (as marketing verb), `unlock`, `leverage`
- `revolutionary`, `game-changing`, `cutting-edge`, `world-class`, `best-in-class`
- `delve`, `landscape`, `tapestry`, `pivotal`, `underscore`, `testament`
- `seamless`, `seamlessly`
- exclamation points (`!`) in body copy
- `schedule a demo`, `get started` (CTA is "Talk to our team")

## B. jonathan-voice tells (human read — reject and rewrite)

- **Em-dash connective tissue.** An em-dash splicing two clauses for rhythm. Rewrite
  as two sentences or a period. (Occasional parenthetical aside is fine.)
- **"Not X, Y" antithesis.** "Not a product, a partnership." Cut the negation; state
  the positive.
- **Tricolons.** Three parallel items for cadence ("faster, smarter, stronger").
  A real two-item or four-item functional list is fine; the three-beat flourish is not.
- **Inflated significance.** "This changes everything," "the future of," "a new era."
- **Throat-clearing.** "In today's fast-paced world," "now more than ever."
- **AI hedging.** "It's worth noting," "it's important to remember."

## C. Positioning checks (quatro-cascade)

- **Buyer is the hero.** Copy says "your team," "you own," "your operators decide."
  Quatro **integrates / enables**, never "builds" or "delivers" for the buyer.
- **Right tier.** Marketing/utility pages stay Tier 1.5–2: name the four layers,
  one-line substrate hints. No "semantic substrate," "ontology," "knowledge graph,"
  no architecture diagrams (those live on the §5A Architecture page).
- **Outcome first.** Lead with what the buyer gets, not the substrate or mechanism.
- **Specificity (Shapiro test).** Could a competitor say this exact sentence? If yes,
  rewrite. "Data, reasoning, agents, workflows" passes; "end-to-end solution" fails.
- **Ownership.** Where relevant: you own the model, the deployment, the intelligence.
- **Human-in-the-loop.** Where AI behavior is described: agents propose, humans decide,
  every action is signed.

## D. Honesty (REALIGNMENT §0.1, §11)

- Every number is real and attributed (xOps figures to DataMiner; no invented metric).
- No fabricated track record. Domain-authority lines state real familiarity
  (regulators, conditions), never an invented client or engagement.

---

## How a ticket reports the gate

```
voice gate: pass  (A grep clean; B/C/D read clean)
```
or
```
voice gate: FAIL
  - hero.sub uses "seamless" (A)
  - card 2 is a tricolon (B)
  - "leading platform" (A: platform) → "the operational model layer"
```
A failing gate keeps the ticket `[~]`; fix and re-run. Never mark done on a red gate.
