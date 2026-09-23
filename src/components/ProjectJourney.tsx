import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLocale } from '../hooks/useLocale'
import type { JourneyFrame, JourneyShot, TranslationKey } from '../types'
import './ProjectJourney.css'

/**
 * The product journey, set as a ledger rather than a gallery: numbered rows, hairline
 * dividers, the route in mono where a caption's least interesting half would go.
 *
 * Two rules from the art direction are load-bearing here:
 *  1. Screenshots are *contained*. Each one sits in a near-black frame, so the product's
 *     acid yellow reads as a quotation and never competes with the page's burnt orange.
 *  2. Consequently the accent does not appear anywhere inside this block — indices and
 *     the annotation bar are ink, not accent. One accent visible at a time.
 *
 * Shots are also inert: the page's decorative geometry parallaxes, product images do not.
 * A screenshot that drifts reads as an advertisement.
 */

export function Chrome({ shot, alt, pending }: { shot: JourneyShot; alt: string; pending: string }) {
  // A file that has not been captured yet must not show a broken image — the frame stays,
  // empty, with its route. The journey is designed before the screenshots exist.
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`journey-shot journey-shot--${shot.platform}`}>
      <div className="journey-shot__frame">
        {shot.platform === 'web' && (
          <div className="journey-shot__bar" aria-hidden="true">
            <span /><span /><span />
          </div>
        )}
        {failed ? (
          <div className="journey-shot__pending">
            <span className="font-mono">{pending}</span>
          </div>
        ) : (
          <img
            src={shot.src}
            alt={alt}
            width={shot.w}
            height={shot.h}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption className="journey-shot__route font-mono">{shot.route}</figcaption>
    </figure>
  )
}

function Frame({ frame, delay }: { frame: JourneyFrame; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLocale()
  useReveal(ref, { threshold: 0.08 })

  const ts = (key: TranslationKey) => String(t(key))

  return (
    <div
      ref={ref}
      className="journey-frame reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="journey-frame__head">
        <span className="journey-frame__index font-mono">{frame.index}</span>
        <h3 className="journey-frame__title font-display">{ts(frame.titleKey)}</h3>
      </div>

      <div
        className={`journey-frame__shots${frame.shots.length > 1 ? ' is-pair' : ''}`}
      >
        {frame.shots.map(shot => (
          <Chrome
            key={shot.src}
            shot={shot}
            alt={`${ts(frame.titleKey)} — ${ts(shot.platform === 'web' ? 'proj_journey_alt_web' : 'proj_journey_alt_app')}`}
            pending={ts('proj_journey_pending')}
          />
        ))}
      </div>

      <div className="journey-frame__text">
        <p className="journey-frame__caption">{ts(frame.captionKey)}</p>
        {frame.noteKey && (
          <p className="journey-frame__note">{ts(frame.noteKey)}</p>
        )}
      </div>
    </div>
  )
}

export default function ProjectJourney({ frames }: { frames: JourneyFrame[] }) {
  const { t } = useLocale()

  return (
    <section className="journey" aria-label={String(t('proj_journey_label'))}>
      <header className="journey__head">
        <span className="journey__label font-mono">{t('proj_journey_label')}</span>
        <p className="journey__intro">{t('proj_journey_intro')}</p>
      </header>

      <div className="journey__list">
        {frames.map((f, i) => (
          <Frame key={f.index} frame={f} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
