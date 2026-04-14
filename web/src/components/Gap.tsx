import { RevealSection } from './RevealSection'
import './Gap.css'

export function Gap() {
  return (
    <RevealSection id="gap" className="section section--light section--tight-top">
      <div className="shell gap">
        <div className="gap__body">
          <p className="body-text">
            The real estate industry will find you the perfect property.
          </p>
          <p className="body-text">Designers will make it beautiful.</p>
          <p className="body-text">
            Organizational consultants will help you build your team.
          </p>
          <p className="body-text">
            But nobody is asking the question that determines whether any of it
            actually works:
          </p>
          <p className="body-text gap__question">
            <strong>What is the energetic foundation this is built on?</strong>
          </p>
          <p className="body-text">
            That&apos;s the missing layer. It&apos;s why beautiful spaces feel
            wrong. Why strong teams burn out. Why legacies that should last,
            don&apos;t.
          </p>
          <p className="body-text">
            It&apos;s the one question we start with. Every time.
          </p>
        </div>
      </div>
    </RevealSection>
  )
}
