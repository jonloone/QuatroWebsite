# Copy deck — Cull and refocus (P7)

Ticket: `SPEC-COPY-8`. Builds in `CULL-1`, `CULL-2`, `CULL-3`, `NAV-2`, `HOME-2`, `COMP-1`.
Spec: `docs/REALIGNMENT_2026-11-02_CULL.md` §C–§G. Decisions: DEC-3 (energy blocks, Option B), DEC-4 (DataOS at
Tier 1.5 only). Paste from here; do not free-write. Voice gate applies; "platform"/"plataforma" stays banned for
DataOS and xOps alike.

**Verbatim carries.** Where a section says "carry verbatim", the build copies the named existing string from the
named file unchanged (EN and ES). Only the strings written out in this deck are new.

**Spanish.** Neutral LATAM, usted. New Spanish strings below are for Esteban's read before publish (§0.6); carried
Spanish strings are already on the site.

**Marked [confirm]:** choices the spec leaves open (which cards and challenges are cut to reach five and three).
They are the deck's proposal; Jonathan confirms or swaps before `CULL-2` ships.

---

## §1 C1 — DataMiner xOps, the operational model (`operational-intelligence.md`, EN/ES)

Changes to the existing page; everything not listed stays as it is.

| Field | EN | ES |
|---|---|---|
| `title` | DataMiner xOps: the operational model | DataMiner xOps: el modelo operativo |
| `hero.eyebrow` | DataMiner xOps | DataMiner xOps |
| `hero.title`, `hero.sub` | carry verbatim | carry verbatim |

**whatYouGet — append two lines (items 6 and 7):**

- EN 6 (what connects): "Field sensing and OT communications bring remote sites into the model: sensors on sites, vehicles and people, with satellite as the primary link, L-band failover, cellular backup and LoRaWAN in the field. Hardware goes only where confirmed risk justifies it."
- ES 6: "La sensórica de campo y las comunicaciones OT traen los sitios remotos al modelo: sensores en sitios, vehículos y personas, con satélite como enlace principal, respaldo en banda L, respaldo celular y LoRaWAN en campo. El hardware va solo donde el riesgo confirmado lo justifica."
- EN 7 (what the model does with the signal): "More than eight variables correlated on one event: pressure, flow, temperature, operational status, acoustic, vibration, observation from orbit and field reports. Correlation is how false alarms come down, so the alarm that reaches your operator arrives already triaged."
- ES 7: "Más de ocho variables correlacionadas en un mismo evento: presión, caudal, temperatura, estado operativo, acústica, vibración, observación desde órbita y reportes de campo. La correlación es lo que baja las falsas alarmas, y la alarma que llega a su operador llega ya clasificada."

**substrateLine (replaces the current one):**

- EN: "The operational-model layer is DataMiner xOps, deployed by operators in 125+ countries and recognized with 14+ technology awards. Quatro resells and integrates it, and operates it in your country with your team."
- ES: "La capa del modelo operativo es DataMiner xOps, desplegada por operadores en más de 125 países y reconocida con más de 14 premios tecnológicos. Quatro la revende, la integra y la opera en su país con su equipo."

**handoff (replaces the current one):**

- EN text: "The model gets sharper when the territory is in it. Quatro Klarety adds what changed on the ground, and the agents turn a correlated event into evidence and a proposed dispatch." Links: "Quatro Klarety" → `/capabilities/quatro-klarety`; "DataOS: ontology and agents" → `/capabilities/dataos-ontology-agents`.
- ES text: "El modelo se afina cuando el territorio está dentro. Quatro Klarety aporta lo que cambió en el terreno, y los agentes convierten un evento correlacionado en evidencia y en un despacho propuesto." Enlaces: "Quatro Klarety" → `/es/capabilities/quatro-klarety`; "DataOS: ontología y agentes" → `/es/capabilities/dataos-ontology-agents`.

---

## §2 C3 — DataOS, ontology and agents (new `dataos-ontology-agents.md`, EN/ES)

Replaces `reasoning-and-evidence`. `order: 3`, `layer: quatro`, `substrate: quatro`, `proof: null`.

### EN

```yaml
title: "DataOS: ontology and agents"
hero:
  eyebrow: DataOS
  title: "The rules of your operation, written down once, and agents that work inside them."
  sub: "A governed model of your operation: the assets, the rules that apply to them and the institutions that hold you to them. Agents propose against it, every step is recorded, and your operators decide."
whatYouGet:
- "A governed ontology of the operation: assets, sites, permits, rules and the institutions that answer for them, defined once and shared by every system that reads it."
- "Four operational agents: event triage and confirmation, evidence-package assembly, right-of-way change-alert triage, and field-dispatch coordination."
- "Agents propose. Your operators and your chain of command decide, and critical-path actions stay deterministic."
- "Every detection, correlation and decision recorded immutably and exportable in chain-of-custody format."
- "Questions asked in plain Spanish, answered with every figure traced to its source."
- "The ontology, the rules and the agent definitions are yours, in open formats, and they move with you."
showsUp:
- industry: Energy and pipelines
  href: /industries/energy
  text: "A pressure drop, a flagged cell on the right of way and a field report land on one event. The triage agent confirms it, the evidence agent builds the package and the dispatch agent proposes the crew."
- industry: Security and critical infrastructure
  href: /industries/security
  text: "A confirmed tap becomes a case with a timeline, its sources and a draft narrative, ready for the prosecutor."
substrateLine: "The ontology and the agents run on DataOS, integrated and operated by Quatro in your country."
handoff:
  text: "The agents read the live operational model, which correlates every system you run as it changes."
  links:
  - label: "DataMiner xOps: the operational model"
    href: /capabilities/operational-intelligence
```

### ES

```yaml
title: "DataOS: ontología y agentes"
hero:
  eyebrow: DataOS
  title: "Las reglas de su operación, escritas una sola vez, y agentes que trabajan dentro de ellas."
  sub: "Un modelo gobernado de su operación: los activos, las reglas que se les aplican y las instituciones que se las exigen. Los agentes proponen sobre ese modelo, cada paso queda registrado y sus operadores deciden."
whatYouGet:
- "Una ontología gobernada de la operación: activos, sitios, permisos, reglas y las instituciones que responden por ellos, definidos una vez y compartidos por cada sistema que los lee."
- "Cuatro agentes operativos: clasificación y confirmación de eventos, armado del paquete de evidencia, clasificación de alertas de cambio en el derecho de vía y coordinación del despacho de campo."
- "Los agentes proponen. Sus operadores y su cadena de mando deciden, y las acciones de ruta crítica siguen siendo deterministas."
- "Cada detección, correlación y decisión queda registrada de forma inmutable y se exporta en formato de cadena de custodia."
- "Preguntas en español corriente, respondidas con cada cifra trazada a su origen."
- "La ontología, las reglas y las definiciones de los agentes son suyas, en formatos abiertos, y se van con usted."
showsUp: carry verbatim the two ES showsUp items from capabilities-es/reasoning-and-evidence.md
substrateLine: "La ontología y los agentes corren sobre DataOS, integrados y operados por Quatro en su país."
handoff:
  text: "Los agentes leen el modelo operativo en vivo, que correlaciona cada sistema que usted opera a medida que cambia."
  links:
  - label: "DataMiner xOps: el modelo operativo"
    href: /es/capabilities/operational-intelligence
```

---

## §3 Industries (CULL-2)

### §3.1 Environment rename (EN/ES)

| Field | EN | ES |
|---|---|---|
| `title`, `hero.eyebrow`, nav and footer label | Environment, forestry and protected areas | Ambiente, bosques y áreas protegidas |

Hero title, tagline and description: carry verbatim.

### §3.2 Environment — forestry card (new, featured)

- EN name: "Watch the forest estate between inventories"
- EN description: "Every canopy change across the estate dated and matched to the harvest plan. Thinning and clear-fell are confirmed as they happen, fire scars, windthrow and stress are flagged within weeks, and new tracks or clearings near the boundary are located for the field team. Volume stays measured at the plots; the satellite says where the next plot should go."
- EN outcome: "Harvest, damage and boundary change dated across the estate, with the scenes behind each one."
- ES name: "Vigilar el patrimonio forestal entre inventarios"
- ES description: "Cada cambio de dosel en el patrimonio, fechado y contrastado con el plan de cosecha. Raleos y talas rasas se confirman a medida que ocurren, las cicatrices de fuego, el volteo por viento y el estrés se marcan en semanas, y los caminos o claros nuevos cerca del lindero se ubican para el equipo de campo. El volumen se sigue midiendo en las parcelas; el satélite indica dónde va la próxima parcela."
- ES outcome: "Cosecha, daños y cambios en el lindero fechados en todo el patrimonio, con las escenas detrás de cada uno."
- image: none until one is generated (the card renders its gradient placeholder).

### §3.3 Environment — aquaculture card (new, moved from Agriculture)

- EN name: "Aquaculture perimeters, day and night"
- EN description: "Thermal cameras on the dykes and radar on the water approach, scheduled by tide and moon, with weigh-and-seal custody from pond to plant and the land around the farm read from satellite."
- ES name: "Perímetros acuícolas, de día y de noche"
- ES description: "Cámaras térmicas en los muros y radar sobre el acceso por agua, programados según la marea y la luna, con pesaje y sellado de la piscina a la planta y el terreno alrededor de la finca leído desde satélite."

### §3.4 Security — disaster-response card (moved from Cities)

Carry verbatim from `industries/cities.md` and `industries-es/cities.md`: the "Triage the worst-hit neighborhoods from orbit" / "Priorizar los barrios más afectados desde órbita" card (name, description, outcome, image, `featured: true`) and its energy-blocks `addendum`. ES addendum text: "Un bloque de almacenamiento y uno de agua entregados juntos restablecen energía y agua potable en albergues y centros de salud a días de su llegada." (COPY_ENERGY_BLOCKS §3).

### §3.5 Cards cut to five, challenges cut to three [confirm]

Cut cards and challenges move to `.retired` notes in the build commit, not deleted from history. EN and ES mirror.

| Page | Cards kept (5) | Cards cut | Challenge cut |
|---|---|---|---|
| Energy | Dry-season operations · Quatro Klarety concessions · Protect the corridor · Firm capacity in 90 to 120 days · Find the losses by feeder | Leave a live model behind | Illegal extraction moves faster than inspection. (Mining carries it) |
| Environment | Find the vessels that go dark · See land change before the next survey · Watch the forest estate · Aquaculture perimeters · Read El Niño against your territory | Alerts where your team already works · Ask in plain Spanish | Fishing presence is visible; fishing effort is not. |
| Mining | Watch the concessions · Hold each concession to its license · Know where to sample · Remediation on one site record · Off-grid power for camps and plants | Read vegetation and watershed impact | There is no baseline. |
| Security | Watch the right of way from orbit · Fuse every sensor into one event · A chain of custody that holds up · Triage the worst-hit neighborhoods · Power for the services a country cannot allow to fail | Watch the water approach · Map the network behind the losses | Theft is a network. |

---

## §4 How it works, one page (CULL-3, EN/ES)

`/how-it-works` and `/es/how-it-works`, three anchored sections in this order. The three-layer band appears once,
inside `#picture`.

| Part | EN | ES | Body |
|---|---|---|---|
| Hero | carry verbatim from `how-it-works/index.astro` (badge, title, sub) | carry verbatim from `es/how-it-works/index.astro` | — |
| `#picture` label | The operational picture | El cuadro operativo | carry verbatim the index page body, minus its engagement teaser and the architecture link |
| `#engagement` label | How an engagement runs | Cómo se ejecuta un compromiso | carry verbatim the body of `engagement.astro` / `es/engagement.astro` (proof of value, the gate, what your institution supplies, annual service, program in tranches) |
| `#sovereignty` label | Sovereignty, hosting and managed service | Soberanía, alojamiento y servicio gestionado | carry verbatim the blocks of `sovereignty.astro` / `es/sovereignty.astro`, then the managed-service table below |

**Managed-service table** (two columns, label and line; the lines carry the managed-service page's whatYouGet):

| EN label | EN line | ES label | ES line |
|---|---|---|---|
| Operation | In country by Quatro Ecuador, with support from 07:00 to 22:00, seven days a week. | Operación | En el país a cargo de Quatro Ecuador, con soporte de 07:00 a 22:00, los siete días de la semana. |
| Hypercare | 90 days after each go-live. | Acompañamiento | 90 días de acompañamiento intensivo después de cada puesta en marcha. |
| Service levels | Reported monthly to your steering committee. | Niveles de servicio | Reportados cada mes a su comité directivo. |
| Hosting | An in-country data center we manage, a government or private cloud with every region in country, or your own premises. You can move between them. | Alojamiento | Un centro de datos en el país gestionado por nosotros, una nube de gobierno o privada con todas sus regiones en el país, o sus propias instalaciones. Puede migrar entre ellas. |
| AI annex | Inference stays on sovereign infrastructure, no third-party model is trained on your data, models are replaceable and the keys stay in your custody. | Anexo de IA | La inferencia se queda en infraestructura soberana, ningún modelo de terceros se entrena con sus datos, los modelos son reemplazables y las llaves quedan bajo su custodia. |
| On site | A forward-deployed engineer, and training in Spanish for operators, analysts and maintenance staff. | En sitio | Un ingeniero desplegado en sitio, y capacitación en español para operadores, analistas y personal de mantenimiento. |

Page `<title>`: "How it works | Quatro" / "Cómo funciona | Quatro".

---

## §5 About with leadership (COMP-1, EN/ES)

- Section label: "Leadership" / "Liderazgo".
- Body: carry verbatim the people and bios from `company/leadership.astro` / `es/company/leadership.astro`, placed after the About page's existing sections and before its CTA.

---

## §6 Homepage cards (HOME-2, EN/ES)

**Capability cards (four, in this order; each links to its page):**

| Card | EN line | ES line | Link |
|---|---|---|---|
| DataMiner xOps | Every system you run, in one live operational model. | Todos los sistemas que opera, en un solo modelo operativo en vivo. | `/capabilities/operational-intelligence` |
| Quatro Klarety | Territorial monitoring from space, with the evidence attached. | Monitoreo territorial desde el espacio, con la evidencia adjunta. | `/capabilities/quatro-klarety` |
| DataOS | The rules of your operation, and agents that propose inside them. | Las reglas de su operación y agentes que proponen dentro de ellas. | `/capabilities/dataos-ontology-agents` |
| Energy blocks | Firm power in 90 to 120 days. | Potencia firme en 90 a 120 días. | `/capabilities/energy-blocks` |

**Industry cards (four):** each card is the industry file's `title` and `tagline`, carried verbatim (Environment
with its §3.1 title), in nav order: Energy, Mining, Environment, Security.

Section labels: carry the homepage's existing "Industries" / "Industrias"; the capability row takes "Capabilities" /
"Capacidades" (the nav's own label).

---

## §7 Nav and footer labels (NAV-2, EN/ES)

| Menu | EN items (name · description) | ES items (nombre · descripción) |
|---|---|---|
| Capabilities / Capacidades | DataMiner xOps · Every system you run, in one live model / Quatro Klarety · Territorial monitoring from space / DataOS · Ontology and agents / Energy blocks · Firm power in 90 to 120 days | DataMiner xOps · Todos sus sistemas en un solo modelo en vivo / Quatro Klarety · Monitoreo territorial desde el espacio / DataOS · Ontología y agentes / Bloques de energía · Potencia firme en 90 a 120 días |
| Industries / Industrias | Energy and hydrocarbons / Mining and remediation / Environment, forestry and protected areas / Security and critical infrastructure | Energía e hidrocarburos / Minería y remediación / Ambiente, bosques y áreas protegidas / Seguridad e infraestructura crítica |
| How it works / Cómo funciona | plain link to `/how-it-works` | enlace directo a `/es/how-it-works` |
| Proof / Prueba | Reference work / Insights | Trabajo de referencia / Artículos |
| Company / Empresa | About / Partners / Contact | Nosotros / Socios / Contacto |

The single CTA stays "Talk to our team" / "Hable con nuestro equipo".

**Open for Jonathan:** §B names the first industry "Energy and hydrocarbons" while the EN page title is still
"Energy and pipelines" (ES already reads "Energía e hidrocarburos"). The nav uses §B's label; `CULL-2` renames the EN
title and hero eyebrow to match unless Jonathan keeps "pipelines".

---

## Voice gate (SPEC-COPY-8)

- A (grep): no platform/plataforma, digital twin/gemelo digital, OT/IT, empower/enable/unlock/leverage,
  habilitar/potenciar, hype words, exclamation points or em-dash connective tissue in the new strings. Capability
  names use a colon ("DataOS: ontology and agents"), not a dash.
- B (read): no "not X, Y"; enumerations are functional (systems, variables, hosting options); no inflated
  significance.
- C (positioning): your operators decide; you own the ontology, rules and keys; Quatro resells, integrates and
  operates. DataOS and DataMiner appear only in page titles, eyebrows, substrate lines, link labels, card names and nav labels; never in body sentences (DEC-4).
- D (claims): every figure is carried from a live page (8,000+, 125+, 14+, 07:00 to 22:00, 90 days) or the energy
  deck.
