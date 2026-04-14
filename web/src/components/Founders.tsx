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
          people who came together not just in partnership, but in a shared
          conviction that the world is ready for structures built differently.
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
              alt="Annissa Adams and Patrick Mallan with their children. The Malladams Group founders at home — the lived foundation behind their work building structures that hold."
            />
          </figure>

          <div className="founders__narrative">
            <p className="body-text">
            Annissa and Patrick are, at their core, builders. Not just of spaces
            and organizations — but of the kind of environment where people
            remember what it feels like to belong somewhere completely.
            </p>
            <p className="body-text">
            Annissa is a visionary and systems thinker whose greatest gift is
            seeing what others miss. She doesn&apos;t just observe a space, an
            organization, or a situation — she reads the architecture beneath it.
            The patterns. The invisible structures that are either holding
            something together or quietly pulling it apart. She has spent decades
            developing a sophisticated understanding of how energy moves through
            spaces, systems, and people, and translating that perception into
            frameworks that are both deeply intuitive and rigorously practical.
            Her vision for Malladams Group didn&apos;t begin with a business plan.
            It began with a knowing — a clear perception, years ahead of its time,
            of exactly what conscious, energetically grounded structures could
            make possible for people who have spent their lives feeling slightly
            out of place in the spaces built for them. She is a woman who does not
            wait for permission to see clearly. And everything she builds is
            designed to give others that same quality of arrival.
            </p>
            <p className="body-text">
            Patrick is the man who makes the vision real — and has spent his life
            developing the rare capacity to hold complexity without losing his
            footing. As a sound designer and professional DJ, he spent years doing
            something most people never learn: reading a room at the frequency
            level. Understanding not just what people want, but what a space needs
            to hold the moment, sustain the energy, and bring people fully into
            themselves. That embodied intelligence — the ability to feel what a
            space is doing and know exactly what it needs — is the same
            intelligence he brings to every Malladams project. He builds systems
            that remain coherent under pressure. He chooses technology for clarity,
            not novelty. He understands that the quality of what lasts is
            determined by the quality of the decisions beneath it.
            </p>
            <p className="body-text">
            What makes them genuinely different — as partners and as founders — is
            where they learned the fundamentals of everything they now build
            professionally. Not in boardrooms or design schools. In family.
            Between them they are raising children, navigating the full complexity
            of modern family life, and doing it with the same intentionality they
            bring to every structure they touch. Family, they will tell you, is
            where you first encounter every leadership challenge, every nervous
            system test, every question of belonging and safety and what it actually
            takes to build something that holds. The emotional intelligence, the
            capacity to repair, the discipline of showing up consistently even when
            it&apos;s hard — these are not soft skills. They are the foundation of
            every structure that lasts. Annissa and Patrick learned them at home
            first. Now they build them into everything.
            </p>
            <p className="body-text">
            Together they bring the full range: the visionary capacity to see what
            wants to be built, and the grounded mastery to build it in a way that
            endures. The pattern recognition and the execution. The frequency and
            the form. Two people who have chosen, in every dimension of their
            lives, to build things that last.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
