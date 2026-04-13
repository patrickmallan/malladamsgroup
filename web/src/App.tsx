import { Contact } from './components/Contact'
import { FirstProject } from './components/FirstProject'
import { Footer } from './components/Footer'
import { Founders } from './components/Founders'
import { Framework } from './components/Framework'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Values } from './components/Values'
import { WhatWeDo } from './components/WhatWeDo'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <div className="section-divider" aria-hidden />
        <Framework />
        <div className="section-divider" aria-hidden />
        <Values />
        <div className="section-divider" aria-hidden />
        <WhatWeDo />
        <div className="section-divider" aria-hidden />
        <FirstProject />
        <div className="section-divider" aria-hidden />
        <Founders />
        <div className="section-divider" aria-hidden />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
