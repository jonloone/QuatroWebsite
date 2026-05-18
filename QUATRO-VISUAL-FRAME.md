# Quatro Visual Frame

**Status:** Drafted 2026-05-15. The third pillar alongside `QUATRO-PALETTE-V2-PROPOSAL.md` (tokens) and `QUATRO-DESIGN-LANGUAGE-V2.md` (components). This is the compass — the one-page lens for grounding layout, style, and image decisions before reaching for any specific component.

**Purpose:** When laying out a new page or auditing an existing one, run it through this frame first. If the page passes, the palette and component choices follow naturally. If it fails, no amount of color tuning fixes it.

**Inspiration board:** [are.na/jonathan-looney/quatro-hm9gml9szvu](https://www.are.na/jonathan-looney/quatro-hm9gml9szvu) — 59 blocks.

---

## The board, in one sentence

**Quatro is sensor data on editorial paper, with modern-defense restraint.**

That's the working summary. The rest of this doc unpacks what each part means and how to apply it.

---

## What the board actually contains

Empirically — categorizing the 59 blocks:

| Cluster | Share | What it teaches |
|---|---|---|
| Sensor truth (LIDAR, SAR, RF, earth obs, gaussian splat, satellite imagery) | 25% | The dominant subject. What Quatro shows. |
| Theory and writing (Low-Tech, philosophy of tech, counter-mapping, Data Loam, post-AI writing) | 10% | The intellectual register. What Quatro is reading. |
| Editorial-scientific work (Finiam, MoMA *Information*, McLuhan *Understanding Media*, Princeton Environmental / Isometric Studio, M. Editorial mobile layouts) | 10% | The typography and layout discipline. How Quatro reads. |
| Modern industrial / defense brand identity (Ark Robotics, HEDRON, BeZero Carbon, Geoprotech, Remedy Robotics, SatRev, Shimazu, Raft, Pallet, Radiant Earth) | 12% | The brand-confidence register. How Quatro presents. |
| Drone / autonomous / RF (Centre for Drones and Culture, UAV pattern, Architecture of Radio) | 7% | The operational subject matter. |
| Biomimetic / botanical (MANIC-BOTANIC, space colonization algorithm) | 5% | The grammar for "how systems grow." |
| Cartography / counter-mapping (Scott Reinhard, *Beyond Esri*, rare earth mining maps) | 3% | The grammar for terrain. |
| LATAM vernacular (Global Interior LATAM 1972) | 2% | The cultural soul. |
| Personal reference / unclassified | 25% | Side material. |

The signal: most of the board is **sensor truth** (25%). The next two clusters (editorial-scientific work + modern brand identity) together account for another 22%, and they tell us how the sensor truth gets presented. Everything else is context.

---

## The Three Lenses

When deciding what goes on a Quatro page, run it through these three tests in order. Each lens excludes a whole class of bad answers.

### Lens 1 — Image truth

> Every image earns its place by being sensor data, hardware, or editorial-scientific ephemera. Decoration is not permitted.

Three permitted image types:

- **Sensor truth** — real LIDAR, SAR, RF waterfall, earth observation, gaussian splat, multispectral plate. Or a v7e mimic when real data is unavailable. Notation mark required.
- **Hardware truth** — product photography of actual Quatro hardware (drone kits, sensor terminals, antennas, ruggedized equipment). v7m style. Slate-marine backdrop. No operators in frame.
- **Editorial ephemera** — documentary operator photography (v7.1), archival document scans, biomimetic illustration, scientific poster work. Subject must be operationally true.

Rejected on sight:
- Stock photography (people pointing at screens, handshakes, conference rooms)
- Decorative gradients or abstract textures as hero imagery
- 3D rendered marketing fluff (floating phones, glowing dashboards)
- Anything that could appear on a generic SaaS landing page

If an image doesn't fit one of the three permitted types, it doesn't go on the page.

### Lens 2 — Layout cadence

> Sections read like editorial spreads, not marketing tiles.

Three permitted section shapes:

- **Spread** — one image, one body block, one optional caption. Image on one side, body on the other. The default for capability sections, insights articles, and most landing pages. Editorial magazine cadence.
- **Capability module** — title + media + 3-4 mode buttons + per-mode description. The Ark Robotics anatomy. The default for product pages and intelligence-stack pages where multiple modes share one media slot.
- **Manifesto / hero** — single column, large type, paper or gradient. The default for hero sections and rhetorical turning points.

Rejected on sight:
- "Hero + 3 columns of features + CTA" pages (SaaS marketing template)
- Card grids with thumbnails (looks like a CMS, not an instrument)
- Decorative full-bleed images with floating text overlays
- Multiple emphasis colors competing for attention
- More than one manifesto block per page

Cadence rule: spreads breathe. Each section gets at least 80px of vertical space above and below on defense pages, 120px on editorial pages. White space is not wasted; it is what makes the work readable.

### Lens 3 — Visual restraint

> Quatro presents as a quiet instrument, not a loud salesperson. The product or idea speaks; the chrome stays out of the way.

Three rules that hold across every page:

- **One emphasis color, ever — forest.** Per the palette doc. Two emphases equals emphasis lost. The diagram emphasis rule and the SpecTable emphasis rule are the same rule.
- **All quantities in JetBrains Mono.** Speed, weight, range, frequency, area, count. Editorial body type stays Reckless. The mono contrast signals "this is a measurement."
- **Type set tight, not loud.** Headlines at appropriate weight. Lowercase italic-emphasis on defense heroes, proper-case Reckless on editorial heroes. No all-caps Reckless. No display fonts beyond the canonical three (Reckless, Roobert, JetBrains Mono).

Restraint test: if you remove the chrome from any page (background color, dividers, accent marks), would it still read as Quatro? On the board, the answer is yes — Whole Earth Catalog spreads, Princeton posters, Ark hero — they all work because the content is the design.

---

## The Mood Declaration

After the three lenses, every page declares one of two moods. This is per the design language doc (§1, two-register system).

- **Editorial-warm** — paper background, Reckless dominant, ochre as second accent, airy density. The Princeton / Finiam / Whole Earth register. Use for insights, energy, municipal, LATAM, broadcast, partners, about, manifesto pages.
- **Modern-defense** — charcoal or slate background, Roobert + JetBrains Mono dominant, slate-marine for hardware, no ochre. The Ark / HEDRON / BeZero register. Use for defense, SATCOM, federal capture, product pages, intelligence-stack, drone kits.

Three transition surfaces — homepage, industries overview, about — start in one mood and resolve in another, section-bounded. Crossovers are intentional and never smear within a single component.

---

## How to use this frame

When designing or auditing a page, run four checks:

1. **Image truth** — Every image is sensor data, hardware, or editorial ephemera. If not, replace or remove.
2. **Layout cadence** — Each section is a spread, capability module, or manifesto. If you see a SaaS-template shape, refactor it.
3. **Visual restraint** — One emphasis color (forest). Quantities in mono. No decorative chrome.
4. **Mood committed** — The page is editorial-warm or modern-defense. Not both. Not unclear.

If any check fails, the page is not done. The palette and components are tools for executing this frame, not a substitute for passing it.

---

## Anti-patterns the frame rejects

These come from the absences on the board — what's missing tells us what to avoid as much as what's present.

- **No stock photography of people with tablets.** Zero occurrences on the board.
- **No card grids with thumbnails.** The board has zero "blog index page" patterns.
- **No marketing badges, ribbons, or testimonial cards.** Quatro is not a SaaS product reviewed on G2.
- **No floating UI screenshots with drop shadows.** When UI shows up (Ark Frontier OS, Quatro Field), it's photographed in context on hardware, not floated against a gradient.
- **No 3D-rendered illustrations.** The board has zero. Hardware is photographed; data is rendered as data.
- **No emoji, no icon-font dependencies.** Glyphs are drawn (see `quatro-notation-layer` §6 of design language doc).
- **No more than one emphasis color per surface.** Period.
- **No mixing of editorial-warm and modern-defense within a single section.** Section-bounded crossovers only.

---

## The mantra

When in doubt, recite:

> **Sensor data on editorial paper, with modern-defense restraint.**

Each clause is a check:

- *Sensor data* — does this page show real operational data, or marketing imagery?
- *Editorial paper* — does it read like a magazine spread, or a marketing landing page?
- *Modern-defense restraint* — does it carry brand confidence without resorting to volume?

If three yeses, ship it. If any no, fix it.

---

## Related Documents

- `QUATRO-PALETTE-V2-PROPOSAL.md` — the tokens
- `QUATRO-DESIGN-LANGUAGE-V2.md` — the components and patterns
- `.claude/skills/quatro-visual-extensions/SKILL.md` — patched 2026-05-15, the operational reference
- `.claude/skills/quatro-visual-extensions/references/style-brief-v7e.md` — eco-futurist image generation
- `.claude/skills/quatro-sensor-assets/` — real sensor data sources, the "real before mimic" rule
- `.claude/skills/quatro-notation-layer/` — annotation marks and (soon) capability icons
