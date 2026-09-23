import { useEffect, useRef } from 'react'
import { useLocale } from '../hooks/useLocale'
import ShapeLayer from './ShapeLayer'
import type { ShapeDefinition } from '../types'
import './Hero.css'

const SHAPES: ShapeDefinition[] = [
  { depth: 0.12, type: 'circle',   style: { width:420, height:420, border:'1.5px solid var(--ink)', opacity:0.07, top:'-60px', right:'-80px', animation:'s-drift-a 38s ease-in-out alternate infinite' } },
  { depth: 0.28, type: 'circle',   style: { width:80, height:80, background:'var(--accent)', opacity:0.10, top:'38%', left:'-16px', animation:'s-drift-b 24s ease-in-out alternate infinite' } },
  { depth: 0.18, style:            { width:130, height:130, border:'1.5px solid var(--ink)', opacity:0.06, top:'12%', left:'40%', animation:'s-drift-c 31s ease-in-out alternate infinite' } },
  { depth: 0.22, type: 'triangle', style: { width:100, height:88, background:'var(--accent)', opacity:0.08, bottom:'20%', right:'12%', animation:'s-drift-d 27s ease-in-out alternate infinite' } },
  { depth: 0.08, type: 'bar',      style: { width:180, background:'var(--ink-3)', opacity:0.15, bottom:'30%', left:'4%', animation:'s-drift-e 42s ease-in-out alternate infinite' } },
]

export default function Hero() {
  const { t } = useLocale()
  const line1Ref  = useRef<HTMLHeadingElement>(null)
  const line2Ref  = useRef<HTMLHeadingElement>(null)
  const subRef    = useRef<HTMLHRElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els: (HTMLElement | null)[] = [line1Ref.current, line2Ref.current, subRef.current, bottomRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.clipPath = 'inset(0 0 100% 0)'
      el.style.opacity  = '1'
      setTimeout(() => {
        el.style.transition = 'clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
        el.style.clipPath = 'inset(0 0 0% 0)'
      }, 100 + i * 120)
    })
  }, [])

  return (
    <section id="hero" className="hero">
      <ShapeLayer shapes={SHAPES} />
      <div className="container hero__inner">
        <span className="hero__label font-mono">{t('hero_label')}</span>

        <h1 className="hero__headline">
          <div className="hero__line-wrap">
            <span ref={line1Ref} className="hero__name hero__name--1">SALVATORE</span>
          </div>
          <div className="hero__line-wrap">
            <span ref={line2Ref} className="hero__name hero__name--2">VISCUSO</span>
          </div>
        </h1>

        <hr className="hero__rule divider" ref={subRef} />

        <div ref={bottomRef} className="hero__bottom">
          <p className="hero__tagline">
            {t('hero_tagline1')}
          </p>
          <div className="hero__actions">
            <a href="#work" className="hero__work">{t('hero_cta_work')}</a>
            <a href="#contact" className="hero__cta">
              <span>{t('hero_cta')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
