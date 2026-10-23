# Drop-in copy — Hardware & IoT page (Sense beat)

**For ticket:** `HIW-2`. Spec §6. **No hardware-vendor names at this tier.**
**Voice:** passes `docs/VOICE_GATE.md`.

---

## 1. Hero
- **Eyebrow:** `How it works · Hardware & IoT`
- **H1:** `Your operation already throws off signal.`
- **Sub:** `We connect the hardware that captures it. Sites, vehicles, and people become live signal the rest of the stack can act on.`

## 2. Sense demo slot
- **Eyebrow:** `See it work`
- **Title:** `A device in the field, reporting live.`
- **Caption:** `A wearable detects a fall and opens an incident. A telematics unit flags a cold-chain breach in transit. The signal is moving before anyone picks up a phone.`
- **Component:** `<DemoSlot beat="sense" asset={senseDemoAsset} placeholder="Field device capture. Demo view in preparation." />`

## 3. What we connect (three classes, plain language, no vendor names)
- `For people` — `Wearables and badges that report location, status, and duress.`
- `For vehicles` — `Telematics that stream position, cargo condition, and alarms.`
- `For sites` — `Sensors that read the conditions an operation runs on.`

## 4. One authority line
> `We have fielded this hardware in energy and logistics operations, where the signal has to survive the real world.`
> *(Confirm this is accurate before publish — state real familiarity, never an invented deployment. §0.1.)*

## 5. Hand-off to Unify
> `Signal on its own is noise. It becomes useful the moment it is unified.`  → `The operational model →`

## 6. Sibling nav — The operational model · Quatro Field · How it starts

> Voice notes: no SMARTS/TEKTELIC/IoT-Orbital names; "an IoT suite that connects the
> physical world" is the allowed framing; buyer-as-hero.

---

## Amendment 2026-10-22 (CAP-3, REALIGNMENT_2026-10-20 §5C)

Page moves to `/capabilities/iot-edge` (CapabilityLayout). Eyebrow is the layer, `Quatro's layer`.
Hardware is named "the Quatro IoT & Edge Suite" (§1c). Quatro Field sibling nav retired (§1c).
§4 authority line is held (no template field; still needs confirmation per §0.1).

**What you get** (§3 classes, then OT communications per §5C)
- `For people: wearables and badges that report location, status, and duress.`
- `For vehicles: telematics that stream position, cargo condition, and alarms.`
- `For sites: sensors that read the conditions an operation runs on.`
- `OT communications that keep a remote site reporting: satellite as the primary link, L-band failover, cellular backup, and LoRaWAN for field capillarity.`
- `Solar power and field enclosures for sites off the grid.`
- `Hardware only where confirmed risk justifies it. The satellite baseline and the risk baseline come first.`

**How it shows up:** Energy and pipelines (/industries/energy): `The risk baseline at the first gate decides which segments get field sensing, and the hardware goes only there.` (from `COPY_CAPABILITIES` 5E)

**Substrate line:** `The hardware is the Quatro IoT & Edge Suite, integrated and supported by Quatro.`

**Hand-off:** §5 as written → /capabilities/operational-intelligence ("The operational model").
