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
          people who have spent their lives at the intersection of energy, beauty,
          and structure, and who came together to build something the world is
          ready for.
        </p>

        <div className="founders__grid">
          <article className="founder-card">
            <div className="founder-card__photo founder-card__photo--abstract" />
            <div className="founder-card__text">
              <h3 className="founder-card__name">Annissa Adams</h3>
              <p className="founder-card__role">Co-Founder</p>
              <p className="body-text">
                Annissa is a seer, a designer of energetic containers, and the
                philosophical architect of the Malladams framework. Born in London
                and rooted now in the mountains of British Columbia, she has spent
                decades developing a sophisticated understanding of how energy
                moves through space, systems, and people — drawing on astrology,
                Human Design, sacred feminine traditions, and a lifetime of direct
                intuitive perception.
              </p>
              <p className="body-text">
                Her vision for Malladams Group began not in a boardroom but in a
                moment of knowing: a vision of blue homes near water and mountains
                that she later recognized as the land where the first project would
                be built. She is a woman who does not wait for permission to see
                clearly — and who has dedicated her work to building spaces that give
                others that same quality of belonging.
              </p>
              <p className="body-text">
                She brings to this work an uncompromising commitment to beauty,
                truth, and structures that serve life rather than consume it.
              </p>
            </div>
          </article>

          <article className="founder-card">
            <div className="founder-card__photo founder-card__photo--abstract" />
            <div className="founder-card__text">
              <h3 className="founder-card__name">Patrick Mallan</h3>
              <p className="founder-card__role">Co-Founder</p>
              <p className="body-text">
                Patrick holds the work of Malladams Group in disciplined execution:
                systems that remain coherent under pressure, technology chosen for
                clarity rather than novelty, and a design sensitivity that honors
                how a place is felt as much as how it is assembled. His path has
                moved between building and digital craft; he treats each project as
                a sequence of careful decisions—material, protocol, and
                tool—intended to carry the same integrity across years.
              </p>
              <p className="body-text">
                He understands Malladams&apos; vision as both pragmatic and
                far-reaching: structures that last because they are honest in their
                foundations, their spaces, and the cultures that sustain them.
                Alongside Annissa, he translates intention into outcomes that remain
                humane, coherent, and built for the long arc.
              </p>
              <p className="body-text">
                He is drawn to a future where technology quietly serves life and
                belonging—reducing friction without flattening soul—and where what
                is built can be handed forward with care.
              </p>
            </div>
          </article>
        </div>
      </div>
    </RevealSection>
  )
}
