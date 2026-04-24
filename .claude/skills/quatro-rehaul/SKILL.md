---
name: quatro-rehaul
description: >
  Driver skill for the Quatro design language rehaul program. Kicks off each phase
  of the eight-week program (install, patches, sprint-1 through sprint-4, status).
  Use this whenever Jonathan says "kick off the rehaul," "run the rehaul," "start
  sprint N," "apply the rehaul patches," "rehaul status," or uses the explicit
  `/quatro-rehaul [phase]` slash command. This is the top-of-funnel skill —
  delegates to quatro-sensor-assets, quatro-notation-layer, quatro-motion-assets,
  quatro-ui-system, quatro-cascade, jonathan-voice, and image-generation as the
  work requires.
arguments:
  - phase
---

# Quatro Rehaul — Driver Skill

The eight-week driver for the Quatro design language expansion. One skill, seven phases, driven by a `phase` argument.

## Phases

Jonathan invokes this skill with one argument. Each phase has a distinct prompt, deliverable set, and success criteria.

| Phase | What it does |
|---|---|
| `install-check` | Verify the installer ran. Confirm three new skills are present, asset dirs exist, manifests staged. |
| `apply-patches` | Apply the three patches from `skills-package/updates-to-existing/` to `quatro-ui-system`, `image-generation`, `technical-diagrams` skills. |
| `sprint-1` | Weeks 1–2. Build NotationSurface + CaptionBlock components, audit components, banned-verb grep. |
| `sprint-2` | Weeks 3–4. Source 15 seed sensor assets, test Sentinel Hub fetch + point cloud render, ship one composite hero. |
| `sprint-3` | Weeks 5–6. Rebuild three pages (critical-infrastructure, defense, homepage), kill CtaBanner, ship first motion hero. |
| `sprint-4` | Weeks 7–8. Voice pass, H1 cuts, first-line rewrites, caption discipline, peer-brand sanity check, full preflight. |
| `status` | Report current state — asset count, page rebuild status, sprint progress, blockers. |

Default phase if none supplied: `status`.

## Routing Logic

```
User says ...                              → phase
─────────────────────────────────────────────────────────
"kick off the rehaul"                      → install-check, then sprint-1
"apply the rehaul patches"                 → apply-patches
"start sprint 1" / "begin sprint 1"        → sprint-1
"start sprint 2" / "next sprint"           → sprint-2
"start sprint 3"                           → sprint-3
"start sprint 4" / "final sprint"          → sprint-4
"rehaul status" / "where are we"           → status
"rehaul install check"                     → install-check
/quatro-rehaul <phase>                     → <phase>
```

If the user's intent is ambiguous, ask once which phase and then proceed.

---

## Phase: `install-check`

Before any phase runs, verify the install completed. Run this check:

```bash
# Are the three new skills in place?
ls -d .claude/skills/quatro-sensor-assets .claude/skills/quatro-notation-layer .claude/skills/quatro-motion-assets 2>&1

# Are the asset directories in place?
ls -d public/images/sensor public/motion public/assets/notation manifests 2>&1

# Are the manifest files staged?
cat manifests/sensor-assets.json manifests/motion-assets.json 2>&1
```

**If any check fails:**
> The installer did not complete. Run `./install-quatro-rehaul.sh` from the repo root, then retry.

**If all checks pass:**
> Install verified. Three new skills present. Asset directories in place. Manifests staged. Ready to apply patches (`/quatro-rehaul apply-patches`) or start sprint 1 (`/quatro-rehaul sprint-1`).

---

## Phase: `apply-patches`

Apply the three patches from `skills-package/updates-to-existing/` to the corresponding skills in `.claude/skills/`. Each patch doc has numbered patches (1, 2, 3, ...) that insert or modify specific sections.

**Workflow:**

1. Read the current state of all three target skills:
   - `.claude/skills/quatro-ui-system/SKILL.md`
   - `.claude/skills/image-generation/SKILL.md`
   - `.claude/skills/technical-diagrams/SKILL.md`

2. For each patch doc in `skills-package/updates-to-existing/`, read the patch instructions and apply each numbered patch to the target SKILL.md. Use the Edit tool with precise old/new strings derived from the patch doc.

3. For patches that create new files (e.g., `references/STYLE-BRIEF-ECO.md`, new Quatro templates in `technical-diagrams/templates/`), use the Write tool.

4. For patches that update JSON (`assets/brand-styles.json`), use Edit to insert the new key.

5. After all three patches are applied, verify:
   - Each target SKILL.md still has valid YAML frontmatter.
   - New sections are present.
   - No existing content was removed.
   - The files parse cleanly.

6. Git commit:
   ```bash
   git add .claude/skills/quatro-ui-system .claude/skills/image-generation .claude/skills/technical-diagrams
   git commit -m "Apply rehaul patches to quatro-ui-system, image-generation, technical-diagrams"
   ```

**Success criteria:**
- All three patches applied in full.
- Files parse with valid frontmatter.
- Git checkpoint taken.
- Report what was changed per file.

**If any patch is ambiguous** (e.g., the current SKILL.md doesn't have the exact section the patch expects), pause and ask Jonathan before making up an insertion point.

---

## Phase: `sprint-1`

**Two weeks. Foundations.**

Load these skills: `quatro-cascade`, `quatro-ui-system`, `quatro-sensor-assets`, `quatro-notation-layer`, `jonathan-voice`.

Read these docs first:
1. `FOUNDATION-CAPITAL-INSPIRED-AUDIT-PLAN.md`
2. `QUATRO-DESIGN-LANGUAGE-EXPANSION.md`
3. `QUATRO-DESIGN-LANGUAGE-EXPANSION-ADDENDUM.md`

**Deliverables:**

1. **Build `NotationSurface.astro`** at `src/components/ui/NotationSurface.astro` with all 14 modes:
   - `photo`, `typographic`, `schematic`, `artifact`, `dither`, `numerical`, `lidar`, `sar`, `rf-waterfall`, `ml-latent`, `earth-obs`, `splat`, `composite-split`, `biomimetic-pair`, `earth-obs-timeseries`, `density-flow`.
   - Accept `mode`, `src`, `block` (forest/charcoal/paper), `notation`, `notationPosition`, `caption`.
   - Use `NotationMark.astro` from `quatro-notation-layer/templates/` as the mark sub-component — copy to `src/components/ui/NotationMark.astro`.

2. **Build `CaptionBlock.astro`** at `src/components/ui/CaptionBlock.astro` per the caption-template reference in `quatro-sensor-assets`. Two lines: mono instrument metadata, Reckless operator note, optional notation target.

3. **Component audit.** Walk `src/components/marketing/` and `src/components/ui/` and produce a markdown report listing:
   - Components that need the expansion treatment (priority: `Hero.astro`, `BlogGrid.astro`, `IndustryHubCard.astro`, `BentoUseCases.astro`, `CtaBanner.astro` for removal).
   - What the treatment is for each.
   - Estimated LOC change.

4. **Banned-verb grep** against `src/content/`:
   ```bash
   grep -rniE "empowering|enabling|powering|unlocking|seamless|robust|cutting-edge|leverage|synergize|delve|tapestry|pivotal|testament" src/content/
   grep -rniE "transform" src/content/ | grep -viE "data transform|transformation pipeline"
   ```
   Produce a fix list (file, line, phrase, suggested replacement). Do not rewrite content yet.

**Git checkpoint at end of sprint:**
```bash
git add src/components/ui/NotationSurface.astro src/components/ui/NotationMark.astro src/components/ui/CaptionBlock.astro docs/sprint-1-audit.md docs/sprint-1-banned-verbs.md
git commit -m "Sprint 1: NotationSurface, NotationMark, CaptionBlock; component audit; banned-verb fix list"
```

**Success criteria (completion test):**
- [ ] Three components render at test paths.
- [ ] Component audit is a markdown file with at least ten components reviewed.
- [ ] Banned-verb fix list has at least ten entries if the site has ten offenders.
- [ ] Git checkpoint taken.

---

## Phase: `sprint-2`

**Two weeks. Sensor assets + first real pipeline runs.**

Load: `quatro-sensor-assets`, `quatro-motion-assets`, `quatro-notation-layer`, `quatro-ui-system`, `quatro-cascade`, `jonathan-voice`.

**Deliverables:**

1. **Seed sensor library — 15 assets:**
   - 3 LIDAR plates (USGS 3DEP or Ontario GeoHub tiles for energy + critical infrastructure).
   - 3 SAR plates (Sentinel-1 coastal/urban for LATAM content).
   - 3 EO time-series pairs (Landsat 1985/2025).
   - 2 multispectral agricultural (Sentinel-2).
   - 2 RF waterfalls (Jonathan provides SDR captures; skill processes).
   - 2 gaussian splat stills (Jonathan provides `.splat` files; skill processes).

   For each: process per `quatro-sensor-assets/references/processing-recipes.md`, name per `asset-naming.md`, caption per `caption-template.md`, apply notation, write manifest entry.

2. **Test `scripts/fetch-sentinel.sh`** with Jonathan's Sentinel Hub credentials. Confirm end-to-end.

3. **Test `scripts/render-pointcloud.py`** against one real `.laz` file. Flesh out stubs if encountered.

4. **Composite hero.** One LIDAR + SAR composite for the critical-infrastructure industry page. Same subject both halves. Bridging notation. Caption: "Two instruments, one truth."

**Git checkpoint:**
```bash
git add public/images/sensor manifests/sensor-assets.json
git commit -m "Sprint 2: 15 seed sensor assets, Sentinel Hub integration, composite hero"
```

**Success criteria:**
- [ ] `manifests/sensor-assets.json` has 15+ published entries.
- [ ] Every entry has `license` field populated.
- [ ] `scripts/fetch-sentinel.sh` tested against real API.
- [ ] `scripts/render-pointcloud.py` tested against real `.laz`.
- [ ] One composite hero at `public/images/sensor/composite/`.

---

## Phase: `sprint-3`

**Two weeks. Page rebuilds.**

Load: `quatro-ui-system`, `quatro-cascade`, `quatro-latam`, `quatro-sensor-assets`, `quatro-motion-assets`, `quatro-notation-layer`, `jonathan-voice`.

**Deliverables:**

1. **Rebuild three pages using the new system:**
   - `src/pages/industries/critical-infrastructure.astro`
   - `src/pages/industries/defense.astro`
   - `src/pages/index.astro` (homepage — validate against expansion doc before touching)

2. **Kill CtaBanner.** Replace every usage with `DualCta`. Delete the component.

3. **First motion hero.** LIDAR sweep for critical-infrastructure hero. Follow `quatro-motion-assets` Pattern 1.

4. **Per-page preflight.** Run the preflight checklist from `quatro-ui-system` on each rebuilt page. Report pass/fail per item.

**Git checkpoint per page:**
```bash
# After each page
git add src/pages/industries/<page>.astro public/motion/lidar-sweep
git commit -m "Sprint 3: rebuild <page> with expanded design system"
```

**Success criteria:**
- [ ] Three pages rebuilt.
- [ ] CtaBanner removed from codebase.
- [ ] One LIDAR sweep MP4 shipped with poster frame.
- [ ] Preflight passes on all three rebuilt pages.

---

## Phase: `sprint-4`

**Two weeks. Editorial pass and verification.**

Load: `quatro-cascade`, `quatro-latam`, `jonathan-voice`, `quatro-ui-system`.

**Deliverables:**

1. **H1 cut.** Every page H1 7 words or fewer. Produce a before/after list. Apply.

2. **First-line-as-fact rewrite.** Every page's first body line is an operational fact, not a value statement. Produce a before/after list. Apply.

3. **Apply banned-verb fix list** from Sprint 1.

4. **Two-part eyebrow** (`CATEGORY · ROUTE` or `CATEGORY · AUTHOR`) on every page without one.

5. **Caption discipline.** Every sensor image has instrument metadata + 6–12 word operator note. Audit and fix.

6. **Peer-brand sanity check.** Open Quatro alongside BeZero, Jetree.ai, Radiant Earth, HEDRON, SATREV. Note any page that feels alien. Document in `docs/sprint-4-peer-check.md`.

7. **Full preflight.** Run `quatro-ui-system` preflight against every primary page. Produce failure list.

**Git checkpoint:**
```bash
git add src/pages src/content docs/sprint-4-*
git commit -m "Sprint 4: voice pass, caption discipline, peer check, final preflight"
```

**Success criteria:**
- [ ] Zero H1s over 7 words.
- [ ] Zero banned verbs in `src/content/**`.
- [ ] Every page has two-part eyebrow.
- [ ] Every sensor asset has proper caption.
- [ ] Peer-brand check complete and documented.
- [ ] Full preflight pass.

---

## Phase: `status`

Default phase. Report where things stand.

Run:

```bash
# Skill installation
ls -d .claude/skills/quatro-* 2>&1 | sort

# Asset counts
jq 'length' manifests/sensor-assets.json 2>/dev/null
jq '[.[] | select(.real_or_mimic == "real")] | length' manifests/sensor-assets.json 2>/dev/null
jq '[.[] | select(.real_or_mimic == "mimic")] | length' manifests/sensor-assets.json 2>/dev/null
jq 'length' manifests/motion-assets.json 2>/dev/null

# Components present
ls -1 src/components/ui/NotationSurface.astro \
      src/components/ui/NotationMark.astro \
      src/components/ui/CaptionBlock.astro 2>&1

# Git log of rehaul commits
git log --oneline --grep="Sprint\|rehaul" -20
```

Report:
- Which skills are installed
- Asset count (real vs. mimic)
- Which components exist
- Last rehaul-related git commit
- Which sprint appears to be active
- Any obvious blockers

Keep the report under 300 words.

---

## Sprint Handoff Rules

Between sprints, always:
1. Git commit the sprint's work with the message convention above.
2. Run `/quatro-rehaul status` to confirm completion.
3. Only advance to the next sprint when the current sprint's success criteria all pass.

If a sprint's success criteria cannot be met because of missing source material (e.g., Jonathan has not yet provided LIDAR captures for sprint 2), pause the sprint and document the blocker in `docs/rehaul-blockers.md`. Resume when unblocked.

## Related Skills

- `quatro-sensor-assets` — primary skill for all sensor work.
- `quatro-notation-layer` — primary skill for all annotation work.
- `quatro-motion-assets` — primary skill for motion work.
- `quatro-ui-system` — component and visual system.
- `quatro-cascade` / `quatro-latam` — messaging.
- `jonathan-voice` — prose voice.
- `image-generation` — mimic fallback for still images.

## Source Files in This Skill

- `SKILL.md` — this file.
- No supporting references needed — the skill delegates to the planning docs in the repo root.
