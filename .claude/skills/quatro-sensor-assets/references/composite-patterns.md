# Composite Two-Sensor Patterns

The strongest single image on any Quatro page. Two sensors. One subject. A bridging notation. Used sparingly — at most one per page, on the most important hero.

This is the move borrowed directly from the Foundation Capital moodboard's archival-modern split. The mechanics are identical: two visual truths about the same subject, a hand-drawn mark between them, a single caption that earns both halves.

---

## The Five Canonical Pairs

Use only these pairs. They each answer a specific question the page is making.

### Pair 1 — LIDAR + SAR

**Question answered:** What is physically there, and how does it respond to radar?

**Use for:** Critical infrastructure pages. Defense pages. Any subject where the structure and the electromagnetic signature are both part of the argument.

**Composition:**
- Left half: LIDAR point cloud, forest-on-charcoal.
- Right half: SAR grayscale with native speckle.
- Bridging notation: horizontal arrow from LIDAR to SAR, roughly centered.
- Caption: "Structure and return, same target."

### Pair 2 — Splat + Earth Observation

**Question answered:** What does it look like on the ground, and how does the landscape around it read from orbit?

**Use for:** Industry hero images. Customer site introductions. Case study leads.

**Composition:**
- Left half: Gaussian splat poster, muted.
- Right half: Sentinel-2 NIR false-color at regional scale.
- Bridging notation: small bracket spanning both halves, pointing at the subject location.
- Caption: "Ground truth and orbital context."

### Pair 3 — RF Waterfall + Photography

**Question answered:** What did the operator capture on the SDR, and what is the physical source?

**Use for:** Broadcast industry, satellite communications, SATCOM revenue assurance.

**Composition:**
- Left half: RF waterfall, forest-on-charcoal colormap.
- Right half: Black-and-white operator photography of the antenna or instrument that captured it.
- Bridging notation: arrow from a specific signal in the waterfall toward the antenna in the photograph.
- Caption: "Unintended carrier traced to the uplink chain."

### Pair 4 — Earth Observation Time-Series (1985 / Now)

**Question answered:** What has changed, and over what period?

**Use for:** Eco-track content, environmental monitoring, climate adaptation, infrastructure evolution.

**Composition:**
- Left half: Landsat 5 scene from 1985 (or earlier).
- Right half: Landsat 9 / Sentinel-2 scene from the current year, same location, same season.
- Bridging notation: horizontal arrow left-to-right, labeled with the date span in mono underneath.
- Caption: "Forty years of encroachment."

### Pair 5 — Multispectral + Thermal

**Question answered:** What does the crop health look like, and where is the heat stress?

**Use for:** Agricultural content, energy infrastructure (substation hot spots), urban heat-island analysis.

**Composition:**
- Left half: Sentinel-2 NDVI or SWIR.
- Right half: Landsat thermal band or ECOSTRESS.
- Bridging notation: bracket around the area where both layers disagree (healthy green, elevated heat).
- Caption: "Vegetation looks fine. Thermal says otherwise."

---

## Composition Rules

### Aspect and Crop

- Full composite: 2560 × 1440 (16:9).
- Each half: 1280 × 1440 (4.5:5, portrait-tending).
- No gap, no gutter, no seam styling. The two halves butt directly together. The hard edge is the compositional element.

### Palette Matching

Both halves must share the Quatro palette. If one half is forest-on-charcoal and the other is paper-tinted SAR, the composite will look mismatched. Process both assets to the same ground state before combining.

### Notation

- Exactly one notation mark per composite.
- The mark must physically span both halves, or at minimum sit on the seam.
- Allowed marks for composites: arrow (most common), bracket, underline (below, not above).
- Banned marks for composites: X, circle (both read as "point at one thing," not "connect two things").

### Caption

- Single caption for the whole composite.
- Instrument line uses the `/ ` separator between the two sensors' metadata.
- Operator note refers to what both halves together show.
- Do not write two captions.

### Subject Discipline

- Both halves must show the same subject. A LIDAR of Substation 04 paired with SAR of Substation 02 is dishonest.
- Dates should be within one week of each other unless the composite is explicitly a time-series pair.
- Orientation of the subject should match between halves (north up both, or south up both).

---

## When Not to Use a Composite

- On any page that already has a dither canvas hero. The canvas is carrying the weight.
- On pages with fewer than three total sensor assets. If the rest of the page cannot support the tone, the composite will look like a stunt.
- On utility pages (contact, resources, legal, about). Composites are reserved for content heroes.
- When one of the two halves is weak. A great LIDAR paired with a mediocre SAR produces a mediocre composite.

---

## Storage and Manifest

Composites live at `public/images/sensor/composite/`.

Filename: `<sensor-a>-<sensor-b>-<location-slug>-<YYYYMMDD>.png` per `asset-naming.md`.

Manifest entry includes a `composite_of` field referencing the two source asset IDs:

```json
{
  "id": "lidar-sar-gs04-20260405",
  "path": "/images/sensor/composite/lidar-sar-gs04-20260405.png",
  "sensor": "composite",
  "composite_of": [
    "sit-ground-station-04-20260405",
    "s1-iw-vv-ground-station-04-20260312"
  ],
  "instrument": "LIDAR · USGS 3DEP · 2024-09-15 / SAR · SENTINEL-1 · 2026-03-12",
  "operator_note": "Two instruments agree on the new structure at the south end.",
  "notation": {
    "mark": "arrow",
    "span": "both-halves"
  },
  ...
}
```

When either source asset is retired or replaced, the composite must be regenerated.

---

## One Last Rule

A composite answers a question. If the page does not need a question answered visually, it does not need a composite. Force yourself to articulate the question in one sentence before building the asset. If the question is weak, the composite will be weak.
