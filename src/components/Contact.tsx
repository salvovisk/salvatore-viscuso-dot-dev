import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import { email, emailHref } from '../utils/email'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition } from '../types'
import './Contact.css'

function LinkedInSocial() {
  return (
    <svg className="social-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect className="social-svg__border" x="0.5" y="0.5" width="43" height="43" rx="1.5"
        stroke="currentColor" strokeWidth="1" fill="none" pathLength="1" />
      <g transform="translate(10,10)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path className="social-svg__path" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" pathLength="1" />
        <rect className="social-svg__path" x="2" y="9" width="4" height="12" pathLength="1" />
        <circle className="social-svg__path" cx="4" cy="4" r="2" pathLength="1" />
      </g>
    </svg>
  )
}


function GitHubSocial() {
  return (
    <svg className="social-svg" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect className="social-svg__border" x="0.5" y="0.5" width="43" height="43" rx="1.5"
        stroke="currentColor" strokeWidth="1" fill="none" pathLength="1" />
      <g transform="translate(10,10)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path className="social-svg__path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" pathLength="1" />
      </g>
    </svg>
  )
}

const SHAPES: ShapeDefinition[] = [
  { depth: 0.08, type: 'circle',   style: { width:500, height:500, border:'1.5px solid var(--ink)', opacity:0.05, top:'calc(50% - 250px)', left:'calc(50% - 250px)', animation:'s-drift-f 50s ease-in-out alternate infinite' } },
  { depth: 0.24, type: 'triangle', style: { width:80, height:70, background:'var(--accent)', opacity:0.09, top:'10%', left:'8%', animation:'s-drift-b 26s ease-in-out alternate infinite' } },
  { depth: 0.10, type: 'bar',      style: { width:140, background:'var(--ink-3)', opacity:0.14, bottom:'20%', right:'6%', animation:'s-drift-e 38s ease-in-out alternate infinite' } },
  { depth: 0.30, type: 'circle',   style: { width:16, height:16, background:'var(--accent)', opacity:0.18, top:'20%', right:'15%', animation:'s-drift-d 19s ease-in-out alternate infinite' } },
]

export default function Contact() {
  const { t } = useLocale()
  const headRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useReveal(headRef, { threshold: 0.1 })
  useReveal(bodyRef, { threshold: 0.1 })

  return (
    <section id="contact" className="contact">
      <ShapeLayer shapes={SHAPES} />
      <div className="container contact__inner">
        <div ref={headRef} className="contact__headline reveal">
          <h2 className="contact__title">
            {t('contact_title_1')}<br />
            <em>{t('contact_title_em')}</em>
          </h2>
        </div>

        <div ref={bodyRef} className="contact__body reveal" style={{ transitionDelay: '0.15s' }}>
          <a href={emailHref} className="contact__email">
            {email}
          </a>

          <div className="contact__socials">
            <a
              href="https://linkedin.com/in/salvatore-viscuso-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              aria-label="LinkedIn"
            >
              <LinkedInSocial />
            </a>
            <a
              href="https://github.com/salvatoreviscode"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social"
              aria-label="GitHub"
            >
              <GitHubSocial />
            </a>
          </div>
        </div>

        <footer className="contact__footer">
          <span className="font-mono">© {new Date().getFullYear()} Salvatore Viscuso</span>
          <span className="font-mono contact__footer-note">{t('contact_footer_made')}</span>
        </footer>
      </div>
    </section>
  )
}
