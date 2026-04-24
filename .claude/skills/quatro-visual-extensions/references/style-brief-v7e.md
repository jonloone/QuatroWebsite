# Style Brief — v7e (Eco-Futurist)

The third Quatro image generation style. Fills the gap when real sensor data is unavailable or when biomimetic illustrations are needed. Third in the preference order behind real sensor data and procedural generation.

## Aesthetic Anchors

- Whole Earth Catalog (1968 to 1971). Newsprint warmth, two-color discipline.
- Kynaston McShine's MoMA "Information" (1970). Halftone, typewriter, photocopy.
- Haeckel's Kunstformen der Natur (1899 to 1904). Scientific illustration canon.
- Low-Tech Magazine. Contemporary embodiment of the register.
- Global Interior Latin America (1972). Radical architecture, LATAM rooted.

## Palette

Only the Quatro palette:
- Forest `#0f4c3a`
- Paper `#F9FAFB`
- Charcoal `#0a0a0a`
- Structure `#E2E8F0`
- Ochre `#A88B5C` (eco-track only)

No gradients. No neon. No cinematic color grading.

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

- Neon colors, gradients, cinematic grading.
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
