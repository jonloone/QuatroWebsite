# Claude Code Prompt — Place Generated Images Across Website

Copy everything below this line into Claude Code.

---

## Task

Place 53 AI-generated images into the Quatro website. This involves two steps for each image: (1) copy the file into `public/images/`, and (2) update the relevant source file to reference it. The components already support image props — no component changes are needed.

## Source Images

All generated images are in:
```
../generated-images/
```

(Relative to the QuatroWebsite root. Absolute path: the `generated-images/` folder in the same parent directory as this project.)

Each filename follows a prefix convention that maps to its placement:
- `cap-*` → Capability card image (1200×750)
- `solution-*` → Solution page hero (1920×1080)
- `industry-*` → Industry page hero (1920×1080)
- `ni-*` → National Intelligence page hero (1920×1080)
- `proof-*` → Proof point image (1200×750)
- `bg.png` → Shared dark section background
- `cta.png` → Shared CTA section background

---

## Step 1 — Copy All Images to `public/images/`

```bash
cp ../generated-images/*.png public/images/
```

**Special handling for shared backgrounds** — the site expects `.jpg` for these two:
```bash
# Convert or rename if needed — the generated files are .png but the site references .jpg
# Option A: Just copy as-is and update references to .png
# Option B: Convert to jpg (preferred — smaller file size for backgrounds)
# Use ImageMagick if available, otherwise just copy as .png and update refs
cp ../generated-images/bg.png public/images/bg.png
cp ../generated-images/cta.png public/images/cta.png
```

After copying, `public/images/` should contain all 53 new files alongside the existing images.

---

## Step 2 — Update Industry Page Frontmatter

**Files:** `src/content/industries/*.md`

### 2A — Hero Images

For each industry page, add or update the `heroImage` field in YAML frontmatter. Some pages already have it (just verify the path), others need it added after the `tagline` field.

| Content File | heroImage Value |
|---|---|
| `energy.md` | `/images/industry-energy.png` (already exists — **no change needed**) |
| `defense.md` | `/images/induistry-defense.png` (already exists with typo — **no change needed** unless you want to fix the typo by also renaming the old file) |
| `cities.md` | `/images/industry-cities.png` (already exists — **no change needed**) |
| `industrial.md` | `/images/industry-industrial.png` (already exists — **no change needed**) |
| `infrastructure.md` | `/images/industry-infrastructure.png` (already exists — **no change needed**) |
| `finance.md` | `/images/industry-finance.png` (**UPDATE** — currently references old file) |
| `broadcast-media.md` | `/images/industry-broadcast-media.png` (**ADD** — currently missing) |
| `space-satcom.md` | `/images/industry-space-satcom.png` (**ADD** — currently missing) |
| `transportation.md` | `/images/industry-transportation.png` (**ADD** — currently missing) |
| `water-environment.md` | `/images/industry-water-environment.png` (**ADD** — currently missing) |

**Pattern for adding `heroImage`** — insert after `tagline:` in the frontmatter:
```yaml
title: "Transportation & Logistics"
tagline: "..."
heroImage: "/images/industry-transportation.png"
description: "..."
```

### 2B — Capability Images

For each industry's `capabilities:` array, add an `image:` field to each capability that has a matching generated image. The mapping is based on the CSV's `pillar` and `output_filename` columns.

**Cities** (`cities.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Cross-Agency Operations"       # ADD: image: "/images/cap-cities-cross-agency.png"
  - name: "Waste Management"              # ADD: image: "/images/cap-cities-waste-mgmt.png"
  - name: "Water Infrastructure"           # ADD: image: "/images/cap-cities-water-infra.png"
```

**Defense** (`defense.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Air-Gapped Operations"          # ADD: image: "/images/cap-defense-air-gapped.png"
  - name: "Perimeter Defense/Protection"    # ADD: image: "/images/cap-defense-perimeter.png"
  - name: "Space Domain Awareness"          # ADD: image: "/images/cap-defense-space-domain.png"
```

**Energy** (`energy.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Operator Guidance"              # ADD: image: "/images/cap-energy-operator-guidance.png"
  - name: "Pipeline Monitoring"            # ADD: image: "/images/cap-energy-pipeline.png"
  - name: "SCADA Integration"             # ADD: image: "/images/cap-energy-scada-overlay.png"
```

**Finance** (`finance.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Customer 360 Intelligence"      # ADD: image: "/images/cap-finance-customer-360.png"
  - name: "NPA Early Warning"              # ADD: image: "/images/cap-finance-npa-warning.png"
  - name: "Regulatory Compliance"          # ADD: image: "/images/cap-finance-compliance.png"
```

**Industrial** (`industrial.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Operator Guidance"              # ADD: image: "/images/cap-industrial-operator-guidance.png"
  - name: "Quality Intelligence"           # ADD: image: "/images/cap-industrial-quality.png"
```

**Infrastructure** (`infrastructure.md`) — add `image` to these capabilities:
```yaml
capabilities:
  - name: "Commercial Operations / Data Center" # ADD: image: "/images/cap-infra-commercial-ops.png"
  - name: "Fault Remediation"              # ADD: image: "/images/cap-infra-fault-remediation.png"
```

**IMPORTANT:** Match by capability name semantics, not exact string. The capability `name` in the .md file may differ slightly from the CSV title. Match on the closest capability. Place `image:` on the line after `name:` or after `description:` — same indentation level as other capability fields like `featured`, `outcome`, `tier`.

---

## Step 3 — Update Solution Page Frontmatter

**Files:** `src/content/solutions/*.md`

Add `heroImage` to each solution page. Some Finance solutions already have it — update to the new generated image. All others need it added.

| Content File | heroImage Value |
|---|---|
| `airport-operations.md` | `/images/solution-airport-operations.png` |
| `asset-monitoring.md` | `/images/solution-asset-monitoring.png` |
| `claims-classification.md` | `/images/solution-claims-classification.png` |
| `corridor-intelligence.md` | `/images/solution-corridor-intelligence.png` |
| `credit-risk.md` | `/images/solution-credit-risk.png` |
| `customer-360.md` | `/images/solution-customer-360.png` |
| `environmental-compliance.md` | `/images/solution-environmental-compliance.png` |
| `fleet-health.md` | `/images/solution-fleet-health.png` |
| `fleet-logistics.md` | `/images/solution-fleet-logistics.png` |
| `grid-operations.md` | `/images/solution-grid-operations.png` |
| `network-operations.md` | `/images/solution-network-operations.png` |
| `npa-early-warning.md` | `/images/solution-npa-early-warning.png` |
| `operational-intelligence.md` | `/images/solution-operational-intelligence.png` |
| `physical-security.md` | `/images/solution-physical-security.png` |
| `pipeline-security.md` | `/images/solution-pipeline-security.png` |
| `port-operations.md` | `/images/solution-port-operations.png` |
| `regulatory-compliance.md` | `/images/solution-regulatory-compliance.png` |
| `satellite-revenue-assurance.md` | `/images/solution-satellite-revenue.png` |
| `space-domain-awareness.md` | `/images/solution-space-domain.png` |
| `teleport-operations.md` | `/images/solution-teleport-operations.png` |
| `water-systems.md` | `/images/solution-water-systems.png` |

**NOTE:** Solution filenames don't always match the image filename exactly:
- `satellite-revenue-assurance.md` → `solution-satellite-revenue.png`
- `space-domain-awareness.md` → `solution-space-domain.png`

---

## Step 4 — Update National Intelligence Pages

**Files:** `src/pages/national-intelligence/*.astro`

These are static Astro pages (not content collections), so images are referenced directly as `<img>` tags in the HTML. Replace the placeholder `hero-bg.png` reference in each page's hero section with the correct generated image.

| Astro File | Replace `hero-bg.png` with |
|---|---|
| `index.astro` | `ni-hub.png` |
| `counter-cartel-operations.astro` | `ni-counter-cartel.png` |
| `resource-protection.astro` | `ni-resource-protection.png` |
| `youth-vulnerability-index.astro` | `ni-youth-vulnerability.png` |

**Find this pattern** in each file's hero section:
```html
<img src="/images/hero-bg.png" alt="" class="h-full w-full object-cover" />
```
**Replace with:**
```html
<img src="/images/ni-hub.png" alt="" class="h-full w-full object-cover" />
```
(using the correct `ni-*.png` filename for each page)

**Also in these same files**, update the shared backgrounds:
- Replace `<img src="/images/bg.jpg"` → `<img src="/images/bg.png"` (or keep .jpg if you converted)
- Replace `<img src="/images/cta.jpg"` → `<img src="/images/cta.png"` (or keep .jpg if you converted)

---

## Step 5 — Update Shared Background References (Optional)

If you copied `bg.png` and `cta.png` without converting to `.jpg`, search the entire `src/` directory for references to the old filenames and update:

```bash
# Find all references
grep -r "bg\.jpg" src/ --include="*.astro" --include="*.md"
grep -r "cta\.jpg" src/ --include="*.astro" --include="*.md"
```

Update each to point to the new `.png` versions if applicable. These appear in:
- `src/components/marketing/CtaBanner.astro` (or wherever the CTA section is)
- `src/pages/national-intelligence/*.astro`
- Any other section backgrounds

---

## Step 6 — Proof Point Images (Future-Ready)

The proof point images are generated but the ProofPointCard component rendering is currently commented out in the solution page template. Copy them to `public/images/` (done in Step 1) so they're ready when the component is activated.

For reference, the proof point mapping is:
| Image | Intended Use |
|---|---|
| `proof-cities.png` | Cities/municipal proof point |
| `proof-defense.png` | Defense/national security proof point |
| `proof-energy.png` | Energy industry proof point |
| `proof-industrial.png` | Manufacturing/industrial proof point |
| `proof-infrastructure.png` | Infrastructure/telecom proof point |

---

## How Image Rendering Works (Reference)

You should NOT need to modify any components. Here's how they work for context:

**Hero.astro** — Accepts `backgroundImage` prop, renders as CSS `background-image`:
```astro
style={`background-image: url('${backgroundImage || '/images/bg555.png'}')`}
```
The `[slug].astro` templates for both industries and solutions already pass `heroImage` from frontmatter:
```astro
backgroundImage={heroImage}
```

**BentoUseCases.astro** — Reads `cap.image` from the capabilities array and renders `<img>` tags. Falls back to a gradient placeholder if no image is set.

**EditorialCapability.astro** — Same pattern — reads `image` prop and renders it.

---

## Verification

After all changes, run:
```bash
npm run build
```

The build should complete without errors. Then spot-check a few pages in the browser:
1. An industry page (e.g., `/industries/energy`) — hero should show new image, bento grid capabilities should show capability images
2. A solution page (e.g., `/solutions/grid-operations`) — hero should show new image
3. A national intelligence page (e.g., `/national-intelligence/counter-cartel-operations`) — hero should show new image
4. Check that shared backgrounds (dark sections, CTA) render correctly
