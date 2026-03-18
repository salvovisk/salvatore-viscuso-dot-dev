import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import type { Theme } from './types'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('sv-theme') as Theme) || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('sv-theme', theme)

    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (link) link.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
  }, [theme])

  // Global mouse parallax for all section shapes
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    let raf: number
    let tx = 0, ty = 0
    let cx = 0, cy = 0

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX / window.innerWidth  - 0.5
      ty = e.clientY / window.innerHeight - 0.5
    }

    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06

      document.querySelectorAll<HTMLElement>('.s-shape[data-depth]').forEach(el => {
        const depth = parseFloat(el.dataset.depth ?? '0')
        el.style.setProperty('--px', `${cx * depth * 80}px`)
        el.style.setProperty('--py', `${cy * depth * 60}px`)
      })

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  function toggleTheme() {
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
