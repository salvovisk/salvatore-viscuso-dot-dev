import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition, ExperienceEntry } from '../types'
import './Experience.css'

const SHAPES: ShapeDefinition[] = [
  { depth: 0.12, type: 'circle', style: { width:260, height:260, border:'1.5px solid var(--ink)', opacity:0.06, top:'-40px', right:'-40px', animation:'s-drift-a 40s ease-in-out alternate infinite' } },
  { depth: 0.30, type: 'circle', style: { width:14, height:14, background:'var(--accent)', opacity:0.22, top:'35%', left:'10%', animation:'s-drift-d 18s ease-in-out alternate infinite' } },
  { depth: 0.35, type: 'circle', style: { width:8, height:8, background:'var(--accent)', opacity:0.18, top:'38%', left:'12%', animation:'s-drift-d 22s ease-in-out alternate infinite 3s' } },
  { depth: 0.18, style:          { width:90, height:90, border:'1.5px solid var(--ink)', opacity:0.07, bottom:'8%', right:'10%', animation:'s-drift-c 29s ease-in-out alternate infinite' } },
  { depth: 0.08, type: 'bar',    style: { width:120, background:'var(--ink-3)', opacity:0.13, bottom:'22%', left:'3%', animation:'s-drift-e 37s ease-in-out alternate infinite' } },
]

interface EntryProps {
  entry: ExperienceEntry
  delay: number
}

function Entry({ entry, delay }: EntryProps) {
  const ref = useRef<HTMLDivElement>(null)
  useReveal(ref, { threshold: 0.1 })

  // Extract the year from the date string for the watermark
  const year = entry.date.match(/\d{4}/)?.[0] ?? ''

  return (
    <div ref={ref} className="exp__entry reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="exp__header">
        <span className="exp__date">{entry.date}</span>
        <span className="exp__year-mark" aria-hidden="true">{year}</span>
      </div>
      <h2 className="exp__company">{entry.company}</h2>
      <p className="exp__role">{entry.role}</p>
      <ul className="exp__bullets">
        {entry.bullets.map(b => <li key={b}>{b}</li>)}
      </ul>
      <hr className="divider exp__divider" />
    </div>
  )
}

export default function Experience() {
  const { t } = useLocale()

  const ENTRIES: ExperienceEntry[] = [
    {
      date: String(t('exp_tuimusement_date')),
      company: 'TuiMusement',
      role: String(t('exp_tuimusement_role')),
      bullets: [
        String(t('exp_tuimusement_b1')),
        String(t('exp_tuimusement_b2')),
        String(t('exp_tuimusement_b3')),
      ],
    },
    {
      date: String(t('exp_9000_date')),
      company: '9000ABCD',
      role: String(t('exp_9000_role')),
      bullets: [
        String(t('exp_9000_b1')),
        String(t('exp_9000_b2')),
      ],
    },
    {
      date: String(t('exp_govisit_date')),
      company: 'GoVisit Web',
      role: String(t('exp_govisit_role')),
      bullets: [
        String(t('exp_govisit_b1')),
        String(t('exp_govisit_b2')),
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <ShapeLayer shapes={SHAPES} />
      <div className="container">
        <div className="experience__layout">
          <div className="experience__sidebar">
            <p className="section-label experience__sticky-label">{t('experience_label')}</p>
          </div>
          <div className="experience__entries">
            {ENTRIES.map((entry, i) => (
              <Entry key={entry.company} entry={entry} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
