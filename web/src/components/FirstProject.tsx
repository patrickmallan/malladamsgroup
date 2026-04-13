import { RevealSection } from './RevealSection'
import './FirstProject.css'

export function FirstProject() {
  return (
    <RevealSection id="first-project" className="section section--forest">
      <div className="shell first-project">
        <div className="first-project__visual" aria-hidden />
        <div className="first-project__copy">
          <p className="eyebrow">Our first project</p>
          <h2 className="display display--lg first-project__title">
            Squamish, British Columbia.
            <br />
            Where it begins.
          </h2>
          <p className="body-text">
            Nestled between mountains and water on the traditional territory of the
            Sḵwx̱wú7mesh Nation, Squamish is our first development — chosen not just
            for its extraordinary natural beauty, but for its energetic capacity
            to hold what we are building.
          </p>
          <p className="body-text">
            This is where Malladams Group&apos;s vision becomes physical. Where the
            framework meets the land. Where the proof of concept lives.
          </p>
          <p className="supporting-line">
            More details coming as the project unfolds.
          </p>
        </div>
      </div>
    </RevealSection>
  )
}
