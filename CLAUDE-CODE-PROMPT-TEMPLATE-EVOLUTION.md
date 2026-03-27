# Claude Code Prompt — Template Evolution: Bento + Editorial Layouts

## Objective

Evolve the Quatro website industry and solution page templates from flat feature grids to a two-tier visual layout: **bento grid** for top-level use cases and **alternating editorial blocks** for featured capabilities with images. This aligns the templates with the updated messaging framework (use-case-led, outcome-focused, not feature lists).

**The principle:** Capabilities flagged as `featured` render in a rich editorial layout with images and outcome stats. Non-featured capabilities render in the existing compact grid below. Pages with no featured capabilities render exactly as they do today (full backward compatibility).

---

## Reference: Current Architecture

### Files You'll Touch

| File | Role |
|------|------|
| `src/content/config.ts` | Zod schemas for all content collections |
| `src/pages/industries/[slug].astro` | Industry page template (EN) |
| `src/pages/es/industries/[slug].astro` | Industry page template (ES) |
| `src/pages/solutions/[slug].astro` | Solution page template (EN) |
| `src/pages/es/solutions/[slug].astro` | Solution page template (ES) |
| `src/components/marketing/FeatureGrid.astro` | Existing grid component (KEEP — still used for non-featured capabilities and challenges) |
| `src/components/marketing/BentoUseCases.astro` | **NEW** — Bento grid component for featured capabilities |
| `src/components/marketing/EditorialCapability.astro` | **NEW** — Alternating image+text editorial block |
| `src/components/marketing/ProofPointCard.astro` | Existing proof point (will be wrapped in an editorial split layout in the template) |
| `src/components/marketing/PlatformMapSection.astro` | **REMOVE** from all templates — replaced by capability tags in bento cards |
| `src/components/marketing/Section.astro` | Existing section wrapper (no changes) |
| `src/components/marketing/Hero.astro` | Existing hero (no changes) |

### Current Capability Schema (industries)

```yaml
capabilities:
  - name: "SCADA Overlay Modernization"
    description: "Mirror data from existing ABB, Siemens, GE..."
```

Industries capabilities have: `name`, `description` (no icon).

### Current Capability Schema (solutions)

```yaml
capabilities:
  - name: "Enhanced RTTM"
    description: "Real-Time Transient Monitoring..."
    icon: "monitor"
```

Solutions capabilities have: `name`, `description`, `icon`.

### Current Rendering

Both templates pipe capabilities through `FeatureGrid.astro` as a uniform 3-column grid of bordered cards. Every capability gets identical visual weight.

---

## Step 1: Schema Updates (`src/content/config.ts`)

### Industries Collection — Update capabilities array

Change the capabilities schema from:

```ts
capabilities: z.array(
  z.object({
    name: z.string(),
    description: z.string(),
  })
),
```

To:

```ts
capabilities: z.array(
  z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    outcome: z.string().optional(),
    tier: z.enum(['connect', 'operate', 'command']).optional(),
  })
),
```

### Solutions Collection — Update capabilities array

Change from:

```ts
capabilities: z.array(
  z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string(),
  })
),
```

To:

```ts
capabilities: z.array(
  z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    featured: z.boolean().optional(),
    image: z.string().optional(),
    outcome: z.string().optional(),
    tier: z.enum(['connect', 'operate', 'command']).optional(),
  })
),
```

Note: `icon` becomes optional on solutions too (featured capabilities use images instead of icons).

### Both Collections — Add optional `tier` field

Add an optional `tier` field to capabilities in BOTH industries and solutions schemas:

```ts
tier: z.enum(['connect', 'operate', 'command']).optional(),
```

This replaces the dedicated `PlatformMapSection` component. Instead of a separate section explaining Connect/Operate/Command, each capability can optionally declare which platform tier powers it. The bento card and standard grid card will render a small pill badge (e.g., "Connect", "Operate", "Command") when the `tier` field is present. This weaves the platform story into the capabilities naturally rather than calling it out as a separate architectural explainer.

**Rendering the tier badge:** In both `BentoUseCases.astro` (bento cards and standard cards) and `FeatureGrid.astro` (fallback), if a capability has a `tier` value, render a small pill:

```html
{tier && (
  <span class="inline-flex items-center rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400 mb-2">
    {tier.charAt(0).toUpperCase() + tier.slice(1)}
  </span>
)}
```

Place this pill above the capability name in the card. It's subtle — not a headline, just a contextual label that connects the use case back to the platform without needing a dedicated section.

### Solutions Collection — Add heroImage

Add `heroImage: z.string().optional()` to the solutions schema (same position as industries — after `order`). This enables dark hero variants on solution pages.

**IMPORTANT:** Also update the ES variants. Both `industries` and `solutions` schemas are reused for `industries-es` and `solutions-es` via the `collections` export at the bottom of the file, so one schema change covers both locales.

---

## Step 2: New Component — `BentoUseCases.astro`

Create `src/components/marketing/BentoUseCases.astro`

### Props Interface

```ts
interface Capability {
  name: string
  description: string
  icon?: string
  featured?: boolean
  image?: string
  outcome?: string
}

interface Props {
  title?: string
  subtitle?: string
  capabilities: Capability[]
}
```

### Behavior

1. Split capabilities into `featured` (where `featured === true`) and `standard` (everything else).
2. If there are NO featured capabilities, render nothing (the template will fall back to the existing `FeatureGrid`).
3. Featured capabilities render in a **bento grid** layout (see Layout below).
4. Standard capabilities render in a compact grid below the bento section.

### Bento Layout Rules

The bento grid uses a 6-column layout with 2 rows, matching the Tailwind UI dark bento pattern:

- **2 featured capabilities** → Two `lg:col-span-3` cards (top row, equal size). Second row: standard capabilities in `lg:col-span-2` cards (3 across).
- **3 featured capabilities** → First card `lg:col-span-3`, second card `lg:col-span-3` (top row). Third featured card `lg:col-span-6` (full-width editorial block below, using the alternating editorial layout — image left, text right). Remaining standard capabilities in `lg:col-span-2` cards.
- **4+ featured capabilities** → First two `lg:col-span-3` (top row). Remaining featured as `lg:col-span-2` or `lg:col-span-3` cards filling the second row. Standard capabilities in a simple grid below.

If there's only **1 featured capability**, render it as a full-width editorial block (`lg:col-span-6`) and put the rest in the standard grid.

### Bento Card HTML Structure

Each bento card should follow this structure (Astro component, NOT React):

```html
<div class="relative lg:col-span-{span}">
  <div class="absolute inset-0 rounded-lg bg-neutral-800 {corner-rounding-class}" />
  <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] {corner-rounding-class}">
    {image && (
      <img
        alt=""
        src={image}
        class="h-80 object-cover object-center"
      />
    )}
    <div class="p-8 pt-4">
      {outcome && (
        <p class="text-sm font-semibold text-brand-400">{outcome}</p>
      )}
      <h3 class="mt-2 text-lg font-medium tracking-tight text-white">{name}</h3>
      <p class="mt-2 max-w-lg text-sm/6 text-neutral-400">{description}</p>
    </div>
  </div>
  <div class="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/10 {corner-rounding-class}" />
</div>
```

**Corner rounding rules** (matching the Tailwind UI bento pattern):
- Top-left card: `max-lg:rounded-t-4xl lg:rounded-tl-4xl`
- Top-right card: `lg:rounded-tr-4xl`
- Bottom-left card: `lg:rounded-bl-4xl`
- Bottom-right card: `max-lg:rounded-b-4xl lg:rounded-br-4xl`
- Middle cards: no extra rounding

**Color system:** Use the existing Quatro brand tokens:
- Card background: `bg-neutral-800` (matches the site's existing dark sections)
- Outcome label: `text-brand-400` (Quatro green)
- Title: `text-white`
- Description: `text-neutral-400`
- Border outline: `outline-white/10`

### Standard Capabilities Grid (below bento)

For non-featured capabilities below the bento section, render a simple grid:

```html
{standard.length > 0 && (
  <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {standard.map(cap => (
      <div class="rounded-lg bg-neutral-800/50 p-6" style="border: 1px solid rgba(255,255,255,0.08);">
        <h3 class="text-sm font-semibold text-white">{cap.name}</h3>
        <p class="mt-2 text-sm text-neutral-400">{cap.description}</p>
      </div>
    ))}
  </div>
)}
```

### Fallback Image

If a featured capability has `featured: true` but no `image`, use a placeholder gradient:

```html
{!image && (
  <div class="h-80 bg-gradient-to-br from-brand-900/40 to-neutral-800" />
)}
```

---

## Step 3: New Component — `EditorialCapability.astro`

Create `src/components/marketing/EditorialCapability.astro`

This is the alternating left-right editorial layout for when a single featured capability needs to be a full-width storytelling block.

### Props Interface

```ts
interface Props {
  name: string
  description: string
  image?: string
  outcome?: string
  reverse?: boolean  // flip image to right side
  icon?: string
}
```

### HTML Structure

```html
<div class="overflow-hidden py-16 sm:py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class:list={[
      "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",
      reverse && "lg:flex-row-reverse"
    ]}>
      <!-- Text Column -->
      <div class:list={[
        "lg:pt-4",
        reverse ? "lg:ml-auto lg:pl-4" : "lg:pr-4"
      ]}>
        <div class="lg:max-w-lg">
          {outcome && (
            <p class="text-base/7 font-semibold text-brand-600">{outcome}</p>
          )}
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-pretty text-neutral-800 sm:text-3xl">
            {name}
          </h3>
          <p class="mt-6 text-lg/8 text-neutral-600">
            {description}
          </p>
        </div>
      </div>
      <!-- Image Column -->
      <div class:list={[
        "flex items-start",
        reverse ? "justify-end lg:order-first" : "justify-start lg:order-last"
      ]}>
        {image ? (
          <img
            alt=""
            src={image}
            class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10"
          />
        ) : (
          <div class="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-brand-100 to-neutral-100" />
        )}
      </div>
    </div>
  </div>
</div>
```

**For the `reverse` prop:** The second editorial block on a page should pass `reverse={true}` so the image appears on the right. The third should have `reverse={false}` (image left again). This creates the alternating zigzag pattern.

The template will handle this by passing `reverse={index % 2 === 1}` where `index` is the position of each editorial block.

---

## Step 4: Update Industry Template — `src/pages/industries/[slug].astro`

### Current Page Flow

```
Hero → StatStrip → Challenges Grid → Capabilities Grid (flat) → PlatformMap → ProofPoint → UseCases → CTA
```

### New Page Flow

```
Hero → StatStrip → Challenges Grid (unchanged) → Bento Use Cases (featured) OR FeatureGrid (fallback) → Editorial Proof Point → UseCases → CTA
```

**PlatformMapSection is removed entirely.** The Connect/Operate/Command architecture story doesn't belong on use-case-focused pages. It's redundant with the capabilities section and breaks the editorial flow. Anyone who wants to understand the platform tiers can visit the dedicated platform pages linked from the nav.

### Template Changes

1. **Import new components** at the top:

```ts
import BentoUseCases from '@/components/marketing/BentoUseCases.astro'
import EditorialCapability from '@/components/marketing/EditorialCapability.astro'
```

2. **Split capabilities** in the frontmatter section:

```ts
const featuredCapabilities = capabilities.filter(c => c.featured)
const standardCapabilities = capabilities.filter(c => !c.featured)
const hasFeatured = featuredCapabilities.length > 0
```

3. **Replace the Capabilities section** (currently lines ~62-71). Change from:

```astro
<!-- Capabilities Grid -->
<Section divider dark>
  <FeatureGrid
    dark
    title="How Quatro Helps"
    subtitle={`Capabilities purpose-built for ${title.toLowerCase()} operations.`}
    features={capabilities.map(c => ({ name: c.name, description: c.description, icon: c.icon }))}
    columns={3}
  />
</Section>
```

To:

```astro
<!-- Capabilities Section -->
{hasFeatured ? (
  <!-- Bento Use Cases for pages with featured capabilities -->
  <Section divider dark>
    <BentoUseCases
      title="How Quatro Helps"
      subtitle={`Capabilities purpose-built for ${title.toLowerCase()} operations.`}
      capabilities={capabilities}
    />
  </Section>
) : (
  <!-- Fallback: Original grid for pages without featured capabilities -->
  <Section divider dark>
    <FeatureGrid
      dark
      title="How Quatro Helps"
      subtitle={`Capabilities purpose-built for ${title.toLowerCase()} operations.`}
      features={capabilities.map(c => ({ name: c.name, description: c.description, icon: c.icon }))}
      columns={3}
    />
  </Section>
)}
```

4. **Remove PlatformMapSection entirely.** Delete the following block from the template:

```astro
<!-- Platform Mapping -->
{platformMapping && (
  <PlatformMapSection
    connect={platformMapping.connect}
    operate={platformMapping.operate}
    command={platformMapping.command}
  />
)}
```

Also remove the import at the top of the file:

```ts
import PlatformMapSection from '@/components/marketing/PlatformMapSection.astro'
```

The `platformMapping` field can remain in the data destructuring for now (it's still in the schema and content files — removing it from the schema would require updating every `.md` file). Just stop rendering it.

5. **Upgrade the Proof Point section** to use the editorial split layout. Change from:

```astro
{proofPoint && (
  <Section divider>
    <div class="text-center mb-12">
      <h2 class="font-display text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">Proven Results</h2>
      <p class="mt-4 text-lg text-neutral-600">Real outcomes from {title.toLowerCase()} organizations.</p>
    </div>
    <div class="mx-auto max-w-3xl">
      <ProofPointCard ... />
    </div>
  </Section>
)}
```

To:

```astro
{proofPoint && (
  <Section divider>
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <!-- Proof narrative -->
          <div class="lg:pr-4 lg:pt-4">
            <div class="lg:max-w-lg">
              <p class="text-base/7 font-semibold text-brand-600">Proven Results</p>
              <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
                {proofPoint.headline}
              </h2>
              {proofPoint.metrics && proofPoint.metrics.length > 0 && (
                <div class="mt-8 grid gap-4 sm:grid-cols-3">
                  {proofPoint.metrics.map((metric) => (
                    <div>
                      <p class="font-display text-2xl text-brand-600">{metric.value}</p>
                      <p class="mt-1 text-xs text-neutral-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
              <p class="mt-6 text-base/7 text-neutral-600">{proofPoint.narrative}</p>
              <a href="/resources/case-studies" class="mt-6 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700">
                Read the full case study
                <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          <!-- Proof image -->
          <div class="flex items-start justify-end lg:order-last">
            <div class="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-brand-100 to-neutral-100 flex items-center justify-center">
              <p class="text-sm text-neutral-400">Proof point image placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
)}
```

This editorial proof point will accept a real image later when proof point images are generated. For now, the gradient placeholder keeps the layout clean.

---

## Step 5: Update Solution Template — `src/pages/solutions/[slug].astro`

Apply the **same changes** as the industry template:

1. Import `BentoUseCases` and `EditorialCapability`.
2. Split capabilities into featured/standard.
3. Conditionally render `BentoUseCases` or `FeatureGrid`.
4. **Remove PlatformMapSection** — delete the import and the rendering block, same as industries.
5. Upgrade ProofPoint to editorial split layout.
6. **Add heroImage support:** Extract `heroImage` from `solution.data` and pass `backgroundImage={heroImage}` to the Hero component.

Additionally, on line 22, update the destructuring:

```ts
// Before
const { title, tagline, description, hero, challenges, capabilities, stats, platformMapping, proofPoint, cta } = solution.data

// After
const { title, tagline, description, hero, heroImage, challenges, capabilities, stats, platformMapping, proofPoint, cta } = solution.data
```

And update the Hero component call to include the background image:

```astro
<Hero
  variant="dark"
  eyebrow={hero.eyebrow}
  title={hero.title}
  description={hero.description}
  primaryCta={hero.primaryCta}
  secondaryCta={hero.secondaryCta}
  backgroundImage={heroImage}
/>
```

---

## Step 6: Update ES Templates

Apply the identical changes to:
- `src/pages/es/industries/[slug].astro`
- `src/pages/es/solutions/[slug].astro`

These should mirror their English counterparts exactly.

---

## Step 7: Update Image Prompts

After the schema changes, update the image generation prompts in `image-prompts/` to include capability-level images. Each industry page with featured capabilities will need 2-4 additional images (one per featured capability). These are smaller, more specific images than the hero images:

- Dimensions: 1200×750 (16:10 landscape)
- Style: Same cinematic, slightly desaturated tone as hero images but can be more specific/close-up
- Subject: Should directly illustrate the use case (e.g., "AI-Powered Operator Guidance" → control room operator using guidance overlay, no visible face)

This step is documentation only — no code changes. Add a note to `image-prompts/00-IMAGE-AUDIT.md` documenting the new capability-image requirements.

---

## Migration Guide: Flagging Featured Capabilities

To enable the bento layout on an existing page, add `featured: true` and optionally `image` and `outcome` to 2-3 top capabilities. Example migration for `energy.md`:

### Before

```yaml
capabilities:
  - name: "SCADA Overlay Modernization"
    description: "Mirror data from existing ABB, Siemens, GE..."
  - name: "Pipeline Integrity & Security"
    description: "Multi-method leak detection..."
```

### After

```yaml
capabilities:
  - name: "SCADA Overlay Modernization"
    description: "Mirror data from existing ABB, Siemens, GE..."
    featured: true
    image: "/images/cap-energy-scada-overlay.png"
    outcome: "Months, Not Years"
  - name: "Pipeline Integrity & Security"
    description: "Multi-method leak detection..."
    featured: true
    image: "/images/cap-energy-pipeline.png"
    outcome: "75% Fewer False Alarms"
```

**Do NOT migrate content files in this PR.** Only build the components and schema changes. Content migration will happen in a separate pass after images are generated.

---

## Quality Checklist

Before considering this complete:

- [ ] `config.ts` — Industries capabilities schema includes `icon?`, `featured?`, `image?`, `outcome?`, `tier?`
- [ ] `config.ts` — Solutions capabilities schema includes `featured?`, `image?`, `outcome?`, `tier?` and `icon` is now optional
- [ ] `config.ts` — Solutions schema includes `heroImage: z.string().optional()`
- [ ] `BentoUseCases.astro` — Renders bento grid for featured capabilities, compact grid for standard, nothing if no featured; renders tier badge when present
- [ ] `EditorialCapability.astro` — Renders alternating image-left/image-right blocks
- [ ] `industries/[slug].astro` — PlatformMapSection REMOVED; conditionally renders BentoUseCases or FeatureGrid fallback; editorial proof point
- [ ] `solutions/[slug].astro` — PlatformMapSection REMOVED; same as industries; heroImage extracted and passed to Hero
- [ ] `es/industries/[slug].astro` — Mirrors English industry template (PlatformMapSection removed)
- [ ] `es/solutions/[slug].astro` — Mirrors English solution template (PlatformMapSection removed)
- [ ] Existing pages with NO featured capabilities render exactly as before (zero visual regression)
- [ ] `FeatureGrid.astro` — NOT modified, NOT deleted (still used for challenges and fallback)
- [ ] `PlatformMapSection.astro` — NOT deleted as a file (other pages may reference it), just removed from industry and solution templates
- [ ] No upstream technology names (DataMiner, Skyline, etc.) appear in any component
- [ ] `astro build` compiles without errors
- [ ] Dev server renders existing industry and solution pages without visual regression

---

## Do NOT

- Do not modify any content `.md` files — this is a template-only change (schema update to `config.ts` is already done)
- Do not modify `Hero.astro`, `Section.astro`, `StatStrip.astro`, or `CtaBanner.astro`
- Do not delete `PlatformMapSection.astro` as a file — just remove it from industry/solution templates. Other pages (like product pages) may still use it.
- Do not delete the `platformMapping` field from the schema or from content files — just stop rendering it in industry/solution templates
- Do not use React components — this is an Astro site using `.astro` components
- Do not use Tailwind's `@apply` — use utility classes directly
- Do not hardcode any industry-specific content in the components — they must be data-driven from frontmatter
- Do not reference DataMiner, Skyline, SatOps, GridOps, NetOps, MediaOps, DefenseOps, IoTOps, InfraOps, MCP, or Agent-to-Agent anywhere
