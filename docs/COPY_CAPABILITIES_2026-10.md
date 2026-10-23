# Drop-in copy — Capabilities (CAP-1, CAP-4, CAP-5, CAP-6)

**For tickets:** `CAP-1` (5A Quatro Klarety), `CAP-4` (5D Reasoning, agents and evidence),
`CAP-5` (5E Intelligence and risk baseline), `CAP-6` (5F Managed service and sovereign hosting).
Spec: `docs/REALIGNMENT_2026-10-20.md` §5, §1. Template fields follow `CapabilityLayout` (§5):
hero, what you get, how it shows up, substrate line, proof, hand-off, engagement paragraph, CTA.
**Voice:** written to pass `docs/VOICE_GATE.md`. Tier 1.5: substrate named only on the substrate line.

> **Confirm before publish.**
> - Substrate naming on every page needs Jonathan's approval (SPEC-COPY-1 verify).
> - Corridor figures (cells, dB) are not used anywhere; §13.2 is still open.
> - The Elementos CTA has no URL yet (`[Elementos URL: Jonathan]`).
> - 5F follows the deployment annex (three hosting modalities with migration between them); the spec's word "hybrid" does not appear in the annex. Jonathan to confirm.
> - No client, reserve, corridor or operator is named. Satellite missions and vendors are not named (§1c).

**Shared on all four pages**
- **Engagement paragraph:** the §2 paragraph, verbatim (`COPY_ENERGY` §8; `src/lib/layers.ts`).
- **CTA:** primary "Talk to our team" → /contact/demo · secondary "How an engagement runs" →
  /how-it-works/engagement · microcopy "Hosted in your country · Your team owns it from day one".
- **Proof placeholder** (no cleared reference): the card slot shows "Capture in preparation."

Sources (outside this repo, under `LMIQuatro/`): ministry deck Card 4; Galápagos technical
specification §6–§7, §11, §14 and the confidentiality and AI-sovereignty annex; PetroEcuador
formal proposal v2.0 and Tranche 1 proposal; RFI experience and Elementos sections;
`Elementos/README.md`. All abstracted per §0.5.

---

## 5A. Quatro Klarety

**eyebrow:** Territory
**H1:** Quatro Klarety
**sub:** Territorial monitoring from space. See what changed across the territory you answer
for, where and when, with the evidence attached and no field hardware to start.

**What you get**
- The whole territory screened continuously from open radar and optical satellite data, at
  near-zero cost.
- High-resolution imagery and all-weather radar ordered only on the cells that flagged,
  tasked from inside the picture.
- Alerts delivered by webhook into the systems your team already runs, on triggers you set.
- Questions asked in plain Spanish, answered on the map with every figure cited to its source.
- Every finding dated, georeferenced and kept in one governed record your team can query and
  audit.

**How it shows up in your operation**
- **Energy and pipelines** (/industries/energy): the right of way screened weekly, a handful of
  cells flagged, radar confirming through cloud, and the confirmed site handed to the control
  room.
- **Mining and remediation** (/industries/mining): known illegal sites and the basins they
  drain into watched continuously. Concessions are checked against the license footprint, and
  sites that reopen after an operation are flagged on their own.
- **Environment and protected areas** (/industries/environment): vegetation and surface water
  for one territory compared to the prior year, answered in plain language with every number
  cited.

**Substrate line:** Quatro Klarety is delivered with our earth-observation partner Klarety.
Findings flow into the operational model (DataMiner xOps) and the reasoning layer.

**Proof:** Energy Card A, "A corridor screened from orbit, confirmed by radar." (`COPY_ENERGY`
§7, no figures). Asset `/images/proof-energy-corridor.png`.

**Hand-off:** A confirmed change is useful once it meets the operation. The operational model
correlates it with line pressure, alarms and field events, and the reasoning layer assembles
the evidence. → /capabilities/operational-intelligence · /capabilities/reasoning-and-evidence

---

## 5D. Reasoning, agents and evidence

**eyebrow:** Quatro's layer
**H1:** Reasoning, agents and evidence
**sub:** One event, read across every system that saw it. Agents triage it and assemble the
evidence. Your operators decide, and every step is recorded for evidentiary use.

**What you get**
- More than eight variables correlated on one model: pressure, flow, temperature, operational
  status, acoustic, vibration, observation from orbit and field reports. Correlation is how
  false alarms come down.
- Four operational agents: event triage and confirmation, evidence-package assembly,
  right-of-way change-alert triage, and field-dispatch coordination.
- Agents propose. Your operators and your chain of command decide, and critical-path actions
  stay deterministic.
- Every detection, correlation and decision recorded immutably and exportable in
  chain-of-custody format.
- Questions asked in plain Spanish, answered with every figure traced to its source.

**How it shows up in your operation**
- **Energy and pipelines** (/industries/energy): a pressure drop, a flagged cell on the right
  of way and a field report land on one event. The triage agent confirms it, the evidence
  agent builds the package and the dispatch agent proposes the crew.
- **Security and critical infrastructure** (/industries/security): a confirmed tap becomes a
  case with a timeline, its sources and a draft narrative, ready for the prosecutor.

**Substrate line:** The reasoning layer is Quatro's and runs on the operational model
(DataMiner xOps). How it is built is on the Architecture page (/how-it-works/architecture).

**Proof:** honest placeholder.

**Hand-off:** Before the agents watch a corridor, the risk baseline tells them where to look.
→ /capabilities/risk-baseline

---

## 5E. Intelligence and risk baseline

**eyebrow:** Quatro's layer
**H1:** Intelligence and risk baseline
**sub:** Know where the risk sits before field capital is committed. A baseline built from
incident history, terrain and population, delivered as a heat map and a sensor placement plan.

**What you get**
- Historical incident analysis across the network.
- Threat mapping from open-source intelligence.
- Terrain and population overlaid on every asset.
- An empirical risk heat map, refreshed quarterly.
- A sensor placement plan: hardware only where confirmed risk justifies it.
- Delivered at the first gate, before field capital is committed.

**How it shows up in your operation**
- **Energy and pipelines** (/industries/energy): the baseline at the first gate decides which
  segments get field sensing.
- **Security and critical infrastructure** (/industries/security): the heat map ranks segments
  for patrol.

**Elementos (§1d):** To learn who is behind the losses and how the network is financed, Quatro
routes threat-network mapping to Elementos, our affiliate for intelligence-led work.
**Elementos CTA:** Talk to Elementos → `[Elementos URL: Jonathan]`

**Substrate line:** Baseline built by Quatro; threat-network mapping by Elementos.

**Proof:** honest placeholder.

**Hand-off:** Once the baseline sets the priority zones, Quatro Klarety watches them.
→ /capabilities/quatro-klarety

---

## 5F. Managed service and sovereign hosting

**eyebrow:** Quatro's layer
**H1:** Managed service and sovereign hosting
**sub:** The operational picture runs in your country, on infrastructure you choose, operated
by Quatro Ecuador with your team. You own the data, the derived products, the models and the
keys.

**What you get**
- Operation in country by Quatro Ecuador, with support from 07:00 to 22:00, seven days a week.
- 90 days of hypercare after each go-live.
- Service levels reported monthly to your steering committee.
- Three hosting options: an in-country data center we manage, a government or private cloud
  with every region in country, or your own premises. You can move between them.
- A confidentiality and AI-sovereignty annex in the contract. Inference stays on sovereign
  infrastructure, no third-party model is trained on your data, models are replaceable and
  the keys stay in your custody.
- A forward-deployed engineer on site, and training in Spanish for operators, analysts and
  maintenance staff.

**How it shows up in your operation**
- **Energy and pipelines** (/industries/energy): the corridor picture hosted in country,
  operated from 07:00 to 22:00, reported monthly to the steering committee.
- **Environment and protected areas** (/industries/environment): a reserve's picture under the
  sovereignty annex, with the keys in the authority's custody.

**Substrate line:** Operated by Quatro Ecuador, supported by Quatro US. Headquartered in Quito,
Ecuador, with a US entity.

**Proof:** honest placeholder.

**Hand-off:** How an engagement runs, from a proof of value to an annual service your team runs.
→ /how-it-works/engagement

---

# Spanish — written Spanish-first, not translated idiom

> Nota de voz: evitar "plataforma" (usar "modelo operativo" o "cuadro operativo"), "gemelo
> digital", "habilitar", "potenciar", signos de exclamación y rayas largas como nexo.

**Común a las cuatro páginas**
- **Párrafo de compromiso:** el de `COPY_ENERGY` §8 (ES), textual.
- **CTA:** primario "Hable con nuestro equipo" → /es/contact/demo · secundario "Cómo se ejecuta
  un compromiso" → /es/how-it-works/engagement · microcopy "Alojado en su país · Su equipo es
  dueño desde el primer día".
- **Marcador de prueba:** "Captura en preparación."

## 5A. Quatro Klarety

**eyebrow:** Territorio
**H1:** Quatro Klarety
**sub:** Monitoreo territorial desde el espacio. Vea qué cambió en el territorio del que usted
responde, dónde y cuándo, con la evidencia adjunta y sin hardware de campo para empezar.

**Lo que obtiene**
- Todo el territorio tamizado de forma continua con datos satelitales abiertos, de radar y
  ópticos, a costo casi nulo.
- Imagen de alta resolución y radar de todo tiempo solo sobre las celdas marcadas, programados
  desde el mismo cuadro.
- Alertas entregadas por webhook a los sistemas que su equipo ya opera, con los disparadores
  que usted define.
- Preguntas en español corriente, respondidas sobre el mapa con cada cifra citada a su fuente.
- Cada hallazgo fechado, georreferenciado y guardado en un registro gobernado que su equipo
  puede consultar y auditar.

**Cómo aparece en su operación**
- **Energía e hidrocarburos** (/es/industries/energy): el derecho de vía tamizado cada semana,
  un puñado de celdas marcadas, el radar que confirma a través de nubes y el sitio confirmado
  que llega a la sala de control.
- **Minería y remediación** (/es/industries/mining): los sitios ilegales conocidos y las
  cuencas a las que drenan, vigilados de forma continua. Las concesiones se contrastan con la
  huella de su licencia, y los sitios que reabren tras un operativo se marcan solos.
- **Ambiente y áreas protegidas** (/es/industries/environment): la vegetación y el agua
  superficial de un territorio comparadas con el año anterior, respondidas en lenguaje
  corriente con cada cifra citada.

**Línea de sustrato:** Quatro Klarety se entrega con nuestro socio de observación de la
Tierra, Klarety. Los hallazgos entran al modelo operativo (DataMiner xOps) y a la capa de
razonamiento.

**Prueba:** tarjeta A de Energía, "Un corredor tamizado desde órbita, confirmado por radar."
(`COPY_ENERGY` §7 ES, sin cifras).

**Relevo:** Un cambio confirmado sirve cuando llega a la operación. El modelo operativo lo
correlaciona con la presión de línea, las alarmas y los eventos de campo, y la capa de
razonamiento arma la evidencia.

## 5D. Razonamiento, agentes y evidencia

**eyebrow:** La capa de Quatro
**H1:** Razonamiento, agentes y evidencia
**sub:** Un evento, leído en todos los sistemas que lo vieron. Los agentes lo clasifican y
arman la evidencia. Sus operadores deciden, y cada paso queda registrado para uso probatorio.

**Lo que obtiene**
- Más de ocho variables correlacionadas en un mismo modelo: presión, caudal, temperatura,
  estado operativo, acústica, vibración, observación desde órbita y reportes de campo. La
  correlación es lo que baja las falsas alarmas.
- Cuatro agentes operativos: clasificación y confirmación de eventos, armado del paquete de
  evidencia, clasificación de alertas de cambio en el derecho de vía y coordinación del
  despacho de campo.
- Los agentes proponen. Sus operadores y su cadena de mando deciden, y las acciones de ruta
  crítica siguen siendo deterministas.
- Cada detección, correlación y decisión queda registrada de forma inmutable y se exporta en
  formato de cadena de custodia.
- Preguntas en español corriente, respondidas con cada cifra trazada a su origen.

**Cómo aparece en su operación**
- **Energía e hidrocarburos** (/es/industries/energy): una caída de presión, una celda marcada
  en el derecho de vía y un reporte de campo llegan a un mismo evento. El agente de
  clasificación lo confirma, el de evidencia arma el paquete y el de despacho propone la
  cuadrilla.
- **Seguridad e infraestructura crítica** (/es/industries/security): una toma confirmada se
  convierte en un caso con cronología, fuentes y un borrador de narrativa, listo para la
  Fiscalía.

**Línea de sustrato:** La capa de razonamiento es de Quatro y corre sobre el modelo operativo
(DataMiner xOps). Cómo está construida se explica en la página de Arquitectura.

**Prueba:** marcador honesto.

**Relevo:** Antes de que los agentes vigilen un corredor, la línea base de riesgo les dice
dónde mirar.

## 5E. Inteligencia y línea base de riesgo

**eyebrow:** La capa de Quatro
**H1:** Inteligencia y línea base de riesgo
**sub:** Sepa dónde está el riesgo antes de comprometer capital en campo. Una línea base
construida con el historial de incidentes, el terreno y la población, entregada como mapa de
calor y plan de ubicación de sensores.

**Lo que obtiene**
- Análisis histórico de incidentes en toda la red.
- Mapeo de amenazas a partir de inteligencia de fuentes abiertas.
- Terreno y población superpuestos sobre cada activo.
- Un mapa de calor de riesgo empírico, actualizado cada trimestre.
- Un plan de ubicación de sensores: hardware solo donde el riesgo confirmado lo justifica.
- Entregado en la primera compuerta, antes de comprometer capital en campo.

**Cómo aparece en su operación**
- **Energía e hidrocarburos** (/es/industries/energy): la línea base de la primera compuerta
  decide qué tramos reciben sensores de campo.
- **Seguridad e infraestructura crítica** (/es/industries/security): el mapa de calor ordena
  los tramos para el patrullaje.

**Elementos (§1d):** Para saber quién está detrás de las pérdidas y cómo se financia la red,
Quatro deriva el mapeo de redes de amenaza a Elementos, nuestra afiliada para el trabajo
guiado por inteligencia.
**CTA de Elementos:** Hable con Elementos → `[URL de Elementos: Jonathan]`

**Línea de sustrato:** Línea base construida por Quatro; mapeo de redes de amenaza por
Elementos.

**Prueba:** marcador honesto.

**Relevo:** Con las zonas prioritarias fijadas, Quatro Klarety las vigila.

## 5F. Servicio gestionado y alojamiento soberano

**eyebrow:** La capa de Quatro
**H1:** Servicio gestionado y alojamiento soberano
**sub:** El cuadro operativo corre en su país, sobre la infraestructura que usted elige,
operado por Quatro Ecuador junto a su equipo. Los datos, los productos derivados, los modelos y
las llaves son suyos.

**Lo que obtiene**
- Operación en el país a cargo de Quatro Ecuador, con soporte de 07:00 a 22:00, los siete días
  de la semana.
- 90 días de acompañamiento intensivo después de cada puesta en marcha.
- Niveles de servicio reportados cada mes a su comité directivo.
- Tres opciones de alojamiento: un centro de datos en el país gestionado por nosotros, una
  nube de gobierno o privada con todas sus regiones en el país, o sus propias instalaciones.
  Puede migrar entre ellas.
- Un anexo de confidencialidad y soberanía de IA en el contrato. La inferencia se queda en
  infraestructura soberana, ningún modelo de terceros se entrena con sus datos, los modelos
  son reemplazables y las llaves quedan bajo su custodia.
- Un ingeniero desplegado en sitio, y capacitación en español para operadores, analistas y
  personal de mantenimiento.

**Cómo aparece en su operación**
- **Energía e hidrocarburos** (/es/industries/energy): el cuadro del corredor alojado en el
  país, operado de 07:00 a 22:00, con reporte mensual al comité directivo.
- **Ambiente y áreas protegidas** (/es/industries/environment): el cuadro de una reserva bajo
  el anexo de soberanía, con las llaves en custodia de la autoridad.

**Línea de sustrato:** Opera Quatro Ecuador, con el apoyo de Quatro US. Sede en Quito, Ecuador,
con una entidad en Estados Unidos.

**Prueba:** marcador honesto.

**Relevo:** Cómo se ejecuta un compromiso, de una prueba de valor a un servicio anual que opera
su equipo.
