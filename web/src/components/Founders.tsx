import { RevealSection } from './RevealSection'
import './Founders.css'

export function Founders() {
  return (
    <RevealSection id="founders" className="section section--light">
      <div className="shell founders">
        <p className="eyebrow">People</p>
        <h2 className="display display--lg founders__title">
          The Ministry Behind the Mission
        </h2>
        <p className="body-text founders__intro">
          Malladams Group was founded by Annissa Adams and Patrick Mallan — two
          people who came together with a shared conviction that the world is
          ready for structures built differently.
        </p>

        <div className="founders__content">
          <figure className="founders__figure">
            <img
              className="founders__image"
              src="/Malladams%20Family.webp?v=2"
              width={1600}
              height={2133}
              loading="lazy"
              decoding="async"
              alt="Annissa Adams and Patrick Mallan with their children. The Malladams Group founders."
            />
          </figure>

          <div className="founders__narrative">
            <p className="body-text">
              Annissa and Patrick are builders — of spaces, organizations, and the
              kind of environments where people remember what it feels like to
              truly belong.
            </p>
            <p className="body-text">
              Annissa is a visionary and systems thinker whose greatest gift is
              seeing what others miss. Beneath any space, organization, or
              situation, she reads the invisible architecture — the patterns
              holding something together, and the ones quietly pulling it apart.
              She has spent decades translating that perception into frameworks
              that are both deeply intuitive and rigorously practical. She does not
              wait for permission to see clearly. Everything she builds is
              designed to give others that same quality of arrival.
            </p>
            <p className="body-text">
              Patrick brings the rare capacity to hold complexity without losing his
              footing. As a sound designer and professional DJ, he spent years
              learning to read rooms at the frequency level — understanding what a
              space needs to hold energy, sustain a moment, and bring people fully
              into themselves. He builds systems that remain coherent under
              pressure, and understands that what lasts is determined by the
              quality of the decisions beneath it.
            </p>
            <p className="body-text">
              What makes them different is where they learned everything. Not in
              boardrooms or design schools — in family. Between them they are
              raising children, navigating the full complexity of modern family
              life, and doing it with the same intentionality they bring to every
              structure they touch. Family is where you first encounter every
              leadership challenge, every nervous system test, every real question
              of belonging. They learned it at home first. Now they build it into
              everything.
            </p>
            <p className="body-text">
              Together: the vision and the execution. The pattern and the form. Two
              people who have chosen, in every dimension of their lives, to build
              things that last.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
