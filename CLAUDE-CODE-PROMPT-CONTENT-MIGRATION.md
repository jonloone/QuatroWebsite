# Claude Code Prompt — Content Migration: Activate Bento + Editorial Layouts

## Context

The industry page template (`[slug].astro`) has two rendering paths:

1. **Bento grid** (BentoUseCases component, dark bg) — activates when capabilities have `featured: true`
2. **Editorial alternating** (EditorialCapability component, light bg) — renders non-featured capabilities in image-left/image-right blocks
3. **Flat FeatureGrid** (fallback) — renders when NO capabilities are featured

Currently only `finance.md` has `featured`, `outcome`, and `tier` fields. Every other industry page falls through to the flat FeatureGrid. This prompt migrates ALL industry content files to activate the new layouts, AND reworks the messaging to fit the visual hierarchy.

## Why the messaging needs rework (not just flags)

The bento + editorial layout creates three distinct content zones with different constraints:

| Zone | Component | Visual Space | Copy Constraint |
|------|-----------|-------------|-----------------|
| **Bento featured** | BentoUseCases | Image + outcome eyebrow + name + short description | Description must be **1-2 sentences max** — the image does the talking |
| **Bento outcome** | Eyebrow text above name | Small teal text, first thing eye hits | **Under 12 words.** Specific, measurable, starts with the result. |
| **Editorial block** | EditorialCapability | Half-viewport heading + full paragraph + image | Name becomes a **large h3 heading** — needs editorial weight, not just a feature label |

### Example: Defense — before vs. after

**BEFORE (flat grid):**
```yaml
- name: "Perimeter Protection"
  description: "AI video analytics with multi-sensor fusion (camera, radar, lidar, fiber-optic) delivers sub-30-second detection-to-response with 80% fewer false alarms."
```

**AFTER (bento featured):**
```yaml
- name: "Perimeter Protection"
  description: "AI video analytics with multi-sensor fusion — camera, radar, lidar, and fiber-optic — delivers sub-30-second detection-to-response across distributed installations."
  featured: true
  outcome: "80% fewer false alarms. Sub-30-second response."
  tier: "operate"
```

**BEFORE (flat grid):**
```yaml
- name: "Logistics Intelligence"
  description: "Convoy planning reduced from hours to minutes. Supply chain visibility, equipment readiness tracking, and predictive maintenance for deployed assets — connecting logistics data to mission readiness. AI-assisted route optimization integrates real-time threat, weather, and vehicle readiness data."
```

**AFTER (editorial block — name needs editorial weight):**
```yaml
- name: "Logistics Intelligence: Hours to Minutes"
  description: "Convoy planning, supply chain visibility, and predictive maintenance for deployed assets — all connected to mission readiness. AI-assisted route optimization integrates real-time threat, weather, and vehicle status."
  outcome: "Convoy planning reduced from hours to minutes."
  tier: "command"
```

---

## Task 1 — Update ALL industry .md capability sections

For each industry file, apply these changes to the `capabilities` array:

1. **Pick the top 3 most differentiated capabilities** → add `featured: true`
2. **Write an `outcome` for EVERY capability** (featured and non-featured)
3. **Add `tier` to EVERY capability** ('connect' | 'operate' | 'command')
4. **Shorten featured descriptions** to 1-2 sentences. Move the quantified result to `outcome`.
5. **Add editorial weight to non-featured names** where the name is too terse for a large heading (aim for 4-8 words)

### Tier mapping guide:
- `connect` — data ingestion, protocol support, sensor connectivity, system integration, legacy coexistence
- `operate` — analytics, AI, anomaly detection, predictive intelligence, correlation, monitoring, operator guidance
- `command` — automation, orchestration, playbooks, dispatch, compliance reporting, response coordination

### Outcome writing rules:
- **Under 12 words.** This is eyebrow text, not a sentence.
- **Start with the measurable result.** "80% fewer false alarms" not "Our AI reduces false alarms by 80%"
- **Pull numbers from existing content** (stats, proof points, descriptions) where available
- **Don't repeat the description.** The outcome is the "so what."
- **No "Quatro" or brand references.** Just the result.

---

### energy.md — 7 capabilities

**Featured (3):**

```yaml
  - name: "SCADA Overlay Modernization"
    description: "Mirror data from existing ABB, Siemens, GE, and Schneider SCADA in real time. Add modern analytics, AI-powered operator guidance, and predictive intelligence without touching safety-critical control paths."
    featured: true
    outcome: "Modern analytics on legacy SCADA — months, not years."
    tier: "connect"
  - name: "Pipeline Integrity & Security"
    description: "Multi-method leak detection with AI cross-correlation — RTTM, acoustic, satellite, and partner-delivered predictive analytics. 0.5% flow sensitivity with an integrated partner ecosystem no single vendor can match."
    featured: true
    outcome: "75% fewer false alarms. 0.5% flow sensitivity."
    tier: "operate"
  - name: "Cross-Domain Correlation"
    description: "AI correlates operational events with security events, weather, and external sources. Cross-domain agents surface compound threats that siloed tools structurally cannot detect."
    featured: true
    outcome: "Compound threats detected before siloed tools can see them."
    tier: "operate"
```

**Non-featured (4):**

```yaml
  - name: "DER Integration: Every New Energy Source, One View"
    description: "Native connectivity for SunSpec, OCPP, and IEEE 2030.5. Onboard solar, wind, battery storage, and EV charging into your grid operational view without custom integration."
    outcome: "Solar, wind, battery, and EV — one operational view."
    tier: "connect"
  - name: "Grid Storm Response"
    description: "Automated playbooks pre-position crews, activate mutual aid, and prioritize restoration by customer impact and critical facility status."
    outcome: "Automated crew pre-positioning. 60% faster restoration."
    tier: "command"
  - name: "Compliance Automation"
    description: "Continuous NERC CIP, PHMSA, and EPA audit trails. Replace 40+ hours/month of manual documentation with real-time compliance reporting that scales from grid operations to enterprise energy intelligence."
    outcome: "40+ hours/month of manual documentation eliminated."
    tier: "command"
  - name: "AI-Powered Operator Guidance"
    description: "Real-time contextual recommendations during complex situations — cascading outages, DER instability, simultaneous maintenance events. Step-by-step guidance based on historical patterns, current conditions, and grid relationships."
    outcome: "New operators perform like 20-year veterans."
    tier: "operate"
```

---

### defense.md — 8 capabilities

**Featured (3):**

```yaml
  - name: "Air-Gapped Operations"
    description: "Full AI-powered analytical capability at the tactical edge without cloud connectivity. Intelligent agents that detect, reason, and recommend — fully operational in disconnected environments at IL4/IL5/IL6."
    featured: true
    outcome: "Full AI capability. Zero external dependencies."
    tier: "connect"
  - name: "Perimeter Protection"
    description: "AI video analytics with multi-sensor fusion — camera, radar, lidar, and fiber-optic — delivers sub-30-second detection-to-response across distributed installations."
    featured: true
    outcome: "80% fewer false alarms. Sub-30-second response."
    tier: "operate"
  - name: "Federated Command"
    description: "Single command interface spanning 12+ installations and FOBs. Maintains local autonomy while enabling centralized oversight without network consolidation."
    featured: true
    outcome: "12+ installations. One command interface."
    tier: "command"
```

**Non-featured (5):**

```yaml
  - name: "Automated Force Protection"
    description: "Pre-defined response playbooks triggered automatically by detected events — escalating alerts, notifying responders, and activating countermeasures."
    outcome: "Automated escalation and countermeasure activation."
    tier: "command"
  - name: "Logistics Intelligence: Hours to Minutes"
    description: "Convoy planning, supply chain visibility, and predictive maintenance for deployed assets — all connected to mission readiness. AI-assisted route optimization integrates real-time threat, weather, and vehicle status."
    outcome: "Convoy planning reduced from hours to minutes."
    tier: "command"
  - name: "Compliance Audit Trails"
    description: "Every detection, alert, decision, and action logged with timestamp and chain-of-command context. Satisfies defense oversight and legal requirements."
    outcome: "Complete chain-of-command audit trail."
    tier: "operate"
  - name: "Space Domain Awareness"
    description: "Multi-source intelligence for orbital awareness — satellite tracking, conjunction assessment, and space weather impact correlated with ground operations. Ground to orbit, one platform."
    outcome: "Ground to orbit in one operational picture."
    tier: "operate"
  - name: "National Security Intelligence"
    description: "Purpose-built applications for counter-narcotics, resource protection, border security, and youth vulnerability assessment. Cross-domain correlation connects physical, signals, financial, and social intelligence."
    outcome: "Multi-agency intelligence for sovereign security."
    tier: "operate"
```

---

### cities.md — 7 capabilities

**Featured (3):**

```yaml
  - name: "Unified City Operations Center"
    description: "Single common operating picture across all city departments. Replace 5-10 separate consoles with role-based workspaces for every agency — from traffic to public safety to utilities."
    featured: true
    outcome: "5-10 consoles replaced. One operational picture."
    tier: "command"
  - name: "Cross-Agency Emergency Response"
    description: "When a water main breaks, it affects traffic, safety, fleet dispatch, and environmental monitoring. AI-driven impact assessment coordinates multi-department response automatically."
    featured: true
    outcome: "70% faster cross-agency incident response."
    tier: "command"
  - name: "AI Urban Surveillance"
    description: "Real-time behavioral analytics across city-wide camera networks. Multi-sensor fusion with gunshot detection, license plate recognition, and access control — 85% fewer false alarms."
    featured: true
    outcome: "85% fewer false alarms across city camera networks."
    tier: "operate"
```

**Non-featured (4):**

```yaml
  - name: "Smart Infrastructure Monitoring"
    description: "Continuous condition monitoring for streetlights, traffic signals, water distribution, and distributed infrastructure with predictive maintenance. Cross-links to water system intelligence for treatment, leak detection, and compliance."
    outcome: "Predictive maintenance across all city infrastructure."
    tier: "operate"
  - name: "Municipal Fleet Optimization"
    description: "AI-powered route optimization for waste collection, public works, and transit. Fill-level IoT sensors enable demand-driven scheduling. Dynamic routing based on actual conditions — not fixed schedules."
    outcome: "30% fleet cost reduction through demand-driven routing."
    tier: "command"
  - name: "Environmental Intelligence"
    description: "Air quality, weather, and energy data correlated with operational systems. Pollutant concentrations trigger traffic rerouting and public notifications automatically."
    outcome: "Automatic response to environmental threshold breaches."
    tier: "operate"
  - name: "Water Infrastructure Intelligence"
    description: "Treatment plant monitoring, distribution network management, leak detection, and quality compliance. From reservoir to tap, unified intelligence connected to city-wide operations for coordinated incident response."
    outcome: "Reservoir to tap. One unified water intelligence layer."
    tier: "connect"
```

---

### space-satcom.md — 8 capabilities

**Featured (3):**

```yaml
  - name: "Multi-Vendor Ground Segment Unification"
    description: "Real-time monitoring of antennas, RF chains, VSAT hubs, modems, and spectrum analyzers across all vendors. 7,000+ pre-built connectors. One dashboard. One command center."
    featured: true
    outcome: "7,000+ connectors. Every vendor. One command center."
    tier: "connect"
  - name: "Satellite Revenue Assurance"
    description: "Real-time transponder utilization tracking, SLA breach prediction 24+ hours in advance, and automated billing correlation. Detect revenue leakage before it compounds."
    featured: true
    outcome: "SLA breach prediction 24+ hours in advance."
    tier: "operate"
  - name: "Space Domain Awareness"
    description: "Multi-source ISR integration with operational impact correlation. Conjunction assessment tied to ground asset dependency and mission continuity. Predictive threat alerts 24-48 hours ahead."
    featured: true
    outcome: "Predictive threat alerts 24-48 hours before critical events."
    tier: "operate"
```

**Non-featured (5):**

```yaml
  - name: "Real-Time Anomaly Detection"
    description: "Sub-minute anomaly detection across all ground segment equipment. Contextual alerts show not just what failed but which services are affected, the SLA exposure, and available backup capacity."
    outcome: "Sub-minute detection with full service impact context."
    tier: "operate"
  - name: "Constellation-Scale Fleet Monitoring"
    description: "Unified fleet health across GEO, LEO, and NGSO orbits. Predictive failure detection 2-4 weeks in advance. Cross-orbit capacity optimization at constellation scale."
    outcome: "GEO + LEO + NGSO fleet health in one view."
    tier: "operate"
  - name: "Automated Failover and Orchestration"
    description: "When an anomaly is detected, the platform recommends actions and can auto-execute pre-approved failovers. Downtime compressed from hours to minutes."
    outcome: "Downtime compressed from hours to minutes."
    tier: "command"
  - name: "Cross-Domain Correlation"
    description: "AI correlates ground segment events with fleet health, revenue impact, and space domain threats simultaneously. Pattern recognition surfaces compound issues siloed tools cannot detect."
    outcome: "Compound issues detected across all satellite domains."
    tier: "operate"
  - name: "Sovereign and Air-Gapped Deployment"
    description: "Cloud, hybrid, self-managed, or air-gapped deployment. All satellite data remains under operator control with end-to-end encryption. FIPS and NIST compliance for defense customers."
    outcome: "Full sovereignty. No data leaves your perimeter."
    tier: "connect"
```

---

### industrial.md — 8 capabilities

**Featured (3):**

```yaml
  - name: "Predictive Maintenance"
    description: "Predictive intelligence forecasts equipment failures 2-4 weeks in advance. Multi-sensor correlation catches compound failure modes that single-variable monitoring misses."
    featured: true
    outcome: "2-4 week advance warning. $125K/hr downtime avoided."
    tier: "operate"
  - name: "AI-Powered Operator Guidance"
    description: "Real-time contextual recommendations during complex situations — simultaneous equipment alerts, quality deviations, production constraints. Step-by-step guidance based on historical patterns and process relationships."
    featured: true
    outcome: "New operators perform like 20-year veterans."
    tier: "operate"
  - name: "Quality Prediction"
    description: "Correlate process parameters with quality outcomes before batch completion. AI models identify drift in quality-critical variables and recommend corrective action while product is still in-process."
    featured: true
    outcome: "Quality issues caught before batch completion."
    tier: "operate"
```

**Non-featured (5):**

```yaml
  - name: "OEE Optimization: Find Every Point of Loss"
    description: "Real-time availability, performance, and quality metrics correlated with root-cause analytics that identify specific drivers of OEE loss across every production line."
    outcome: "22% OEE improvement through root-cause visibility."
    tier: "operate"
  - name: "Cross-Domain Correlation"
    description: "AI analyzes relationships between maintenance, process parameters, quality, energy, and logistics simultaneously. Pattern recognition surfaces emerging issues before threshold alerts fire."
    outcome: "Cross-domain patterns no single system can see."
    tier: "operate"
  - name: "Real-Time Operational Model"
    description: "Living digital model that understands asset relationships, service dependencies, and production flows. Reduce trial batches by 40% through virtual process optimization."
    outcome: "40% fewer trial batches through virtual optimization."
    tier: "operate"
  - name: "Legacy Coexistence: No Rip-and-Replace"
    description: "Layer alongside existing OSIsoft PI, AspenTech, or Honeywell historians without migration. No tag-based licensing at any scale — collect every data point without cost penalties."
    outcome: "No tag-based licensing. No migration required."
    tier: "connect"
  - name: "Multi-Plant Coordination"
    description: "Enterprise-wide visibility across multiple facilities. Standardize best practices, benchmark performance, and coordinate response across your entire manufacturing network."
    outcome: "Enterprise-wide visibility across all plants."
    tier: "command"
```

---

### infrastructure.md — 7 capabilities

**Featured (3):**

```yaml
  - name: "Unified NOC Operations"
    description: "Consolidate alarms from Nokia, Ericsson, Huawei, and any vendor into a single correlated view. AI-driven root cause identification and remediation recommendations — not just alerts."
    featured: true
    outcome: "80% fewer false alarms. 5 platforms → 1."
    tier: "operate"
  - name: "AI-Powered Fault Remediation"
    description: "When issues are detected, the platform diagnoses root cause, recommends remediation, and can execute proven playbooks autonomously. Captures institutional expertise and guides operators through resolution."
    featured: true
    outcome: "55% faster MTTR. Institutional expertise captured."
    tier: "command"
  - name: "Commercial Operations Intelligence"
    description: "Active SLA management with breach prediction, automated escalation, capacity planning, and cost tracking. Turn NOC operations into revenue operations."
    featured: true
    outcome: "NOC operations become revenue operations."
    tier: "command"
```

**Non-featured (4):**

```yaml
  - name: "Multi-Site Tower Monitoring"
    description: "Environmental, power, security, and equipment telemetry from 900+ sites. Predictive analytics detect failures before they cause outages."
    outcome: "900+ sites monitored. Failures predicted before outages."
    tier: "operate"
  - name: "Predictive Fleet Optimization"
    description: "AI-powered routing factors traffic, weather, vehicle capacity, and delivery windows. Continuous re-routing when conditions change. Connected to corridor intelligence for end-to-end visibility."
    outcome: "$4.2M annual fuel savings through AI routing."
    tier: "command"
  - name: "Predictive Maintenance"
    description: "Predictive intelligence forecasts equipment failures 2-4 weeks in advance across fleet vehicles, building systems, and network equipment."
    outcome: "2-4 week advance warning across all equipment types."
    tier: "operate"
  - name: "Smart Building Intelligence"
    description: "Cross-system monitoring across HVAC, lighting, power, and security. Predictive intelligence optimizes energy management for 25-30% reduction in energy costs."
    outcome: "25-30% energy cost reduction through predictive optimization."
    tier: "operate"
```

---

### transportation.md — 8 capabilities

**Featured (3):**

```yaml
  - name: "Berth Management and Scheduling"
    description: "Vessel arrival predictions accurate to the hour. Optimal berth assignment 72 hours in advance considering water depth, cargo type, discharge time, and next vessel schedule."
    featured: true
    outcome: "72-hour berth predictions. Ships stop waiting at anchor."
    tier: "operate"
  - name: "Cross-Node Coordination"
    description: "Vessel discharge timing at ports informs corridor traffic. Flight arrivals optimize ground operations. Corridor incidents coordinate with border authorities. Every node enriches every other."
    featured: true
    outcome: "Every transportation node enriches every other."
    tier: "command"
  - name: "Maritime Sovereignty and Intelligence"
    description: "Every vessel tracked from EEZ entry through port departure. Dark vessel activity detected immediately. Trafficking patterns correlated with known smuggling corridors."
    featured: true
    outcome: "EEZ to port. Every vessel tracked. Dark activity detected."
    tier: "operate"
```

**Non-featured (5):**

```yaml
  - name: "Runway and Airfield Intelligence"
    description: "Aircraft approach predictions accurate to the minute. Gate availability predicted before landing. Ground equipment staged for efficient movement. Weather-driven capacity alerts trigger pre-emptive adjustments."
    outcome: "Gate availability predicted before aircraft lands."
    tier: "operate"
  - name: "Corridor Traffic and Flow Management"
    description: "Real-time traffic flow across monitored corridors. Sub-minute incident detection. Congestion predicted 30-60 minutes in advance with weather-driven routing adjustments."
    outcome: "Congestion predicted 30-60 minutes in advance."
    tier: "operate"
  - name: "Customs and Border Integration"
    description: "Cargo manifests pre-reviewed against risk databases before vessel arrival. High-risk cargo flagged for priority inspection. Cross-border shipment status tracked origin to destination."
    outcome: "Risk-flagged cargo identified before vessel arrival."
    tier: "command"
  - name: "Predictive Routing Intelligence"
    description: "24-48 hour traffic and logistics predictions. Alternate routing recommendations generated before incidents block flow. Supply chain ETA with minute-level accuracy."
    outcome: "24-48 hour predictive routing with minute-level ETAs."
    tier: "operate"
  - name: "Sovereign Multi-Agency Sharing"
    description: "Generate intelligence products for partner agencies without ceding data control. Share assessed routing, not raw sensors. Every disclosure controlled, audited, and revocable."
    outcome: "Share intelligence, not data. Full sovereignty."
    tier: "command"
```

---

### water-environment.md — 8 capabilities

**Featured (3):**

```yaml
  - name: "Hydraulic Network Correlation"
    description: "Real-time pressure correlation across the entire distribution network. The system correlates changes across multiple points to isolate the leak's specific pipe segment — not just 'somewhere in the network.'"
    featured: true
    outcome: "Leak location identified to the specific pipe segment."
    tier: "operate"
  - name: "Automated Leak Detection and Dispatch"
    description: "Leaks detected within minutes of occurrence with localization accuracy enabling surgical repairs. Automated workflows include location maps, segment characteristics, crew availability, and materials."
    featured: true
    outcome: "Minutes to detection. Surgical repair accuracy."
    tier: "command"
  - name: "Automated Compliance Reporting"
    description: "Auto-generated reports for SENAGUA, MAE/MAATE, and TULSMA frameworks tied to actual operational data. No spreadsheets. Real-time compliance verification — operators know immediately when they're out of spec."
    featured: true
    outcome: "Zero manual compliance assembly. Real-time verification."
    tier: "command"
```

**Non-featured (5):**

```yaml
  - name: "Predictive Pipe Health"
    description: "Asset heat maps showing failure risk by segment based on pipe age, material, pressure history, quality events, and maintenance records. Prioritized replacement scheduling that prevents catastrophic failures."
    outcome: "Capital expenditure optimized by actual pipe risk."
    tier: "operate"
  - name: "Water Quality Monitoring"
    description: "Real-time compliance against SENAGUA thresholds at each monitoring point. Out-of-spec events flagged with probable cause analysis — identifying detention time, treatment failure, or external contamination."
    outcome: "Instant out-of-spec detection with probable cause."
    tier: "operate"
  - name: "Multi-Media Environmental Monitoring"
    description: "Unified monitoring across air quality, water quality, effluent discharge, emissions stacks, and noise. Cross-media contamination patterns detected that single-domain systems miss."
    outcome: "Cross-media contamination patterns detected automatically."
    tier: "operate"
  - name: "Enforcement-Ready Evidence Packages"
    description: "Every violation documented with timestamp, measured values, thresholds, operational context, response actions, and recovery confirmation — formatted for regulatory submission or prosecution."
    outcome: "Audit-ready evidence generated automatically."
    tier: "command"
  - name: "ESG and Climate Adaptation Tracking"
    description: "Time-series environmental data with progress tracking against ESG commitments. Emissions, water consumption, and energy measured with evidence for investor reporting."
    outcome: "Provable ESG progress, not just submitted reports."
    tier: "operate"
```

---

### broadcast-media.md — 6 capabilities

**Featured (3):**

```yaml
  - name: "Multi-Technology Signal Unification"
    description: "Real-time signal visibility across SMPTE ST 2110, ST 2022, SRT, SDI, DVB-ASI, and L-Band satellite from a single operational view. 8,000+ integrations across all major broadcast vendors."
    featured: true
    outcome: "6 signal technologies. Every vendor. One view."
    tier: "connect"
  - name: "Live Production Orchestration"
    description: "Real-time resource orchestration during live events — cameras, encoders, transmission equipment. Virtual Signal Groups configure logical sources and destinations from any vendor technology."
    featured: true
    outcome: "Automated failover during live broadcast."
    tier: "command"
  - name: "Cross-Domain Compound Intelligence"
    description: "A transponder failure triggers full assessment of affected programs, SLA impact, and recovery recommendations. Production, facility, and distribution intelligence connected — each domain enriching the others."
    featured: true
    outcome: "Full impact assessment in seconds, not hours."
    tier: "operate"
```

**Non-featured (3):**

```yaml
  - name: "Facility Health Monitoring"
    description: "Real-time facility health across multi-site operations. Equipment monitoring for transmitters, modulators, encoders, RF systems, and routers. Environmental controls for power, cooling, and RF interference."
    outcome: "Predictive maintenance alerts before air-time impact."
    tier: "operate"
  - name: "Content Distribution Intelligence"
    description: "End-to-end distribution chain monitoring — contribution circuits, distribution uplinks, satellite transponder slots, and IP connectivity. QoS compliance tracking per SLA per circuit."
    outcome: "SLA breaches detected in real time, not after the fact."
    tier: "operate"
  - name: "Predictive Equipment Health"
    description: "Know when transmitters, RF chains, and modulation systems are degrading before they fail on air. Facility-wide health scoring with resource utilization analytics."
    outcome: "Equipment degradation caught before air-time failure."
    tier: "operate"
```

---

## Task 2 — Update `[slug].astro` template

### Remove compact grid from BentoUseCases

In `src/components/marketing/BentoUseCases.astro`, delete the "Standard capabilities grid" block (the `{standard.length > 0 && ...}` section at the bottom). BentoUseCases should ONLY render featured bento cards.

### Add editorial section for non-featured capabilities

In `src/pages/industries/[slug].astro`, after the bento section, add:

```astro
<!-- Editorial section for non-featured capabilities -->
{hasFeatured && capabilities.filter((c: any) => !c.featured).length > 0 && (
  <Section divider>
    <div class="mx-auto max-w-4xl text-center mb-12">
      <h2 class="font-display text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
        Complete Capabilities
      </h2>
      <p class="mt-4 text-lg text-neutral-600">
        Every capability built for {title.toLowerCase()} operations.
      </p>
    </div>
    {capabilities.filter((c: any) => !c.featured).map((cap: any, index: number) => (
      <EditorialCapability
        name={cap.name}
        description={cap.description}
        image={cap.image}
        outcome={cap.outcome}
        reverse={index % 2 === 1}
      />
    ))}
  </Section>
)}
```

### Apply same pattern to `solutions/[slug].astro`

Check if the solutions template has the same logic. If not, add it.

## Task 3 — Verify

Run `npm run build` and confirm all pages compile without errors.

## White-Label Rules

- Never mention DataMiner, Skyline, or upstream technology
- Quatro is the brand. DataOS is the platform.
