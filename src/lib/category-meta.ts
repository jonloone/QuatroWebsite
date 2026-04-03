export interface CategoryMeta {
  title: string
  headline: string
  description: string
  accent: string
  layout: 'magazine' | 'scenario' | 'technical'
}

export const categoryMeta: Record<string, CategoryMeta> = {
  'industry-trends': {
    title: 'Industry Trends',
    headline: 'Where operational intelligence\nis heading.',
    description: 'Analysis of the structural shifts reshaping how critical infrastructure operates — and what they mean for the organizations running it.',
    accent: 'var(--color-forest)',
    layout: 'magazine',
  },
  'use-cases': {
    title: 'Use Cases',
    headline: 'Intelligence applied\nto real operations.',
    description: 'How organizations are connecting isolated systems into operational intelligence — and the outcomes that follow.',
    accent: 'var(--color-forest)',
    layout: 'scenario',
  },
  'platform': {
    title: 'Platform',
    headline: 'How the utility\nactually works.',
    description: 'Technical perspectives on identity resolution, predictive intelligence, and the governed data layer that connects everything.',
    accent: 'var(--color-forest)',
    layout: 'technical',
  },
}

export function getValidCategories(): string[] {
  return Object.keys(categoryMeta)
}
