# Claude Code Prompt — Industry & Platform Page Overhaul: Outcome-First Editorial Design

Copy everything below this line into Claude Code.

---

## Overview

Redesign the industry pages (`/industries/[slug]`) and platform product pages (`/platform/[slug]`) to lead with outcomes instead of challenges, use large Palantir-style editorial typography, and add scroll-driven reveal effects. Remove all "challenge" and "problem" framing — the page flow should be: Hero → Outcome Statement → Capabilities → Proof → CTA.

**Design references (Palantir patterns to follow):**
- Large editorial statement text (~4xl–6xl) that fills the viewport width as a full-bleed text block — like "Our software powers real-time, AI-driven decisions in critical government and commercial enterprises"
- Numbered capability sections with `[0.1]` style indicators and oversized headings
- Scroll-driven fade-up reveals using IntersectionObserver (`.fade-up` class already exists in BaseLayout.astro)
- Clean white backgrounds with structural borders — no dark sections between hero and CTA
- Two-column CTA blocks: one light, one dark, side by side with arrows

---

## Pre-Work — Read These Files First

```
src/pages/industries/[slug].astro        — Industry page template (MODIFY)
src/pages/platform/[slug].astro          — Platform page template (MODIFY)
src/components/marketing/Hero.astro      — Hero component (READ ONLY)
src/components/marketing/Section.astro   — Section wrapper (READ ONLY)
src/components/marketing/IndustryBento.astro — Bento grid (MODIFY — strip photos)
src/components/marketing/ChallengeNarrative.astro — (DELETE after removal)
src/components/marketing/ProblemSolution.astro    — (DELETE after removal)
src/components/marketing/CtaBanner.astro — CTA component (READ, may modify)
src/components/marketing/FeatureGrid.astro — Feature grid (READ ONLY)
src/components/marketing/StatStrip.astro — Stats strip (READ ONLY)
src/layouts/BaseLayout.astro             — Has .fade-up observer (READ ONLY)
src/styles/global.css                    — Design tokens (READ ONLY)
src/content/industries/energy.md         — Example industry content (READ ONLY)
src/content/products/connect.md          — Example product content (READ ONLY)
```

**Design system tokens (from global.css):**

| Token | Value | Usage |
|---|---|---|
| `var(--color-forest)` | `#0f4c3a` | Primary brand green |
| `var(--color-paper)` | `#F9FAFB` | Page background |
| `var(--color-structure)` | `#E2E8F0` | All borders and dividers |
| `var(--color-neutral-800)` | `#0F172A` | Primary heading text |
| `var(--color-neutral-500)` | `#64748b` | Secondary/body text |
| `var(--color-neutral-400)` | `#94a3b8` | Tertiary/muted text |
| `font-display` | Roobert | Headings (bold) |
| `font-sans` | Reckless | Body text, editorial statements (light/regular) |
| `font-mono` | JetBrains Mono | Labels, eyebrows, CTAs, metadata |

**CRITICAL RULES:**
- Use CSS variables for all brand colors — never raw Tailwind color classes
- All section borders use `style="border-top: 1px solid var(--color-structure);"`
- No icons in colored circles. No colored accent bars. No bullet lists in cards. No emojis.
- No stock photos in capability cards — text only or minimal SVG line illustrations
- The `.fade-up` class is already wired in `BaseLayout.astro` with an IntersectionObserver. Add `class="fade-up"` to any element you want to reveal on scroll.

---

## Task 1 — Create `EditorialOutcome.astro` Component

A full-width editorial statement section inspired by Palantir's large-type blocks. This replaces both `ChallengeNarrative` (on industry pages) and `ProblemSolution` (on platform pages).

**File:** `src/components/marketing/EditorialOutcome.astro`

**Design:** Massive text statement spanning the full content width. The statement text should be in `font-sans` (Reckless) at light weight, filling the viewport with presence. A key phrase is highlighted in forest green. Below the statement: a description paragraph and optional stats row.

```astro
---
interface Props {
  statement: string          // The big editorial statement — HTML allowed for <span> highlight
  description?: string       // Supporting paragraph
  stats?: Array<{ value: string; label: string }>
  class?: string
}

const {
  statement,
  description,
  stats,
  class: className,
} = Astro.props
---

<section class:list={['py-20 lg:py-32 px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">

    <!-- Editorial statement — oversized type -->
    <h2
      class="font-sans font-light text-3xl sm:text-4xl lg:text-6xl xl:text-7xl leading-[1.15] tracking-tight fade-up"
      style="color: var(--color-neutral-800);"
      set:html={statement}
    />

    {description && (
      <p class="mt-10 font-sans text-lg lg:text-xl leading-relaxed max-w-3xl fade-up" style="color: var(--color-neutral-500);">
        {description}
      </p>
    )}

    <!-- Stats row -->
    {stats && stats.length > 0 && (
      <div class="mt-16 pt-8 flex flex-wrap items-start gap-12 lg:gap-16 fade-up" style="border-top: 1px solid var(--color-structure);">
        {stats.map((stat) => (
          <div>
            <span class="font-display text-3xl lg:text-4xl font-bold" style="color: var(--color-forest);">{stat.value}</span>
            <span class="block mt-2 font-mono text-[11px] uppercase tracking-[0.15em]" style="color: var(--color-neutral-400);">{stat.label}</span>
          </div>
        ))}
      </div>
    )}
  </div>
</section>
```

---

## Task 2 — Create `CapabilityShowcase.astro` Component

Replaces IndustryBento for industry pages. Palantir-style numbered capability sections with large type — no photos.

**File:** `src/components/marketing/CapabilityShowcase.astro`

**Design:** Each capability is a full-width row with:
- Numbered indicator `[0.1]` style in mono
- Large capability name in display font
- Description text and outcome metric on the right
- Horizontal rule separator between items
- `.fade-up` on each row for scroll reveal

```astro
---
interface Capability {
  name: string
  description: string
  outcome?: string
  tier?: string
}

interface Props {
  title?: string
  subtitle?: string
  capabilities: Capability[]
  class?: string
}

const {
  title,
  subtitle,
  capabilities,
  class: className,
} = Astro.props
---

<section class:list={['py-20 lg:py-28 px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">

    {title && (
      <div class="mb-16 fade-up">
        <h2 class="font-display text-xl font-bold" style="color: var(--color-forest);">
          {title}
        </h2>
        {subtitle && (
          <p class="mt-4 font-sans text-lg leading-relaxed max-w-3xl" style="color: var(--color-neutral-500);">
            {subtitle}
          </p>
        )}
      </div>
    )}

    <!-- Capability rows -->
    {capabilities.map((cap, index) => (
      <div
        class="group grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 py-10 lg:py-14 fade-up"
        style={`border-top: 1px solid var(--color-structure);${index === capabilities.length - 1 ? ' border-bottom: 1px solid var(--color-structure);' : ''}`}
      >
        <!-- Left: number + name -->
        <div>
          <span class="font-mono text-xs" style="color: var(--color-neutral-400);">
            [{String(index + 1).padStart(2, '0')}]
          </span>
          <h3 class="mt-3 font-display text-2xl lg:text-3xl font-bold leading-tight" style="color: var(--color-neutral-800);">
            {cap.name}
          </h3>
        </div>

        <!-- Right: description + outcome -->
        <div class="flex flex-col justify-center">
          <p class="font-sans text-base leading-relaxed" style="color: var(--color-neutral-500);">
            {cap.description}
          </p>
          {cap.outcome && (
            <p class="mt-4 font-display text-lg font-bold" style="color: var(--color-forest);">
              {cap.outcome}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
```

---

## Task 3 — Create `DualCta.astro` Component

Palantir-style two-column CTA block — one light button, one dark button, both full-width with arrows.

**File:** `src/components/marketing/DualCta.astro`

```astro
---
interface Props {
  title?: string
  description?: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  microcopy?: string
  class?: string
}

const {
  title,
  description,
  primaryCta,
  secondaryCta,
  microcopy,
  class: className,
} = Astro.props
---

<section class:list={['py-20 lg:py-28 px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">

    {title && (
      <p class="font-sans text-2xl lg:text-4xl font-light leading-snug max-w-4xl mb-12 fade-up" style="color: var(--color-neutral-800);" set:html={title} />
    )}

    {description && (
      <p class="font-sans text-base leading-relaxed max-w-2xl mb-12 fade-up" style="color: var(--color-neutral-500);">
        {description}
      </p>
    )}

    <!-- Dual CTA buttons -->
    <div class="grid sm:grid-cols-2 gap-0 fade-up" style="border-top: 1px solid var(--color-structure);">
      <!-- Light CTA -->
      <a
        href={primaryCta.href}
        class="group flex items-center justify-between px-8 py-8 lg:py-10 transition-colors duration-300 ease-linear hover:bg-neutral-100"
        style="border-bottom: 1px solid var(--color-structure); border-right: 1px solid var(--color-structure);"
      >
        <span class="font-display text-xl lg:text-2xl font-bold" style="color: var(--color-neutral-800);">{primaryCta.label}</span>
        <span class="font-sans text-xl transition-transform duration-300 group-hover:translate-x-1" style="color: var(--color-neutral-400);">&rarr;</span>
      </a>

      <!-- Dark CTA -->
      <a
        href={secondaryCta.href}
        class="group flex items-center justify-between px-8 py-8 lg:py-10 transition-colors duration-300 ease-linear hover:bg-neutral-800"
        style="background: var(--color-neutral-800); border-bottom: 1px solid var(--color-structure);"
      >
        <span class="font-display text-xl lg:text-2xl font-bold text-white">{secondaryCta.label}</span>
        <span class="font-sans text-xl text-white/50 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>

    {microcopy && (
      <p class="mt-4 font-mono text-xs" style="color: var(--color-neutral-400);">{microcopy}</p>
    )}
  </div>
</section>
```

---

## Task 4 — Rewrite `industries/[slug].astro`

Replace the current template with the new outcome-first flow.

**New section order:**
1. Hero (unchanged)
2. `EditorialOutcome` — Large statement about what Quatro delivers for this industry, with stats
3. `CapabilityShowcase` — All capabilities as numbered rows (featured + standard combined), no photos
4. ProofPointCard (if exists, unchanged)
5. Use-Case Sub-Pages (if exist, unchanged)
6. `DualCta` — Two-column CTA replacing CtaBanner

**File:** `src/pages/industries/[slug].astro`

```astro
---
import { getCollection } from 'astro:content'
import MarketingLayout from '@/layouts/MarketingLayout.astro'
import Hero from '@/components/marketing/Hero.astro'
import Section from '@/components/marketing/Section.astro'
import EditorialOutcome from '@/components/marketing/EditorialOutcome.astro'
import CapabilityShowcase from '@/components/marketing/CapabilityShowcase.astro'
import ProofPointCard from '@/components/marketing/ProofPointCard.astro'
import DualCta from '@/components/marketing/DualCta.astro'

export async function getStaticPaths() {
  const industries = await getCollection('industries')
  return industries.map((industry) => ({
    params: { slug: industry.id.replace(/\.md$/, '') },
    props: { industry },
  }))
}

const { industry } = Astro.props
const { Content } = await industry.render()
const { title, tagline, description, hero, heroImage, capabilities, stats, proofPoint, cta } = industry.data

const ctaPrimary = cta?.primary || { label: 'Schedule an Assessment', href: '/contact/demo' }
const ctaSecondary = cta?.secondary || { label: 'Talk to an Engineer', href: '/contact/sales' }

// Get use-case sub-pages for this industry
const slug = industry.id.replace(/\.md$/, '')
const allUseCases = await getCollection('use-cases')
const useCases = allUseCases
  .filter((uc) => uc.data.parentIndustry === slug)
  .sort((a, b) => a.data.order - b.data.order)

// Build the editorial outcome statement from the hero description
// The statement should be the core value proposition with a key phrase highlighted in forest green
const outcomeStatement = hero.description
  ? hero.description.replace(
      // Highlight the first phrase that mentions a key differentiator
      /(AI-powered|unified|real-time|operational intelligence|operational visibility|modernize|overlay)/i,
      '<span style="color: var(--color-forest);">$1</span>'
    )
  : description
---

<MarketingLayout
  title={`${title} — ${tagline}`}
  description={description}
>
  <Hero
    variant="dark"
    eyebrow={hero.eyebrow}
    title={hero.title}
    description={hero.description}
    primaryCta={hero.primaryCta}
    secondaryCta={hero.secondaryCta}
    backgroundImage={heroImage}
  />

  <!-- Editorial Outcome Statement -->
  <EditorialOutcome
    statement={outcomeStatement}
    description={description}
    stats={stats}
  />

  <!-- Capabilities — Numbered Editorial Rows -->
  <CapabilityShowcase
    title={`${title} Capabilities`}
    subtitle={`Purpose-built for ${title.toLowerCase()} operations — measured by outcomes, not features.`}
    capabilities={capabilities}
  />

  <!-- Proof Point -->
  {proofPoint && (
    <Section divider>
      <ProofPointCard
        industryLabel={proofPoint.industry}
        headline={proofPoint.headline}
        narrative={proofPoint.narrative}
        metrics={proofPoint.metrics}
      />
    </Section>
  )}

  <!-- Use-Case Sub-Pages -->
  {useCases.length > 0 && (
    <Section divider>
      <div class="mx-auto max-w-4xl">
        <div class="text-center mb-10 fade-up">
          <h2 class="font-display text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            {title} Solutions
          </h2>
          <p class="mt-4 text-lg text-neutral-600">
            Deep-dive into specific operational outcomes — each with quantified impact.
          </p>
        </div>
        <div class:list={[`grid gap-6 ${useCases.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-3'}`]}>
          {useCases.map((uc) => (
            <a
              href={`/industries/${slug}/${uc.id.replace(/\.md$/, '')}`}
              class="group flex flex-col p-6 transition-all fade-up"
              style="border: 1px solid var(--color-structure);"
            >
              <h3 class="font-display text-lg font-bold" style="color: var(--color-neutral-800);">
                {uc.data.title}
              </h3>
              <p class="mt-1 font-mono text-xs" style="color: var(--color-forest);">{uc.data.tagline}</p>
              <p class="mt-3 flex-1 font-sans text-sm" style="color: var(--color-neutral-500);">{uc.data.description}</p>
              <div class="mt-4 flex flex-wrap gap-2">
                {uc.data.stats.slice(0, 2).map((stat) => (
                  <span class="font-mono text-xs px-3 py-1" style="background: rgba(15,76,58,0.05); color: var(--color-forest);">
                    {stat.value} {stat.label}
                  </span>
                ))}
              </div>
              <span class="mt-4 font-mono text-xs uppercase tracking-wider group-hover:underline" style="color: var(--color-forest);">
                Explore &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )}

  <DualCta
    title={`See what <span style="color: var(--color-forest);">operational intelligence</span> looks like on your ${title.toLowerCase()} infrastructure.`}
    description={`Pick one ${title.toLowerCase()} challenge. We deploy on your systems in 4 weeks. You see the value before you commit.`}
    primaryCta={ctaPrimary}
    secondaryCta={ctaSecondary}
    microcopy={cta?.microcopy || '4-week proof of value · Credited toward annual contract'}
  />
</MarketingLayout>
```

**Key changes from current template:**
- `ChallengeNarrative` section REMOVED entirely (no more "What's Holding X Back")
- `IndustryBento` section REMOVED (replaced by `CapabilityShowcase`)
- `EditorialOutcome` added — large Palantir-style statement with stats
- `CapabilityShowcase` added — numbered capability rows without photos
- `DualCta` replaces `CtaBanner` — two-column button layout
- `challenges` data from frontmatter is no longer referenced (stays in content files but not rendered)
- `.fade-up` classes added to key elements for scroll reveals
- Use-case cards restyled to match the structural border system (no rounded corners, no drop shadows)

---

## Task 5 — Rewrite `platform/[slug].astro`

Same treatment for platform product pages.

**New section order:**
1. Hero (unchanged)
2. `EditorialOutcome` — Large statement about what this platform tier delivers, with stats
3. StatStrip (unchanged)
4. Core Capabilities via FeatureGrid (unchanged)
5. Protocol Showcase (if exists, unchanged)
6. Deployment Options (if exists, unchanged)
7. Deep Dive (if exists, unchanged)
8. ProductProgression (unchanged)
9. `DualCta` — replaces CtaBanner

**File:** `src/pages/platform/[slug].astro`

```astro
---
import { getCollection } from 'astro:content'
import MarketingLayout from '@/layouts/MarketingLayout.astro'
import Hero from '@/components/marketing/Hero.astro'
import EditorialOutcome from '@/components/marketing/EditorialOutcome.astro'
import StatStrip from '@/components/marketing/StatStrip.astro'
import Section from '@/components/marketing/Section.astro'
import FeatureGrid from '@/components/marketing/FeatureGrid.astro'
import ProductProgression from '@/components/marketing/ProductProgression.astro'
import DualCta from '@/components/marketing/DualCta.astro'
import ProtocolShowcase from '@/components/marketing/ProtocolShowcase.astro'

export async function getStaticPaths() {
  const products = await getCollection('products')
  return products.map((product) => ({
    params: { slug: product.id.replace(/\.md$/, '') },
    props: { product },
  }))
}

const { product } = Astro.props
const { title, tagline, description, hero, solutions, stats, capabilities, protocolShowcase, deploymentOptions, deepDive } = product.data
const brandedTitle = `Quatro ${title}`

// Build editorial statement from solutions data — take the strongest value proposition
const solutionHighlights = solutions?.slice(0, 2).map(s => s.description).join(' ') || description
---

<MarketingLayout
  title={`${brandedTitle} — ${tagline}`}
  description={description}
>
  <Hero
    variant="dark"
    eyebrow={hero.eyebrow}
    title={hero.title}
    description={hero.description}
    primaryCta={hero.primaryCta}
    secondaryCta={hero.secondaryCta}
  />

  <!-- Editorial Outcome — replaces ProblemSolution -->
  <EditorialOutcome
    statement={description.replace(
      /(8,000\+|1,000\+|AI-powered|real-time|unified|predictive|automated|intelligence|orchestrat)/i,
      '<span style="color: var(--color-forest);">$1</span>'
    )}
    stats={stats}
  />

  <StatStrip stats={stats} />

  <Section divider>
    <FeatureGrid
      title="Core Capabilities"
      subtitle={`Everything you need from ${brandedTitle}.`}
      features={capabilities.map(c => ({ name: c.name, description: c.description, icon: c.icon }))}
      columns={3}
    />
  </Section>

  {protocolShowcase && (
    <Section divider dark>
      <ProtocolShowcase
        title={protocolShowcase.title}
        subtitle={protocolShowcase.subtitle}
        categories={protocolShowcase.categories}
        footnote={protocolShowcase.footnote}
        dark
      />
    </Section>
  )}

  {deploymentOptions && (
    <Section divider>
      <FeatureGrid
        title={deploymentOptions.title}
        subtitle={deploymentOptions.subtitle}
        features={deploymentOptions.options.map(opt => ({
          name: opt.name,
          description: `${opt.description} Best for: ${opt.bestFor}`,
          icon: opt.icon,
        }))}
        columns={4}
      />
    </Section>
  )}

  {deepDive && (
    <Section divider dark>
      <FeatureGrid
        dark
        title={deepDive.title}
        subtitle={deepDive.subtitle}
        features={deepDive.sections.map(s => ({
          name: s.title,
          description: s.description,
          icon: s.icon,
        }))}
        columns={3}
      />
    </Section>
  )}

  <Section divider>
    <div class="mb-12 text-center fade-up">
      <h2 class="font-display text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
        Progressive Value — Start Here, Scale Everywhere
      </h2>
      <p class="mt-4 text-lg text-neutral-600">
        Each tier builds on the last. No rip-and-replace. Value in weeks, not quarters.
      </p>
    </div>
    <ProductProgression current={product.id.replace(/\.md$/, '')} />
  </Section>

  <DualCta
    title={`See what <span style="color: var(--color-forest);">${brandedTitle}</span> looks like on your infrastructure.`}
    description={`Pick one challenge. We deploy on your systems in 4 weeks. You see the value before you commit.`}
    primaryCta={{ label: 'Schedule an Assessment', href: '/contact/demo' }}
    secondaryCta={{ label: 'Talk to an Engineer', href: '/contact/sales' }}
    microcopy="4-week proof of value · Credited toward annual contract"
  />
</MarketingLayout>
```

**Key changes from current template:**
- `ProblemSolution` section REMOVED entirely (no more "The Challenge" + red cards)
- `EditorialOutcome` added — large statement with stats
- `DualCta` replaces `CtaBanner`
- `problems` data from frontmatter is no longer referenced
- `solutions` data used to derive the editorial statement text
- `.fade-up` classes added for scroll reveals

---

## Task 6 — Delete Unused Components

After Tasks 4 and 5 are complete, these components are no longer imported anywhere:

```bash
# Verify no remaining imports before deleting
grep -r "ChallengeNarrative" src/ --include="*.astro"
grep -r "ProblemSolution" src/ --include="*.astro"
```

If no results, delete:
- `src/components/marketing/ChallengeNarrative.astro`
- `src/components/marketing/ProblemSolution.astro`

Also check if `IndustryBento.astro` and `CtaBanner.astro` are still used anywhere. If not, delete them too.

---

## Task 7 — Add Scroll Reveal to Existing Homepage Sections

The homepage already has `.fade-up` support in `BaseLayout.astro`. Add the class to key elements on the homepage for scroll-driven reveal effects.

**File:** `src/pages/index.astro`

Add `class="fade-up"` to these elements (find and add — don't restructure the page):

1. Each section heading `<h2>` in sections 2–8
2. Each card grid container (`grid md:grid-cols-3`)
3. The editorial intro `<p>` in the Platform and Industries sections
4. Each Platform tier link (`<a>` elements for Connect/Operate/Command)
5. Each Industry link (`<a>` elements for Energy/Defense/etc.)
6. The CTA section inner container

Example — for a heading:
```html
<!-- Before -->
<h2 class="font-display text-5xl ...">Regional<br />Presence<br />Commitment</h2>

<!-- After -->
<h2 class="font-display text-5xl ... fade-up">Regional<br />Presence<br />Commitment</h2>
```

Do NOT change any section structure, content, imports, or styling. Only add the `fade-up` class.

---

## Verification

### Build Check
```bash
npx astro build
```

Fix any errors. Common issues:
- Import paths with `@/` prefix
- Props that don't match the component interface
- `set:html` directive on elements

### Visual Check

Run `npx astro dev` and verify:

**Industry pages (check `/industries/energy`):**
- [ ] Hero renders correctly with background image
- [ ] Large editorial statement fills the viewport width — Reckless font, light weight, 6xl+
- [ ] A key phrase is highlighted in forest green
- [ ] Stats row appears below the statement with forest green numbers
- [ ] Capabilities render as numbered rows `[01]`, `[02]`, etc.
- [ ] Each capability has name on left, description + outcome on right
- [ ] NO photos appear anywhere in the capabilities
- [ ] NO "challenge" or "What's Holding X Back" section exists
- [ ] DualCta shows two side-by-side buttons: one light, one dark
- [ ] Elements fade up on scroll

**Platform pages (check `/platform/connect`):**
- [ ] Hero renders correctly
- [ ] Large editorial statement replaces the problem/solution cards
- [ ] NO red-numbered problem cards exist
- [ ] NO "The Challenge" heading exists
- [ ] StatStrip still shows stats
- [ ] Core Capabilities grid unchanged
- [ ] Protocol Showcase (if applicable) unchanged
- [ ] DualCta replaces CtaBanner
- [ ] Elements fade up on scroll

**Homepage:**
- [ ] `.fade-up` classes reveal elements on scroll
- [ ] No structural changes — same sections, same order, same content

### Anti-Pattern Check
- [ ] No stock photos in capability cards
- [ ] No "challenge" or "problem" framing language anywhere
- [ ] No icons in colored circles
- [ ] No rounded corners on cards (structural borders only)
- [ ] No emojis
