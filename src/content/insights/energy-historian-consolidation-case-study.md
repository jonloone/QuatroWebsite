---
title: "From 40 Legacy Databases to One Intelligence Picture"
excerpt: "How a Fortune 500 energy operator unified 200,000+ data points across 40+ legacy systems — and what they learned about the difference between data consolidation and operational intelligence."
category: "case-studies"
industry: "energy"
heroImage: "/images/bento-case-study.png"
author: "Quatro Team"
publishDate: 2026-02-28
featured: false
tags: ["energy", "case-study", "legacy-modernization", "data-consolidation"]
readingTime: "6 min read"
---

The operator — a Fortune 500 energy company with production, pipeline, and grid operations across multiple regions — had accumulated 40+ separate data systems over two decades of acquisitions, upgrades, and vendor changes. Each system worked. None of them talked to each other.

The operational cost wasn't the systems themselves. It was the human cost of translating between them. Shift handoffs required operators to check multiple screens. Incident investigation meant manually correlating timestamps across databases that used different time formats. Compliance reporting was a quarterly exercise in data archaeology.

## The scale of the problem

Forty databases sounds like a number. In practice, it meant:

Different historians from different decades — OSIsoft PI alongside Wonderware alongside custom SQL databases alongside flat files from equipment that predated modern SCADA.

Different naming conventions. The same physical sensor might be "TT-4501" in one system, "TEMP_TOWER_NORTH_01" in another, and "Tag #7782" in a spreadsheet that only two people knew existed.

Different update frequencies. Some systems polled every second. Others logged on change of value. Others updated daily. Trying to correlate events across these systems meant accepting that "the same time" could mean anything within a 24-hour window.

Different access methods. APIs, ODBC connections, file drops, serial protocols, and in one case, a system that could only be queried through a terminal emulator running on a specific workstation in a specific control room.

## What consolidation actually required

The conventional approach would have been a multi-year data warehouse project: normalize schemas, build ETL pipelines, migrate historical data, decommission legacy systems. The quotes they received ranged from 18 to 24 months and required dedicated teams from both the operator and the integration vendor.

The overlay approach was different. Instead of moving data out of legacy systems, the intelligence utility connected to each system where it lived. Pre-built connectors handled the protocol diversity — DNP3, Modbus, OPC-UA, PI SDK, SQL, REST APIs, and file system monitors all running simultaneously.

The normalization happened at the intelligence layer, not the storage layer. The utility built a common data model that mapped "TT-4501" and "TEMP_TOWER_NORTH_01" to the same physical sensor, reconciled timestamps across different polling frequencies, and established the relationships between data points that had never been formally connected.

## The results

**200,000+ data points unified** into a single operational model. Operators working from one screen instead of five. Incident investigation dropped from hours of manual correlation to minutes of guided analysis.

**60% reduction in integration costs.** Not by eliminating legacy systems — by eliminating the manual effort required to bridge them. The human middleware of spreadsheets, phone calls, and tribal knowledge was replaced by automated correlation.

**Weeks, not months.** The initial proof of value connected the highest-priority systems in four weeks. Expansion to the full 40+ database estate took additional phases, but each phase built on the model established in the first four weeks. By the time they connected the last legacy system, the utility already understood the operational context well enough to integrate it in days.

## What they learned

The most important lesson wasn't technical. It was operational.

Data consolidation — getting all the numbers into one place — is necessary but not sufficient. What changed the control room was intelligence: understanding which data points relate to each other, what patterns indicate developing problems, and what actions operators should take based on the full operational picture.

The operators didn't need a bigger database. They needed a system that understood their operation the way an experienced engineer understands it — connecting cause and effect across systems that were never designed to work together.

That's the difference between a data warehouse and operational intelligence. One stores data. The other understands operations.
