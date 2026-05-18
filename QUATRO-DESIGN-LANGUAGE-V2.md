# Quatro Design Language v2

**Status:** Drafted 2026-05-15. Sits alongside `QUATRO-PALETTE-V2-PROPOSAL.md`. Palette tokens are settled; this doc handles the rest of the system.
**Anchor positioning:** Anduril-grade defense product brand with editorial-LATAM soul.
**Primary references:** Ark Robotics (modern-defense), HEDRON (orbital-editorial), Princeton Environmental / Isometric Studio (editorial-scientific), Whole Earth Catalog + McLuhan + Global Interior LATAM (warm-paper canon), Finiam (warm-editorial peer).
**Inspiration board:** [are.na/jonathan-looney/quatro-hm9gml9szvu](https://www.are.na/jonathan-looney/quatro-hm9gml9szvu)

---

## 1. The Two-Register System

Quatro runs on two visual registers that coexist. Every page declares which register it belongs to. Mixing them on a single page is not allowed except on the homepage and a small set of crossover surfaces.

### Defense-serious register

The Anduril/Ark/HEDRON register. Used for surfaces where the audience is government, defense, federal capture, or industrial-critical buyers who need to see seriousness before warmth.

- Background: charcoal `#0a0a0a` or slate-50 `#F9FAFB` for whitepaper layouts
- Type: Roobert and JetBrains Mono dominant. Reckless used sparingly. Lowercase italic-emphasis on heroes.
- Accent: forest as single emphasis. Slate-marine for hardware photography. Indigo-ink for technical secondary.
- Information density: dense. Spec tables, mono numerics, tight rows.
- Motion: silent product video loops, sensor sweeps, RF waterfalls.
- Image style: v7m (modern-defense product, see §5) and v7t (tactical HUD).

Surfaces: `/defense`, `/satcom`, `/federal`, `/products/*` (drone kits, sensor terminals, antennas, ruggedized hardware), `/golden-dome`, capture-landing pages, RFI/RFP responses.

### Editorial-warm register

The Whole Earth Catalog / Global Interior LATAM / Finiam register. Used for surfaces where the audience is operators, civil agencies, energy customers, municipalities, partners, and the press.

- Background: paper `#F2EBDA`
- Type: Reckless serif dominant for body, Roobert for display, JetBrains Mono for labels and captions. Proper case (not lowercase).
- Accent: forest as single emphasis. Ochre as second accent. Indigo-ink for pull quotes. Terracotta for warnings only.
- Information density: airy. Editorial prose typography, drop caps, marginalia, generous white space.
- Motion: gentle reveal/fade, biomimetic root-network grows, time-series scrubs.
- Image style: v7.1 (documentary photography) and v7e (eco-futurist sensor mimic).

Surfaces: `/`, `/about`, `/insights/*`, `/energy`, `/municipal`, `/latam`, `/broadcast`, `/partners`, `/manifesto`, `/methodology`, `/methods`.

### Surface declaration table

Every Astro page-component opens with a frontmatter field:

```astro
---
register: 'defense' | 'editorial' | 'transition'
---
```

The layout reads this and applies the right background, type defaults, and component variant. Pages that omit the field default to `editorial`.

### Transition surfaces

Three surfaces start in one register and resolve in another:

1. **Homepage `/`** — opens with the field-hero gradient (defense-serious) and resolves into paper for the body. Section break is marked by the gradient bleeding into paper, not a hard edge.
2. **Industry overview `/industries`** — opens with a defense-serious hero showing all verticals, then each vertical card lands in its native register.
3. **About `/about`** — paper for the manifesto block, charcoal for the operator/team grid, paper again for the footer.

Crossovers must be intentional and section-bounded. Never a single component that smears both registers.

---

## 2. Layout Grammar

Quatro currently varies section structure page-to-page. The Ark Robotics anatomy produces rhythm because it repeats. v2 formalizes five canonical section types.

### Section A — Hero

Three variants by register:

- **Field-hero gradient (defense + homepage)**: charcoal → forest-700 → deep moss → taupe → ochre, vertical full-bleed. Lowercase italic-emphasis title. Centered or left-aligned. No image, the gradient is the image.
- **Paper hero (editorial)**: paper background. Reckless display headline, proper case. Optional v7.1 documentary photo with `img-technical` blend. Notation mark on the photo.
- **Dither hero (homepage variant)**: Bayer dither canvas on charcoal (defense) or newsprint (editorial). Single mark or wordmark centered.

One hero per page maximum. Always full viewport height on home and key vertical landing pages, two-thirds on lower-tier pages.

### Section B — Capability module

The Ark anatomy. Each capability section follows the same shape:

```
┌─────────────────────────────────────────┐
│ Section title (Roobert, lowercase, big) │
│ Subhead (Reckless, one line)            │
│                                         │
│ ┌─────────────┐  Mode 1                 │
│ │   Media     │  ↳ description          │
│ │   (image,   │                         │
│ │    video,   │  Mode 2                 │
│ │    or       │  ↳ description          │
│ │    diagram) │                         │
│ │             │  Mode 3                 │
│ └─────────────┘  ↳ description          │
└─────────────────────────────────────────┘
```

Three to four modes per section, never more. Mode label in Roobert, description in Reckless. Active mode swaps the media. Mode icons (see §6) sit beside the labels.

This is the canonical pattern for `/products`, `/capabilities`, `/intelligence-stack`, `/intel-products`. Reuse it. Don't invent new section shapes for the same job.

### Section C — Manifesto block

Single column of confident editorial prose. Max-width 720px. Reckless at clamp(20px, 2.5vw, 28px), line-height 1.5. Color: ink on paper, or paper on charcoal for defense pages.

One per page maximum. Lands at the rhetorical turning point — usually about 60% of the way down.

Spec is in `quatro-visual-extensions/SKILL.md` under "Manifesto Block."

### Section D — Press-feature list

The Ark `↗ Article title from Source` treatment. No card chrome, no thumbnails. Two-column or one-column depending on page width. Arrow in JetBrains Mono forest, title in Roobert ink, source in JetBrains Mono taupe.

Use on `/press`, `/about`, footer of insights articles, and anywhere external coverage is referenced.

### Section E — Partner wall

Monolithic logo strip. Single row, marquee scroll on overflow. Logos at uniform height (typically 32px or 40px), forest tint on light backgrounds, paper tint on dark.

Use once per page maximum. Never as a grid of cards.

### Density rules per section type

| Section | Defense register | Editorial register |
|---|---|---|
| Hero | Tight, geometric | Airy, generous |
| Capability module | Dense (mode descriptions short) | Medium (descriptions can breathe) |
| Manifesto block | Dense (operator language) | Airy (editorial language) |
| Press-feature list | Tight rows | Tight rows (same both registers) |
| Partner wall | Tight (single row) | Tight (single row) |
| Spec table | Maximum density | Not used |
| Long-form prose | Not used | Maximum airiness |

---

## 3. Component Inventory

### Seven new components

| Component | Register | Job |
|---|---|---|
| `FieldHeroGradient.astro` | defense + homepage | Full-bleed vertical gradient hero with lowercase italic-emphasis title slot |
| `LowercaseHero.astro` | defense + homepage | Title-only hero (no gradient) with lowercase italic-emphasis treatment |
| `ManifestoBlock.astro` | both | Single-column editorial prose block, max-width 720px |
| `PressFeatureList.astro` | both | Arrow-link list with title + source, no card chrome |
| `SpecTable.astro` | defense | JetBrains Mono numerics, tight rows, forest emphasis on one spec |
| `ModeSwitch.astro` | both | 3-4 button mode selector that swaps a sibling `<Media>` slot |
| `PartnerWall.astro` | both | Single-row monolithic logo strip with optional marquee |

Each gets a Storybook-style page at `/dev/components/{name}` for visual review.

### Forked components (one component, two register variants)

| Component | Defense variant | Editorial variant |
|---|---|---|
| `Nav.astro` | charcoal background, JetBrains Mono links, forest hover | paper background, Roobert links, ochre hover |
| `Footer.astro` | charcoal background, slate-marine product links | paper background, ink links, ochre accent |
| `Button.astro` | filled forest on charcoal, ghost variant in slate-marine | filled forest on paper, ghost variant in ochre-deep |
| `Callout.astro` | dark variant (current) | warm-paper variant with ink text and ochre accent |

Fork via a `register` prop on each component, default to `editorial`.

### Components staying as-is

`NotationSurface.astro` (14 image modes), `NotationMark.astro`, `CaptionBlock.astro`, the dither canvas (with one new eco-track color variant), reveal/fade-stagger animations, the existing `prose-article` typography in global.css. These all hold up under both registers.

### Components to retire

`coral` accent CTAs. Anything still importing `--color-accent-coral`. Sweep on the next pass.

---

## 4. Image Generation v2

Current styles: v7.1 documentary, v7t tactical HUD, v7e eco-futurist sensor mimic. The board calls for two additions.

### New: v7m — modern-defense product photography

The Ark Robotics product render register. Used for hardware, drone kits, sensor terminals, antennas, ruggedized equipment.

**Aesthetic anchors:** Ark Robotics product photography, HEDRON pitch material, Anduril Lattice hardware shots.

**Backdrop:** slate-marine `#4D6870` solid or subtle gradient. Never paper, never charcoal pure. Always a controlled product-photography mood.

**Subject treatment:** Hardware as hero. Clean cutout silhouette, dramatic backlight from upper-rear, faint cast shadow below. No operators visible. No people. Single product per frame unless explicitly a kit shot.

**Prompt template:**
```
[PRODUCT] on slate-marine #4D6870 backdrop, product photography,
dramatic backlight from upper-rear, faint cast shadow below,
no operators, no people, no text overlays, no logos visible,
2560x1440, modern-defense register, Ark Robotics product render aesthetic.
```

**Example:**
```
Ruggedized SATCOM ground terminal on slate-marine #4D6870 backdrop,
product photography, dramatic backlight from upper-rear,
faint cast shadow below, antenna deployed, cable management visible,
no operators, no people, 2560x1440, modern-defense register.
```

**Captions:** Mono spec callouts allowed (`speed: 25km/h | weight: 12.5kg | range: 20+km`). Use the new `SpecTable` component for actual specs.

**Budget rule:** v7m outputs do not get notation marks (unlike v7e). The clean product silhouette is the entire frame. Captions handle metadata.

### Updated: v7.1 register specification

v7.1 documentary photography currently defaults to bright midday. Add explicit lighting register tags:

- **`v7.1-dawn`** — dawn or dusk operator photography. Warm tan-to-indigo evening gradient. Used for homepage hero, manifesto pages, and any surface that needs to resolve into the field-hero gradient palette.
- **`v7.1-day`** — bright midday operator photography. Current default. Used for capability sections, partner stories, editorial features.
- **`v7.1-night`** — operator photography under sodium lights or moonlight. Sparse, used for incident/dispatch surfaces where night ops matter.

Existing v7.1 outputs stay tagged `v7.1-day` retroactively.

### Style decision tree (updated)

1. Hardware, drone kit, sensor terminal, antenna, ruggedized equipment? → **v7m**
2. Sensor or sensor output (LIDAR, SAR, RF, earth obs)? Real data first; if not available → **v7e sensor-mimic**
3. Defense, autonomous weapons, federal capture, tactical content? → **v7t**
4. Operator photography, site photography, editorial documentary?
   - Dawn/dusk register → **v7.1-dawn**
   - Bright midday → **v7.1-day**
   - Night ops → **v7.1-night**
5. Biomimetic illustration or archival-modern composite? → **v7e biomimetic** or **v7e archival-modern-split**
6. Everything else → **v7.1-day**

### CSV schema additions

`style` column accepts `v7.1-dawn`, `v7.1-day`, `v7.1-night`, `v7t`, `v7e`, `v7m`. The `real_or_mimic` column stays. Add a `backdrop` column for v7m to specify any deviation from slate-marine default.

---

## 5. Motion

### Existing motion modes (in `quatro-motion-assets`)

LIDAR sweep, time-series scrub, RF waterfall, gaussian splat orbit, animated dither, root-network biomimetic grow. Plus AI-generated video mimics via Seedance 2.0.

### New: product video loop

Five-to-eight-second silent product video loops. Subtle rotation (15-30 degrees) or single-axis motion. Used for hardware on capability sections and product pages. Defense register only.

**Spec:**
- Duration: 5-8 seconds, perfectly seamless loop
- Format: webm (primary) and mp4 (fallback)
- Resolution: 1920x1080 or 2560x1440
- Motion: rotation around vertical axis, OR slow zoom-in on a feature, OR single panel sliding into place. Never multiple motions combined.
- Audio: none. Mute attribute on the video tag.
- Backdrop: slate-marine `#4D6870` or charcoal. Same as v7m photography.
- Caption: optional, in JetBrains Mono taupe below the video frame.

**Generation:** Seedance 2.0 with the v7m backdrop spec, OR live capture in the existing Quito studio.

**Use:** Replaces the static product photo on capability sections where motion adds clarity. Never on hero (hero stays still or uses dither canvas animation). Maximum two product video loops per page.

### Motion register rules

- Defense register: product loops, sensor sweeps, RF waterfalls, time-series scrubs
- Editorial register: reveal/fade animations, biomimetic root grows, dither canvas variants
- Both: cursor pulse on interactive elements, marquee for partner walls
- Neither: parallax, scroll-jacking, heavy WebGL effects, anything that competes with the gradient or paper backgrounds

---

## 6. Iconography

### Existing — annotation marks

`quatro-notation-layer` provides circle, arrow, X, underline, bracket, starburst. One mark per image. Stays unchanged.

### New — capability icons

Small SVG glyphs for `ModeSwitch` buttons and section labels. 24x24px viewBox, single-stroke (1.5px stroke-width), no fill. Forest on light, paper on dark.

**Twelve canonical glyphs (v2 launch set):**

1. `sense` — sensor radial (concentric arcs)
2. `plan` — node-and-arrow planning graph
3. `dispatch` — dispatcher antenna with broadcast lines
4. `report` — clipboard with field annotation
5. `query` — search reticle (crosshair + circle)
6. `connect` — three nodes linked in a triangle
7. `operate` — operator hand grip
8. `command` — terminal cursor with bracket
9. `observe` — eye with sensor brackets
10. `transform` — arrow loop / refinement glyph
11. `terrain` — topographic contour lines (3-4 lines)
12. `orbit` — half-ellipse orbital path with satellite mark

Each glyph lives at `src/components/icons/{name}.astro`. The `quatro-notation-layer` skill expands to cover both annotation marks and capability icons, with separate sections.

**Anti-patterns:**
- No filled glyphs (single-stroke only).
- No emoji.
- No icon-font dependencies (lucide, heroicons). Quatro draws its own.
- No animated glyphs. Motion happens at the section level, not the icon level.

---

## 7. Data Display

### Spec table

The Ark `A1 / M4 / X1` layout adapted for Quatro products and sensors. Used on every product page, sensor capability page, and antenna spec sheet.

**Anatomy:**

```
spec name (JetBrains Mono, taupe, 11px)    value (JetBrains Mono, ink, 14px)
─────────────────────────────────────────────────────────────────────────
speed                                       25 km/h
weight                                      12.5 kg
range                                       20+ km     ← forest emphasis row
payload                                     up to 15 kg
suspension                                  independent
drive                                       electric 4x4
```

One row gets forest emphasis (the differentiating spec). One emphasis per table. Same discipline as the diagram emphasis rule.

**Component:** `SpecTable.astro` accepts a `rows` prop array of `{ name, value, emphasis?: boolean }` and renders the layout. Optional `title` prop for the table caption.

**Comparison variant:** When comparing multiple products (A1 vs M4 vs X1), use the tabbed variant with `ModeSwitch` driving which product's specs display. Never side-by-side columns — too dense.

### Numerical callouts

Inline mono numerics in editorial prose. JetBrains Mono, slightly larger than body, forest accent on the unit suffix.

```css
.numeric-callout {
  font-family: var(--font-mono);
  font-size: 1.1em;
  font-feature-settings: 'tnum';
}
.numeric-callout .unit {
  color: var(--color-forest);
  font-size: 0.85em;
  margin-left: 0.15em;
}
```

Used in prose like: "The fleet covered <span class="numeric-callout">847<span class="unit">km</span></span> on a single charge."

### Stat callouts (existing, refined)

The current `callout[data-type="stat"]` treatment in global.css stays. Update the color reference from `--color-forest` to the new ink/paper register on warm surfaces.

---

## 8. Editorial Typography

The existing `prose-article` typography in global.css is strong. Three additions.

### Numbered chapter dividers

For longer insights posts. Roman numeral or arabic, centered, JetBrains Mono ochre-deep on paper.

```css
.chapter-divider {
  text-align: center;
  margin: 4rem auto;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.4em;
  color: var(--color-ochre-deep);
}
.chapter-divider::before,
.chapter-divider::after {
  content: '· · ·';
  display: block;
  color: var(--color-bone);
  font-size: 0.75rem;
  letter-spacing: 0.5em;
  margin: 1rem 0;
}
```

Markup:

```html
<div class="chapter-divider">IV</div>
```

### Tufte-style marginalia

For footnotes and source attribution. Right margin on wide screens, inline on narrow.

```css
.marginalia {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--color-taupe);
}
@media (min-width: 1024px) {
  .marginalia {
    float: right;
    clear: right;
    margin-right: -240px;
    width: 200px;
  }
}
```

Used inside `prose-article` for source citations and Tufte-style asides. Replaces traditional footnote-anchor links.

### Bibliography treatment

For insights articles that cite primary sources. List format with hanging indents, JetBrains Mono for date and source name, Reckless for the title.

```css
.bibliography {
  list-style: none;
  padding-left: 0;
}
.bibliography li {
  padding-left: 1.5rem;
  text-indent: -1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
.bibliography .biblio-date {
  font-family: var(--font-mono);
  color: var(--color-taupe);
}
.bibliography .biblio-title {
  font-family: var(--font-sans);
  font-style: italic;
}
.bibliography .biblio-source {
  font-family: var(--font-mono);
  color: var(--color-ochre-deep);
}
```

---

## 9. Information Density Rules

Pages currently land at roughly the same density. v2 differentiates by register and surface type.

| Surface | Register | Target density |
|---|---|---|
| Homepage | transition | medium → airy |
| Product pages | defense | dense |
| Capability pages | both | medium |
| Insights / manifesto | editorial | airy |
| Industry overview pages | editorial | medium |
| About | transition | airy |
| Press | both | tight (list) |
| Defense / federal capture | defense | dense |
| SATCOM | defense | dense |

**Concrete rules:**
- Defense pages: spec tables present, mono numerics in body, tight section spacing (~80px between sections), max line-length 60-70 characters.
- Editorial pages: no spec tables, drop caps on first paragraph, generous section spacing (~120px), max line-length 65-75 characters.
- Transition pages: dense hero, airy body, return to defense register at the footer if applicable.

---

## 10. Implementation Sequence

Eight steps, each independently shippable. Numbered by recommended order.

**1. Add `register` prop infrastructure.** Update `src/layouts/Base.astro` (or whatever the page-layout root is) to read a `register` frontmatter field and apply background + type defaults. One-day spike, no visual change until pages start using it.

**2. Patch `src/styles/global.css` with palette v2 tokens.** From the palette proposal. Adds paper, ink, newsprint, bone, taupe, ochre-deep, terracotta-v2, indigo-ink, moss, slate-marine, horizon-tan. Renames slate scale honestly. One-day spike.

**3. Build the seven new components.** One per day-or-so. Order: `LowercaseHero` (highest impact, unlocks homepage), `FieldHeroGradient` (homepage hero), `SpecTable` (unlocks first defense product page), `ModeSwitch` (unlocks all capability sections), `ManifestoBlock`, `PressFeatureList`, `PartnerWall`. Each gets a `/dev/components/{name}` review page.

**4. Fork `Nav`, `Footer`, `Button`, `Callout` by register.** Add `register` prop, branch styles. Two-to-three days.

**5. Add v7m to the image-generation skill.** Update `image-generation/SKILL.md` and CSV schema. Add the v7.1 dawn/day/night lighting tags. One-day spike.

**6. Add capability icons library.** Twelve glyphs at `src/components/icons/`. Update `quatro-notation-layer` skill to cover both annotation marks and capability icons. Two days.

**7. Add product video loop mode to `quatro-motion-assets`.** Spec, prompt templates, example outputs. One day.

**8. Page-by-page register sweep.** Apply the new components, declare register on every page, replace coral with the new accent tokens, switch product pages to dense layout, switch insights pages to airy layout. Roughly two weeks of careful work across the whole site.

Total estimate: four to five weeks for a complete v2 implementation. The first three steps unlock visible homepage improvement within the first week.

---

## 11. What Stays

Don't touch what works.

- Typography stack: Reckless, Roobert, JetBrains Mono. No type change.
- The dither canvas shader. Add one eco-track color variant, structural code unchanged.
- The `NotationSurface` 14-mode component. Already covers the image inventory.
- The reveal/fade-stagger CSS animations. Tasteful, register-agnostic.
- The eco-futurist UI brief acceptance tests for sensor surfaces. Those govern operational UI, not marketing.
- The Astro static-site architecture. No SSR, no MDX migration, no framework swap.
- The content collections structure. Same `src/content/` shape.

---

## 12. Open Questions for Jonathan

1. **The transition surfaces.** I named three (homepage, industries overview, about). Are there others — `/methodology`, `/team`, `/manifesto`? Or should those pick a single register and stick with it?
2. **Spec table comparison variant.** I scoped it as tabbed (via `ModeSwitch`) rather than side-by-side columns. Comfortable with that, or would you rather see a side-by-side variant for direct competitor or product comparisons?
3. **The twelve capability icons.** Right set, or are there capabilities I missed? (Sense, plan, dispatch, report, query, connect, operate, command, observe, transform, terrain, orbit.)
4. **v7.1 dawn/day/night split.** Does this matter operationally, or is it overspec? The argument for splitting is the homepage hero needs warm-tan-to-indigo evening register. The argument against is documentary photography should be a judgment call per shoot.
5. **Bibliography treatment scope.** Apply to all insights articles, or only the longer primary-source-heavy ones? Affects how aggressive the source-citation discipline gets.
6. **Density ramp on existing pages.** Sweep the existing site to match the new density rules, or only apply density rules to net-new pages? Affects the scope of step 8.
7. **The "transition" register itself.** Is the homepage really a transition, or is it a third register entirely? If third register, that affects the `Nav` / `Footer` fork rules.

---

## Related Documents

- `QUATRO-PALETTE-V2-PROPOSAL.md` — token definitions, color rationale, contrast verification
- `.claude/skills/quatro-visual-extensions/SKILL.md` — patched 2026-05-15 with palette v2 and the four new patterns
- `.claude/skills/quatro-visual-extensions/references/style-brief-v7e.md` — eco-futurist image generation style
- `.claude/skills/quatro-visual-extensions/references/quatro-palette.json` — full token table
- `.claude/skills/quatro-visual-extensions/references/quatro-mermaid-theme.md` — eco-track and defense Mermaid themes
- `docs/REALIGNMENT.md` (if present) — sprint sequencing context
