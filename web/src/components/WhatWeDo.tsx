import { RevealSection } from './RevealSection'
import './WhatWeDo.css'

export function WhatWeDo() {
  return (
    <RevealSection id="what-we-do" className="section">
      <div className="shell what-we-do">
        <p className="eyebrow">What we do</p>
        <h2 className="display display--lg what-we-do__title">
          We build. And we guide others to build.
        </h2>
        <div className="what-we-do__grid">
          <article className="what-card">
            <h3 className="what-card__heading">Development</h3>
            <p className="body-text">
              We acquire, design, and activate properties using our energetic
              architecture framework. We don’t just advise on this work — we do
              it ourselves. Every property we develop is a living proof of
              concept.
            </p>
          </article>
          <article className="what-card">
            <h3 className="what-card__heading">Consultancy</h3>
            <p className="body-text">
              We bring the same three-layer framework to developers,
              entrepreneurs, and organizations ready to build differently. If you
              are creating something meant to last — a home, a business, a
              community space — we want to be part of it from the beginning.
            </p>
          </article>
        </div>
      </div>
    </RevealSection>
  )
}
