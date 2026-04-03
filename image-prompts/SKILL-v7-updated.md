---
name: image-generation
description: >
  Use this skill whenever Jonathan needs to generate, batch-produce, or manage AI-generated images
  for the Quatro/DataOS website or any other project using the Replicate API. Triggers include:
  "generate images," "create images," "image prompts," "batch images," "hero image," "capability image,"
  "challenge icon," "new images for [industry/solution/page]," "image generation," "Replicate,"
  "Nano Banana," or any request to produce visual assets for web pages, content files, or marketing
  materials. Also trigger when the user says "we need images for X," "create visuals for the new page,"
  "generate the missing images," or references a CSV of image prompts. Even if the user just mentions
  needing a new industry or solution page — since those always need images — consider triggering this
  skill proactively. Always use this skill before writing image generation scripts or CSV prompt files.
---

# Image Generation Skill

This skill captures the complete repeatable system for generating cinematic editorial documentary AI images using the v7 art direction framework and the Replicate API, from reading the visual world bibles through batch generation to wiring images into the Quatro website.

## When to Use This

Any time images need to be created for the Quatro website or a similar project:
- New industry or solution pages that need hero images, challenge icons, and capability visuals
- Missing or placeholder images that need to be filled
- Refreshing existing visuals with updated branding
- Generating images for any new content that requires visual assets
- Adding a new industry vertical to the platform

## The Workflow at a Glance

1. **Read the Art Direction** — Immerse in the v7 visual system (Style Brief, Industry Bible, Image Map)
2. **Audit** — Figure out what images are needed (check content frontmatter for missing `image:` fields)
3. **Prompt** — Write scene prompts in CSV format using the v7 template and industry visual world bible
4. **Generate** — Run the batch generation script against the Replicate API
5. **Deploy** — Copy generated images to `public/images/` and wire paths into content YAML
6. **Verify** — Confirm images exist, render correctly, and are referenced properly

## Step 0: Read the Art Direction

Before writing ANY prompts, immerse yourself in the v7 visual system. This ensures all images sing together as one cinematic world.

### Read These Files First:

1. **Style Brief** — The complete v7 art direction
   → Read: `image-prompts/STYLE-BRIEF.md`
   This document defines the photographic philosophy (cinematic editorial documentary), the film stock aesthetic (Kodak Portra 800), color palette, and the emotional intent for all images.

2. **Industry Visual World Bible** — The specific industry's visual language
   → Read: `image-prompts/bibles/bible-{industry}.md` (e.g., `bible-energy.md`, `bible-defense.md`)
   Each bible describes:
   - Hero scene (the industry's world from above)
   - Capability scene (what success looks like in this industry)
   - Challenge scene (the specific problem we're solving)
   - Color profile (primary + accent colors for this vertical)
   - Visual "don'ts" (what never appears in this industry's images)

3. **Image Inventory** — Complete mapping of all images across the platform
   → Read: `image-prompts/IMAGE-MAP.md`
   This matrix shows which images exist, which are needed, and which are in progress. Reference it to understand how your new images fit into the whole.

This upfront reading takes 15–20 minutes and saves hours of rework because you're designing to a cohesive system, not starting from scratch each time.

## Step 1: Audit What's Needed

Before generating anything, figure out what's missing. Check the content collection files (typically `src/content/industries/*.md` or `src/content/solutions/*.md`) for:

- `heroImage:` field — every page needs one (1920x1080)
- `challenges[].image:` — challenge icons (400x400)
- `capabilities[].image:` — capability visuals (800x600), especially for `featured: true` items
- Any proof point or editorial images

A quick audit script:

```python
import yaml, glob
for f in sorted(glob.glob("src/content/industries/*.md")):
    with open(f) as fh:
        content = fh.read()
        if content.startswith("---"):
            fm = yaml.safe_load(content.split("---")[1])
            missing = []
            if not fm.get("heroImage"): missing.append("heroImage")
            for i, c in enumerate(fm.get("capabilities", [])):
                if c.get("featured") and not c.get("image"):
                    missing.append(f"capability[{i}].image ({c['name']})")
            for i, ch in enumerate(fm.get("challenges", [])):
                if not ch.get("image"):
                    missing.append(f"challenge[{i}].image ({ch['title']})")
            if missing:
                print(f"\n{f}:")
                for m in missing: print(f"  - {m}")
```

## Step 2: Write Image Prompts

Before starting: Have you read the Style Brief and the relevant Industry Bible? If not, go back to **Step 0**.

### CSV Format

Every batch of prompts goes into a CSV with these columns:

| Column | Required | Description |
|--------|----------|-------------|
| `pillar` | Yes | Industry vertical (Energy, Defense, Networks, Cities, etc.) |
| `image_type` | Yes | Hero, Challenge Icon, Secondary Capability, Featured Capability, Solution Hero, Proof Point |
| `title` | Yes | Human-readable name for the image |
| `output_filename` | Yes | Target filename (e.g., `cap-energy-cross-domain.png`) |
| `dimensions` | Yes | Pixel dimensions that determine aspect ratio (see mapping below) |
| `scene_prompt` | Yes | The detailed generation prompt using v7 template (the most important field) |
| `palette` | Yes | Color direction using brand hex codes or bible-specific palette |
| `composition` | No | Optional composition notes (subject placement, framing) |

### Dimension → Aspect Ratio Mapping

The Replicate API uses aspect ratio enums, not pixel dimensions. The generation script maps them automatically:

| Dimensions | Aspect Ratio | Use Case |
|-----------|-------------|----------|
| 1920x1080 | 16:9 | Hero backgrounds, solution heroes |
| 1200x750 | 16:9 | Proof points, editorial images |
| 800x600 | 4:3 | Capability card images |
| 400x400 | 1:1 | Challenge icons |
| 1080x1920 | 9:16 | Mobile/vertical (rare) |

### Resolution by Image Type

- **Heroes** (1920x1080): Generate at `2K` resolution for crisp full-width backgrounds
- **Capabilities** (800x600): Generate at `1K` — they display at card size, 2K is waste
- **Challenge Icons** (400x400): Generate at `1K` — small display size
- **Proof Points** (1200x750): Generate at `2K` for editorial quality

### The v7 Prompt Template

Every scene prompt follows this structure. This is not optional — consistency across the visual system depends on all prompts using this template:

```
Cinematic documentary photograph of [SPECIFIC ENVIRONMENT FROM BIBLE].
[WHAT WE SEE — key infrastructure elements, spatial context, scale].
[COMPOSITION — focal anchor, divisions of two, foreground vs background].
[LIGHTING — natural/practical sources, color temperature, time of day].
Shot on 35mm lens, f/2.8 aperture. Kodak Portra 800 film stock.
Warm analog color palette — forest green (#0f4c3a) shadows, [ACCENT] highlights.
Fine organic film grain. Natural vignetting. Editorial documentary quality.
The image feels like [EMOTIONAL INTENT] — the viewer is inside the world of [INDUSTRY].
No typography, no logos, no words, no lettering of any kind, no identifiable human faces.
```

### How to Fill the Template

**[SPECIFIC ENVIRONMENT FROM BIBLE]** — This comes directly from the Industry Bible. For Energy, this might be "high-voltage substation complex during twilight." For Defense, "secure communications hub with satellite uplinks." Never generalize; be specific to the industry's actual infrastructure.

**[WHAT WE SEE]** — Describe the key operational elements visible in the frame. Physical equipment, spatial relationships, scale indicators (human figures are ok in background only, no visible faces). What makes this industry's infrastructure distinct?

**[COMPOSITION]** — How is the frame divided? Typical patterns: rule of thirds with equipment in strong position, foreground-to-background depth showing layers of systems, aerial perspective showing compound facilities. What's the focal anchor (the thing the eye lands on first)?

**[LIGHTING]** — Where does light come from? Natural (golden hour, blue hour, overcast diffuse), practical (facility lighting, instrument backlighting), or mixed? What color temperature (warm tungsten, cool daylight, orange sodium vapor)? What time of day best tells this industry's story?

**[ACCENT]** — From the Industry Bible's color profile. For Energy, might be `Safety Amber (#F4A261)` for grid markers. For Defense, `Cyber Emerald (#00D1B2)` for secure data flows.

**[EMOTIONAL INTENT]** — How should the viewer feel? "The viewer is witnessing critical infrastructure at the moment of peak operational insight." "The viewer is inside a nerve center where decisions protect the nation." Not sentimental; documentary and grounded.

**[INDUSTRY]** — Name the industry (Energy, Networks, Defense, Cities, etc.)

### Brand Palette Reference

These colors appear in prompts and define the visual voice across all images:
- Forest Green `#0f4c3a` — brand primary, shadows, depth
- Cyber Emerald `#00D1B2` — accent, data states, operational highlights
- Intelligence Navy `#0A1128` — deep trust, security contexts, night skies
- Rich Charcoal `#1A1A1A` — dark tones (never pure black)
- Safety Amber `#F4A261` — warm accent, operational lighting, warning states

Industry Bibles may override with vertical-specific palettes. The Bible always wins.

### Hard Rules for All Prompts

- **No text, logos, UI elements** — Only the physical/operational world
- **No visible human faces** — Bodies ok in background only, never recognizable faces
- **No pure black** — Use charcoal (#1A1A1A) or navy (#0A1128)
- **Only infrastructure, environments, operational contexts** — Never isolated components or product photography
- **35mm film aesthetic always** — Kodak Portra 800, f/2.8 depth of field, analog grain, natural vignetting
- **Cinematic documentary framing** — Shot composition should feel journalistic and evidence-based, not staged

### Writing Effective Scene Prompts by Image Type

**Hero (1920x1080) — the industry's world from above:**
The hero establishes the visual world. Composition should reserve space for text overlay (typically leaves left side clear for headlines, subject on right or center). Atmospheric, cinematic, documentary.

Example structure:
```
Cinematic documentary photograph of interconnected energy distribution facility at golden hour.
Multiple transformer banks, transmission tower support structures, and SCADA control building visible across sprawling industrial compound.
Composition uses aerial perspective — foreground copper switchyard infrastructure in sharp detail, middle-ground transmission towers receding, background distant power plant silhouette. Rule of thirds places primary transformer bank in strong right position.
Golden hour light from the left, warm tungsten facility lighting mixing with natural amber sky. Long shadows emphasize scale and complexity.
Shot on 35mm lens, f/2.8 aperture. Kodak Portra 800 film stock.
Warm analog color palette — forest green (#0f4c3a) shadows on equipment, Safety Amber (#F4A261) accent lights on critical switchpoints.
Fine organic film grain. Natural vignetting. Editorial documentary quality.
The image feels like witnessing the backbone of modern civilization — the viewer is inside the world of Energy.
No typography, no logos, no words, no lettering of any kind, no identifiable human faces.
```

**Challenge Icon (400x400) — the specific problem:**
Challenge icons are minimal, abstract, immediately readable at small size. 3D isometric perspective on dark background. Convey the *problem state*, not the solution.

Example structure:
```
Minimal 3D abstract icon visualization.
Central concept: data silos. Four geometric cubes floating independently with broken/fading connection lines between them. Each cube rendered in slightly different shade suggesting separate departments or legacy systems. No data flows connecting them. Empty space between cubes emphasizes fragmentation.
Clean isometric perspective. Transparent dark background.
Warm analog aesthetic — minimal grain, subtle vignetting. Editorial documentary quality.
The image feels like isolation and missed intelligence — the viewer understands the operational problem instantly.
No typography, no logos, no words, no lettering of any kind, no identifiable human faces.
```

**Capability (800x600) — success in this industry:**
Capability images show what becomes possible when we solve the challenge. Abstract 3D illustration or documentary photograph of the operational outcome. Centered composition. Convey the *capability's impact*, not just its name.

Example structure:
```
Cinematic documentary photograph of integrated operations center during critical event response.
Multiple monitoring stations, each with dashboard displays showing unified view of previously-siloed data streams. Physical layout shows convergence — separate SCADA feeds, threat intelligence displays, weather data, and external sensor networks all flowing into central analysis position. Visual metaphor: multiple rivers merging into one channel.
Composition centers on the central analyst position with monitoring equipment in foreground, wall displays in background showing data confluence. Depth emphasizes the integration of layers.
Soft interior lighting from displays and facility ambient, creating controlled color zones.
Shot on 35mm lens, f/2.8 aperture. Kodak Portra 800 film stock.
Warm analog color palette — forest green (#0f4c3a) in deep shadows, Cyber Emerald (#00D1B2) accent lights showing active data flows.
Fine organic film grain. Natural vignetting. Editorial documentary quality.
The image feels like clarity emerging from chaos — the viewer is inside the world of Energy where integrated intelligence drives decisive action.
No typography, no logos, no words, no lettering of any kind, no identifiable human faces.
```

**Proof Point (1200x750) — real-world impact:**
Proof point images ground abstract capabilities in concrete operational evidence. Documentary photography of actual infrastructure transformation or measurable outcome.

Example structure:
```
Cinematic documentary photograph of modernized energy grid control room in operation.
Operators monitoring real-time distributed energy system with high-speed wind farm telemetry integrated into legacy SCADA network. Multiple large displays show unified operational view. Equipment visible: modern compute servers, network infrastructure, control interfaces. Physical space shows blend of legacy and modern technology.
Composition uses foreground operator workstations in sharp focus, background displays showing data streams, depth of field isolates the critical monitoring function.
Practical facility lighting mixing with display backlighting. Natural and electronic light sources create warm/cool color tension.
Shot on 35mm lens, f/2.8 aperture. Kodak Portra 800 film stock.
Warm analog color palette — forest green (#0f4c3a) in deep equipment shadows, Safety Amber (#F4A261) accent on critical control points.
Fine organic film grain. Natural vignetting. Editorial documentary quality.
The image feels like competent, calm operational control — the viewer is inside the world of Energy where technology and expertise converge.
No typography, no logos, no words, no lettering of any kind, no identifiable human faces.
```

## Step 3: Generate Images

### Using the Bundled Script

The generation script is at `scripts/generate_images.py`. It handles:
- Reading CSV prompt files
- Mapping dimensions to Replicate aspect ratios
- Calling the Replicate API (google/nano-banana-pro model)
- Downloading generated images
- Skip logic for images that already exist
- Logging results to JSON

**Prerequisites:**
- Python 3.8+
- `replicate` pip package (auto-installed by the script)
- `REPLICATE_API_TOKEN` environment variable set

**Configuration at the top of the script:**

```python
MODEL = "google/nano-banana-pro"       # Primary model
RESOLUTION = "2K"                       # Default; override per-row if needed
OUTPUT_FORMAT = "png"                   # png or jpg
SAFETY_FILTER = "block_only_high"       # Most permissive
ALLOW_FALLBACK = True                   # Fall back to seedream-5 if at capacity
```

**Running a batch:**

1. Set the `CSV_PATH` variable to point to your prompt CSV
2. Set the `OUTPUT_DIR` variable to where images should be saved
3. Run: `python scripts/generate_images.py`

The script skips images that already exist in the output directory, so it's safe to re-run after failures.

**Per-row resolution override:**

For mixed batches (heroes + icons in the same CSV), add a `get_resolution()` function:

```python
def get_resolution(row: dict) -> str:
    dims = row.get("dimensions", "").strip()
    if dims in ("1920x1080", "1200x750"):
        return "2K"
    return "1K"
```

Then pass `resolution=get_resolution(row)` to the API call.

### Handling Failures

The script logs results to `generation-log.json`. After a run, check for failures:

```python
import json
with open("generation-log.json") as f:
    results = json.load(f)
failures = [r for r in results if r["status"] not in ("success", "skipped")]
print(f"{len(failures)} failures:")
for f in failures:
    print(f"  - {f['filename']}: {f.get('error', f['status'])}")
```

Common failure causes:
- **Rate limiting**: Add longer delays between calls (`time.sleep(3)`)
- **Safety filter**: Rephrase the prompt to avoid triggering content filters (avoid strong political language or conflict imagery; stay documentary)
- **Model capacity**: Enable `ALLOW_FALLBACK = True` to use seedream-5 as backup

## Step 4: Deploy Images

### Copy to Public Directory

After generation, copy images to the website's static assets:

```bash
cp generated-images/*.png QuatroWebsite/public/images/
```

### Wire into Content Frontmatter

Update the YAML frontmatter in content files to reference the new images:

**Hero images** — top-level field:
```yaml
heroImage: /images/industry-energy.png
```

**Challenge images** — inside each challenge entry:
```yaml
challenges:
  - title: "Legacy SCADA Limitations"
    description: "..."
    image: /images/challenge-energy-scada.png
```

**Capability images** — inside each capability entry:
```yaml
capabilities:
  - name: "Cross-Domain Correlation"
    description: "..."
    featured: true
    image: /images/cap-energy-cross-domain.png
```

Note: Image paths in frontmatter are relative to the `public/` directory, so `/images/foo.png` maps to `public/images/foo.png` on disk.

## Step 5: Verify

After deployment, run a quick verification:

```python
import yaml, glob, os

public = "public"
missing_files = []

for f in sorted(glob.glob("src/content/industries/*.md")):
    with open(f) as fh:
        content = fh.read()
        if content.startswith("---"):
            fm = yaml.safe_load(content.split("---")[1])

            # Check heroImage
            hero = fm.get("heroImage", "")
            if hero and not os.path.exists(os.path.join(public, hero.lstrip("/"))):
                missing_files.append(f"{f}: heroImage → {hero}")

            # Check capability images
            for c in fm.get("capabilities", []):
                img = c.get("image", "")
                if img and not os.path.exists(os.path.join(public, img.lstrip("/"))):
                    missing_files.append(f"{f}: {c['name']} → {img}")

            # Check challenge images
            for ch in fm.get("challenges", []):
                img = ch.get("image", "")
                if img and not os.path.exists(os.path.join(public, img.lstrip("/"))):
                    missing_files.append(f"{f}: {ch['title']} → {img}")

if missing_files:
    print(f"{len(missing_files)} referenced images not found on disk:")
    for m in missing_files: print(f"  {m}")
else:
    print("All referenced images verified on disk.")
```

After wiring images, restart the dev server (`npm run dev`) since Astro sometimes doesn't detect new static files added to `public/` while running.

## Naming Conventions

Consistent filenames make everything easier to manage and track:

| Type | Pattern | Example |
|------|---------|---------|
| Industry hero | `industry-{slug}.png` | `industry-energy.png` |
| Solution hero | `solution-{slug}.png` | `solution-network-operations.png` |
| Challenge icon | `challenge-{industry}-{short-name}.png` | `challenge-energy-scada.png` |
| Capability | `cap-{industry}-{short-name}.png` | `cap-energy-cross-domain.png` |
| Proof point | `proof-{industry}-{short-name}.png` | `proof-energy-grid-modernization.png` |

## Adding a New Industry

When adding a new industry vertical to the platform, follow this repeatable workflow:

### 1. Research the Industry's 2026 Infrastructure Landscape

Spend 2–3 hours understanding:
- What does a typical facility in this industry look like? (power plant, data center, port, hospital, etc.)
- What infrastructure is *critical*? (generators, servers, cranes, imaging equipment)
- What does success look like? (uptime, throughput, safety, efficiency)
- What's the biggest pain point? (legacy systems, human error, visibility gaps, coordinated threats)
- What's the operational tempo? (continuous, event-driven, scheduled maintenance)

Document your findings. This becomes the foundation for the visual world bible.

### 2. Create the Visual World Bible

Create a new file: `image-prompts/bibles/bible-{slug}.md` (e.g., `bible-healthcare.md`)

Structure it as:

```markdown
# Visual World Bible: Healthcare

## Industry Context
[1–2 paragraphs describing the industry's operational world and challenges]

## Hero Scene: The Healthcare Facility
[Detailed description of the archetypal facility. What's visible? What's the spatial scale? What time of day tells the best story?]

Palette notes: [Which primary and accent colors dominate this scene?]

## Capability Scene: Integrated Patient Surveillance
[Description of what success looks like. How does data integration manifest visually?]

Palette notes: [Color shifts or emphasis for this scene]

## Challenge Scene: Fragmented Systems
[Visual representation of the core problem. Silos? Legacy equipment? Coordination failure?]

Palette notes: [Color language for the challenge state]

## Color Profile
- Primary: `[hex]` — [name and usage]
- Accent: `[hex]` — [name and usage]
- Override to brand palette if necessary

## Visual Dont's
[What never appears in this industry's images. Stereotypes to avoid. Aesthetic direction to reject.]
- Don't show isolated equipment (always show systems in context)
- Don't use clinical/sterile aesthetic (show operational reality)
- [add more]
```

### 3. Write CSV Prompts Using the Bible

Create prompts for:
- 1 Hero image (1920x1080)
- 3–4 Challenge icons (400x400) — one for each major challenge in the vertical
- 3–4 Capability images (800x600) — one for each major solution area
- 1–2 Proof points (1200x750) — optional, for case studies

Use the v7 prompt template from **Step 2**. Reference the specific scenes and color profiles from the Bible.

Save the CSV to: `image-prompts/prompts/{industry}-batch-1.csv`

### 4. Generate and Verify

Run the generation script against your CSV. Check the output quality. Iterate on prompts if needed (usually 1–2 rounds).

### 5. Update IMAGE-MAP.md

Add rows to the image inventory matrix showing:
- Which images exist for this industry
- Which are deployed
- Which are in progress
- Links to source prompts

This keeps the team aligned on what's needed and what's complete.

### 6. Integrate into Content

Wire the generated images into the industry content file (`src/content/industries/{slug}.md`) following **Step 4: Deploy Images**.

## Creative Philosophy: v7 Art Direction

All images in the Quatro ecosystem follow the **v7 cinematic editorial documentary aesthetic**. This is the visual identity that makes Quatro's content distinctive and trusted.

### Visual Foundation

- **Photographic Style**: Cinematic editorial documentary (inspired by IBM Design Language + Samsara's warmth)
- **Film Stock Aesthetic**: Kodak Portra 800 — warm, organic, slightly saturated. Implies craft and intention.
- **Lens & Aperture**: 35mm lens, f/2.8 aperture — the sweet spot for industrial photography. Shallow enough for selective focus, wide enough to show context.
- **Grain & Texture**: Fine organic film grain + natural vignetting. Signals authenticity and handmade quality.

### Compositional Principles

1. **Show the Industry's World, Not Isolated Objects** — Every image shows infrastructure or operational context, never products in a void. The viewer sees how things work together.
2. **Aerial Perspective & Depth** — Images use foreground/middle-ground/background to show scale and system complexity.
3. **Documentary Framing** — Composition feels journalistic and evidence-based. The camera is a witness, not a designer.
4. **Rule of Thirds with Purpose** — Focal anchor (the critical element) anchors a strong third. The other thirds breathe.

### Color Language

- **Forest Green (#0f4c3a)** — the primary. Deep, trustworthy, natural. Used in shadows and depth.
- **Cyber Emerald (#00D1B2)** — the operational highlight. Data flows, critical connections, the moment of insight.
- **Intelligence Navy (#0A1128)** — night skies, deep trust, security contexts. Used sparingly for maximum impact.
- **Rich Charcoal (#1A1A1A)** — the true dark (never pure black). Depth without harshness.
- **Safety Amber (#F4A261)** — warm accent, operational lighting, the moment something matters. Tungsten warmth.

Industry Bibles may define additional colors that override the brand palette for vertical-specific visual language. The Bible always wins.

### What v7 Is NOT

- Sterile or clinical. The world is messy; our images are honest.
- Stock photography aesthetic. We're not selling comfort; we're showing competence.
- Isolated components. Every image shows *systems*, not parts.
- Staged or lit. Practical and natural light sources. The environment provides the drama.
- High-key or bright. Deep, saturated, cinematic. The image has weight.

## Extending to Non-Quatro Projects

The core workflow (CSV → Replicate API → deploy) works for any project. To adapt:

1. Replace the Style Brief with your project's brand guidelines
2. Adjust the color palette references in prompts
3. Update the file naming conventions
4. Change the content wiring step to match your CMS/framework

The generation script itself is project-agnostic — it just reads CSVs and calls Replicate.
