# Claude Code Handoff — Code-Tree Cleanup (Routes + Build + Voice)

**Date:** 2026-05-20
**Run in:** this repo (`/Users/dataos/Code/LMIQuatro/QuatroWebsite`) — the tree the dev server serves.
**Mission:** Three discrete cleanup passes on the live tree. Do them in order. Each is mechanical and well-scoped. None should change positioning or layout — those were settled May 20.

---

## Context (what already happened, do NOT redo)

On May 20 the following landed in this tree and are correct — leave them:
- `src/pages/solutions/[slug].astro` was rebuilt to use the rich industry layout (full-bleed `IndustryHero` + editorial sections). All 23 solution pages now use it.
- All 8 active industry H1s + 23 solution H1s were rewritten to StoryBrand operator-as-hero headlines: the operator does the verb (Catch, See, Find, Turn, Re-route) and Quatro is the guide. No "Reasoning that…" and no "Industrial AI for…" openers. Finance is a parked placeholder — leave it.
- The shared "Integrator Approach" dither-break text and the 9 solution hero subheads were cleaned of em-dashes/puffery.

Do not touch headlines, the solution renderer, or the homepage. This handoff is cleanup only.

---

## PASS 1 — Route / 404 audit

The site has had route gaps (a missing `solutions/[slug].astro` 404'd every solution page until May 20). Find any remaining broken internal links.

**Method:**
1. Extract every internal href referenced in the codebase:
   ```bash
   grep -rIEho "['\"]/[a-z][a-z0-9/_-]+['\"]" src/ --include='*.astro' --include='*.md' --include='*.ts' \
     | tr -d "'\"" | sort -u > /tmp/refs.txt
   ```
2. For each referenced path, confirm a matching page or dynamic route exists. A path resolves if any of these exist:
   - `src/pages{path}.astro`
   - `src/pages{path}/index.astro`
   - a `[slug].astro` in the parent dir (dynamic route) whose collection contains the slug
   - a deeper `[x]/[y].astro` dynamic route that matches
3. Known-suspect patterns to check specifically (these were broken in a sibling tree):
   - `/use-cases/*` — confirm whether a `use-cases/[slug].astro` route exists or whether these should point to `/industries/<parentIndustry>/<slug>`
   - custom `/contact/<slug>` beyond `demo|sales|support|index` (e.g. `/contact/energy-specialist`, `/contact/civic-assessment`) — repoint to `/contact/demo` or `/contact/sales`
   - `/platform` and `/platform/*` — the site uses `/utility/*` now; repoint or remove
   - `/national-intelligence/*` — retired; confirm no live page links to it
   - `/capabilities`, `/company` (bare) — repoint to `/solutions`, `/company/about`
4. Fix every broken ref by repointing to the correct existing route. Do NOT create stub pages unless a real page is clearly intended and missing.
5. Report the before/after list of broken routes.

**Acceptance:** zero internal hrefs resolve to a 404. Re-run the extraction and confirm every path has a renderer.

---

## PASS 2 — Build smoke test

Confirm the May 20 changes compile and the site builds clean.

```bash
npm install
npm run build
```

- The build must succeed with no content-collection schema errors and no broken-import errors.
- If `astro check` is configured, run it and report type errors (do not fix unrelated pre-existing type errors; just report them).
- If the build fails, the most likely cause is the rebuilt `solutions/[slug].astro` referencing a field a solution `.md` lacks. Fix by guarding the field access (the renderer already guards `programs`, `platformMapping`, `proofPoint`, and `featuredCaps` — extend the same pattern if a new gap appears).

**Acceptance:** `npm run build` exits 0. Report the output summary (page count, any warnings).

---

## PASS 3 — Body-copy voice sweep

The hero subheads and the shared integrator text were cleaned May 20. The deeper body copy was NOT. Sweep it.

**Scope:** `src/content/industries/*.md`, `src/content/solutions/*.md`, `src/content/use-cases/*.md` — specifically the `challenges`, `capabilities`, `platformMapping`, and `proofPoint` fields (the hero blocks are already clean).

**Find:**
```bash
# em-dash as connective tissue (space-emdash-space)
grep -rIn " — " src/content/industries/ src/content/solutions/ src/content/use-cases/
# banned vocabulary
grep -rIniE "\b(empower[a-z]*|enable[a-z]*|enabling|powered|powering|unlock[a-z]*)\b" \
  src/content/industries/ src/content/solutions/ src/content/use-cases/
```

**Fix rules:**
- **Em-dash as connector** (where a period or comma works): replace with `. ` or `, `. Keep em-dashes only inside genuine parenthetical asides (rare).
- **Banned verbs:** `enable/enables` → `let / supports / drives / triggers` (pick by context); `powered/powering` → `built on / runs on / driven by` (EXCEPTION: keep "Powered by [Partner]" if it's a literal partner credit); `empower` → reword so the operator is the actor; `unlock` → `surface / open up / make available`.
- Operator stays the grammatical subject where possible.
- Do NOT introduce rejected nouns (`intelligence utility`, `intelligence network`, `cyberphysical`). The live tree uses `industrial AI`, `working intelligence stack`, `reasoning engines`, `AI agents`, `operator workflows`. Match that.
- Do NOT rewrite for positioning — this is punctuation + banned-word cleanup only. Preserve meaning.

**Acceptance:**
- `grep -rIn " — " src/content/{industries,solutions,use-cases}/` returns zero (or only documented parenthetical exceptions).
- The banned-verb grep returns zero outside literal "Powered by [Partner]" credits.

---

## Closeout

End with a single summary report:
- PASS 1: broken routes found and how each was fixed
- PASS 2: build result (exit code, page count, warnings)
- PASS 3: count of em-dash + banned-verb fixes per file
- Anything that needs Jonathan's decision (e.g. a referenced page that's genuinely missing and may need to be created)

**Reference docs in this repo:** `QUATRO-POSITIONING-V2-CANONICAL.md` (positioning vocabulary), `docs/industry-headline-audit-2026-05.md` and `docs/sitewide-realignment-audit-2026-05.md` (history). Note: those audit docs were written against a sibling tree's copy — use them for the voice *rules*, not as a description of this tree's current state.
