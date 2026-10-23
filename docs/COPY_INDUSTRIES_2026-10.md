# Drop-in copy — Industries (IND-1..5)

**For tickets:** `IND-1` Environment and protected areas, `IND-2` Mining and remediation, `IND-3`
Cities and public services, `IND-4` Security and critical infrastructure, `IND-5` Agriculture and
aquaculture (`status: emerging`). Spec: `docs/REALIGNMENT_2026-10-20.md` §7, §0, §1, §9.
**Voice:** written to pass `docs/VOICE_GATE.md`. Tier 1.5. Structure mirrors `COPY_ENERGY`
(template fields in `src/content/config.ts`): hero, proofBadge, authorityLine, stats, challenges,
capabilities (`featured` = first three), see / correlate / act, layerCaptions, proofCards, CTA.

> **Confirm before publish.**
> - **No named early engagement (verify gate).** No client, reserve, island, corridor, city, province,
>   person, partner or vendor is named. Satellite missions are not named.
> - **Badges marked `[approve]`** are the §7 badges where research found no delivered result behind
>   them (Mining "Demonstrated on a site"; the "demonstrated" half of the Cities badge). §0.1 outranks
>   the §7 table, so Jonathan confirms or the fallback runs.
> - **Stats** are attributed vendor scale (DataMiner xOps) or dated public figures with their outlet.
>   No corridor figures (§13.2), no prices, no proposal numbers.
> - **Proof cards** only where a reference exists (Energy cards A and B, no figures). Mining's landslide
>   piece (§9A) and partner-delivered city references (§9B, need Skyline's written OK) wait for PROOF-1.
> - **Security tone:** no community or youth surveillance, no "counter-cartel" framing, no attack
>   predictions. Elementos is not named (amended 2026-10-23); threat-network mapping is Quatro scope.

**Shared on all five:** engagement paragraph = §2 (`src/lib/layers.ts`). CTA primary "Talk to our team"
→ /contact/demo · secondary "How an engagement runs" → /how-it-works/engagement · microcopy "Hosted
in your country · Your team owns it from day one".

Sources (outside this repo, under `LMIQuatro/`): reserve technical specification §1–§9 and
foundation proposal v2; confidentiality and AI-sovereignty annex; ministry five- and six-slide
outlines; realignment audit §3; corridor formal proposal; coastal-producer security program;
meeting notes linked from the audit (mining, cities). All abstracted per §0.5.

---

## IND-1. Environment and protected areas (`/industries/environment`)

**title:** Environment and protected areas
**hero.eyebrow:** Environment and protected areas
**hero.title:** One record of what moves through a protected area, on the water and on land.
**hero.description:** Vessel tracking, permits, zoning and satellite imagery each sit in their own
system, so a boat that switches off its transponder simply disappears. Quatro connects them into one
picture your rangers decide from, in Spanish, hosted in your country.
**proofBadge:** Demonstrated on a reserve
**authorityLine:** We know the reserve's working day: vessels that go dark near the limit, permits and
zoning held in separate systems, cloud over the highlands, and the institutions that answer for it
(MAE, INOCAR, INAMHI, SNGR).

**stats**
- `8,000+` · integrations in the operational model (DataMiner xOps)
- `30 days` · to a first operational picture, from the satellite baseline, no field hardware
- `In country` · hosting, operation and support, in Spanish

**challenges**
1. **A boat that switches off its transponder leaves the record.** Tracking, permits and imagery are
   held apart, so a vessel that goes dark near the limit is gone until someone finds it by chance.
2. **Fishing presence is visible; fishing effort is not.** Without effort by vessel, zone and period,
   there is nothing to hold against quotas and zoning.
3. **Land change is checked by hand.** Invasive spread and encroachment are surveyed on incomplete
   schedules, often under cloud.
4. **The climate data never reaches the decision.** Ocean and rainfall records exist in open sources
   and stay outside the surveillance picture.

**capabilities**
- **Find the vessels that go dark** *(featured)* — Vessel tracking and monitoring records correlated
  with radar and optical imagery, day and night and through cloud. Cooperative vessels are separated
  from dark targets, fleets are classified, and fishing effort is estimated by vessel, zone and period.
  *Outcome:* every dark target in the reserve on one map, with the evidence attached.
- **See land change before the next survey** *(featured)* — Vegetation change over the zones your
  authority defines, ranked by the zoning rule each detection breaks. Higher-resolution imagery only on
  confirmed change. *Outcome:* encroachment and invasive spread flagged between field visits.
- **Alerts where your team already works** *(featured)* — Configurable triggers delivered by webhook:
  a restricted-zone visit, a boundary crossing, a dark vessel in the reserve, fishing in a no-take
  zone, a tour boat off its itinerary, a transponder switched off. *Outcome:* the alert reaches the
  ranger on duty, with the record behind it.
- **Ask in plain Spanish** — Staff without GIS training ask a question and get a mappable, auditable
  answer with every source cited. *Outcome:* the question "which vessels without a transponder were in
  the reserve last night" answered in one step.
- **Read El Niño against your territory** — Sea-surface temperature anomaly, the official ENSO
  indices, rainfall and a baseline per zone, with alerts when an anomaly coincides with vegetation or
  fishing-effort change. We do not forecast El Niño; the forecast belongs to the agencies that own it.
  *Outcome:* the season read against your own zones, scoped in two to four weeks.

**see / correlate / act**
- **see:** Vessel tracking and monitoring, the vessel registry, permits, visitor and guide records,
  zoning, and the territory itself from satellite. Existing systems are integration targets.
- **correlate:** Tracking gaps against radar and optical detections, land change against zoning, ocean
  and rainfall records against your own zones, with plain-language questions answered in Spanish and
  every figure traced to its source.
- **act:** Alerts reach the ranger on duty with the evidence attached. Your rangers and your chain of
  command decide; nothing is sanctioned automatically, and every detection and decision is recorded.

**layerCaptions**
- **territory:** Vegetation, surface water and coastline compared to last year, through cloud.
- **operation:** Tracking, permits and zoning on one record.
- **quatro:** Alerts by webhook, and your rangers decide.

**proofCards**
- Energy Card B, "A reserve's dry season, assessed from four systems." (`COPY_ENERGY` §7, asset null).

---

## IND-2. Mining and remediation (`/industries/mining`)

**title:** Mining and remediation
**hero.eyebrow:** Mining and remediation
**hero.title:** See every concession and the river below it, from one record.
**hero.description:** Inspection runs on drones and patrols, sites reopen after an operation, and a
remediation project can start with no sensors at all. Quatro gives your team a satellite baseline in
weeks and one record the regulator and the prosecutor can use.
**proofBadge:** Demonstrated on a site `[approve: no delivered remediation result found; fallback "Proof of value underway"]`
**authorityLine:** We know the concession and the river below it: drone and patrol inspection, sites
that reopen after an operation, and the authorities who need the evidence (ARCOM, MAE, the Armed
Forces, the Fiscalía).

**stats**
- `387` · illegal mining points in 16 provinces (ARCOM, 2024, reported by Expreso)
- `3,427` · Army operations against illegal mining, January to October 2026 (reported by El Universo)
- `30 days` · to a satellite baseline over priority zones, no field hardware

**challenges**
1. **Illegal extraction moves faster than inspection.** Sites reopen after an operation and nobody sees
   it until the river turns.
2. **There is no baseline.** No national satellite monitoring program exists for mining, and a
   remediation site can start with zero installed sensors.
3. **Contamination is expensive to find.** Field sampling costs money, so the first question is where
   to sample.
4. **The site's data is scattered.** Shapefiles, schedules, reports and GIS layers sit in different
   places, with gaps in the field nobody has mapped.

**capabilities**
- **Watch the concessions and the basins below them** *(featured)* — Continuous change detection over
  known illegal sites and the basins they drain into: vegetation loss, new pooling, turbidity,
  excavation, road cutting. Confirmed on demand with high-resolution imagery and radar. *Outcome:*
  baseline over priority zones in 30 days; sites that reopen are flagged on their own.
- **Hold each concession to its license** *(featured)* — Legal concessions monitored against their
  license footprint, with a compliance record the operator and the regulator share. *Outcome:* a
  dated, geolocated record of what changed inside and outside the footprint.
- **Know where to sample** *(featured)* — Contamination screening from imagery ranks the most likely
  locations, so field sampling goes where it confirms the most. *Outcome:* fewer samples, placed
  where they count. Field sampling still confirms.
- **Read vegetation and watershed impact** — Vegetation and water change around the site, asked in
  plain language and answered with every figure cited.
- **Remediation on one site record** — The site's existing data audited and brought into one record,
  role dashboards with threshold alerts, a roadmap for the field gaps, and an engineer on site.
  *Outcome:* first results in the second week and a review against agreed criteria in the fourth.

**see / correlate / act**
- **see:** Concession and license footprints, inspection and field reports, the site's existing GIS,
  shapefiles and schedules, and the territory itself from satellite.
- **correlate:** Change from orbit against the license footprint and the basin below it; contamination
  screening against the sampling plan; every figure traced to its source.
- **act:** Findings are dated, geolocated and packaged as evidence for the regulator, the Armed Forces
  and the prosecutor. Your team decides; every step is recorded.

**layerCaptions**
- **territory:** Known sites and the basins below them, watched continuously.
- **operation:** Concessions, licenses and field reports on one record.
- **quatro:** Evidence the regulator and the prosecutor can use.

**proofCards:** none yet. "A mine-site landslide before and after" (§9A) waits for a cleared capture
(PROOF-1, §13.6).

---

## IND-3. Cities and public services (`/industries/cities`)

**title:** Cities and public services
**hero.eyebrow:** Cities and public services
**hero.title:** After the earthquake, know which neighborhoods to reach first.
**hero.description:** A city answers for its streets, its buildings, its waste and its water from
systems that were never built to share. Quatro connects what each department already runs, adds the
view from orbit, and gives your command center one picture to coordinate from.
**proofBadge:** Proven at scale (DataMiner xOps) `[approve: §7 adds "+ demonstrated"; no city demonstration found yet]`
**authorityLine:** We know the questions a city asks after an earthquake or a flood, and the
institutions that coordinate the answer (SNGR and the municipal command centers).

**stats**
- `8,000+` · integrations in the operational model (DataMiner xOps)
- `1,000+` · operators running it in production (DataMiner xOps)
- `30 days` · to a first operational picture, from the satellite baseline, no field hardware

**challenges**
1. **After a disaster, the first question is where.** Damage, debris and access are known street by
   street only after crews arrive.
2. **The cadaster falls behind the city.** Buildings change faster than surveys, and the tax roll
   follows years later.
3. **Waste trucks run fixed routes.** Schedules ignore how full the containers are.
4. **Water and power answer to the same dry season.** Loss, demand and supply sit in separate
   operators' systems.

**capabilities**
- **Triage the worst-hit neighborhoods from orbit** *(featured)* — Satellite damage and debris
  assessment after an earthquake, flood-risk mapping for El Niño, and infrastructure risk on the same
  map. *Outcome:* the neighborhoods to reach first, ranked, with the evidence attached.
- **Keep the cadaster current** *(featured)* — Building change detected from orbit with Quatro Klarety,
  confirmed in the field, with block surveys feeding the same cadaster record. *Outcome:* changes
  flagged for the tax roll between survey cycles.
- **Route waste by demand** *(featured)* — Fill-level and weight sensors on containers, and routes
  that follow demand instead of the calendar. *Outcome:* trucks go where the containers are full.
- **One command center across departments** — Video, sensors, work orders and dispatch in one
  real-time operational model. Ports and fleets run on the same operational model in production
  (DataMiner xOps).

**see / correlate / act**
- **see:** The command center's video and sensors, work orders, dispatch, utility and waste systems,
  the cadaster, and the city itself from satellite. Existing systems are integration targets.
- **correlate:** Damage and building change from orbit against the cadaster and the street network;
  container levels against routes; every figure traced to its source.
- **act:** The command center coordinates from one picture. Your operators decide; every action is
  recorded.

**layerCaptions**
- **territory:** Damage, debris and building change, seen from orbit.
- **operation:** Command center, work orders and sensors in one model.
- **quatro:** Hosted in country, with an engineer on site.

**proofCards:** none yet. Partner-delivered references (a water utility's smart metering, an operator's
consolidated operations center) need Skyline's written OK and are labeled "partner-delivered reference
programs" (§9B, PROOF-1).

---

## IND-4. Security and critical infrastructure (`/industries/security`)

Merges `/industries/defense` and `/industries/critical-infrastructure` (301s in IND-4). Drop from the old
pages: the youth-vulnerability index, counter-cartel framing, unsourced outcome metrics.

**title:** Security and critical infrastructure
**hero.eyebrow:** Security and critical infrastructure
**hero.title:** Evidence that holds up after the incident.
**hero.description:** A corridor, a coast or a perimeter is watched by several agencies, each holding
part of the picture. Quatro fuses the sensors, imagery and records you already have into one event,
with a chain of custody your prosecutors can use.
**proofBadge:** Demonstrated
**authorityLine:** Multi-source fusion with a chain of custody that holds up after the incident, for the
forces and prosecutors who act on it (the Armed Forces, the Fiscalía).

**stats**
- `8,000+` · integrations in the operational model (DataMiner xOps)
- `30 days` · to a first operational picture, from the satellite baseline, no field hardware
- `In country` · hosting, operation and support, in Spanish

**challenges**
1. **A tap is found after the loss.** The precursors on the right of way (clearing, pooling, vehicles
   in quiet segments) were visible days earlier.
2. **Guard posts cannot cover a dark perimeter.** Kilometers of fence line, dyke or coast, and entry by
   water at night.
3. **Theft is a network.** Buyers, logistics and inside information sit behind every tap and every
   raid.
4. **Response is fast; prosecution is weak.** Without a record that holds up, a confirmed event does
   not become a case.

**capabilities**
- **Watch the right of way from orbit** *(featured)* — Open satellite screening of the whole right of
  way, high-resolution confirmation on flagged cells, radar only on cue, and a heat map that ranks
  segments for patrol. *Outcome:* precursors seen before the loss.
- **Fuse every sensor into one event** *(featured)* — Video, field sensors, detection systems and
  imagery correlated on one model. Agents triage the event and assemble the evidence; your operators
  decide. *Outcome:* fewer false alarms and one confirmed event per incident.
- **A chain of custody that holds up** *(featured)* — Every verified event packaged with clips,
  timestamps, sensor tracks and a tamper-evident log, ready for the prosecutor. *Outcome:* a confirmed
  event becomes a case file.
- **Watch the water approach** — Radar and thermal sensing on coastlines and estuaries, where small
  boats carry no transponder.
- **Map the network behind the losses** — Threat-network mapping, part of the Quatro risk baseline: who is behind the losses and how the network is financed. *(Amended 2026-10-23, Jonathan: Elementos is not named on the site.)*

**see / correlate / act**
- **see:** Video, field sensors, detection systems, SCADA and line pressure, patrol and field reports,
  and the territory and coast from satellite. Existing systems are integration targets.
- **correlate:** Every source on one event, with false alarms filtered by correlation and every figure
  traced to its source.
- **act:** Agents triage and assemble evidence; your operators and your chain of command decide. Every
  step is recorded with chain of custody, the condition for evidentiary use.

**layerCaptions**
- **territory:** The right of way and the coast, screened from orbit.
- **operation:** Video, sensors and detection systems on one event.
- **quatro:** A chain of custody that holds up in court.

**proofCards**
- Energy Card A, "A corridor screened from orbit, confirmed by radar." (`COPY_ENERGY` §7, no figures),
  asset `/images/proof-energy-corridor.png`.

---

## IND-5. Agriculture and aquaculture (`/industries/agriculture`, `status: emerging`)

No proof claims, no stats (§7, §13.5). Sources cover coastal aquaculture; cacao and forestry appear
only as named interests, so they get one line and no capability.

**title:** Agriculture and aquaculture
**hero.eyebrow:** Agriculture and aquaculture
**hero.title:** Protect the harvest from the pond edge to the plant.
**hero.description:** Coastal ponds run along kilometers of dark dyke and estuary, with thin power and
network at the edge. We are bringing the operational picture to aquaculture first, and to cacao and
forestry next.
**proofBadge:** Emerging
**authorityLine:** We know the pond edge after dark: kilometers of dyke, thin power and network, and
theft that follows the tide and the harvest calendar.

**stats:** none (emerging).

**challenges**
1. **Night entry across a perimeter no guard can cover.** Boats come in on the tide; the dyke is dark.
2. **Product goes missing with no break-in.** Harvest shrink, motors and feed disappear between the
   pond and the plant.
3. **Detection alone does not deter.** Without a record that holds up, the same losses repeat.

**capabilities** (offered, not yet demonstrated)
- **Perimeter sensing that works in the dark** *(featured)* — Thermal cameras on the dykes and radar on
  the water approach, scheduled by tide and moon.
- **Custody from pond to plant** *(featured)* — Weigh-and-seal at harvest and alerts on discrepancies,
  with harvest records that strengthen export documentation.
- **The land around the farm from orbit** *(featured)* — Vegetation change and encroachment around
  ponds and plots, read from satellite.

**see / correlate / act**
- **see:** Perimeter sensors, harvest and weighing records, water and equipment telemetry, and the land
  around the farm from satellite.
- **correlate:** Perimeter events against the tide and harvest calendar; harvest weights against what
  reaches the plant.
- **act:** Your team decides what to do with each event; every step is recorded.

**layerCaptions**
- **territory:** Ponds, plots and the land around them, seen from orbit.
- **operation:** Perimeter sensing and harvest records on one record.
- **quatro:** Started where the losses are, with your team deciding.

**proofCards:** none (emerging).

---

# Spanish — written Spanish-first, not translated idiom

> Nota de voz: evitar "plataforma", "gemelo digital", "habilitar", "potenciar", signos de
> exclamación y rayas largas como nexo. Sin cliente, reserva, ciudad, provincia ni proveedor nombrado.

**Común:** párrafo de compromiso = `COPY_ENERGY` §8 (ES). CTA "Hable con nuestro equipo" →
/es/contact/demo · secundario "Cómo se ejecuta un compromiso" → /es/how-it-works/engagement ·
microcopy "Alojado en su país · Su equipo es dueño desde el primer día". Insignias `[aprobar]` como en
inglés.

## IND-1. Ambiente y áreas protegidas

**title / eyebrow:** Ambiente y áreas protegidas
**hero.title:** Un solo registro de lo que se mueve en un área protegida, en el agua y en tierra.
**hero.description:** El rastreo de embarcaciones, los permisos, la zonificación y las imágenes
satelitales viven cada uno en su sistema, y una embarcación que apaga su transpondedor simplemente
desaparece. Quatro los conecta en un cuadro desde el cual deciden sus guardaparques, en español y
alojado en su país.
**proofBadge:** Demostrado en una reserva
**authorityLine:** Conocemos la jornada de una reserva: embarcaciones que se apagan cerca del límite,
permisos y zonificación en sistemas separados, nubes sobre las tierras altas, y las instituciones que
responden por ello (MAE, INOCAR, INAMHI, SNGR).

**stats**
- `8.000+` · integraciones en el modelo operativo (DataMiner xOps)
- `30 días` · hasta un primer cuadro operativo, desde la línea base satelital, sin hardware de campo
- `En el país` · alojamiento, operación y soporte, en español

**challenges**
1. **Una embarcación que apaga su transpondedor sale del registro.** Rastreo, permisos e imágenes viven
   separados, y una embarcación que se apaga cerca del límite desaparece hasta que alguien la
   encuentra por casualidad.
2. **Se ve la presencia pesquera, no el esfuerzo.** Sin esfuerzo por embarcación, zona y periodo, no
   hay con qué contrastar cuotas y zonificación.
3. **El cambio en tierra se revisa a mano.** La expansión de invasoras y la ocupación se levantan con
   calendarios incompletos, muchas veces bajo nubes.
4. **Los datos del clima no llegan a la decisión.** Los registros oceánicos y de lluvia existen en
   fuentes abiertas y quedan fuera del cuadro de vigilancia.

**capabilities**
- **Encontrar las embarcaciones que se apagan** *(destacada)* — Rastreo y monitoreo de embarcaciones
  correlacionados con radar e imagen óptica, de día y de noche y a través de nubes. Las embarcaciones
  cooperativas se separan de los blancos oscuros, las flotas se clasifican y el esfuerzo pesquero se
  estima por embarcación, zona y periodo. *Resultado:* cada blanco oscuro de la reserva en un solo
  mapa, con la evidencia adjunta.
- **Ver el cambio en tierra antes del próximo levantamiento** *(destacada)* — Cambio de vegetación
  sobre las zonas que define su autoridad, ordenado según la regla de zonificación que incumple cada
  detección. Imagen de mayor resolución solo sobre cambio confirmado. *Resultado:* ocupación e
  invasoras marcadas entre visitas de campo.
- **Alertas donde su equipo ya trabaja** *(destacada)* — Disparadores configurables entregados por
  webhook: visita a zona restringida, cruce de límite, embarcación oscura en la reserva, pesca en zona
  de no captura, embarcación turística fuera de itinerario, transpondedor apagado. *Resultado:* la
  alerta llega al guardaparque de turno, con el registro detrás.
- **Preguntar en español corriente** — Personal sin formación en GIS hace una pregunta y recibe una
  respuesta en mapa, auditable y con cada fuente citada. *Resultado:* "qué embarcaciones sin
  transpondedor estuvieron anoche en la reserva", respondido en un paso.
- **Leer El Niño sobre su territorio** — Anomalía de temperatura superficial del mar, índices ENSO
  oficiales, lluvia y una línea base por zona, con alertas cuando una anomalía coincide con cambios de
  vegetación o de esfuerzo pesquero. No pronosticamos El Niño; el pronóstico es de las agencias que lo
  producen. *Resultado:* la temporada leída sobre sus propias zonas, con un alcance definido en dos a
  cuatro semanas.

**see / correlate / act**
- **ver:** Rastreo y monitoreo de embarcaciones, el registro de embarcaciones, permisos, registros de
  visitantes y guías, zonificación, y el territorio mismo desde satélite. Los sistemas existentes son
  objetivos de integración.
- **correlacionar:** Vacíos de rastreo contra detecciones de radar e imagen óptica, cambio en tierra
  contra zonificación, registros oceánicos y de lluvia contra sus propias zonas, con preguntas en
  español corriente y cada cifra trazada a su origen.
- **actuar:** Las alertas llegan al guardaparque de turno con la evidencia adjunta. Sus guardaparques y
  su cadena de mando deciden; nada se sanciona de forma automática y cada detección y decisión queda
  registrada.

**layerCaptions**
- **territorio:** Vegetación, agua superficial y costa comparadas con el año anterior, a través de nubes.
- **operación:** Rastreo, permisos y zonificación en un solo registro.
- **la capa de Quatro:** Alertas por webhook, y deciden sus guardaparques.

**proofCards:** tarjeta B de Energía (`COPY_ENERGY` §7 ES).

## IND-2. Minería y remediación

**title / eyebrow:** Minería y remediación
**hero.title:** Vea cada concesión y el río que está debajo, desde un solo registro.
**hero.description:** La inspección depende de drones y patrullas, los sitios reabren después de un
operativo y un proyecto de remediación puede arrancar sin un solo sensor. Quatro le da a su equipo una
línea base satelital en semanas y un registro que el regulador y la Fiscalía pueden usar.
**proofBadge:** Demostrado en un sitio `[aprobar]` · respaldo mientras tanto (igual que el inglés): "Prueba de valor en curso"
**authorityLine:** Conocemos la concesión y el río que está debajo: inspección con dron y patrulla,
sitios que reabren tras un operativo, y las autoridades que necesitan la evidencia (ARCOM, MAE, las
Fuerzas Armadas, la Fiscalía).

**stats**
- `387` · puntos de minería ilegal en 16 provincias (ARCOM, 2024, publicado por Expreso)
- `3.427` · operativos del Ejército contra la minería ilegal, de enero a octubre de 2026 (publicado por
  El Universo)
- `30 días` · hasta una línea base satelital sobre zonas prioritarias, sin hardware de campo

**challenges**
1. **La extracción ilegal se mueve más rápido que la inspección.** Los sitios reabren después de un
   operativo y nadie lo ve hasta que el río cambia de color.
2. **No hay línea base.** No existe un programa nacional de monitoreo satelital de la minería, y un
   sitio de remediación puede empezar sin sensores instalados.
3. **Encontrar la contaminación cuesta.** El muestreo de campo es caro, así que la primera pregunta es
   dónde muestrear.
4. **Los datos del sitio están dispersos.** Shapefiles, cronogramas, informes y capas GIS viven en
   lugares distintos, con vacíos en campo que nadie ha mapeado.

**capabilities**
- **Vigilar las concesiones y las cuencas de abajo** *(destacada)* — Detección continua de cambios sobre
  los sitios ilegales conocidos y las cuencas a las que drenan: pérdida de vegetación, nuevas pozas,
  turbidez, excavación, apertura de vías. Confirmada bajo demanda con imagen de alta resolución y radar.
  *Resultado:* línea base sobre zonas prioritarias en 30 días; los sitios que reabren se marcan solos.
- **Cada concesión dentro de su licencia** *(destacada)* — Concesiones legales vigiladas contra la
  huella de su licencia, con un registro de cumplimiento que comparten el operador y el regulador.
  *Resultado:* un registro fechado y georreferenciado de lo que cambió dentro y fuera de la huella.
- **Saber dónde muestrear** *(destacada)* — El tamizado de contaminación desde imágenes ordena los
  lugares más probables, para que el muestreo de campo vaya donde más confirma. *Resultado:* menos
  muestras, puestas donde cuentan. El muestreo de campo sigue confirmando.
- **Leer el impacto en vegetación y cuencas** — Cambios de vegetación y agua alrededor del sitio,
  preguntados en lenguaje corriente y respondidos con cada cifra citada.
- **La remediación en un solo registro del sitio** — Los datos existentes del sitio auditados y reunidos
  en un registro, tableros por rol con alertas por umbral, una hoja de ruta para los vacíos de campo y
  un ingeniero en sitio. *Resultado:* primeros resultados en la segunda semana y revisión contra
  criterios acordados en la cuarta.

**see / correlate / act**
- **ver:** Huellas de concesiones y licencias, informes de inspección y de campo, el GIS existente del
  sitio, shapefiles y cronogramas, y el territorio mismo desde satélite.
- **correlacionar:** Cambio desde órbita contra la huella de la licencia y la cuenca de abajo; tamizado
  de contaminación contra el plan de muestreo; cada cifra trazada a su origen.
- **actuar:** Los hallazgos quedan fechados, georreferenciados y empaquetados como evidencia para el
  regulador, las Fuerzas Armadas y la Fiscalía. Su equipo decide; cada paso queda registrado.

**layerCaptions**
- **territorio:** Sitios conocidos y las cuencas de abajo, vigilados de forma continua.
- **operación:** Concesiones, licencias e informes de campo en un solo registro.
- **la capa de Quatro:** Evidencia que el regulador y la Fiscalía pueden usar.

**proofCards:** ninguna todavía.

## IND-3. Ciudades y servicios públicos

**title / eyebrow:** Ciudades y servicios públicos
**hero.title:** Después del terremoto, sepa a qué barrios llegar primero.
**hero.description:** Una ciudad responde por sus calles, sus edificaciones, sus residuos y su agua
desde sistemas que nunca se hicieron para compartir. Quatro conecta lo que cada dependencia ya opera,
suma la vista desde órbita y le da a su centro de mando un cuadro desde el cual coordinar.
**proofBadge:** Probado a escala (DataMiner xOps) `[aprobar]`
**authorityLine:** Conocemos las preguntas que se hace una ciudad después de un terremoto o una
inundación, y las instituciones que coordinan la respuesta (la SNGR y los centros de mando
municipales).

**stats**
- `8.000+` · integraciones en el modelo operativo (DataMiner xOps)
- `1.000+` · operadores que lo usan en producción (DataMiner xOps)
- `30 días` · hasta un primer cuadro operativo, desde la línea base satelital, sin hardware de campo

**challenges**
1. **Después de un desastre, la primera pregunta es dónde.** Los daños, los escombros y el acceso se
   conocen calle por calle solo cuando llegan las cuadrillas.
2. **El catastro se queda atrás de la ciudad.** Las edificaciones cambian más rápido que los
   levantamientos, y el registro tributario llega años después.
3. **Los camiones de basura siguen rutas fijas.** Los horarios ignoran qué tan llenos están los
   contenedores.
4. **El agua y la energía responden al mismo estiaje.** Pérdidas, demanda y oferta viven en los
   sistemas de operadores distintos.

**capabilities**
- **Priorizar los barrios más afectados desde órbita** *(destacada)* — Evaluación satelital de daños y
  escombros después de un terremoto, mapa de riesgo de inundación ante El Niño y riesgo de
  infraestructura en el mismo mapa. *Resultado:* los barrios a los que llegar primero, ordenados y con
  la evidencia adjunta.
- **Mantener el catastro al día** *(destacada)* — Cambios en edificaciones detectados desde órbita con
  Quatro Klarety, confirmados en campo, con levantamientos por manzana que alimentan el mismo registro
  catastral. *Resultado:* cambios marcados para el registro tributario entre ciclos de levantamiento.
- **Rutas de residuos según la demanda** *(destacada)* — Sensores de nivel y peso en los contenedores, y
  rutas que siguen la demanda en lugar del calendario. *Resultado:* los camiones van donde los
  contenedores están llenos.
- **Un centro de mando para todas las dependencias** — Video, sensores, órdenes de trabajo y despacho
  en un solo modelo operativo en tiempo real. Puertos y flotas corren en producción sobre el mismo
  modelo operativo (DataMiner xOps).

**see / correlate / act**
- **ver:** Video y sensores del centro de mando, órdenes de trabajo, despacho, sistemas de servicios y
  residuos, el catastro, y la ciudad misma desde satélite. Los sistemas existentes son objetivos de
  integración.
- **correlacionar:** Daños y cambios en edificaciones desde órbita contra el catastro y la red vial;
  niveles de contenedores contra las rutas; cada cifra trazada a su origen.
- **actuar:** El centro de mando coordina desde un solo cuadro. Sus operadores deciden; cada acción
  queda registrada.

**layerCaptions**
- **territorio:** Daños, escombros y cambios en edificaciones, vistos desde órbita.
- **operación:** Centro de mando, órdenes de trabajo y sensores en un solo modelo.
- **la capa de Quatro:** Alojado en el país, con un ingeniero en sitio.

**proofCards:** ninguna todavía.

## IND-4. Seguridad e infraestructura crítica

**title / eyebrow:** Seguridad e infraestructura crítica
**hero.title:** Evidencia que resiste después del incidente.
**hero.description:** Un corredor, una costa o un perímetro lo vigilan varias instituciones, cada una
con una parte del cuadro. Quatro fusiona los sensores, las imágenes y los registros que ya tiene en un
solo evento, con una cadena de custodia que su Fiscalía puede usar.
**proofBadge:** Demostrado
**authorityLine:** Fusión de múltiples fuentes con una cadena de custodia que resiste después del
incidente, para las fuerzas y fiscales que actúan sobre ella (las Fuerzas Armadas, la Fiscalía).

**stats**
- `8.000+` · integraciones en el modelo operativo (DataMiner xOps)
- `30 días` · hasta un primer cuadro operativo, desde la línea base satelital, sin hardware de campo
- `En el país` · alojamiento, operación y soporte, en español

**challenges**
1. **La toma se descubre después de la pérdida.** Los precursores en el derecho de vía (desbroce, pozas,
   vehículos en tramos silenciosos) eran visibles días antes.
2. **Las garitas no cubren un perímetro oscuro.** Kilómetros de cerca, muro o costa, y entrada por agua
   de noche.
3. **El robo es una red.** Compradores, logística e información interna están detrás de cada toma y de
   cada asalto.
4. **La respuesta es rápida; el proceso penal es débil.** Sin un registro que resista, un evento
   confirmado no se convierte en caso.

**capabilities**
- **Vigilar el derecho de vía desde órbita** *(destacada)* — Tamizado satelital abierto de todo el
  derecho de vía, confirmación en alta resolución sobre las celdas marcadas, radar solo bajo indicio, y
  un mapa de calor que ordena los tramos para el patrullaje. *Resultado:* precursores vistos antes de
  la pérdida.
- **Fusionar cada sensor en un solo evento** *(destacada)* — Video, sensores de campo, sistemas de
  detección e imágenes correlacionados en un mismo modelo. Los agentes clasifican el evento y arman la
  evidencia; sus operadores deciden. *Resultado:* menos falsas alarmas y un evento confirmado por
  incidente.
- **Una cadena de custodia que resiste** *(destacada)* — Cada evento verificado se empaqueta con clips,
  marcas de tiempo, trazas de sensores y un registro a prueba de alteraciones, listo para la Fiscalía.
  *Resultado:* un evento confirmado se convierte en expediente.
- **Vigilar el acceso por agua** — Radar y sensores térmicos en costas y estuarios, donde las lanchas no
  llevan transpondedor.
- **Mapear la red detrás de las pérdidas** — El mapeo de redes de amenaza, parte de la línea base de riesgo de Quatro: quién está detrás de las pérdidas y cómo se financia la red. *(Enmienda 2026-10-23, Jonathan: Elementos no se nombra en el sitio.)*

**see / correlate / act**
- **ver:** Video, sensores de campo, sistemas de detección, SCADA y presión de línea, informes de
  patrulla y de campo, y el territorio y la costa desde satélite. Los sistemas existentes son objetivos
  de integración.
- **correlacionar:** Cada fuente sobre un mismo evento, con las falsas alarmas filtradas por correlación
  y cada cifra trazada a su origen.
- **actuar:** Los agentes clasifican y arman la evidencia; sus operadores y su cadena de mando deciden.
  Cada paso queda registrado con cadena de custodia, condición para su uso probatorio.

**layerCaptions**
- **territorio:** El derecho de vía y la costa, tamizados desde órbita.
- **operación:** Video, sensores y sistemas de detección en un solo evento.
- **la capa de Quatro:** Una cadena de custodia que resiste en juicio.

**proofCards:** tarjeta A de Energía (`COPY_ENERGY` §7 ES, sin cifras).

## IND-5. Agricultura y acuicultura (`status: emerging`)

**title / eyebrow:** Agricultura y acuicultura
**hero.title:** Proteja la cosecha, de la orilla de la piscina a la planta.
**hero.description:** Las piscinas de la costa corren a lo largo de kilómetros de muro y estuario a
oscuras, con poca energía y poca red en la orilla. Llevamos el cuadro operativo primero a la
acuicultura, y luego al cacao y la forestería.
**proofBadge:** Emergente
**authorityLine:** Conocemos la orilla de la piscina de noche: kilómetros de muro, poca energía y poca
red, y un robo que sigue la marea y el calendario de cosecha.

**stats:** ninguna (emergente).

**challenges**
1. **Entradas nocturnas por un perímetro que ningún guardia cubre.** Las lanchas entran con la marea; el
   muro está a oscuras.
2. **El producto se pierde sin que nadie entre a la fuerza.** Mermas de cosecha, motores y alimento
   desaparecen entre la piscina y la planta.
3. **Detectar no basta para disuadir.** Sin un registro que resista, las mismas pérdidas se repiten.

**capabilities** (ofrecidas, aún no demostradas)
- **Sensores de perímetro que funcionan a oscuras** *(destacada)* — Cámaras térmicas en los muros y
  radar sobre el acceso por agua, programados según la marea y la luna.
- **Custodia de la piscina a la planta** *(destacada)* — Pesaje y sellado en cosecha y alertas por
  diferencias, con registros de cosecha que fortalecen la documentación de exportación.
- **El terreno alrededor de la finca desde órbita** *(destacada)* — Cambios de vegetación y ocupación
  alrededor de piscinas y parcelas, leídos desde satélite.

**see / correlate / act**
- **ver:** Sensores de perímetro, registros de cosecha y pesaje, telemetría de agua y equipos, y el
  terreno alrededor de la finca desde satélite.
- **correlacionar:** Eventos de perímetro contra la marea y el calendario de cosecha; pesos de cosecha
  contra lo que llega a la planta.
- **actuar:** Su equipo decide qué hacer con cada evento; cada paso queda registrado.

**layerCaptions**
- **territorio:** Piscinas, parcelas y el terreno alrededor, vistos desde órbita.
- **operación:** Sensores de perímetro y registros de cosecha en un solo registro.
- **la capa de Quatro:** Empezamos donde están las pérdidas, y decide su equipo.

**proofCards:** ninguna (emergente).
