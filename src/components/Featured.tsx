import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import ShapeLayer from './ShapeLayer'
import ProjectJourney, { Chrome } from './ProjectJourney'
import type { ShapeDefinition, JourneyFrame, JourneyShot, TranslationKey } from '../types'
import './Featured.css'

/**
 * 9000ABCD ships on the web and on the phone, so the case carries a journey rather than
 * a screenshot: eight frames in the order a candidate meets them, web and app interleaved.
 * Filenames follow the capture list; a frame whose file is missing renders empty, on
 * purpose, so the layout can be finished before the screenshots are taken.
 */
const JOURNEY_9000: JourneyFrame[] = [
  {
    index: '01',
    titleKey: 'j06_01_title', captionKey: 'j06_01_cap', noteKey: 'j06_01_note',
    shots: [{ src: '/journey/web-01-hero.webp', w: 1070, h: 604, platform: 'web', route: '/' }],
  },
  {
    index: '02',
    titleKey: 'j06_02_title', captionKey: 'j06_02_cap', noteKey: 'j06_02_note',
    shots: [{ src: '/journey/web-03-concorsi.webp', w: 1070, h: 669, platform: 'web', route: '/concorsi' }],
  },
  {
    index: '03',
    titleKey: 'j06_03_title', captionKey: 'j06_03_cap', noteKey: 'j06_03_note',
    shots: [{ src: '/journey/web-04-signin.webp', w: 1070, h: 669, platform: 'web', route: '/signin' }],
  },
  {
    // The one row where two shots share the grid: the same account, the same hour, two bodies.
    index: '04',
    titleKey: 'j06_04_title', captionKey: 'j06_04_cap', noteKey: 'j06_04_note',
    shots: [
      { src: '/journey/web-05-dashboard.webp', w: 806, h: 504, platform: 'web', route: '/dashboard' },
      { src: '/journey/app-03-dashboard.webp', w: 336, h: 730, platform: 'app', route: '(tabs)/dashboard' },
    ],
  },
  {
    index: '05',
    titleKey: 'j06_05_title', captionKey: 'j06_05_cap',
    shots: [{ src: '/journey/app-02-studio.webp', w: 336, h: 730, platform: 'app', route: '(tabs)/studio' }],
  },
  {
    index: '06',
    titleKey: 'j06_06_title', captionKey: 'j06_06_cap', noteKey: 'j06_06_note',
    shots: [{ src: '/journey/app-05-quiz.webp', w: 336, h: 730, platform: 'app', route: '(app)/simulatore-run' }],
  },
  {
    index: '07',
    titleKey: 'j06_07_title', captionKey: 'j06_07_cap',
    shots: [{ src: '/journey/app-04-simulatore.webp', w: 336, h: 730, platform: 'app', route: '(tabs)/simulatore' }],
  },
  {
    index: '08',
    titleKey: 'j06_08_title', captionKey: 'j06_08_cap', noteKey: 'j06_08_note',
    shots: [{ src: '/journey/web-09-criticals.webp', w: 1070, h: 669, platform: 'web', route: '/criticals' }],
  },
]

/** The stage is frame 04: the one moment where web and phone sit side by side. */
const STAGE = JOURNEY_9000[3]

const STACK = ['Next.js 14', 'Expo', 'TypeScript', 'Zustand']

const SHAPES: ShapeDefinition[] = [
  { depth: 0.12, type: 'circle',   style: { width:300, height:300, border:'1.5px solid var(--ink)', opacity:0.05, top:'-90px', left:'-110px', animation:'s-drift-a 40s ease-in-out alternate infinite' } },
  { depth: 0.24, type: 'triangle', style: { width:84, height:74, background:'var(--accent)', opacity:0.07, top:'3%', right:'4%', animation:'s-drift-d 26s ease-in-out alternate infinite' } },
]

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Featured() {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const headRef  = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLElement>(null)
  const proofRef = useRef<HTMLUListElement>(null)

  useReveal(headRef)
  useReveal(stageRef, { threshold: 0.08 })
  useReveal(proofRef)

  const ts = (key: TranslationKey) => String(t(key))
  const proof      = t('featured_proof')
  const highlights = t('proj_06_highlights')
  const shotAlt = (shot: JourneyShot) =>
    `${ts(STAGE.titleKey)} — ${ts(shot.platform === 'web' ? 'proj_journey_alt_web' : 'proj_journey_alt_app')}`

  return (
    <section id="work" className="featured">
      <ShapeLayer shapes={SHAPES} />
      <div className="container">
        <p className="section-label">{t('featured_label')}</p>

        <div ref={headRef} className="featured__head reveal">
          <h2 className="featured__title">
            <span className="featured__name">9000ABCD</span>
            <span className="featured__sub">Simulatore Strategico</span>
          </h2>

          <div className="featured__intro">
            <p className="featured__lede">{t('featured_lede')}</p>
            <dl className="featured__meta">
              <div>
                <dt className="font-mono">{t('proj_label_role')}</dt>
                <dd>{t('proj_06_role')}</dd>
              </div>
              <div>
                <dt className="font-mono">{t('proj_label_duration')}</dt>
                <dd>{t('proj_06_duration')}</dd>
              </div>
              <div>
                <dt className="font-mono">{t('proj_label_stack')}</dt>
                <dd className="featured__tags">
                  {STACK.map(tag => (
                    <span key={tag} className="featured__tag font-mono">{tag}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Near-black plate in both themes, like the journey bezels: the product's own
            palette is quoted inside it and never has to compete with the page accent. */}
        <figure ref={stageRef} className="featured__stage reveal">
          <div className="featured__plate">
            {STAGE.shots.map(shot => (
              <Chrome key={shot.src} shot={shot} alt={shotAlt(shot)} pending={ts('proj_journey_pending')} />
            ))}
          </div>
          <figcaption className="featured__caption">
            <span className="featured__caption-title font-display">{ts(STAGE.titleKey)}</span>
            <span className="featured__caption-text">{ts(STAGE.captionKey)}</span>
          </figcaption>
        </figure>

        <ul ref={proofRef} className="featured__proof reveal">
          {Array.isArray(proof) && proof.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <button
          type="button"
          className={`featured__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="featured-case"
          onClick={() => setOpen(o => !o)}
        >
          <span>{open ? t('featured_more_close') : t('featured_more_open')}</span>
          <Chevron />
        </button>

        {/* `inert` while closed: the panel is only visually collapsed, so without it a
            keyboard user would tab into an invisible case study. */}
        <div id="featured-case" className={`featured__case${open ? ' is-open' : ''}`} inert={!open}>
          <div className="featured__case-inner">
            <div className="featured__case-body">
              <p className="featured__case-desc">{t('proj_06_desc')}</p>
              <div>
                <span className="featured__case-label font-mono">{ts('projects_header_stack')} & highlights</span>
                <ul className="featured__case-list">
                  {Array.isArray(highlights) && highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="featured__case-label font-mono">{t('proj_label_learnings')}</span>
                <p className="featured__case-learn">{t('proj_06_learnings')}</p>
              </div>
            </div>
            <ProjectJourney frames={JOURNEY_9000} />
          </div>
        </div>
      </div>
    </section>
  )
}
