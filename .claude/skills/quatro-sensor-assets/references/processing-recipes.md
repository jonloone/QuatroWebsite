# Processing Recipes

One recipe per sensor type. Run each recipe end to end. Do not mix steps across recipes.

All processing happens in the Quatro palette:
- Forest `#0F4C3A`
- Charcoal `#0a0a0a`
- Eco-track surfaces: Paper `#F2EBDA`, Ink `#16161E`, Bone `#CFCBBE`, Taupe `#8D8071`
- Defense / technical surfaces: Slate-50 `#F9FAFB`, Slate-200 `#E2E8F0`
- Ochre `#A88B5C` (eco-track only)
- See `quatro-visual-extensions/references/quatro-palette.json` for the full token table.

---

## LIDAR — Point Cloud → PNG

**Input:** `.las` or `.laz` file from USGS 3DEP, OpenTopography, or Quatro capture.

**Output:** 2560 × 1440 PNG, forest-on-charcoal by default, under 2 MB.

**Tooling:** PDAL + Python, or CloudCompare for GUI users.

### PDAL pipeline (automated)

```bash
# Install once
pip install pdal
brew install pdal  # or apt

# Inspect the file
pdal info input.laz --summary

# Render — see scripts/render-pointcloud.py
python scripts/render-pointcloud.py \
  --input input.laz \
  --output public/images/sensor/lidar/sit-<name>-<YYYYMMDD>.png \
  --palette forest-on-charcoal \
  --size 2560x1440 \
  --point-size 1.5
```

### Palette variants

- `forest-on-charcoal` — points in `#0f4c3a` on `#0a0a0a`. Signature Quatro treatment.
- `height-mapped` — points colored by elevation, paper → forest gradient. For topological storytelling.
- `luminance-only` — points in white on charcoal, varying by intensity. For Bell-Labs archival feel.

### Composition rules

- Horizontal orientation, 16:9 or wider.
- No perspective rotation unless the scene requires it. Orthographic top-down by default.
- Point size 1–2px. Larger reads cartoonish.
- Leave 10% margin around the subject.

### Common failure modes

- **File too large.** Decimate: `pdal translate input.laz decimated.laz --filters.sample.radius=0.5`.
- **Coordinate system mismatch.** Reproject: `pdal translate input.laz reprojected.laz --filters.reprojection.out_srs=EPSG:3857`.
- **Noise and outliers.** Filter: `pdal translate input.laz clean.laz --filters.outlier --filters.range.limits="Classification![7:7]"`.

---

## SAR — Copernicus Sentinel-1 → PNG

**Input:** Sentinel-1 GRD product, IW mode, VV or VH polarization.

**Output:** 2560 × 1440 PNG, grayscale or subtle forest tint, native speckle preserved.

**Tooling:** Sentinel Hub EO Browser (web) or `sentinelhub-py` + Python for batch.

### Sentinel Hub EO Browser (manual)

1. Open https://apps.sentinel-hub.com/eo-browser/.
2. Pick `Sentinel-1` from sources.
3. Draw AOI, set date range, click Search.
4. Select a scene, click Visualize.
5. Use "SAR-Grayscale (VV, decibel gamma0)" visualization.
6. Download as TIFF, 10m resolution.

### Post-process (GIMP or Python)

```python
# scripts/sar-posterize.py
import numpy as np
from PIL import Image

img = Image.open("sentinel1-grd.tif")
arr = np.array(img).astype(float)

# Clip to 2nd/98th percentile for contrast
lo, hi = np.percentile(arr, [2, 98])
arr = np.clip((arr - lo) / (hi - lo), 0, 1)

# Apply subtle forest tint to shadows only (gamma < 0.5)
shadow_mask = arr < 0.5
rgb = np.stack([arr, arr, arr], axis=-1)
rgb[shadow_mask] *= [0.7, 0.9, 0.8]  # slight green in shadows

Image.fromarray((rgb * 255).astype(np.uint8)).save("output.png")
```

### Composition rules

- Preserve the native speckle. Do not smooth or denoise.
- No heavy color lookup. Grayscale is honest. Subtle forest tint in shadows is the maximum.
- Caption must include the full acquisition parameters (see `caption-template.md`).

### Common failure modes

- **Looks too clean.** You denoised. Revert.
- **Banding.** The source GRD has quality issues. Try a different scene or date.
- **Wrong polarization.** VV is default for most land. VH for water and some vegetation work.

---

## RF Waterfall — SDR Capture → PNG

**Input:** IQ data file from HackRF, RTL-SDR, USRP.

**Output:** 2560 × 1440 PNG waterfall, forest-on-charcoal or grayscale.

**Tooling:** GQRX for live capture, Inspectrum for file-based spectrograms, custom Python for batch.

### Live capture (GQRX)

1. Open GQRX with SDR connected.
2. Tune to target frequency and band.
3. Enable waterfall (F4).
4. Capture IQ: Tools → Record IQ.
5. Export waterfall: Tools → Save screenshot after a 20–30 second capture.

### File-based (recommended for final assets)

```python
# scripts/rf-waterfall.py
import numpy as np
from scipy.signal import spectrogram
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors

# Load IQ samples — format depends on your SDR
iq = np.fromfile("capture.iq", dtype=np.complex64)

# Compute spectrogram
f, t, Sxx = spectrogram(iq, fs=2_400_000, nperseg=2048, noverlap=1024)
Sxx_db = 10 * np.log10(np.abs(Sxx) + 1e-12)

# Forest-on-charcoal colormap
colors = ["#0a0a0a", "#1f2a24", "#0f4c3a", "#52a68a", "#b8e0d2"]
cmap = mcolors.LinearSegmentedColormap.from_list("quatro-waterfall", colors)

# Render
fig, ax = plt.subplots(figsize=(16, 9), facecolor="#0a0a0a")
ax.pcolormesh(t, f / 1e6, Sxx_db, cmap=cmap, vmin=-60, vmax=20)
ax.set_facecolor("#0a0a0a")
ax.tick_params(colors="white")
ax.set_xlabel("Time (s)", color="white")
ax.set_ylabel("Frequency (MHz)", color="white")
plt.tight_layout()
plt.savefig("public/images/sensor/rf/<band>-<site>-<date>.png",
            dpi=160, facecolor="#0a0a0a")
```

### Colormap variants

- `forest-waterfall` — the custom colormap above. Quatro signature.
- `grayscale-archival` — pure intensity. For Bell-Labs archival pairing.

### Composition rules

- Time axis flows downward or leftward (typical SDR convention is downward).
- Label the frequency band and sample rate in the caption.
- If the capture contains identifiable content (voice, PII), redact or pick a different segment.
- Leave enough frequency range to show surrounding spectrum, not just the signal of interest.

---

## Earth Observation — Sentinel-2 / Landsat → PNG

**Input:** Sentinel-2 L2A or Landsat L2 scene.

**Output:** 2560 × 1440 PNG, NIR or SWIR false-color preferred, natural color as fallback.

**Tooling:** Sentinel Hub EO Browser, or `sentinelhub-py` + Python.

### Sentinel Hub EO Browser (manual)

1. Pick Sentinel-2 L2A.
2. Set AOI and date.
3. Visualize → pick a band combination:
   - `NIR False Color (8, 4, 3)` — vegetation bright red.
   - `SWIR (12, 8, 4)` — water/heat distinct.
   - `Agriculture (11, 8, 2)` — crop health.
4. Download as TIFF at full resolution.

### For Landsat time-series (historical)

1. Open https://earthexplorer.usgs.gov/.
2. Pick "Landsat Collection 2 Level-2" under data sets.
3. Search by AOI and date.
4. Download the scene bundle.
5. Compose false-color in GDAL:

```bash
# NIR false color from Landsat 8/9
gdal_merge.py -separate -o rgb.tif B5.tif B4.tif B3.tif
gdal_translate -ot Byte -scale rgb.tif output.tif
```

### Composition rules

- Apply `img-technical` luminosity blend at rest on the web. Full false color activates on hover.
- Prefer NIR false color over natural color. Natural color is less interesting and less honest about what the sensor saw.
- Caption includes mission, sensor, band combo, and date.
- For time-series pairs, use the `earth-obs-timeseries` component mode and keep identical crops.

---

## Gaussian Splat — Luma / Polycam → Web

**Input:** Capture video from Luma AI, Polycam, or Scaniverse mobile app.

**Output:** `.splat` file under 15 MB for interactive embed, plus a poster PNG.

**Tooling:** Luma web dashboard, gsplat.js for web, Blender + plugin for desktop editing.

### Capture (Luma AI workflow, recommended)

1. Open Luma AI app on iPhone or Android.
2. Start a capture. Walk a complete orbit around the subject, 3–5 minutes.
3. Upload. Training takes 30–60 minutes on Luma's cloud.
4. Download the result in `.splat` format from the web dashboard.

### Decimate for web

If the file exceeds 15 MB:
- Open in Scaniverse desktop (free) or Postshot.
- Crop extraneous points outside the subject.
- Decimate by 30–50%. The perceived quality loss is minimal, the file size drops sharply.
- Export as `.splat`.

### Poster frame

Capture a single frame for the static poster:

```javascript
// Using @mkkellogg/gaussian-splats-3d in a headless renderer
import { Viewer } from '@mkkellogg/gaussian-splats-3d';
// Set camera, render to canvas, export as PNG.
// See scripts/render-splat-poster.js for a working example.
```

### Composition rules

- The splat sits in a flat color block (forest, charcoal, or paper). No gradient backgrounds.
- Do not overlay text on the splat itself. Caption sits below.
- Low contrast preferred. Splats read better muted than sharp.
- Budget 15 MB for interactive, 400 KB for poster PNG.

---

## Composite — Two-Sensor Split

**Input:** Two processed sensor assets of the same subject.

**Output:** 2560 × 1440 PNG with the two halves side by side, plus a bridging notation.

**Process:**

1. Pick two complementary sensors: LIDAR + SAR, splat + earth-obs, multispectral + thermal.
2. Crop each asset to the same aspect (1280 × 1440 each, so they compose to 2560 × 1440).
3. Butt them together with no gap or seam (the seam itself does the work).
4. Apply the bridging notation — one arrow or bracket spanning the two halves. See `quatro-notation-layer`.
5. Caption reads something like "Two instruments, one truth. [Instrument A meta] / [Instrument B meta]."

### Composition rules

- Subject must be the same in both halves. A LIDAR of substation A paired with a SAR of substation B is dishonest.
- Date should be the same or close. If more than a week apart, disclose in the caption.
- Notation is singular — one mark bridges both halves.
- Use at most one composite per page, on the most important hero.

---

## What Every Recipe Shares

- **Palette.** Always forest / paper / charcoal. Ochre only on eco-track pages with explicit approval.
- **Aspect.** 16:9 or wider for heroes. 4:3 for cards.
- **Caption.** Two lines — mono metadata, Reckless operator note.
- **Notation.** One mark per asset, no exceptions.
- **License.** Documented in the manifest before publish.
- **File name.** Follows `asset-naming.md`.

If a recipe produces something that does not satisfy the preflight checklist in `SKILL.md`, iterate before shipping.
