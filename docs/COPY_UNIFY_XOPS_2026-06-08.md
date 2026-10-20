# Drop-in copy — the Unify page (`/utility/xops`)

**For ticket:** `HIW-3` (spec `REALIGNMENT_2026-06-08.md` §7).
**Voice:** quatro-cascade + jonathan-voice. Periods only. No banned vocabulary.
Paste these strings; keep the existing layout/components named in §7 unless noted.

> **Label correction (enforce):** do not title this page or its nav item "The
> platform" — "platform" is banned brand vocabulary (§0.2). Use **"The operational
> model"** as the page title and nav label; "Unify" is the beat name. Also replace any
> "digital twin" string with **"real-time operational model."** Update §4's nav tree
> and §7's title accordingly.

---

## 1. Hero

- **Eyebrow:** `How it works · The operational model`
- **H1:** `Fifteen vendors. One operational truth.`
- **Sub:** `Your operation runs on systems that were never built to talk to each other. We bring them into one live model your team works from. Multivendor by design, proven at national scale.`
- **Primary CTA:** `Talk to our team` · **Transitional:** `See Quatro Field →` (anchors to §8 hand-off)

## 2. Scale proof band (foreground high, right under the hero)

- **Eyebrow:** `Proven, not promised`
- **Stats (mono, evenly spaced):**
  `1,000+ operators` · `10,000+ nodes deployed` · `125+ countries` · `8,000+ integrations` · `14+ technology awards`
- **Caption:** `The operational-model layer runs on DataMiner xOps, in production with operators worldwide. The integration catalog grows continuously.`

## 3. Unify demo slot

- **Eyebrow:** `See it work`
- **Title:** `One map. Every system.`
- **Caption:** `The command center correlates alarms across domains, so a fault in one system shows its impact on the others before it cascades.`
- **Component:**
  ```
  <DemoSlot
    beat="unify"
    title="One map. Every system."
    caption="The command center correlates alarms across domains..."
    asset={unifyDemoAsset}        // image | clip | iframe; null → placeholder
    aspect="16:9"
    placeholder="Live xOps command-center walkthrough. Demo view in preparation."
  />
  ```
- **Layout:** full-bleed within a `bg-quatro-ink` section; glass caption bar
  (`backdrop-blur-md`); forest-green accent; `img-technical` on any static frame.
  Null asset → labeled placeholder card with a muted command-center wire sketch.
  Never a fabricated screenshot (§0.1).

## 4. "Your systems → operational model → applications" diagram (KEEP)

- **H2:** `From your systems to the applications your team runs.`
- Keep the existing three-column SVG. **Relabel the center column** from any
  "digital twin / semantic" wording to `Live operational model`. Keep the
  `8,000+ integrations` flow label and the `Domain-trained reasoning` annotation.

## 5. The ownership argument (was "anti-SaaS" — KEEP section, replace copy)

- **H2:** `You own the model.`
- **Sub:** `This is a utility you connect to, not a subscription you depend on. It deploys on your infrastructure and answers to your rules. Your data stays in your control.`
- **Three cards (titles + one line each):**
  - `Your infrastructure` — `Cloud, hybrid, on-prem, or air-gapped. You choose where it runs.`
  - `Your rules` — `Governance is yours to set. Every action lands in the audit log, human or agent.`
  - `Your model` — `The operational model belongs to your team. The engagement has a hand-off, not a leash.`

## 6. Five operational domains (final card copy)

- **H2:** `Five operational domains, one model.`
- **Five cards (name + one line each):**
  - `Asset & inventory` — `Every asset, device, and connection as an operational resource you can see and act on.`
  - `Monitoring & observability` — `Live status across systems, with cross-domain alarm correlation that cuts the noise.`
  - `Orchestration & control` — `Governed workflows that move a decision from alert to action.`
  - `Service assurance` — `Watch the service your customers feel, not just the boxes underneath it.`
  - `AI-powered operations` — `Root-cause and operator guidance grounded in the live model, never a loose prompt.`

## 7. Powered by DataMiner (KEEP trust signal)

- **Copy:** `The operational-model layer is DataMiner xOps, deployed by operators in 125+ countries and recognized with 14+ technology awards.`

## 8. Hand-off to Act (Quatro Field)

- **H2:** `A model is only worth it if your team can act from it.`
- **Sub:** `That is Quatro Field. The operating picture where your operators decide and every action is signed.`
- **CTA link:** `See Quatro Field →` → `/utility/quatro-field` (§8)

## 9. Sibling nav (KEEP)

Hardware & IoT · Quatro Field · How it starts. Relabel the current "xOps" tile to
`The operational model`.

---

## Voice check (run before commit)

- No "platform," "digital twin," "OT/IT," "empower/enable/unlock/leverage," "best-in-
  class," exclamation points.
- No em-dash connective tissue, no "not X, Y" antitheses, no three-beat tricolons.
- Buyer is the hero: "your team works from," "you own the model." Quatro integrates and
  enables; it does not "build" or "deliver" for them.
- Every number is real (xOps figures) and attributed. No invented metric (§0.1, §11).
