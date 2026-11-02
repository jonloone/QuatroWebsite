# Addendum 2026-11-02 — Quatro Energy: firm power and energy blocks

Extends `docs/REALIGNMENT_2026-10-20.md` (all §0 invariants, §1 naming rules and `docs/VOICE_GATE.md` apply).
Source material: the two Claude Slides decks "Quatro Energy — What We Power" (EN) and "Quatro Energy — Lo que energizamos" (ES, neutral LATAM), outline and red team at `LMIQuatro/RiverTech-Energy-Blocks-2026-11/`. Copy deck: `docs/COPY_ENERGY_BLOCKS_2026-11.md`. Tickets: `BACKLOG.md` P6.

## §1 What is being added, and the one decision it needs

Quatro now integrates containerized, grid-forming, lithium-free (sodium-ion) energy storage blocks, 4 MW / 4 MWh per 40-ft unit, delivered and commissioned in 90 to 120 days, composable on one 1,000 Vdc rail with water, compute and (in development) fuel-free generation. The blocks are manufactured by a U.S. partner and integrated, installed and operated with Quatro; the hardware reports into the operational model (xOps) like any other asset.

**DECISION-NEEDED (DEC-3, Jonathan):** how the practice name appears on the site.
- Option A — "Quatro Energy" as a named practice: capability page eyebrow and H1 carry the name; the Energy industry page gains a "Quatro Energy services" band; a `/energy` alias redirects to the capability page.
- Option B — plain capability: the page is "Firm power: energy blocks" under Capabilities, no sub-brand; decks keep "Quatro Energy" as a deck-only label.
Default if unanswered: Option B (nothing on the site claims a practice that is not yet described anywhere else). The copy deck is written so either option is a one-line change in the eyebrow and H1.

## §2 The capability page (7th entry in `capabilities`, `order: 7`, `layer: quatro`)

Follows the §5 `CapabilityLayout` exactly: hero (eyebrow, H1, sub) → what you get (six lines) → how it shows up (three industry examples linking to `/industries/energy`, `/industries/mining`, `/industries/security`) → substrate line (Tier 1.5: "supplied by a U.S. manufacturing partner, integrated, installed and operated with Quatro"; the partner is not named on the site) → proof card (honest placeholder until a Quatro-delivered site exists; a "supplier-stated" status line is allowed, labeled) → hand-off to Operational intelligence and to Managed service → engagement paragraph → CTA "Talk to our team".
Slug: `energy-blocks` (`/capabilities/energy-blocks`, `/es/capabilities/energy-blocks`). Index page lists it with the six existing capabilities (check the index is collection-driven, not hard-coded to six).

Numbers allowed on the page (all from the supplier's Rev G sheet, Oct 2026, and labeled "supplier specification, indicative"): 4 MW / 4 MWh per 40-ft block; 90–120 days from deposit; 12-year or 6,000-cycle warranty; ≥90 % round-trip; –40 to +70 °C passive battery cooling; stackable two-high; 1,000 Vdc rail; Modbus / IEC 61850; 480 V 60 Hz. Not allowed: price, incentive eligibility, "6 GW capacity" (supplier claim, decks only), any client or site name, "UL listed" (ETL certification is in progress; say so or omit).

Status labels are mandatory wherever a block is named: Store and Water "available now"; Compute "built to order"; Generate "in development, not yet orderable".

## §3 Industry cross-links

- `energy.md` (EN/ES): one new capability card "Firm capacity in 90 to 120 days" (featured, image `cap-energy-blocks-substation.jpg`) and a "service lines" paragraph linking the capability page. No change to the existing five capabilities or challenges.
- `mining.md`: one capability card "Off-grid power for camps and plants" (industrial and remote power).
- `security.md`: one capability card "Power for the services a country cannot allow to fail" (critical services resilience, disaster response, sovereign micro data center).
- `cities.md`: one line under disaster response linking the capability page (storage + water block).
Each card copy is in the copy deck §3; cards are labels plus one sentence, no new stats.

## §4 Images

Source: `LMIQuatro/RiverTech-Energy-Blocks-2026-11/images/` (eleven v7.1 generated, 2752×1536 PNG; three supplier photo strips 1032×248). Copy into `public/images/` under the §12 naming rule: `cap-energy-blocks-{substation,interior,delivery,compute,water,community}.jpg` (export JPEG q86, 2400×1350), `proof-energy-blocks-asbuilt-{racks,aisle,transport}.jpg`. Hero for the capability page: `cap-energy-blocks-substation.jpg` (text-overlay zone on the left). Supplier strips are used only inside a proof card band, never full-bleed, and carry the caption "supplier photograph".

## §5 Honesty and naming rules specific to this content

- The supplier is not named on the site (Tier 1.5). Decks name it in the technical annex only.
- The operational model is described as Quatro's; no third-party platform names (DataMiner/xOps stay on the pages that already carry "Powered by DataMiner" per §1).
- No "lights stay on" or comparable metaphor; no "not X, Y"; no tricolons (VOICE_GATE B).
- Export-control and financing language is not published (presenter notes only).

## §6 Spanish

The ES deck is already neutral LATAM Spanish ("temporada seca", not "estiaje"; "camiones cisterna"; no Costa/Sierra/Amazonía). The ES half of the copy deck is pasted from it, then read by Esteban before publish (SPEC-COPY-ES-3). Spanish-first phrasing rule (§0.6) holds; nothing is machine-translated at build time.

## §7 Verify

`npm run build` green; `astro check` zero new vs baseline; VOICE_GATE A grep zero on the new files (`platform`, `enable`, `unlock`, `seamless`, `!`); status labels present on every block mention; no supplier name in `src/` or `dist/` (`grep -ri "river tech" src dist` → zero); EN and ES pages both build; `/capabilities` index shows seven.
