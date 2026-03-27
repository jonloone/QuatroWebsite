# Existing Page Update Audit
## What Our Pages Are Missing — Use Cases, Outcomes & Enablement Gaps

**Date:** March 27, 2026
**Purpose:** Identify where existing industry, solution, and platform pages fall short of communicating what Quatro actually enables today — based on our current platform capabilities.

**Guiding principle:** We white-label and integrate. Pages should never name upstream technology partners or internal architecture layers. Every recommendation below is framed around what a buyer cares about: what can I do with this, what problem does it solve, and what outcome should I expect.

---

## Executive Summary

After auditing all 5 industry pages, 7 solution pages, and 3 platform pages, the gaps aren't about missing feature lists — they're about missing stories. Three patterns show up everywhere:

**1. The AI story is absent.**
Quatro can now deliver AI-powered operator guidance, intelligent root cause analysis, cross-domain agent coordination, and autonomous response orchestration. None of the pages say this. They still describe a monitoring and alerting platform. The "Intelligence" tier of Connect → Operate → Command has no content backing it up.

**2. No "what happens next" story.**
Every page ends at operational intelligence. None of them explain what happens when a customer outgrows operational monitoring — when they need to connect what's happening on the ground to what it means commercially, financially, or strategically. The enterprise intelligence expansion story (connecting operational data to business context through governed knowledge models) doesn't appear anywhere. This is the upsell path from pilot to platform.

**3. No cross-vertical intelligence story.**
The pages treat each industry as a silo. A defense customer doesn't see that Quatro also does space domain awareness. An energy customer doesn't see that pipeline intelligence connects to national resource protection. A cities customer doesn't see water system intelligence. The adjacencies that make Quatro unique — one platform spanning operational domains — aren't visible.

---

## Platform Pages (Connect, Operate, Command)

These are the foundation. Every industry and solution page points back here.

### Connect (`src/content/products/connect.md`)

**What's working:** Strong page. 8,000+ integrations, protocol showcase, deployment options, no tag-based licensing. This is the most complete product page.

**What's missing:**

- **Satellite connectivity.** The protocol showcase doesn't include satellite IoT — which matters now that we're building Space/SATCOM pages. A buyer browsing Space/SATCOM who clicks through to Connect should see satellite in the connectivity story.
- **Continuously expanding ecosystem.** The connector story sounds static — "8,000+ connectors" as a fixed number. Should mention the growing catalog of pre-built integrations and community-contributed solutions. Buyers want to know the ecosystem is alive.
- **Cloud ingestion.** AWS and Azure cloud data collection isn't in the protocol showcase. Modern hybrid operations run workloads in the cloud — Connect should acknowledge this.
- **The bridge to enterprise intelligence.** Connect ends at "see everything." It should hint at what comes after: "When visibility isn't enough, Connect feeds the intelligence layer that turns operational data into business decisions."

**Priority: LOW-MEDIUM** — Enhancements, not corrections.

---

### Operate (`src/content/products/operate.md`)

**What's working:** Predictive intelligence, root cause analysis, trend analysis, dashboards. Solid foundation.

**What's missing — this is the biggest gap on the site:**

- **AI-powered operator guidance.** Quatro can now deliver contextual recommendations and next-step guidance to operators in real time — not just alerts, but "here's what's happening, here's why, here's what to do." The page doesn't mention this at all. This is the single most important capability upgrade for the Operate tier.
- **Intelligent agents working across domains.** Multiple AI agents can now coordinate across operational domains — one watching equipment health, another monitoring environmental conditions, another tracking service quality — and they share context. The page still describes analytics as a passive layer that surfaces insights. It should describe an active intelligence layer where agents detect, reason, and recommend.
- **Pattern recognition beyond thresholds.** The page talks about "anomaly detection" generically. What Quatro actually does now is more specific: automated identification of recurring operational patterns (backup cycles, maintenance windows, seasonal drift), statistical detection of behavioral shifts outside normal bounds, and forecasting based on trend projection. These are distinct capabilities, not one generic bucket.
- **Alarm correlation that understands relationships.** The page says "event correlation" but doesn't explain that Quatro uses a real-time operational model (relationships between assets, services, and locations) to group related alarms and suppress noise. This is much more powerful than simple rule-based correlation — and it's the mechanism behind the "80% fewer false alarms" claim on every page.
- **The path to autonomous operations.** Operate should position itself as the stepping stone: "Today, intelligence that helps your team act faster. Tomorrow, autonomous operations where the platform acts on your behalf — with humans guiding critical decisions."

**Priority: HIGH** — This page should be the AI/intelligence flagship and it currently reads like a 2023 monitoring product.

---

### Command (`src/content/products/command.md`)

**What's working:** Unified operations center, incident management, orchestration, team collaboration, resource scheduling.

**What's missing:**

- **AI-assisted orchestration.** Command describes orchestration as rule-based automation ("pre-defined playbooks"). The platform now supports AI-driven orchestration where the system recommends response actions, coordinates across domains, and adapts playbooks based on context. The difference: old Command follows scripts. New Command reasons about the situation.
- **Multi-domain agent coordination.** Command is where cross-domain intelligence becomes cross-domain action. AI agents monitoring different domains should coordinate through Command — a security agent detects an intrusion, an operations agent assesses impact, a logistics agent dispatches response. This story doesn't exist on the page.
- **SLA management and cost tracking.** Command mentions SLA "tracking" but the platform now supports active SLA management — breach prediction, automated escalation, and cost/billing correlation. For commercial operations (telecom, satellite, managed services), this is a revenue protection capability, not just a reporting feature.
- **The autonomous operations horizon.** Command should tell the maturity story: "Start with orchestrated response (humans decide, system executes). Grow to augmented operations (system recommends, humans approve). Scale to autonomous operations (system acts within defined boundaries, humans oversee)."

**Priority: HIGH** — Command should embody the "Intelligence" tier promise.

---

## Industry Pages

### Energy (`src/content/industries/energy.md`)

**What's working:** SCADA overlay story is strong — modernize without replacing. DER integration, storm response, compliance automation all land well.

**What's missing:**

- **AI-powered grid intelligence.** The page describes monitoring and automated playbooks but doesn't mention AI-driven operator guidance, pattern recognition for grid behavior, or predictive analytics that go beyond simple threshold alerting. An energy buyer in 2026 expects AI in the conversation.
- **Pipeline DevSafeOps.** We have a named partner (ECR Platform X) delivering predictive analytics and operational decisioning for pipeline integrity — beyond just hydraulic leak detection. The energy page doesn't mention this at all. This is a differentiator: Quatro + partner ecosystem delivers capabilities no single vendor can match.
- **Enterprise intelligence expansion.** When a grid anomaly happens, Quatro detects it operationally. But what about the business impact — which customers are affected, what's the revenue exposure, what's the regulatory reporting obligation? The page should hint at this: "Quatro starts with grid operations. When you need to connect grid events to customer impact, financial exposure, and regulatory compliance — Quatro scales to enterprise intelligence."
- **Renewable integration intelligence.** DER integration is listed as a capability, but the real story is intelligence on top of DER data — hosting capacity analysis, curtailment optimization, renewable generation forecasting. These are outcomes, not just connectivity.

**Priority: MEDIUM-HIGH** — Core vertical. AI and partner ecosystem gaps hurt credibility with sophisticated energy buyers.

---

### Defense (`src/content/industries/defense.md`)

**What's working:** Perimeter protection, federated command, air-gapped operations. The core defense story is solid.

**What's missing:**

- **Space domain awareness.** Defense is expanding from installations to orbits. The defense page should acknowledge that Quatro extends from base protection to space domain awareness — multi-source ISR, orbital tracking, conjunction assessment correlated with operational impact. This cross-links to the new Space/SATCOM vertical.
- **National intelligence connection.** We built an entire national intelligence platform (YVI, counter-cartel, resource protection) but the defense page doesn't reference it. A defense buyer should see that Quatro isn't just installation security — it's a national-scale intelligence platform.
- **AI agents in air-gapped environments.** The page says "full analytical capability at the tactical edge without cloud connectivity." It should go further: AI-powered intelligence agents that detect, reason, and recommend — fully operational in disconnected environments. This is a major differentiator against cloud-dependent competitors.
- **Multi-domain agent coordination.** Physical security, cyber, logistics, and now space — all monitored by intelligent agents that share context and coordinate response. This is the "federated command" story upgraded for the AI era.
- **Duplicate CTA bug.** Both the primary and secondary CTA say "Talk to a Defense Engineer." The secondary should be distinct — "Request a Defense Brief" or "See Air-Gapped Demo."
- **Image filename typo.** `induistry-defense.png` — verify if the actual image file has this spelling.

**Priority: HIGH** — Defense is a live pipeline vertical. Space and national intelligence adjacencies are major selling points that aren't visible.

---

### Smart Cities (`src/content/industries/cities.md`)

**What's working:** Unified city ops center, cross-agency response, AI surveillance. Well-structured page.

**What's missing:**

- **Water infrastructure intelligence.** The page mentions "water systems" briefly under smart infrastructure monitoring, but we're building a dedicated Water & Environment vertical. The cities page should acknowledge this more prominently — water treatment, distribution networks, leak detection, compliance monitoring. Many municipal buyers care about water as much as public safety.
- **Waste management intelligence.** The page mentions "Municipal Fleet Optimization" generically. The real Quatro story for waste is more specific: fill-level IoT sensors, demand-driven collection scheduling, recycling monitoring, route optimization based on actual container status. This is directly relevant to the Quito waste management opportunity.
- **Cross-agency AI coordination.** When a water main breaks, it affects traffic, public safety, fleet dispatch, and environmental monitoring. The page describes cross-agency coordination as workflow automation. It should describe intelligent coordination — AI agents that recognize the multi-domain impact and recommend coordinated responses across departments.
- **Citizen outcome framing.** The page talks to operators. It should also frame outcomes for the political buyer: "Faster emergency response. Cleaner streets. Lower utility costs. Measurable quality-of-life improvements that citizens notice."

**Priority: MEDIUM** — Solid page. Water and waste specificity are the main gaps.

---

### Industrial (`src/content/industries/industrial.md`)

**What's working:** Plant floor to enterprise positioning is strong. Predictive maintenance, OEE, cross-domain correlation, multi-plant coordination.

**What's missing:**

- **AI-powered operator guidance.** The control room story is monitoring + alerting. It should be augmented operations: contextual insights, AI-driven recommendations, guided troubleshooting. When an operator faces a complex situation, Quatro provides step-by-step guidance based on historical patterns and real-time conditions.
- **Quality prediction.** The page mentions OEE but not quality prediction — correlating process parameters with quality outcomes before batch completion. For pharmaceutical, chemical, and food manufacturing, this is a high-value use case.
- **Custom operator applications.** The platform includes a low-code/no-code application builder for creating custom operational tools — shift dashboards, batch tracking, maintenance workflows. This matters to manufacturing buyers who need flexibility without IT dependency.
- **Enterprise intelligence expansion.** Plant operations need to connect to supply chain, customer orders, and financial systems. The page already says "plant floor to enterprise" but doesn't explain what enterprise intelligence looks like beyond the plant floor.

**Priority: MEDIUM** — Good page. AI guidance and quality prediction are the main use case gaps.

---

### Infrastructure (`src/content/industries/infrastructure.md`)

**What's working:** Unified NOC, multi-site monitoring, predictive maintenance, SLA reporting. Functional page.

**What's missing:**

- **AI-driven fault remediation.** NOC operations are evolving from human-triaged alerting to AI-assisted remediation. The page describes alarm consolidation but not the next step: intelligent agents that diagnose root cause, recommend fixes, and execute remediation playbooks autonomously.
- **5G network operations.** 5G deployment is creating new monitoring complexity — network slicing, edge compute, massive IoT. The infrastructure page should acknowledge this as a capability area.
- **Satellite infrastructure convergence.** The SATELLITE 2026 award specifically highlighted "the convergence of satellite ground segments and terrestrial telco operations." Infrastructure buyers increasingly manage hybrid terrestrial + satellite networks. The page should cross-link to Space/SATCOM.
- **Commercial operations intelligence.** SLA management, capacity planning, cost tracking, and billing correlation — these turn NOC operations into revenue operations. The page describes technical monitoring but not the commercial intelligence layer.

**Priority: MEDIUM** — AI remediation and 5G are the main gaps.

---

## Solution Pages

### Pipeline Security (`src/content/solutions/pipeline-security.md`)

**Status: NEEDS UPDATE**

- **Partner ecosystem for pipeline integrity.** We have ECR Platform X delivering DevSafeOps — E-RTTM hydraulic detection, predictive analytics, and operational decisioning for pipeline integrity. We have NOVI Space for satellite corridor monitoring. Neither partner is referenced. The pipeline page should tell the ecosystem story: Quatro unifies best-in-class detection technologies from specialized partners into a single intelligence picture.
- **Predictive pipeline intelligence.** The page describes detection (leaks, intrusions). It should also describe prediction — AI models that forecast where integrity issues are likely to develop based on historical patterns, environmental conditions, and operational stress.
- **Enterprise intelligence for pipeline operations.** When a leak is detected, the operational response is one part of the picture. The commercial response matters too: what's the revenue impact, what are the regulatory notification requirements, which insurance provisions apply, what's the environmental liability? This is the expansion story.

**Priority: MEDIUM-HIGH** — Partner ecosystem and prediction are real differentiators missing from the page.

---

### Operational Intelligence (`src/content/solutions/operational-intelligence.md`)

**Status: NEEDS MAJOR REFRAME**

This should be the page that tells Quatro's AI intelligence story. Currently it reads like a generic analytics platform.

- **AI-powered intelligence, not just analytics.** The page mentions "AI Analyst Agents" once but doesn't explain what they do or why they matter. The real story: intelligent agents that continuously monitor your operations, surface what matters, provide contextual guidance, and coordinate responses across domains — without waiting for a human to ask the right question.
- **Augmented operations.** Frame the entire page around what augmented operations means for the buyer: operators handle complex situations confidently because the platform provides real-time guidance, validates procedures, and ensures consistency. Faster decisions, fewer errors, safer operations.
- **The enterprise intelligence bridge.** This is the natural home for the expansion story. Operational intelligence answers "what's happening and why." Enterprise intelligence answers "what does it mean for the business." When you need to connect operational events to financial impact, customer experience, supply chain risk, and regulatory compliance — Quatro scales from operational to enterprise intelligence.
- **Custom intelligence applications.** Low-code/no-code tools let teams build intelligence applications tailored to their specific operations — without waiting for IT projects or vendor professional services.
- **Pre-built intelligence solutions.** Access to a growing catalog of pre-built intelligence applications for specific industries and use cases. Don't start from scratch.

**Priority: HIGH** — This page should be the intelligence story flagship.

---

### Asset Monitoring (`src/content/solutions/asset-monitoring.md`)

**Status: ADEQUATE** — Strong page.

**Enhancements:**
- AI-powered operator guidance for maintenance decisions (not just "predict failure" but "here's what to do about it")
- Enterprise expansion: when asset data needs to connect to financial planning, procurement, and capital budgeting

---

### Grid Operations (`src/content/solutions/grid-operations.md`)

**Status: ADEQUATE** — Mirrors the Energy industry page.

**Enhancements:**
- AI-powered grid intelligence (operator guidance, pattern recognition)
- ECR Platform X partnership for grid infrastructure integrity
- Enterprise expansion for connecting grid events to customer and financial impact

---

### Network Operations (`src/content/solutions/network-operations.md`)

**Status: ADEQUATE** — Solid NOC page.

**Enhancements:**
- AI-driven fault remediation and autonomous response
- Commercial operations: SLA management, capacity planning, revenue protection
- Enterprise expansion for connecting NOC events to customer experience and commercial impact

---

### Physical Security (`src/content/solutions/physical-security.md`)

**Status: ADEQUATE** — Good multi-sensor fusion and AI video analytics story.

**Enhancements:**
- Cross-link to national intelligence (physical security → national security for defense/government buyers)
- AI agent coordination for automated multi-step response
- Enterprise context: connecting security events to operational impact (what asset is at risk, what's the business exposure)

---

### Fleet & Logistics (`src/content/solutions/fleet-logistics.md`)

**Status: ADEQUATE but NARROW** — Only covers fleet vehicles.

**Enhancements:**
- Cross-link to new Transportation & Logistics vertical (ports, airports, corridors)
- Supply chain intelligence: connecting fleet operations to warehouse, customer delivery, and inventory systems
- AI-powered dispatch and autonomous route optimization

---

## Prioritized Update Recommendations

### Tier 1 — Update Now (biggest impact on buyer perception)

| Page | Core Gap | What Changes |
|---|---|---|
| **Operate** | No AI intelligence story | Add: AI-powered operator guidance, intelligent agents, pattern recognition, augmented operations framing, autonomous operations horizon |
| **Command** | Orchestration reads as rule-based automation | Add: AI-assisted orchestration, multi-domain agent coordination, SLA management, maturity progression story |
| **Operational Intelligence** | Generic analytics page | Full reframe: AI intelligence flagship, augmented operations, enterprise intelligence bridge, custom apps, pre-built solutions |
| **Defense** | Missing space, national intel, AI agents | Add: space domain awareness, national intelligence cross-link, AI in air-gapped environments, fix duplicate CTA |

### Tier 2 — Update Next (vertical-specific credibility)

| Page | Core Gap | What Changes |
|---|---|---|
| **Energy** | No AI, no partner ecosystem | Add: AI grid intelligence, ECR Platform X DevSafeOps, renewable intelligence, enterprise expansion |
| **Pipeline Security** | Missing partner ecosystem entirely | Add: ECR Platform X, NOVI Space, predictive intelligence, enterprise expansion |
| **Connect** | Missing satellite and cloud connectivity | Add: satellite IoT, cloud ingestion, growing ecosystem, enterprise bridge |

### Tier 3 — Update With Vertical Builds (enhancements)

| Page | Core Gap | What Changes |
|---|---|---|
| **Infrastructure** | No AI remediation, no 5G, no satellite convergence | Add: AI fault remediation, 5G, satellite cross-link, commercial operations |
| **Smart Cities** | Thin on water and waste | Add: water intelligence, waste management specifics, citizen outcomes |
| **Industrial** | No AI guidance, no quality prediction | Add: operator guidance, quality prediction, custom apps |
| **All solution pages** | No AI agent story, no enterprise expansion | Add brief AI and expansion hooks to each |

---

## Cross-Vertical Intelligence Opportunities

These are adjacencies that should be visible to buyers browsing the site:

| From Page | Cross-Link To | Why |
|---|---|---|
| Defense | Space/SATCOM | Space domain awareness is a defense mission |
| Defense | National Intelligence | Installation security → national security |
| Energy → Pipeline | National Intelligence → Resource Protection | Pipeline integrity → sovereign resource protection |
| Smart Cities | Water & Environment | Municipal water is a city operations domain |
| Smart Cities → Fleet | Transportation & Logistics | Municipal fleet → logistics corridors |
| Infrastructure | Space/SATCOM | Terrestrial + satellite convergence |
| Physical Security | National Intelligence | Perimeter protection → national security applications |
| Fleet & Logistics | Transportation & Logistics | Vehicle fleet → ports, airports, corridors |

---

## Data Consistency Issues

| Issue | Where | Fix |
|---|---|---|
| Defense duplicate CTAs | Both primary and secondary say "Talk to a Defense Engineer" | Change secondary to "Request a Defense Brief" |
| Defense heroImage typo | `induistry-defense.png` | Verify actual filename |
| 8,000+ vs 7,000+ connectors | Analysis doc says 7,000+ from vendor, 8,000+ Quatro brand | Standardize: 8,000+ on all customer-facing pages |

---

## Files Requiring Changes

| File | Update Type | Priority |
|---|---|---|
| `src/content/products/operate.md` | Major — AI intelligence story | Tier 1 |
| `src/content/products/command.md` | Major — AI orchestration, maturity story | Tier 1 |
| `src/content/solutions/operational-intelligence.md` | Major — full reframe | Tier 1 |
| `src/content/industries/defense.md` | Moderate — space, national intel, CTA fix | Tier 1 |
| `src/content/industries/energy.md` | Moderate — AI, partners, enterprise expansion | Tier 2 |
| `src/content/solutions/pipeline-security.md` | Moderate — partner ecosystem, prediction | Tier 2 |
| `src/content/products/connect.md` | Minor — satellite, cloud, ecosystem | Tier 2 |
| `src/content/industries/infrastructure.md` | Minor — AI, 5G, satellite convergence | Tier 3 |
| `src/content/industries/cities.md` | Minor — water, waste, citizen outcomes | Tier 3 |
| `src/content/industries/industrial.md` | Minor — AI guidance, quality prediction | Tier 3 |
| `src/content/solutions/asset-monitoring.md` | Minor — AI guidance, enterprise expansion | Tier 3 |
| `src/content/solutions/grid-operations.md` | Minor — AI, partners, enterprise expansion | Tier 3 |
| `src/content/solutions/network-operations.md` | Minor — AI remediation, commercial ops | Tier 3 |
| `src/content/solutions/physical-security.md` | Minor — national intel cross-link, agents | Tier 3 |
| `src/content/solutions/fleet-logistics.md` | Minor — transportation cross-link, supply chain | Tier 3 |
