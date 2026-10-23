# Drop-in copy — How it works (HIW-1..4)

**For tickets:** `HIW-1` (6A `/how-it-works`), `HIW-2` (6B `/how-it-works/engagement`),
`HIW-3` (6C `/how-it-works/sovereignty`), `HIW-4` (6D `/how-it-works/architecture`, Tier 3).
Spec: `docs/REALIGNMENT_2026-10-20.md` §6, §1, §2, §13.3. **Voice:** written to pass
`docs/VOICE_GATE.md`. 6A–6C are Tier 1.5; 6D may name substrates per §1.

> **Confirm before publish.**
> - **Open-book (6B):** the sources use it only as a cost-transparency rule between consortium
>   partners (teaming agreement §5.1), in documents marked not for the client. It is left off
>   the public page. Jonathan decides whether and how the client-facing version reads.
> - **"A validator" (6B):** no source names one. The deck uses the counterpart team that reviews
>   deliverables and signs the gate (Tranche 1 proposal §10).
> - **Hosting:** the three modalities of the deployment annex (§6.1). The June site's five
>   deployment modes (cloud, on-prem, edge, air-gapped, hybrid) are retired with `/utility`.
> - No prices (§13.3, decided 2026-10-20). No client, corridor, reserve or partner is named.

Sources (outside this repo, under `LMIQuatro/`): corridor Tranche 1 proposal §5, §8–§12; formal
proposal v2.0 §4; ministry executive summary; reserve confidentiality and AI-sovereignty annex
§2–§13. In repo: `src/pages/utility/index.astro`, `technology.astro`, `how-it-starts.astro`,
`docs/COPY_STACK_AND_ARCH_2026-06-08.md`. All abstracted per §0.5.

**Shared:** engagement paragraph = §2 verbatim (`src/lib/layers.ts`). CTA = primary "Talk to our
team" → /contact/demo · microcopy "Hosted in your country · Your team owns it from day one".

---

## 6A. The operational picture (`/how-it-works`)

Removed from the old `/utility` and `technology.astro`: the retail purchase-behaviour example,
"semantic substrate", "ontology", "knowledge graph", "governed data product", the three telecom
case studies, "seven questions", and the "Not X. A Y" hero line.

**eyebrow:** How it works
**H1:** One stack, from the sensor to the signed decision.
**sub:** One operational picture of your territory and your operations, from satellite to SCADA
to the field, run in your country and owned by you from day one. (§2, verbatim)

**Three-layer band:** `src/lib/layers.ts` (§2 names and headlines, promise line).

**Human-in-the-loop and ownership**
Agents propose. Your team decides. Every action is signed. You own the intelligence and the
deployment from day one. Every action the system takes is logged and auditable, and your data
stays under your control.

**Engagement paragraph:** shared (§2). Link: "How an engagement runs" → /how-it-works/engagement

**Quiet link to Architecture:** The full picture, for the people who evaluate it.
→ /how-it-works/architecture

---

## 6B. How an engagement runs (`/how-it-works/engagement`)

**eyebrow:** How it works
**H1:** How an engagement runs
**sub:** Start on your highest-risk area and decide on the results, measured against indicators
you agree in advance.

### 1. Proof of value, 30 to 90 days
- The satellite baseline starts first because it needs no field hardware, so results begin
  during the build.
- A first operational picture of your highest-risk area in about 30 days.
- Then a 90-day evaluation measured against indicators agreed in advance. On a corridor those
  are confirmed detections on the right of way, fewer false alarms and faster response.
- You keep access for a full year. Renewal and expansion are decided on results.

**The gate.** Before any field equipment is ordered, both sides approve the risk heat map, the
areas of interest and the sensor placement plan.

**What your institution supplies**
- Access to the systems that hold the data (SCADA, historians, GIS) within the first 60 days.
- A counterpart team that reviews each deliverable within ten business days and signs the gate.
- A hosting decision: which of the three hosting modalities the picture runs on, chosen while
  the statement of work is written.

### 2. An annual service your team runs
Priced annually and renewed on results. Hosting in the country, support from 07:00 to 22:00
seven days a week, 90 days of hypercare after go-live, and a monthly service report to your
steering committee.

### 3. A program, in tranches
For national programs, the build runs in tranches through a consortium led by a local prime,
your single contracting counterparty. Each tranche after the first has its own contract, so
nothing beyond the first is committed until you sign it. A monthly steering committee chaired
by the prime governs the program.

---

## 6C. Sovereignty, hosting and governance (`/how-it-works/sovereignty`)

Plain language only; the binding text is the contract annex. No legal text on the page.

**eyebrow:** How it works
**H1:** Sovereignty, hosting and governance
**sub:** In plain language, what stays in your country and what the AI is allowed to do. The
contract annex carries the binding text.

**Surveillance information.** It reaches only the roles you authorize. It stays out of support
tickets and offshore tools, and an imagery order never names you or its purpose.

**Personal data.** Under the personal data protection law (LOPDP), Quatro acts as processor on
your instructions, collects only what the work needs and pseudonymizes where it can.

**What you own.** Your data and every derived product are yours from the moment they exist.
The rules, thresholds and workflows built for you are yours too, delivered in open formats you
can carry to another provider.

**Configuration and credentials.** System configuration, architecture and credentials are
confidential. The keys stay in your custody, and remote administration runs through
multi-factor sign-in with every session recorded.

**Where it runs.** Data, backups, logs and keys stay in the country. You choose an in-country
data center we manage, a government or private cloud in the country, or your own premises,
and you can move between them. A remote site keeps working when the link drops.

**What the AI may do.** Inference runs in the country, and no third-party model is trained on
your data. Every model is registered, and you hear about a change before it reaches
production. Models are replaceable, open-weight ones included. Rules are explicit and
versioned, and every output carries a trace. The AI advises, an official decides and signs,
and you can switch any AI function off.

**When it ends.** A full export within 30 days, 90 days of transition support, and certified
deletion.

---

## 6D. Architecture (`/how-it-works/architecture`, Tier 3, not in nav)

Absorbs the honest depth of `technology.astro`. Removed: the DataOS / ECR / Second Wind logo bar
and every mention (§1c), the "moat" section, "seven questions", and the telecom proof cards.
Substrates named per §1: DataMiner xOps, Klarety.

**eyebrow:** Architecture
**H1:** The full picture, for the people who evaluate it.
**sub:** The layers behind the operational picture, the governance and audit chain, and where
it runs. Substrates are named on this page.

**The layers**
1. **Your systems.** SCADA, historians, GIS, detection systems, video, field sensors and the
   territory from satellite. Existing systems are integration targets.
2. **Connect.** 8,000+ protocol connectors in DataMiner xOps bring every system in. Quatro
   Klarety brings the territory in from open satellite data, delivered with our earth-observation
   partner Klarety.
3. **The operational model.** Every system normalizes into one real-time operational model.
4. **Reason.** Your rules run as policy on that model, with full lineage from reading to action.
   The reasoning layer is being extended on a governed, bitemporal fact ledger.
5. **Govern and act.** Governed agents read the model and propose actions your team signs:
   bounded execution, signed contracts, an immutable audit trail, sovereign deployment.
6. **Your operations.** The control room, the field crew and the case file.

**Governance and audit chain**
- Every model is pinned and registered, and passes behavioral regression tests before it
  changes.
- Agents act under execution contracts that are signed, scoped and time-bounded.
- Every run leaves a manifest, and every output carries a trace in chain-of-custody format.

**Compute.** Built on open components: Spark, Kafka, Iceberg and Trino.

**Deployment model.** Three modalities: an in-country data center we manage, a government or
private cloud in the country, or your premises. Keys in your custody; a remote node keeps
working offline. Details on /how-it-works/sovereignty.

---

# Spanish — written Spanish-first, not translated idiom

> Nota de voz: evitar "plataforma", "gemelo digital", "habilitar", "potenciar", signos de
> exclamación y rayas largas como nexo.

**Común:** párrafo de compromiso = `COPY_ENERGY` §8 (ES). CTA "Hable con nuestro equipo" →
/es/contact/demo · microcopy "Alojado en su país · Su equipo es dueño desde el primer día".

## 6A. El cuadro operativo (`/es/how-it-works`)

**eyebrow:** Cómo funciona
**H1:** Un solo sistema, del sensor a la decisión firmada.
**sub:** Un solo cuadro operativo de su territorio y de su operación, del satélite al SCADA y
al campo, operado en su país y de su propiedad desde el primer día.

**Banda de tres capas:** `layersEs` en `src/lib/layers.ts`.

**El humano decide, usted es dueño**
Los agentes proponen. Su equipo decide. Cada acción queda firmada. La inteligencia y el
despliegue son suyos desde el primer día. Cada acción del sistema queda registrada y es
auditable, y sus datos siguen bajo su control.

**Párrafo de compromiso:** común. Enlace: "Cómo se ejecuta un compromiso" →
/es/how-it-works/engagement

**Enlace a Arquitectura:** El cuadro completo, para quienes lo evalúan.
→ /es/how-it-works/architecture

## 6B. Cómo se ejecuta un compromiso (`/es/how-it-works/engagement`)

**eyebrow:** Cómo funciona
**H1:** Cómo se ejecuta un compromiso
**sub:** Empiece por su área de mayor riesgo y decida con los resultados, medidos contra
indicadores acordados de antemano.

### 1. Prueba de valor, de 30 a 90 días
- La línea base satelital arranca primero porque no requiere hardware de campo, así que los
  resultados empiezan durante la construcción.
- Un primer cuadro operativo de su área de mayor riesgo en unos 30 días.
- Luego una evaluación de 90 días medida contra indicadores acordados de antemano. En un
  corredor son las detecciones confirmadas en el derecho de vía, menos falsas alarmas y una
  respuesta más rápida.
- Conserva el acceso durante un año completo. La renovación y la ampliación se deciden con
  resultados.

**La compuerta.** Antes de pedir cualquier equipo de campo, ambas partes aprueban el mapa de
calor de riesgo, las áreas de interés y el plan de ubicación de sensores.

**Lo que aporta su institución**
- Acceso a los sistemas que tienen los datos (SCADA, historiadores, GIS) en los primeros 60
  días.
- Un equipo contraparte que revisa cada entregable en diez días hábiles y firma la compuerta.
- Una decisión de alojamiento: en cuál de las tres modalidades corre el cuadro, elegida
  mientras se redacta el alcance de trabajo.

### 2. Un servicio anual que opera su equipo
Con precio anual y renovado con resultados. Alojamiento en el país, soporte de 07:00 a 22:00
los siete días de la semana, 90 días de acompañamiento intensivo después de la puesta en
marcha y un informe mensual de servicio a su comité directivo.

### 3. Un programa, por tramos
Para programas nacionales, la construcción avanza por tramos a través de un consorcio liderado
por un integrador local, su única contraparte contractual. Cada tramo después del primero tiene
su propio contrato, así que nada más allá del primero queda comprometido hasta que usted lo
firma. Un comité directivo mensual, presidido por el integrador local, gobierna el programa.

## 6C. Soberanía, alojamiento y gobernanza (`/es/how-it-works/sovereignty`)

**eyebrow:** Cómo funciona
**H1:** Soberanía, alojamiento y gobernanza
**sub:** En lenguaje corriente, qué se queda en su país y qué puede hacer la IA. El anexo del
contrato contiene el texto vinculante.

**Información de vigilancia.** Llega solo a los roles que usted autoriza. Queda fuera de los
tickets de soporte y de las herramientas en el exterior, y una orden de imágenes nunca lo
nombra a usted ni su propósito.

**Datos personales.** Bajo la Ley Orgánica de Protección de Datos Personales (LOPDP), Quatro
actúa como encargado del tratamiento según sus instrucciones, recoge solo lo que el trabajo
necesita y seudonimiza donde puede.

**Lo que es suyo.** Sus datos y cada producto derivado son suyos desde que existen. Las reglas,
umbrales y flujos construidos para usted también lo son, entregados en formatos abiertos que
puede llevar a otro proveedor.

**Configuración y credenciales.** La configuración, la arquitectura y las credenciales del
sistema son confidenciales. Las llaves quedan bajo su custodia, y la administración remota
pasa por autenticación multifactor con cada sesión grabada.

**Dónde corre.** Los datos, los respaldos, los registros y las llaves se quedan en el país.
Usted elige un centro de datos en el país gestionado por nosotros, una nube de gobierno o
privada en el país, o sus propias instalaciones, y puede migrar entre ellas. Un sitio remoto
sigue funcionando cuando cae el enlace.

**Lo que puede hacer la IA.** La inferencia corre en el país, y ningún modelo de terceros se
entrena con sus datos. Cada modelo queda registrado, y usted conoce un cambio antes de que
llegue a producción. Los modelos son reemplazables, incluidos los de pesos abiertos. Las
reglas son explícitas y versionadas, y cada resultado lleva su traza. La IA aconseja, un
funcionario decide y firma, y usted puede apagar cualquier función de IA.

**Cuando termina.** Una exportación completa en 30 días, 90 días de apoyo a la transición y
eliminación certificada.

## 6D. Arquitectura (`/es/how-it-works/architecture`, nivel 3, fuera del menú)

**eyebrow:** Arquitectura
**H1:** El cuadro completo, para quienes lo evalúan.
**sub:** Las capas detrás del cuadro operativo, la cadena de gobernanza y auditoría, y dónde
corre. En esta página se nombran los sustratos.

**Las capas**
1. **Sus sistemas.** SCADA, historiadores, GIS, sistemas de detección, video, sensores de campo
   y el territorio desde satélite. Los sistemas existentes son objetivos de integración.
2. **Conectar.** Más de 8.000 conectores de protocolo en DataMiner xOps traen cada sistema.
   Quatro Klarety trae el territorio desde datos satelitales abiertos, entregado con nuestro
   socio de observación de la Tierra, Klarety.
3. **El modelo operativo.** Cada sistema se normaliza en un solo modelo operativo en tiempo
   real.
4. **Razonar.** Sus reglas corren como política sobre ese modelo, con trazabilidad completa de
   la lectura a la acción. La capa de razonamiento se está extendiendo sobre un registro de
   hechos gobernado y bitemporal.
5. **Gobernar y actuar.** Agentes gobernados leen el modelo y proponen acciones que su equipo
   firma: ejecución acotada, contratos firmados, un registro de auditoría inmutable, despliegue
   soberano.
6. **Su operación.** La sala de control, la cuadrilla de campo y el expediente.

**Cadena de gobernanza y auditoría**
- Cada modelo queda fijado y registrado, y pasa pruebas de regresión de comportamiento antes de
  cambiar.
- Los agentes actúan bajo contratos de ejecución firmados, acotados y con plazo.
- Cada ejecución deja un manifiesto, y cada resultado lleva una traza en formato de cadena de
  custodia.

**Cómputo.** Construido sobre componentes abiertos: Spark, Kafka, Iceberg y Trino.

**Modelo de despliegue.** Tres modalidades: un centro de datos en el país gestionado por
nosotros, una nube de gobierno o privada en el país, o sus instalaciones. Llaves bajo su
custodia; un nodo remoto sigue funcionando sin conexión. Detalle en /es/how-it-works/sovereignty.
