> **RETIRED 2026-10-20.** Superseded by `docs/REALIGNMENT_2026-10-20.md` (anchor changed from the Quatro Field demo app to the 2026 engagements). §14 of the new spec lists what carries forward. Kept for history.

# Website Realignment Spec — 2026-06-08

**Status:** active. This is the canonical, repo-local spec for the sitewide
realignment. `BACKLOG.md` tickets point at the sections below by number.

**Origin:** condensed from two planning docs (in the LMIQuatro working folder, not
this repo): `Quatro-Website-Drift-Audit-2026-06-08.md` and
`Quatro-Unified-Story-and-IA-Blueprint-2026-06-08.md`. This file is self-sufficient;
you do not need those to execute a ticket.

**The job:** bundle three proof surfaces — IoT/hardware, the DataMiner xOps platform,
and the Quatro Field app — into one narrative spine (Sense → Unify → Act), and
restructure the site so each surface has a named page and a demo slot. Keep the
mission, the nine industries, and the locked positioning.

---

## §0 Invariants (never break these)

1. **Never render invented state.** A demo slot with no real asset renders an honest
   "demo in progress" placeholder or pulls from a real fixture. Never fabricate a
   screenshot, metric, logo, or data point. Empty/honest beats fake.
2. **Brand voice is law.** Follow the `quatro-cascade` and `jonathan-voice` skills
   (in `.claude/skills/`). Banned: "platform" (use framework/integrator/utility),
   "OT/IT", "empower/enable/unlock/leverage", "revolutionary/game-changing/cutting-
   edge/world-class/best-in-class", exclamation points, em-dash connective tissue,
   "not X, Y" antitheses, and the words delve/landscape/tapestry/pivotal/underscore/
   testament.
3. **Keep the mission verbatim** ("We exist to make critical infrastructure
   intelligent…") and the hero ("industrial AI integrator for the Americas").
4. **Keep all nine industries.** This realignment retags proof depth; it does not cut
   verticals.
5. **The buyer is the hero; Quatro is the guide.** Quatro *integrates* and *enables*;
   it does not "build" or "deliver" for the buyer.
6. **Visual system unchanged.** Follow `quatro-ui-system` (Reckless/Roobert/JetBrains
   Mono, forest green #0f4c3a, Bayer dither hero, `img-technical`, three radii, 8px
   grid, `bg-quatro-ink` on dark). Reuse existing components before adding new ones.

---

## §1 The spine (Sense → Unify → Act)

One narrative, three beats, each tied to one proof surface. This is the heart of the
realignment.

| Beat | One-liner (jonathan-voice) | Proof surface | Demo |
|---|---|---|---|
| **Sense** | "Your operation already throws off signal. We connect the hardware that captures it." | IoT / hardware | a real device capturing live signal |
| **Unify** | "Fifteen vendors, one operational truth. Proven across 1,000+ operators." | DataMiner xOps | the xOps command center / digital twin |
| **Act** | "One governed picture your operators act from. The copilot proposes, your team decides, every action is signed." | Quatro Field app | the Field operating picture + signed custody export |

Spine promise line (under hero): **"Sense it. Unify it. Act on it. You own it."**

Underneath every beat: human-in-the-loop, you own the intelligence from day one.

**Maps to the locked four-layer stack** (do not introduce a competing framework):
Sense feeds **Data**; Unify *is* **Data** (xOps connect/normalize/govern) + front edge
of **Reasoning**; Act is **Agents + Workflows**.

**Expertise is a thin thread, not a fourth beat.** Domain expertise (national
security, energy, supply chain) appears as one authority line per industry page and
one line on How-it-works. No "Services" nav item, no consulting-hours language.
Services-led work routes to Elementos (§13).

---

## §2 Demo slots (one reusable pattern, three instances)

Build ONE demo-slot component, used in three configurations. Honest-by-default per
§0.1: if the real asset isn't supplied yet, render a labeled placeholder card, never
a fabricated visual.

- **Sense demo** — a real device capturing live signal. Source from Field-app
  narratives so it's honest: ZPATH lone-worker fall alert, or Velax/Navipro telematics
  cold-chain breach (Quito → Miami). No hardware-vendor names at this tier ("IoT suite
  that connects the physical world").
- **Unify demo** — the DataMiner xOps command center: multi-vendor systems correlating
  into one digital twin / alarm picture. Label as the platform layer.
- **Act demo** — the Quatro Field operating picture: incident recompose per vertical,
  governed copilot proposing, signed custody-of-evidence export.

Slot inputs: `beat` (sense|unify|act), `title`, `caption`, `asset` (image/clip/iframe
or null → placeholder), `vertical` (optional, for per-industry swap).

---

## §3 Homepage

Top-to-bottom should read as the spine.

- **Hero** — unchanged copy. Add the spine promise line (§1) beneath the subtitle.
- **Spine band (NEW)** — three panels (Sense / Unify / Act), each with its one-liner
  (§1) and its demo slot (§2). This is the centerpiece. Uses the §1 + §2 components.
- **Industry rows** — keep. Each row gains a small tag naming which beat is
  demo-backed for that industry (data from §12 badges).
- **"Full-Stack" panel** — reframe as the four-layer map (Data / Reasoning / Agents /
  Workflows with one-line substrate hints) sitting *under* the spine. Tier 1.5
  transparency: substrate hints allowed, deep architecture not.
- **Proof strip** — currently hidden. **Unhide and repoint at xOps scale:**
  1,000+ operators · 10,000+ nodes · 125+ countries · 8,000+ integrations · 14+
  technology awards. This is the credibility engine that replaces unsourced
  solution-page metrics.
- **Partners** — keep named list; tie each partner to its beat (DataMiner → Unify).
- **CTA** — keep "Talk to our team."

---

## §4 Navigation + the How-it-works section

Rename the `/utility` section to **"How it works"** and give it the spine shape. Keep
existing routes working (redirect or alias rather than break links).

```
How it works  (was /utility)
  ├─ The stack            (was /utility/technology — §5)
  ├─ Hardware & IoT       (NEW — §6, the Sense beat)
  ├─ The operational model (xOps)  (was /utility/xops — §7, the Unify beat; NOT "platform" per §0.2)
  ├─ Quatro Field         (NEW — §8, the Act beat)
  └─ How it starts        (was /utility/how-it-starts — unchanged)
```

Update the top nav labels (Industries · Solutions · How it works · Resources ·
Company · Contact). No nav item named "Services." The **Architecture** deep-dive page
(§5A) is *not* in the top nav — it's linked from "The stack" and from technical/RFP
contexts only.

---

## §5 "The stack" page (reframe `/utility/technology`)

**Decision (2026-06-08): full reframe.** `technology.astro` today (856 lines) is the
DataOS architecture story — a 6-layer stack with "semantic substrate," a labeled
ontology network, Connect/Operational-Model/Govern bars, Second Wind. That is Tier-3
depth and partly banned vocabulary (§0.2) on a Tier 1.5–2 surface, and it tells a
data-product story, not Quatro's operating story. Reframe it; move the deep
architecture to a new dedicated page (§5A) for technical evaluators.

**Audience / tier:** the buyer who clicked "How it works." Tier 1.5–2. Name the four
layers; one-line substrate hints allowed; no ontology diagram, no "semantic
substrate," no skip-this-if-you-don't-care disclaimer.

**Page structure (top → bottom):**

1. **Hero** — eyebrow "How it works", H1 the spine in one line. Copy direction:
   "Sense it. Unify it. Act on it. You own it." Sub: one sentence that the same stack
   runs from the device in the field to the signed decision.
2. **The spine band** — the §1 SpineBand component (Sense / Unify / Act), each panel
   linking to its page (§6 / §7 / §8). This is the page's spine.
3. **The four-layer map** — keep a *simplified* version of the existing layered
   diagram, relabeled Data / Reasoning / Agents / Workflows with one-line substrate
   hints (DataMiner xOps for data, the reasoning layer, governed agents, the Quatro
   framework). No entity-level ontology. This replaces the 6-layer diagram inline.
4. **Human-in-the-loop + ownership** — one short band: agents propose, humans decide,
   every action is signed, you own the intelligence.
5. **Deep-dive link** — a single quiet link: "For technical evaluators: the full
   architecture →" pointing at §5A. This is where the demoted depth lives.
6. **Sibling nav** — to Hardware / Platform / Quatro Field / How it starts.

**Keep / cut / move:** keep the layered diagram concept (simplify to four layers);
cut the "semantic substrate / ontology / governance-plane" labels and the disclaimer;
move the rich ontology network + 6-layer detail + Second Wind naming to §5A.

---

## §5A "Architecture" deep-dive page (NEW — Tier 3, for technical evaluators)

New page at `/utility/architecture` (or `/how-it-works/architecture`). Absorbs the
Tier-3 content pulled out of §5: the full layered architecture, the ontology network,
connect/operational-model/govern detail, governance and audit chain, substrate names
(DataMiner xOps, the reasoning engine, governed agents, the Quatro framework).
Linked from §5 and from solution/RFP contexts, never from the top nav. This is the
honest home for the depth — it stays available, it just stops ambushing the buyer.
Tier 3 vocabulary is allowed here (it's the technical surface), but still no
exclamation points and no AI-writing tells (§0.2).

---

## §6 "Hardware & IoT" page (NEW — the Sense beat)

**Audience / tier:** the operator wondering "what actually captures the signal." Tier
1.5. **No hardware-vendor names** (no SMARTS/TEKTELIC/IoT-Orbital at this tier — say
"an IoT suite that connects the physical world").

**Page structure:**

1. **Hero** — H1 the Sense beat. Copy: "Your operation already throws off signal. We
   connect the hardware that captures it." Sub: sites, vehicles, and people become
   live signal — wearables, badges, telematics, sensors.
2. **Sense demo slot** (§2) — a real device capturing live signal. Source honestly
   from Field narratives: lone-worker fall alert, or telematics cold-chain breach
   (Quito → Miami). If no asset yet, honest placeholder per §0.1 — never a fabricated
   device shot.
3. **What we connect** — three or four device classes in plain language (wearables for
   people, telematics for vehicles, sensors for sites), each a line, no vendor names.
4. **One authority line** — domain credibility (we've fielded this in energy and
   logistics operations). One line, not a section.
5. **Hand-off to Unify** — short transition: the signal is only useful once it's
   unified → link to §7.
6. **Sibling nav.**

---

## §7 "The operational model — xOps" page (sharpen `/utility/xops`, the Unify beat)

> Drop-in section copy for this page: **`docs/COPY_UNIFY_XOPS_2026-06-08.md`**.
> Note the label correction there — title/nav is "The operational model," never
> "platform" (§0.2); replace "digital twin" with "real-time operational model."

This is the **credibility engine of the whole spine** — give it the most care. The
current `xops.astro` is already closest to right ("Your Systems → Live Operational
Model → Adaptive Applications," 8,000+ integrations, five domains, Powered by
DataMiner). Sharpen, don't rebuild.

**Audience / tier:** the buyer asking "is this real, and at what scale." Tier 2.
DataMiner can be named (it's a named partner already on the site); keep deep
architecture on §5A.

**Page structure:**

1. **Hero** — H1 the Unify beat. Copy: "Fifteen vendors, one operational truth." Sub:
   the proven platform that connects, normalizes, and governs any vendor's data into
   one live operational model.
2. **Scale proof band (foregrounded)** — pull the §3 numbers up high, not buried:
   1,000+ operators · 10,000+ nodes · 125+ countries · 8,000+ integrations · 14+
   technology awards. This band does the trust work the unsourced solution metrics
   were straining to do (§11). Attribute honestly to DataMiner xOps.
3. **Unify demo slot** (§2) — the xOps command center / digital twin correlating
   multi-vendor systems into one map and one alarm picture. Real xOps surface, labeled
   as the platform layer. Honest placeholder if no clean view supplied yet (§0.1).
4. **Keep "Your Systems → Live Operational Model → Adaptive Applications" diagram** —
   it's good; keep it, ensure labels stay Tier-2 (no "semantic substrate").
5. **The anti-SaaS argument** — keep the existing light-editorial section (it's
   on-message: a utility you own, not another SaaS dependency).
6. **Five operational domains** — keep; this is xOps's breadth, which backs the
   "Platform-proven" industries (§12).
7. **Powered by DataMiner trust signal** — keep.
8. **Hand-off to Act** — transition: a unified model is only worth it if your team can
   act from it → link to §8 (Quatro Field).
9. **Sibling nav.**

**Keep / cut:** keep almost everything; relabel any "semantic substrate / ontology"
strings to Tier-2 language; foreground the scale band; add the Unify demo slot and the
hand-off to Act.

---

## §8 "Quatro Field" page (NEW — the Act beat)

**This names the Quatro Field app on the marketing site for the first time** — the app
is currently invisible to buyers (closes audit Drift 2). Audience: the operator/buyer
who will be shown the demo. Tier 1.5–2.

**Page structure:**

1. **Hero** — H1 names Quatro Field + the Act beat. Copy: "One governed picture your
   operators act from." Sub: the copilot proposes, your team decides, every action is
   signed.
2. **Act demo slot** (§2) — the real Field surfaces: incident recompose per vertical,
   governed copilot proposing the next action, signed custody-of-evidence export.
   Honest placeholder if the chosen narratives' assets aren't supplied yet (§0.1).
3. **The intelligence-work loop** — five short steps: one operating picture → copilot
   proposes → human decides → action is signed → it compounds (briefing + after-action
   review). Each step one line.
4. **Human-in-the-loop + ownership** — the close: agents propose, humans sign, you own
   the intelligence and the deployment from day one.
5. **Which narratives lead** — show the one or two demo narratives chosen (recommend
   cold chain + critical infrastructure for range). Pull content only from real Field
   fixtures.
6. **CTA** — "Talk to our team." Sibling nav.

---

## §9 Solutions retier (three tiers)

The 23 solution SKUs are currently shown as equal peers across three different
maturities. Retier the solutions index and tag each SKU:

- **Live in Quatro Field** (lead with these): fleet (vehicle), fleet-logistics,
  corridor-intelligence, pipeline-integrity / asset-health, physical-security,
  environmental-compliance.
- **Powered by the DataMiner xOps platform** (tag as such): network-operations,
  grid-health, water-systems, port-operations, airport-operations, service-assurance,
  plus the meter / IoT / command-center solutions.
- **Move to DataOS** (relocate or mark out-of-scope for Quatro): teleport-operations,
  space-domain-awareness, the orbital/satellite fleet-health SKU, revenue-assurance,
  credit-risk, claims-classification, customer-360.

Add a `tier` field to the solutions content schema (frontmatter) and render the index
grouped by tier, Live first. Do not delete SKU content; retag/relocate.

---

## §10 Fix the `fleet-health` collision

The word "fleet" spans two unrelated products. The site's **`fleet-health`** SKU is the
*satellite* fleet ("Constellation & Terrestrial," GEO/LEO/NGSO) — DataOS/SATCOM
heritage. The *vehicle* fleet is the separate **`fleet-logistics`** ("Fleet &
Logistics") SKU, and matches the app's Fleet Health capability (Ecuador, Velax, 30
trucks). Resolve:

- Rename **`fleet-health`** to **"Constellation Health"** and move it to the DataOS
  tier (§9).
- Promote **`fleet-logistics`** ("Fleet & Logistics") as the lead vehicle-fleet
  solution under "Live in Quatro Field."
- Final copy + an optional "rename fleet-logistics → Fleet Health to mirror the app"
  note: `docs/COPY_SOLUTIONS_AND_EXPERTISE_2026-06-08.md`.

---

## §11 Metrics sourcing

Every hard stat on a solution page ("75% fewer false alarms," "0.5% of nominal flow,"
"sub-30-second response," "60% faster restoration," etc.) must be sourced, relabeled
as "modeled / illustrative target," or removed. Attribute integration counts to the
data layer explicitly ("8,000+ integrations via the DataMiner xOps data layer"). The
app is mocked; do not present modeled numbers as measured customer outcomes. Pull any
award claim that lacks a citation.

---

## §12 Industries — proof badges + authority line + demo embed

Keep all nine. For each industry page:

- **Proof badge** — one of: *Field-demonstrated* (Energy, Critical Infrastructure /
  Defense, Transportation/Logistics), *Proven at scale* (Networks, Broadcast/Media,
  Cities, Industrial, Water & Environment — backed by the xOps operational model),
  *Roadmap* (Finance — weak at both layers). Note: the visible badge is "Proven at
  scale," not "Platform-proven" — "platform" is banned customer-facing vocab (§0.2).
- **One authority line** — the domain we've operated in / regulators we know (e.g.
  NERC-CIP, ARCONEL, cold-chain customs, clearance routing). One line, not a section.
  Empathy before authority, then back to the demo.
- **Demo embed** — the three demo slots (§2), swapped to that vertical's content where
  it exists, falling back to the platform/hardware demo where Field hasn't gone yet.

---

## §13 Expertise thread + Elementos routing

Light touch (do not over-index):

- **About page** — one short paragraph of domain authority (national security, energy,
  supply chain track record). The deeper expertise story lives here, nowhere else.
- **How-it-works** — one line that the stack is configured by people with the domain
  knowledge (the industry packs: custom heroes, panels, capture checklists, regulator
  templates). One line.
- **Elementos routing** — where buyer intent is services-led (discovery, risk
  baselining, strategy, ISR intelligence products), add a CTA/link routing to
  Elementos, the affiliate. Quatro stays the integrator; it does not present as a
  consultancy. No "Services" nav item.

---

## §14 Verify notes for this repo

- Package manager: **npm**. Scripts: `dev`, `build`, `preview`, `astro`.
- Type/compile gate: `npm run build` (Astro compiles + catches errors) and
  `npx astro check` where types matter.
- No lint/test harness is configured. Visual and copy tickets name a **manual check**
  as `verify:` and report "needs human eyes: <check>" — never auto-pass.
- Start only on a clean tree (`git status --porcelain`). See `docs/TICKET_PROTOCOL.md`.
