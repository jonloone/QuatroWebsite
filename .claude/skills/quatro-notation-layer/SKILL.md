---
name: quatro-notation-layer
description: >
  Use this skill whenever Jonathan needs to apply a hand-drawn notation mark (circle, arrow, X,
  underline, bracket, starburst) to an image, component, or hero surface on the Quatro website.
  Covers the SVG mark library, stroke parameters, positioning rules, color rules, and interaction
  patterns. Triggers include: notation, annotation, hand-drawn, marker, circle, arrow, operator mark,
  call out, highlight, pen mark, margin note, bracket, underline. Always use this skill before adding
  any notation mark to a Quatro visual asset.
---

# Quatro Notation Layer

The hand-drawn marker layer that sits on top of Quatro's sensor plates, photography, and non-photo surfaces. The notation is the human half of every visual composition — it is the operator showing a colleague what to look at.

## What This Skill Is For

Every signature image on the Quatro site carries a notation mark. Not two. One. The mark is the single element that distinguishes an image from a stock photo — it says "an operator is here, reading this."

Use this skill to:
- Pick the right mark for a given image.
- Position the mark correctly.
- Generate the SVG with the roughness filter that makes it read as drawn.
- Wire the mark into the `NotationSurface` Astro component.

## The Six Marks

The entire library is six SVG files. Do not add a seventh without a real reason.

| Mark | Reads as | Best use |
|---|---|---|
| `circle` | "Look at this specific thing" | Anomaly detection, outlier, point of interest |
| `arrow` | "From here to there" | Flow, transformation, before/after, causation |
| `x` | "This is wrong, or was the old way" | Deprecated approaches, broken patterns |
| `underline` | "This word matters" | Caption emphasis, on a single word in prose |
| `bracket` | "This range matters" | Spanning multiple elements, range selection |
| `starburst` | "A discovery, a spark" | Moments of insight, found signals, detection events |

Each mark has three color variants:
- `white` — for dark backgrounds (on `#0a0a0a` charcoal, sensor plates, dither, field-hero gradient)
- `forest` — for light backgrounds (on `#F2EBDA` warm paper, eco-track register; or `#F9FAFB` slate-50 on technical/defense surfaces)
- `charcoal` — rare, for ochre eco-track accents
- `ink` — for warm paper backgrounds where forest is too saturated (on `#F2EBDA` paper, when the surrounding type is also ink `#16161E`)

## The Roughness Rule

Every notation mark passes through an SVG `feTurbulence` displacement filter so it reads as drawn, not vector-perfect. A clean bezier circle reads like a UI border. A circle with 0.8–1.2 displacement reads like a marker stroke.

Canonical filter (copy into every mark SVG):

```svg
<filter id="roughen" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="1" />
  <feDisplacementMap in="SourceGraphic" scale="3" />
</filter>
```

Vary the `seed` value across marks on the same page so no two look identical.

## Positioning Rules

Notation is not decorative. It points at the one thing the operator would show a colleague. Three rules:

1. **Off-center usually wins.** A mark dead-center of an image reads as decoration. A mark in the upper-right third reads as pointing.
2. **The mark touches the subject.** A circle should intersect the anomaly it calls out. An arrow should land on the destination. A bracket should span the range exactly.
3. **One mark per image.** If two things need calling out, split into two images or pick the more important one. Two marks on one image is noise.

## Stroke Parameters

Strokes are one of three weights:

- `thin` — 2px, for underlines and small-detail brackets.
- `regular` — 3px, the default, for circles, arrows, starbursts on hero images.
- `bold` — 5px, for hero compositions where the notation needs to read from distance.

Never use 1px (reads as UI) or 8px+ (reads as decorative).

Stroke linecap: `round`. Stroke linejoin: `round`. No dashes.

## Interaction Patterns

On static images: the mark is always visible at 100% opacity.

On `NotationSurface` with hover (when the surface is a card or link):
- At rest: mark at 60% opacity.
- On hover: mark at 100% opacity, with an optional 400ms `stroke-dashoffset` animation that redraws the mark.

On sensor plates with `img-technical`:
- At rest: mark at 80%, image desaturated.
- On hover: mark at 100%, image activates to full color.
- Timing: 300ms ease-out, matching the `img-technical` transition.

## The Six SVG Files

All live in `assets/notation-library/`. Drop-in ready. View each one below.

### circle

A circle drawn in a single pass, roughly 270° closure (overshooting is natural).

### arrow

A single-headed arrow, 30° head angle, shaft with a slight curve (not straight — drawn arrows curve).

### x

Two strokes crossing, neither perfectly centered on the other. Canonical asymmetry.

### underline

A wobbly horizontal stroke, length parametric to the word it underlines. Rendered as a `<mark>` span backdrop.

### bracket

A square bracket opening left or right, top and bottom ticks visible, vertical stroke at 30–40% the length of the span it wraps.

### starburst

Three to five radiating strokes from a central point, asymmetric, unequal lengths.

## When Notation Is NOT Used

Not every image gets notation. Avoid notation on:

- Card grids where repetition would be noise (use notation on the featured card only).
- Background textures and dither canvases (the canvas is the visual).
- Utility pages (contact, resources, legal) — they don't need operator voice.
- Functional UI (buttons, form inputs, tables).
- Every image on a single page. Hero yes, maybe one featured asset. Not every card.

## Preflight Check

Before shipping a notation mark:

- [ ] One of the six canonical marks, not a custom one.
- [ ] Roughness filter applied with a unique seed.
- [ ] Color matches surface (white on dark, forest on light).
- [ ] Stroke weight picked (thin, regular, or bold).
- [ ] Positioned off-center and touching the subject.
- [ ] One mark on the image, not two.
- [ ] On interactive surfaces: hover state wired.
- [ ] Manifest entry updated with `notation: { mark, position, color }`.

## Related Skills

- `quatro-sensor-assets` — every sensor asset gets a notation.
- `quatro-ui-system` — for the `NotationSurface` component that hosts marks.
- `quatro-cascade` — for the caption voice that pairs with the mark.

## Source Files in This Skill

- `references/mark-library.md` — detailed spec per mark.
- `references/positioning-rules.md` — composition rules.
- `references/stroke-parameters.md` — stroke and filter details.
- `references/interaction-patterns.md` — hover, animated draw, static.
- `assets/notation-library/circle.svg` — drop-in SVG.
- `assets/notation-library/arrow.svg` — drop-in SVG.
- `assets/notation-library/x.svg` — drop-in SVG.
- `assets/notation-library/underline.svg` — drop-in SVG.
- `assets/notation-library/bracket.svg` — drop-in SVG.
- `assets/notation-library/starburst.svg` — drop-in SVG.
- `templates/NotationMark.astro` — reference Astro component.
