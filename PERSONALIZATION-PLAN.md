# Website Personalization Plan: Industry-Aware Messaging

**Date:** April 6, 2026
**Status:** Planning
**Scope:** Company/industry-level personalization only (no individual identity required)

---

## The Opportunity

RB2B is installed and identifying visiting companies. The Quatro site already has rich, industry-specific content (11 industries, 22 solutions, per-vertical proof points, stats, and CTAs). But right now every visitor sees the same generic homepage regardless of whether they're an energy company, a defense contractor, or a telco. The content exists — it's just not being surfaced to the right people at the right time.

---

## How RB2B's Data Actually Flows

This is important to understand before designing the system. RB2B's JavaScript pixel (`window.reb2b`) does **not** expose visitor company data back to the client in real time. The data flow is:

1. Visitor hits the site → RB2B pixel fires
2. RB2B resolves IP → company (via Demandbase partnership) and/or IP → person (US only)
3. Data is sent to **RB2B's backend**, then pushed to integrations (Slack, HubSpot, Salesforce, webhooks)
4. The page itself never receives the identification result

This means we can't do `window.reb2b.getCompany()` and personalize on the spot. We need a thin intelligence layer between RB2B and the site.

---

## Architecture: The Visitor Intelligence Loop

```
FIRST VISIT (unknown visitor):
  Visitor arrives → RB2B pixel fires → identifies company
                  → RB2B webhook sends data to Netlify Function
                  → Function stores { IP range → industry vertical } in KV store
                  → Function returns a Set-Cookie with detected vertical
                  → Page stays generic (or uses fallback signals — see below)

RETURN VISIT (known visitor):
  Visitor arrives → Edge Function reads cookie OR matches IP
                  → Injects industry vertical into page context
                  → Client JS swaps hero, proof points, CTAs, solution order
                  → Visitor sees energy-specific (or defense, telco, etc.) homepage
```

The gap on first visit is real but manageable. Most B2B buyers visit 3-7 times before converting. Personalization on visits 2+ is still extremely valuable. And we can close the first-visit gap with fallback signals.

---

## Phase 1: Foundation (Week 1-2)

### 1A. RB2B Webhook → Netlify Function → Cookie

**What:** Create a serverless function that receives RB2B's webhook payload, extracts the company industry, maps it to a Quatro vertical, and stores the mapping.

**RB2B webhook payload includes:**
- Company name, domain, industry (NAICS/SIC based)
- Employee count, revenue range
- Location (HQ city/state/country)
- Page URL visited, timestamp

**Industry mapping table:**

| RB2B Industry Category | Quatro Vertical | Slug |
|---|---|---|
| Oil & Gas, Utilities, Renewables, Mining | Energy | `energy` |
| Defense, Government, Aerospace, Intelligence | National Security | `defense` |
| Telecommunications, Media, Broadcasting, ISPs | Networks | `networks` |
| Transportation, Water, Municipal, Construction | Critical Infrastructure | `cities` |
| Banking, Insurance, Financial Services, Fintech | Finance | `finance` |
| Manufacturing, Industrial, Logistics | Industrial | `industrial` |
| *Everything else* | *(no personalization — show default)* | `null` |

**Implementation:**
- Create `netlify/functions/rb2b-webhook.ts`
- Receive POST from RB2B, extract `company.industry`
- Map to Quatro vertical using the table above
- Store in Netlify Blobs: `{ visitorId/IP → vertical, companyName, timestamp }`
- This runs silently in the background — no user-facing latency

### 1B. Edge Function for Personalization Signal

**What:** A Netlify Edge Function that runs on every page request, checks if the visitor is known, and injects a personalization hint.

**Implementation:**
- Create `netlify/edge-functions/personalize.ts`
- On request: check for `q_vertical` cookie → if present, pass through
- If no cookie: check visitor IP against Netlify Blobs store
- If match found: set `q_vertical` cookie (e.g., `q_vertical=energy; max-age=2592000`)
- Inject an `x-quatro-vertical` response header (useful for debugging)

### 1C. Fallback Signals for First Visit

Even without RB2B data, we can make educated guesses:

- **UTM parameters:** `?utm_vertical=energy` or `?utm_source=defense-conference` → set cookie immediately
- **Referrer analysis:** Visitor came from an energy trade publication or defense blog → infer vertical
- **Page behavior:** If someone lands directly on `/industries/energy` → they've self-selected, set the cookie
- **Geo-IP hint:** Visitor from Houston → likely energy. Visitor from DC/NoVA → likely defense/government.

These aren't perfect, but they're better than showing everyone the same generic page.

---

## Phase 2: Client-Side Personalization Engine (Week 2-3)

### 2A. The Personalization Script

A lightweight client-side module (~2KB) that reads the `q_vertical` cookie and adapts the page.

```
src/scripts/personalize.ts

Purpose:
- Read q_vertical cookie
- If a vertical is detected, dispatch a custom event: window.dispatchEvent('quatro:vertical', { vertical: 'energy' })
- Components listen for this event and swap content
- If no vertical detected, do nothing (page renders as-is — zero overhead)
```

Key principle: **progressive enhancement.** The default page is always valid. Personalization layers on top. No flash of wrong content. No layout shift.

### 2B. What Changes Per Vertical

Here's the personalization surface area on the homepage, ordered by impact:

**1. Hero Headline + Subtext (highest impact)**

| Vertical | Headline | Subtext |
|---|---|---|
| Default | Systems That Think. People Who Build. | 8,000+ integrations... |
| Energy | One Operational Model. Every Energy Decision. | Connect SCADA, historians, and DER systems... |
| Defense | Mission Intelligence. Operationalized. | Fuse ISR, SIGINT, and C2 feeds... |
| Networks | See Every Signal. Across Every Network. | Unify terrestrial, satellite, and hybrid... |
| Finance | Risk Visibility Without the Lag. | Connect core banking, trading, and compliance... |
| Infrastructure | City-Wide Intelligence. Block by Block. | Unify transportation, water, and public safety... |

*This content already exists in the industry content collection frontmatter — we just surface it on the homepage.*

**2. Hero CTA (high impact)**

| Vertical | Primary CTA |
|---|---|
| Default | Schedule an Assessment |
| Energy | Schedule an Energy Assessment |
| Defense | Schedule a Mission Assessment |
| Networks | Schedule a Network Assessment |

**3. Industry Section Reordering (medium impact)**

The homepage currently shows 5 industry cards in a fixed order. When we know the visitor's vertical, **move their industry to position 1** and highlight it. Don't remove the others — just lead with relevance.

**4. Proof Points / Stats (medium impact)**

Swap the generic stats for industry-specific ones. Energy visitor sees "75% Fewer False Alarms, 60% Faster Restoration." Defense visitor sees "4x Faster Correlation, 90% Reduction in Manual Triage."

**5. xOps Tags (low effort, high signal)**

The xOps section shows tags: MediaOps, GridOps, SatOps, NetOps, IoTOps. Reorder so the visitor's relevant *Ops is first and visually emphasized.

**6. Case Study / Social Proof (medium impact)**

If we have a case study or testimonial for the visitor's vertical, surface it. The content collection already has `industry` fields on testimonials.

### 2C. Implementation Pattern

Since the site is static Astro with React islands, the cleanest pattern is:

1. **Astro components render ALL content variants** as hidden blocks with `data-vertical` attributes
2. **Personalization script** shows the matching variant and hides the default
3. **No variant detected** → default stays visible, nothing moves

Example pseudo-structure for the hero:
```html
<!-- Default (always visible initially) -->
<div data-vertical="default" class="hero-content">
  <h1>Systems That Think. People Who Build.</h1>
</div>

<!-- Energy variant (hidden until activated) -->
<div data-vertical="energy" class="hero-content" hidden>
  <h1>One Operational Model. Every Energy Decision.</h1>
</div>

<!-- Defense variant (hidden until activated) -->
<div data-vertical="defense" class="hero-content" hidden>
  <h1>Mission Intelligence. Operationalized.</h1>
</div>
```

The personalization script runs early (inline in `<head>`), reads the cookie, and unhides the right variant before first paint. No flash. No layout shift. No CLS penalty.

---

## Phase 3: Content Mapping + CTA Routing (Week 3-4)

### 3A. Personalized Contact Flow

When a visitor clicks "Schedule an Assessment" and we know their vertical, pre-select their industry on the demo form. Small touch, big signal that we understand them.

### 3B. Solution Grid Reordering

The `/solutions/` page shows 22 solutions in a fixed grid. When we know the vertical, **reorder to show relevant solutions first.** The content collection already maps solutions to industries — we just need to sort client-side.

### 3C. Insight/Blog Filtering

Surface blog posts and insights tagged with the visitor's industry at the top of the `/insights/` page.

### 3D. Navigation Hints

In the industry dropdown nav, subtly highlight (bold, dot indicator) the detected vertical so the visitor knows "we see you."

---

## Phase 4: Measurement + Iteration (Ongoing)

### What to Track

Before personalization means anything, we need baseline analytics. The site currently has **no event tracking beyond RB2B.** We need to add:

- **Page views by vertical** (how many energy visitors vs. defense vs. unknown)
- **CTA click-through rate** by vertical (personalized vs. default)
- **Conversion rate** (demo requests) by vertical
- **Content engagement** (scroll depth, time on page) by vertical
- **Personalization hit rate** (% of visitors we successfully identify an industry for)

Recommend adding a lightweight analytics layer (Plausible, Fathom, or GA4 with custom dimensions for `q_vertical`).

### Success Metrics

| Metric | Baseline (now) | Target |
|---|---|---|
| Personalization coverage | 0% | 40-60% of visitors identified to a vertical |
| Homepage → Demo conversion | Measure first | +25% for personalized vs. default |
| Avg. pages per session | Measure first | +15% for personalized visitors |
| Bounce rate (homepage) | Measure first | -20% for personalized visitors |

---

## What We're NOT Doing (Yet)

- **Individual-level personalization** — No "Hi Jonathan from Quatro" stuff. That's creepy and unnecessary at this stage.
- **Real-time chat triggers** — Could do "I see you're in energy — want to talk to an energy engineer?" but that's Phase 5.
- **Dynamic pricing or gating** — No content gates based on company size or revenue.
- **A/B testing framework** — We're not testing variants yet. First, prove that industry-aware messaging converts better than generic. Then test within verticals.

---

## File Inventory (What Gets Built)

```
New files:
  netlify/functions/rb2b-webhook.ts        — Webhook receiver + industry mapper
  netlify/edge-functions/personalize.ts    — Cookie/header injection at the edge
  src/scripts/personalize.ts               — Client-side content swapper (~2KB)
  src/data/industry-mapping.ts             — RB2B industry → Quatro vertical map
  src/data/personalization-content.ts      — Hero/CTA/stat variants per vertical

Modified files:
  netlify.toml                             — Edge function routing config
  src/layouts/BaseLayout.astro             — Inline personalization bootstrap
  src/pages/index.astro                    — Hero, industry section, xOps with data-vertical variants
  src/pages/contact/demo.astro             — Pre-selected industry field
  src/components/marketing/Hero.astro      — Support for variant rendering
```

---

## Sequencing Summary

| Phase | What | When | Effort |
|---|---|---|---|
| **1** | Webhook + Edge Function + Cookie | Week 1-2 | Backend only, no visible changes |
| **2** | Homepage hero/CTA/proof point personalization | Week 2-3 | Visible impact, biggest ROI |
| **3** | Solution reordering, nav hints, form pre-fill | Week 3-4 | Refinement layer |
| **4** | Analytics + measurement baseline | Parallel | Required to prove value |

---

## Open Questions

1. **RB2B webhook configuration** — Is the webhook already set up in RB2B's dashboard, or does that need to be configured? What's the current integration (Slack only?)?
2. **Netlify plan** — Edge Functions and Blobs require Netlify Pro or above. What plan is the site on?
3. **Analytics** — Is there a preferred analytics tool, or should we pick one?
4. **Content approval** — The hero/CTA variants per vertical already exist in the content collections. Should we use those directly, or does Jonathan want to write custom homepage-specific variants?
5. **LATAM traffic** — RB2B only does person-level for US. Company-level works internationally. Do we want Spanish-language personalization layered on top of vertical personalization for Ecuador/LATAM visitors?
