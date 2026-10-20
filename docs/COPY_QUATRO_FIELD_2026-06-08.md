# Drop-in copy — the Quatro Field page (Act beat)

**For ticket:** `FIELD-1`. Spec `REALIGNMENT_2026-06-08.md` §8.
**Voice:** passes `docs/VOICE_GATE.md`. This is the first time the app is named on the
site. Tier 1.5–2.

---

## 1. Hero

- **Eyebrow:** `How it works · Quatro Field`
- **H1:** `One governed picture your operators act from.`
- **Sub:** `Quatro Field is the operating surface where the signal becomes a decision. The copilot proposes the next action. Your team decides. Every action is signed.`
- **Primary CTA:** `Talk to our team`

## 2. Act demo slot

- **Eyebrow:** `See it work`
- **Title:** `From alarm to signed action, on one screen.`
- **Caption:** `An incident opens, the surface recomposes around it, the copilot proposes the next step, and the evidence package exports signed.`
- **Component:**
  ```
  <DemoSlot
    beat="act"
    title="From alarm to signed action, on one screen."
    caption="An incident opens, the surface recomposes around it..."
    asset={fieldDemoAsset}      // null → honest placeholder
    aspect="16:9"
    placeholder="Quatro Field walkthrough. Demo view in preparation."
  />
  ```

## 3. The intelligence-work loop (five steps)

**H2:** `How a shift runs on Quatro Field.`

1. `One operating picture.` — `Every system that matters to the incident, in one frame.`
2. `The copilot proposes.` — `It reads the live model and suggests the next action.`
3. `Your team decides.` — `Operators approve, adjust, or override. Nothing acts on its own unless you say so.`
4. `Every action is signed.` — `Human or agent, the step lands in the audit log with a verifiable signature.`
5. `It compounds.` — `The decision feeds the morning briefing and the after-action review.`

## 4. Ownership + human-in-the-loop (close)

**H2:** `You own the picture, the rules, and the record.`

**Body:** `Quatro Field runs on your infrastructure. Your team sets the governance. The audit chain is yours to verify. Agents propose. Humans sign. The intelligence belongs to you from day one.`

## 5. What it looks like in the field (lead narratives)

**H2:** `Built for the work, by vertical.`

- `Cold chain` — `A temperature breach on the Quito to Miami corridor recomposes into a driver-safety surface on the same incident.`
- `Critical infrastructure` — `A perimeter incursion fuses acoustic, AIS, and thermal signals, then exports a custody-of-evidence package at the close.`

> Pull both examples only from real Field fixtures. If a narrative's demo asset is not
> ready, the DemoSlot shows the honest placeholder (§0.1) — do not fabricate a screen.

## 6. CTA + sibling nav

- **CTA:** `Talk to our team`
- **Sibling nav:** Hardware & IoT · The operational model · How it starts

> Voice notes: names "Quatro Field" plainly; buyer-as-hero ("your operators decide");
> no "platform"; human-in-the-loop stated, not implied; no tricolon in the loop titles
> (each is a plain step).
