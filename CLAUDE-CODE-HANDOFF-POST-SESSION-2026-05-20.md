# Claude Code Handoff — Post-Session Recovery + Verification (2026-05-20)

**Run in:** this repo (`/Users/dataos/Code/LMIQuatro/QuatroWebsite`) — the tree the dev server serves and that deploys.
**Mission:** Recover the dev server (a Cowork session corrupted its vite cache), then verify a batch of content edits + 15 new images that landed this session. Do the passes in order. PASS 0 is mandatory and first.

You can run `npm run build` and `npm run dev` here — you're on the correct platform (the prior session ran in a linux-arm64 sandbox and could not).

---

## What changed this session (verify, do NOT redo)

All edits were **content-only** (no route/component/config changes). Confirm with `git status`. This session's files:

- `src/content/industries-es/{cities,energy,industrial,infrastructure}.md` — Spanish hero H1 + tagline rewritten off the banned "IA industrial para…" pattern to StoryBrand operator-as-hero (matching the EN twins).
- `src/content/industries-es/defense.md` — fully ported to the **National Security** framing (title "Seguridad Nacional", H1 "Vea la mina ilegal y la embarcación oscura…", 5 `programs`, 5 capabilities, 4 challenges, platformMapping, proofPoint). This file now uses the shared `industriesCollection` schema's `programs` field (schema already supports it).
- `src/content/insights/*.md` (20 files) — voice/vocab sweep: removed **all** em-dash connective tissue (249 spaced + 33 unspaced → parentheticals for asides, commas/periods for connectors) and 8 banned-vocab fixes (powered/enabling/empower/landscape/robust). Literal electricity uses of "power" were intentionally left.
- `src/content/solutions/fleet-logistics.md` — tagline + retired-"discovery" microcopy fix.
- `src/content/solutions/physical-security.md` — "Schedule a Security Assessment" CTAs → "Talk to Our Team".
- `image-prompts/prompts/missing-images-batch.csv` — **new**, 15 grounded scene prompts.
- `public/images/*.png` — **15 new images** generated via Replicate (filled every previously-missing reference; site-wide missing-image count is now 0).

**NOT this session** (pre-existing uncommitted work in the tree — leave unless a pass below says otherwise): `src/content/industries/*.md` (EN), `src/content/solutions-es/*.md`, `src/pages/es/*.astro`, `src/pages/industries/[slug].astro`, `partners.astro`, and the untracked `src/pages/solutions/[slug].astro`.

---

## PASS 0 — Recover the dev server + revert an unintended lockfile change (DO FIRST)

A Cowork sandbox ran `astro build` against the hardcoded `cacheDir: '/tmp/vite-cache'` (see `astro.config.mjs`), corrupting the cache the running dev server shares. Result: localhost:4321 currently 500s on **every** route. The same build attempt also deleted 11 lines from `package-lock.json`.

```bash
# stop any running dev server first (Ctrl-C in its terminal)
rm -f .git/index.lock                 # stale lock left by the sandbox
git checkout -- package-lock.json     # revert the unintended 11-line deletion
rm -rf /tmp/vite-cache .astro         # clear corrupted caches
npm run dev                           # rebuilds cache cleanly
```

**Acceptance:** localhost:4321 homepage renders (not an error page). `git status` shows `package-lock.json` no longer modified.

---

## PASS 1 — Build smoke test

```bash
npm run build
```

- Must exit 0 with no content-collection schema errors. The likely-risk file is `industries-es/defense.md` (newly carries `programs`); the shared `industriesCollection` schema in `src/content/config.ts` already defines `programs`, so it should pass. If it fails there, report the exact zod error — do not loosen the schema.
- If `astro check` is configured, run it and report type errors (don't fix unrelated pre-existing ones).

**Acceptance:** `npm run build` exits 0. Report page count + any warnings.

---

## PASS 2 — Render verification (dev server)

With the dev server running, confirm these render cleanly (no 500, headline/images present):

- `/insights/pipeline-intelligence-beyond-scada` and 2–3 other insight posts — confirm the em-dash sweep reads naturally (asides in parentheses, no stray comma splices).
- `/solutions/fleet-logistics` and `/solutions/physical-security` — confirm tagline/CTA edits.
- `/industries/defense` and `/industries/transportation` — confirm the EN National Security + Logistics pages still render with their images.
- The 6 pages that received **new images**: `/industries/cities`, `/industries/energy`, `/industries/industrial`, `/solutions/port-operations`, `/solutions/environmental-governance`, and the 5 insight heroes (esg-reporting-cliff, after-the-spill, beyond-the-barrel, carbon-markets-data-integrity, three-compliance-streams). Confirm images load (no broken-image icons).

**Acceptance:** all the above render; new images display.

---

## PASS 3 — Spanish route investigation (conditional)

`/es/industries/[slug]` errored during the prior session, but that was likely just the corrupted cache (PASS 0). **After PASS 0, re-check `/es/industries/energy` and `/es/industries/defense`.**

- If they render → done, nothing to do.
- If they still error → the cause is the **pre-existing uncommitted modification** to `src/pages/es/industries/[slug].astro` (and possibly other `src/pages/es/*.astro`), which were modified before this session and left in a possibly-broken state. Diagnose the render error (check the Astro error overlay / `npm run dev` terminal output). The ES content itself is schema-valid (all 5 `industries-es/*.md` parse and pass the schema). Report the root cause and the fix before applying it — don't silently rewrite the route.

**Acceptance:** either ES industry pages render, or a clear diagnosis of the route-file issue is reported.

---

## PASS 4 — Visual QA on the 15 new images (optional)

The images were generated from `image-prompts/prompts/missing-images-batch.csv` using `google/nano-banana-pro`. Formats match their siblings: 5 capabilities at 1200×896 (4:3), 4 challenge icons at 1024×1024 (1:1), 6 heroes/editorial at 2752×1536 (16:9).

Eyeball them on the rendered pages. To regenerate any that miss (token in your shell or a project-root `.env` as `REPLICATE_API_TOKEN`):

```bash
python scripts/generate_images.py --csv image-prompts/prompts/missing-images-batch.csv --output public/images
# (skips files already on disk; delete the one you want to redo first, or pass --force)
```

---

## Closeout

End with a single report:
- PASS 0: dev server recovered? package-lock reverted?
- PASS 1: build exit code, page count, warnings.
- PASS 2: which pages verified rendering.
- PASS 3: ES pages render, or root-cause diagnosis.
- PASS 4: any images flagged for regeneration.
- Anything needing Jonathan's decision.

**Reference:** `skills/quatro-cascade` (messaging), `skills/jonathan-voice` (voice rules), `skills/image-generation` (image pipeline + bibles). Headline rule: operator is the hero/actor; never "Industrial AI for X" or "Reasoning that…" as an H1.
