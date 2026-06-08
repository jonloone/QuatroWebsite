/**
 * The Sense → Unify → Act spine — the single narrative running through the
 * site (REALIGNMENT_2026-06-08 §1). One source of truth for the three beats:
 * each beat's verbatim jonathan-voice one-liner, the proof surface it is tied
 * to, and the default demo-slot copy (§2). Consumed by SpineBand and, later,
 * the homepage (HOME-1) and the How-it-works pages.
 */

export type SpineBeatId = 'sense' | 'unify' | 'act'

export interface SpineBeat {
  /** Stable id; also the SpineBand slot name for an injected demo. */
  id: SpineBeatId
  /** Display label, e.g. "Sense". */
  label: string
  /** Ordinal shown as a mono index, e.g. "01". */
  index: string
  /** The verbatim §1 one-liner (jonathan-voice). Do not paraphrase. */
  oneLiner: string
  /** The proof surface this beat is tied to. */
  proofSurface: string
  /** Default demo-slot copy for this beat (§2); asset wiring is DEMO-1/HOME-1. */
  demo: {
    title: string
    caption: string
  }
}

/** Promise line shown under the hero and atop the spine band (§1). */
export const spinePromise = 'Sense it. Unify it. Act on it. You own it.'

/** The constant underneath every beat (§1). */
export const spineFoundation =
  'Human-in-the-loop by design. You own the intelligence from day one.'

export const spineBeats: SpineBeat[] = [
  {
    id: 'sense',
    label: 'Sense',
    index: '01',
    oneLiner:
      'Your operation already throws off signal. We connect the hardware that captures it.',
    proofSurface: 'IoT / hardware',
    demo: {
      title: 'Sense',
      caption: 'A real device capturing live signal from sites, vehicles, and people.',
    },
  },
  {
    id: 'unify',
    label: 'Unify',
    index: '02',
    oneLiner:
      'Fifteen vendors, one operational truth. Proven across 1,000+ operators.',
    proofSurface: 'DataMiner xOps',
    demo: {
      title: 'Unify',
      caption: 'The xOps command center correlating many vendors into one digital twin.',
    },
  },
  {
    id: 'act',
    label: 'Act',
    index: '03',
    oneLiner:
      'One governed picture your operators act from. The copilot proposes, your team decides, every action is signed.',
    proofSurface: 'Quatro Field',
    demo: {
      title: 'Act',
      caption: 'The Quatro Field operating picture, with signed custody-of-evidence export.',
    },
  },
]
