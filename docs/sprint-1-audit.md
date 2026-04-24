# Sprint 1 — Component Audit

Produced by the `quatro-rehaul` driver, Sprint 1. Walks `src/components/ui/` (19 components, 3 new) and `src/components/marketing/` (36 components) and flags what each component needs to become conformant with the expanded Quatro design language.

Treatments ordered by **priority** (H / M / L / removal). LOC estimates are the *delta* — lines added/changed, not total lines after the change.

---

## Summary

| | Count | Action |
|---|---:|---|
| High-priority rebuild | **5** | Hero, BlogGrid, BentoUseCases, IndustryHubCard, HeroCanvas |
| Medium treatment | **8** | IndustryHero, IndustryGrid, IndustryShowcase, CapabilityBento, CapabilityBentoHub, FeatureShowcase, ProblemSolution, ProductProgression |
| Light-touch or already OK | **18** | Most smaller marketing + all UI atoms |
| Removal / archive | **2** | CtaBanner (replace with DualCta, already the standard), Placeholder (dev-only) |
| Already conformant | **3** | DualCta, Section (marketing + ui), Eyebrow |
| New (sprint 1 deliverable) | **3** | NotationSurface, NotationMark, CaptionBlock |

**Expected net change:** ~2,400 LOC added, ~400 LOC removed. Most net add comes from extending Hero, HeroCanvas, IndustryHubCard and BentoUseCases to host `NotationSurface` content. Most removal is dead JSX in `CtaBanner` + retirement of stylistic variants that the new design system collapses.

---

## High priority — rebuild

### `marketing/Hero.astro` — 141 LOC
- **Treatment:** Both variants (light, dark) currently render a title + subtitle + CTA on a flat background. The rehaul wants the hero to *host* a NotationSurface (any mode), with the text anchored to an asymmetric corner, not centered. Swap `backgroundImage` prop for a first-class `surface` slot that accepts a `NotationSurface`. Keep the existing scroll-opacity script. Kill the centered flex block; replace with a two-column 60/40 editorial grid at lg+.
- **LOC change:** +120 / −70.

### `marketing/HeroCanvas.astro` — 335 LOC
- **Treatment:** This is the current "home hero with dither canvas." The rehaul elevates the dither canvas into just one mode (`dither`) of `NotationSurface`. Port the canvas script into a reusable helper (`src/lib/dither.ts`) so both the `dither` mode of `NotationSurface` and the legacy home hero can share it. Then refactor HeroCanvas to render a `<NotationSurface mode="dither" />`. Net: large simplification.
- **LOC change:** +60 / −220.

### `marketing/BlogGrid.astro` — 156 LOC
- **Treatment:** Featured card + grid. The featured card should render its hero through `NotationSurface mode="photo"` (luminosity blend active on hover). Smaller grid cards need a two-part eyebrow (`CATEGORY · AUTHOR` per `quatro-visual-extensions` preflight). Add notation to featured card only.
- **LOC change:** +50 / −20.

### `marketing/BentoUseCases.astro` — 257 LOC
- **Treatment:** Four layouts (1/2/3/4 featured). Each "featured" tile is a natural NotationSurface host — they currently hardcode an `<img>` tag. Swap the raw `<img>` tags for `NotationSurface` with mode determined by the capability data (fall back to `mode="photo"`). This unlocks mixing sensor plates into bento tiles.
- **LOC change:** +90 / −60. Touches four layout branches.

### `marketing/IndustryHubCard.astro` — 135 LOC
- **Treatment:** The dither-canvas image side should become `NotationSurface mode="dither"`. The right-hand list of solutions needs caption discipline (font-mono eyebrow + Reckless items) already mostly there. Biggest win: centralise dither canvas code so `IndustryHubCard` stops owning its own dither script.
- **LOC change:** +40 / −55.

---

## Medium priority — treatment

### `marketing/IndustryHero.astro` — 54 LOC
- **Treatment:** This is the shared hero for industry pages (recently extracted from `defense.astro` etc.). Add optional `surface` slot for a NotationSurface; keep the existing text-only fallback so industry pages without sensor imagery still render.
- **LOC change:** +25 / −0.

### `marketing/IndustryGrid.astro`, `marketing/IndustryShowcase.astro`
- **Treatment:** Each card currently owns its own image. Route through NotationSurface. Keep layout; only the inner image block changes.
- **LOC change:** +20 / −15 each.

### `marketing/CapabilityBento.astro`, `marketing/CapabilityBentoHub.astro`
- **Treatment:** Same shape as BentoUseCases. Port image tiles to NotationSurface. Apply two-part eyebrow per preflight.
- **LOC change:** +30 / −20 each.

### `marketing/FeatureShowcase.astro`
- **Treatment:** Alternating image/text sections. Image side → NotationSurface. Copy side should receive caption-discipline audit.
- **LOC change:** +25 / −10.

### `marketing/ProblemSolution.astro`
- **Treatment:** Two-column editorial. Opportunities for a `composite-split` NotationSurface (problem vs. solution with bridging arrow notation). Significant visual upgrade for a small LOC delta.
- **LOC change:** +35 / −10.

### `marketing/ProductProgression.astro`
- **Treatment:** Three-step product reveal. Each step's visual → NotationSurface (could use `mode="numerical"` for the step number). Step connectors could become notation arrows.
- **LOC change:** +40 / −20.

---

## Light touch — already close

Each of these needs the two-part eyebrow (`CATEGORY · ROUTE` or `CATEGORY · AUTHOR`) added *if invoked from a page that doesn't already supply one*. Structural code unchanged.

- `marketing/AnnouncementBanner.astro`
- `marketing/CapabilityGrid.astro`, `CapabilityIndex.astro`, `CapabilityShowcase.astro`
- `marketing/ComparisonSection.astro`
- `marketing/ContactForm.astro` — no visual change; audit copy.
- `marketing/EditorialCapability.astro`, `EditorialOutcome.astro` — already in the right register.
- `marketing/FeatureGrid.astro`
- `marketing/FeaturedTestimonial.astro`, `TestimonialSection.astro` — voice pass only.
- `marketing/HubIconStrip.astro`
- `marketing/PlatformMapSection.astro`
- `marketing/ProofPointCard.astro`
- `marketing/ProtocolShowcase.astro`
- `marketing/SecurityGrid.astro`
- `marketing/SocialProofStrip.astro`
- `marketing/SoftwareOverview.astro`
- `marketing/StatStrip.astro`

**LOC change per:** +5 / −0 (eyebrow wiring), or voice-pass only.

---

## Removal / archive

### `marketing/CtaBanner.astro` — **delete**
- Only one caller remains: `src/pages/industries/networks.astro.retired` (already retired). No live callers.
- Sprint 3 step "Replace every usage with DualCta" is effectively already done. Sprint 3 action reduces to `rm src/components/marketing/CtaBanner.astro` and a one-line commit.
- **LOC change:** −94.

### `marketing/Placeholder.astro` — keep as dev scaffolding, mark deprecated.
- Acceptable to leave; add a top-of-file comment noting it is not a shippable component.

---

## UI atoms — `src/components/ui/`

| Component | LOC | Status |
|---|---:|---|
| `Button.astro` | — | Keep. Already in canonical form. Minor: audit against `anti-patterns.md` once that reference lands in `quatro-ui-system`. |
| `Container.astro` | — | Keep. |
| `Eyebrow.astro` | — | Extend to accept `route` / `author` as a second part. Tiny change. +15 LOC. |
| `FloatingPaths.tsx` | — | Keep (Framer Motion / visual). |
| `Heading.astro` | — | H1 rule change is editorial (sprint 4), not structural. Consider validating slot length with a warning in dev mode. |
| `IntelligenceRails.tsx` | — | Keep. Consider notation overlay in sprint 3 if visual calls for it. |
| `Link.astro` | — | Keep. |
| `OperationalModel.tsx`, `OperationalModelFlow.tsx` | — | Keep. Diagrams that would benefit from the Quatro Mermaid theme / palette fork (see `quatro-visual-extensions` → technical-diagrams overlay) in sprint 3 if rebuilt. |
| `Screenshot.astro` | 21 | Keep. Marginally redundant with NotationSurface `mode="photo"` — evaluate for folding in sprint 3. |
| `Section.astro` | — | Keep. |
| `SemanticDataProduct.tsx` | — | Keep. |
| `Subheading.astro` | — | Keep. |
| `Text.astro` | — | Keep. |
| `Wallpaper.astro` | — | Keep. Used by Screenshot. |
| **`NotationMark.astro`** | 107 | **NEW — Sprint 1 deliverable.** |
| **`NotationSurface.astro`** | ~230 | **NEW — Sprint 1 deliverable.** |
| **`CaptionBlock.astro`** | ~95 | **NEW — Sprint 1 deliverable.** |

---

## Cross-cutting observations

1. **Dither canvas is reimplemented in several places.** At least `HeroCanvas.astro` and `IndustryHubCard.astro` have their own dither-canvas scripts. Sprint 3 should extract `src/lib/dither.ts` and have both route through `NotationSurface mode="dither"`.

2. **`img-technical` class doesn't exist yet.** The `photo` mode of `NotationSurface` references `img.img-technical` for the luminosity-blend / hover activation. The class needs to be added to `src/styles/global.css` (or equivalent). Without it, `mode="photo"` just renders a plain image — functionally OK but missing the signature Quatro treatment. **Add to sprint 3 punch list.**

3. **CSS custom property `--color-forest` must exist.** Used across `NotationMark`, `NotationSurface`, older CtaBanner. Confirm token is in the global stylesheet; if not, add `--color-forest: #0f4c3a;` to root.

4. **Two-part eyebrow is scattered.** The rehaul wants every page to carry `CATEGORY · ROUTE` or `CATEGORY · AUTHOR`. Right now `Eyebrow.astro` takes a single string. Either extend the component or handle the split at the page level. Recommendation: extend the component and migrate callers in sprint 4 alongside the H1 cut.

5. **Retired files clutter the audit.** `_retired/`, `.retired`, and `.retired` suffix appear in several places. Harmless but makes grep reports noisy. Consider moving retired files out of `src/` entirely in a future chore.

---

## Punch list that should land in Sprint 3

- [ ] Add `img-technical` class to global CSS.
- [ ] Confirm `--color-forest` CSS variable exists; add if missing.
- [ ] Extract `src/lib/dither.ts` from `HeroCanvas.astro` + `IndustryHubCard.astro`.
- [ ] Delete `marketing/CtaBanner.astro`.
- [ ] Extend `Eyebrow.astro` to accept a two-part value.
- [ ] Rebuild `Hero.astro`, `BlogGrid.astro`, `BentoUseCases.astro`, `IndustryHubCard.astro` around `NotationSurface`.
- [ ] Rebuild `HeroCanvas.astro` as a thin wrapper over `NotationSurface mode="dither"`.
