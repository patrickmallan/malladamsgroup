import { useEffect, useState } from 'react'
import './Header.css'

const NAV = [
  { id: 'problem', label: 'The Problem' },
  { id: 'framework', label: 'Framework' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'first-project', label: 'First Project' },
  { id: 'founders', label: 'Founders' },
  { id: 'contact', label: 'Contact' },
] as const

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
    >
      <div className="site-header__inner shell">
        <a
          href="#hero"
          className="site-header__brand"
          onClick={(e) => {
            e.preventDefault()
            go('hero')
          }}
        >
          Malladams Group
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? 'Close menu' : 'Open menu'}
          </span>
          <span className={`site-header__burger ${open ? 'is-open' : ''}`} />
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-header__list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="site-header__link"
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
