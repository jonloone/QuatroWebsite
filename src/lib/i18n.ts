export type Locale = 'en' | 'es'

/** Determine locale from the current page URL */
export function getLocaleFromUrl(url: URL): Locale {
  const firstSegment = url.pathname.split('/')[1]
  return firstSegment === 'es' ? 'es' : 'en'
}

/** Build the alternate-language URL for the language switcher */
export function getAlternateUrl(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url)
  if (currentLocale === targetLocale) return url.pathname

  if (targetLocale === 'es') {
    return '/es' + (url.pathname === '/' ? '/' : url.pathname)
  } else {
    const stripped = url.pathname.replace(/^\/es/, '') || '/'
    return stripped
  }
}

/** Prefix an internal href for the given locale */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === 'en') return href
  // Don't double-prefix
  if (href.startsWith('/es')) return href
  // Don't prefix external URLs or anchors
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return href
  return '/es' + href
}

/* ─── Shared UI strings ─── */
const ui = {
  en: {
    'nav.getQuote': 'Get a Quote',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.home': 'Quatro home',
    'footer.tagline': 'Industrial intelligence\nfor critical operations.',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.security': 'Security',
    'lang.switch': 'ES',
    'lang.switchLabel': 'Ver en Español',
  },
  es: {
    'nav.getQuote': 'Solicitar Cotización',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.home': 'Inicio Quatro',
    'footer.tagline': 'Inteligencia industrial\npara operaciones críticas.',
    'footer.copyright': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.security': 'Seguridad',
    'lang.switch': 'EN',
    'lang.switchLabel': 'View in English',
  },
} as const

export type UIKey = keyof (typeof ui)['en']

/** Look up a translated UI string */
export function t(key: UIKey, locale: Locale): string {
  return ui[locale][key]
}
