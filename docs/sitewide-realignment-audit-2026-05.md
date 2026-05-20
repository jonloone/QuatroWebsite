# Site-wide Positioning Realignment Audit

> **SUPERSEDED (2026-05-19):** This audit reflects the operator-pain-anchored pass from May 18. The positioning vocabulary in some sections (intelligence utility, intelligence network, systems integrator of intelligence, cyberphysical intelligence) was derived from in-conversation synthesis and has since been retired. The canonical positioning is now in `/QUATRO-POSITIONING-V2-CANONICAL.md` — read that first. The operator-pain industry/solution headlines documented in this audit are still good and remain in effect; only the positioning category language (homepage hero, About, Partners, Technology, FAQ) has been re-aligned to the May 15 canonical (`industrial AI integrator for the Americas` + `the intelligence stack`).

**Date:** 2026-05-18
**Predecessor:** [Industry Headline Audit](./industry-headline-audit-2026-05.md) — the first pass that established the standard
**Scope of this pass:** Homepage, nav/footer chrome, all 5 utility pages, solutions index + solution detail pages, about/partners/contact, sample use-case markdown, sample framework hub messaging docs
**Standard applied (with judgment, not law):** Operator-as-grammatical-subject, Quatro-as-guide, no banned vocabulary (`empower`/`enable`/`power`/`unlock`/`delve`/`tapestry`/`pivotal`/`testament`/`genuinely`/`straightforward`), no em-dash connective tissue, no rhetorical tricolons, StoryBrand grunt test on hero H1s where possible, BrandScript-style one-liner above the fold.

---

## The big finding

The site has a **systemic templating pattern** for product H1s — "Verb. Verb. Verb." (or "Noun. Noun. Noun.") — that recurs across industries, solutions, and the homepage. The first audit pass killed 6 of these on industry pages. This pass found and killed another **8 of them on solution detail pages**, plus the homepage's "connected, powered, and safe" tricolon. The pattern is so consistent it looks like a writing-template decision made early and propagated. Most of it has now been replaced with operator-action-plus-stakes H1s.

Second pattern: **"Powered by" / "powering" / "AI-powered"** appears in the xOps page and the utility index. Memory explicitly bans this vocabulary because it makes Quatro the actor instead of the operator. Fixed in the rhetorical uses (e.g., "xOps engine that powers the application layer" → "runs the application layer"). Kept in standard partner-attribution labels (e.g., the literal "Powered by DataMiner" credit strip) since that's an industry convention buyers expect.

Third pattern: **"Unlock automatically"** appears three times in `what-you-get.astro`. Banned vocabulary. Replaced with "surface automatically."

Fourth pattern: **Em-dash as connective tissue** is everywhere — partners page had 15+ instances, utility pages had 10+, homepage had 8. Most were trivially convertible to periods or commas without losing meaning.

---

## What changed in this pass

### Homepage (`src/pages/index.astro`) — 17 edits

The single most-visited surface on the site. Big lift here.

**Meta description**
- Before: "We integrate the hardware, software, and domain expertise that energy, defense, network, and infrastructure operators need — delivered as a utility, built so you own the intelligence from day one."
- After: "We connect the systems your operators already run into one operational model your team owns from day one. Built for energy, defense, network, and infrastructure operators who can't pause to try a new tool."

**Hero subhead**
- Before: "We connect your physical systems and your data systems into one operational model — so your team sees, decides, and acts from a single source of intelligence."
- After: "We connect your physical systems and your data systems into one operational model. Your team works from a single source of intelligence, owned and extended by the people who already run the operation."

**Industries section H2**
- Before: "Operational intelligence for the industries that keep communities **connected, powered, and safe**."
- After: "Operational intelligence for the industries **communities depend on every day**."
- Note: killed the tricolon AND the banned "powered" — single biggest violation on the homepage.

**Four industry row descriptions** (Energy, National Security, Networks, Cities)
- All rewrites moved from em-dashed/tricoloned summaries to short declaratives. Networks now namechecks the Teleport Technology of the Year 2026 award; Cities now leads with "Citizens experience one city."

**Structural Problem section**
- Killed the "consultants...hand you a roadmap — not intelligence" em-dash antithesis.
- Killed the "hardware, software, and the operational workflows your people depend on" em-dash tricolon. Replaced with three short sentences.

**Differentiator panel H3 + body**
- "Hardware, software, and people — integrated." → "Hardware, software, and the people who run them."
- Panel 1 body now reads as five staccato declaratives instead of one comma-chained sentence.

**Process step alignment** (the biggest brand-consistency fix on the homepage)
- Homepage said **Connect. Model. Act.**
- Industry pages all said **Connect. Understand. Act.**
- The site was internally inconsistent on its own three-step plan. Aligned the homepage to Connect/Understand/Act since (a) industry pages are 9 surfaces using it, and (b) "Understand" is more operator-centered than "Model" (operator understands; Quatro builds the model behind the scenes).
- Updated the Phase 2 H3 from Quatro-as-subject ("We create the governed operational model from your data") to operator-as-beneficiary ("Your data becomes a governed operational model your team can trust").

**POV stories** (4 narratives)
- All four had em-dashes embedded in the body copy. Trimmed each to staccato declaratives.
- "What This Looks Like" H2 — "It's a system that thinks" → "It's the model your team thinks with." (Operator as the implicit subject of *think*, per StoryBrand.)

**Closer H2**
- Removed the em-dash from "If your infrastructure serves the communities we care about — let's talk." → "...communities we care about, let's talk."

---

### Site chrome — 2 edits

**`src/lib/navigation.ts`** (English primary nav)
- Networks dropdown: "Ground to orbit — unified connectivity operations" → "Ground to orbit on one operational view"
- Cities dropdown: "Water, waste, safety — one operational picture" → "Water, waste, and safety on one operational picture"
- Capabilities dropdown: "What your team gets — visibility, prediction, governed action" → "What your team gets from the operational model"
- Energy dropdown: tightened from "Grid, pipeline, and production intelligence" to "Grid, pipeline, and production on one operational model"

**Footer** (`SiteFooter.astro` + `i18n.ts`)
- Already clean. Footer tagline "Operational intelligence for critical infrastructure" needs no change.

**Spanish nav** — left untouched in this pass (translation work warrants its own review).

---

### Utility pages — ~22 edits across 5 files

**`utility/index.astro` (The Intelligence Utility)** — 6 edits
- Meta description em-dash chain rewritten as two clean sentences
- Hero body same fix
- Editorial outcome: "the problem isn't the data — it's that..." → "the problem isn't the data. It's that..."
- Section header "What powers it" → "What runs underneath" (per banned-vocab rule)
- Layer-3 description: "trained on industry data flowing through the utility — not generic AI" → comma version
- Cloud deployment bar em-dash trimmed
- Integrations body: "Powered by the largest..." → "Built on the largest..."

**`utility/xops.astro`** — 6 edits, including the biggest violation cluster on the site
- Meta title: "xOps — Adaptive Operations Powered by Your Data" → "xOps — Adaptive Operations Built From Your Data"
- Meta description: removed two banned "power" instances ("AI-powered operations suite" and "Power action from")
- Hero body: removed "AI-powered" and "powered by DataMiner" (kept the literal partner credit "Powered by DataMiner" in the trust strip lower down — that's a partner-attribution idiom, not rhetoric)
- Editorial outcome body: removed em-dash antithesis "not how a vendor decided they should"
- Capability name: "AI-Powered Intelligence" → "Intelligence Agents"
- Partner trust paragraph: "the xOps engine under the hood — the operational model that...powers the adaptive application layer" → "...runs the adaptive application layer"

**`utility/technology.astro`** — 4 edits
- Meta description em-dash trimmed
- Hero body em-dash + "and your team pays the price" antithesis rewritten
- "Three separate worlds — the gaps become invisible" → "...worlds, the gaps become invisible"
- "Lost power — or a satellite has already missed its window" → "...lost power, or a satellite..."
- "Open-source foundations — the same technologies that power the largest data platforms" → "...foundations, the same technologies that run the largest data platforms"

**`utility/what-you-get.astro`** — 8 edits
- Delivery mechanism descriptions rewritten — three em-dashes + "unlock automatically" + "AI-powered intelligence" capability mention all fixed
- Example outputs em-dashes trimmed
- "What powers the output" eyebrow → "What runs underneath"
- Editorial outcome: "intelligence flywheel — and it's real today" → "...flywheel, and it's real today"
- CTA: "Workflows, agents, automations, and APIs — all from day one" → "...APIs. All from day one"

**`utility/how-it-starts.astro`** — 3 edits
- Step 3 description: "semantic data product — purpose-built" → comma version
- Step 4 description: "static dashboards — it generates" → period split; "unlock automatically" → "surface automatically"
- Editorial outcome: "starts the same way — with the outcome" → "...way, with the outcome"

---

### Solutions index + 9 solution detail pages

**`solutions/index.astro`** — 2 edits
- Hero body em-dash trimmed
- "Flexibility" section: "same integration architecture — 8,000+ connections" → comma version

**9 solution H1 rewrites** (the big find)
- All used the "Verb. Verb. Verb." tricolon pattern that `jonathan-voice` bans. Identical templating issue as the industry pages.

| Solution | Before | After |
|---|---|---|
| Corridor Intelligence | Optimize Flow. Detect Incidents. Secure Corridors. | See the Corridor Incident in Under a Minute, Reroute Before Traffic Backs Up. |
| Environmental Compliance | Monitor Every Source. Report Every Event. Prove Compliance. | Compliance Evidence the Regulator Accepts Without Your Team Assembling It by Hand. |
| Airport Operations | Optimize Runways. Flow Passengers. Secure Perimeters. | Predict Gate Availability Before the Aircraft Lands. |
| Network Operations | One NOC. Any Vendor. Zero Silos. | See Every Vendor in Your Network From One NOC View. |
| Water Systems | See Every Pipe. Detect Every Leak. Prevent Every Loss. | Find the Leak in the Specific Pipe Segment Before Pressure Drops at the Tap. |
| Customer 360 | One Customer. All Systems. One Governed View. | One Governed Customer Record Your Risk Team Can Actually Trust. |
| Port Operations | Optimize Berths. Coordinate Cargo. Accelerate Customs. | Assign Berths Seventy-Two Hours Ahead, Stop Ships Waiting at Anchor. |
| Environmental Governance | Monitor. Attribute. Prove. | Prove Environmental Compliance From the Sensor Reading to the Regulatory Filing. |
| Regulatory Compliance | Compliance That Runs Continuously — Not Once a Quarter. | Compliance Evidence That Assembles Itself Between Audits. |

Customer 360 also had its tagline + description rewritten to match.

---

### About / partners / contact — 13 edits

**`company/about.astro`** — 3 edits
- Meta description em-dash tricolon rewritten
- Hero description em-dash trimmed
- Mission paragraph: "We integrate across three dimensions — hardware at the edge, software that connects and governs, and the domain expertise that makes intelligence operational — so nations and industries own the intelligence from day one." → broken into 5 staccato declaratives.

**`partners.astro`** — 13 edits
- Meta description em-dash chain rewritten
- Hero subhead em-dash chain rewritten
- "The Model" section body em-dash trimmed
- Six "stack" inline descriptions (IoT suite, semantic layer, pre-built models, GTM support, training, commercial) — all em-dashes converted to periods or commas.
- "How We Work Together" sections (deployment + ongoing) — em-dashes trimmed.
- "Editorial photo break" — em-dash trimmed.
- Three "Ideal Partner" personas — em-dashes trimmed.
- Globe section body — em-dash trimmed.
- Sovereignty close: "Sovereign data, sovereign operations, sovereign outcomes — delivered by a partner they trust in their own market." → "Sovereign data. Sovereign operations. Sovereign outcomes. Delivered by a partner they trust in their own market."

**`contact/*.astro`** — no edits
- All clean. The only em-dashes are in standard page-title separators ("Title — Quatro") which is normal branding convention.

---

### Use cases (14 files) — 2 targeted edits

Mostly clean. Use-case H1s use descriptive noun-phrase titles (e.g., "Predictive Maintenance for Production Assets") which avoid the tricolon trap. Two specific fixes:

- `noc-operations.md` tagline: "One NOC. Any Vendor. 80% Fewer False Alarms." (tricolon) → "One NOC view across every vendor, 80% fewer false alarms."
- `environmental-compliance-energy.md` tagline + description: "Three Compliance Streams. One Operational Data Layer." (tricolon) + em-dash chain → rewritten as declarative tagline plus comma-split description.

---

## What was intentionally left alone

These are deliberate calls per the user's "guidance, not law" directive.

**"Powered by [partner]" attribution strips** — industry convention. Kept on `utility/xops.astro` ("Powered by DataMiner" label on the partner credit). Replacing this with "Built on" would read as fussy when the partner page itself uses "Powered by" as standard.

**"Not a consultant. Not a platform. An integrator." (homepage differentiator H2)** — this is the company's actual core positioning articulation. It IS a "not X, not Y, but Z" construction that `jonathan-voice` flags. But StoryBrand explicitly endorses brand-vs.-alternatives framing as one of the strongest differentiator patterns. Kept as-is because the rhetorical pattern serves the positioning, not the other way around.

**"Connect. Understand. Act." (process plan, all surfaces)** — this is a tricolon, but `jonathan-voice` targets *rhetorical narrative tricolons in body copy*, not three-step plan labels. StoryBrand explicitly wants a three-step plan and gives every brand permission to name three steps. Kept.

**Use-case noun-phrase titles** ("Mining & Remote Asset Operations," "Pipeline Integrity & Leak Detection," etc.) — these are functional product names, not rhetorical headlines. Operator can grok them in 2 seconds. Kept.

**Insights articles** — explicitly out of scope. The article titled "Why Operational Intelligence Needs an Integrator — Not Another Platform" uses the banned em-dash + "not" construction, but editorial articles get more voice latitude than product surfaces.

---

## What's queued for the next pass

These surfaces weren't fully edited in this pass and would benefit from a follow-on review.

**Spanish locale (`/src/pages/es/*` + `/src/content/*-es/*`)** — All EN copy edits have ES counterparts that are now out of sync. The ES industry hero translations, nav descriptions, and solution H1s still carry the old tricolon and em-dash patterns. This is its own translation project. Highest priority: ES hero H1s and ES nav.

**The 22 solution detail pages — body copy below the hero**. This pass fixed the 9 H1s but didn't go through each solution's challenges, capabilities, and proof point copy. Pattern guess: they share the same em-dash density as the partners page. A 30-minute pass per solution file would tighten them all.

**14 use-case detail pages — body copy below the hero**. Same as above. Mostly clean at the title level, but the bodies likely have the same em-dash habit.

**Framework messaging docs (`src/content/verticals/**/*.md`)** — these are *internal messaging frameworks*, not rendered web pages. They contain proposed copy like "One Utility. Every Orbit. Total Assurance." (tricolon) that would land on the live site if implemented as-is. Either delete these docs (the live industry pages have superseded them) or update them so future implementations don't recreate the old pattern.

**Insights articles (~20 files)** — explicitly out of scope, but the title "Why Operational Intelligence Needs an Integrator — Not Another Platform" is the kind of editorial that gets used as social copy and should probably be rewritten if the article is being re-promoted.

**Component-level defaults** — HeroCanvas, DualCta, EditorialOutcome, IndustryHubCard, etc. None of them carry hard-coded copy that violates the rules in this pass, but if you ship new pages without explicit overrides, defaults inside the components are worth a one-time audit.

**Resources pages (`/src/pages/resources/*`)** — `documentation.astro`, `insights.astro`, `white-papers.astro`, `index.astro`. Quick scan said they have minimal positioning copy, but they weren't edited in this pass.

**Leadership / news / careers** — `company/leadership.astro`, `company/news.astro`, `company/careers.astro`. Not touched. Leadership and news are typically biographical/factual and need a different voice register from product copy. Careers is its own employer-brand surface.

---

## Files changed in this pass

```
src/pages/index.astro                                          17 edits
src/lib/navigation.ts                                           2 edits
src/pages/utility/index.astro                                   6 edits
src/pages/utility/xops.astro                                    6 edits
src/pages/utility/technology.astro                              4 edits
src/pages/utility/what-you-get.astro                            8 edits
src/pages/utility/how-it-starts.astro                           3 edits
src/pages/solutions/index.astro                                 2 edits
src/pages/company/about.astro                                   3 edits
src/pages/partners.astro                                       13 edits
src/content/solutions/corridor-intelligence.md                  1 edit
src/content/solutions/environmental-compliance.md               1 edit
src/content/solutions/airport-operations.md                     1 edit
src/content/solutions/network-operations.md                     1 edit
src/content/solutions/water-systems.md                          1 edit
src/content/solutions/customer-360.md                           1 edit
src/content/solutions/port-operations.md                        1 edit
src/content/solutions/environmental-governance.md               1 edit
src/content/solutions/regulatory-compliance.md                  1 edit
src/content/use-cases/noc-operations.md                         1 edit
src/content/use-cases/environmental-compliance-energy.md        2 edits

Total: 21 files, ~75 edits
```

No template, route, layout, or component logic changes. Pure copy edits, so zero build-time risk.

---

## The standard (now applied across the site)

Captured here so future writes don't need to re-derive it from memory and skill files.

1. **Operator is the grammatical subject of action verbs.** "Your operators see," "your NOC checks," "your dispatcher coordinates." Quatro is the guide. Quatro connects, integrates, delivers, runs underneath.
2. **No rhetorical tricolons in headlines or body.** "Verb. Verb. Verb." and "X. Y. Z. {payoff}" patterns are banned. Three-step plans (Connect. Understand. Act.) and short stat strips are fine — they're labels, not rhetoric.
3. **No em-dash as connective tissue.** Em-dashes for parenthetical asides are OK. Em-dashes as the connector between two clauses where a period would work are not.
4. **No "not X, Y" antitheses** unless the construction *is* the positioning (the homepage "Not a consultant. Not a platform. An integrator..." stays because that's the literal differentiator).
5. **Banned vocabulary:** `empower`, `enable`, `power`/`powered`/`powering`, `unlock`, `delve`, `landscape`, `tapestry`, `pivotal`, `underscore`, `testament`, `genuinely`, `honestly`, `straightforward`. Exception: "Powered by [Partner]" as a literal credit strip is industry-standard and stays.
6. **StoryBrand grunt test on every hero H1.** A visitor should grok what you sell, how life improves, and what to do next within five seconds. Pure-pain H1s ("$125,000 an hour disappears...") need an action verb that puts the operator on the winning side ("Catch the failure before $125,000 an hour walks out the door").
7. **BrandScript one-liner in the hero body** when the H1 is empathy-only. Formula: "Quatro connects [X], so [operator] [outcome]."
