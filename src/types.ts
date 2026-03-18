import type en from './i18n/en'

export type TranslationKey = keyof typeof en

export interface ShapeDefinition {
  depth: number
  type?: 'circle' | 'triangle' | 'bar'
  style: React.CSSProperties
}

export interface ProjectEntry {
  index: string
  name: string
  tags: string[]
  year: string
  descKey: TranslationKey
  roleKey: TranslationKey
  durationKey: TranslationKey
  highlightsKey: TranslationKey
  learningsKey: TranslationKey
  urlKey: TranslationKey
  urlCodeKey: TranslationKey
}

export interface ExperienceEntry {
  date: string
  company: string
  role: string
  bullets: string[]
}

export type Theme = 'light' | 'dark'
export type Locale = 'en' | 'it'

export interface LocaleContextValue {
  locale: Locale
  toggleLocale: () => void
  t: (key: TranslationKey) => string | string[]
}
