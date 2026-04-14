import { useHeroParallax } from '../hooks/useHeroParallax'
import './Hero.css'

export function Hero() {
  const parallaxY = useHeroParallax()

  return (
    <section id="hero" className="hero">
      <div
        className="hero__parallax"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        aria-hidden
      >
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__glow hero__glow--three" />
      </div>
      <div className="hero__shimmer" aria-hidden />

      <div className="hero__content shell">
        <h1 className="display display--xl hero__headline">You belong here.</h1>
        <p className="hero__subhead">
          Most structures were never built to hold what you’re trying to create.
          <br />
          We build the ones that can.
        </p>
        <a className="btn btn--primary hero__cta" href="#contact">
          Begin the Conversation
        </a>
      </div>
    </section>
  )
}
