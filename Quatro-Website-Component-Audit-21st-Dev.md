# Quatro Website — Component Audit & 21st.dev Upgrade Recommendations

**Date:** March 30, 2026
**Scope:** Critical review of current quatro.io homepage component library against B2B enterprise best practices, with specific 21st.dev community component recommendations for each gap.

---

## Current Site Assessment

### What's Working Well

The homepage has strong editorial bones. The **Palantir-style vertical list** (Pattern B) used for the Platform tiers and Industries sections is genuinely excellent — the oversized type with hover color transitions feels premium and confident. The **Problem Statement narrative** ("At 2:47 AM, a pressure anomaly fires on pipeline segment 47...") is one of the best pieces of B2B storytelling on the site. The hero with its status badge, trust metrics bar, and dual CTAs follows solid enterprise landing page conventions. The nav pill with scroll-driven dark-to-light transition is polished.

The design language — light background, forest green accent, mono-spaced labels, structured grid with sidebar labels — creates an institutional, Palantir-adjacent aesthetic that's appropriate for the audience.

### Critical Problems

**1. Pattern Monotony — The Same Grid Repeated 4 Times**

The sidebar-label + 3-column card grid (Pattern A) appears in: Regional Presence, Data Sovereignty, Why Quatro (6 cards), and implicitly in any future section using this template. By the third instance, the user has pattern-fatigued. Each section looks the same — numbered card, bold title, short description. The visual rhythm becomes predictable and the page loses the editorial tension that makes the Platform and Industries sections compelling.

**2. No Social Proof Layer**

The site has zero logo clouds, zero partner badges, zero "trusted by" signals beyond the small trust metrics in the hero (8,000+ integrations, 1,000+ vendors). For a B2B enterprise platform selling to oil companies and government agencies, this is the single biggest conversion gap. Enterprise buyers scroll looking for recognizable logos. There are none.

**3. No Testimonials on Homepage**

A `TestimonialSection.astro` component exists in the codebase but is not used on the homepage. For a company asking enterprises to schedule assessments and commit to 4-week pilots, social proof from named humans at named companies is essential.

**4. Static Hero in a Category That Demands Motion**

The hero uses a static background image. Competitors in operational intelligence (Palantir, Seeq, OSIsoft/AVEVA, C3.ai) use animated data visualizations, particle systems, or subtle shader backgrounds to signal "this platform is alive and processing." The current hero feels like a poster, not a product.

**5. No Visual Differentiation Component**

There's no "before/after," "us vs. them," or comparison component anywhere. For a platform that displaces manual workarounds and disconnected SCADA systems, showing the contrast is a massive missed opportunity.

**6. No Process/Timeline Visualization**

The Connect → Operate → Command progression is the core product story, but it's presented as a flat vertical list. There's no visual indication of progression, no animated timeline, no step-by-step reveal. The architecture deserves better.

**7. Missing Metrics/Stats Section**

The trust metrics (8,000+ integrations, etc.) are buried at the bottom of the hero. There's no dedicated, full-width stats section that creates the "wall of proof" enterprise sites need.

**8. Unused Marketing Components**

Several sophisticated components exist in `/src/components/marketing/` — `BentoUseCases`, `FeatureShowcase`, `IndustryShowcase`, `EditorialCapability` — but none appear on the homepage. They're built for a lighter, more SaaS-y design language and haven't been adapted to the current editorial dark/light system.

---

## 21st.dev Component Recommendations by Gap

### Inventory Reviewed

From 21st.dev's community component library, I reviewed the following categories:

- **Heroes** — 284 components (73 in Marketing Blocks)
- **Features** — 102 components (36 in Marketing Blocks)
- **Clients/Logo Clouds** — 28 components (16 in Marketing Blocks)
- **Comparisons** — 6 components
- **Testimonials** — 42 components (15 in Marketing Blocks)
- **Pricing Sections** — 17 components
- **CTAs/Calls to Action** — 34 components
- **Tabs** — 38 components
- **Accordions** — 40 components
- **Scroll Areas** — 24 components
- **Navigation Menus** — 11 components
- **Footers** — 14 components
- **Numbers** — 18 components

---

## TIER 1 — High Impact (Add These Immediately)

### 1. Logo Cloud / Social Proof Bar

**Gap:** No partner or client logos anywhere on the page.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Logo Cloud 3** | 589 | Most popular. Clean horizontal layout with grayscale logos and subtle animation. Adapts well to dark sections. |
| **Logo Cloud 4** | 316 | Scroll-animated variant. Logos enter on scroll. Higher visual energy. |
| **Logo Cloud 2** | 297 | Static grid with hover effects. Conservative, institutional feel — matches Quatro voice. |
| **Integrations Section** | 14 | Shows technology partnerships rather than client logos. Perfect for the 8,000+ integrations story. |

**Where to place it:** Immediately below the hero, before Regional Presence. This is the #1 highest-ROI change for the page.

**Adaptation notes:** Grayscale logos on the light paper background, with the sidebar-label "Trusted By" or "Partners" treatment to stay consistent with the editorial grid system. Can also be placed in the dark "Why Quatro" section with white logo variants.

**URLs:**
- https://21st.dev/community/components/s/clients
- Search for: `Logo Cloud 3`, `Logo Cloud 4`, `Integrations Section`

---

### 2. Bento Grid for Platform Architecture

**Gap:** Three identical 3-column card grids create monotony. The platform architecture (Connect/Operate/Command) deserves a spatial, visual layout.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Bento Grid** (Aceternity) | 338 | The gold standard. Asymmetric card grid with different card sizes — perfect for showing Connect (large), Operate (medium), Command (medium) with visual hierarchy. |
| **Feature Section with Bento Grid** (Aceternity) | — | Full section wrapper around bento cards. Includes heading, subheading, and the grid. Drop-in ready. |
| **SUCPU Architecture** | 308 | Specifically designed for showing system architecture layers. Extremely relevant for Connect → Operate → Command. |
| **Cybernetic Bento Grid** | 4 | Dark-themed bento with a cybernetic/tech aesthetic. Closest to Quatro's visual language out of the box. |

**Where to place it:** Replace one of the three Pattern A grid sections (Data Sovereignty is the best candidate) with a bento layout. Alternatively, add as a new section between Platform and Why Quatro to visualize the architecture.

**Adaptation notes:** Use `--color-forest` accent on hover states. Cards should follow the existing editorial approach — mono label, display heading, sans body text. No icons in circles (per the anti-pattern rules in the design system).

**URLs:**
- https://21st.dev/community/components/s/bento-grid
- https://21st.dev/community/components/aceternity/bento-grid

---

### 3. Animated Hero Background

**Gap:** Static hero image doesn't signal "living platform" the way competitors do.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Background Paths** | 619 | Animated SVG path lines flowing across the hero. Evokes data flowing through infrastructure. High save count = battle-tested. |
| **Hero section with smooth bg Shader** | 548 | WebGL shader that creates ambient motion. Subtle, premium, doesn't distract from the headline. |
| **Halide Topo Hero** | 522 | Topographic/contour line animation. Perfect for an infrastructure/pipeline company — literally looks like terrain mapping. |
| **Cinematic landing Hero** | 414 | Full-bleed cinematic feel with animated elements. Matches the "operational intelligence" gravitas. |
| **Wireframe Dotted Globe** | 795 | Animated globe made of dots/wireframe. Strong for companies with regional/global positioning (Quatro's LATAM story). |
| **PSScroll Morph Hero** | 1,300 | Most-saved hero on 21st.dev. Scroll-driven morphing effect. Very high visual impact. |

**Where to place it:** Replace or layer behind the existing hero background image. The `connect.png` graphic and gradient overlay can remain — just add a subtle shader or animated path behind them.

**Adaptation notes:** Performance is critical. These are WebGL/canvas effects — test on mobile and lower-end devices. The shader should be barely perceptible, creating "alive" ambiance rather than a focal distraction. Kill it on mobile if FPS drops.

**URLs:**
- https://21st.dev/community/components/s/hero
- Search for: `Background Paths`, `Halide Topo Hero`, `Wireframe Dotted Globe`

---

### 4. Stats / Metrics Section

**Gap:** Trust metrics are buried in the hero footer. No dedicated proof section.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Featured Section Stats** | 15 | Large number + label pairs in a grid. Clean, editorial. |
| **Ruixen Stats** | 15 | Similar pattern with animation on scroll. Numbers count up when they enter viewport. |
| **Numbers** (category) | 18 components | Full category of animated number/counter components. Pick one that does count-up animation. |

**Where to place it:** Between the Problem Statement and Data Sovereignty sections. After painting the pain, hit them with the proof: "8,000+ integrations. 1,000+ vendors. Weeks to deploy. 60× faster SLA visibility."

**Adaptation notes:** Use the existing sidebar-label pattern with "Proof" or "By the Numbers" as the sidebar. Large numbers in `font-display` at 5xl+, forest green. Labels in mono uppercase. No boxes around the numbers — just big type on the page.

---

### 5. Testimonials on Homepage

**Gap:** Social proof from actual humans is completely absent.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Testimonials Columns** | 470 | Multi-column scrolling testimonial layout. Most popular testimonial component. |
| **Retro Testimonial Carousel** | 44 | Single testimonial at a time with navigation. More controlled, works well for fewer quotes. |
| **Customers Section** | 56 | Combines customer logos with testimonials. Two-in-one social proof. |

**Where to place it:** Between "Why Quatro" and "Industries" — after you've made the case for the platform, let someone else validate it.

**Adaptation notes:** For now, even placeholder testimonials from Esteban or Paul about platform capabilities would be better than nothing. Long-term, collect quotes from OCP, Puntonet, or pilot clients. Use the dark section treatment (white text on dark bg with dark overlay image) to create visual contrast.

---

## TIER 2 — Medium Impact (Improve Existing Patterns)

### 6. Feature Carousel / Progressive Disclosure for Platform Tiers

**Gap:** The Connect/Operate/Command vertical list is effective but doesn't let users go deeper without navigating away.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Feature Carousel** | 403 / 415 | Two variants. Horizontal carousel with expandable cards showing feature details. Click to reveal more. |
| **Animated Feature Carousel** | 107 | Same concept with entrance animations. |
| **Sticky scroll cards section** | 16 | Cards stack/reveal as you scroll. Each platform tier gets a "page" that scrolls into view. |
| **Feature Accordion Section** | 5 | Accordion-style progressive reveal. Click Connect → see capabilities. Click Operate → see capabilities. |

**Where to place it:** Consider replacing or augmenting the current Pattern B vertical list for the Platform section. Keep the big typography but add expand/reveal interactions.

---

### 7. Scroll-Driven Animations

**Gap:** The page has basic scroll-reveal (`.fade-up`, `.reveal`) but nothing that makes the scroll experience itself feel intentional.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Scroll media expansion hero** | 541 | Media element expands from small to full-width as you scroll. Could work for a product screenshot. |
| **PSScroll Morph Hero** | 1,300 | Scroll-morphing text/shapes. Extremely popular. |
| **Stacked Panels** | 142 | Interactive cursor-driven stacked panels. |
| **Text Parallax Content (scroll)** | 71 | Text elements parallax at different speeds. Adds depth. |
| **Zoom Parallax** | 8 | Elements zoom as you scroll. Creates cinematic depth. |

**Where to place it:** Apply to the transition between hero and first section, and optionally to the Platform section where each tier could scroll-reveal with a product visual expanding into view.

---

### 8. Comparison / Before-After Component

**Gap:** No "us vs. them" differentiation.

**21st.dev picks:**

From the **Comparisons** category (6 components) — these are purpose-built before/after or feature comparison components.

**Where to place it:** After the Problem Statement. The narrative sets up "fifteen screens, manual workarounds, reactive response" — then the comparison component shows the contrast: "Without Quatro" (fragmented) vs. "With Quatro" (unified).

---

### 9. Timeline / Process Visualization

**Gap:** Connect → Operate → Command has no visual progression metaphor.

**21st.dev picks:**

| Component | Saves | Why It Fits |
|---|---|---|
| **Radial Orbital Timeline** | 566 | Orbital/circular timeline with animated dots. Very high save count. Could visualize the three tiers as orbital stages. |
| **Timeline** (nyxbui) | — | Standard vertical timeline. Clean, simple. |

**Where to place it:** Could replace or supplement the Platform section's vertical list. Alternatively, use as a "How It Works" section that precedes the Platform details.

---

## TIER 3 — Polish

### 10. Navigation Mega-Menu

The current nav with dropdowns is functional. Consider reviewing the **Navigation Menus** (11 components) category for mega-menu patterns that could better showcase the depth of the platform, industries, and solutions pages without requiring users to navigate blind.

### 11. CTA Section Enhancement

The current final CTA is solid but conventional. The **Calls to Action** category (34 components) has more visually dramatic options — consider a split CTA (Assessment on left, Talk to Engineer on right) or a CTA with an embedded product visual.

### 12. Footer

The current footer is well-structured. No urgent changes needed, but the **Footers** category (14 components) may have options with better mobile layouts.

---

## Implementation Priority Matrix

| Priority | Change | Effort | Impact |
|---|---|---|---|
| **P0** | Add Logo Cloud below hero | Low — one new component | Very High — fills biggest trust gap |
| **P0** | Add Stats/Metrics section | Low — restyle existing hero metrics | High — dedicated proof section |
| **P1** | Add Testimonials section | Medium — need content + component | High — social proof from humans |
| **P1** | Add animated hero background | Medium — shader integration + perf testing | High — signals "living platform" |
| **P1** | Replace one Pattern A grid with Bento | Medium — new layout component | Medium-High — breaks monotony |
| **P2** | Add Comparison component | Medium — need "before/after" content | Medium — sharpens differentiation |
| **P2** | Add scroll-driven animations | Medium — integrate scroll library | Medium — polish and engagement |
| **P2** | Feature carousel for Platform tiers | Medium — interaction design | Medium — depth without navigation |
| **P3** | Timeline for Connect/Operate/Command | Low-Medium | Low-Medium — nice-to-have |
| **P3** | Navigation mega-menu | Medium | Low — current nav works fine |

---

## Summary

The Quatro homepage has strong editorial foundations — the Palantir-style vertical lists, the narrative problem statement, and the sidebar-label grid system are genuinely good patterns. But the page suffers from three structural weaknesses that 21st.dev components can directly address:

1. **No social proof** — add Logo Cloud + Testimonials (this is the single highest-ROI change)
2. **Pattern repetition** — replace one of the three identical 3-col grids with a Bento layout
3. **Static feel** — add a subtle animated hero background and scroll-driven reveals

The 21st.dev library's strongest offerings for Quatro are in the **Clients** category (Logo Clouds), **Features** category (Bento Grids, Carousels), and **Heroes** category (Background Paths, Halide Topo, Wireframe Globe). These are battle-tested React/Tailwind components that can be adapted to Astro with minimal effort.

The goal isn't to add more sections — it's to replace the weakest patterns with stronger ones, and fill the two critical gaps (logo cloud and testimonials) that enterprise buyers expect to see before they'll click "Schedule an Assessment."
