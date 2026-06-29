import useReveal from '../hooks/useReveal'

const variants = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  scale: 'reveal reveal-scale',
  fade: 'reveal reveal-fade',
}

/**
 * Wraps content in a scroll-reveal element. As it enters the viewport it fades
 * and eases into place. Use `delay` (ms) to stagger siblings so the eye is led
 * down the page in sequence.
 *
 * @param {{
 *   as?: keyof JSX.IntrinsicElements,
 *   variant?: 'up' | 'left' | 'right' | 'scale' | 'fade',
 *   delay?: number,
 *   className?: string,
 * }} props
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useReveal()
  const base = variants[variant] || variants.up

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`${base} ${inView ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
