# Claude Code Prompt — Build National Intelligence Pages

Copy everything below this line into Claude Code.

---

## Task

Build four new pages for the Quatro website under `/national-intelligence/`. Astro page templates already exist at `src/pages/national-intelligence/`. Content markdown documents exist at `src/pages/national-intelligence/content/`. Your job is to reconcile the templates with the content — replacing placeholder or thin copy in the .astro files with the full messaging from the .md content documents, and ensuring everything builds cleanly.

## Context

These pages position Quatro as a national intelligence platform for security operations. The audience is dual: Ecuador government buyers (Interior Ministry, defense, police) and US/SOUTHCOM stakeholders. English-primary with bilingual Spanish elements.

**CRITICAL:** Never mention "Shield of the Americas" anywhere on these pages. The content is designed to address capability gaps without naming any specific coalition or political initiative.

## Files You Need

**Existing Astro page templates (already created, need content refinement):**
- `src/pages/national-intelligence/index.astro` — Hub page
- `src/pages/national-intelligence/youth-vulnerability-index.astro` — YVI sub-page
- `src/pages/national-intelligence/counter-cartel-operations.astro` — Counter-cartel sub-page
- `src/pages/national-intelligence/resource-protection.astro` — Resource protection sub-page

**Content documents (the authoritative messaging — use these to populate the .astro files):**
- `src/pages/national-intelligence/content/national-intelligence-platform.md`
- `src/pages/national-intelligence/content/youth-vulnerability-index.md`
- `src/pages/national-intelligence/content/counter-cartel-operations.md`
- `src/pages/national-intelligence/content/resource-protection.md`

**Reference files (read these first to understand the site's patterns):**
- `src/pages/index.astro` — The homepage. This is the gold standard for layout patterns, spacing, typography, and section structure. Match it exactly.
- `src/layouts/BaseLayout.astro` — Root layout wrapper
- `src/components/layout/SiteHeader.astro` — Navigation
- `src/components/layout/SiteFooter.astro` — Footer
- `src/styles/global.css` — Fonts, colors, animations, CSS variables

**Strategic reference (do NOT publish this content, but read it for context):**
- `../Shield-of-the-Americas-Analysis.md` — Internal analysis of the coalition framework these pages address
- `../National-Intelligence-Messaging-Guide.md` — Messaging architecture, CTA strategy, language register

## Site Design System — Key Tokens

The site uses custom fonts and CSS variables. Do NOT use Tailwind color utilities for brand colors — use the CSS variables from `global.css`.

**Fonts:**
- `font-sans` → Reckless (serif-style body font, light weight)
- `font-display` → Roobert (sans-serif heading font, bold weight)
- `font-mono` → JetBrains Mono (monospace for labels, eyebrows, CTAs)

**Colors (use CSS variables, not Tailwind classes):**
- `var(--color-forest)` → Primary brand green (#0f4c3a)
- `var(--color-neutral-800)` → Primary text dark
- `var(--color-neutral-500)` → Secondary text
- `var(--color-structure)` → Border color for section dividers

**Section patterns (from index.astro):**

Pattern A — Grid Section (sidebar label + main content):
```html
<section class="px-6" style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-0">
      <div class="pt-20 lg:pt-28 lg:pb-28 lg:col-span-3 lg:border-r lg:pr-8" style="border-color: var(--color-structure);">
        <span class="lg:sticky lg:top-32 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em]" style="color: var(--color-neutral-500);">Label</span>
      </div>
      <div class="pb-20 lg:py-28 lg:col-span-9 lg:pl-8">
        <!-- Heading + content -->
      </div>
    </div>
  </div>
</section>
```

Pattern B — Palantir Vertical List:
```html
<a href="/path" class="group grid lg:grid-cols-[1fr_2fr] gap-8 py-10 lg:py-14 items-center" style="border-top: 1px solid var(--color-structure);">
  <div>
    <p class="font-sans text-sm leading-relaxed" style="color: var(--color-neutral-500);">Description</p>
    <span class="font-mono text-xs mt-3 inline-block" style="color: var(--color-forest);">Label</span>
  </div>
  <div class="text-right lg:text-right">
    <span class="font-display text-5xl lg:text-8xl font-bold transition-colors duration-300 ease-linear group-hover:text-[var(--color-forest)]" style="color: var(--color-neutral-800);">Title</span>
  </div>
</a>
```

Card Grid:
```html
<div class="mt-12 grid md:grid-cols-3" style="border-top: 1px solid var(--color-structure); border-left: 1px solid var(--color-structure);">
  <div class="p-6 transition-colors duration-300 ease-linear hover:bg-[rgba(15,76,58,0.04)]" style="border-right: 1px solid var(--color-structure); border-bottom: 1px solid var(--color-structure);">
    <span class="font-mono text-xs" style="color: var(--color-forest);">01</span>
    <h3 class="font-display text-lg font-bold mt-2" style="color: var(--color-neutral-800);">Title</h3>
    <p class="mt-2 font-sans text-sm" style="color: var(--color-neutral-500);">Description</p>
  </div>
</div>
```

Dark Section (with bg image overlay):
```html
<section class="relative px-6 overflow-hidden" style="border-top: 1px solid var(--color-structure);">
  <div class="absolute inset-0">
    <img src="/images/bg.jpg" alt="" class="h-full w-full object-cover" />
    <div class="absolute inset-0" style="background: rgba(0,0,0,0.8);"></div>
  </div>
  <div class="relative z-10 mx-auto max-w-6xl">
    <!-- Same grid pattern but with white text and rgba borders -->
  </div>
</section>
```

**CTA buttons:**
```html
<!-- Primary (forest green bg) -->
<a href="/contact/demo" class="font-mono text-xs uppercase tracking-[0.05em] px-8 py-4 text-white transition-colors duration-300 ease-linear" style="background-color: var(--color-forest);">
  Request a Briefing
</a>
<!-- Secondary (outline) -->
<a href="/path" class="font-mono text-xs uppercase tracking-[0.05em] px-8 py-4 text-white transition-colors duration-300 ease-linear hover:bg-white/10" style="border: 1px solid rgba(255,255,255,0.2);">
  Explore Capabilities &rarr;
</a>
```

## What To Do

### Step 1 — Read everything
Read `src/pages/index.astro` thoroughly. Read all four content .md files. Read both strategic reference .md files. Understand the patterns, the messaging, and the design system.

### Step 2 — Fix the pre-existing build issue
There is a YAML frontmatter error in `src/content/use-cases/fleet-logistics.md` (line 62). Fix the indentation issue so the site builds. Also check `src/content/use-cases/maritime-awareness.md` for a missing `objections.1.response` field in its frontmatter — add a placeholder value if needed.

### Step 3 — Reconcile templates with content
For each of the four .astro pages:
1. Read the corresponding .md content document
2. Compare the copy in the .astro template against the .md content
3. Update the .astro template to use the richer, more developed copy from the .md document
4. Ensure every section from the .md content is represented in the .astro page
5. Keep the existing Astro/HTML structure — just improve the text content

Key content elements to ensure are present on each page:

**Hub page (index.astro):**
- Hero: "One Platform. Every Domain. Total Protection."
- The Intelligence Deficit narrative (PAS format — the Durán teenager story)
- Three intelligence programs as Palantir vertical list links
- Seven security domains as card grid
- Connect/Operate/Command architecture (dark section)
- Connected Programs section (three cross-links with compound value story)
- Proof of Value deployment pathway (90-day pilot → 4 phases)
- Trust metrics
- Final CTA

**YVI page:**
- Hero: "Predict Where Recruitment Happens. Intervene Before It Does."
- The Recruitment Crisis narrative with proof points (Durán 146/100k, Guayaquil 367 arrests, 15+ GDO factions, 37 priority parishes)
- Six data source categories (Police, Education, Health, Social Services, Community, Financial)
- Four capabilities: YVI scoring, predictive recruitment detection, network intelligence, cross-agency coordination
- Five intelligence products as Palantir vertical list: INTSUM, WTA, MSE, TNP, CIB — with pricing and cadence
- Three strategic objectives (OKRs)
- 90-day pilot section ($150K, three candidate cities)
- Scaling pathway (4 phases)
- Connected Programs (→ Counter-Cartel, → Resource Protection)

**Counter-Cartel page:**
- Hero: "Map the Network. Follow the Money. Disrupt the Operation."
- The Asymmetry Problem narrative
- Five operational domains as Palantir vertical list: Maritime, Border, Financial, Network, Urban
- Cross-domain correlation section (the dark vessel example)
- Six intelligence capabilities (dark section card grid): Threat Network Intel, Predictive Assessment, Cross-Domain Correlation, Multi-Agency Coordination, Coalition Intelligence Sharing, Evidence-Grade Audit
- Coalition intelligence sharing model (sovereignty-first)
- Intelligence products adapted for counter-cartel
- Connected Programs (→ YVI, → Resource Protection)

**Resource Protection page:**
- Hero: "Detect Extraction. Protect Resources. Enforce Sovereignty."
- The Invisible Extraction narrative
- Six detection capabilities as card grid: Satellite Change Detection, Pipeline Integrity, Environmental Monitoring, Dark Vessel Detection, Deforestation Tracking, Enforcement Intelligence
- Multi-source intelligence fusion (dark section): Space Layer, Ground Layer, Maritime Layer — with named partners (NOVI Space, ECR Platform X, TDengine)
- Evidence-grade output section (ARCONEL, ARCH, SENAGUA, MAE/MAATE)
- Connected Programs (→ Counter-Cartel, → YVI)

### Step 4 — Add navigation links
Update the site navigation to include a "National Intelligence" link. In `SiteHeader.astro`, add it to the nav items so visitors can discover these pages. Use the existing NavDropdown pattern if appropriate, or add a simple top-level link.

### Step 5 — Build and verify
Run `npx astro build` and fix any errors. The goal is a clean build with all four pages rendering correctly. If content collection errors in unrelated files block the build, fix those too (they're pre-existing YAML/schema issues).

### Step 6 — Spanish variants (if time permits)
Create Spanish versions of the four pages under `src/pages/es/national-intelligence/` following the same pattern as other `/es/` pages in the site. The content .md files include Spanish taglines and key phrases that should be expanded into full Spanish page copy.

## Quality Checks

Before finishing, verify:
- [ ] All four pages build without errors
- [ ] Each page uses BaseLayout + SiteHeader + SiteFooter (matching index.astro)
- [ ] Section patterns match index.astro exactly (grid structure, border styles, font classes)
- [ ] Colors use CSS variables, not Tailwind color classes
- [ ] All internal links work (/national-intelligence, /national-intelligence/youth-vulnerability-index, etc.)
- [ ] Hero sections include status badge, eyebrow, H1, subhead, dual CTAs, microcopy, trust metrics
- [ ] Dark sections use bg.jpg with rgba(0,0,0,0.8) overlay
- [ ] CTA sections use cta.jpg with rgba(0,0,0,0.75) overlay
- [ ] Every page has a "Connected Programs" section linking to the other two sub-pages
- [ ] Data sovereignty narrative appears on every page
- [ ] No mention of "Shield of the Americas" anywhere
- [ ] Navigation updated to include National Intelligence section
