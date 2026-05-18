---
name: quatro-visual-extensions
description: >
  Overlay for all Quatro visual work. Stacks with upstream quatro-ui-system, image-generation, and
  technical-diagrams. On every Quatro visual task, read the three v2 pillars at the project root
  before reaching for components: QUATRO-VISUAL-FRAME.md (the compass — image truth, layout
  cadence, visual restraint), QUATRO-DESIGN-LANGUAGE-V2.md (the toolkit — two-register system,
  five canonical section types, seven new components, image generation v7m, capability icons),
  and QUATRO-PALETTE-V2-PROPOSAL.md (the tokens). Adds the NotationSurface 14-mode component,
  the 1964-1984 retro-futurist canon, peer-brand preflight roster (BeZero, Jetree, SATREV,
  Radiant Earth, HEDRON, Finiam, Ark Robotics), palette v2 (warm paper for eco-track, slate for
  defense, field-hero gradient on homepage), v7e eco-futurist and v7m modern-defense generation
  styles, real-before-mimic preference, BGP-topology and root-network diagram modes, dual Quatro
  Mermaid themes, manifesto block, press-feature arrow list, lowercase italic-emphasis hero.
  Triggers include: NotationSurface, sensor plate, retro canon, 1964-1984, eco-futurist, v7e,
  v7m, peer brand, ochre accent, Quatro palette, BGP topology, root network, biomimetic diagram,
  Haeckel, Quatro Mermaid, field-hero gradient, lowercase italic hero, manifesto block,
  press-feature list, capability icon, spec table, two-register, editorial-warm, modern-defense,
  Ark Robotics, HEDRON, visual frame. Mantra: sensor data on editorial paper, with modern-defense
  restraint. Load alongside the upstream base skill on any Quatro visual task — never replace
  the base. Do not use for DataOS or Elementos.
---

# Quatro Visual Extensions — Overlay Skill

This skill stacks on top of three upstream skills (`quatro-ui-system`, `image-generation`, `technical-diagrams`) and adds the Quatro-specific content from the April 2026 design language rehaul plus the May 2026 v2 refinement. The upstream skills stay intact and continue receiving their own updates. This skill is the additive layer.

## Read First — The Three v2 Pillars (May 2026)

Before reaching for any pattern, component, palette token, or image style in this skill, read these three docs in order. They live at the project root.

1. **`QUATRO-VISUAL-FRAME.md`** — the compass. One-page lens for grounding layout, style, and image decisions. Distills the [Are.na inspiration board](https://www.are.na/jonathan-looney/quatro-hm9gml9szvu) into three lenses (image truth, layout cadence, visual restraint) plus a mood declaration. **Read this first on every Quatro visual task.** If a proposed page fails any of the four checks, the palette and components don't fix it.

2. **`QUATRO-DESIGN-LANGUAGE-V2.md`** — the toolkit. The two-register system, five canonical section types, seven new components (`FieldHeroGradient`, `LowercaseHero`, `ManifestoBlock`, `PressFeatureList`, `SpecTable`, `ModeSwitch`, `PartnerWall`), four forked components, image generation v7m, motion modes, capability icons, spec tables, editorial typography. Read second.

3. **`QUATRO-PALETTE-V2-PROPOSAL.md`** — the tokens. Full v2 palette, contrast verification, peer-brand fit check, implementation order. Already operationalized in `references/quatro-palette.json`. Read third.

**Working sequence:** Frame → Design Language → Palette → this skill's specific patterns.

The mantra to keep in working memory: **Sensor data on editorial paper, with modern-defense restraint.**

## How This Works

When Claude is asked to do any Quatro visual work, both skills fire:
- The base skill provides its canonical content.
- This overlay provides the Quatro extensions (palette v2, the patterns below, image generation styles).

The overlay explicitly says "these rules apply when the context is Quatro" so it does not interfere with DataOS or Elementos work using the same upstream skills.

**Rule of use:** every Quatro visual task loads this skill alongside the relevant upstream. If this skill is not loaded, Quatro pages default to the base upstream register, which is incomplete for the expanded design language.

---

## Part 1 — Extensions to `quatro-ui-system`

Adds to the base Quatro visual system.

### The Extended Image System — 14 NotationSurface Modes

Quatro uses one component, `NotationSurface.astro`, with 14 canonical modes:

1. `photo` — operator photography with `img-technical` luminosity blend.
2. `typographic` — Reckless headline on flat block with notation.
3. `schematic` — SVG ops diagram with JetBrains Mono labels.
4. `artifact` — analog document (work order, log) with circled line.
5. `dither` — static Bayer dither plate.
6. `numerical` — oversized Reckless number with notation underline.
7. `lidar` — point cloud render, forest-on-charcoal.
8. `sar` — SAR grayscale with native speckle preserved.
9. `rf-waterfall` — spectrum waterfall in forest-on-charcoal colormap.
10. `ml-latent` — latent space scatter or attention heatmap.
11. `earth-obs` — multispectral or NIR false-color.
12. `splat` — gaussian splat still or interactive.
13. `composite-split` — two-sensor split with bridging notation.
14. `biomimetic-pair` — botanical illustration + technical schematic.

Plus two layout modes:
- `earth-obs-timeseries` — two-date comparison with timeline.
- `density-flow` — accumulated-lines density map.

Component implementation lives at `src/components/ui/NotationSurface.astro`. Pairs with `CaptionBlock.astro` and `NotationMark.astro`.

### The Retro-Futurist Canon — 1964 to 1984

Twenty-year window for all retro references. All retro references adopted by Quatro must fall inside this window.

**Permitted references:**
- 1964 — Marshall McLuhan, "Understanding Media."
- 1965 — MIT academic poster design.
- 1968 to 1971 — Whole Earth Catalog.
- 1969 — Buckminster Fuller, "Operating Manual for Spaceship Earth."
- 1970 — MoMA "Information" (Kynaston McShine).
- 1972 — Gregory Bateson, "Steps to an Ecology of Mind." Global Interior Latin America.
- 1974 — Stewart Brand, "II Cybernetic Frontiers."
- Late 1970s — Metabolist and Nakagin-era modular architecture.
- 1984 — Apple Macintosh Super Bowl ad.

**Banned adjacent aesthetics:**
- Atomic Age, Googie, Jetsons (kitsch retro).
- Vaporwave, Memphis, Y2K (postmodern pastiche).
- Cyberpunk (Syd Mead, Blade Runner).
- Soviet space-race poster art (wrong politics for LATAM).
- 1980s Stranger Things (adjacent era, wrong register).

### Humanist-Futurist Balance — Three Rules

1. The most advanced technology on the page gets the most restrained frame. A gaussian splat sits on paper, not a gradient. A neural network diagram uses one stroke weight, not 3D rendering.
2. Every sensor image carries a human caption. No uncaptioned LIDAR, SAR, earth obs, or RF. The caption is the humanist half.
3. No pure futurism anywhere on the site. When a futurist element is added, add a humanist one within the same visual block.

### Peer Brand Roster

Quatro must sit comfortably next to these peer brands when viewed side by side:

- BeZero Carbon (`bezero.com`) — pure B&W discipline, green accent
- Jetree.ai (`jetree.ai`) — climate intelligence
- SATREV (`satrev.com`) — earth observation hardware
- Radiant Earth Foundation (`radiant.earth`) — forest + olive + mustard ochre
- HEDRON (`hedron.space`) — deep-ink to atmospheric-blue gradient, space-to-Earth
- Finiam (`finiam.com`) — Portuguese dev studio, warm editorial register
- Ark Robotics (`ark-robotics.com`) — modern-defense reference: lowercase italic-emphasis hero, deep-ink-to-horizon-tan gradient, slate-marine product photography. Use as the reference for homepage and defense-page hero treatments.

**Preflight:** open any Quatro page and two peer brand pages side by side. They should feel adjacent, not alien.

### Palette v2 — May 2026 Refinement

The palette was refined in May 2026 against the Are.na inspiration board and Ark Robotics as the modern-defense reference. Full rationale in `QUATRO-PALETTE-V2-PROPOSAL.md` at the project root.

**Spine (unchanged):**
- Forest `#0F4C3A` — single emphasis color
- Charcoal `#0a0a0a` — defense surfaces, dither shader on dark

**Warm spine — replaces cool slate for eco-track:**
- Paper `#F2EBDA` — warm newsprint cream (replaces `#F9FAFB`)
- Newsprint `#E5D9BC` — secondary editorial background
- Ink `#16161E` — warm near-black body type
- Bone `#CFCBBE` — warm light gray, section dividers
- Taupe `#8D8071` — warm mid-gray, captions and metadata

**Accents:**
- Ochre `#A88B5C` — canonical eco-track second color
- Ochre-deep `#9C6B4A` — higher-emphasis ochre
- Terracotta `#8C4E33` — warnings only (replaces bright `#c05621`)
- Indigo-ink `#243248` — editorial second accent (pull quotes, byline rules)
- Moss `#6E8A6F` — quiet support for charts and secondary data tracks

**Defense-scoped tokens (from Ark Robotics):**
- Slate-marine `#4D6870` — hardware/product photography backdrop. Defense, SATCOM, federal capture only.
- Horizon-tan `#9A8A7A` — gradient stop only, never a solid field. Homepage hero and defense gradients only.

**Cool slate scale** stays unchanged for technical surfaces (dashboards, ops UI, schematic mode). Renamed `slate-*` for honesty.

### Ochre — Limited Use (scope unchanged from v1)

**Permitted use cases:**
- Paper-texture alternate backgrounds.
- Block-print illustration second color.
- LATAM content where cultural warmth fits.

**Never use ochre on:**
- Defense pages.
- Federal capture pages.
- SATCOM pages.
- Any page with a DataOS crossover.

Forest green is always primary. Ochre never replaces forest.

### Field-Hero Gradient — Homepage and Defense Hero Only

Vertical linear gradient for the homepage hero and high-emphasis defense pages. Adapted from Ark Robotics' deep-ink-to-desert gradient, pivoted to Quatro's eco-track tokens. "Orbit-to-jungle," LATAM-rooted.

```css
.field-hero {
  background: linear-gradient(180deg,
    #0a0a0a 0%,        /* charcoal */
    #093326 25%,       /* forest-700 */
    #3F6450 65%,       /* deep moss / forest-400 */
    #8D8071 95%,       /* taupe */
    #A88B5C 100%       /* ochre */
  );
}
```

Use cases:
- Homepage hero (canonical placement, full-bleed).
- High-emphasis defense page heroes (federal capture landing pages, key product launches).
- Never as a solid background. Always full-height vertical gradient on a hero section.
- Never on eco-track verticals (energy, municipal, LATAM, broadcast, insights). Those keep paper backgrounds.

### Lowercase Italic-Emphasis Hero — Homepage and Defense Only

Hero title pattern adapted from Ark Robotics. Lowercase Roobert for the regular phrase, lowercase Reckless italic for the emphasis phrase.

Examples for Quatro:
- `industrial AI integrator *for the americas*`
- `the intelligence stack *built with operators*`
- `connect, operate, command *with one platform*`

CSS sketch:

```css
.hero-title {
  font-family: var(--font-display); /* Roobert */
  font-weight: 400;
  font-size: clamp(48px, 7vw, 96px);
  text-transform: lowercase;
  letter-spacing: -0.02em;
  color: var(--color-paper); /* on field-hero gradient */
}
.hero-title em {
  font-family: var(--font-sans); /* Reckless */
  font-style: italic;
}
```

Scope:
- Homepage hero (canonical).
- Defense, SATCOM, federal capture page heroes.
- Never on eco-track verticals — those keep proper-case Reckless display.

### Manifesto Block — Single-Column Editorial

Adapted from Ark Robotics' "We are building a new medium for human-machine collaboration..." treatment. A single column of confident editorial prose, max-width ~720px, centered.

```css
.manifesto {
  max-width: 720px;
  margin: 0 auto;
  font-family: var(--font-sans); /* Reckless */
  font-size: clamp(20px, 2.5vw, 28px);
  line-height: 1.5;
  color: var(--color-ink); /* on paper */
}
```

Use cases: about pages, mission statements, capability narratives. Pairs with `paper` background. One per page maximum.

### Press-Feature Arrow List

Adapted from Ark's `↗ Article title from Source` treatment. No card chrome, no thumbnails. Operator-readable news list.

```html
<a class="press-feature" href="...">
  <span class="press-arrow">↗</span>
  <span class="press-title">Article title</span>
  <span class="press-source">Source name</span>
</a>
```

```css
.press-feature { display: flex; gap: 0.5rem; align-items: baseline; padding: 0.75rem 0; border-bottom: 1px solid var(--color-bone); }
.press-arrow { font-family: var(--font-mono); color: var(--color-forest); }
.press-title { font-family: var(--font-display); color: var(--color-ink); }
.press-source { font-family: var(--font-mono); color: var(--color-taupe); font-size: 0.875em; margin-left: auto; }
```

### Extended Preflight Checklist

Additions to the base `quatro-ui-system` preflight:

- Every sensor asset has a caption with instrument metadata and operator note.
- Every sensor asset has exactly one notation mark.
- Page fits the "1971 ecology catalog reissued in 2026" brief.
- Page sits comfortably next to BeZero, Jetree, SATREV, HEDRON.
- Retro references fall inside the 1964 to 1984 canon window.
- Ochre accent appears only on eco-track pages.
- Manifest entries exist for every sensor and motion asset on the page.

### New Anti-Patterns

Additions to the base anti-pattern list:

1. Sensor imagery without a caption. Every sensor asset carries a two-line caption. No exceptions.
2. Multiple notation marks on one image. One mark per image. Two or more reads as noise.
3. Retro references outside the 1964 to 1984 window.
4. Ochre on non-eco pages.
5. AI-generated video without mimic labeling. Every Seedance 2.0 output is logged as `mimic` in the motion manifest and caption.

---

## Part 2 — Extensions to `image-generation`

Adds to the base generation workflow.

### Real Before Mimic — The Preference Rule

Before writing any prompt for sensor-like imagery (LIDAR, SAR, RF, earth observation, gaussian splat, multispectral), check if a real asset is available:

1. Read `manifests/sensor-assets.json`. Does an asset already cover the need?
2. Check `quatro-sensor-assets`. Can the sensor-assets skill source a real capture within the page's timeline?
3. If yes to either, do not generate. Use real data.
4. If no to both, generate with v7e eco-futurist style and tag the output as `mimic` in the manifest.

### v7e — Third Generation Style

The eco-futurist style fills the gap when real sensor data is unavailable.

Three shot types:

**`v7e-sensor-mimic`** — mimic of a LIDAR, SAR, RF, or earth observation plate.

Prompt template:
```
[SENSOR TYPE] of [SUBJECT], [QUATRO PALETTE], editorial documentation aesthetic,
no ornate detail, sensor-style rendering, 2560x1440, eco-futurist register.
```

Example:
```
LIDAR point cloud of a coastal substation, forest-on-charcoal Quatro palette,
editorial documentation aesthetic, no ornate detail, sensor-style rendering,
top-down orthographic view, 2560x1440, eco-futurist register.
```

**`v7e-biomimetic`** — block-print natural-form illustration in the Haeckel tradition.

Prompt template:
```
Two-color printmaking illustration of [SUBJECT], forest green on paper,
Ernst Haeckel scientific illustration style, clean line work, no shading,
no photorealism, 19th century natural history plate aesthetic.
```

**`v7e-archival-modern-split`** — Foundation Capital two-era split.

Prompt template:
```
Split composition: left half shows [ARCHIVAL SUBJECT] in black and white with
vintage grain, right half shows [MODERN SUBJECT] in Quatro forest-paper
palette, both the same subject type, editorial register.
```

Every v7e output receives a notation mark in post via `quatro-notation-layer`. Do not prompt for notation.

### Scope-Limit on v7t

The existing v7t (tactical HUD) style is scope-limited under the expansion:

**v7t is permitted on:**
- Defense industry pages.
- Autonomous systems content.
- Federal capture materials.

**v7t is NOT permitted on:**
- Eco-track pages.
- Energy, SATCOM, broadcast, municipal, LATAM content.
- Anything with a Quatro eco-futurist register.

For those verticals, use v7.1 (documentary) or v7e (eco-futurist sensor mimic) instead. v7t reads as a different company in the eco-futurist register.

### Decision Tree — Choosing the Right Style

1. Is the subject a sensor or sensor output? Check `quatro-sensor-assets` for real data. If available, use it. If no real data, use v7e `sensor-mimic`.
2. Is this defense, autonomous weapons, federal capture, or tactical content? Use v7t.
3. Is this operator photography, site photography, or editorial documentary? Use v7.1.
4. Is this biomimetic illustration or archival-modern composite? Use v7e `biomimetic` or `archival-modern-split`.
5. Everything else: default to v7.1.

### CSV Schema Additions

When writing a CSV batch prompt for `image-generation`:

- Extend the `style` column to accept `v7e` alongside `v7.1` and `v7t`.
- Add a new required column: `real_or_mimic` — `real` (links to existing sensor asset), `mimic` (AI-generated stand-in), or `original` (AI-generated photography not tied to a real asset).

### Mimic Budget Rule

Mimics cap at 30 percent of all v7e outputs. Audit quarterly:

```bash
jq '[.[] | select(.style == "v7e") | select(.real_or_mimic == "mimic")] | length' \
  manifests/sensor-assets.json
```

When the mimic ratio exceeds 30 percent, review the oldest mimics for real-capture replacement.

---

## Part 3 — Extensions to `technical-diagrams`

Adds to the base diagram workflow.

### Brand Switch — Quatro Palette Fork

The base `technical-diagrams` skill ships with a DataOS palette. This overlay adds a Quatro palette variant.

Quatro palette tokens (v2 — split by surface type):

**Eco-track diagram tokens (insights, energy, municipal, LATAM, broadcast):**
- Paper `#F2EBDA` — warm newsprint background.
- Ink `#16161E` — primary strokes and text on warm paper.
- Forest `#0F4C3A` — accent, governance, outcomes, the one emphasis.
- Bone `#CFCBBE` — borders and section dividers on warm paper.
- Taupe `#8D8071` — caption text, metadata, secondary labels.
- Ochre `#A88B5C` — second accent (eco-track only).
- Indigo-ink `#243248` — editorial second accent (pull quotes, byline rules).

**Defense / technical diagram tokens (defense, SATCOM, federal capture, dashboards, ops):**
- Slate-50 `#F9FAFB` — light backgrounds.
- Charcoal `#0a0a0a` — dark backgrounds and primary strokes on light.
- Forest `#0F4C3A` — accent, governance, outcomes, the one emphasis.
- Slate-200 `#E2E8F0` — borders on light.
- White on charcoal — internal nodes on dark backgrounds.
- Slate-marine `#4D6870` — hardware photography backdrop (never a diagram background).

**Quatro forest-green is the single emphasis color** on both registers, equivalent to DataOS ember. Only one thing in any diagram gets forest fill — the element the diagram is making a point about. Ochre never appears on defense/technical surfaces.

### Brand Declaration

Every Quatro diagram source file declares its brand at the top:

```
// @brand: quatro
```

Rendering scripts read the declaration and load the Quatro palette. Omit the declaration on DataOS diagrams (DataOS is the default).

### Cross-Brand Rules

- A DataOS and a Quatro diagram never appear on the same page.
- Quatro ochre never appears in a DataOS diagram.
- Shared diagrams (cross-company reference architectures) default to DataOS palette with a source-file note explaining the choice.

### Two New Diagram Modes

**BGP-topology poster.** The peer1-hosting-poster aesthetic: spiky radial network graph with dense node labels, hero-scale. For Quatro insights about network topology, intelligence mesh architecture, or peer-to-peer systems.

Composition:
- Center node anchors the graph.
- Nodes radiate outward, connected by 1px lines.
- Node labels in JetBrains Mono at 10px.
- Forest on paper (light) or white on charcoal (dark).
- One node highlighted with forest fill as the point of the diagram.

Use for: hero illustration on network-focused insights posts, architecture posters for capability pages, year-in-review retrospectives.

**Root-network diagram.** Procedural graph generated by the space-colonization algorithm. Same algorithm renders trees, rivers, and roads — biomimetic grammar for "how systems grow."

Composition:
- Single root point.
- Branching outward to terminal leaves.
- Curved edges, not straight lines.
- Labels on three to five key nodes, rest are visual-only.
- Forest on paper or white on charcoal.

Use for: eco-track content, insights posts arguing systems grow like this, section dividers where a sensor plate is not warranted.

### Quatro Mermaid Theme

For any Mermaid diagram on a Quatro page, pick the theme that matches the surrounding page register. Both theme blocks live in `references/quatro-mermaid-theme.md`.

**Eco-track theme** (insights, energy, municipal, LATAM, broadcast — warm paper background):

```
%%{init: {
  'theme':'base',
  'themeVariables': {
    'primaryColor':'#F2EBDA',
    'primaryTextColor':'#16161E',
    'primaryBorderColor':'#16161E',
    'lineColor':'#8D8071',
    'secondaryColor':'#CFCBBE',
    'tertiaryColor':'#F2EBDA',
    'fontFamily':'Roobert, system-ui, sans-serif',
    'fontSize':'13px'
  }
}}%%
```

**Defense / technical theme** (defense, SATCOM, federal capture, dashboards — slate background):

```
%%{init: {
  'theme':'base',
  'themeVariables': {
    'primaryColor':'#F9FAFB',
    'primaryTextColor':'#0a0a0a',
    'primaryBorderColor':'#0a0a0a',
    'lineColor':'#475569',
    'secondaryColor':'#E2E8F0',
    'tertiaryColor':'#FFFFFF',
    'fontFamily':'Roobert, system-ui, sans-serif',
    'fontSize':'13px'
  }
}}%%
```

Forest green is applied as a manual class on the one emphasized node, not as a theme variable.

### Quatro Output Standards

Every Quatro diagram must satisfy these additional rules:

- Brand declaration is explicit (`// @brand: quatro`).
- Forest green is the single emphasis color.
- Ochre only on eco-track diagrams.
- Fonts: Roobert for headers, JetBrains Mono for labels.

---

## The Overlay Pattern

This skill is the template for future Quatro-specific extensions to cross-company upstream skills. When a new upstream skill needs Quatro additions:

1. Check whether the additions fit inside this existing overlay. Add to this skill if they do.
2. If the scope warrants a dedicated overlay (new upstream base skill), create a new `quatro-*-extensions` skill following this pattern.
3. Never fork the upstream skill. Forks lose upstream updates.

## Related Skills

- `quatro-ui-system` (upstream) — the base visual system. This overlay extends it.
- `image-generation` (upstream) — the base generation workflow. This overlay adds v7e.
- `technical-diagrams` (upstream) — the base diagram workflow. This overlay adds the Quatro palette.
- `quatro-sensor-assets` — primary skill for sensor work.
- `quatro-notation-layer` — primary skill for annotation work.
- `quatro-motion-assets` — primary skill for motion work.
- `quatro-cascade` — messaging.
- `jonathan-voice` — prose voice.

## When NOT to Load This Skill

Do not load this skill when:
- Working on DataOS or Modern content — use the base `image-generation` and `technical-diagrams` skills directly.
- Working on Elementos content — same.
- The task is purely text-based messaging with no visual component — `quatro-cascade` alone is enough.

This skill is Quatro-visual-specific. Loading it on non-visual or non-Quatro work adds context without benefit.
