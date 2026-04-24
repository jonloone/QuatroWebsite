# Caption Template

Every sensor asset carries a two-line caption. The caption is where the human shows up. The image is the futurist half of the composition; the caption is the humanist half.

---

## The Format

**Line 1 — Instrument metadata.** Mono font, uppercase, middle-dot separators.

**Line 2 — Operator note.** Reckless (serif), sentence case, 6–12 words.

**Optional: notation underline** beneath a key word in the operator note.

---

## Per-Sensor Patterns

### LIDAR

```
USGS 3DEP · 0.7M GSD · 2024-09-15
Operator traced the conveyor alignment from the point cloud.
```

**Fields:** source · ground sample distance · acquisition date.

### SAR

```
SENTINEL-1 · IW · VV · 2026-03-12T18:42Z
Flood extent visible in the speckle signature.
```

**Fields:** mission · acquisition mode · polarization · datetime with Zulu.

### RF Waterfall

```
L-BAND · 1.575 GHZ · GROUND STATION 04 · 2026-04-02
Unintended carrier identified inside the GPS L1 band.
```

**Fields:** band · center frequency · capture site · date.

### Earth Observation

```
LANDSAT 9 · OLI · NIR 5-4-3 · 2025-11-04
Forest encroachment at the substation perimeter.
```

**Fields:** mission · sensor · band combination · date.

### Gaussian Splat

```
LUMA SPLAT · GROUND STATION 04 · 2026-04-05
Antenna feed geometry captured in situ.
```

**Fields:** capture tool · site · date.

### Multispectral Agricultural

```
SENTINEL-2 · MSI · AGRICULTURE 11-8-2 · 2025-09-12
Yield variance across the eastern quarter-section.
```

**Fields:** mission · sensor · band combo · date.

### Composite Two-Sensor Split

```
LIDAR · USGS 3DEP · 2024-09-15    /    SAR · SENTINEL-1 · 2026-03-12
Two instruments agree on the new structure at the south end.
```

**Fields:** sensor A meta / sensor B meta, separated by " / ". Operator note spans.

---

## Voice Rules for the Operator Note

From `jonathan-voice` and `quatro-cascade`. The operator note has to sound like a human, not marketing copy.

### Do

- Name the specific thing the operator noticed or did.
- Use plain verbs: flagged, traced, caught, noted, confirmed, ruled out.
- Put the subject first: the conveyor, the carrier, the flood, the perimeter.
- Keep it under 12 words.
- Sentence case. One period.

### Do not

- Use marketing verbs: enabled, empowered, unlocked, leveraged.
- Start with "We" or "Our." The operator is the hero, not the platform.
- Describe the image. The image describes itself. The note describes what the operator did with it.
- Pile on adjectives. One verb, one object.
- Add exclamation points.

### Examples

**Bad:** "Quatro's cutting-edge LIDAR technology enables unprecedented visibility into industrial sites."

Why: marketing voice, platform-as-hero, describes capability not moment.

**Good:** "Operator traced the conveyor alignment from the point cloud."

Why: human subject, specific verb, specific object, past-tense moment.

**Bad:** "AI analyzes Sentinel-1 to detect flood extent across the region."

Why: AI is the hero, no operator, no moment.

**Good:** "Flood extent visible in the speckle signature."

Why: the instrument tells the operator something. Passive voice works here because the instrument is the agent.

**Bad:** "Revolutionary insights into satellite revenue assurance."

Why: no specifics, puffery vocabulary, no moment.

**Good:** "Unintended carrier identified inside the GPS L1 band."

Why: exact finding, specific band, actionable.

---

## Notation Underline (Optional)

One word in the operator note may carry an underline notation from the `quatro-notation-layer` skill.

Choose a word that:
- Names the specific thing found (the noun, not the verb).
- Would be the word the operator would point to if showing a colleague.

Examples (underlined word in bold):

- "Operator traced the **conveyor** alignment from the point cloud."
- "Unintended **carrier** identified inside the GPS L1 band."
- "Forest **encroachment** at the substation perimeter."

Do not underline every caption. Use the underline when a specific word is the payoff. If everything is emphasized, nothing is.

---

## Rendering

The caption renders as a `CaptionBlock.astro` component:

```astro
<CaptionBlock
  instrument="SENTINEL-1 · IW · VV · 2026-03-12T18:42Z"
  operatorNote="Flood extent visible in the speckle signature."
  notationTarget="speckle"
/>
```

The component:
- Line 1: `font-mono text-[10px] uppercase tracking-[0.1em] text-white/40` on dark, `text-neutral-500` on light.
- Line 2: `font-sans text-sm` (Reckless) `text-white/60` on dark, `text-neutral-600` on light.
- Notation: SVG underline layered over the target word via a `<mark>` span.

---

## What Caption Never Does

- Credit Quatro in the caption itself. The site does that elsewhere.
- Name the customer unless authorized. "Ground Station 04" not "Puntonet Site 04" unless the customer approved.
- State the finding in a way that is politically sensitive without review. For LATAM content and defense content, review captions with the relevant stakeholder before publish.
- Announce a product name. The caption is about the operator, not the platform.
