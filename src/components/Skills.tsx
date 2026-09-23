import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition } from '../types'
import './Skills.css'

// Only what the project ledger and the experience entries actually back. Vue sits in the
// secondary list beside Nuxt; Flutter came out entirely — nothing on this site uses it, and
// an unbacked claim beside a verifiable one costs more than it adds.
const PRIMARY = ['React', 'TypeScript', 'Next.js', 'React Native']

const SECONDARY = [
  { name: 'Vue',             tag: 'framework' },
  { name: 'Nuxt',            tag: 'framework' },
  { name: 'CSS / Sass',      tag: 'styling'   },
  { name: 'Tailwind',        tag: 'styling'   },
  { name: 'Prisma',          tag: 'orm'       },
  { name: 'Web Performance', tag: 'craft'     },
  { name: 'Accessibility',   tag: 'craft'     },
  { name: 'Design Systems',  tag: 'craft'     },
  { name: 'Figma',           tag: 'design'    },
]

const SHAPES: ShapeDefinition[] = [
  { depth: 0.22, type: 'triangle', style: { width:160, height:140, background:'var(--accent)', opacity:0.07, top:'-20px', right:'8%', animation:'s-drift-b 30s ease-in-out alternate infinite' } },
  { depth: 0.12, type: 'circle',   style: { width:200, height:200, border:'1.5px solid var(--ink)', opacity:0.06, bottom:'-60px', left:'2%', animation:'s-drift-a 34s ease-in-out alternate infinite' } },
  { depth: 0.25, style:            { width:48, height:48, background:'var(--ink)', opacity:0.05, top:'40%', right:'18%', animation:'s-drift-c 25s ease-in-out alternate infinite' } },
]

export default function Skills() {
  const { t } = useLocale()
  const wrapRef = useRef<HTMLDivElement>(null)
  useReveal(wrapRef)

  return (
    <section id="skills" className="skills">
      <ShapeLayer shapes={SHAPES} />
      <div className="container">
        <p className="section-label">{t('skills_label')}</p>
        <div ref={wrapRef} className="skills__layout reveal">

          {/* Left — primary identity stack */}
          <div className="skills__primary">
            {PRIMARY.map(name => (
              <div key={name} className="skills__primary-item">
                <span className="skills__primary-name">{name}</span>
              </div>
            ))}
          </div>

          {/* Vertical divider */}
          <div className="skills__divider" aria-hidden="true" />

          {/* Right — secondary toolkit */}
          <div className="skills__secondary">
            <p className="skills__secondary-label">{t('skills_also')}</p>
            <div className="skills__secondary-grid">
              {SECONDARY.map(({ name, tag }) => (
                <div key={name} className="skills__secondary-item">
                  <span className="skills__secondary-name">{name}</span>
                  <span className="skills__secondary-tag">{tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
