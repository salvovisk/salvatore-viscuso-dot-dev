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
  /** Shown in place of the CTA when `urlKey` resolves to '#', so the slot is never silently empty. */
  noLinkKey?: TranslationKey
}

/** One screenshot inside a journey frame. `route` doubles as the frame's mono caption. */
export interface JourneyShot {
  /** Path under `public/`, e.g. `/journey/web-01-hero.png`. Missing files degrade to an empty frame. */
  src: string
  /** Drives the device chrome: a browser hairline, or a drawn phone outline. */
  platform: 'web' | 'app'
  route: string
  /** Intrinsic pixels. Set on the <img> so the row reserves its box and never shifts on load. */
  w: number
  h: number
}

/** A row of the journey ledger. Two shots render side by side (web against app). */
export interface JourneyFrame {
  index: string
  titleKey: TranslationKey
  captionKey: TranslationKey
  /** The single thin-bar annotation. Most frames have none, and that is the point. */
  noteKey?: TranslationKey
  shots: JourneyShot[]
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
