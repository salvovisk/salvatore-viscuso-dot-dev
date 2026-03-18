import { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition, ProjectEntry, TranslationKey } from '../types'
import './Projects.css'

const PROJECT_KEYS: ProjectEntry[] = [
  {
    index: '01',
    name: 'TuiMusement Platform',
    tags: ['React', 'TypeScript', 'Performance'],
    year: '2023',
    descKey:       'proj_01_desc',
    roleKey:       'proj_01_role',
    durationKey:   'proj_01_duration',
    highlightsKey: 'proj_01_highlights',
    learningsKey:  'proj_01_learnings',
    urlKey:        'proj_01_url',
    urlCodeKey:    'proj_01_url_code',
  },
  {
    index: '02',
    name: 'GoVisit',
    tags: ['Next.js 15', 'TypeScript', 'Stream.io', 'Stripe'],
    year: '2026',
    descKey:       'proj_02_desc',
    roleKey:       'proj_02_role',
    durationKey:   'proj_02_duration',
    highlightsKey: 'proj_02_highlights',
    learningsKey:  'proj_02_learnings',
    urlKey:        'proj_02_url',
    urlCodeKey:    'proj_02_url_code',
  },
  {
    index: '03',
    name: 'Design System Core',
    tags: ['React', 'CSS', 'Figma'],
    year: '2024',
    descKey:       'proj_03_desc',
    roleKey:       'proj_03_role',
    durationKey:   'proj_03_duration',
    highlightsKey: 'proj_03_highlights',
    learningsKey:  'proj_03_learnings',
    urlKey:        'proj_03_url',
    urlCodeKey:    'proj_03_url_code',
  },
  {
    index: '04',
    name: 'Portfolio',
    tags: ['React', 'Vite', 'CSS'],
    year: '2025',
    descKey:       'proj_04_desc',
    roleKey:       'proj_04_role',
    durationKey:   'proj_04_duration',
    highlightsKey: 'proj_04_highlights',
    learningsKey:  'proj_04_learnings',
    urlKey:        'proj_04_url',
    urlCodeKey:    'proj_04_url_code',
  },
  {
    index: '05',
    name: 'Blokko',
    tags: ['Next.js', 'TypeScript', 'MUI', 'Prisma', 'Zustand'],
    year: '2026',
    descKey:       'proj_05_desc',
    roleKey:       'proj_05_role',
    durationKey:   'proj_05_duration',
    highlightsKey: 'proj_05_highlights',
    learningsKey:  'proj_05_learnings',
    urlKey:        'proj_05_url',
    urlCodeKey:    'proj_05_url_code',
  },
  {
    index: '06',
    name: '9000ABCD – Simulatore Strategico',
    tags: ['React', 'TypeScript', 'CSS'],
    year: '2025',
    descKey:       'proj_06_desc',
    roleKey:       'proj_06_role',
    durationKey:   'proj_06_duration',
    highlightsKey: 'proj_06_highlights',
    learningsKey:  'proj_06_learnings',
    urlKey:        'proj_06_url',
    urlCodeKey:    'proj_06_url_code',
  },
]

const SHAPES: ShapeDefinition[] = [
  { depth: 0.14, type: 'triangle', style: { width:200, height:174, border:'1.5px solid var(--ink)', opacity:0.05, top:'-30px', left:'-20px', animation:'s-drift-b 44s ease-in-out alternate infinite' } },
  { depth: 0.10, type: 'circle',   style: { width:240, height:240, border:'10px solid var(--accent)', opacity:0.04, bottom:'-60px', right:'-40px', animation:'s-drift-f 32s ease-in-out alternate infinite' } },
  { depth: 0.26, style:            { width:56, height:56, background:'var(--accent)', opacity:0.07, top:'50%', right:'5%', animation:'s-drift-c 23s ease-in-out alternate infinite' } },
  { depth: 0.32, type: 'circle',   style: { width:12, height:12, background:'var(--ink)', opacity:0.12, top:'15%', right:'30%', animation:'s-drift-d 20s ease-in-out alternate infinite' } },
]

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 9.5l7-7M9.5 2.5H4M9.5 2.5v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

interface ProjectItemProps {
  project: ProjectEntry
  delay: number
  isOpen: boolean
  onToggle: () => void
}

function ProjectItem({ project, delay, isOpen, onToggle }: ProjectItemProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { t } = useLocale()
  useReveal(ref, { threshold: 0.08 })

  const highlights = t(project.highlightsKey)
  const url        = String(t(project.urlKey))
  const urlCode    = String(t(project.urlCodeKey))

  // Helper to get a string translation (non-array keys)
  const ts = (key: TranslationKey) => String(t(key))

  return (
    <div className={`project-item${isOpen ? ' is-open' : ''}`}>

      {/* ── Trigger row ── */}
      <button
        ref={ref}
        className="project-row reveal"
        style={{ transitionDelay: `${delay}s` }}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="project-row__index">{project.index}</span>
        <span className="project-row__name">{project.name}</span>
        <span className="project-row__tags" aria-hidden="true">
          {project.tags.map(tag => (
            <span key={tag} className="project-row__tag font-mono">{tag}</span>
          ))}
        </span>
        <span className="project-row__year font-mono">{project.year}</span>
        <span className="project-row__chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* ── Accordion panel ── */}
      <div className="project-panel">
        <div className="project-panel__inner">
          <div className="project-panel__body">

            {/* Left column */}
            <div className="project-panel__left">
              <p className="project-panel__desc">{ts(project.descKey)}</p>

              <div className="project-panel__highlights">
                <span className="project-panel__label font-mono">{ts('projects_header_stack')} & highlights</span>
                <ul>
                  {Array.isArray(highlights) && highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="project-panel__learnings">
                <span className="project-panel__label font-mono">{ts('proj_label_learnings')}</span>
                <p>{ts(project.learningsKey)}</p>
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="project-panel__sidebar">
              <dl className="project-panel__meta-list">
                <div className="project-panel__meta-item">
                  <dt className="project-panel__label font-mono">{ts('proj_label_role')}</dt>
                  <dd className="project-panel__meta-value">{ts(project.roleKey)}</dd>
                </div>
                <div className="project-panel__meta-item">
                  <dt className="project-panel__label font-mono">{ts('proj_label_duration')}</dt>
                  <dd className="project-panel__meta-value">{ts(project.durationKey)}</dd>
                </div>
                <div className="project-panel__meta-item">
                  <dt className="project-panel__label font-mono">{ts('proj_label_stack')}</dt>
                  <dd className="project-panel__tags-list">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-row__tag font-mono">{tag}</span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="project-panel__links">
                {url && url !== '#' && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="project-panel__cta">
                    <span>{ts('proj_label_visit')}</span>
                    <ExternalLinkIcon />
                  </a>
                )}
                {urlCode !== '' && (
                  <a href={urlCode} target="_blank" rel="noopener noreferrer" className="project-panel__cta project-panel__cta--ghost">
                    <span>{ts('proj_label_code')}</span>
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(idx: number) {
    setOpenIndex(prev => prev === idx ? null : idx)
  }

  return (
    <section id="projects" className="projects">
      <ShapeLayer shapes={SHAPES} />
      <div className="container">
        <p className="section-label">{t('projects_label')}</p>

        <div className="projects__list">
          <div className="projects__header">
            <span className="projects__header-cell projects__header--index font-mono">{t('projects_header_index')}</span>
            <span className="projects__header-cell font-mono">{t('projects_header_name')}</span>
            <span className="projects__header-cell projects__header--tags font-mono">{t('projects_header_stack')}</span>
            <span className="projects__header-cell projects__header--year font-mono">{t('projects_header_year')}</span>
          </div>
          <hr className="divider" />
          {PROJECT_KEYS.map((p, i) => (
            <div key={p.index}>
              <ProjectItem
                project={p}
                delay={i * 0.08}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
              <hr className="divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
