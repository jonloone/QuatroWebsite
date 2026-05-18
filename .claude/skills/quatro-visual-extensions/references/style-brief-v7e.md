# Style Brief — v7e (Eco-Futurist)

The third Quatro image generation style. Fills the gap when real sensor data is unavailable or when biomimetic illustrations are needed. Third in the preference order behind real sensor data and procedural generation.

## Aesthetic Anchors

- Whole Earth Catalog (1968 to 1971). Newsprint warmth, two-color discipline.
- Kynaston McShine's MoMA "Information" (1970). Halftone, typewriter, photocopy.
- Haeckel's Kunstformen der Natur (1899 to 1904). Scientific illustration canon.
- Low-Tech Magazine. Contemporary embodiment of the register.
- Global Interior Latin America (1972). Radical architecture, LATAM rooted.
- Ark Robotics (2025–2026). Modern-defense register: lowercase italic-emphasis hero, deep-ink-to-horizon-tan vertical gradient, slate-marine product photography. Reference for the homepage hero treatment only.

## Palette (v2 — May 2026 refinement)

Refined against the Are.na inspiration board (https://www.are.na/jonathan-looney/quatro-hm9gml9szvu) and Ark Robotics as the modern-defense reference. Full rationale in `QUATRO-PALETTE-V2-PROPOSAL.md` at the project root.

**Spine (unchanged):**
- Forest `#0F4C3A`
- Charcoal `#0a0a0a`

**Warm spine (NEW — replaces cool slate for eco-track):**
- Paper `#F2EBDA` (warm newsprint cream — replaces `#F9FAFB` on eco-track)
- Newsprint `#E5D9BC` (secondary editorial background)
- Ink `#16161E` (warm near-black body type — replaces `#0a0a0a` on warm paper)
- Bone `#CFCBBE` (warm light gray, section dividers)
- Taupe `#8D8071` (warm mid-gray, captions and metadata)

**Accents:**
- Ochre `#A88B5C` (canonical eco-track second color)
- Ochre-deep `#9C6B4A` (higher-emphasis ochre)
- Terracotta `#8C4E33` (warnings only — replaces the bright `#c05621`)
- Indigo-ink `#243248` (editorial second accent, pull-quote bars, footnote markers)
- Moss `#6E8A6F` (quiet support color for charts and secondary data tracks)

**Defense-scoped tokens (NEW from Ark Robotics analysis):**
- Slate-marine `#4D6870` (hardware/product photography backdrop — defense only)
- Horizon-tan `#9A8A7A` (gradient stop only, never a solid field — defense and homepage hero only)

**Cool slate scale** stays unchanged for technical surfaces (dashboards, ops UI, schematic mode). Renamed to `slate-*` for honesty.

No solid-field gradients. No neon. No cinematic color grading.
Field-hero gradient (charcoal → forest → taupe → ochre, vertical) is permitted on the homepage hero and high-emphasis defense pages only. See `QUATRO-PALETTE-V2-PROPOSAL.md` for the spec.

## Three Shot Types

### v7e-1 — sensor-mimic

Mimic of a LIDAR, SAR, RF, or earth observation plate. Used when real data is unavailable. Every output is tagged `mimic` in the manifest.

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

### v7e-2 — biomimetic

Block-print natural-form illustration in the Haeckel tradition. Two-color printmaking aesthetic. For insights posts about natural networks, biomimetic algorithms, ecology-meets-infrastructure content.

Prompt template:

```
Two-color printmaking illustration of [SUBJECT], forest green on paper,
Ernst Haeckel scientific illustration style, clean line work, no shading,
no photorealism, 19th century natural history plate aesthetic.
```

### v7e-3 — archival-modern-split

Foundation Capital two-era split composition. Archival reference on one half, modern reference on the other, of the same subject. Used as hero for insights posts arguing a continuity or transformation.

Prompt template:

```
Split composition: left half shows [ARCHIVAL SUBJECT] in black and white with
vintage grain, right half shows [MODERN SUBJECT] in Quatro forest-paper palette,
both the same subject type, editorial register.
```

## The Humanist Layer

Every v7e output receives a notation mark in post-processing via the `quatro-notation-layer` skill. Do not prompt for notation. Add it after generation.

## What v7e Never Does

- Neon colors, gradients (other than the sanctioned field-hero gradient), cinematic grading.
- Stock-photo cliché (people pointing at screens, handshakes).
- Sensors or instruments that do not actually exist.
- AI-generated text, numbers, or labels (they will render wrong).
- People. v7e subjects are instruments, systems, landscapes, illustrations. Operator photography stays in v7.1.

## Budget Rule

Mimics cap at 30 percent of all v7e outputs. Audit quarterly:

```bash
jq '[.[] | select(.style == "v7e") | select(.real_or_mimic == "mimic")] | length' \
  manifests/sensor-assets.json
```

When the mimic ratio exceeds 30 percent, flag the oldest mimics for real-capture replacement.
