# Quatro Website — Image Audit & Generation Plan

## Current Image Inventory

### Existing Images in `/public/images/`

| File | Used By | Type | Status |
|------|---------|------|--------|
| `hero-bg.png` | Homepage, Coming Soon, National Intelligence pages | Hero background | EXISTS — shared |
| `bg555.png` | Hero.astro fallback (dark variant default) | Hero fallback | EXISTS — shared |
| `bg.jpg` | Homepage dark sections, Section.astro component, National Intelligence pages | Dark section background | EXISTS — shared |
| `cta.jpg` | Homepage CTA, CtaBanner.astro component, National Intelligence pages | CTA section background | EXISTS — shared |
| `cta-bg.jpg` | Unused/alternate CTA bg | CTA background | EXISTS — possibly unused |
| `bg-cta.png` | Unused/alternate CTA bg | CTA background | EXISTS — possibly unused |
| `bg-hero-industrial.jpg` | Unused (not referenced in code) | Hero background | EXISTS — orphan |
| `hero-top.png` | Unused (not referenced in code) | Hero background | EXISTS — orphan |
| `connect.png` | Homepage, Coming Soon | Decorative overlay graphic | EXISTS — shared |
| `logo.svg` | Site-wide | Brand logo | EXISTS — keep |
| `platform-screenshot.png` | Unknown/Product pages | Platform screenshot | EXISTS |
| `product-connect-card.png` | Connect product page (EN + ES) | Product hero | EXISTS |
| `product-platform.png` | Operate product page (EN + ES) | Product hero | EXISTS |
| `feature-command-center.png` | Command product page (EN + ES) | Product hero | EXISTS |
| `industry-energy.png` | Energy industry page (EN + ES) | Industry hero | EXISTS |
| `induistry-defense.png` | Defense industry page (EN + ES) | Industry hero | EXISTS — typo in filename |
| `industry-cities.png` | Cities industry page (EN + ES) | Industry hero | EXISTS |
| `industry-industrial.png` | Industrial industry page (EN + ES) | Industry hero | EXISTS |
| `industry-infrastructure.png` | Infrastructure industry page (EN + ES) | Industry hero | EXISTS |
| `industry-mining.png` | Not currently referenced | Industry hero | EXISTS — orphan (no mining page) |
| `Gemini_Generated_Image_wjd0wqwjd0wqwjd0.png` | Not referenced | Test/artifact | EXISTS — cleanup candidate |

## Images Needed — New Vertical Pages

### Priority 1: New Industry Hero Images (REQUIRED)
These pages use the dark Hero variant with `heroImage` as the background. Without a custom image, they fall back to the generic `bg555.png` pattern.

| Target File | Page | Prompt File |
|-------------|------|-------------|
| `industry-space-satcom.png` | `/industries/space-satcom` | `01-industry-space-satcom.md` |
| `industry-transportation.png` | `/industries/transportation` | `02-industry-transportation.md` |
| `industry-water-environment.png` | `/industries/water-environment` | `03-industry-water-environment.md` |
| `industry-broadcast-media.png` | `/industries/broadcast-media` | `04-industry-broadcast-media.md` |

### Priority 2: National Intelligence Hero Images (RECOMMENDED)
These pages currently reuse `hero-bg.png`. Custom images would differentiate each program.

| Target File | Page | Prompt File |
|-------------|------|-------------|
| `ni-hub.png` | `/national-intelligence` | `05-ni-hub.md` |
| `ni-youth-vulnerability.png` | `/national-intelligence/youth-vulnerability-index` | `06-ni-youth-vulnerability.md` |
| `ni-counter-cartel.png` | `/national-intelligence/counter-cartel-operations` | `07-ni-counter-cartel.md` |
| `ni-resource-protection.png` | `/national-intelligence/resource-protection` | `08-ni-resource-protection.md` |

### Priority 3: Solution Hero Images (NOW SUPPORTED)
The solutions schema now includes `heroImage` and the `solutions/[slug].astro` template passes it to the dark Hero variant. Each solution page needs a hero background image.

**Existing solutions (7 pages):**

| Target File | Page | Prompt File |
|-------------|------|-------------|
| `solution-asset-monitoring.png` | `/solutions/asset-monitoring` | `10-solution-asset-monitoring.md` |
| `solution-pipeline-security.png` | `/solutions/pipeline-security` | `11-solution-pipeline-security.md` |
| `solution-operational-intelligence.png` | `/solutions/operational-intelligence` | `12-solution-operational-intelligence.md` |
| `solution-physical-security.png` | `/solutions/physical-security` | `13-solution-physical-security.md` |
| `solution-fleet-logistics.png` | `/solutions/fleet-logistics` | `14-solution-fleet-logistics.md` |
| `solution-grid-operations.png` | `/solutions/grid-operations` | `15-solution-grid-operations.md` |
| `solution-network-operations.png` | `/solutions/network-operations` | `16-solution-network-operations.md` |

**New vertical solutions (9 pages):**

| Target File | Page | Prompt File |
|-------------|------|-------------|
| `solution-teleport-operations.png` | `/solutions/teleport-operations` | `17-solution-teleport-operations.md` |
| `solution-fleet-health.png` | `/solutions/fleet-health` | `18-solution-fleet-health.md` |
| `solution-satellite-revenue.png` | `/solutions/satellite-revenue-assurance` | `19-solution-satellite-revenue.md` |
| `solution-space-domain.png` | `/solutions/space-domain-awareness` | `20-solution-space-domain.md` |
| `solution-port-operations.png` | `/solutions/port-operations` | `21-solution-port-operations.md` |
| `solution-airport-operations.png` | `/solutions/airport-operations` | `22-solution-airport-operations.md` |
| `solution-corridor-intelligence.png` | `/solutions/corridor-intelligence` | `23-solution-corridor-intelligence.md` |
| `solution-water-systems.png` | `/solutions/water-systems` | `24-solution-water-systems.md` |
| `solution-environmental-compliance.png` | `/solutions/environmental-compliance` | `25-solution-environmental-compliance.md` |

### Priority 4: Capability-Level Bento Images (REQUIRED — NEW TEMPLATE)
The new bento use-case layout renders featured capabilities as large cards with images. Each page will have 2-3 featured capabilities that need individual images. These are specific, use-case-focused images — not broad hero backgrounds.

**Naming convention:** `cap-{industry/solution}-{capability-slug}.png`
**Dimensions:** 1200×750 (16:10 landscape)
**Style:** Same cinematic tone as hero images but more specific/close-up. Should directly illustrate the use case being described.

Prompt files are numbered `40-xx` through `49-xx` per page. Exact prompts will be generated during content migration (when specific capabilities are flagged as `featured`). Estimated volume:

| Page | Est. Featured Caps | Est. Images Needed |
|------|-------------------|-------------------|
| Energy | 2-3 | `cap-energy-scada-overlay.png`, `cap-energy-pipeline.png`, `cap-energy-operator-guidance.png` |
| Defense | 2-3 | `cap-defense-perimeter.png`, `cap-defense-air-gapped.png`, `cap-defense-space-domain.png` |
| Cities | 2-3 | `cap-cities-water-infra.png`, `cap-cities-waste-mgmt.png`, `cap-cities-cross-agency.png` |
| Industrial | 2-3 | `cap-industrial-operator-guidance.png`, `cap-industrial-quality.png` |
| Infrastructure | 2-3 | `cap-infra-fault-remediation.png`, `cap-infra-commercial-ops.png` |
| Space & SATCOM | 2-3 | `cap-satcom-fleet-health.png`, `cap-satcom-teleport.png`, `cap-satcom-domain-awareness.png` |
| Transportation | 2-3 | `cap-transport-port-ops.png`, `cap-transport-airport.png`, `cap-transport-corridor.png` |
| Water & Environment | 2-3 | `cap-water-treatment.png`, `cap-water-environmental.png` |
| Broadcast & Media | 2-3 | `cap-broadcast-operations.png`, `cap-broadcast-delivery.png` |
| + 7 existing solutions | 2-3 each | TBD during content migration |
| + 9 new solutions | 2-3 each | TBD during content migration |

**Estimated total: 50-75 capability images** (generated as pages are migrated to the bento layout)

### Priority 5: Proof Point Images (RECOMMENDED — NEW TEMPLATE)
The editorial proof point section now uses a split layout with an image placeholder on the right side. Each page with a `proofPoint` block would benefit from a corresponding image.

**Naming convention:** `proof-{industry/solution-slug}.png`
**Dimensions:** 1200×750 (16:10 landscape)
**Style:** More documentary/editorial than hero images. Could be: operations center in action, deployment photo, dashboard view (abstracted), infrastructure at the scale described in the narrative. Should feel like evidence, not marketing.

| Target File | Page | Prompt File |
|-------------|------|-------------|
| `proof-energy.png` | Energy proof point | `50-proof-energy.md` |
| `proof-defense.png` | Defense proof point | `51-proof-defense.md` |
| `proof-cities.png` | Cities proof point | `52-proof-cities.md` |
| `proof-industrial.png` | Industrial proof point | `53-proof-industrial.md` |
| `proof-infrastructure.png` | Infrastructure proof point | `54-proof-infrastructure.md` |
| + new industries | 4 new industry pages | TBD with content |
| + solutions with proofPoints | ~16 solution pages | TBD with content |

**Estimated total: 20-25 proof point images**

### Priority 6: Shared / Utility Images (NICE TO HAVE)
Consider refreshing these shared backgrounds for a more cohesive visual identity:

| Target File | Used By | Prompt File |
|-------------|---------|-------------|
| `bg.jpg` (refresh) | Dark sections site-wide | `30-shared-dark-section-bg.md` |
| `cta.jpg` (refresh) | CTA banners site-wide | `31-shared-cta-bg.md` |

## Cleanup Recommendations

1. **Delete** `Gemini_Generated_Image_wjd0wqwjd0wqwjd0.png` — test artifact
2. **Rename** `induistry-defense.png` → `industry-defense.png` (fix typo, update references in `defense.md` EN + ES)
3. **Review** `bg-hero-industrial.jpg`, `hero-top.png`, `bg-cta.png`, `cta-bg.jpg`, `industry-mining.png` — appear orphaned, not referenced in current code

## Style Guide for Image Generation

### Shared Rules (all image types)

- **Style:** Cinematic, atmospheric, slightly desaturated — NOT stock-photo clean. Think editorial/documentary tone.
- **Color palette:** Deep teals, dark greens, navy blues, warm ambers — complement Quatro's forest green (#0f4c3a) brand
- **Mood:** Professional, operational, high-stakes. Show infrastructure at scale, control rooms, operations in progress.
- **Technical:** No text, logos, or UI elements baked into the image. No people's faces (privacy). Equipment, environments, and abstract operational contexts only.
- **Format:** PNG or high-quality JPG, optimized for web (aim for <500KB after compression)

### Tier 1: Hero Background Images (industry + solution pages)

Used as `background-image` behind white text with a 60% dark overlay (`bg-neutral-900/60`).

- **Dimensions:** 1920×1080 minimum (16:9 landscape)
- **Composition:** Subject matter weighted to the right side (text overlay sits left). Avoid centered focal points.
- **Depth of field:** Slightly soft/atmospheric — the image is a backdrop, not the focal point. Text legibility is priority.
- **Brightness:** Can be vivid — the 60% dark overlay handles contrast. Avoid images that are already very dark.

### Tier 2: Capability Bento Images (featured use-case cards)

Used inside bento grid cards at ~h-80 (320px tall), full card width. Displayed above the capability title and description on a dark (`bg-neutral-800`) card.

- **Dimensions:** 1200×750 (16:10 landscape)
- **Composition:** Subject matter can be centered — no text overlay on the image itself. The image tells the story of one specific use case.
- **Specificity:** More specific and close-up than hero images. A hero might show "a port at dawn" — a capability image shows "gantry cranes loading containers" or "a control room operator monitoring screens."
- **Brightness:** Medium — should look good on a dark card without additional overlay. Avoid very bright images.

### Tier 3: Proof Point Images (editorial split layout)

Used in a two-column editorial layout, image on the right, narrative + metrics on the left. Rendered at full column width with `rounded-xl shadow-xl` treatment.

- **Dimensions:** 1200×750 (16:10 landscape)
- **Composition:** Subject matter centered or slightly left (the image stands alone, no text overlay).
- **Tone:** More documentary/evidentiary. Should feel like "this actually happened" — deployment photos, operations in action, infrastructure at the scale described in the proof point narrative.
- **Brightness:** Normal — this is a light-background section. Image should have good contrast and feel grounded/real.

## Image Volume Summary

| Category | Count | Status |
|----------|-------|--------|
| Existing industry hero images | 5 | EXISTS |
| Existing product hero images | 3 | EXISTS |
| New industry hero images | 4 | NEEDED — prompts ready |
| National intelligence hero images | 4 | NEEDED — prompts ready |
| Solution hero images (existing pages) | 7 | NEEDED — prompts ready |
| Solution hero images (new pages) | 9 | NEEDED — prompts ready |
| Capability bento images | 50-75 | NEEDED — prompts generated during content migration |
| Proof point images | 20-25 | NEEDED — prompts partially ready |
| Shared background refreshes | 2 | OPTIONAL — prompts ready |
| **Total new images needed** | **~96-126** | |
