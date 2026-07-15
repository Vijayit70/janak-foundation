import useReveal from '../hooks/useReveal'

/**
 * Wraps children in a div that fades/slides into view on scroll.
 * Usage: <Reveal><section>...</section></Reveal>
 */
export default function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
