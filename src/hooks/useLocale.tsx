import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import en from '../i18n/en'
import it from '../i18n/it'
import type { Locale, LocaleContextValue, TranslationKey } from '../types'

const TRANSLATIONS = { en, it }

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    return (localStorage.getItem('sv-locale') as Locale) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('sv-locale', locale)
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  function toggleLocale() {
    setLocale(l => l === 'en' ? 'it' : 'en')
  }

  const t = (key: TranslationKey): string | string[] =>
    TRANSLATIONS[locale][key] as string | string[]

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
