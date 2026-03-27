# Image Prompts — Quatro Website

Each `.md` file is a self-contained prompt for AI image generation. Reference `STYLE-BRIEF.md` for brand rules applied to all images.

## Folder Structure

```
image-prompts/
├── STYLE-BRIEF.md              ← Brand rules for all images
├── README.md                   ← This file (audit index)
├── hero-industries/     (5)    ← Hero backgrounds for industry pages (1920×1080)
├── hero-solutions/      (21)   ← Hero backgrounds for solution pages (1920×1080)
├── hero-national-intel/ (4)    ← Hero backgrounds for national intel pages (1920×1080)
├── capability/          (16)   ← Bento card images for featured capabilities (1200×750)
├── proof-points/        (5)    ← Editorial proof point images (1200×750)
└── shared/              (2)    ← Site-wide backgrounds (dark sections, CTA)
```

**Total prompt files: 53**

## Industry Pillar Mapping

Images are organized by the 5 industry pillars introduced in the nav restructure:

### Energy
- Hero: `hero-industries/` — existing `industry-energy.png` (no prompt needed, already in `/public/images/`)
- Capability: `capability/energy-scada-overlay.md`, `energy-pipeline.md`, `energy-operator-guidance.md`
- Proof: `proof-points/energy.md`
- Sub-vertical (Industrial): existing `industry-industrial.png`; capability `industrial-operator-guidance.md`, `industrial-quality.md`; proof `proof-points/industrial.md`

### National Security
- Hero (Defense): existing `industry-defense.png` (rename `induistry-defense.png` typo)
- Hero (Intel): `hero-national-intel/national-intelligence.md`, `counter-cartel.md`, `youth-vulnerability.md`, `resource-protection.md`
- Capability: `capability/defense-air-gapped.md`, `defense-perimeter.md`, `defense-space-domain.md`
- Proof: `proof-points/defense.md`
- Solutions: `hero-solutions/physical-security.md`

### Networks
- Hero: `hero-industries/space-satcom.md`, `broadcast-media.md`
- Solutions: `hero-solutions/teleport-operations.md`, `fleet-health.md`, `satellite-revenue.md`, `space-domain.md`, `network-operations.md`
- No capability prompts yet — needed when bento grid content is flagged as `featured`

### Critical Infrastructure
- Hero: `hero-industries/transportation.md`, `water-environment.md`
- Hero (existing): `industry-cities.png`, `industry-infrastructure.png`
- Capability: `capability/cities-cross-agency.md`, `cities-waste-mgmt.md`, `cities-water-infra.md`, `infra-commercial-ops.md`, `infra-fault-remediation.md`
- Proof: `proof-points/cities.md`, `infrastructure.md`
- Solutions: `hero-solutions/airport-operations.md`, `corridor-intelligence.md`, `port-operations.md`, `water-systems.md`, `environmental-compliance.md`

### Finance (NEW)
- Hero: `hero-industries/finance.md` → output `industry-finance.png`
- Solutions: `hero-solutions/customer-360.md`, `npa-early-warning.md`, `regulatory-compliance.md`, `credit-risk.md`, `claims-classification.md`
- Capability: `capability/finance-customer-360.md`, `finance-npa-warning.md`, `finance-compliance.md`
- Proof: none yet — add `proof-points/finance.md` when case study copy is finalized

## Cross-Pillar Solutions (no pillar-specific home)
- `hero-solutions/asset-monitoring.md`
- `hero-solutions/fleet-logistics.md`
- `hero-solutions/grid-operations.md`
- `hero-solutions/operational-intelligence.md`
- `hero-solutions/pipeline-security.md`

## Image Counts by Folder

| Folder | Count | Notes |
|--------|-------|-------|
| hero-industries | 5 | Space-SATCOM, Broadcast, Transportation, Water, **Finance** |
| hero-solutions | 21 | 16 original + **5 new Finance** |
| hero-national-intel | 4 | Intel hub, Counter-Cartel, Youth, Resource |
| capability | 16 | 13 original + **3 new Finance** |
| proof-points | 5 | Energy, Defense, Cities, Industrial, Infrastructure |
| shared | 2 | Dark section bg, CTA bg |

## Existing Images (already in `/public/images/`)

Industry heroes (no prompt files needed):
- `industry-energy.png`
- `induistry-defense.png` ← **rename to `industry-defense.png`**
- `industry-cities.png`
- `industry-industrial.png`
- `industry-infrastructure.png`

Product heroes: `product-connect-card.png`, `product-platform.png`, `feature-command-center.png`

Shared: `hero-bg.png`, `bg555.png`, `bg.jpg`, `cta.jpg`, `connect.png`, `logo.svg`

## Gaps — Still Needed

| Item | Pillar | Type | Priority |
|------|--------|------|----------|
| Finance proof point | Finance | proof-point | P2 — after case study copy |
| Networks capability images | Networks | capability | P3 — when bento featured flags added |
| National Security capability images (non-defense) | National Security | capability | P4 — when intel pages get bento |

## Cleanup

- Rename `induistry-defense.png` → `industry-defense.png` (typo)
- Delete `Gemini_Generated_Image_wjd0wqwjd0wqwjd0.png` (test artifact)
- Review orphans: `bg-hero-industrial.jpg`, `hero-top.png`, `bg-cta.png`, `cta-bg.jpg`, `industry-mining.png`
