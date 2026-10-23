# Drop-in copy — Homepage (HOME-1)

**For ticket:** `HOME-1` (homepage rebuild). Spec: `docs/REALIGNMENT_2026-10-20.md` §10, §2, §1, §1e, §9A.
**Voice:** written to pass `docs/VOICE_GATE.md`. Homepage is Tier 1.5: capabilities named as Quatro's;
Klarety and DataMiner xOps appear only on the substrate lines of the ecosystem band (§1b).
Sources: §2 (hero, sub, promise, layers), `COPY_ENERGY`, `COPY_INDUSTRIES_2026-10`, `COPY_CAPABILITIES_2026-10`,
`COPY_HOW_IT_WORKS_2026-10`. No client, place of an engagement, partner or vendor beyond §1 is named.

> **Confirm before publish.**
> - Agriculture's industry row renders only if IND-5 publishes (§13.5).
> - The "air-gapped" FAQ is replaced by "Can this run in our country?" (§10); the hosting answer follows
>   the deployment annex's three modalities.
> - No competitor is named in the integrator answer (the June copy named two).
> - The Spanish H1 (the mission, §0.3) has no approved translation yet; the deck proposes one `[aprobar]`.

---

## 1. Hero

- **eyebrow:** Your systems generate the data. You should own the intelligence.
- **H1 (verbatim, §0.3):** Making critical infrastructure intelligent.
- **sub (§2):** One operational picture of your territory and your operations, from satellite to SCADA to the
  field, run in your country and owned by you from day one.
- **promise line (§2):** See the territory. Run the operation. Own the intelligence.
- **CTA:** Talk to our team → /contact/demo

## 2. Rotating captions (six, one per 2026 piece of work)

| # | Caption | Label |
|---|---|---|
| 1 | A corridor screened from orbit, confirmed by radar | Energy and pipelines |
| 2 | A reserve where the vessels that go dark stay on the map | Environment and protected areas |
| 3 | A mine site and the river below it, on one record | Mining and remediation |
| 4 | After the earthquake, the neighborhoods to reach first | Cities and public services |
| 5 | One dry-season brief across the basins | Energy and pipelines |
| 6 | A refinery assessment left behind as a live model | Energy and pipelines |

## 3. Three-layer band (with homepage captions)

Layer names and headlines from `src/lib/layers.ts` (§2). Captions:
- **territory:** Corridors, reserves, mine sites and cities, watched from orbit.
- **operation:** SCADA, historians, GIS, video and sensors in one live model.
- **quatro:** Hosted and operated in your country, owned by you from day one.

## 4. Industry rows (six)

Title and one line each, linking the industry page. Lines are the industry hero titles (`COPY_ENERGY`,
`COPY_INDUSTRIES_2026-10`).
- **Energy and pipelines** · One operational picture for electricity, hydrocarbons, mining and water.
- **Environment and protected areas** · One record of what moves through a protected area, on the water and on land.
- **Mining and remediation** · See every concession and the river below it, from one record.
- **Cities and public services** · After the earthquake, know which neighborhoods to reach first.
- **Security and critical infrastructure** · Evidence that holds up after the incident.
- **Agriculture and aquaculture** *(only if IND-5 publishes)* · Protect the harvest from the pond edge to the plant.


## 5. Ecosystem band (§1c)

- **eyebrow:** The ecosystem
- **H2:** Proven technology at every layer, integrated and operated by Quatro.
- **entries (name · line):**
  - **Quatro Klarety** · Territorial monitoring from space, delivered with our earth-observation partner Klarety.
  - **DataMiner xOps** · The operational model: 8,000+ integrations, in production with operators worldwide.
  - **The Quatro IoT & Edge Suite** · Sensors, gateways and OT communications in the field.
  *(Amended 2026-10-23, Jonathan: Elementos is not named on the site.)*
- Removed (§1c): DataOS, Second Wind, SMARTS, TEKTELIC, SES, Intelsat, Telesat, IoT Orbital, cloud vendor logos.

## 6. Proof stories (§9A)

Energy cards A and B (`COPY_ENERGY` §7, no figures), each linking /proof. Section link: "Reference work" → /proof.

## 7. Where we operate (§1e)

- **eyebrow:** Where we operate
- **H2:** Headquartered in Quito, Ecuador, with a US entity.
- **sub:** Active in Ecuador, Colombia, Venezuela, Panama and Guyana, and in MENA through a channel partner.
- **markers:** Ecuador · Colombia · Venezuela · Panama · Guyana · MENA (channel partner)
- **link:** Become a partner → /partners
- Removed: North America, Africa, Southeast Asia, "Global" as active markets.

## 8. FAQ

1. **How is Quatro different from a systems integrator?**
   A systems integrator runs a long discovery and hands you a roadmap. We start on your highest-risk area with
   a satellite baseline, connect the systems that hold the answer, and give your team a working operational
   picture in weeks. The engagement has a hand-off, and what it leaves behind is yours.
2. **What about vendor lock-in?**
   The operational model, the data, the derived products and the keys are yours from day one. It runs in your
   country on infrastructure you choose, and you can move between hosting options. Rules and workflows come to
   you in open formats, and an exit includes a full export and certified deletion.
3. **What does the engagement look like?**
   A proof of value in 30 to 90 days on your highest-risk area, satellite baseline first, measured against
   indicators agreed in advance. Then an annual service your team runs, and for national programs a build in
   tranches through a local prime. → /how-it-works/engagement
4. **Can this run in our country?** *(new)*
   Yes. Inference, data, backups, logs and keys stay in the country: in an in-country data center we manage, a
   government or private cloud in the country, or on your own premises. Quatro Ecuador operates it, with
   support in Spanish.
5. *(keep)* What if our infrastructure doesn't generate usable data yet? · answer unchanged.
6. *(keep)* Do we need to replace our existing systems? · answer unchanged.

---

# Spanish — written Spanish-first, not translated idiom

> Nota de voz: evitar "plataforma", "gemelo digital", "habilitar", "potenciar", signos de exclamación y rayas
> largas como nexo.

## 1. Hero
- **eyebrow:** Sus sistemas generan los datos. La inteligencia debería ser suya.
- **H1 (aprobado 2026-10-23, Jonathan):** Hacemos inteligente la infraestructura crítica.
- **sub:** Un solo cuadro operativo de su territorio y de su operación, del satélite al SCADA y al campo,
  operado en su país y de su propiedad desde el primer día.
- **promesa:** Vea el territorio. Conduzca la operación. Sea dueño de la inteligencia.
- **CTA:** Hable con nuestro equipo → /es/contact/demo

> El H1 es la misión (§0.3). No hay traducción aprobada: el H1 español publicado hoy ("Vea Todo. Entienda
> Por Qué...") es copia anterior. Jonathan y Esteban aprueban esta versión antes de publicar.

## 2. Leyendas rotativas
| # | Leyenda | Etiqueta |
|---|---|---|
| 1 | Un corredor tamizado desde órbita, confirmado por radar | Energía e hidrocarburos |
| 2 | Una reserva donde las embarcaciones que se apagan siguen en el mapa | Ambiente y áreas protegidas |
| 3 | Un sitio minero y el río de abajo, en un solo registro | Minería y remediación |
| 4 | Después del terremoto, los barrios a los que llegar primero | Ciudades y servicios públicos |
| 5 | Un solo informe de estiaje para todas las cuencas | Energía e hidrocarburos |
| 6 | Una evaluación de refinería que queda como modelo vivo | Energía e hidrocarburos |

## 3. Banda de tres capas
`layersEs` en `src/lib/layers.ts`. Leyendas:
- **territorio:** Corredores, reservas, sitios mineros y ciudades, vigilados desde órbita.
- **operación:** SCADA, historiadores, GIS, video y sensores en un solo modelo vivo.
- **la capa de Quatro:** Alojado y operado en su país, de su propiedad desde el primer día.

## 4. Filas de industrias
- **Energía e hidrocarburos** · Un solo cuadro operativo para electricidad, hidrocarburos, minería y agua.
- **Ambiente y áreas protegidas** · Un solo registro de lo que se mueve en un área protegida, en el agua y en tierra.
- **Minería y remediación** · Vea cada concesión y el río que está debajo, desde un solo registro.
- **Ciudades y servicios públicos** · Después del terremoto, sepa a qué barrios llegar primero.
- **Seguridad e infraestructura crítica** · Evidencia que resiste después del incidente.
- **Agricultura y acuicultura** *(solo si se publica IND-5)* · Proteja la cosecha, de la orilla de la piscina a la planta.

## 5. Ecosistema
- **eyebrow:** El ecosistema
- **H2:** Tecnología probada en cada capa, integrada y operada por Quatro.
- **Quatro Klarety** · Monitoreo territorial desde el espacio, entregado con nuestro socio de observación de la Tierra, Klarety.
- **DataMiner xOps** · El modelo operativo: más de 8.000 integraciones, en producción con operadores en todo el mundo.
- **La Quatro IoT & Edge Suite** · Sensores, gateways y comunicaciones OT en campo.
*(Enmienda 2026-10-23, Jonathan: Elementos no se nombra en el sitio.)*

## 6. Historias de prueba
Tarjetas A y B de Energía (`COPY_ENERGY` §7 ES), con enlace a /es/proof.

## 7. Dónde operamos
- **eyebrow:** Dónde operamos
- **H2:** Sede en Quito, Ecuador, con una entidad en Estados Unidos.
- **sub:** Activos en Ecuador, Colombia, Venezuela, Panamá y Guyana, y en MENA a través de un socio de canal.
- **marcadores:** Ecuador · Colombia · Venezuela · Panamá · Guyana · MENA (socio de canal)
- **enlace:** Hágase socio → /partners

## 8. Preguntas frecuentes
*(ES-HOME-1, 2026-10-23: etiqueta "Preguntas frecuentes"; encabezado "Lo que conviene saber antes de hablar." Etiqueta de filas: "Industrias". Solo las cuatro preguntas de abajo; las dos "keep" del inglés no tienen fuente en español. Lectura de Esteban.)*
1. **¿En qué se diferencia Quatro de un integrador de sistemas?**
   Un integrador de sistemas hace un largo descubrimiento y le entrega una hoja de ruta. Nosotros empezamos por
   su área de mayor riesgo con una línea base satelital, conectamos los sistemas que tienen la respuesta y le
   damos a su equipo un cuadro operativo funcionando en semanas. El compromiso tiene una entrega, y lo que deja
   es suyo.
2. **¿Y la dependencia del proveedor?**
   El modelo operativo, los datos, los productos derivados y las llaves son suyos desde el primer día. Corre en
   su país, sobre la infraestructura que usted elige, y puede migrar entre opciones de alojamiento. Las reglas y
   los flujos le llegan en formatos abiertos, y una salida incluye una exportación completa y eliminación
   certificada.
3. **¿Cómo es el compromiso?**
   Una prueba de valor de 30 a 90 días sobre su área de mayor riesgo, primero la línea base satelital, medida
   contra indicadores acordados de antemano. Luego un servicio anual que opera su equipo y, para programas
   nacionales, una construcción por tramos a través de un integrador local. → /es/how-it-works/engagement
4. **¿Puede correr en nuestro país?**
   Sí. La inferencia, los datos, los respaldos, los registros y las llaves se quedan en el país: en un centro de
   datos en el país gestionado por nosotros, en una nube de gobierno o privada en el país, o en sus propias
   instalaciones. Lo opera Quatro Ecuador, con soporte en español.
