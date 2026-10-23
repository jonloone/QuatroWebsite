/**
 * The three layers — territory, operation, Quatro's layer (REALIGNMENT_2026-10-20
 * §2). One source of truth for the layer names, the verbatim §2 headlines, the
 * promise line and the shared engagement-ladder paragraph. Consumed by the
 * industry template (NRG-2) via SpineBand, and later by the Capabilities index.
 */

/** Same keys as the `layer` enum on the capabilities collection. */
export type LayerId = 'territory' | 'operation' | 'quatro'

export interface Layer {
  id: LayerId
  /** Ordinal shown as a mono index, e.g. "01". */
  index: string
  /** Layer name (§2 table, first column). */
  label: string
  /** Verbatim §2 headline. Do not paraphrase. */
  headline: string
}

/** Promise line (§2). */
export const layerPromise = 'See the territory. Run the operation. Own the intelligence.'

export const layers: Layer[] = [
  { id: 'territory', index: '01', label: 'Territory: Quatro Klarety', headline: 'See what changed, where, and when.' },
  { id: 'operation', index: '02', label: 'Operation', headline: 'Every system you run, in one live model.' },
  { id: 'quatro', index: '03', label: "Quatro's layer", headline: 'Integrate, sense, reason, operate.' },
]

/** Engagement ladder (§2; COPY_ENERGY §8). Reused on every industry page. */
export const engagementLadder =
  'A proof of value in 30 to 90 days on your highest-risk area, satellite baseline first because it needs no field hardware, measured against indicators agreed in advance, with a year of access retained. Then an annual service your team runs. Then, for national programs, a tranche build through a consortium led by a local prime. Hosted in your country or on your infrastructure; data and derived products are yours; AI governance is written into the contract annex.'

/** Spanish mirror (COPY_ENERGY §11, §8 ES half). Draft until Esteban approves. */
export const layerPromiseEs = 'Vea el territorio. Conduzca la operación. Sea dueño de la inteligencia.'

export const layersEs: Layer[] = [
  { id: 'territory', index: '01', label: 'Territorio: Quatro Klarety', headline: 'Vea qué cambió, dónde y cuándo.' },
  { id: 'operation', index: '02', label: 'Operación', headline: 'Todos sus sistemas, en un solo modelo operativo en vivo.' },
  { id: 'quatro', index: '03', label: 'La capa de Quatro', headline: 'Integrar, sensar, razonar, operar.' },
]

export const engagementLadderEs =
  'Una prueba de valor de 30 a 90 días sobre su área de mayor riesgo, primero la línea base satelital porque no requiere hardware de campo, medida contra indicadores acordados de antemano, con un año de acceso conservado. Luego un servicio anual que opera su equipo. Luego, para programas nacionales, una construcción por tramos a través de un consorcio liderado por un integrador local. Alojado en su país o en su infraestructura; los datos y los productos derivados son suyos; la gobernanza de la IA queda escrita en el anexo contractual.'
