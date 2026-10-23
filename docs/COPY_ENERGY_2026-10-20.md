# Drop-in copy — Energy and pipelines (Sprint 0, Ministerio de Ambiente y Energía)

**For tickets:** `NRG-1` (page), `NRG-3` (proof cards), `ES-ENERGY-1` (Spanish).
Spec: `docs/REALIGNMENT_2026-10-20.md` §4. **Voice:** written to pass `docs/VOICE_GATE.md`.
Tier 1.5: capabilities are Quatro's; substrate hints only where marked.

> **Confirm before publish.** Lines marked `[approve]` carry a figure or a claim that needs
> Jonathan's sign-off (DEC-2). Geospatial analysis is named **Quatro Klarety** (decided 2026-10-20).
> No client is named anywhere on this page.

---

## 1. Hero

**eyebrow:** Energy and pipelines
**title:** One operational picture for electricity, hydrocarbons, mining and water.
**description:** The same ministry now answers for the dams, the grid, the pipelines, the
concessions and the rivers between them. The agencies still report separately. Quatro
connects what each of them already runs, from satellite to SCADA to the field, into one
live picture your people decide from, hosted in your country and owned by you from day one.
**primaryCta:** Talk to our team → /contact/demo
**secondaryCta:** How an engagement runs → /how-it-works/engagement
**heroImage:** /images/industry-energy-andes-hydro.png

## 2. Stats (attributed)

| value | label |
|---|---|
| 8,000+ | integrations in the operational model (DataMiner xOps) |
| 30 days | to a first operational picture, from the satellite baseline, no field hardware |
| In country | hosting, operation and support, in Spanish |

## 3. Challenges (the Ministry's four fronts, in its order)

1. **The dry season arrives before the data does.**
   Reservoir levels, inflows, dispatch, imports and the forecast live in four institutions.
   By the time someone reconciles them, a basin is already at its limit and the decision is
   rationing.
   image: /images/challenge-energy-dry-season.png

2. **Illegal extraction moves faster than inspection.**
   Hundreds of illegal mining points across a dozen provinces, inspected by drone and patrol.
   Sites reopen after an operation and nobody sees it until the river turns.
   image: /images/challenge-energy-illegal-mining.png

3. **A clandestine tap is found after the loss.**
   Pressure drops, a field crew drives out, the barrels are gone. The precursors were visible
   from orbit days earlier; no one was looking at the right of way that way.
   image: /images/challenge-energy-corridor-theft.png

4. **Losses hide between the meter and the feeder.**
   Non-technical losses show up as a national percentage. Recovering them needs the
   neighborhood, the feeder and the meter event on the same record, and a record that holds
   up in an investigation.
   image: /images/challenge-energy-vendor-silos.png *(reuse)*

**Cross-cutting line (under the challenges):** Every incident on the energy side is now an
environmental event the same office answers for. One record has to serve both.

## 4. Capabilities (five featured blocks)

### 4.1 Dry-season operations under El Niño
**name:** Dry-season operations, one picture across the basins
**description:** Dispatch and reserve data, reservoir levels and inflows, the national and
oceanographic forecasts, Colombian imports and transmission loading, fused into a daily
dry-season brief shared by the Ministry, the system operator, civil protection and the hydro
operators. Satellite observation of reservoir extent and coastal flooding confirms what the
models say. Starts with data you already have; no field hardware.
**outcome:** Basins and substations approaching their limits, seen before they bind. First
brief within 30 days.
**image:** /images/cap-energy-dry-season.png
**note:** We do not forecast El Niño. The forecast belongs to the agencies that own it; the
picture fuses it with your operational data so a decision can be taken on it.

### 4.2 Illegal-mining watch and concession compliance
**name:** Quatro Klarety: watch the concessions and the basins around them, continuously
**description:** Continuous change detection over known illegal sites and the basins they
drain into: vegetation loss, new pooling, turbidity, excavation, road cutting. Screened from
open satellite data at near-zero cost, confirmed on demand with high-resolution imagery and
all-weather radar through cloud. Legal concessions monitored against their license
footprint. Every finding dated, geolocated and traceable to its source, in the form the
regulator, the Armed Forces and the prosecutor can use.
**outcome:** What changed, where and when, with evidence. Baseline over priority zones in
30 days; sites that reopen after an operation are flagged on their own.
**image:** /images/cap-energy-mining-watch.png

### 4.3 Hydrocarbon corridor protection
**name:** Protect the corridor from orbit to the control room
**description:** The SCADA systems, historians, GIS, leak-detection systems, field sensing
and video you already operate, correlated into one picture of the pipeline. The right of way
observed continuously from open satellite data; the precursors of a tap (clearing, pooling,
vehicles in quiet segments, ground disturbance) confirmed with high-resolution imagery and
radar, then correlated with line pressure and field events. Operational agents triage the
event, assemble the evidence and propose the dispatch; your operators decide; every step is
recorded with chain of custody. The intelligence layer places a confirmed site in the network
behind it.
**outcome:** Fewer false alarms in the control room, taps anticipated instead of confirmed
afterward, and a record that holds up in prosecution.
**image:** /images/cap-energy-corridor.png
**proof line [approve]:** Demonstrated on a 1,000-kilometer corridor: fourteen
disturbance-suspected cells identified in one basin, a 7 dB radar backscatter drop on the
flagged cell confirming ground disturbance.

### 4.4 Distribution-loss recovery and grid fragility
**name:** Find the losses by feeder, with a record that holds
**description:** Metering and consumption data from the distributors, correlated with meter
events and field reports, rank loss hotspots by feeder and neighborhood. Loading and asset
health on the priority transmission nodes sit on the same picture, so a substation running
near its limit is seen before it fails.
**outcome:** Where the losses are, ranked, and a defensible record for recovery and for the
investigations already underway. Scoped after the first 90 days, on the same picture.
**image:** /images/cap-energy-loss-recovery.png

### 4.5 Refinery and plant control modernization
**name:** Leave a live model behind
**description:** When a distributed control system is assessed for replacement, the field
survey usually ends in a document. Quatro captures the assessment into a connected
operational model as it is built, so what was found in the field is visible online, queryable
and ready to carry into the design phase. Existing control systems are integration targets,
never replacement candidates for us.
**outcome:** An engineering assessment your team can keep working from.
**image:** /images/cap-energy-refinery-model.png

## 5. Authority line (one line, under the capabilities)

We know the control room and the right of way: SCADA alarms, leak-detection systems,
dispatch under a dry-season deficit, and the regulators who hold you to it (ARCERNNR, ARCOM,
CENACE, SNGR, MAE).

## 6. See / correlate / act (template keys)

**see:** The three SCADA systems, historians, GIS, leak-detection outputs, metering, dispatch
and reserve data, the forecasts, field sensing and video, and the territory itself from
satellite. Existing systems are integration targets. 8,000+ integrations in the operational
model (DataMiner xOps).
**correlate:** More than eight variables (pressure, flow, temperature, operational status,
acoustic, vibration, observation from orbit, field reports) correlated on one model, with
plain-language questions answered in Spanish and every figure traced to its source.
Observation from orbit is Quatro Klarety, our geospatial analysis capability, delivered with our
earth-observation partner.
**act:** Operational agents triage events, assemble evidence and propose dispatch. Your
operators and your chain of command decide. Every detection, correlation and decision is
recorded immutably, the condition for evidentiary use.

## 7. Proof cards (`NRG-3`; honest placeholder until the capture is cleared)

**Card A — A corridor screened from orbit, confirmed by radar.**
What the operator saw: the whole right of way screened weekly from open satellite data, a
handful of cells flagged, before-and-after imagery on each. What the team did: tasked radar
through cloud on the flagged cells, correlated with line pressure, handed a confirmed site to
the intelligence layer. What it took: days from first screen to confirmed cell. [approve the
figures per 4.3]
asset: /images/proof-energy-corridor.png (v7.1) or white-labeled capture (partner consent)

**Card B — A reserve's dry season, assessed from four systems.**
What the operator saw: sea-surface temperature anomaly, rainfall, surface-water extent and
vegetation greenness for one territory, compared to the prior year, answered in plain language
with every number cited. What the team did: fused public ocean, weather and satellite records
into one assessment and a watch that flags change. What it took: no field hardware; the first
assessment inside a month.
asset: honest placeholder until cleared

## 8. Engagement paragraph (shared, §2)

A proof of value in 30 to 90 days on your highest-risk area, satellite baseline first because
it needs no field hardware, measured against indicators agreed in advance, with a year of
access retained. Then an annual service your team runs. Then, for national programs, a
tranche build through a consortium led by a local prime. Hosted in your country or on your
infrastructure; data and derived products are yours; AI governance is written into the
contract annex.

## 9. proofPoint block

**industry:** Energy, hydrocarbons, mining and water, one ministry
**headline:** One picture, four initiatives, one record
**narrative:** Each initiative adds data and rules to the same picture instead of standing up
another system. Investors price operational risk; a verified, continuous record of asset
performance, losses and incidents lowers that price and gives the State the same view its
partners have.
**metrics:** 8,000+ integrations (DataMiner xOps) · 30 days to a first picture · Hosted in
country

## 10. CTA

**primary:** Talk to our team → /contact/demo
**secondary:** How an engagement runs → /how-it-works/engagement
**microcopy:** Hosted in your country · Your team owns it from day one

---

# Spanish (ES-ENERGY-1) — written Spanish-first, not translated idiom

> Nota de voz: en español evitar "plataforma" (usar "modelo operativo" o "cuadro operativo"),
> "gemelo digital", "habilitar", "potenciar", signos de exclamación y rayas largas como nexo.

## 1. Hero
**eyebrow:** Energía e hidrocarburos
**title:** Un solo cuadro operativo para electricidad, hidrocarburos, minería y agua.
**description:** Un mismo ministerio responde hoy por las represas, la red, los oleoductos,
las concesiones y los ríos entre ellos. Las instituciones siguen reportando por separado.
Quatro conecta lo que cada una ya opera, del satélite al SCADA y al campo, en un cuadro vivo
desde el cual su gente decide, alojado en el país y de su propiedad desde el primer día.
**primaryCta:** Hable con nuestro equipo
**secondaryCta:** Cómo se ejecuta un compromiso

## 2. Cifras
8.000+ integraciones en el modelo operativo (DataMiner xOps) · 30 días hasta un primer cuadro
operativo, desde la línea base satelital, sin hardware de campo · En el país: alojamiento,
operación y soporte, en español

## 3. Retos
1. **El estiaje llega antes que los datos.** Niveles de embalse, caudales, despacho,
   importaciones y pronóstico viven en cuatro instituciones. Cuando alguien los concilia, una
   cuenca ya está en su límite y la decisión es racionar.
2. **La extracción ilegal se mueve más rápido que la inspección.** Cientos de puntos de
   minería ilegal en una docena de provincias, inspeccionados con dron y patrulla. Los sitios
   reabren después de un operativo y nadie lo ve hasta que el río cambia de color.
3. **La perforación clandestina se descubre después de la pérdida.** Cae la presión, sale una
   cuadrilla, los barriles ya no están. Los precursores eran visibles desde órbita días antes;
   nadie miraba el derecho de vía de esa manera.
4. **Las pérdidas se esconden entre el medidor y el alimentador.** Las pérdidas no técnicas
   aparecen como un porcentaje nacional. Recuperarlas exige el barrio, el alimentador y el
   evento del medidor en el mismo registro, y un registro que resista una investigación.

**Línea transversal:** Cada incidente del lado energético es hoy también un evento ambiental
del que responde la misma oficina. Un solo registro tiene que servir a ambos.

## 4. Capacidades
**4.1 Operación de estiaje bajo El Niño.** Datos de despacho y reserva, niveles y caudales de
embalse, los pronósticos nacionales y oceanográficos, las importaciones y la carga de
transmisión, fusionados en un informe diario de estiaje compartido por el Ministerio, el
operador del sistema, gestión de riesgos y las hidroeléctricas. La observación satelital del
espejo de agua y de la inundación costera confirma lo que dicen los modelos. Arranca con los
datos que ya tiene; sin hardware de campo. *Resultado:* cuencas y subestaciones acercándose a
su límite, vistas antes de que obliguen. Primer informe dentro de 30 días. *Nota:* no
pronosticamos El Niño; el pronóstico es de las agencias que lo producen, el cuadro lo fusiona
con sus datos operativos para que se pueda decidir sobre él.

**4.2 Quatro Klarety: vigilancia de minería ilegal y cumplimiento de concesiones.** Detección continua de
cambios sobre los sitios ilegales conocidos y las cuencas a las que drenan: pérdida de
vegetación, nuevas pozas, turbidez, excavación, apertura de vías. Tamizado con datos
satelitales abiertos a costo casi nulo, confirmado bajo demanda con imagen de alta resolución
y radar de todo tiempo a través de nubes. Concesiones legales vigiladas contra la huella de su
licencia. Cada hallazgo fechado, georreferenciado y trazable a su fuente, en la forma que
usan el regulador, las Fuerzas Armadas y la Fiscalía. *Resultado:* qué cambió, dónde y cuándo,
con evidencia. Línea base sobre zonas prioritarias en 30 días; los sitios que reabren tras un
operativo se marcan solos.

**4.3 Protección del corredor de hidrocarburos.** Los SCADA, historiadores, GIS, sistemas de
detección de fugas, sensores de campo y video que ya opera, correlacionados en un solo cuadro
del oleoducto. El derecho de vía observado de forma continua desde datos satelitales abiertos;
los precursores de una toma (desbroce, pozas, vehículos en tramos silenciosos, remoción de
suelo) confirmados con alta resolución y radar, y correlacionados con la presión de línea y
los eventos de campo. Agentes operativos clasifican el evento, arman la evidencia y proponen
el despacho; sus operadores deciden; cada paso queda registrado con cadena de custodia. La capa
de inteligencia ubica el sitio confirmado dentro de la red que está detrás. *Resultado:* menos
falsas alarmas en sala de control, tomas anticipadas en lugar de confirmadas después, y un
registro que resiste en Fiscalía. *Línea de prueba [aprobar]:* demostrado sobre un corredor
de 1.000 kilómetros: catorce celdas con sospecha de perturbación identificadas en una cuenca,
y una caída de 7 dB en la retrodispersión radar sobre la celda marcada.

**4.4 Recuperación de pérdidas y fragilidad de la red.** Datos de medición y consumo de las
distribuidoras, correlacionados con eventos de medidor y reportes de campo, para clasificar
focos de pérdida por alimentador y barrio. La carga y la salud de activos en los nodos de
transmisión prioritarios viven en el mismo cuadro, de modo que una subestación cerca de su
límite se ve antes de que falle. *Resultado:* dónde están las pérdidas, en orden, y un
registro defendible para la recuperación y para las investigaciones en curso. Se alcanza
después de los primeros 90 días, sobre el mismo cuadro.

**4.5 Modernización del control de refinerías y plantas.** Cuando un sistema de control
distribuido se evalúa para reemplazo, el levantamiento de campo suele terminar en un
documento. Quatro captura la evaluación en un modelo operativo conectado mientras se
construye, de modo que lo encontrado en campo queda visible en línea, consultable y listo para
la fase de diseño. Los sistemas de control existentes son objetivos de integración, nunca
candidatos a reemplazo por nuestra parte. *Resultado:* una evaluación de ingeniería desde la
que su equipo puede seguir trabajando.

## 5. Línea de autoridad
Conocemos la sala de control y el derecho de vía: alarmas SCADA, sistemas de detección de
fugas, despacho bajo déficit de estiaje, y los reguladores que le exigen (ARCERNNR, ARCOM,
CENACE, SNGR, MAE).

## 6. Ver / correlacionar / actuar
**ver:** los tres SCADA, historiadores, GIS, salidas de detección de fugas, medición, despacho
y reserva, los pronósticos, sensores y video de campo, y el territorio mismo desde satélite.
Los sistemas existentes son objetivos de integración. 8.000+ integraciones en el modelo
operativo (DataMiner xOps).
**correlacionar:** más de ocho variables (presión, caudal, temperatura, estado operativo,
acústica, vibración, observación desde órbita, reportes de campo) correlacionadas en un mismo
modelo, con preguntas en lenguaje corriente respondidas en español y cada cifra trazada a su
origen. La observación desde órbita es Quatro Klarety, nuestra capacidad de análisis geoespacial,
entregada con nuestro socio de observación de la Tierra.
**actuar:** agentes operativos clasifican eventos, arman evidencia y proponen despacho. Sus
operadores y su cadena de mando deciden. Cada detección, correlación y decisión queda
registrada de forma inmutable, condición para su uso probatorio.

## 7. Tarjetas de prueba
**A — Un corredor tamizado desde órbita, confirmado por radar.** Lo que vio el operador: todo
el derecho de vía tamizado cada semana con datos satelitales abiertos, un puñado de celdas
marcadas, imagen de antes y después en cada una. Lo que hizo el equipo: programó radar a través
de nubes sobre las celdas marcadas, correlacionó con la presión de línea y entregó un sitio
confirmado a la capa de inteligencia. Lo que tomó: días, del primer tamizado a la celda
confirmada.
**B — El estiaje de una reserva, evaluado desde cuatro sistemas.** Lo que vio el operador:
anomalía de temperatura superficial del mar, lluvia, extensión de agua superficial y verdor de
la vegetación para un territorio, comparados con el año anterior, respondidos en lenguaje
corriente con cada cifra citada. Lo que hizo el equipo: fusionó registros públicos oceánicos,
meteorológicos y satelitales en una evaluación y una vigilancia que marca el cambio. Lo que
tomó: sin hardware de campo; la primera evaluación dentro de un mes.

## 8. Párrafo de compromiso
Una prueba de valor de 30 a 90 días sobre su área de mayor riesgo, primero la línea base
satelital porque no requiere hardware de campo, medida contra indicadores acordados de
antemano, con un año de acceso conservado. Luego un servicio anual que opera su equipo.
Luego, para programas nacionales, una construcción por tramos a través de un consorcio
liderado por un integrador local. Alojado en su país o en su infraestructura; los datos y los
productos derivados son suyos; la gobernanza de la IA queda escrita en el anexo contractual.

## 9. Bloque proofPoint
**industria:** Energía, hidrocarburos, minería y agua, un solo ministerio
**titular:** Un cuadro, cuatro iniciativas, un registro
**narrativa:** Cada iniciativa suma datos y reglas al mismo cuadro en lugar de levantar otro
sistema. Los inversionistas ponen precio al riesgo operativo; un registro verificado y continuo
del desempeño de activos, pérdidas e incidentes baja ese precio y le da al Estado la misma
vista que tienen sus socios.

## 10. CTA
**primario:** Hable con nuestro equipo · **secundario:** Cómo se ejecuta un compromiso ·
**microcopy:** Alojado en su país · Su equipo es dueño desde el primer día

## 11. Banda de tres capas y etiquetas de la plantilla (`ES-NRG-2`; borrador, Esteban aprueba)
Espejo de §2 de la especificación y de `src/lib/layers.ts`. Escrito en español primero.

**promesa:** Vea el territorio. Conduzca la operación. Sea dueño de la inteligencia.

| capa | nombre | titular |
|---|---|---|
| territory | Territorio: Quatro Klarety | Vea qué cambió, dónde y cuándo. |
| operation | Operación | Todos sus sistemas, en un solo modelo operativo en vivo. |
| quatro | La capa de Quatro | Integrar, sensar, razonar, operar. |

**etiquetas:**
- marcador de tarjeta sin imagen: Captura en preparación.
- encabezado de la fila de prueba: Prueba
- enlace de tarjeta: Ver la referencia
- encabezado del párrafo de compromiso: Cómo se ejecuta un compromiso
- títulos de la sección ver / correlacionar / actuar: Ver. Correlacionar. Actuar.
