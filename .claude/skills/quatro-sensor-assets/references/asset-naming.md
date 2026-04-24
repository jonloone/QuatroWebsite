# Asset Naming and Directory Structure

Every sensor asset lives at a predictable path with a predictable name. No exceptions.

---

## Directory Structure

```
public/
  images/
    sensor/
      lidar/
      sar/
      rf/
      eo/                    (earth observation — Landsat, Sentinel-2, MODIS, etc.)
      splat/                 (.splat files for interactive embed)
      splat-poster/          (poster PNGs for splat heroes)
      multispectral/         (false-color agricultural, thermal, NDVI)
      composite/             (two-sensor split assets)
    illustration/
      haeckel/               (block-print biomimetic)
      archival/              (NASA, Bell Labs, USGS historical)
    photography/             (operator photography — existing lane)
  motion/
    lidar-sweep/             (MP4)
    eo-scrub/                (MP4)
    rf-waterfall/            (MP4)
    splat-orbit/             (MP4)
    root-grow/               (MP4)
    poster/                  (all motion poster PNGs)
  assets/
    notation/                (SVG notation marks)
    dither/                  (static dither plates)

manifests/
  sensor-assets.json
  motion-assets.json
  illustration-assets.json
```

---

## Filename Grammar

All filenames follow this grammar:

```
<prefix>-<scope>-<location-or-subject>-<YYYYMMDD>.<ext>
```

- `prefix` identifies the sensor or asset type.
- `scope` is optional additional context (mission, site number, band).
- `location-or-subject` is a short slug of the specific location, site, or subject.
- `YYYYMMDD` is the acquisition date.
- `ext` matches the file type.

No spaces. No underscores. No capitals. No version suffixes like `-final` or `-v2` — the manifest handles versioning.

---

## Per-Sensor Naming

### LIDAR

```
public/images/sensor/lidar/
  sit-<site-slug>-<YYYYMMDD>.png
  usgs-3dep-<location-slug>-<YYYYMMDD>.png
  tile-<tile-id>-<YYYYMMDD>.png
```

Examples:
- `sit-ground-station-04-20260405.png`
- `usgs-3dep-gulfport-ms-20240915.png`
- `tile-w090n30-20230701.png`

### SAR

```
public/images/sensor/sar/
  s1-<mode>-<pol>-<location-slug>-<YYYYMMDD>.png
  capella-<location-slug>-<YYYYMMDD>.png
```

Examples:
- `s1-iw-vv-esmeraldas-coast-20260312.png`
- `s1-iw-vh-quito-20260215.png`
- `capella-pipeline-north-20260301.png`

### RF Waterfall

```
public/images/sensor/rf/
  <band>-<site-slug>-<YYYYMMDD>.png
  gprs-<site-slug>-<YYYYMMDD>.png
```

Examples:
- `l-band-gs04-20260402.png`
- `c-band-teleport-02-20260301.png`
- `s-band-quito-mrc-20260218.png`

### Earth Observation

```
public/images/sensor/eo/
  <mission>-<sensor>-<band-combo>-<location-slug>-<YYYYMMDD>.png
```

Examples:
- `l9-oli-nir-substation-perimeter-20251104.png`
- `s2-msi-swir-esmeraldas-20260212.png`
- `l5-tm-natural-mississippi-19850612.png`

Band combo shorthand:
- `natural` for 4-3-2 (Landsat) / 4-3-2 (Sentinel-2).
- `nir` for NIR false color.
- `swir` for SWIR.
- `agriculture` for crop-health combinations.
- `thermal` for thermal bands.

### Gaussian Splat

```
public/images/sensor/splat/
  <site-slug>-<YYYYMMDD>.splat

public/images/sensor/splat-poster/
  <site-slug>-<YYYYMMDD>.png
```

Examples:
- `gs04-antenna-feed-20260405.splat`
- `teleport-02-control-room-20260301.splat`

### Multispectral / Thermal

```
public/images/sensor/multispectral/
  <mission>-<product>-<location-slug>-<YYYYMMDD>.png
```

Examples:
- `s2-ndvi-banana-grove-20260215.png`
- `ecostress-thermal-quito-20260308.png`

### Composite Two-Sensor

```
public/images/sensor/composite/
  <sensor-a>-<sensor-b>-<location-slug>-<YYYYMMDD>.png
```

Examples:
- `lidar-sar-gs04-20260405.png`
- `splat-eo-teleport-02-20260301.png`

---

## Motion Assets

Motion follows the same grammar but with `.mp4` or `.webm` extension and a required poster frame.

```
public/motion/lidar-sweep/
  <site-slug>-<YYYYMMDD>.mp4
  poster/<site-slug>-<YYYYMMDD>.png

public/motion/eo-scrub/
  <location-slug>-<date-range>.mp4
  poster/<location-slug>-<date-range>.png
```

Date range for time-series scrubs uses both endpoints: `mississippi-1985-2025`.

---

## Illustration Lanes

```
public/images/illustration/haeckel/
  <subject>-<plate-number>.png      (public domain — no date needed)

public/images/illustration/archival/
  <source>-<subject>-<YYYY>.png     (year only when month unknown)
```

Examples:
- `diatoms-kunstformen-plate-04.png`
- `nasa-mission-control-1969.png`
- `bell-labs-operator-console-1956.png`

---

## Manifest Entry Template

Every asset gets an entry in `manifests/sensor-assets.json`. Entry shape:

```json
{
  "id": "s1-iw-vv-esmeraldas-coast-20260312",
  "path": "/images/sensor/sar/s1-iw-vv-esmeraldas-coast-20260312.png",
  "sensor": "sar",
  "instrument": "SENTINEL-1 · IW · VV · 2026-03-12T18:42Z",
  "subject": "esmeraldas-coast",
  "date": "2026-03-12",
  "aspect": "16:9",
  "dimensions": "2560x1440",
  "file_size_kb": 1820,
  "operator_note": "Flood extent visible in the speckle signature.",
  "notation": {
    "mark": "circle",
    "target_word": "speckle"
  },
  "license": "copernicus",
  "attribution": "Contains modified Copernicus Sentinel data 2026.",
  "real_or_mimic": "real",
  "used_on_pages": [
    "/industries/critical-infrastructure",
    "/insights/flood-response-latam"
  ],
  "consent_reference": null,
  "created_at": "2026-04-23T10:00:00Z",
  "status": "published"
}
```

**Required fields:** `id`, `path`, `sensor`, `instrument`, `date`, `license`, `real_or_mimic`, `status`.

**`status` values:** `draft`, `review`, `published`, `retired`.

**`real_or_mimic`:** `real` for actual sensor data, `mimic` for `image-generation` v7e outputs. Mimics can be replaced with real data later without changing the path.

---

## Slug Rules

Location and subject slugs follow these rules:

- Lowercase ASCII only.
- Hyphens between words.
- No country codes unless disambiguation is needed (e.g., `cordoba-ar` vs. `cordoba-es`).
- Quatro customer sites get numeric suffixes: `gs01`, `gs02`, `teleport-02`.
- Anonymize when required: `gs-latam-01` instead of naming the operator.

---

## When to Break the Naming Convention

Never. If a filename does not fit, revisit the grammar or add a field — do not ad-hoc a name. The manifest relies on predictable names for audit, deduplication, and replacement workflows. One broken name breaks the chain.

---

## Migration of Existing Assets

The site currently has assets named like `bg-hero.jpg`, `Gemini_Generated_Image_wjd0wqwjd0wqwjd0.png`, and similar. As part of the expansion:

1. Audit every existing asset in `public/images/` against the new structure.
2. For assets that belong to a new sensor lane, rename and move them. Update all references in the codebase.
3. For assets that do not fit any lane, deprecate them in a batch. Leave in place until the new asset replaces them, then delete.
4. Never have two names for the same asset. The migration is complete when every asset has exactly one path.
