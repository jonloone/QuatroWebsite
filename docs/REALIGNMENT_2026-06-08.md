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
  ├─ The platform (xOps)  (was /utility/xops — §7, the Unify beat)
  ├─ Quatro Field         (NEW — §8, the Act beat)
  └─ How it starts        (was /utility/how-it-starts — unchanged)
```

Update the top nav labels (Industries · Solutions · How it works · Resources ·
Company · Contact). No nav item named "Services."

---

## §5 "The stack" page (reframe `/utility/technology`)

Reframe the existing technology page as the spine over the four-layer map. Lead with
Sense → Unify → Act, then show Data / Reasoning / Agents / Workflows beneath as the
architecture. Pull the hardware/Sense detail out into its own page (§6) and link to
it. Keep substrate hints to Tier 1.5 depth.

---

## §6 "Hardware & IoT" page (NEW — the Sense beat)

New page under How-it-works. Tells the Sense beat: the IoT suite that connects the
physical world (sites, vehicles, people → live signal). Embeds the Sense demo slot
(§2). No hardware-vendor names at this tier. One line of domain authority allowed.
Honest-by-default if device assets aren't supplied yet (§0.1).

---

## §7 "The platform" page (sharpen `/utility/xops`)

Sharpen the existing xOps page as the Unify beat. Foreground the scale numbers (§3
proof strip), frame xOps as the proven operational substrate (connect/normalize/
govern, unified digital twin, command center). Embed the Unify demo slot (§2). This is
DataMiner's battle-tested turf — lean on it for credibility.

---

## §8 "Quatro Field" page (NEW — the Act beat)

New page under How-it-works. **This names the Quatro Field app on the marketing site
for the first time** (the app is currently invisible to buyers). Tells the Act beat:
one governed operating picture, copilot proposes / human decides / every action
signed. Embeds the Act demo slot (§2) showing the real Field surfaces: incident
recompose, governed copilot, signed custody-of-evidence export. Human-in-the-loop and
ownership are the close.

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

`fleet-health` currently means two unrelated products. The site SKU is the *satellite*
fleet ("See Every Orbit") — DataOS/SATCOM heritage. The app's Fleet Health is the
*vehicle* fleet (Ecuador, Velax, 30 trucks). Resolve:

- Rename the satellite SKU to **"Constellation Health"** and move it to the DataOS
  tier (§9).
- Promote the **vehicle** fleet story (Ecuador, Velax, AOI analysis) to the lead Field
  solution under "Live in Quatro Field."

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
  Defense, Transportation/Logistics), *Platform-proven* (Networks, Broadcast/Media,
  Cities, Industrial, Water & Environment), *Roadmap* (Finance — weak at both layers).
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
