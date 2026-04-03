# Claude Code Prompt — Homepage Component Upgrade: Social Proof, Bento Grid, Animated Hero, Stats Section

Copy everything below this line into Claude Code.

---

## Overview

Five high-priority component additions and one layout restructure for the Quatro homepage (`src/pages/index.astro`). These address the biggest conversion gaps identified in the component audit: no social proof, pattern monotony, and a static hero.

**Priority order:**
1. Add a Logo Cloud / Partner Bar below the hero
2. Add a dedicated Stats/Metrics section with count-up animation
3. Replace the Data Sovereignty 3-col grid with a Bento Grid layout
4. Add a Testimonials section
5. Add a subtle animated background to the hero
6. Wire everything into the homepage

---

## Pre-Work — Read These Files First

Read all of these before writing any code:

```
src/pages/index.astro                    — The homepage (this is what you're modifying)
src/styles/global.css                    — CSS variables, fonts, animations
src/layouts/BaseLayout.astro             — Root layout
src/components/layout/SiteHeader.astro   — Nav reference
src/components/layout/SiteFooter.astro   — Footer reference
src/components/ui/Section.astro          — Section wrapper component
src/components/ui/Eyebrow.astro          — Eyebrow text component
src/components/ui/Container.astro        — Max-width container
```

**Design system tokens you MUST use (from global.css):**

| Token | Value | Usage |
|---|---|---|
| `var(--color-forest)` | `#0f4c3a` | Primary brand green — CTAs, accents, highlights |
| `var(--color-paper)` | `#F9FAFB` | Page background |
| `var(--color-structure)` | `#E2E8F0` | All borders and dividers |
| `var(--color-neutral-800)` | `#0F172A` | Primary heading text |
| `var(--color-neutral-500)` | `#64748b` | Secondary/body text |
| `var(--color-neutral-400)` | `#94a3b8` | Tertiary/muted text |
| `font-display` | Roobert | Headings (bold) |
| `font-sans` | Reckless | Body text (light/regular) |
| `font-mono` | JetBrains Mono | Labels, eyebrows, CTAs, metadata |

**CRITICAL RULES:**
- Use CSS variables for all brand colors — never raw Tailwind color classes for brand/forest/structure colors
- All section borders use `style="border-top: 1px solid var(--color-structure);"` — not Tailwind border classes
- Match the existing homepage patterns EXACTLY for spacing, grid structure, and typography
- No icons in colored circles. No colored accent bars on cards. No bullet-point lists inside cards.
- No emojis anywhere.

---

## Task 1 — Logo Cloud Component

Create a new component for partner/integration logos.

**File:** `src/components/marketing/LogoCloud.astro`

**Design:** Horizontal scrolling logo bar with grayscale logos. Uses the existing Pattern A sidebar-label grid from the homepage.

```astro
---
interface Props {
  label?: string
  heading?: string
  subheading?: string
  logos: Array<{
    name: string
    src: string
    href?: string
    width?: number
  }>
  class?: string
}

const {
  label = 'Trusted By',
  heading,
  subheading,
  logos,
  class: className,
} = Astro.props
---

<section class:list={['px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-0">
      <!-- Sidebar label -->
      <div class="pt-16 lg:pt-20 lg:pb-20 lg:col-span-3 lg:border-r lg:pr-8" style="border-color: var(--color-structure);">
        <span class="lg:sticky lg:top-32 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em]" style="color: var(--color-neutral-500);">
          {label}
        </span>
      </div>
      <!-- Logo grid -->
      <div class="pb-16 lg:py-20 lg:col-span-9 lg:pl-8">
        {heading && (
          <p class="font-sans text-lg leading-relaxed mb-8" style="color: var(--color-neutral-500);">
            {heading}
          </p>
        )}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {logos.map((logo) => (
            <div class="flex items-center justify-center py-4 transition-opacity duration-300 opacity-40 hover:opacity-80">
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width || 120}
                    class="h-8 w-auto object-contain grayscale"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width || 120}
                  class="h-8 w-auto object-contain grayscale"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
        {subheading && (
          <p class="mt-6 font-mono text-xs" style="color: var(--color-neutral-400);">
            {subheading}
          </p>
        )}
      </div>
    </div>
  </div>
</section>
```

**Logo images:** Create placeholder SVGs or use text-based placeholders for now. Place them in `public/images/logos/`. The logos should represent the key partners and integration categories:

Create these placeholder files (simple SVG text logos):
- `public/images/logos/dataos.svg` — "DataOS" (the parent platform)
- `public/images/logos/tdengine.svg` — "TDengine"
- `public/images/logos/ecr.svg` — "ECR Platform X"
- `public/images/logos/novi-space.svg` — "NOVI Space"
- `public/images/logos/osisoft.svg` — "OSIsoft PI"
- `public/images/logos/modbus.svg` — "Modbus"
- `public/images/logos/opcua.svg` — "OPC UA"
- `public/images/logos/mqtt.svg` — "MQTT"
- `public/images/logos/scada.svg` — "SCADA"
- `public/images/logos/aws.svg` — "AWS"

Each SVG should be a simple text wordmark — white text on transparent background, approximately 120×32px viewbox. Use a clean sans-serif font. Keep them minimal.

```svg
<!-- Example: public/images/logos/tdengine.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 32" fill="none">
  <text x="0" y="22" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0F172A">TDengine</text>
</svg>
```

---

## Task 2 — Stats/Metrics Section Component

Create a dedicated metrics section with animated count-up numbers.

**File:** `src/components/marketing/StatsSection.astro`

**Design:** Uses Pattern A sidebar-label grid. Large numbers with mono labels underneath. Numbers animate (count up) when they scroll into view.

```astro
---
interface Stat {
  value: string
  suffix?: string
  label: string
}

interface Props {
  label?: string
  heading?: string
  stats: Stat[]
  class?: string
}

const {
  label = 'By the Numbers',
  heading,
  stats,
  class: className,
} = Astro.props
---

<section class:list={['px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-0">
      <!-- Sidebar label -->
      <div class="pt-20 lg:pt-28 lg:pb-28 lg:col-span-3 lg:border-r lg:pr-8" style="border-color: var(--color-structure);">
        <span class="lg:sticky lg:top-32 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em]" style="color: var(--color-neutral-500);">
          {label}
        </span>
      </div>
      <!-- Stats grid -->
      <div class="pb-20 lg:py-28 lg:col-span-9 lg:pl-8">
        {heading && (
          <p class="font-sans text-2xl lg:text-3xl font-light leading-snug max-w-3xl mb-16" style="color: var(--color-neutral-800);">
            {heading}
          </p>
        )}
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" data-stats-container>
          {stats.map((stat) => (
            <div class="stat-item">
              <div class="flex items-baseline gap-1">
                <span
                  class="font-display text-4xl lg:text-5xl font-bold leading-none"
                  style="color: var(--color-forest);"
                  data-stat-value={stat.value}
                  data-stat-suffix={stat.suffix || ''}
                >
                  {stat.value}{stat.suffix || ''}
                </span>
              </div>
              <span class="block mt-3 font-mono text-[11px] uppercase tracking-[0.15em]" style="color: var(--color-neutral-400);">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  // Count-up animation on scroll
  const container = document.querySelector('[data-stats-container]');
  if (container) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('[data-stat-value]');
            items.forEach((el) => {
              const target = el.getAttribute('data-stat-value') || '';
              const suffix = el.getAttribute('data-stat-suffix') || '';
              const numericPart = target.replace(/[^0-9.]/g, '');
              const prefix = target.replace(/[0-9.]/g, '');

              if (numericPart && !isNaN(Number(numericPart))) {
                const end = Number(numericPart);
                const duration = 1500;
                const startTime = performance.now();
                const isFloat = numericPart.includes('.');
                const htmlEl = el as HTMLElement;

                function step(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  // Ease out cubic
                  const eased = 1 - Math.pow(1 - progress, 3);
                  const current = end * eased;
                  htmlEl.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
                  if (progress < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
  }
</script>
```

---

## Task 3 — Bento Grid Section Component

Create a bento-style asymmetric grid to replace one of the repetitive 3-column card grids.

**File:** `src/components/marketing/BentoSection.astro`

**Design:** An asymmetric 2-column grid where the first item spans the full height of the left column, and 2-3 smaller items stack on the right. Uses Pattern A sidebar-label grid wrapper.

```astro
---
interface BentoItem {
  number: string
  title: string
  description: string
  size?: 'large' | 'standard'
}

interface Props {
  label?: string
  heading?: string
  items: BentoItem[]
  class?: string
}

const {
  label = 'Architecture',
  heading,
  items,
  class: className,
} = Astro.props

const largeItem = items.find(i => i.size === 'large') || items[0]
const standardItems = items.filter(i => i !== largeItem)
---

<section class:list={['px-6', className]} style="border-top: 1px solid var(--color-structure);">
  <div class="mx-auto max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-0">
      <!-- Sidebar label -->
      <div class="pt-20 lg:pt-28 lg:pb-28 lg:col-span-3 lg:border-r lg:pr-8" style="border-color: var(--color-structure);">
        <span class="lg:sticky lg:top-32 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em]" style="color: var(--color-neutral-500);">
          {label}
        </span>
      </div>
      <!-- Bento content -->
      <div class="pb-20 lg:py-28 lg:col-span-9 lg:pl-8">
        {heading && (
          <h2 class="font-display text-5xl lg:text-7xl font-bold leading-[0.95] mb-12" style="color: var(--color-forest);">
            {heading}
          </h2>
        )}
        <div class="grid md:grid-cols-2 gap-0" style="border-top: 1px solid var(--color-structure); border-left: 1px solid var(--color-structure);">
          <!-- Large item — spans full left column height -->
          <div
            class="p-8 md:row-span-2 flex flex-col justify-between transition-colors duration-300 ease-linear hover:bg-[rgba(15,76,58,0.04)]"
            style="border-right: 1px solid var(--color-structure); border-bottom: 1px solid var(--color-structure); min-height: 320px;"
          >
            <div>
              <span class="font-mono text-xs" style="color: var(--color-forest);">{largeItem.number}</span>
              <h3 class="font-display text-2xl lg:text-3xl font-bold mt-3 leading-tight" style="color: var(--color-neutral-800);">
                {largeItem.title}
              </h3>
              <p class="mt-4 font-sans text-sm leading-relaxed" style="color: var(--color-neutral-500);">
                {largeItem.description}
              </p>
            </div>
            <span class="font-mono text-[10px] uppercase tracking-[0.15em] mt-6" style="color: var(--color-forest);">
              Primary
            </span>
          </div>
          <!-- Standard items — stack on right column -->
          {standardItems.map((item) => (
            <div
              class="p-6 transition-colors duration-300 ease-linear hover:bg-[rgba(15,76,58,0.04)]"
              style="border-right: 1px solid var(--color-structure); border-bottom: 1px solid var(--color-structure);"
            >
              <span class="font-mono text-xs" style="color: var(--color-forest);">{item.number}</span>
              <h3 class="font-display text-lg font-bold mt-2" style="color: var(--color-neutral-800);">
                {item.title}
              </h3>
              <p class="mt-2 font-sans text-sm" style="color: var(--color-neutral-500);">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Task 4 — Testimonials Section (Dark Variant)

Create a dark-background testimonial section styled for the Quatro editorial system.

**File:** `src/components/marketing/TestimonialsEditorial.astro`

**Design:** Dark section with background image overlay. Uses sidebar-label pattern. Single featured quote with attribution, flanked by smaller secondary quotes.

```astro
---
interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

interface Props {
  label?: string
  testimonials: Testimonial[]
  class?: string
}

const {
  label = 'What They Say',
  testimonials,
  class: className,
} = Astro.props

const [featured, ...secondary] = testimonials
---

<section class:list={['relative px-6 overflow-hidden', className]} style="border-top: 1px solid var(--color-structure);">
  <!-- Dark background -->
  <div class="absolute inset-0">
    <img src="/images/bg.png" alt="" class="h-full w-full object-cover" />
    <div class="absolute inset-0" style="background: rgba(0,0,0,0.85);"></div>
  </div>

  <div class="relative z-10 mx-auto max-w-6xl">
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-0">
      <!-- Sidebar label -->
      <div class="pt-20 lg:pt-28 lg:pb-28 lg:col-span-3 lg:border-r lg:pr-8" style="border-color: rgba(255,255,255,0.1);">
        <span class="lg:sticky lg:top-32 inline-block font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
      </div>
      <!-- Testimonials -->
      <div class="pb-20 lg:py-28 lg:col-span-9 lg:pl-8">
        <!-- Featured quote -->
        {featured && (
          <div class="mb-16">
            <blockquote class="font-sans text-2xl lg:text-3xl font-light leading-relaxed text-white/90">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div class="mt-8 flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center font-display text-sm font-bold text-white" style="background-color: var(--color-forest);">
                {featured.company.charAt(0)}
              </div>
              <div>
                <p class="font-display text-sm font-bold text-white">{featured.author}</p>
                <p class="font-mono text-xs text-white/40">{featured.title}, {featured.company}</p>
              </div>
            </div>
          </div>
        )}

        <!-- Secondary quotes -->
        {secondary.length > 0 && (
          <div class="grid md:grid-cols-2 gap-0" style="border-top: 1px solid rgba(255,255,255,0.1); border-left: 1px solid rgba(255,255,255,0.1);">
            {secondary.map((t) => (
              <div class="p-6 transition-colors duration-300 ease-linear hover:bg-white/5" style="border-right: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);">
                <blockquote class="font-sans text-sm leading-relaxed text-white/60">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div class="mt-4">
                  <p class="font-display text-xs font-bold text-white/80">{t.author}</p>
                  <p class="font-mono text-[10px] text-white/30">{t.title}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</section>
```

---

## Task 5 — Animated Hero Background

Add a subtle SVG path animation behind the hero section. This creates ambient motion that signals "living platform" without distracting from the headline.

**File:** `src/components/ui/AnimatedPaths.astro`

**Design:** Thin, flowing SVG paths that animate slowly across the hero background. Forest green at very low opacity. Pure CSS animation — no JavaScript, no WebGL.

```astro
---
interface Props {
  class?: string
}
const { class: className } = Astro.props
---

<div class:list={['absolute inset-0 overflow-hidden pointer-events-none', className]} aria-hidden="true">
  <svg
    class="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <!-- Path 1 — slow drift -->
    <path
      d="M-100 400 C200 350, 400 500, 700 380 S1100 450, 1540 350"
      stroke="rgba(15,76,58,0.15)"
      stroke-width="1"
      fill="none"
      class="animated-path path-1"
    />
    <!-- Path 2 — medium drift -->
    <path
      d="M-50 550 C250 480, 500 620, 800 520 S1200 600, 1540 500"
      stroke="rgba(15,76,58,0.1)"
      stroke-width="0.75"
      fill="none"
      class="animated-path path-2"
    />
    <!-- Path 3 — fast drift -->
    <path
      d="M-80 300 C180 250, 450 380, 750 280 S1050 350, 1540 280"
      stroke="rgba(15,76,58,0.08)"
      stroke-width="0.5"
      fill="none"
      class="animated-path path-3"
    />
    <!-- Path 4 — slow deep -->
    <path
      d="M-120 650 C200 600, 500 720, 850 640 S1150 700, 1540 620"
      stroke="rgba(255,255,255,0.05)"
      stroke-width="0.75"
      fill="none"
      class="animated-path path-4"
    />
  </svg>
</div>

<style>
  .animated-path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw-path 8s ease-in-out forwards, drift 20s ease-in-out infinite;
  }

  .path-1 { animation-delay: 0s, 8s; }
  .path-2 { animation-delay: 0.5s, 8.5s; }
  .path-3 { animation-delay: 1s, 9s; }
  .path-4 { animation-delay: 1.5s, 9.5s; }

  @keyframes draw-path {
    to { stroke-dashoffset: 0; }
  }

  @keyframes drift {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-8px) translateX(5px); }
    50% { transform: translateY(4px) translateX(-3px); }
    75% { transform: translateY(-3px) translateX(7px); }
  }

  /* Kill animation on reduced motion or mobile for performance */
  @media (prefers-reduced-motion: reduce) {
    .animated-path {
      animation: none;
      stroke-dashoffset: 0;
    }
  }

  @media (max-width: 768px) {
    .animated-path {
      animation: draw-path 4s ease-in-out forwards;
    }
  }
</style>
```

---

## Task 6 — Wire Everything Into the Homepage

**File:** `src/pages/index.astro`

### 6A — Import the new components

Add these imports at the top of the frontmatter:

```astro
import LogoCloud from '@/components/marketing/LogoCloud.astro'
import StatsSection from '@/components/marketing/StatsSection.astro'
import BentoSection from '@/components/marketing/BentoSection.astro'
import TestimonialsEditorial from '@/components/marketing/TestimonialsEditorial.astro'
import AnimatedPaths from '@/components/ui/AnimatedPaths.astro'
```

### 6B — Add AnimatedPaths to the hero

Inside the hero `<section data-hero>`, add the animated paths component AFTER the background image div but BEFORE the `connect.png` image:

```astro
<!-- Background image -->
<div class="absolute inset-0">
  <img src="/images/hero-bg.png" alt="" class="h-full w-full object-cover" />
  <div class="absolute inset-0" style="background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%);"></div>
</div>

<!-- ADD THIS: Animated paths layer -->
<AnimatedPaths class="z-[1]" />

<!-- connect.png — bottom right graphic -->
<img src="/images/connect.png" ... />
```

### 6C — Add Logo Cloud after the hero

Insert the LogoCloud section IMMEDIATELY after the hero closing `</section>` and BEFORE the Regional Commitment section:

```astro
<!-- 1.5. LOGO CLOUD — Social proof -->
<LogoCloud
  label="Ecosystem"
  heading="Integrating with the systems your operation already runs on."
  subheading="8,000+ integrations across 1,000+ vendors — SCADA, IoT, ERP, cloud, and legacy."
  logos={[
    { name: 'DataOS', src: '/images/logos/dataos.svg' },
    { name: 'TDengine', src: '/images/logos/tdengine.svg' },
    { name: 'OPC UA', src: '/images/logos/opcua.svg' },
    { name: 'OSIsoft PI', src: '/images/logos/osisoft.svg' },
    { name: 'MQTT', src: '/images/logos/mqtt.svg' },
    { name: 'Modbus', src: '/images/logos/modbus.svg' },
    { name: 'AWS', src: '/images/logos/aws.svg' },
    { name: 'SCADA', src: '/images/logos/scada.svg' },
    { name: 'ECR Platform X', src: '/images/logos/ecr.svg' },
    { name: 'NOVI Space', src: '/images/logos/novi-space.svg' },
  ]}
/>
```

### 6D — Add Stats Section after the Problem Statement

Insert the StatsSection AFTER the Problem Statement (section 3, "The Intelligence Gap") and BEFORE the Data Sovereignty section:

```astro
<!-- 3.5. STATS — Proof points -->
<StatsSection
  label="Proof"
  heading="The platform behind the numbers."
  stats={[
    { value: '8000', suffix: '+', label: 'Integrations' },
    { value: '1000', suffix: '+', label: 'Vendors Supported' },
    { value: '60', suffix: '×', label: 'Faster SLA Visibility' },
    { value: '4', label: 'Weeks to First Value' },
  ]}
/>
```

### 6E — Replace Data Sovereignty section with Bento Grid

REMOVE the entire Data Sovereignty section (section 4, "Your Data Your Control") and REPLACE it with the Bento Grid:

```astro
<!-- 4. DATA SOVEREIGNTY — Bento Grid -->
<BentoSection
  label="Sovereignty"
  heading="Your\nData\nYour Control"
  items={[
    {
      number: '01',
      title: 'Edge-First Architecture',
      description: 'Local processing at every site. Data is analyzed where it\'s generated — with or without cloud connectivity. Intelligence works at the edge, synchronized when conditions allow.',
      size: 'large',
    },
    {
      number: '02',
      title: 'Flexible Deployment',
      description: 'On-premise, private cloud, hybrid, or air-gapped. Adapts to your security and regulatory requirements.',
    },
    {
      number: '03',
      title: 'Open Formats',
      description: 'Open APIs and standard formats. Your data is yours — always exportable, always accessible.',
    },
  ]}
/>
```

**Note on the heading:** The `\n` in the heading string should render as line breaks. If Astro doesn't handle `\n` in props, replace the heading with a slot or update the BentoSection component to split on `<br />` tags. You may need to adjust the component to accept raw HTML in the heading — use `set:html` if needed:

```astro
<!-- In BentoSection.astro, change heading render to: -->
{heading && (
  <h2 class="font-display text-5xl lg:text-7xl font-bold leading-[0.95] mb-12" style="color: var(--color-forest);" set:html={heading.replace(/\\n/g, '<br />')} />
)}
```

### 6F — Add Testimonials section

Insert the TestimonialsEditorial AFTER the "Why Quatro" dark section (section 6) and BEFORE the Industries section (section 8):

```astro
<!-- 7. TESTIMONIALS — Social proof from humans -->
<TestimonialsEditorial
  label="Results"
  testimonials={[
    {
      quote: 'We went from fifteen monitoring screens and three phone calls to one operational picture. The control room response time dropped from forty minutes to under four.',
      author: 'Operations Director',
      title: 'VP Operations',
      company: 'National Pipeline Operator',
    },
    {
      quote: 'The edge deployment was critical for us. Our remote sites have intermittent connectivity — Quatro works regardless.',
      author: 'Infrastructure Lead',
      title: 'CTO',
      company: 'Regional Telecom',
    },
    {
      quote: 'We proved value in three weeks. The pilot paid for itself before the contract was signed.',
      author: 'Program Director',
      title: 'Director of Digital',
      company: 'Municipal Government',
    },
    {
      quote: 'Finally, a platform that integrates with our existing SCADA without asking us to replace everything first.',
      author: 'Plant Manager',
      title: 'Operations Manager',
      company: 'Industrial Manufacturing',
    },
  ]}
/>
```

**Note:** These are representative testimonials. Replace with real quotes when available. The component handles 1 featured (first) + N secondary (remaining) automatically.

### 6G — Final section order

After all changes, the homepage section order should be:

```
1.   Hero (with AnimatedPaths)
1.5  Logo Cloud (NEW)
2.   Regional Commitment (unchanged)
3.   Problem Statement / Intelligence Gap (unchanged)
3.5  Stats Section (NEW)
4.   Data Sovereignty → NOW Bento Grid (REPLACED)
5.   The Platform — Connect/Operate/Command (unchanged)
6.   Why Quatro — dark section (unchanged)
7.   Testimonials (NEW)
8.   Industries (unchanged)
9.   Final CTA (unchanged)
10.  Footer (unchanged)
```

---

## Verification

### Build Check
```bash
npx astro build
```

Fix any TypeScript or template errors. Common issues:
- Import paths may need `@/` prefix (check `tsconfig.json` for path aliases)
- `set:html` directive syntax for the bento heading
- CSS `@keyframes` inside `<style>` tags in Astro components

### Visual Check

Run `npx astro dev` and verify:

- [ ] **Hero**: Subtle green SVG paths animate behind the background image. Not distracting. Stops animating on mobile.
- [ ] **Logo Cloud**: 10 grayscale logos in a grid below the hero. Low opacity (40%), brighten on hover (80%). Sidebar label says "Ecosystem".
- [ ] **Stats Section**: 4 large numbers with mono labels. Numbers count up from 0 when scrolled into view. Uses forest green for the numbers.
- [ ] **Bento Grid**: Edge-First Architecture is a large card on the left. Flexible Deployment and Open Formats stack on the right. All cards use the existing border/hover pattern.
- [ ] **Testimonials**: Dark section. One large featured quote in serif font. Two smaller quotes in a 2-column grid below. Dark background with image overlay.
- [ ] **Section order**: Logo Cloud → Regional → Problem → Stats → Bento Sovereignty → Platform → Why Quatro → Testimonials → Industries → CTA
- [ ] **No regressions**: All existing sections still render correctly. Navigation, footer, mobile menu all work.
- [ ] **Typography**: All components use `font-display` for headings, `font-sans` for body, `font-mono` for labels/CTAs
- [ ] **Colors**: All brand colors use CSS variables, not Tailwind utility classes
- [ ] **Borders**: All section dividers use `border-top: 1px solid var(--color-structure)`
- [ ] **Mobile**: All new sections are responsive. Logo grid collapses to 2 columns. Stats collapse to 2×2. Bento stacks vertically.
- [ ] **Performance**: Animated paths don't cause jank. Count-up animation runs smoothly. No layout shifts.

### Anti-Pattern Check

Verify NONE of these appear:
- [ ] No icons in colored circles
- [ ] No colored accent bars on cards
- [ ] No bullet-point lists inside cards
- [ ] No emojis
- [ ] No Tailwind color classes where CSS variables should be used
- [ ] No drop shadows on dark backgrounds

---

## Future Enhancements (Not In This Prompt)

These are noted for a follow-up prompt:

1. **Comparison component** — "Before Quatro / After Quatro" section between Problem Statement and Stats
2. **Scroll-driven product visual** — Product screenshot that expands on scroll
3. **Feature carousel** — Tab/carousel interaction for Connect/Operate/Command deep-dive
4. **Radial timeline** — Animated timeline visualization for the three platform tiers
5. **Real testimonial content** — Replace placeholder quotes with actual client quotes
6. **Real partner logos** — Replace SVG text placeholders with actual brand logos
