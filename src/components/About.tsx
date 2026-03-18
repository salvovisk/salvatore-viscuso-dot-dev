import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import { email, emailHref } from '../utils/email'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition } from '../types'
import './About.css'

const SHAPES: ShapeDefinition[] = [
  { depth: 0.10, type: 'circle', style: { width:320, height:320, border:'10px solid var(--ink)', opacity:0.04, top:'-80px', left:'-60px', animation:'s-drift-f 36s ease-in-out alternate infinite' } },
  { depth: 0.20, style:         { width:100, height:100, border:'1.5px solid var(--ink)', opacity:0.07, bottom:'10%', right:'6%', animation:'s-drift-c 28s ease-in-out alternate infinite' } },
  { depth: 0.32, type: 'circle', style: { width:18, height:18, background:'var(--accent)', opacity:0.20, top:'45%', right:'22%', animation:'s-drift-d 21s ease-in-out alternate infinite' } },
  { depth: 0.08, type: 'bar',    style: { width:140, background:'var(--ink-3)', opacity:0.13, bottom:'18%', left:'8%', animation:'s-drift-e 33s ease-in-out alternate infinite' } },
]

export default function About() {
  const { t } = useLocale()
  const colL     = useRef<HTMLDivElement>(null)
  const colR     = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useReveal(colL)
  useReveal(colR, { threshold: 0.12 })
  useReveal(statsRef)

  const STATS = [
    { value: '4+', label: String(t('about_stat_experience')) },
    { value: '3+', label: String(t('about_stat_companies')) },
    { value: '9+', label: String(t('about_stat_projects')) },
    { value: '∞',  label: String(t('about_stat_problems')) },
  ]

  return (
    <section id="about" className="about">
      <ShapeLayer shapes={SHAPES} />
      <div className="container">
        <p className="section-label">{t('about_label')}</p>

        <div className="about__grid">
          <div ref={colL} className="about__pull reveal">
            <blockquote className="about__quote">
              {t('about_quote')}
            </blockquote>
          </div>

          <div ref={colR} className="about__bio reveal" style={{ transitionDelay: '0.12s' }}>
            <p>{t('about_bio_1')}</p>
            <p>
              {t('about_bio_2')} <em>{t('about_bio_2_em')}</em>.
            </p>

            <div className="about__meta">
              <span className="about__chip font-mono">{t('about_location')}</span>
              <a href={emailHref} className="about__chip about__chip--link font-mono">
                {email}
              </a>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="about__stats reveal">
          {STATS.map(({ value, label }) => (
            <div key={label} className="about__stat">
              <span className="about__stat-value">{value}</span>
              <span className="about__stat-label font-mono">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
