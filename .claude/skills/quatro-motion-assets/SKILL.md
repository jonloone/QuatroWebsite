---
name: quatro-motion-assets
description: >
  Use this skill whenever Jonathan needs to produce motion or video assets for the Quatro website —
  LIDAR sweep animations, earth observation time-series scrubs, RF waterfall playback, gaussian splat
  orbits, animated dither variants, root-network biomimetic grows, or AI-generated video mimics via
  Seedance 2.0. Triggers include: video, motion, animation, LIDAR sweep, point cloud animation,
  time-series scrub, waterfall playback, splat orbit, orbit animation, timelapse, motion hero,
  animated background, canvas animation, Seedance, AI video, ByteDance Seedance, short video, hero
  loop, motion reel. Always use this skill before producing any video, GIF, or animated canvas asset
  for Quatro.
---

# Quatro Motion Assets

Canonical workflow for motion and video assets. Real capture and procedural motion are the primary tracks. Seedance 2.0 (via Replicate) is the AI-generated fallback, parallel to how `image-generation` v7e fills the still-image gap.

## What This Skill Is For

Motion belongs on a select subset of Quatro surfaces: the homepage hero (dither canvas), industry page heroes where sensor motion carries the argument (LIDAR sweeps, splat orbits), case-study leads, and the occasional insights post that benefits from a scrubbing time-series.

It does not belong on: card grids, utility pages, forms, navigation, every page, or anywhere as gratuitous polish. Every motion asset must earn its place. If the question "would a still image carry this?" is answered "yes," the answer is a still image.

## The Three-Track Preference

Like the still-image system, motion has a preference order:

1. **Real capture.** Motion rendered from actual sensor data: a LIDAR sweep built from a real point cloud, a time-series scrub from real Landsat stills, an RF waterfall from a real SDR capture, a splat orbit from a real splat file. This is the primary track.

2. **Procedural motion.** Algorithmically generated motion from real data structures: dither canvas variants, root-network grows (space-colonization algorithm), generative particle systems that encode real topology. Secondary track — used when the subject is the algorithm itself or the generative form.

3. **AI-generated video (Seedance 2.0).** Third track. Used only when real capture is impossible, procedural motion does not fit, and a motion hero is genuinely needed. Documented as `mimic` in the manifest.

## The Six Motion Patterns

### Pattern 1 — LIDAR Sweep

**What it is:** A slow pan across a real point cloud, forest-on-charcoal palette. 15–20 seconds, loopable.

**Tooling:**
- `potree` for interactive web embed.
- `three.js` for scripted renders.
- `scripts/render-lidar-sweep.py` — headless three.js via puppeteer to produce MP4.

**Composition:**
- Start wide, slow zoom into a detail, hold at detail for 3 seconds, cut back to wide.
- No jarring speed changes. Ease in and out.
- Point size 1–2px throughout.
- Optional: a notation circle fades in at the held detail frame.

**Duration:** 15–20 seconds.

**File size target:** under 4 MB at 1920×1080 H.264.

### Pattern 2 — Earth Observation Time-Series Scrub

**What it is:** A dissolve between two Landsat stills (same location, different dates) with slight Ken Burns motion.

**Tooling:**
- `ffmpeg` cross-dissolve recipe.
- `scripts/render-eo-scrub.py` — orchestrates the dissolve and annotation overlay.

**Composition:**
- Open on Date A, hold 3 seconds.
- Cross-dissolve to Date B over 4 seconds.
- Hold on Date B for 3 seconds.
- Optional: bridging notation arrow fades in during the dissolve.

**Duration:** 10 seconds.

**File size target:** under 3 MB.

### Pattern 3 — RF Waterfall Playback

**What it is:** A 20-second loop of a real SDR capture replayed as an animated waterfall.

**Tooling:**
- GQRX or SDR# for the capture.
- `scripts/render-rf-waterfall.md` — scripted waterfall-to-MP4 via matplotlib animation + ffmpeg.

**Composition:**
- Forest-on-charcoal colormap.
- Frequency axis labeled in mono.
- Time scrolls downward (conventional) or leftward.
- Optional: a notation arrow pins to the signal of interest for the last 5 seconds.

**Duration:** 20 seconds, loops seamlessly.

**File size target:** under 2.5 MB.

### Pattern 4 — Gaussian Splat Orbit

**What it is:** A 360° camera orbit around a gaussian splat at constant angular velocity.

**Tooling:**
- Luma AI web dashboard — built-in orbit export (easiest).
- `gsplat.js` headless render for custom camera paths.
- `scripts/render-splat-orbit.md` — Luma export guide + gsplat.js custom path.

**Composition:**
- Orbit on a horizontal plane, slight downward angle (10–15°).
- Constant angular velocity, no acceleration.
- Single full revolution, loops on itself.
- Static forest or charcoal background.

**Duration:** 15 seconds for a full revolution.

**File size target:** under 5 MB.

### Pattern 5 — Dither Canvas Variants

**What it is:** The homepage's signature Bayer dither canvas, parameterized for secondary surfaces. Runs in WebGL, not delivered as video.

**Use:** CTA sections at page bottoms, section dividers on dark pages.

**Parameters:**
- `opacity` — 0.3 to 0.6 for secondary surfaces (homepage uses 0.85).
- `drift speed` — 0.5x to 0.7x the homepage rate.
- `pixel size` — 4–6px (homepage uses 2–3px).
- `green blend` — 0.15 to 0.25 (homepage uses 0.3).

**Composition:** same as homepage, tuned down.

### Pattern 6 — Root-Network Grow

**What it is:** A procedural graph-growth animation using the space-colonization algorithm. A network of nodes and edges grows from a root in 8–10 seconds, then holds.

**Tooling:**
- `scripts/render-root-grow.js` — JavaScript implementation of the space-colonization algorithm, rendered to SVG frames, composited to MP4.

**Composition:**
- Grows in forest on paper (light background) or white on charcoal (dark background).
- Starts from a single root point, branches outward.
- Final frame holds for 3+ seconds.
- Optional: labels on key terminal nodes fade in after growth completes.

**Duration:** 10–12 seconds.

**File size target:** under 2 MB.

**Use:** Eco-track pages, insights posts about network topology, any page arguing "systems grow like this."

## AI-Generated Video — Seedance 2.0

When real capture is impossible and procedural motion does not fit, fall through to Seedance 2.0 via Replicate.

**When to use:**
- A hero needs ambient motion on a subject Quatro cannot physically capture (e.g., a drone view of a site not yet commissioned).
- A mimic of a sensor-like motion where real sensor data is blocked by licensing or consent.
- A placeholder for a motion asset during page development, to be replaced with a real capture later.

**When NOT to use:**
- Anywhere a real capture exists or can be acquired.
- Any motion where the algorithm itself is the subject (procedural beats AI-generated every time).
- Defense or critical infrastructure content where the mimic could be mistaken for real intelligence.

**The four approved Seedance shot types:**

### Seedance — `sensor-mimic`

Mimic of a LIDAR sweep, SAR acquisition, or earth observation pan. Prompt template:

```
Slow aerial drone pass over [subject] at [time of day],
sensor-filtered visual style, desaturated forest green color grade,
subtle grain, 24fps cinema look, 16:9 aspect, 15 seconds.
```

Tag output as `sensor-mimic` in the manifest. Notation applied in post via `NotationSurface`.

### Seedance — `biomimetic-grow`

Mimic of a root-network or botanical-growth motion when the procedural algorithm output does not fit the subject. Prompt template:

```
Slow organic growth of a branching network structure,
forest green on paper background, scientific illustration style,
no ornate detail, one stroke weight, 12 seconds, 16:9.
```

Rare — procedural is usually better for this.

### Seedance — `atmospheric-loop`

Ambient background motion for a dark section hero where dither canvas does not fit. Prompt template:

```
Slow atmospheric drift of fog and particulate over a dark industrial landscape,
near-monochrome charcoal palette with subtle forest green highlights,
no people, no vehicles, low contrast, 20 seconds loop, 16:9.
```

### Seedance — `archival-modern-split`

Mimic of the Foundation Capital two-era split applied to motion: archival-looking footage on one half, modern-looking footage on the other, transitioning. Prompt template:

```
Split-screen composition: left half shows historical black-and-white
industrial operations imagery, right half shows modern color aerial
infrastructure view, both the same subject, slow pan, 12 seconds, 16:9.
```

**Seedance API workflow:**

```bash
# scripts/generate-seedance.sh
curl -X POST https://api.replicate.com/v1/predictions \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "version": "<seedance-model-version-hash>",
    "input": {
      "prompt": "Slow aerial drone pass over a coastal substation at golden hour, sensor-filtered visual style, desaturated forest green color grade, subtle grain, 24fps cinema look, 16:9 aspect, 15 seconds.",
      "duration": 15,
      "aspect_ratio": "16:9",
      "seed": 42
    }
  }'
```

Poll the prediction until complete, then download the MP4 to the correct path.

**Seedance budget rule:** maximum 10% of motion assets on the site can be Seedance-generated. The ratio audits monthly. If Seedance usage exceeds 10%, Jonathan reviews whether real capture should replace the backlog.

## Export Settings — All Motion

Every motion asset conforms to these specs:

| Spec | Value |
|---|---|
| Resolution | 1920 × 1080 (16:9) |
| Frame rate | 24 fps (cinema) or 30 fps (web loops) |
| Codec | H.264 for MP4 delivery, VP9 for WebM |
| Audio | None. Motion assets on Quatro are silent. |
| Bitrate | 2–4 Mbps for H.264 |
| Poster frame | Always required, same path with `.png` extension in `poster/` subdirectory |
| Max file size | 5 MB per motion (enforce at encode) |

Use `ffmpeg` recipes from `references/export-settings.md`.

## Web Embed Patterns

Match the embed to the motion type:

- **`<video>` element** for MP4/WebM delivery — LIDAR sweep, EO scrub, RF waterfall, splat orbit, Seedance outputs. Autoplay muted, loop, `playsinline`.
- **Canvas/WebGL** for dither variants and root-network grows — runtime rendered, parameterizable.
- **Interactive gsplat viewer** for splat orbits if the user needs to spin the subject themselves. Heavier, use only on dedicated capability pages.

Reference `references/web-embed-patterns.md` for specific component code.

## Preflight Check

Before any motion ships:

- [ ] One of the six motion patterns (plus Seedance shot types).
- [ ] Duration within spec (15–20s for most, 10s for EO scrubs).
- [ ] File size within budget.
- [ ] Poster frame exists at `poster/<same-name>.png`.
- [ ] Silent (no audio track).
- [ ] Seamless loop if the pattern is a loop.
- [ ] Tagged in the manifest as `real`, `procedural`, or `mimic`.
- [ ] Seedance outputs under 10% of total motion assets.
- [ ] If real-capture is possible but mimic was used, documented as tech debt in a TODO.

## Related Skills

- `quatro-sensor-assets` — real capture is the primary track; check for usable assets first.
- `quatro-notation-layer` — motion surfaces can carry notation marks, particularly on the held frame.
- `image-generation` — for the v7e still-image fallback track parallel to Seedance for motion.
- `quatro-ui-system` — for the video components that host motion (HeroCanvas variants, NotationSurface).

## Source Files in This Skill

- `references/motion-patterns.md` — deep spec for each of the six patterns.
- `references/export-settings.md` — ffmpeg recipes and file budgets.
- `references/web-embed-patterns.md` — `<video>` vs. canvas vs. gsplat decision tree.
- `references/seedance-prompts.md` — prompt library for Seedance 2.0 shot types.
- `scripts/render-lidar-sweep.py` — three.js headless renderer stub.
- `scripts/render-eo-scrub.py` — ffmpeg cross-dissolve wrapper.
- `scripts/render-rf-waterfall.md` — capture-to-MP4 guide.
- `scripts/render-splat-orbit.md` — Luma / gsplat.js orbit guide.
- `scripts/render-root-grow.js` — space-colonization algorithm to SVG animation.
- `scripts/generate-seedance.sh` — Replicate API wrapper for Seedance 2.0.
- `templates/motion-manifest.json` — manifest schema.
