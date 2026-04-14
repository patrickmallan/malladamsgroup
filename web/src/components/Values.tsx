import { RevealSection } from './RevealSection'
import './Values.css'

const VALUES = [
  {
    title: 'Ethical Power',
    body:
      'Power built on integrity, not extraction. The most enduring spaces and organizations are the ones where everyone inside feels their own capacity expand — not diminish.',
  },
  {
    title: 'Belonging',
    body:
      'Not something you earn. An architectural fact. When a space is built right, belonging is not manufactured. It’s simply what the space does.',
  },
  {
    title: 'Energetic Integrity',
    body:
      'Every structure has an energetic blueprint beneath its physical one. When those two are aligned, what gets built lasts. We build from the energetic blueprint first. Always.',
  },
  {
    title: 'Nervous System Safety',
    body:
      'The body knows before the mind does. We design for that intelligence — spaces where people breathe fully, think clearly, and want to stay.',
  },
] as const

export function Values() {
  return (
    <RevealSection id="values" className="section">
      <div className="shell values">
        <p className="eyebrow">What we stand for</p>
        <h2 className="display display--lg values__title">
          The foundation beneath everything we build.
        </h2>
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
