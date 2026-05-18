# Sensor Data Sources

Every legitimate source Quatro can pull from, grouped by sensor type, with the licensing note for each.

**Golden rule:** if the source is not listed here, do not ship the asset until licensing is confirmed and the source is added.

---

## LIDAR

### USGS 3DEP (3D Elevation Program)
- **URL:** https://www.usgs.gov/3d-elevation-program
- **Portal:** https://apps.nationalmap.gov/downloader/
- **License:** Public domain (US federal government work).
- **Coverage:** Most of the United States at varying resolutions. Dense coverage of urban and infrastructure corridors.
- **Format:** .las or .laz point clouds.
- **Notes:** Attribution courtesy — list "USGS 3DEP" in manifest.

### OpenTopography
- **URL:** https://opentopography.org
- **License:** Mixed per dataset. Most public research datasets are CC-BY or CC0. Check each dataset.
- **Coverage:** Global, research-grade scans. Includes NASA ICESat, SRTM, and commercial datasets.
- **Format:** .las, .laz, .tif DEM.
- **Notes:** Always check the individual dataset license before shipping. Some datasets forbid commercial use.

### Quatro Customer Captures
- **Source:** Internal — field teams, drone operators, vendor-captured scans.
- **License:** Governed by customer MSA. Some OK to feature, some require anonymization, some off-limits.
- **Process:** Run captures through the consent checklist in `licensing-check.md` before shipping.

### Ontario GeoHub (Land Information Ontario)
- **URL:** https://geohub.lio.gov.on.ca/
- **License:** Ontario Open Government Licence v1.2. Commercial and editorial use allowed with attribution.
- **Attribution:** "Contains information licensed under the Open Government Licence – Ontario."
- **Coverage:** Southern and central Ontario, Canada. Multiple acquisition years for time-series work.
- **Datasets:**
  - Ontario Classified Point Cloud (LIDAR, `.laz` tiles).
  - Ontario Provincial Digital Elevation Model (OPDM).
  - Southwest Ontario Orthoimagery (SWOOP) — sub-meter ortho, multiple years.
  - Topographic, land cover, hydrography, administrative boundaries.
- **Access:** ArcGIS Hub — direct download for most datasets, ArcGIS REST API, AWS S3 for large LIDAR bundles.
- **Notes:** Primary LIDAR source for any Quatro content targeting Canadian utilities, telecom, or municipal customers. Complements USGS 3DEP for North American coverage.

### National LIDAR Programs (other non-US)
- **UK:** Environment Agency LIDAR — Open Government License.
- **Netherlands:** AHN3/AHN4 — CC-BY.
- **Finland:** National Land Survey — CC-BY.
- **Spain:** PNOA-LiDAR — CC-BY 4.0.
- **Slovakia:** ÚGKK SR — national LIDAR program, per-dataset license.
- **Notes:** For LATAM content, national mapping agencies vary. Ecuador's IGM has aerial data but LIDAR is limited. For LATAM pages, prefer Sentinel-derived DEM as fallback.

---

## Synthetic Aperture Radar (SAR)

### Copernicus Sentinel-1 (primary)
- **URL:** https://dataspace.copernicus.eu/ (Copernicus Data Space Ecosystem)
- **Browser:** https://apps.sentinel-hub.com/eo-browser/
- **License:** Free, permissive, Copernicus terms. Editorial and commercial use allowed with attribution.
- **Coverage:** Global, every 6–12 days, C-band SAR.
- **Format:** GRD (ground range detected), IW mode for most land, EW for polar.
- **Notes:** Attribute as "Contains modified Copernicus Sentinel data [year]."

### Alaska Satellite Facility (ASF)
- **URL:** https://search.asf.alaska.edu/
- **License:** Copernicus terms for Sentinel-1; various for other missions.
- **Coverage:** Mirror of Copernicus with different search UI. Also hosts ALOS PALSAR and UAVSAR archives.

### Capella Space (commercial)
- **URL:** https://www.capellaspace.com/
- **License:** Commercial, per-image.
- **Notes:** High-resolution, pay-per-use. Reserve for flagship hero assets only. Not in the default workflow.

---

## RF Waterfall

### Self-captured (primary)
- **Hardware:** HackRF One, RTL-SDR, USRP, or similar SDR.
- **Software:** GQRX, SDR#, CubicSDR, Inspectrum for capture; custom Python/NumPy for colormap.
- **License:** Quatro-owned. No external license considerations.
- **Notes:** Capture real operational frequencies where possible. Redact channel content if it reveals anything sensitive.

### SDR# / WebSDR archives
- **URL:** http://websdr.org (public remote SDR receivers)
- **License:** Varies per operator. Most allow spectrogram capture for editorial.
- **Notes:** Useful for specific band captures without owning the hardware. Attribute the operator.

### SIGINT academic datasets
- **URL:** IEEE DataPort, Kaggle — search "RF dataset" or "spectrum occupancy."
- **License:** Varies per dataset. Most CC-BY or CC0.
- **Notes:** Useful for illustrative examples of specific signal types (LTE, radar, WiFi).

---

## Earth Observation (Multispectral, NIR, SWIR, Thermal)

### Copernicus Sentinel-2 (primary)
- **URL:** https://dataspace.copernicus.eu/ or Sentinel Hub EO Browser.
- **License:** Free, permissive, Copernicus terms.
- **Coverage:** Global, 5 days, 10–60m resolution, 13 bands.
- **Notes:** Best for NIR false-color (bands 8, 4, 3) and SWIR (bands 12, 8, 4).

### USGS Landsat Archive (1972–present)
- **URL:** https://earthexplorer.usgs.gov/
- **License:** Public domain (US federal work).
- **Coverage:** Global, 16 days, 30m resolution. 50+ year continuous archive.
- **Notes:** The go-to for time-series work. Landsat 5 starts 1984, Landsat 4 back to 1982, Landsat 1–3 back to 1972.

### NASA Worldview
- **URL:** https://worldview.earthdata.nasa.gov/
- **License:** Public domain.
- **Coverage:** MODIS (daily), VIIRS, Aqua/Terra. Low resolution (250m+) but daily coverage useful for rapid events.
- **Notes:** Great for wildfire, dust storm, ice event imagery.

### Maxar Open Data Program
- **URL:** https://www.maxar.com/open-data
- **License:** Permissive, attribution required. Not for commercial products but editorial OK.
- **Coverage:** High-res (30cm) event-driven releases — disasters, humanitarian response.
- **Notes:** Excellent for case studies tied to specific events.

### Planet Labs
- **URL:** https://www.planet.com/
- **License:** Commercial per-image. Education program available for nonprofits.
- **Coverage:** Daily global at 3m with PlanetScope, high-res with SkySat.
- **Notes:** Not in default workflow. Reserve for flagship customer stories with budget.

### Radiant Earth MLHub
- **URL:** https://mlhub.earth/
- **License:** Varies per dataset. Most CC-BY.
- **Notes:** Curated EO datasets with ML labels. Useful for ML-track content.

---

## Gaussian Splats

### Luma AI (primary)
- **Tool:** Luma AI iOS/Android + web dashboard.
- **Export format:** .splat, .ply.
- **License:** User-owned (captured by Quatro). Terms allow commercial editorial use.
- **Notes:** 3–5 minute walk-around per site. Best for ground stations, substations, control rooms, vessels.

### Polycam
- **Tool:** Polycam iOS/Android.
- **Export format:** .ply, GLB, USDZ.
- **License:** User-owned.
- **Notes:** Higher fidelity than Luma for some subjects. Better for indoor NOCs.

### Scaniverse
- **Tool:** Scaniverse iOS.
- **Export format:** .ply, gaussian splat.
- **License:** User-owned.
- **Notes:** Free, unlimited captures since Niantic acquisition.

### Public splat archives
- **URL:** https://splats.luma.ai/ (Luma's community gallery, check per-capture rights).
- **License:** Varies. Do not use unless explicit commercial-editorial clearance exists.

---

## Illustration and Archival

### Biodiversity Heritage Library (Haeckel etc.)
- **URL:** https://www.biodiversitylibrary.org/
- **License:** Most pre-1930 materials public domain.
- **Notes:** Source well for block-print illustrations. Haeckel's *Kunstformen der Natur* (1899–1904) is the primary reference.

### NASA Image and Video Library
- **URL:** https://images.nasa.gov/
- **License:** Public domain.
- **Coverage:** Photography, video, and technical drawings from NASA history.
- **Notes:** The retro-futurist lane. Mission documentation, Apollo-era technical drawings.

### Bell Labs / AT&T Archives
- **URL:** https://www.corp.att.com/attlabs/reputation/archives/
- **License:** Limited — most pre-1960 materials out of copyright, but verify per image.
- **Notes:** The black-and-white ops-room photography register. Use sparingly, verify each image.

### USGS Photographic Library
- **URL:** https://library.usgs.gov/photo/
- **License:** Public domain.
- **Notes:** Field science, early 20th century. Good for the archival lane.

### Internet Archive — Whole Earth Catalog
- **URL:** https://archive.org/details/wholeearthcatalog
- **License:** Check per item. Some issues explicitly CC-BY.
- **Notes:** Mood and typography reference. Use sparingly for direct reproduction — mostly a reference, not an asset source.

---

## Anti-Sources (Do Not Use)

Never source sensor or editorial assets from:

- **Pinterest** (most re-uploads, licensing unclear).
- **Google Images** (aggregator, not a source).
- **Unsplash / Pexels** for "sensor-looking" photography (gives the mimic feel, breaks the real-data preference).
- **Stability AI / Midjourney / DALL·E** for sensor imagery (that goes through `image-generation` v7e as a documented mimic, not directly).
- **Customer-provided images without signed release** (liability risk).

---

## License Field in Manifest

Every manifest entry must carry a `license` field from this controlled vocabulary:

- `public-domain`
- `copernicus`
- `cc-by` (note version in the entry)
- `cc0`
- `quatro-owned`
- `quatro-customer-<customer>` (references customer agreement)
- `maxar-open-data`
- `commercial-<vendor>` (with the contract ID)

If none of the above apply, the asset does not ship. Escalate to Jonathan for guidance.
