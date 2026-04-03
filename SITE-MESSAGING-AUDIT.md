# Quatro Website — Full Messaging Audit

**Date:** April 1, 2026
**Scope:** Homepage, industry pages, product tier pages, solution pages, content files
**Lenses:** Fusion messaging framework (aligned April 1), StoryBrand, Global System Integrator (GSI) positioning best practices, landing page frameworks skill

---

## Executive Summary

The Quatro site is strong on voice, visual identity, and industry routing. But it has five structural messaging problems that the fusion framework exposes — plus several misalignments with StoryBrand principles and GSI positioning practices. Most issues are concentrated in two areas: the homepage Network section (which we already knew was wrong) and the product tier pages (See / Understand / Orchestrate), which encode the exact "sequential capability upgrade" model we just agreed to kill.

---

## AUDIT 1: Fusion Framework Violations

### F-1. Homepage SVG Diagram — "WHEN YOU NEED MORE" (CRITICAL)

**Location:** `index.astro` line 223
**The problem:** The SVG diagram explicitly says "WHEN YOU NEED MORE" between the operational network and DataOS. This is the exact framing Jonathan rejected. It also names "DATAOS · ENTERPRISE INTELLIGENCE" in the diagram (line 227) — violating Decision 1 (DataOS is invisible to the buyer).

**Fix:** Replace entire two-layer SVG with a single unified network diagram. Remove all DataOS references. Remove "when you need more" connector.

### F-2. Homepage Two-Column Narrative — Two-Product Split (CRITICAL)

**Location:** `index.astro` lines 252-269
**The problem:** The narrative explicitly splits into "Operational Intelligence" (left column) and "Enterprise Intelligence · DataOS" (right column). This is a two-product presentation. The right column literally says "When the operational picture isn't enough... DataOS extends the network into enterprise intelligence." This is upgrade language.

**Fix:** Replace with single unified narrative. Two properties of one network — not two columns for two products. The compound value line goes here as a single sentence, per Decision 2.

### F-3. Product Tier Pages — Sequential Upgrade Model (HIGH)

**Location:** `src/content/products/see.md`, `understand.md`, `orchestrate.md`
**The problem:** These three content files encode the See → Understand → Orchestrate tier progression as sequential capability stages:
- See: "the foundation for AI-powered intelligence" (implies it's incomplete without the next tier)
- Understand: "Built on See" / "Everything in Visibility PLUS..." (explicit upgrade language)
- Orchestrate: "Everything in Operations PLUS..." (explicit upgrade language)

This directly violates Decision 5 (tiers = network depth, not capability stages). A buyer connecting their first intelligence service should get the full sensing-to-action loop — visibility, understanding, AND orchestration — for that domain. The current structure tells them they're on a starter plan.

**Fix:** Reframe these pages entirely. They could become descriptions of network depth rather than product tiers, or they could be absorbed into the industry/solution pages where the capabilities live in context. The "PLUS" language needs to go completely.

### F-4. Industry Pages — "8,000+ Connectors" Inconsistency (MEDIUM)

**Location:** `src/content/industries/energy.md` (line 25), `networks.md` (line 5, 10, 44)
**The problem:** Several industry pages still reference "8,000+ connectors" instead of "9,000+ integrations" (the updated number from Skyline's current site data). The homepage already uses 9,000+.

**Fix:** Global find-and-replace: 8,000+ → 9,000+ across all content files.

### F-5. Solution Pages — DataOS Product Name Leakage (MEDIUM)

**Location:** `src/content/solutions/fleet-health.md`, `satellite-revenue-assurance.md`, `space-domain-awareness.md`, `teleport-operations.md`
**The problem:** These solution names originate from the DataOS product catalog. Per Decision 3, intelligence capabilities should get Quatro-native service names disconnected from the DataOS product catalog. While the current names are generic enough that they don't obviously trace back to DataOS, the naming exercise hasn't been done yet — and some of these pages use `platformMapping` with See/Understand/Orchestrate tier references (fleet-health.md lines 48-51) that reinforce the sequential upgrade model.

**Fix:** Develop Quatro-native service naming (the first step in the implementation plan). Update `platformMapping` sections to remove tier-sequential language.

### F-6. Homepage Industry Descriptions — "Platform" Language (LOW)

**Location:** `index.astro` lines 98, 109, 120, 131, 142
**The problem:** Two industry descriptions use "platform" language:
- Networks: "One operations platform from ground to orbit"
- Finance: "Intelligence products that unify the 15–30 systems your bank already operates"

The Networks description says "platform" — we've agreed the framing is "network" or "intelligence network," not "platform." Finance actually gets it right with "intelligence products."

**Fix:** Networks description → something like "Unified operations from ground to orbit. Terrestrial, satellite, and hybrid connectivity in a single intelligence picture."

---

## AUDIT 2: StoryBrand Framework Analysis

StoryBrand's 7-part framework: Character (buyer) → Has a Problem → Meets a Guide (you) → Who Gives Them a Plan → Calls Them to Action → That Ends in Success → And Helps Them Avoid Failure.

### SB-1. The Hero Section — Strong, but Missing the External Problem (MEDIUM)

**Current:** "Systems That Think. People Who Build."
**StoryBrand assessment:** The H1 correctly positions the buyer as the hero ("People Who Build") and the platform as the tool ("Systems That Think"). This is textbook guide framing — the lightsaber, not the Jedi. The subhead names the buyer's desire (stop managing data, start building what's next).

**What's missing:** StoryBrand says the hero's problem has three dimensions — external (what's happening), internal (how it makes them feel), and philosophical (why it's wrong). The hero section nails the external (fragmented operations) but skips the internal frustration and the philosophical injustice. The Dark Editorial Bridge section (section 4) actually addresses this beautifully — "Three operators protect 133,000 km² of marine reserve" — but it's separated from the hero by two full sections.

**Recommendation:** Consider whether the editorial bridge belongs closer to the hero. In StoryBrand terms, the first three things the buyer should experience are: (1) "I see myself here" (hero, character), (2) "They understand my problem" (problem), (3) "They look like a credible guide" (authority + empathy). Right now the homepage goes: hero → industry routing → network section → THEN the emotional editorial bridge. The buyer gets the routing and the architecture before they get the emotional resonance. GSI sites like Parsons and Booz Allen lead with the emotional/mission framing before any product or solution content.

### SB-2. The Plan — Unclear (HIGH)

**StoryBrand says:** Give the buyer a simple 3-step plan that removes confusion about what to do next. The plan should be concrete, sequential, and easy to remember.

**Current state:** The homepage has no explicit plan section. The CTA says "Schedule an Assessment" and the bottom CTA says "Connect one system. Four weeks. Your infrastructure." — which is close to a plan but isn't presented as one.

**Recommendation:** Consider adding a simple 3-step plan somewhere between the Network section and the CTA:

1. **Connect** — Pick the system that costs you the most to operate. We connect it to the network.
2. **Prove** — Four weeks. Your infrastructure. Measurable results before you commit.
3. **Expand** — Each new service connects to every other through a shared intelligence foundation.

This maps perfectly to the fusion model AND the network-depth tier progression. Step 1 is the POV entry point. Step 2 is proof of value. Step 3 is the compound expansion story. Three steps. Easy to remember. Removes the buyer's confusion about "what do I do next?"

### SB-3. Success and Failure — Implied but Not Explicit (MEDIUM)

**StoryBrand says:** Paint the picture of what life looks like if the buyer acts (success) AND what happens if they don't (failure). Both are motivators — success inspires aspiration, failure creates urgency without manufacturing it.

**Current state:** The editorial bridge paints success vividly ("Three operators protect 133,000 km²... a grid engineer sees a cascade failure forty minutes before four million people lose power."). But failure is never named. What happens if the buyer does nothing? The industry pages name the challenges (legacy SCADA limitations, multi-vendor fragmentation, etc.) but the homepage doesn't synthesize a failure picture.

**Recommendation:** The Dark Editorial Bridge is the natural home for this. After the success stories, a single line could name the alternative: "Or the same systems stay disconnected, and the same decisions get made without the intelligence they deserve." Understated. Structural. Not fear-mongering. In line with the voice rules.

### SB-4. Guide Credentials — Missing Empathy Marker (MEDIUM)

**StoryBrand says:** The guide demonstrates two things: authority (we've done this before) and empathy (we understand what it feels like to be in your position).

**Current state:** Authority is strong — the proof metrics (9,000+, 1,000+, 125+, Weeks) signal credibility. But empathy is absent from the homepage. No line says "we understand the constraints you operate under." The editorial bridge comes closest with "Shift handoffs. Intermittent connectivity. Legacy equipment. Decisions that can't wait for a dashboard to load." — this is empathy, naming the buyer's daily reality. But it reads as context-setting, not as explicit "we understand."

**Recommendation:** This is subtle. One phrase could solve it. In the Network section or editorial bridge: "We built the network for the conditions your teams actually operate in — not the conditions a demo assumes." This positions Quatro as a guide who has been there, not just a vendor who has a product.

---

## AUDIT 3: Global System Integrator (GSI) Positioning Best Practices

Parsons, Booz Allen, Leidos, L3Harris, and SAIC all follow a positioning playbook for critical infrastructure. Quatro competes in this space (especially national security, energy, critical infrastructure) and should be evaluated against how these firms present themselves.

### GSI-1. Mission-First, Product-Never (HIGH)

**GSI pattern:** Leading integrators never lead with product. Parsons doesn't talk about their NMS platform. Booz Allen doesn't lead with their analytics engine. They lead with the mission: "national security," "resilient infrastructure," "critical systems modernization." Product is discovered during the conversation, not on the homepage.

**Quatro assessment:** The homepage hero and editorial bridge are mission-first — strong. But the Network section (section 3) pivots into product description ("9,000+ native integrations. Pre-built workflows for asset management, maintenance scheduling..."). This reads like a product page, not a mission page. The paragraph at line 164-166 is 60 words of feature listing.

**Recommendation:** Trim the Network section's feature language. Lead with what the network does for the mission, not what it contains. "Pre-built for the operational processes your industry already runs" is better than listing the processes. The proof metrics strip below handles the credibility. Let the features live on the platform page where the buyer is already in evaluation mode.

### GSI-2. Outcome Hierarchy, Not Capability Hierarchy (HIGH)

**GSI pattern:** Every GSI organizes their site by mission/outcome first, capability second. Parsons: Markets → Capabilities. Leidos: Markets → Solutions. They never lead with a product tier page (See / Understand / Orchestrate) — that's a technology vendor pattern, not an integrator pattern.

**Quatro assessment:** The site currently has BOTH `industries/` (outcome-organized) AND `products/` (capability-organized, tier-based). The industries routing is excellent — Energy, National Security, Networks, Critical Infrastructure, Finance. But the product tier pages (See / Understand / Orchestrate) position Quatro as a software vendor, not an intelligence partner. A VP of Grid Operations at an energy company will never say "I want to buy Quatro See." They'll say "I need to modernize my SCADA without replacing it."

**Recommendation:** Absorb the product tier pages into the industry and solution pages. The capabilities described in See, Understand, and Orchestrate already appear (better articulated) in the industry content files. The tier pages create a product-catalog mental model that competes with the mission-first industry routing. If the tiers need a home, put them on the platform page as depth descriptions — not as top-level navigation items.

### GSI-3. Case Studies as Proof of Mission Alignment (MEDIUM)

**GSI pattern:** Every GSI features 2-3 prominent case studies on the homepage — always anonymized to industry/mission ("a major defense agency," "a national grid operator"), always outcome-led. The case studies signal: "we've done this for organizations like yours." They are not product testimonials — they are mission proof.

**Quatro assessment:** The homepage has NO case study content. The insights bento grid shows articles, which is good for thought leadership — but articles are not proof stories. The proof metrics strip (9,000+, 1,000+, 125+, Weeks) provides credibility but not narrative proof. Decision 4 already aligns with this — three anonymized proof stories are ready from the Skyline case studies.

**Recommendation:** The three anonymized proof stories (Kordia, TDF, Telenet) should appear on the homepage — either as a section between the Network section and the editorial bridge, or integrated into the Network section below the proof metrics strip. Keep them brief — one line per story with the key metric. "A national broadband operator: 20,000 fewer field visits per year. A national infrastructure operator: provisioning reduced from months to weeks."

### GSI-4. Partner Ecosystem, Not Solo Capability (LOW)

**GSI pattern:** Leading integrators always signal their partner ecosystem. "We work with the systems you already have." This is especially important for critical infrastructure buyers who have long-term vendor relationships they can't (and shouldn't) abandon.

**Quatro assessment:** The "9,000+ integrations from 1,000+ vendors" stat implicitly signals this, and the energy page says "ABB, Siemens, GE, and Schneider SCADA" — but the homepage doesn't explicitly position Quatro as working alongside the buyer's existing vendor ecosystem. "Connect to an intelligence network already built for your industry" is close but could be stronger.

**Recommendation:** A single line in the Network section: "Built to work with the systems and vendors your operation already depends on" or similar. This addresses the GSI buyer's #1 concern: "Will this replace what I have?" Answer: no.

### GSI-5. Security and Sovereignty Positioning (LOW)

**GSI pattern:** Every defense/critical infrastructure integrator prominently features: air-gapped deployment, FedRAMP/CMMC compliance, sovereign data residency. These aren't footnotes — they're homepage-level signals for the government/defense buyer persona.

**Quatro assessment:** The National Security industry description mentions "Sovereign deployment. Air-gapped capable." — good. But it's buried in a one-line description. The platform page and CTA footer mention "Security" as a link. For the defense/national security buyer, this may not be prominent enough.

**Recommendation:** Consider whether the proof stories or the CTA section should include a sovereignty/security signal. Even a line like "Deployed on your infrastructure. Air-gapped capable. Your data never leaves your control." positions Quatro correctly for the government buyer without alienating the commercial buyer.

---

## AUDIT 4: Landing Page Framework Skill Alignment

The landing-page-frameworks skill defines an 11-section page structure with specific voice, layout, and anti-pattern rules. Checking the Quatro homepage against this framework:

### LPF-1. Hero H1 Length — PASS

"Systems That Think. People Who Build." — 6 words. Framework says under 8 words. Clean.

### LPF-2. Single CTA in Hero — FAIL

**Current:** Two CTAs in the hero — "Schedule an Assessment" (primary) and "Talk to an Engineer" (secondary ghost button). Framework says single CTA in hero. The dual-CTA split is listed as anti-pattern #3.

**Recommendation:** Keep "Schedule an Assessment" as the sole hero CTA. Move "Talk to an Engineer" to the nav or a lower section.

### LPF-3. Problem Section (Structural Framing) — MISSING

**Framework says:** Section 2 should be "The real cost of disconnected data" — a two-panel section (teal + white card) that names the structural problem empathetically.

**Current state:** The homepage has no explicit problem section. The industry descriptions hint at problems ("Overlay modernization for grid, pipeline, and production operations") but there's no dedicated section that names the structural condition the buyer faces.

**Note:** This is a DataOS landing page framework designed for solution pages. The Quatro homepage is a routing page, not a solution page, so a full teal+white problem panel may not be appropriate. But the StoryBrand analysis (SB-1) also flagged this gap — the buyer's problem should be named before the solution is presented.

### LPF-4. Architecture Diagram on Dark Background — PARTIAL

**Framework says:** Architecture diagram should be on a dark (#2b323c) background.

**Current:** The SVG diagram is on a light background (fafafa). The dark sections are used for the editorial bridge and CTA — but the network diagram sits on light gray.

**Recommendation:** When the Network section gets reworked with the unified diagram, consider placing it on a dark background per the framework.

### LPF-5. Anti-Pattern Check

| Anti-Pattern | Status |
|---|---|
| Urgency manufacturing | PASS — no urgency language found |
| Blame framing | PASS — empathetic throughout |
| Dual-CTA heroes | FAIL — two CTAs in hero and CTA sections |
| Trust bars with logos | PASS — no logo bars (waiting on permissions) |
| Metrics in hero | PASS — metrics are below hero in sections |
| Jargon in headlines | PASS — no jargon in any buyer-facing headline |
| Feature-led copy | PARTIAL FAIL — Network section paragraph lists features |
| Exclamation points | PASS — none found |
| Hyperbolic adjectives | PASS — none found |
| Long paragraphs | FAIL — Network section paragraph is 60+ words |
| PAS temporal narratives | PASS — none found |

---

## AUDIT 5: Voice Rule Compliance

Checking against the banned words and white-label rules from the HOMEPAGE-REWORK-STRATEGY and XOPS-TO-QUATRO-MESSAGING-MAP:

### Banned Word Check

| Word | Found? | Location |
|---|---|---|
| empowering | No | — |
| enabling | No | — |
| powering | No | — |
| unlocking | No | — |
| complexity | No | — |
| handle | No | — |
| DataMiner | No | — |
| Skyline | No | — |
| xOps | No | — |
| DataOS | YES | Homepage SVG line 227, narrative line 264 |
| platform | YES | Networks industry description (line 120), product tier pages throughout |

**DataOS references must be removed** from the homepage per Decision 1. Platform references should be evaluated case-by-case — "platform" is acceptable in internal contexts but "network" is the preferred buyer-facing term.

---

## Priority-Ranked Fix List

| Priority | Issue | Section | Effort |
|---|---|---|---|
| **P0** | Remove "WHEN YOU NEED MORE" + DataOS from homepage SVG and narrative | Homepage Network section | Medium — needs new SVG + copy |
| **P0** | Replace two-product split with unified network narrative | Homepage Network section | Medium — new copy + layout |
| **P1** | Reframe or absorb product tier pages (See/Understand/Orchestrate) | Product content files | High — structural content change |
| **P1** | Add 3-step plan section to homepage | New homepage section | Low — copy + simple layout |
| **P1** | Add three anonymized proof stories to homepage | Homepage Network or new section | Low — copy only |
| **P2** | Fix dual-CTA in hero (single CTA only) | Homepage hero | Trivial |
| **P2** | Trim feature-listing language in Network section | Homepage Network section | Low |
| **P2** | Add empathy marker / guide credibility line | Homepage editorial or Network section | Trivial — single line |
| **P2** | Update 8,000+ → 9,000+ across all content files | Global content update | Low — find and replace |
| **P3** | Fix "platform" language in Networks industry description | Industry content | Trivial |
| **P3** | Remove tier-sequential "PLUS" language from solution platformMapping sections | Solution content files | Low |
| **P3** | Add sovereignty/security signal to homepage | CTA section or proof area | Trivial — single line |
| **P3** | Add "works with your existing vendors" line to Network section | Homepage Network section | Trivial — single line |
| **HOLD** | Develop Quatro-native service names | All solution content | High — requires naming exercise |
| **HOLD** | Social proof logo strip | Homepage | Blocked on logo permissions |

---

## Recommended Homepage Section Order (Post-Rework)

```
1. HERO — Systems That Think. People Who Build. (single CTA)
2. INDUSTRIES — Five-vertical routing list (current — strong, keep)
3. THE NETWORK — Unified intelligence network (reworked: single diagram,
   fused narrative, one compound-value line, three proof stories,
   proof metrics strip, "works with your existing vendors" line)
4. THE PLAN — 3-step buyer plan: Connect → Prove → Expand (NEW)
5. DARK EDITORIAL BRIDGE — Human stories + empathy marker (current —
   move empathy/guide language here, add one failure-avoidance line)
6. INSIGHTS BENTO — Latest articles (current — keep)
7. FINAL CTA — Connect one system. Four weeks. (single CTA,
   add sovereignty signal)
8. FOOTER
```

This order follows StoryBrand's narrative arc: Character sees themselves (hero) → Routes to their industry (identity) → Meets the guide / sees the plan (network + 3-step) → Emotional resonance (editorial bridge) → Proof of thought leadership (insights) → Call to action.

---

## AUDIT 6: Navigation Restructure — "Platform" → "The Network"

### The Problem

The current nav includes a "Platform" dropdown that routes to See / Understand / Orchestrate product tier pages. This creates two structural failures:

1. **"Platform" is vendor language.** Every SaaS company has a "Platform" nav item. Parsons, Booz Allen, and Leidos use "Capabilities," "Expertise," and "Capabilities" respectively — mission-adjacent language, not product-catalog language. "Platform" tells the buyer "we sell software." "The Network" tells the buyer "we operate infrastructure you connect to."

2. **The dropdown routes to sequential tier pages.** The See → Understand → Orchestrate progression is the capability-stage model we killed in Decision 5. Every click into a tier page reinforces the "starter plan" mental model.

### The Decision

**Nav item:** "Platform" → **"The Network"**

**Nav structure becomes:**

```
Industries | The Network | Resources | Company
```

The dropdown under "The Network" can include sub-items if needed (e.g., "How It Works," "Integrations," "Deployment," "Security") — but NOT See/Understand/Orchestrate as tier labels.

### What Happens to the Tier Pages

The three current product content files (`products/see.md`, `products/understand.md`, `products/orchestrate.md`) are **retired as standalone pages**. Their best content is absorbed into:

1. **The Network page** — deployment models, integration ecosystem, security posture, the depth story
2. **Industry pages** — specific capabilities already live here in better context
3. **Solution pages** — detailed capability descriptions already exist per solution

The `platformMapping` fields in solution content files (which reference See/Understand/Orchestrate) are replaced with a simpler depth narrative or removed entirely.

---

## "The Network" Page — Full Specification

### Purpose

This page is where the technical buyer goes to understand how Quatro's intelligence network works — after the homepage made them curious and the industry page convinced them it's relevant to their world. It answers: "What is this network? How does it connect to my systems? How does it deploy? How is it secured? What makes it different?"

It is NOT a product catalog. It is NOT an architecture walkthrough. It is the answer to "how does this work?" delivered in mission-first language with enough technical depth that a CTO feels confident and a VP of Operations doesn't feel lost.

### Design Reference: GSI Pattern

Leidos organizes their capabilities page as 6 cards with 2-3 sentence descriptions and "More on [Topic]" links — breadth first, depth on click. Booz Allen uses a two-tier system: major capability areas on the main page, detailed solutions on sub-pages. Both prioritize scanability over density.

Quatro's Network page should follow this pattern: scannable overview sections with progressive disclosure into depth. The page is a routing mechanism into deeper content (solution pages, documentation, security whitepapers) — not the deep content itself.

### Page Title

**"The Intelligence Network"**

### Section Structure

```
1. HERO — "An intelligence network already built for your industry."
2. TWO PROPERTIES — Operational Intelligence + Enterprise Meaning (fused, not layered)
3. HOW YOU CONNECT — Integration ecosystem and deployment models
4. WHAT THE NETWORK PROVIDES — Intelligence services (Quatro-native names)
5. NETWORK DEPTH — The compound value progression (replaces See/Understand/Orchestrate)
6. PROOF — Three anonymized deployment stories with metrics
7. TRUST — Security, sovereignty, governance, compliance
8. CTA — "Connect one system. Four weeks."
```

### Section 1: Hero

**Eyebrow:** The Network
**H1:** An intelligence network already built for your industry.
**Subhead:** 9,000+ native integrations. Pre-built operational workflows. Governed intelligence services. Production-tested across 1,000+ organizations in 125+ countries. You don't build from scratch. You connect.
**CTA:** Schedule an Assessment

Single CTA. No dual-CTA split. Clean, confident.

### Section 2: Two Properties of One Network

This replaces the two-product split (Operational Intelligence vs. DataOS Enterprise Intelligence) with two co-equal properties of a single system. Not two columns for two products. Two aspects of one experience.

**Section heading:** "One network. Two properties."
**Framing line:** "Most platforms connect your systems. Some analyze your data. This network does both — simultaneously — because operational intelligence without business context is just monitoring, and business intelligence without operational data is just reporting."

**Property A — Operational Intelligence:**
"Every sensor, every system, every site — connected in real time. Intelligent alarming that cuts through noise. Pre-built operational workflows for maintenance, scheduling, dispatch, SLA tracking, and resource coordination. The operational processes your industry runs on are already built into the network."

**Property B — Enterprise Meaning:**
"Every signal arrives with the context that makes it actionable. The network doesn't just detect an anomaly — it knows which asset is affected, which customers are impacted, which SLAs are at risk, and what the financial exposure looks like. Governed definitions. Trusted intelligence. The meaning layer that turns data into decisions."

**Compound value line (one sentence, per Decision 2):**
"Each intelligence service connects to every other through a shared foundation — so the more you connect, the more you see."

### Section 3: How You Connect

**Section heading:** "Built for the systems you already depend on."

This section addresses the GSI buyer's #1 concern: will this replace what I have?

**Integration ecosystem:**
"9,000+ native integrations across 1,000+ vendors. Every major industrial protocol — OPC-UA, Modbus, MQTT, BACnet, DNP3, SNMP, HART, and thousands more. Enterprise systems — SAP, Oracle, Salesforce, ServiceNow. Cloud platforms — AWS, Azure, GCP. The network works alongside your existing infrastructure. Nothing gets ripped out."

**Deployment models (cards or compact grid):**

| Model | Description |
|---|---|
| **Cloud** | Fully managed. Automatic scaling. Zero infrastructure overhead. |
| **On-Premises** | Your data center. Your network boundaries. Complete data sovereignty. |
| **Edge** | Lightweight deployment at remote sites. Local processing. Works offline. |
| **Air-Gapped** | Sovereign deployment. No external connectivity. Audit-grade governance. |
| **Hybrid** | Any combination. Seamless data flow between deployment tiers. |

### Section 4: What the Network Provides

**Section heading:** "Intelligence services for your industry."

This is the menu of Quatro-native intelligence services (Decision 3). The services are organized by industry domain, not by product tier. The buyer self-selects.

**Note:** This section requires the Quatro-native service naming exercise to be completed first. Placeholder structure:

Cards organized by domain (Energy, Networks, National Security, Critical Infrastructure, Finance). Each card: service name, one-line outcome description, link to solution page. No tier labels. No "See" / "Understand" / "Orchestrate" badges.

The buyer picks the service that matches their gap. Each service delivers the full sensing-to-action loop for that domain — visibility, understanding, AND orchestration — on day one. This is Decision 5 made tangible.

### Section 5: Network Depth

**Section heading:** "The more you connect, the more you see."

This replaces the See → Understand → Orchestrate tier progression with a network-depth narrative. It's the compound value story told as a natural progression, not a product upgrade path.

**Three stages (not tiers, not products — just a narrative arc):**

**One service:**
"Connect your first intelligence service. Get a focused operational picture for one domain — real-time visibility, intelligent alarming, automated workflows, and governed intelligence. Production-ready in weeks."

**Multiple services:**
"Connect a second service. Cross-domain intelligence emerges automatically. A grid event correlates with supply chain data. A network degradation links to SLA exposure and customer impact. Capabilities appear that no single service could produce alone."

**Full network:**
"At full deployment, the network models your entire operation — every asset, every process, every relationship — as one queryable intelligence foundation. AI agents reason across the full picture. Decisions are grounded in governed, enterprise-wide context."

**Key difference from the current tiers:** The buyer doesn't upgrade from stage 1 to stage 2. They expand the scope of what the network covers. Each stage delivers the full loop. The depth comes from breadth of connection, not from buying a higher-tier product.

### Section 6: Proof

The three anonymized deployment stories from Decision 4:

**National Communications Provider:** 98% of infrastructure unified. 5,000+ devices. Siloed tools and manual workflows replaced with unified real-time operations.

**National Infrastructure Operator:** 14,000 elements. 7,000 services. 12M+ viewers/listeners. Equipment provisioning reduced from months to weeks. Critical event procedures reduced from months of development to hours.

**National Broadband Operator:** 4 million devices monitored. Half a billion KPIs tracked continuously. 20,000 fewer customer site visits per year.

### Section 7: Trust

**Section heading:** "Governed. Secured. On your infrastructure."

This section addresses the defense/critical infrastructure buyer and the CTO doing technical validation. Brief, scannable, high-trust signals:

- **Data sovereignty:** Your data never leaves your control. Deploy on your infrastructure — cloud, on-prem, edge, or air-gapped.
- **Governance:** Role-based access. Full audit trail. Data lineage from source to decision.
- **Security:** Zero-trust architecture. End-to-end encryption. Compliance-ready (CMMC, NIST, SOC 2 — specific certs to be confirmed).
- **Open architecture:** No vendor lock-in. Open APIs. Your data is always yours.

### Section 8: CTA

Same pattern as homepage CTA but scoped to the network conversation:

**H2:** "Connect one system. Four weeks. Your infrastructure."
**Subhead:** "Pick the system that costs you the most to operate. We connect it to the network, deploy on your stack, and prove the value before you commit."
**CTA:** Schedule an Assessment
**Microcopy:** 4-week proof of value. Credited toward contract.

---

## Updated Priority-Ranked Fix List (with nav changes)

| Priority | Issue | Section | Effort |
|---|---|---|---|
| **P0** | Remove "WHEN YOU NEED MORE" + DataOS from homepage SVG and narrative | Homepage Network section | Medium |
| **P0** | Replace two-product split with unified network narrative | Homepage Network section | Medium |
| **P0** | Rename "Platform" → "The Network" in nav | SiteHeader component | Trivial |
| **P1** | Build "The Network" page (replaces Platform + tier pages) | New page | High — new page spec above |
| **P1** | Retire See/Understand/Orchestrate as standalone pages | Product content + routing | Medium — redirect old URLs |
| **P1** | Add 3-step plan section to homepage | New homepage section | Low |
| **P1** | Add three anonymized proof stories to homepage | Homepage Network or new section | Low |
| **P2** | Fix dual-CTA in hero (single CTA only) | Homepage hero | Trivial |
| **P2** | Trim feature-listing language in Network section | Homepage Network section | Low |
| **P2** | Add empathy marker / guide credibility line | Homepage editorial or Network | Trivial |
| **P2** | Update 8,000+ → 9,000+ across all content files | Global content update | Low |
| **P3** | Fix "platform" language in Networks industry description | Industry content | Trivial |
| **P3** | Remove tier-sequential "PLUS" language from solution platformMapping sections | Solution content files | Low |
| **P3** | Add sovereignty/security signal to homepage CTA | CTA section | Trivial |
| **P3** | Add "works with your existing vendors" line to homepage Network section | Homepage | Trivial |
| **HOLD** | Develop Quatro-native service names (needed for Network page Section 4) | All solution content | High |
| **HOLD** | Social proof logo strip | Homepage | Blocked on logo permissions |

---

*Audit completed: April 1, 2026*
*Updated: April 1, 2026 — Added nav restructure, "The Network" page specification*
*Frameworks applied: Fusion Messaging (aligned April 1, 2026), StoryBrand 7-part framework, GSI positioning best practices (Parsons, Booz Allen, Leidos pattern analysis), Landing Page Frameworks skill, UI Design System skill*
*Status: Ready for review — no site changes until approved*
