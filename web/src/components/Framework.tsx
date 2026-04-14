import { RevealSection } from './RevealSection'
import './Framework.css'

const LAYERS = [
  {
    n: '01',
    title: 'Land & Location',
    subtitle: 'Before a single decision is made.',
    body:
      'We begin where most people never think to begin: with the energetic quality of the land itself. Not every site can hold every vision. We identify locations and properties that are energetically aligned with the life meant to be built within them. Site selection is not just practical. It is sacred.',
  },
  {
    n: '02',
    title: 'Physical Space',
    subtitle: 'Form, function, and beauty as one.',
    body:
      'We design environments where nothing is arbitrary. Every material, proportion, and threshold is chosen with intention, at the intersection of energetic principles, architectural integrity, and aesthetic beauty. Beauty is not decoration. It is a signal that a space is in right relationship with itself.',
  },
  {
    n: '03',
    title: 'Operating Structures',
    subtitle: 'How humans move through and within the space.',
    body:
      'A beautiful building with a broken internal culture is still a broken structure. We design the invisible architecture too, including how people are hired, how leadership is practiced, and how daily life flows. This is the layer that sustains the life force of everyone inside.',
  },
] as const

export function Framework() {
  return (
    <RevealSection id="framework" className="section section--light">
      <div className="shell framework">
        <p className="eyebrow">Energetic architecture</p>
        <h2 className="display display--lg framework__title">
          Energetic Architecture. Three Layers. One Integrated Vision.
        </h2>
        <p className="body-text framework__intro">
          Most firms touch one layer of a project. Nobody integrates all three.
          This is what makes Malladams Group different, and why what we build
          lasts.
        </p>
        <div className="framework__layers">
          {LAYERS.map((layer) => (
            <article key={layer.n} className="layer-card">
              <span className="layer-card__num">{layer.n}</span>
              <h3 className="layer-card__title">{layer.title}</h3>
              <p className="layer-card__label">{layer.subtitle}</p>
              <p className="body-text layer-card__body">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
