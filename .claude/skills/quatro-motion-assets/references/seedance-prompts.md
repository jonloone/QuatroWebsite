# Seedance 2.0 Prompt Library

Seedance 2.0 is the AI video generation model from ByteDance, accessible via Replicate. Used as the fallback when real capture is impossible and procedural motion does not fit.

**Hard rule:** every Seedance output is logged as `mimic` in the motion manifest. Every Seedance output is a candidate for replacement with real capture later.

---

## Prompt Construction Principles

Seedance responds well to:
- Subject first, then motion, then look, then duration.
- Specific color instructions (Quatro palette, not "moody" or "cinematic").
- Explicit aspect and duration.
- Cinematic vocabulary: "slow pan," "24fps," "film grain," "anamorphic."

Seedance responds poorly to:
- Multiple subjects ("people and equipment and...").
- Abstract vocabulary ("dynamic," "cutting-edge," "futuristic").
- Text rendering (it fails, always).
- Complex camera moves (prefer one camera verb: pan, orbit, push-in, pull-out).

---

## Shot Type Prompts

### `sensor-mimic` — drone-pass LIDAR/SAR mimic

**Template:**

```
Slow aerial drone pass over [SUBJECT] at [TIME OF DAY],
sensor-filtered visual style, desaturated forest green (#0f4c3a) color grade,
subtle 16mm film grain, 24fps cinema motion, no people visible,
16:9 aspect ratio, 15 second duration.
```

**Variables:**
- `[SUBJECT]` — a coastal substation, a tropical watershed, a satellite ground station.
- `[TIME OF DAY]` — golden hour, blue hour, overcast noon, pre-dawn. Avoid "night" (Seedance produces muddy black).

**Example filled in:**

> Slow aerial drone pass over a coastal substation in the Ecuadorian Pacific at golden hour, sensor-filtered visual style, desaturated forest green color grade, subtle 16mm film grain, 24fps cinema motion, no people visible, 16:9 aspect ratio, 15 second duration.

---

### `biomimetic-grow` — organic branching motion

**Template:**

```
Slow organic growth of a branching network structure,
forest green lines on paper background, scientific illustration style,
one continuous stroke weight, no ornate detail, 12 second duration, 16:9.
```

**Use sparingly.** The procedural root-network algorithm beats AI for this almost always. Use Seedance only when the subject is a real organic form (mycelium, coral, coastal erosion) that the space-colonization algorithm does not reproduce convincingly.

---

### `atmospheric-loop` — dark ambient background

**Template:**

```
Slow atmospheric drift of fog and particulate over a dark industrial landscape,
near-monochrome charcoal (#0a0a0a) palette with subtle forest green highlights,
no people, no vehicles, low contrast, seamless 20 second loop, 16:9.
```

**Variables to add:**
- Terrain: "coastal," "altiplano," "tropical lowland," "mountain."
- Weather: "misty," "overcast," "post-storm."

---

### `archival-modern-split` — two-era composite mimic

**Template:**

```
Split-screen composition: left half shows historical black-and-white
industrial operations footage from the 1960s-70s, right half shows modern
color aerial infrastructure view of the same subject, slow pan across both halves,
12 second duration, 16:9 aspect ratio.
```

**Note:** Seedance struggles with perfect split-screen. Expect to composite two separate outputs in post. Plan the split as an editing step, not a single-prompt output.

---

## Parameter Matrix

Reference settings per shot type:

| Shot type | Duration | Aspect | Seed | Guidance |
|---|---|---|---|---|
| sensor-mimic | 15s | 16:9 | varied | default |
| biomimetic-grow | 12s | 16:9 | varied | default |
| atmospheric-loop | 20s | 16:9 | fixed per use | default |
| archival-modern-split | 12s (×2) | 16:9 per half | fixed | default |

**Seed discipline:**
- `varied` — use random seeds across iterations, pick the best output.
- `fixed per use` — once you find a working seed for a loop asset, reuse that seed for regeneration at higher resolution.

---

## Voice Rules for the Caption

Seedance outputs still carry a caption per `quatro-sensor-assets` caption-template. The caption makes the mimic honest:

**Good caption on a Seedance sensor-mimic:**

```
MIMIC · AI-GENERATED · 2026-04-23
Stand-in for the pending Esmeraldas LIDAR capture.
```

The caption names the asset as a mimic. Do not pretend it is real capture.

**Bad caption on a Seedance sensor-mimic:**

```
SENTINEL-1 · IW · VV · 2026-04-23
Flood extent visible in the speckle signature.
```

This is dishonest. It implies real Sentinel data where none exists.

---

## Budget Rule

No more than 10% of motion assets on the site are Seedance-generated. Audit monthly:

```bash
# scripts/audit-seedance-ratio.sh
jq '[.[] | select(.real_or_mimic == "mimic")] | length' \
  manifests/motion-assets.json
jq 'length' manifests/motion-assets.json
```

If the ratio exceeds 10%, flag the oldest mimics for real-capture replacement.

---

## When Seedance Fails

Seedance 2.0 has known weaknesses:

- **Text rendering.** Do not prompt for signage, panel readouts, dates on screen. Add text in post.
- **Hands and fine human detail.** Avoid people in prompts whenever possible.
- **Consistent geometry across a shot.** A single building deforms mid-motion. Use cuts rather than long continuous shots of specific objects.
- **True black.** Seedance trends toward muddy dark-gray. Raise the floor slightly in post with a levels adjustment.
- **Physical instrumentation accuracy.** Do not use Seedance for imagery intended to look like specific equipment (satellite dishes, RF panels). The result will look plausible but wrong to any expert. Use photographs or real sensor captures.

If Seedance cannot deliver and real capture is unavailable, fall through to a static still with `image-generation` v7e instead of shipping a weak motion asset.
