import { useState, useEffect } from 'react'

/**
 * Returns true while the viewport height is greater than `threshold` (in px),
 * updating on window resize. Used to switch between layout sizes.
 */
export default function useHeightThreshold(threshold) {
  const [aboveThreshold, setAboveThreshold] = useState(false)

  useEffect(() => {
    const update = () => setAboveThreshold(window.innerHeight > threshold)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [threshold])

  return aboveThreshold
}
