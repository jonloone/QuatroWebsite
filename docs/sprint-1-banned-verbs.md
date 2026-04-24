# Sprint 1 — Banned-Verb Fix List

Produced by the `quatro-rehaul` driver, Sprint 1. **Do not rewrite content yet** — this is a triage list. Each entry carries a suggested replacement for the actual language pass in Sprint 4.

Rules from `jonathan-voice` and `quatro-cascade`:
- No marketing verbs: *empowered, enabled, powered, unlocked, leveraged, transformed* (when used as puffery).
- The operator is the hero, not the platform. Rewrite "Quatro enables X" as "Operators do X because the system shows Y."
- Specific > vague. "Leaks detected within minutes" beats "enabling rapid response."
- Vocabulary bans (delve, tapestry, pivotal, testament) should simply be deleted on sight.

---

## Summary — totals

| Banned term      | Hits | Notes |
|---|---:|---|
| `enabling`       | ~22  | Dominant offender. Usually used as connective tissue ("X, enabling Y") — rewrite as "so Y" or as a separate sentence naming the operator action. |
| `seamless` / `seamlessly` | 5 | Delete on sight; prefer "without dropping connections" / "without hand-off" / specific mechanics. |
| `leverage` / `leverages` | 4 | Replace with "use." |
| `transforms` / `transform` / `transformation` | 30+ | Triage split required: "data transform" / "transformation pipeline" is allowed technical language. Marketing uses ("Transform passive surveillance into…") must go. |
| `robust` | 1 | Delete or replace with the specific property. |
| `empower` | 1 | Replace with the specific operator verb. |
| **Total (banned regex #1)** | **40 across 29 files** | |
| **Total (transform, marketing use only)** | **~25 across 20 files** (est.) | Needs manual split vs technical uses. |

---

## Fix list — banned regex #1 (`empower|enable|power|unlock|seamless|robust|cutting-edge|leverage|synergize|delve|tapestry|pivotal|testament`)

### Frameworks and hub pages

**`src/content/verticals/water-environment/framework-water-environment-hub.md:110`**
- Phrase: "localization accuracy **enabling** surgical repairs"
- Suggested: "localization accuracy that lets a crew open one valve instead of ten."

**`src/content/verticals/water-environment/framework-water-systems.md:65`**
- Phrase: "pipe degradation **enabling** contamination ingress"
- Suggested: Drop "enabling"; say "pipe degradation lets contamination in."

**`src/content/verticals/water-environment/framework-water-systems.md:98`**
- Phrase: "Localization accuracy **enabling** surgical repairs instead of system-wide searches."
- Suggested: "Localization accuracy tight enough for surgical repairs instead of system-wide searches."

**`src/content/verticals/water-environment/framework-environmental-compliance.md:186`**
- Phrase: "Organizations with **robust** real-time monitoring and documented rapid response…"
- Suggested: "Organizations with real-time monitoring and documented response times…" (drop "robust"; the concrete metric does the work).

**`src/content/verticals/space-satcom/framework-fleet-health.md:147`, `:266`**
- Phrase: "…advance warning **enabling** planned maintenance during scheduled outage windows."
- Suggested: "…advance warning that lets crews schedule work inside a planned outage window."

**`src/content/verticals/transportation/framework-port-operations.md:169`**
- Phrase: "…protects sovereignty while **enabling** logistics."
- Suggested: "…keeps sovereignty intact and keeps cargo moving."

**`src/content/verticals/transportation/framework-airport-operations.md:106`**
- Phrase: "Cargo operations **seamless**."
- Suggested: Drop "seamless." End the sentence at "Equipment failures don't extend turnaround."

### Industry and solution pages

**`src/content/industries/water-environment.md:49`**
- Phrase: "localization accuracy **enabling** surgical repairs."
- Suggested: Same as `framework-water-systems:98`.

**`src/content/solutions/grid-health.md:41`**
- Phrase: "**Seamless** onboarding of solar, wind, battery storage, and EV charging…"
- Suggested: "Onboarding of solar, wind, battery storage, and EV charging in days, not quarters."

### Use-case pages (marketing-heavy surface)

**`src/content/use-cases/base-protection.md:34,37,63,97`**
- Four hits, all "enabling." Representative:
  - `:63` "reduced false alarms by 85%, **enabling** the security team to shift from reactive alert management to proactive threat hunting."
  - Suggested: "reduced false alarms by 85%. The security team stopped chasing alerts and started hunting."

**`src/content/use-cases/grid-operations.md:31,43,66`**
- `:43` "Connects to DMS, EMS, DER management, and wholesale market systems **seamlessly**."
  - Suggested: Drop "seamlessly"; list the protocols ("via ICCP, OpenADR, and REST").

**`src/content/use-cases/smart-facilities.md:63`** (long line omitted)
- Review and rewrite based on verb context. Likely "enabling" mid-sentence.

**`src/content/use-cases/pipeline-integrity.md:37`**
- Phrase: "…before failure, **enabling** preventive action."
- Suggested: Drop the clause; the antecedent ("before failure") already says it.

**`src/content/use-cases/predictive-maintenance.md:87`**
- Phrase: "Force readiness **leverages** predictive intelligence…"
- Suggested: "Force readiness relies on predictive intelligence…"

**`src/content/use-cases/oee-optimization.md:63,70`**
- `:70` "…the efficiency **leverage**."
  - Suggested: "…the efficiency margin."

**`src/content/use-cases/galapagos-conservation.md:82,99`**
- `:82` "Fleet tracking and logistics monitoring **leverage** the same AIS fusion…"
  - Suggested: "Fleet tracking and logistics monitoring use the same AIS fusion…"
- `:99` "…into a unified operational intelligence utility, **enabling** governed autonomous action…"
  - Suggested: Split into two sentences. "…into one operational intelligence utility. Operators run autonomous actions inside defined guardrails."

**`src/content/use-cases/youth-violence-prevention.md:80`**
- Phrase: "…resource coordination **leverage** the same governance dashboards…"
- Suggested: "…resource coordination run on the same governance dashboards…"

### Insights posts (high-visibility)

**`src/content/insights/ground-to-orbit-noc-one-intelligence-model.md:14`**
- Phrase: "A device in remote Kenya can handoff **seamlessly** from a terrestrial tower to LEO coverage…"
- Suggested: "A device in remote Kenya can hand off from a terrestrial tower to LEO coverage without dropping the call." (The existing next clause already says that — deduplicate.)

**`src/content/insights/multi-domain-intelligence-fails-at-the-seam.md:52,76`**
- `:76` "…that **empower** local command while **enabling** cross-installation coordination…"
- Suggested: "…that keep local command authority while letting installations coordinate across the perimeter…"

**`src/content/insights/data-integrity-problem-carbon-markets.md:76`**
- Phrase: "Article 6…specifies **robust** accounting and verification requirements."
- Suggested: "Article 6…specifies the accounting and verification requirements operators actually have to meet."

**`src/content/insights/the-identity-resolution-gap-in-government-services.md:64`** (long line omitted)
- Review in context; likely "enabling" mid-sentence.

### National / flagship surfaces

**`src/content/national-intelligence-platform.md:35`**
- Phrase: "…**enabling** targeted intervention against organized crime recruitment networks."
- Suggested: "…so investigators can target recruitment networks a week before the enlistment ritual." (Adds specificity. Verify claim.)

**`src/content/youth-vulnerability-index.md:9,75`**
- Both use "enabling." Same treatment.

**`src/content/counter-cartel-operations.md:9`**
- Phrase: "…**enabling** coordinated multi-agency operations against transnational criminal organizations."
- Suggested: "Police, customs, and tax authorities act on the same picture at the same time."

**`src/content/resource-protection.md:133`**
- Phrase: "…identifies the organizations that fund and protect illegal operations — **enabling** enforcement that targets the network…"
- Suggested: "…identifies the organizations that fund and protect illegal operations. Enforcement targets the network, not the pit."

### Case studies

**`src/content/case-studies/energy-historian-consolidation.md:38`**
- Phrase: "…in seconds, **enabling** rapid root cause analysis…"
- Suggested: "…in seconds. Operators run root-cause against ten regions instead of one."

**`src/content/case-studies/infrastructure-uptime.md:27`**
- Phrase: "Predictive maintenance models identify equipment at risk of failure, **enabling** proactive replacement."
- Suggested: "Predictive maintenance models flag equipment at risk. Crews replace parts on the next scheduled visit."

### Retired products (`_retired/`)

Three hits in `products/_retired/{see,orchestrate,understand}.md`. These files are retired and will not ship — defer fixes unless the content is re-surfaced.

---

## Fix list — `transform` (marketing uses only)

Manual triage required. The following are **marketing uses** (rewrite) — the others are allowed technical usage:

### Rewrite (marketing)

- `src/content/verticals/broadcast-media/framework-broadcast-media-hub.md:30` — "…**transforming** fragmented signal management…"
- `src/content/national-intelligence-platform.md:9, 35, 95` — three instances of "transforms fragmented data into…"
- `src/content/verticals/water-environment/framework-water-environment-hub.md:139` — "…**transforms** into a unified operational picture…"
- `src/content/verticals/transportation/framework-transportation-hub.md:153` — "…**transforms** into a unified logistics intelligence picture."
- `src/content/verticals/space-satcom/framework-*.md` — four framework intros open with "transforming X into Y." Rewrite all four to lead with the operator outcome, not the platform verb.
- `src/content/solutions/{physical-security,service-assurance,revenue-assurance,fleet-health,space-domain-awareness}.md` — hero descriptions use "transforming." Rewrite to lead with the observable change.
- `src/content/solutions/{pipeline-integrity,airport-operations,environmental-compliance,corridor-intelligence}.md` — section headlines of the form "X Transformation." Rename: "Pipeline Integrity Rollout," "Airport Operations Turnaround," etc.
- `src/content/use-cases/{base-protection,galapagos-conservation,mining-operations,youth-violence-prevention}.md` — "transforms [reactive/passive] into [proactive/predictive]." These are the dominant offenders. Rewrite around the operator moment.
- `src/content/insights/{predictive-community-intelligence-early-warning,the-identity-resolution-gap,conservation-intelligence-when-more-sensors-dont-mean-more-awareness}.md` — insights use "transformation" as an abstract verb. Each needs a specific fact in its place.
- `src/content/case-studies/infrastructure-uptime.md:5` — excerpt uses "transformed their NOC operations."

### Keep (technical)

- `transformer` (electrical equipment) — `framework-fleet-health.md:266`, `insights/grid-modernization-without-rip-and-replace.md:56`.
- "Transformación" in Spanish content is idiomatic. Review separately with `quatro-latam` — many of the Spanish strings are direct translations of English copy that should be rewritten.

---

## Priority for Sprint 4

1. **Homepage + hero descriptions** (highest visibility).
2. **Framework intros** — every hub page opens with the same "transforming X into Y" pattern. Five pages, five rewrites.
3. **Insights posts** — these are Jonathan's voice surface. Should be clean.
4. **Use-case "enabling" clauses** — easy mechanical fixes, high count.
5. **Solution / industry section headlines ending in "Transformation"** — rename to a specific outcome.
6. **Spanish (`-es`)** content — separate pass; don't touch until English is finalised so translations track.
