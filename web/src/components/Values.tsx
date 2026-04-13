import { RevealSection } from './RevealSection'
import './Values.css'

const VALUES = [
  {
    title: 'Ethical Power',
    body:
      'Power built on integrity rather than extraction. We believe the most enduring spaces and organizations are the ones where everyone inside them feels their own capacity expand — not diminish. Structures that generate authority through alignment, not control.',
  },
  {
    title: 'Belonging',
    body:
      'Not as a feeling you have to earn or manufacture. As an architectural fact. When a space is built right — energetically, physically, operationally — belonging is simply what it does. People know it the moment they walk in.',
  },
  {
    title: 'Energetic Integrity',
    body:
      'Every structure has an energetic blueprint beneath its physical one. When those two blueprints are aligned, what gets built lasts. When they’re not, no amount of beautiful design or strong leadership can hold it together indefinitely. We build from the energetic blueprint first — always.',
  },
  {
    title: 'Nervous System Safety',
    body:
      'The body knows before the mind does. A space with nervous system safety is one where people breathe fully, think clearly, create freely, and want to stay. We design for that quality of ease — because spaces that feel safe at a cellular level are the ones that become home, and the organizations that hold it are the ones that retain their best people.',
  },
] as const

export function Values() {
  return (
    <RevealSection id="values" className="section">
      <div className="shell values">
        <p className="eyebrow">What we stand for</p>
        <h2 className="display display--lg values__title">
          The Foundation Beneath Everything We Build.
        </h2>
        <p className="body-text values__intro">
          These are not aspirations. They are the non-negotiables that every
          Malladams project is built on — from the first conversation to the
          final detail.
        </p>
        <div className="values__grid">
          {VALUES.map((item) => (
            <article key={item.title} className="value-card">
              <h3 className="value-card__title">{item.title}</h3>
              <p className="body-text value-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
