import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocale } from '../hooks/useLocale'
import type { Theme } from '../types'
import './Navbar.css'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="4"  y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const { locale, toggleLocale, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  const NAV_LINKS = [
    { label: t('nav_about'),      href: '#about',      id: 'about' },
    { label: t('nav_skills'),     href: '#skills',     id: 'skills' },
    { label: t('nav_experience'), href: '#experience', id: 'experience' },
    { label: t('nav_projects'),   href: '#projects',   id: 'projects' },
    { label: t('nav_contact'),    href: '#contact',    id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  const observerRef = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.id)
    const visible = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio)
          else visible.delete(e.target.id)
        })
        // pick the section with highest intersection ratio
        let best = ''
        let bestRatio = 0
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id }
        })
        if (best) setActiveSection(best)
      },
      { threshold: [0.1, 0.3, 0.5, 0.7], rootMargin: '-60px 0px 0px 0px' }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="navbar__progress" aria-hidden="true">
        <div className="navbar__progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">SV</a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link${activeSection === id ? ' is-active' : ''}`}
            >{label}</a>
          ))}
        </nav>

        <div className="navbar__controls">
          <button
            className="navbar__toggle-lang font-mono"
            onClick={toggleLocale}
            aria-label={locale === 'en' ? "Passa all'italiano" : 'Switch to English'}
          >
            {locale === 'en' ? 'IT' : 'EN'}
          </button>

          <button
            className="navbar__toggle-theme"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? String(t('nav_theme_dark')) : String(t('nav_theme_light'))}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={String(t('nav_menu_toggle'))}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>

    {createPortal(
      <div
        className={`navbar__overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        aria-modal={menuOpen ? 'true' : undefined}
      >
        <nav className="navbar__overlay-links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={href}
              href={href}
              className={`navbar__overlay-link${activeSection === id ? ' is-active' : ''}`}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className="navbar__overlay-lang font-mono"
          onClick={() => { toggleLocale(); closeMenu() }}
          tabIndex={menuOpen ? 0 : -1}
        >
          {locale === 'en' ? 'IT' : 'EN'}
        </button>
      </div>,
      document.body
    )}
    </>
  )
}
