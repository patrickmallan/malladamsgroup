import { useEffect, useState } from 'react'
import './Header.css'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/energetic-architecture', label: 'Energetic Architecture' },
  { href: '/work-with-us', label: 'Work With Us' },
  { href: '/our-vision', label: 'Our Vision' },
  { href: '/about', label: 'About' },
  { href: '/connect', label: 'Connect' },
]

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
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="site-header__inner shell">
      <a href="/" className="site-header__brand">Malladams Group</a>
      <button type="button" className="site-header__toggle" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(value => !value)}>
        <span className={`site-header__burger ${open ? 'is-open' : ''}`} />
      </button>
      <nav id="site-nav" className={`site-header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
        <ul className="site-header__list">{nav.map(item => <li key={item.href}><a href={item.href} className="site-header__link" aria-current={window.location.pathname === item.href ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</a></li>)}</ul>
      </nav>
    </div>
  </header>
}
