import { defineCollection, reference, z } from 'astro:content'

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
})

const platformMappingSchema = z.object({
  see: z.string(),
  understand: z.string(),
  orchestrate: z.string(),
})

// Industries map to see / correlate / act (REALIGNMENT_2026-10-20 §7). The legacy
// understand / orchestrate keys still parse, and both spellings come out the other side.
const industryLayerMappingSchema = z
  .object({
    see: z.string(),
    correlate: z.string().optional(),
    act: z.string().optional(),
    understand: z.string().optional(),
    orchestrate: z.string().optional(),
  })
  .refine((m) => (m.correlate ?? m.understand) && (m.act ?? m.orchestrate), {
    message: 'platformMapping needs correlate (or understand) and act (or orchestrate)',
  })
  .transform((m) => {
    const correlate = (m.correlate ?? m.understand) as string
    const act = (m.act ?? m.orchestrate) as string
    return { see: m.see, correlate, act, understand: correlate, orchestrate: act }
  })

// Abstracted reference work; asset null renders the honest placeholder (§0.1).
const proofCardSchema = z.object({
  title: z.string(),
  saw: z.string(),
  did: z.string(),
  took: z.string(),
  asset: z.string().nullable().optional(),
  href: z.string().optional(),
})

const proofPointSchema = z.object({
  industry: z.string(),
  headline: z.string(),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
  narrative: z.string(),
})

const industriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    heroImage: z.string().optional(),
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
        image: z.string().optional(),
      })
    ),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        featured: z.boolean().optional(),
        image: z.string().optional(),
        outcome: z.string().optional(),
        tier: z.enum(['see', 'understand', 'orchestrate']).optional(),
      })
    ),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ).optional(),
    programs: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        domains: z.string().optional(),
        image: z.string().optional(),
      })
    ).optional(),
    platformMapping: industryLayerMappingSchema.optional(),
    status: z.enum(['active', 'emerging', 'retired']).optional(),
    proofBadge: z.string().optional(),
    authorityLine: z.string().optional(),
    proofCards: z.array(proofCardSchema).optional(),
    insightTags: z.array(z.string()).optional(),
    layerCaptions: z.object({
      territory: z.string().optional(),
      operation: z.string().optional(),
      quatro: z.string().optional(),
    }).optional(),
    proofPoint: proofPointSchema.optional(),
    cta: z.object({
      primary: ctaSchema,
      secondary: ctaSchema.optional(),
      microcopy: z.string().optional(),
    }).optional(),
  }),
})

// The six capability pages (REALIGNMENT_2026-10-20 §5), grouped by the three layers of §2.
// proof null renders the honest placeholder until reference work is cleared (§0.1).
const capabilitiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    layer: z.enum(['territory', 'operation', 'quatro']),
    substrate: z.enum(['klarety', 'dataminer-xops', 'quatro']),
    proof: proofCardSchema.nullable(),
    // Page copy (CapabilityLayout, §5). A page builds only once `hero` is set by its CAP ticket.
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      sub: z.string(),
    }).optional(),
    scaleBand: z.object({
      stats: z.array(z.string()),
      caption: z.string(),
    }).optional(),
    whatYouGet: z.array(z.string()).optional(),
    showsUp: z.array(z.object({
      industry: z.string(),
      href: z.string(),
      text: z.string(),
    })).optional(),
    substrateLine: z.string().optional(),
    // Optional affiliate routing block; unused since 2026-10-23 (Elementos not named on the site); CTA renders only with a real URL
    affiliate: z.object({
      text: z.string(),
      cta: z.object({ label: z.string(), href: z.string() }).optional(),
    }).optional(),
    handoff: z.object({
      text: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }).optional(),
  }),
})

const industrySlugs = ['energy', 'environment', 'mining', 'cities', 'security', 'agriculture'] as const

const solutionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    order: z.number(),
    heroImage: z.string().optional(),
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
        image: z.string().optional(),
      })
    ),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        featured: z.boolean().optional(),
        image: z.string().optional(),
        outcome: z.string().optional(),
        tier: z.enum(['see', 'understand', 'orchestrate']).optional(),
      })
    ),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ).optional(),
    programs: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        domains: z.string().optional(),
        image: z.string().optional(),
      })
    ).optional(),
    platformMapping: platformMappingSchema.optional(),
    proofPoint: proofPointSchema.optional(),
    // §8: example cards under an industry, or moved off this site.
    status: z.enum(['active', 'moved-to-dataos']).optional(),
    capability: reference('capabilities').optional(),
    industry: z.enum(industrySlugs).optional(),
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

const useCasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    parentIndustry: z.string(), // e.g. 'energy', 'defense'
    order: z.number(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema.optional(),
    }),
    pain: z.object({
      narrative: z.string(),
      quantified: z.array(z.object({
        metric: z.string(),
        before: z.string(),
        after: z.string(),
      })),
    }),
    capabilities: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string().optional(),
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
    objections: z.array(
      z.object({
        concern: z.string(),
        response: z.string(),
      })
    ).optional(),
    adjacentSolutions: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
      })
    ).optional(),
    crossVertical: z.array(
      z.object({
        industry: z.string(),
        result: z.string(),
      })
    ).optional(),
    cta: z.object({
      primary: ctaSchema,
      secondary: ctaSchema.optional(),
      microcopy: z.string().optional(),
    }).optional(),
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

const insightsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['industry-trends', 'use-cases', 'platform', 'case-studies', 'company']),
    industry: z.string().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Quatro Team'),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
})

export const collections = {
  industries: industriesCollection,
  capabilities: capabilitiesCollection,
  solutions: solutionsCollection,
  testimonials: testimonialsCollection,
  'case-studies': caseStudiesCollection,
  team: teamCollection,
  'use-cases': useCasesCollection,
  insights: insightsCollection,
  // Spanish collections use the same schemas as their English counterparts
  'solutions-es': solutionsCollection,
  'industries-es': industriesCollection,
  'capabilities-es': capabilitiesCollection,
  'case-studies-es': caseStudiesCollection,
}
