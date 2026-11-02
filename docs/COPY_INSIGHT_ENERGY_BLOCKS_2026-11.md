# Copy deck — Insights post: an hour of firm power for the dry season

Ticket: `SPEC-COPY-9` (builds in `NRG-BLK-6`). Spec: `docs/REALIGNMENT_2026-11-02_ENERGY_BLOCKS.md` §2, §5;
`docs/REALIGNMENT_2026-10-20.md` §9C. Status: **draft, awaiting Jonathan's approval** (the post is not built until
this line reads "approved").

Sources: every figure is from ENERGY_BLOCKS §2 (supplier Rev G sheet, Oct 2026) or the lines already in
`docs/COPY_ENERGY_BLOCKS_2026-11.md` §1 and §3. Supplier not named; no client or site; no price, incentive,
"6 GW" or "UL listed"; no third-party platform name. Status labels appear where the blocks are named.

Build notes for NRG-BLK-6: file `src/content/insights/an-hour-of-firm-power.md`; set `publishDate` to the build
day; the `dry-season` tag pins it to `/industries/energy`.

---

```markdown
---
title: "An Hour of Firm Power, Ninety Days Out"
category: "industry-trends"
industry: "energy"
author: "Quatro Team"
publishDate: SET-AT-BUILD
featured: false
tags: ["dry-season", "energy-storage", "grid", "firm-capacity"]
readingTime: "5 min read"
excerpt: "In a hydro-heavy grid, the dry season shows up first at one hour of the day: the evening peak, after the reservoirs have carried the afternoon. Storage blocks delivered within a quarter can hold that hour, if they sit where the grid is constrained and the control room dispatches them."
heroImage: "/images/cap-energy-blocks-substation.jpg"
---

When a hydro-heavy grid goes into the dry season, the shortfall shows up first at one hour of the day. The reservoirs carry the afternoon, demand climbs after sunset, and the evening peak is where the reserve margin runs out. For most of the day the system copes. At seven in the evening it gets tight.

That hour is worth looking at on its own, because it is a different problem from the season as a whole. The season is a question of water. The evening peak is a question of capacity at a specific time and place, usually a handful of substations where the network is already loaded.

## What a battery does in a dry season

A battery stores energy generated earlier and returns it later, minus losses. In a dry season that is useful in one specific way. Energy taken from the grid in the hours when it is available, overnight or at midday when solar is producing, comes back in the hour when it is scarce. The reservoir is spared the evening ramp, and that water stays behind the dam for another day.

The arithmetic is plain. One 40-foot block holds 4 MWh and delivers 4 MW, so it covers one hour at full output. Ten blocks at a congested substation provide 40 MW and 40 MWh while a new line is planned. One hundred blocks hold a 400 MWh reserve for the dry-season evening peak, dispatched from one control room. Round-trip efficiency is 90% or better.

## The constraint is time

A new plant or transmission line takes years to permit and build. The dry season arrives on a calendar.

A storage block is delivered, installed and tested on site in 90 to 120 days from deposit. It arrives as one 40-foot container, sits on a prepared pad and connects at 480 V and 60 Hz. Blocks stack two-high, so ten of them fit on five container footprints, which matters at substations where the fenced area is already full.

The planning question changes as a result. Instead of asking what can be built before next year, an operator can ask which substations bind first this season and size blocks for those.

## Where the blocks go

The first sites are the substations where the grid is constrained in the evening. The blocks are grid-forming and black-start capable, so a block can also island a hospital or a water plant and restart it if the national grid is lost.

The cells are sodium-ion, with no lithium, and passively cooled from –40 to +70 °C. No battery air conditioning is needed, which removes a maintenance item at coastal sites and at altitude.

## Who dispatches

Every block reports through Modbus and IEC 61850 into the operational picture your team already runs, beside reservoir levels and transmission loading. Your control room schedules and dispatches it. Quatro sizes the blocks, confirms the interconnection and the pad, installs and operates them with your team, and you own the asset from day one.

That last point matters most in a dry season. A reserve held in a separate system, read from a separate screen, is one more thing to check during the hardest hour of the day. A reserve on the same picture as the reservoirs is one more decision the operator can make from where they already sit.

## Status today

Storage block and water block: available now. Compute block: built to order. Fuel-free generation block: in development, not yet available for order.

Figures above are the supplier's specification, indicative, and confirmed at quotation. The blocks are supplied by a U.S. manufacturing partner and integrated, installed and operated with Quatro.

The dry season comes back every year. A quarter is enough time to have that hour of firm power in place before it does.
```

---

## Voice gate (SPEC-COPY-9)

- A (grep): no platform, digital twin, OT/IT, empower/enable/unlock/leverage, hype words, exclamation points,
  em-dashes; no supplier name, price, "6 GW", "UL".
- B (read): no "not X, Y" antithesis; lists are two items or functional; no inflated significance; closer is one
  observation, no recap.
- C (positioning): your control room dispatches, you own the asset; Quatro sizes, installs and operates with your
  team. Status labels present.
- D (claims): every figure is a §2 supplier figure or a deck §1/§3 line, labeled indicative in the post.
