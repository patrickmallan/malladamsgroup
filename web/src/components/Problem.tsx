import { RevealSection } from './RevealSection'
import './Problem.css'

export function Problem() {
  return (
    <RevealSection id="problem" className="section section--forest">
      <div className="shell problem">
        <p className="eyebrow">The missing link</p>
        <h2 className="display display--lg problem__title">
          Something is missing from the blueprint.
        </h2>
        <div className="problem__grid">
          <div>
            <p className="body-text">
              Nearly every structure built in the modern world — every building,
              every organization, every system — was designed without one
              essential element: energetic integrity.
            </p>
            <p className="body-text">
              The result is spaces that exhaust rather than restore. Organizations
              that burn through their people. Legacies that don&apos;t hold.
            </p>
            <p className="body-text">
              This is not a design failure. It is not a leadership failure. It is
              an architectural failure at the most fundamental level — the
              energetic foundation was never laid.
            </p>
            <p className="body-text">We are here to change that.</p>
          </div>
          <aside className="problem__aside">
            <p className="body-text problem__audience">
              They are awakening. They understand that the current structures —
              economic, architectural, organizational, social — are failing. Not
              because people didn&apos;t try, but because energy was never part of
              the blueprint. They want to create something lasting. A legacy.
              Something conscious and alive — filled with love, connection,
              belonging, and longevity. They are not looking for a service. They
              are looking for confirmation that someone else sees what they see —
              and has built a way through it.
            </p>
            <p className="problem__confirmation">
              Malladams Group is that confirmation.
            </p>
          </aside>
        </div>
        <blockquote className="pull-quote">
          &ldquo;Energy is not an add-on. It is the missing link between
          structures that survive and structures that last.&rdquo;
        </blockquote>
      </div>
    </RevealSection>
  )
}
