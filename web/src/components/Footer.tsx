import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__brand">Malladams Group</p>
        <p className="site-footer__meta">© {year} Malladams Group.</p>
      </div>
    </footer>
  )
}
