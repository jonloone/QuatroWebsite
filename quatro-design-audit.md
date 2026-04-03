# Quatro Website — Art Direction & Design Language Audit

**Date:** April 2, 2026
**Scope:** Full visual consistency audit across all page types, components, and design tokens. Includes IBM 2x Grid alignment analysis and prioritized fix list.

---

## 1. What the Homepage Gets Right

The homepage is the strongest page on the site. It establishes a clear design identity that the sub-pages should inherit:

**The Dither Canvas** — A Bayer 4×4 ordered dithering algorithm running on `<canvas>` with animated Perlin-like warp fields, forest-green color blending, and film grain overlays. Three instances: hero, editorial, CTA. This is the site's signature visual — it communicates "raw data being rendered into clarity," which is exactly the Quatro brand promise. Currently **homepage only**. This needs to extend to sub-pages.

**The Hero Treatment** — Rounded card (`rounded-[48px]`) on `#0a0a0a` with layered z-stack: canvas dither → radial vignette → film grain → content. Glassmorphic badge pill. Reckless Light at `text-8xl` for the headline. Scroll parallax on the text. This is distinctive and premium. Sub-pages use a completely different hero (the `Hero.astro` component) that looks generic by comparison.

**Typography Pairing** — Reckless (serif-feel display) for body narrative, Roobert (geometric sans) for headlines and UI, JetBrains Mono for technical labels. This three-font system is clear and purposeful. Sub-pages mostly follow this but the hierarchy gets muddy.

**Color Discipline** — Forest green (`#0f4c3a`) as the single accent. Off-white (`#F9FAFB`) as paper. Neutral slate scale for text. No competing colors. The homepage never breaks this.

---

## 2. Where Sub-Pages Break the Language

### 2.1 Hero Inconsistency (Critical)

The site has **four different hero treatments** across page types:

| Page Type | Hero Treatment | Dither | Background | Feel |
|---|---|---|---|---|
| Homepage | Custom canvas card, rounded-[48px], vignette, parallax | Yes | #0a0a0a | Premium, signature |
| Industry/Solution pages | `Hero.astro` dark variant, flat bg-image with 60% overlay | No | bg-image | Generic dark hero |
| Hub pages | Same `Hero.astro` dark variant | No | bg-image | Same generic |
| Contact/Resources | `Hero.astro` light variant, bg-neutral-100 | No | Light gray | Minimal |
| National Intelligence | Custom one-off dark hero, no dither | No | bg-image | Tactical |
| Insights index | Custom one-off, BaseLayout | No | Light | Blog-like |

**The problem:** The homepage hero feels like a $50k brand identity. The sub-page heroes feel like a Tailwind template. The transition from homepage to any industry page is jarring.

**Recommendation:** Create a `HeroCanvas.astro` component that extracts the homepage hero pattern (dither canvas + vignette + grain + rounded card) into a reusable component. Use it on all primary pages (industries, solutions, platform). Keep `Hero.astro` light variant for utility pages (contact, resources). Kill all one-off custom heroes.

### 2.2 Image Treatment Inconsistency

The site has a distinctive `img-technical` CSS class:
```css
.img-technical {
  mix-blend-mode: luminosity;  /* Desaturated, technical */
  opacity: 0.9;
}
.group:hover .img-technical {
  mix-blend-mode: normal;      /* Full color on hover */
  opacity: 1;
}
```

This is a strong art direction choice — images start desaturated and "activate" on hover. But it's applied inconsistently:

| Context | Uses img-technical? | Uses dither? |
|---|---|---|
| Homepage hero | No (dither canvas instead) | Yes |
| CapabilityBentoHub images | Yes | No |
| CapabilityBento | No images at all | No |
| IndustryHubCard images | No | No |
| Blog/Insight card images | No | No |
| Hero backgroundImage | No | No |
| BentoUseCases | No | No |

**Recommendation:** Apply `img-technical` to ALL images on the site by default. The luminosity blend mode creates the "operational intelligence" feel — everything is data until you interact with it. For hero backgrounds, the dither canvas replaces this. For card images (IndustryHubCard, blog cards), add the class.

### 2.3 The Dither Filter Gap

The dither canvas is the homepage's most distinctive element, but it appears nowhere else. This makes the homepage feel like a different site.

**Recommendation:** Add the dither canvas treatment to:
- All primary page heroes (industry pages, solution pages, platform pages)
- The CTA section at the bottom of every page (matching the homepage CTA pattern)
- Optionally: dark section backgrounds (CapabilityBento, compliance sections)

This doesn't need to be as heavy as the homepage — lower opacity, slower animation speed, and smaller pixel size would create continuity without overwhelming content pages.

### 2.4 CTA Component Split

Two CTA components exist with no clear hierarchy:

**DualCta** — Two-column light/dark button split with title, description, microcopy. Used on industry `[slug].astro` pages, hub pages (after recent updates), platform product pages.

**CtaBanner** — Full-width dark section with centered text and bg-image overlay. Used on solution `[slug].astro` pages, platform index, solutions index, case study pages.

**Recommendation:** Standardize on DualCta for all pages. It's the more distinctive pattern and aligns with the editorial, structured feel of the homepage. The CtaBanner is generic. Alternatively, create a CTA section with the dither canvas treatment to match the homepage CTA.

---

## 3. IBM 2x Grid Alignment Analysis

The IBM 2x Grid is built on a single principle: **divisions of two from an 8px mini-unit base**. Everything divides into 2, 4, 8, 16, 32, or 64 columns. Gutters are always equal. Spacing multiples: 1×, 2×, 3×, 4×, 6×, 8×, 10×, 12× of the base unit.

### Where Quatro Already Aligns

The site's existing grid choices map well to IBM 2x principles:

- **Max container: `max-w-7xl` (1280px)** — This is a clean 16-column grid at 80px columns, or a 64-column micro-grid at 20px units. IBM-compatible.
- **Section padding: `py-20 lg:py-28`** — 80px → 112px. These are multiples of 8 (10× and 14×). IBM-compatible.
- **Card padding: `p-6` and `p-8`** — 24px and 32px. Both are 8px multiples (3× and 4×). IBM-compatible.
- **Gap values: `gap-3`, `gap-4`, `gap-6`** — 12px, 16px, 24px. All are 4px or 8px multiples.

### Where Quatro Breaks IBM 2x Principles

**Inconsistent column divisions across page types:**

| Page | Grid Structure | IBM Alignment |
|---|---|---|
| Homepage industries | Vertical list, full-width | N/A (editorial, fine) |
| Industries index | 2-up landscape + 3-up portrait (mixed) | Breaks — mixed column widths within same section |
| Critical Infrastructure hub | 3-up equal cards | Clean 3×4 = 12-col. Good |
| National Security hub | 2-up equal cards | Clean 2×6 = 12-col. Good |
| CapabilityBentoHub | 7/5 col split + 3-up tertiary | 7/5 is not a power-of-2 division. Should be 8/4 or 6/6 |
| CapabilityBento | 3-up → 2-up → dynamic | Mixed column counts per row. Not IBM-aligned |
| FeatureGrid | 2, 3, or 4 columns (varies) | Should pick one per page type |

**Recommendation:** Adopt a strict column system based on IBM 2x:
- **16-column base grid** at 1280px max-width (80px columns)
- Content areas snap to: 4, 6, 8, 12, or 16 columns
- The 7/5 bento split in CapabilityBentoHub should become 8/4 (which at 16 cols = clean 50%/25% visual)
- Hub card grids should be consistently 3×4 columns or 2×8 columns

**Spacing scale not formalized:**

The site uses Tailwind defaults, which don't enforce the 8px mini-unit consistently. Some values leak in:
- `text-[10px]` — Not an 8px multiple. Should be 8px or 12px.
- `tracking-[0.12em]` — Arbitrary letter-spacing.
- `mt-3` (12px), `mt-5` (20px) — 12px is fine (1.5× mini-unit), but 20px is not clean (2.5×).

**Recommendation:** Codify a spacing scale in the Tailwind config:
```
8px (1×), 16px (2×), 24px (3×), 32px (4×), 48px (6×), 64px (8×), 80px (10×), 96px (12×)
```
Map these to Tailwind utilities and use them exclusively.

### IBM 2x Grid Compositional Principles That Apply

**"Rhythm through repetition"** — IBM's grid creates visual rhythm by repeating the same column structure across sections. Quatro currently breaks rhythm by using different grid structures in consecutive sections (3-up cards → 7/5 bento → 2-up proof points → 3-up insights). Each section introduces a new column count, which forces the eye to re-orient.

**Fix:** Establish 2-3 grid patterns for the entire site and reuse them:
- **Full-width editorial** (1 column, centered text) — for hero, editorial lead-ins, compliance sections
- **2-up** (2 equal columns) — for proof points, comparisons, featured content
- **3-up** (3 equal columns) — for domain cards, insights, capabilities
- **Asymmetric 8/4** (content + sidebar) — for featured capability + supporting cards

**"Content dictates density, not decoration"** — IBM uses the grid to create breathing room, not to fill space. The Quatro hub pages currently pack too many visual patterns into a single scroll: domain cards, then per-domain article cards, then a bento grid, then compliance, then CTA. Each section is visually distinct, which creates cognitive switching cost.

**Fix:** Reduce the number of distinct layout patterns per page. Let the grid breathe. A hub page should have: hero → editorial + domain cards (one grid) → capabilities (same grid density) → CTA. That's it.

---

## 4. Typography Audit

### Font Usage Map

| Element | Font | Weight | Size Range | Tracking |
|---|---|---|---|---|
| Homepage H1 | Reckless | Light (300) | 36px → 96px | Default |
| Sub-page H1 (Hero.astro) | Roobert (display) | Bold (700) | 36px → 60px | tight |
| Section H2 | Roobert | Bold (700) | 24px → 30px | tight |
| Body text | Reckless (sans) | Regular (400) | 14px → 18px | Default |
| Eyebrows | JetBrains Mono | Regular (400) | 10px → 11px | 0.1em |
| CTA buttons | JetBrains Mono | Regular (400) | 12px | 0.05-0.08em |
| Card titles | Roobert | Bold (700) | 16px → 24px | Default |
| Outcomes/metrics | Roobert | Bold (700) | 24px → 48px | tight |

### Inconsistencies Found

1. **Homepage uses Reckless Light for H1. Sub-pages use Roobert Bold.** This is the single biggest typographic disconnect. The homepage feels editorial and premium (light serif-feel display font). Sub-pages feel like a SaaS template (bold geometric sans). The fix: use Reckless on sub-page heroes too, or at minimum use Roobert Light instead of Bold for a closer feel.

2. **Eyebrow size varies:** `text-[10px]`, `text-[11px]`, `text-[9px]` appear across different components. Should be a single size.

3. **White text opacity hierarchy is chaotic.** Currently 8+ levels are used: `text-white`, `text-white/70`, `text-white/60`, `text-white/50`, `text-white/45`, `text-white/40`, `text-white/30`, `text-white/25`. IBM uses 3 tiers. Quatro should use 4 max:
   - Primary: `text-white` (100%)
   - Secondary: `text-white/60`
   - Tertiary: `text-white/40`
   - Disabled: `text-white/20`

---

## 5. Color Audit

### Current Palette

| Token | Hex | Usage |
|---|---|---|
| Forest (brand-500) | `#0f4c3a` | CTAs, accents, dither blend, outcomes |
| Paper (neutral-50) | `#F9FAFB` | Page background |
| Structure (neutral-200) | `#E2E8F0` | Borders, dividers |
| Dark surface | `#0a0a0a` | Homepage dark sections |
| Dark surface (alt) | `#0F172A` (neutral-800) | Heading text |
| Accent coral | `#c05621` | Defined but unused |
| Safety amber | `#F4A261` | Announcement banner only |

### Issues

1. **Two competing dark values:** Homepage uses `#0a0a0a` (near-black). Dark sections in components use `var(--color-neutral-800)` which is `#0F172A` (dark navy). These are visibly different. Standardize to one.

2. **Accent coral (`#c05621`) is defined but never used.** Either remove it or find a purpose (error states, warning indicators).

3. **Safety amber (`#F4A261`) only appears on the announcement banner.** If this is a brand color, it should appear in the system. If not, consider using forest green for the banner too.

---

## 6. Dark Section Consistency

Multiple dark section approaches exist:

| Component | Background | Grain | Border Style |
|---|---|---|---|
| Homepage hero | `#0a0a0a` | Yes (SVG + canvas) | `rgba(15,76,58,0.4)` |
| CapabilityBento | `#0a0a0a` | Yes (SVG only, `0.03` opacity) | `rgba(255,255,255,0.08)` |
| CapabilityBentoHub | `#0a0a0a` | Yes (SVG only) | `rgba(255,255,255,0.08)` |
| Section dark | `bg-image + rgba(0,0,0,0.8)` overlay | No | None |
| StatStrip | `bg-neutral-900` | No | None |
| CtaBanner | `bg-image + rgba(0,0,0,0.75)` | No | None |
| Testimonials | `var(--color-forest)` | No | `rgba(255,255,255,0.1)` |

**Recommendation:** Standardize to two dark treatments:
1. **Dark canvas** — `#0a0a0a` + grain + optional dither canvas. For hero sections, capability bentos, CTA sections.
2. **Forest dark** — `var(--color-forest)` background. For accent sections (testimonials, deployment callouts).

Everything else (Section dark, StatStrip, CtaBanner) should adopt one of these two.

---

## 7. Border Radius Chaos

| Component | Radius |
|---|---|
| Homepage hero card | `rounded-[48px]` |
| IndustryHubCard | `rounded-2xl` (16px) |
| Dark bento cards (CapabilityBento) | None (square) |
| Dark bento cards (CapabilityBentoHub) | `rounded-lg` (8px) |
| Blog/insight cards | `rounded-xl` (12px) |
| ProofPointCard | `rounded-2xl` (16px) |
| Buttons | `rounded-sm` or `rounded-full` |

**Recommendation:** Three tiers:
- **Large containers** (hero card, major sections): `rounded-3xl` (24px)
- **Content cards** (all cards everywhere): `rounded-xl` (12px)
- **Small elements** (pills, tags, buttons): `rounded-full`

---

## 8. Prioritized Fix List

### P0 — Brand Identity (Do First)

1. **Extract homepage hero into reusable `HeroCanvas.astro` component.** Accept props for: title, description, CTA, canvas image source, dither config (pixel size, green blend, speed). Apply to all industry, solution, and platform pages.

2. **Apply `img-technical` class to ALL images site-wide.** The luminosity blend mode is the site's visual signature. Every image should start desaturated and activate on hover.

3. **Apply dither canvas to CTA sections across all pages.** The homepage CTA section uses a dither canvas. Every page's bottom CTA should do the same.

### P1 — Grid & Layout Consistency

4. **Standardize on 3 grid patterns:** Full-width editorial, 2-up equal, 3-up equal. Remove the 7/5 bento split (change to 8/4 or 6/6). Remove mixed grid structures within sections.

5. **Standardize CTA to DualCta everywhere.** Replace all CtaBanner usages with DualCta. Or better: create a DualCta variant that includes the dither canvas.

6. **Formalize spacing scale** in Tailwind config: 8, 16, 24, 32, 48, 64, 80, 96px. Audit all spacing values.

### P2 — Typography & Color Polish

7. **Use Reckless Light (or Roobert Light) for sub-page hero H1s** to match the homepage's editorial weight.

8. **Reduce white text opacity to 4 levels:** 100%, 60%, 40%, 20%.

9. **Standardize eyebrow text to `text-[10px]`** everywhere.

10. **Pick one dark background value** and use it everywhere: `#0a0a0a`.

### P3 — Component Cleanup

11. **Standardize dark card styling:** `rounded-xl`, `rgba(255,255,255,0.04)` bg, `rgba(255,255,255,0.08)` border. Apply to CapabilityBento, CapabilityBentoHub, BentoUseCases, and all dark section cards.

12. **Standardize border radius** to three tiers: 24px containers, 12px cards, full pills.

13. **Add grain overlay to all dark sections** (matching the SVG noise pattern used in bento components).

---

## 9. Implementation Order

**Phase 1: Hero & Dither (Highest visual impact)**
- Extract `HeroCanvas.astro` from homepage
- Apply to industry `[slug].astro`, solution `[slug].astro`, hub pages
- Add dither canvas to DualCta or create `DualCtaCanvas.astro`

**Phase 2: Image Treatment (Consistency sweep)**
- Add `img-technical` class to all `<img>` tags across all components
- Audit and standardize image aspect ratios per card type

**Phase 3: Grid Formalization (IBM 2x alignment)**
- Codify spacing scale in Tailwind config
- Standardize column patterns across page types
- Fix the 7/5 bento split

**Phase 4: Token Cleanup (Polish)**
- Consolidate dark background values
- Reduce opacity variants
- Standardize border radii
- Clean up eyebrow text sizes

---

## 10. Reference: IBM 2x Grid Principles Applied to Quatro

The IBM 2x Grid rests on divisions of two from an 8px mini-unit. The key principles that transfer to Quatro:

**Geometric consistency.** Every dimension should be traceable back to the 8px unit. Quatro already does this with most spacing values but leaks at the small end (10px eyebrows, 20px margins).

**Column rhythm.** Pick your column count per page type and stick with it. Don't introduce a new column structure every section. The homepage does this well (full-width sections with consistent internal structure). The hub pages break it by oscillating between 1-up, 2-up, 3-up, and bento layouts.

**Aspect ratios from the grid.** IBM derives image aspect ratios from grid column ratios (1:1, 2:1, 4:3, 16:9). Quatro's images currently have arbitrary heights (`h-52`, `h-64`, `h-40`, `h-44`, `h-72`). These should be standardized to grid-derived ratios.

**Progressive disclosure through density.** IBM uses the grid to control information density — sparse at the top (hero), progressively denser (capabilities), then sparse again (CTA). Quatro's hub pages currently maintain high density throughout, which flattens the visual hierarchy.

---

*This audit covers 31 marketing components, 20 page templates, and the complete design token inventory. All findings are based on the live codebase as of April 2, 2026.*
