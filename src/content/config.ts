import { defineCollection, z } from 'astro:content'

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
})

const platformMappingSchema = z.object({
  connect: z.string(),
  operate: z.string(),
  command: z.string(),
})

const proofPointSchema = z.object({
  industry: z.string(),
  headline: z.string(),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  narrative: z.string(),
})

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema.optional(),
    }),
    problems: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    solutions: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
})

const industriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema.optional(),
    }),
    challenges: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    ),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    platformMapping: platformMappingSchema.optional(),
    proofPoint: proofPointSchema.optional(),
    cta: z.object({
      primary: ctaSchema,
      secondary: ctaSchema.optional(),
      microcopy: z.string().optional(),
    }).optional(),
  }),
})

const solutionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema.optional(),
    }),
    challenges: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    ),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    platformMapping: platformMappingSchema.optional(),
    proofPoint: proofPointSchema.optional(),
    cta: z.object({
      primary: ctaSchema,
      secondary: ctaSchema.optional(),
      microcopy: z.string().optional(),
    }).optional(),
  }),
})

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    title: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
    industry: z.string().optional(),
    order: z.number().optional(),
  }),
})

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    industryLabel: z.string(),
    headline: z.string(),
    excerpt: z.string(),
    company: z.string().optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    order: z.number().optional(),
  }),
})

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number(),
  }),
})

export const collections = {
  products: productsCollection,
  industries: industriesCollection,
  solutions: solutionsCollection,
  testimonials: testimonialsCollection,
  'case-studies': caseStudiesCollection,
  team: teamCollection,
}
