/**
 * The set of page paths this build emits, so links that depend on a counterpart page (the
 * language switch) only point at pages that exist (LINK-1). Static pages come from the pages
 * glob; dynamic routes are enumerated from the collections that drive them.
 */
import { getCollection } from 'astro:content'
import { getValidCategories } from '@/lib/category-meta'

let cache: Promise<Set<string>> | null = null

const strip = (id: string) => id.replace(/\.md$/, '')

async function build(): Promise<Set<string>> {
  const routes = new Set<string>(['/', '/es'])
  for (const file of Object.keys(import.meta.glob('/src/pages/**/*.{astro,md}'))) {
    if (file.includes('[') || /\/_/.test(file)) continue
    const path = file.replace('/src/pages', '').replace(/\.(astro|md)$/, '').replace(/\/index$/, '')
    routes.add(path || '/')
  }
  for (const e of await getCollection('industries')) routes.add(`/industries/${strip(e.id)}`)
  for (const e of await getCollection('industries-es')) routes.add(`/es/industries/${strip(e.id)}`)
  for (const e of await getCollection('capabilities')) if ((e.data as any).hero) routes.add(`/capabilities/${strip(e.id)}`)
  for (const e of await getCollection('capabilities-es')) if ((e.data as any).hero) routes.add(`/es/capabilities/${strip(e.id)}`)
  for (const e of await getCollection('use-cases')) routes.add(`/industries/${(e.data as any).parentIndustry}/${strip(e.id)}`)
  for (const e of await getCollection('insights')) routes.add(`/insights/${strip(e.id)}`)
  for (const e of await getCollection('solutions-es')) routes.add(`/es/solutions/${strip(e.id)}`)
  for (const e of await getCollection('case-studies')) routes.add(`/resources/case-studies/${strip(e.id)}`)
  for (const e of await getCollection('case-studies-es')) routes.add(`/es/resources/case-studies/${strip(e.id)}`)
  for (const c of getValidCategories()) routes.add(`/insights/${c}`)
  return routes
}

export function getRouteSet(): Promise<Set<string>> {
  return (cache ??= build())
}

export async function routeExists(path: string): Promise<boolean> {
  const normalized = path.replace(/\/$/, '') || '/'
  return (await getRouteSet()).has(normalized)
}
