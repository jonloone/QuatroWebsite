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
