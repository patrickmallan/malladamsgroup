import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function RevealSection({ id, className = '', children }: Props) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} reveal ${visible ? 'is-visible' : ''}`.trim()}
    >
      {children}
    </section>
  )
}
