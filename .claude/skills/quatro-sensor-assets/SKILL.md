---
name: quatro-sensor-assets
description: >
  Use this skill whenever Jonathan needs to source, process, caption, or ship real sensor imagery
  (LIDAR, SAR, RF, earth observation, gaussian splat, multispectral) or AI-generated mimics for the
  Quatro website or any operational intelligence content. Triggers include: LIDAR, point cloud, SAR,
  synthetic aperture radar, RF waterfall, spectrum, earth observation, Landsat, Sentinel, Copernicus,
  gaussian splat, multispectral, NIR, thermal, sensor plate, instrument imagery, sensor hero, or any
  request for real sensor data as a hero or editorial asset. Always use this skill before writing
  prompts for `image-generation` — real sensor data beats mimics whenever it exists.
---

# Quatro Sensor Assets

Canonical workflow for sourcing, processing, captioning, and shipping real sensor imagery on the Quatro website. Real sensor data is the primary track. Mimics via `image-generation` v7e are the fallback.

## What This Skill Is For

Quatro's expanded design language uses real sensor imagery as primary hero content on most pages. LIDAR scans of substations. Sentinel SAR of coastal infrastructure. Landsat time-series of river systems. RF waterfalls captured from ground stations. Gaussian splats of customer sites. This skill is how those assets get from source to shipped component.

**Use this skill before `image-generation`.** Every asset request starts here. Only if no real data exists or can be sourced do we fall through to generated mimics.

## The Five-Step Workflow

Every sensor asset follows the same five steps:

1. **Check the manifest.** Does a usable asset already exist at `public/images/sensor/`? Read `manifests/sensor-assets.json` — an existing asset saves hours.
2. **Source.** Pick the right data provider for the sensor type. Verify licensing. See `references/data-sources.md`.
3. **Process.** Run the sensor-specific recipe: palette, aspect, desaturation, caption overlay. See `references/processing-recipes.md`.
4. **Caption.** Write the two-line caption — instrument metadata in mono, operator note in Reckless. See `references/caption-template.md`.
5. **Publish.** Save to the right path with the right name, update the manifest, log license. See `references/asset-naming.md`.

No sensor asset ships without all five steps completed. The manifest is the gate — if it is not in the manifest, it is not on the site.

## When to Use This, When to Fall Through

Use this skill:
- Any new industry or solution page that needs a hero image.
- Any insights post about earth observation, infrastructure, or operational intelligence.
- Any component authoring where `NotationSurface mode="lidar|sar|rf-waterfall|earth-obs|splat|multispectral|earth-obs-timeseries|density-flow"` is involved.
- Any time the page subject is a sensor, an instrument, or the output of one.

Fall through to `image-generation` v7e only when:
- The subject has no real-world sensor equivalent (e.g., an abstract capability).
- The asset is needed faster than real data can be sourced (document this as tech debt).
- The customer site scan is consent-blocked and no public substitute exists.

## The Six Sensor Types

Each gets its own section in `references/processing-recipes.md`. Quick identity:

### LIDAR
Point cloud imagery. Primary output is a static PNG render of a point cloud in one of three Quatro palettes: forest-on-charcoal (signature), height-mapped forest-to-paper, or luminance-only white-on-charcoal. Source: USGS 3DEP, OpenTopography, or Quatro customer capture. Aspect: 16:9 or wider.

### Synthetic Aperture Radar (SAR)
Grainy grayscale imagery with distinct speckle. Primary source: Copernicus Sentinel-1 via Sentinel Hub EO Browser (free, permissive license). Process: preserve native speckle, subtle forest tint in shadows only, caption includes the acquisition parameters.

### RF Waterfall
Spectrum waterfall display. Frequency-vs-time, intensity as color. Primary source: self-captured via HackRF or RTL-SDR (Quatro-owned). Post-process: forest-on-charcoal colormap or grayscale archival. Caption names band and finding.

### Earth Observation (multispectral)
Satellite imagery in visible or false-color bands. Primary source: Sentinel-2, Landsat 8/9 via USGS Earth Explorer or Sentinel Hub. Prefer NIR false-color (vegetation red) or SWIR (water/heat distinct) over natural color. Apply `img-technical` luminosity blend at rest.

### Gaussian Splat
Volumetric soft-edged 3D render. Primary source: self-captured via Luma AI or Polycam mobile apps. Output: either a still frame PNG for static heroes, or a `.splat` file for interactive embed via gsplat.js. Target file size under 15MB for web.

### Composite (Two-Sensor Split)
The signature move. Two sensor types paired in a split composition (LIDAR + SAR, splat + earth obs, multispectral + thermal). A single notation mark bridges the two halves. Caption reads something like "Two instruments, one truth." Use sparingly — one per page maximum on the most important hero.

## File Budgets

Hard budgets for web delivery:

| Asset type | Max file size | Typical dimensions |
|---|---|---|
| Hero sensor PNG | 2 MB | 2560 × 1440 |
| Card sensor PNG | 400 KB | 1200 × 900 |
| Composite split PNG | 2.5 MB | 2560 × 1440 |
| Gaussian splat | 15 MB | .splat file |
| Motion poster PNG | 400 KB | 1920 × 1080 |

If an asset exceeds its budget, the fix is almost always decimation (splats) or better JPEG/WebP encoding (PNGs). Do not ship 8 MB hero images.

## Preflight Check

Before any sensor asset ships, verify:

- [ ] Source is confirmed. License is documented in the manifest.
- [ ] Sensor type is correctly named in the filename.
- [ ] Palette matches the type (forest-on-charcoal for LIDAR, preserved speckle for SAR, etc.).
- [ ] Caption has two lines — instrument metadata in mono, operator note in Reckless, 6–12 words in the operator note.
- [ ] Notation mark applied (one per asset, see `quatro-notation-layer` skill).
- [ ] Aspect ratio matches the component it will populate.
- [ ] File size is within budget.
- [ ] Manifest entry added at `manifests/sensor-assets.json`.

## Related Skills

- `quatro-notation-layer` — every sensor asset gets a notation mark.
- `quatro-motion-assets` — for video from LIDAR scans or splat orbits.
- `image-generation` — fall through to v7e style when real data is unavailable.
- `quatro-ui-system` — for the `NotationSurface` component the asset will populate.
- `quatro-cascade` — for the operator-note voice.

## Source Files in This Skill

- `references/data-sources.md` — every sanctioned data provider with licensing notes.
- `references/processing-recipes.md` — per-sensor processing steps with commands.
- `references/caption-template.md` — the two-line caption format and examples.
- `references/asset-naming.md` — directory and filename conventions.
- `references/composite-patterns.md` — two-sensor split composition rules.
- `references/licensing-check.md` — the rights-clearance checklist before publish.
- `scripts/fetch-sentinel.sh` — Sentinel Hub CLI wrapper.
- `scripts/render-pointcloud.py` — PDAL point cloud → PNG in Quatro palette.
- `scripts/capture-rf.md` — HackRF / RTL-SDR waterfall capture guide.
- `scripts/process-splat.md` — Luma / Polycam export and web packaging.
- `templates/sensor-plate-manifest.json` — manifest entry schema.
