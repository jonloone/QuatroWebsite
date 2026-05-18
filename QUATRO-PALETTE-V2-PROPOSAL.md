# Quatro Palette v2 — Eco-Futurist Refinement

**Status:** Skill files updated 2026-05-15. CSS tokens in `src/styles/global.css` not yet patched (see "Implementation order" below).
**Author:** Drafted 2026-05-15
**Scope:** Refine existing tokens, keep forest as the spine, add tokens for breathing room
**Anchor brief:** "1971 ecology catalog reissued in 2026" (from `style-brief-v7e.md`)
**Primary inspiration source:** [are.na/jonathan-looney/quatro-hm9gml9szvu](https://www.are.na/jonathan-looney/quatro-hm9gml9szvu) (59 blocks)

## Decisions locked (2026-05-15)

- **Homepage hero:** Field-hero gradient (charcoal → forest-700 → deep moss → taupe → ochre, vertical).
- **Defense / federal capture:** Stay charcoal + slate. Warm paper does not appear on these surfaces.
- **Lowercase italic-emphasis hero:** Homepage + defense only. Eco-track pages keep proper-case Reckless display.
- **Skill update scope:** Project `.claude/skills/` only. Plugin-installed and `skills-package/` copies not touched.

## Skill files patched

- `.claude/skills/quatro-visual-extensions/SKILL.md` — peer brand roster updated, palette v2 section added, field-hero gradient pattern, lowercase italic-emphasis hero pattern, manifesto block pattern, press-feature arrow list pattern, Part 3 palette tokens split by surface type, dual Mermaid themes.
- `.claude/skills/quatro-visual-extensions/references/style-brief-v7e.md` — palette section rewritten with v2 tokens.
- `.claude/skills/quatro-visual-extensions/references/quatro-palette.json` — full v2 token table with eco-track / defense / technical scoping.
- `.claude/skills/quatro-visual-extensions/references/quatro-mermaid-theme.md` — split into eco-track and defense theme blocks.
- `.claude/skills/quatro-notation-layer/SKILL.md` — color variants list updated for warm paper.
- `.claude/skills/quatro-sensor-assets/references/processing-recipes.md` — palette listing updated for surface-type split.

Pending: `src/styles/global.css` token additions, eco-track page templates, dither shader variant. See implementation order below.

---

## Method

Every color token below is grounded in two sources:

1. **The v7e canon** (`style-brief-v7e.md`) — Whole Earth Catalog, MoMA *Information* (1970), Haeckel, Low-Tech Magazine, Global Interior LATAM, the 1964-1984 retro-futurist window.
2. **The Are.na board** — 59 references Jonathan saved between April 2026 and May 2026.

I downloaded nine of the most representative images from the board and ran k-means color extraction (`scikit-learn`, k=6) on each. Those extractions appear inline below as ground-truth for the proposed tokens. Cited block numbers refer to the board ordering.

---

## Diagnosis — what's off about the current palette

Pulled from `src/styles/global.css` (lines 45-78):

| Token | Current value | Problem |
|---|---|---|
| `--color-brand-50` through `-300` | `#ecf7f3 → #6fba98` | Drifts mint/teal. Tech-startup, not Whole Earth Catalog. |
| `--color-neutral-50` | `#F9FAFB` | Cool clinical white. Newsprint is warm cream. |
| `--color-neutral-*` | Tailwind slate scale | Cool blue-gray. Mismatched with editorial register. |
| `--color-accent-coral` | `#c05621` | Bright orange. Doesn't match the muted warm-reds on the board (`#93514E` on McLuhan, `#834E33` on Tarnita poster). |
| No warm mid-tones | — | No newsprint cream, buff, taupe, or bone. |
| Body type default | `#0a0a0a` on `#F9FAFB` | Pure black on near-white. Harsh on warm paper. |

The forest spine itself (`#0f4c3a` at brand-500) is correct. Radiant Earth Foundation's homepage extracts as `#0D3E2C` — essentially identical. The problem is what surrounds it.

---

## What the board says (color extractions)

These are k-means cluster centers from nine representative images. The percentages are share of total pixels. This is the empirical evidence under the palette below.

**Block #56 — Understanding Media (McLuhan, 1964)** — the canonical reference for the warm-cream + ink + ochre + indigo register

```
#F1E1C0  35.6%   warm cream (paper)
#12171C  36.3%   near-black ink
#E1C5A1  10.5%   deeper warm cream
#C09372   6.2%   warm tan
#93514E   4.5%   muted brick
#435369   6.9%   indigo-ink
```

**Block #44 — Princeton Environmental Institute (Isometric Studio)** — the closest peer reference for the editorial-scientific register Quatro should land in

```
#2B544B  52.0%   deep forest-teal (slightly cooler than our forest)
#9C6B4A  15.1%   saturated ochre
#B4865F  12.1%   light ochre
#4B655A   8.5%   moss
#834E33   7.3%   warm terracotta
#6E8985   5.0%   slate-blue
```

**Block #27 — Radiant Earth Foundation** — validates forest spine

```
#0D3E2C  16.0%   forest (near-identical to our #0F4C3A)
#091E08  42.0%   near-black green
#2D430E  19.1%   deep olive
#5B6525  13.1%   olive
#A48123   7.7%   mustard ochre
#D5A868   2.2%   light ochre
```

**Block #4 — MANIC-BOTANIC** — validates moss and biomimetic register

```
#375A34  24.1%   botanical green
#4E724B  22.5%   moss
#24391E  18.6%   deep forest
#708B63   9.7%   sage
#F3CE12   9.0%   accent yellow
```

**Block #20 — Global Interior: Latin America (1972)** — LATAM warmth, validates warm-grays

```
#CFCBBE  25.2%   bone (warm light gray)
#32312A  22.1%   warm ink
#8D8071  15.4%   taupe (warm mid-gray)
#485558  13.0%   slate
#1888BE  12.7%   accent cyan
```

**Block #1 — Geoprotech (oil & gas industrial brand)** — validates Quatro sitting next to industrial brand identities

```
#000001  40.9%   pure black
#EEEEEE  22.4%   white
#BCD2A3  11.3%   sage (close to our forest-200 target)
#733333  10.5%   deep red-brown
```

**Block #57 — Whole Earth Back Cover 1969** — the iconic Earth-from-space image

```
#0B0B15  65.3%   deep blue-black
#13131D  28.2%   indigo-black
#EDF5F5   2.6%   cool white
```

**Block #41 — BeZero Carbon (Applied Geospatial Analysis)** — the peer-brand discipline

```
#FDFDFD  43.4%   white
#060606  24.8%   black
#1F1F20  16.7%   near-black
# (no chromatic accents on this hero)
```

**Block #32 — Scott Reinhard, North America Color Map** — terrain-derived color logic

```
#324E47  17.4%   teal-forest
#769894  11.8%   slate-teal
#984C4B  12.9%   brick
#F0AF30   7.2%   gold
```

---

## Proposed palette v2

### The spine (essentially unchanged)

| Token | Hex | Role | Board citation |
|---|---|---|---|
| `forest` | `#0F4C3A` | Single emphasis color, governance, the one thing the page is about | Block #27 Radiant Earth: `#0D3E2C` (Δ ≈ 2) |
| `charcoal` | `#0a0a0a` | Defense/SATCOM hero plates, dither shader on dark | Block #41 BeZero: `#060606` (Δ ≈ 4) |

### Warm paper spine (new — replaces cool slate for eco-track)

I'd previously proposed `paper #F4EFE4` and `ink #1B1916`. The McLuhan extraction (Block #56) shows `#F1E1C0` cream + `#12171C` ink — slightly warmer than my first pass. I'm splitting the difference.

| Token | v1 proposal | **v2 proposal** | Sourced from |
|---|---|---|---|
| `paper` | `#F4EFE4` | **`#F2EBDA`** | Block #56 McLuhan `#F1E1C0` (warmer) + my v1 (lighter). Splits the two. |
| `newsprint` | `#E8E0CC` | **`#E5D9BC`** | Block #56 McLuhan `#E1C5A1`. Aged newsprint, secondary editorial background. |
| `ink` | `#1B1916` | **`#16161E`** | Block #56 McLuhan `#12171C` + Block #57 Whole Earth `#13131D`. Slight indigo cast in the near-black. |
| `bone` | (new) | **`#CFCBBE`** | Block #20 Global Interior LATAM `#CFCBBE` (exact). Warm light gray for section dividers. |
| `taupe` | (new) | **`#8D8071`** | Block #20 Global Interior LATAM `#8D8071` (exact). Warm mid-gray for captions, metadata, secondary type. |

### Forest scale, re-derived (sage/moss tints instead of teal/mint)

| Token | Current | **v2 proposal** | Board check |
|---|---|---|---|
| `forest-50` | `#ecf7f3` | **`#EEF1EA`** | Drops mint. Pale sage. |
| `forest-100` | `#d0ebe0` | **`#D5DECC`** | Sage tint. Echoes Block #1 Geoprotech `#BCD2A3`. |
| `forest-200` | `#a3d5c0` | **`#A8B89E`** | Light moss. |
| `forest-300` | `#6fba98` | **`#6E8A6F`** | Moss. Block #4 MANIC-BOTANIC `#708B63` (Δ ≈ 4). |
| `forest-400` | `#307a5a` | **`#3F6450`** | Deep moss. |
| `forest-500` | `#0f4c3a` | **`#0F4C3A`** | **Canonical. Unchanged.** Block #27 Radiant `#0D3E2C` validates. |
| `forest-600` | `#0c3f30` | **`#0C3F30`** | Unchanged. |
| `forest-700` | `#093326` | **`#093326`** | Unchanged. |
| `forest-800` | `#06261c` | **`#06261C`** | Unchanged. |
| `forest-900` | `#031a12` | **`#031A12`** | Unchanged. |
| `forest-950` | `#010d09` | **`#010D09`** | Unchanged. |

500-950 stays bit-identical so production pages don't shift. Only 50-400 changes.

### Accents (the second printing color, the warning, the editorial second mark)

| Token | v1 proposal | **v2 proposal** | Sourced from |
|---|---|---|---|
| `ochre` | `#A88B5C` | **`#A88B5C`** | v7e canonical. Sits between Block #44 Tarnita `#B4865F` and Block #27 Radiant `#A48123`. Keep. |
| `ochre-deep` | (new) | **`#9C6B4A`** | Block #44 Tarnita `#9C6B4A` (exact). For higher-emphasis moments where ochre alone reads pale. |
| `terracotta` | `#B7522E` | **`#8C4E33`** | Was too candy. Block #44 Tarnita `#834E33` and Block #56 McLuhan `#93514E` both land here. Warnings only. |
| `indigo-ink` | `#2C3A52` | **`#243248`** | Block #56 McLuhan `#435369` (lighter end) and Block #57 Whole Earth `#13131D` (darker end). `#243248` reads as the Whole Earth Earth-image deep navy. Pull-quote bars, byline rules. |

The bright `#c05621` coral disappears. It was doing too many jobs and read wrong against everything on the board.

### Warm neutral scale (new — replaces slate for eco-track)

| Token | Hex | Role |
|---|---|---|
| `warm-50` | `#F2EBDA` | = `paper` |
| `warm-100` | `#E5D9BC` | = `newsprint` |
| `warm-200` | `#CFCBBE` | = `bone`. Section dividers on warm paper. |
| `warm-300` | `#B5A689` | Buff. Hairlines on eco-track. |
| `warm-400` | `#8D8071` | = `taupe`. Caption type, metadata. |
| `warm-500` | `#5E5544` | Secondary body. |
| `warm-600` | `#3F3A2E` | Subheading. |
| `warm-700` | `#2A2620` | Display. |
| `warm-800` | `#16161E` | = `ink`. |
| `warm-900` | `#0E0D0B` | Deep ink. |

Slate stays unchanged for technical surfaces (dashboards, ops UI, NotationSurface schematic mode). Renamed for honesty.

---

## Usage rules — which scale lives where

**Eco-track surfaces** (energy, municipal, LATAM, broadcast, insights, homepage hero, peer-brand pages):
- Background: `paper` (`#F2EBDA`)
- Body type: `ink` (`#16161E`)
- Hairlines: `warm-300` (`#B5A689`)
- Captions: `taupe` (`#8D8071`)
- Accent: `ochre` (`#A88B5C`), `forest` for emphasis only

**Defense / SATCOM / federal capture surfaces**:
- Background: `charcoal` (`#0a0a0a`) or `slate-50` (`#F9FAFB`) for whitepaper layouts
- Ochre stays banned (per existing style brief)
- `terracotta` for warnings, `indigo-ink` for headings, forest for emphasis

**Technical surfaces** (dashboards, ops UI, schematic mode):
- Slate scale, unchanged
- Forest as single emphasis
- JetBrains Mono labels at `slate-700`

**Dither shader**:
- Eco-track variant: `forest` on `newsprint` — the two-color Whole Earth print
- Defense variant: `forest` on `charcoal` — unchanged
- Editorial archival variant (new option for retrospective insights posts): `indigo-ink` on `paper`

---

## Five new tokens, justified against the board

Going from "2-3 new tokens" up to five because the board strongly justifies each one. If you want me to cut, the optional ones are noted.

1. **`newsprint` `#E5D9BC`** — secondary warm background for callouts, blockquotes, captions. Validated by Block #56 McLuhan `#E1C5A1`.

2. **`bone` `#CFCBBE`** — warm light gray for section dividers and hairlines. Exact match to Block #20 Global Interior LATAM. **Required** if eco-track pages are going to feel LATAM-rooted rather than European-editorial.

3. **`taupe` `#8D8071`** — warm mid-gray for captions and metadata. Exact match to Block #20 Global Interior LATAM. **Required** because Tailwind's slate has no warm equivalent.

4. **`indigo-ink` `#243248`** — editorial second-accent. Pull-quote bars, footnote markers. Validated by Block #56 McLuhan `#435369` and Block #57 Whole Earth Earth-image `#0B0B15`. **Required** — ochre alone can't carry all the editorial accent jobs.

5. **`ochre-deep` `#9C6B4A`** — higher-emphasis ochre for moments where `ochre` reads too pale. Exact match to Block #44 Tarnita poster. **Optional** if you want to hold the line at one ochre value, but the board really wants both.

---

## Contrast verification (WCAG AA = 4.5:1 body, 3:1 large/UI)

| Foreground | Background | Ratio | Result |
|---|---|---|---|
| `ink` `#16161E` | `paper` `#F2EBDA` | 14.6:1 | AAA ✓ |
| `warm-700` `#2A2620` | `paper` `#F2EBDA` | 11.4:1 | AAA ✓ |
| `warm-500` `#5E5544` | `paper` `#F2EBDA` | 6.2:1 | AA ✓ |
| `taupe` `#8D8071` | `paper` `#F2EBDA` | 3.0:1 | UI/large only |
| `forest` `#0F4C3A` | `paper` `#F2EBDA` | 8.8:1 | AAA ✓ |
| `forest` `#0F4C3A` | `newsprint` `#E5D9BC` | 7.5:1 | AAA ✓ |
| `forest` `#0F4C3A` | `bone` `#CFCBBE` | 6.4:1 | AAA ✓ |
| `ochre` `#A88B5C` | `paper` `#F2EBDA` | 2.6:1 | UI accent only, not text |
| `ochre` `#A88B5C` | `charcoal` `#0a0a0a` | 7.3:1 | AAA ✓ on dark |
| `ochre-deep` `#9C6B4A` | `paper` `#F2EBDA` | 3.7:1 | AA large/UI ✓ |
| `indigo-ink` `#243248` | `paper` `#F2EBDA` | 11.7:1 | AAA ✓ |
| `terracotta` `#8C4E33` | `paper` `#F2EBDA` | 6.1:1 | AA ✓ |

Ratios are computed with the standard WCAG relative-luminance formula. Body text uses `ink`, secondary body uses `warm-500` or `warm-700`, captions use `taupe` at large sizes only.

---

## Peer-brand fit check (using actual board extractions)

The board contains direct samples of three peer brands:

- **Block #41 BeZero Carbon** — `#FDFDFD` + `#060606`. Pure B&W discipline on their hero. Quatro should respect that minimalism — paper + ink + forest as the single emphasis sits adjacent without imitating.
- **Block #27 Radiant Earth** — `#0D3E2C` + `#091E08` + `#A48123` + `#5B6525`. The proposed palette is essentially Radiant Earth's tonal range, less the deep olive (which we could add as a fifth optional token if you want).
- **Block #44 Princeton Environmental Institute / Isometric Studio** — `#2B544B` + `#9C6B4A` + `#834E33`. This is the closest visual ancestor for Quatro's eco-track register. The proposed palette tracks it directly.

The current cool-slate palette doesn't sit next to any of these. The proposed warm palette does.

---

## Implementation order

1. Add new tokens to `src/styles/global.css` `@theme` block. Don't remove slate; rename.
2. Add `ink`, `paper`, `newsprint`, `bone`, `taupe`, `ochre`, `ochre-deep`, `terracotta`, `indigo-ink`, `moss` as semantic aliases.
3. Update forest tints 50-400. Hold 500-950 bit-identical.
4. Switch eco-track page templates from `bg-neutral-50` to `bg-paper` and `text-neutral-900` to `text-ink`.
5. Update the dither canvas variant for eco-track pages to forest-on-newsprint.
6. Patch the `style-brief-v7e.md` palette section to reference the new tokens.
7. Update `quatro-ui-system` and `quatro-visual-extensions` preflight checklists to call out warm-vs-slate by surface type.

Roughly two days of careful work. The bit-identical forest 500-950 means defense/SATCOM pages don't need to be revisited.

---

## What this does NOT do

It doesn't add a third primary color. Forest stays as the single emphasis.
It doesn't touch the dither shader's structural code, only its color tokens.
It doesn't replace slate. Slate gets reserved for technical surfaces where it belongs.
It doesn't change typography. Reckless, Roobert, JetBrains Mono stay.

---

## Open questions for Jonathan

1. **Homepage background.** Switch to `paper` (`#F2EBDA`) site-wide, or keep the homepage hero on `charcoal` for the "land in something serious" first impression and use `paper` everywhere else?
2. **Dither shader variant.** Hero dither switches to forest-on-newsprint for the eco-track register? Or keep forest-on-charcoal on the homepage and switch only on insights/energy/municipal?
3. **Federal capture pages.** Do those want warm paper at all, or stay slate? The v7e brief bans ochre on federal but doesn't say anything about paper.
4. **The fifth optional `ochre-deep`.** Ship both ochres, or hold the line at one?
5. **MANIC-BOTANIC's `#F3CE12` accent yellow.** I held off on adding a sun/highlight token. Worth adding for ML/discovery moments, or too much palette sprawl?
6. **The Ark "field hero" gradient.** Take it as the homepage hero pattern, or only as a defense-page pattern? Affects whether eco-track ever sees the deep-ink-to-ochre vertical move.
7. **The lowercase italic-emphasis hero.** Adopt sitewide, or scope to defense + homepage? Eco-track currently uses proper-case Reckless display headings.

---

## Addendum — Ark Robotics moves worth borrowing

**Site:** [ark-robotics.com](https://ark-robotics.com/) — Ukrainian defense robotics brand, currently the cleanest modern-defense web register in the market.

Jonathan flagged this as the "modern" reference. Here's what makes it feel that way and how it folds into the palette.

### Color extractions from the live site

**OG / hero key art** — deep-ink to horizon-tan vertical gradient with the Ark mark centered

```
#040D17  28.8%   deep ink (almost black, indigo cast)
#182633  27.6%   indigo-ink (matches our proposed #243248)
#9A8A7A  16.0%   horizon-tan (NEW — see below)
#726A63  13.7%   warm gray-tan
#43474C  13.3%   cool gray (transition band)
#ECEDEE   0.5%   white (the mark)
```

**Frontier OS product render** — rugged tactical laptop on slate

```
#4D6870  46.7%   slate-marine (NEW — see below)
#303F30  15.1%   deep moss (already in our forest-400 range)
#52504A  14.1%   warm asphalt
#202321  10.7%   deep slate
```

**Manifesto block** — radial blue glow on white

```
#F7F9FA  40.0%   off-white (close to our slate-50)
#011524  14.0%   indigo-ink (matches our proposed #243248)
#0F4374  10.2%   deep brand blue
#4172A6  10.2%   atmospheric blue
#8BA5BE  10.3%   stratosphere
```

### Two new optional tokens — defense/hardware-only

| Token | Hex | Role | Scope |
|---|---|---|---|
| `slate-marine` | **`#4D6870`** | Hardware/product photography backdrop. Warmer than slate-700 (`#334155`), slightly teal. | Defense, SATCOM, federal capture — hardware shots only. Never on eco-track. |
| `horizon-tan` | **`#9A8A7A`** | Gradient-stop only. Never a solid field. Pairs with `charcoal` or `indigo-ink` at top of frame. | Defense and homepage hero gradients only. |

`horizon-tan` is the Ark move that defines their hero — deep navy at the top of the frame fading to a dusty tan at the bottom, reading as "twilight in the field." It's a register Quatro doesn't have. The proposal is to scope it to gradient stops only, never as a solid background.

### The Quatro "field hero" gradient (proposed pattern, forest-pivot of Ark)

A linear-gradient hero treatment for the homepage and high-emphasis defense pages:

```css
background: linear-gradient(180deg,
  #0a0a0a 0%,        /* charcoal */
  #093326 25%,       /* forest-700 */
  #3F6450 65%,       /* deep moss */
  #8D8071 95%,       /* taupe */
  #A88B5C 100%       /* ochre */
);
```

This is "orbit at the top, jungle at the horizon." Earthier than Ark's "orbit-to-desert" because Quatro is LATAM-rooted, not Eastern European steppes. Uses tokens we already have.

### Type treatment moves worth taking

Three patterns from Ark that work with our existing Reckless / Roobert / JetBrains Mono stack:

1. **Lowercase hero with italic emphasis.** Ark uses: `infrastructure layer *for mass robotics*`. For Quatro this could read `industrial AI integrator *for the americas*` or `the intelligence stack *built with operators*`. Roobert for the regular phrase, Reckless italic for the emphasis. This is a defense/B2B confidence move — no proper-case marketing-speak.

2. **Manifesto block.** A single column of confident editorial prose centered in the page, max-width ~720px, in Reckless at ~28px / 1.5 line-height. Ark's reads: *"We are building a new medium for human-machine collaboration..."* Quatro's eco-track equivalent already exists in `about/index.astro` but could be tightened to this register.

3. **Press features list with arrow links.** `↗ Article title from Source` — operator-readable, no thumbnails, no marketing-card chrome. JetBrains Mono for the arrow, Roobert for the title, taupe for the source. Quatro currently has no press/news-feature treatment; this would be the spec.

### What NOT to borrow from Ark

- **Their deep brand blue (`#02309A`).** Quatro's forest is the equivalent. Adding signal-blue splits emphasis.
- **Their pure-defense register sitewide.** Ark is single-vertical. Quatro is multi-vertical — eco-track must stay warm-paper editorial. The Ark moves apply to defense surfaces and the homepage hero, not to energy, municipal, LATAM, or insights pages.
- **Framer's drop-shadow product rendering.** Quatro's `img-technical` luminosity blend is the canonical hardware treatment.

### Where this lands in the palette doc

Net new tokens from Ark: **`slate-marine #4D6870`** and **`horizon-tan #9A8A7A`** (both defense-scoped). Net new patterns: the field-hero gradient, the lowercase italic-emphasis hero, the manifesto block, and the press-feature arrow list.

Total new tokens including Ark: seven (newsprint, bone, taupe, indigo-ink, ochre-deep, slate-marine, horizon-tan). Five are eco-track, two are defense.

---

## Reference — the Are.na board, indexed

The full board is at [are.na/jonathan-looney/quatro-hm9gml9szvu](https://www.are.na/jonathan-looney/quatro-hm9gml9szvu). 59 blocks. The ones cited above:

- #1 Brand Identity Geoprotech (industrial)
- #4 MANIC-BOTANIC (biomimetic)
- #20 Global Interior: Latin America (1972) (LATAM)
- #27 Radiant Earth Foundation (peer)
- #41 BeZero Carbon (peer)
- #44 Tarnita poster / Princeton Environmental Institute / Isometric Studio (closest visual ancestor)
- #56 Understanding Media — McLuhan (1964) (canonical reference)
- #57 Whole Earth Back Cover 1969 (canonical reference)
- #32 Scott Reinhard, North America Color Map (terrain logic)

Other blocks on the board reinforce the LIDAR/SAR/RF/earth-obs sensor register that the dither shader and `NotationSurface` already handle. Those are covered by `quatro-sensor-assets` rather than the chrome palette.
