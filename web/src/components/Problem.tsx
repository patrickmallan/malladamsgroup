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
        <div className="problem__body">
          <p className="body-text">
            You’ve felt it. In the office that drains you by noon. In the
            beautifully designed home that never quite feels like yours. In the
            organization that burns through brilliant people and can’t figure out
            why. In the community space that had every intention of belonging but
            somehow never held it.
          </p>
          <p className="body-text">
            This is not bad luck. It is not poor design. It is an architectural
            failure at the most fundamental level — the energetic foundation was
            never laid.
          </p>
          <p className="body-text">
            Nearly every structure built in the modern world was designed without
            energetic integrity at its core. The result is spaces that exhaust
            rather than restore. Organizations that consume rather than sustain.
            Legacies that look solid from the outside and quietly collapse from
            within.
          </p>
          <p className="body-text">
            We are here to change that. And if you’re reading this, you already
            know it’s time.
          </p>
        </div>
        <blockquote className="pull-quote">
          &ldquo;Energy is not an add-on. It is the missing link between
          structures that survive and structures that last.&rdquo;
        </blockquote>
      </div>
    </RevealSection>
  )
}
