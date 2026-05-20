# Claude Code Handoff — Spanish Locale Parity (Code Tree)

**Date:** 2026-05-20
**Run in:** this repo (`/Users/dataos/Code/LMIQuatro/QuatroWebsite`) — the tree the dev server serves.
**Mission:** Bring the Spanish locale into parity with the live English copy. The EN side was reworked May 20 (StoryBrand operator-as-hero headlines, full solution layout, voice cleanup). The ES side is weeks behind and partially translated.

> **IMPORTANT — anchor to THIS tree's copy, not any external doc.** A previous version of this handoff was written against a different positioning ("industrial AI integrator for the americas," "the intelligence stack"). That is NOT this tree's live copy. Translate from the actual English in `src/pages/index.astro`, `src/content/industries/*.md`, and `src/content/solutions/*.md` as they exist right now. When in doubt, read the EN file and translate that.

---

## Step 1 — Read the live EN copy first

The canonical English the ES side must mirror:

**Homepage H1 (`src/pages/index.astro`):** "Industrial AI for working operations."

**Homepage subhead:** "Quatro wires operational data, reasoning engines, AI agents, and operator workflows into a working intelligence stack for your industry. Deployed in weeks, governed by your team, and owned by your organization from day one."

**Homepage meta description:** "Quatro integrates operational data, reasoning engines, AI agents, and human-in-the-loop workflows into customer-owned industrial AI systems that go live in weeks."

**Industry headline pattern (StoryBrand — the operator is the hero; lead with their outcome in plain language; the operator does the verb, Quatro is the guide):**
- Energy: "Catch the grid or pipeline fault before it cascades into an outage."
- Water: "Half the water your utility treats is gone before it reaches a tap."
- Industrial: "Catch the failure weeks early, and hand your operator the fix."
- Cities: "Turn a 311 call into a dispatched fix, not a five-department relay."
- Each industry/solution H1 follows this shape: operator-as-hero, NO "Reasoning that…" opener and NO "Industrial AI for…" template. Read each file for its exact line.

**Industry subhead pattern:** "[Operators] already have [data sources]. Quatro connects the data, reasoning, agents, and workflows so [teams] can move from signal to approved action."

Read the actual files before translating. Do not assume.

---

## Step 2 — Canonical Spanish vocabulary (PROPOSED — needs native validation)

Jonathan, Esteban, or Paul Sandoval should confirm these before they go live. Starting points, not final.

| English (live) | Spanish (proposed) | Note |
|---|---|---|
| Industrial AI | IA industrial | Category |
| Industrial AI for working operations | IA industrial para operaciones en marcha | Homepage H1. Alt: "para operaciones reales" |
| working intelligence stack | stack de inteligencia operativa | "stack" is common in LATAM tech; "pila" is the formal alternative |
| reasoning engines | motores de razonamiento | |
| AI agents | agentes de IA | |
| operator workflows | flujos de trabajo del operador | |
| human-in-the-loop | con supervisión humana | Alt: "con humano en el circuito" |
| move from signal to approved action | pasar de la señal a la acción aprobada | The core value phrase |
| Deployed in weeks | Desplegado en semanas | |
| owned by your team / your organization | propiedad de su equipo / su organización | |
| governed by your team | gobernado por su equipo | |

**Headline note:** The EN headlines are StoryBrand — the operator is the hero and does the verb (Catch, See, Find, Turn, Re-route), in plain language. Translate to keep the operator as the actor. Spanish imperatives work well here (e.g. "Detecta la falla de red o de oleoducto antes de que se propague" / "Encuentra la fuga antes de que caiga la presión"). Do NOT reintroduce a product-as-subject opener ("Razonamiento que…", "La IA que…"). The customer is the hero, never the technology.

**Rejected vocabulary (ES):** `utilidad de inteligencia`, `red de inteligencia`, `inteligencia ciberfísica`, `integrador de sistemas de inteligencia`. Banned verbs as rhetoric: `empoderar`, `habilitar`, `potenciar`, `desbloquear`. Use formal "usted," not "tú."

---

## Step 3 — Files to edit (in order)

### Phase A — Homepage (`src/pages/es/index.astro`)
- Translate the H1 to match "Industrial AI for working operations."
- Translate the subhead and meta description from the live EN above.
- **Check for and fix any broken `/es/platform/*` links** — confirm whether this file references routes that don't exist (`/es/platform`, `/es/platform/command|connect|operate`). If it does, repoint to the real ES routes (`/es/utility/*` if they exist) or remove. Verify every link resolves.

### Phase B — ES industry content (`src/content/industries-es/*.md`)
Only 5 of 9 exist (run `ls`). For each existing file, translate the new EN operator-as-hero H1 + subhead from its EN counterpart in `src/content/industries/`. Decide with Jonathan whether to translate the missing 4 now or queue separately.

### Phase C — ES solution content (`src/content/solutions-es/*.md`)
Only 7 of 23 exist. Same approach: translate the existing 7 from their EN counterparts (operator-as-hero H1s). Queue the missing 16 unless Jonathan wants them now.

### Phase D — ES static pages
`src/pages/es/company/about.astro`, `src/pages/es/industries/index.astro`, `src/pages/es/solutions/index.astro`, `src/pages/es/contact/*`. Translate hero/section copy from EN counterparts. Light cleanup on resources/legal.

---

## Step 4 — Acceptance criteria

- [ ] `npm run dev` starts clean; `localhost:4321/es/` renders the new H1.
- [ ] No broken `/es/platform/*` (or any) links from ES pages — every link resolves.
- [ ] ES industry + solution heroes use the validated Spanish vocabulary.
- [ ] Grep returns zero: `grep -rIn "utilidad de inteligencia\|red de inteligencia\|inteligencia ciberfísica" src/pages/es/ src/content/*-es/`
- [ ] Formal "usted" throughout; no `empoderar/habilitar/potenciar/desbloquear` as rhetoric.

## Step 5 — Test

```bash
npm run dev
# check: /es/, /es/industries/<slug>, /es/solutions/<slug>, /es/company/about, /es/contact/demo
```
Click every nav link on the ES pages; confirm each resolves.

## Step 6 — Flag for Jonathan (ASK, don't guess)
1. `stack de inteligencia operativa` vs `pila de inteligencia` — pick one, use consistently.
2. How to render the operator-as-hero headlines in natural Spanish (imperative "Detecta…/Encuentra…" vs second-person) — native judgment. Never use a product-as-subject opener.
3. Translate the 4 missing industries + 16 missing solutions now, or queue separately?
4. Whatever the broken `/es/platform/*` references should point to.

End with a summary: files edited, files skipped (with reasons), translation calls needing Jonathan's review, broken routes found/fixed.
