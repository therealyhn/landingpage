import { useMemo, useState } from 'react'

export default function useCarousel(items = []) {
  const count = items.length
  const [index, setIndex] = useState(0)

  const safeIndex = useMemo(() => {
    if (count === 0) return 0
    return Math.min(Math.max(index, 0), count - 1)
  }, [count, index])

  const goTo = (nextIndex) => {
    if (count === 0) return
    const bounded = Math.min(Math.max(nextIndex, 0), count - 1)
    setIndex(bounded)
  }

  const next = () => {
    if (count === 0) return
    setIndex((prev) => (prev + 1 > count - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    if (count === 0) return
    setIndex((prev) => (prev - 1 < 0 ? count - 1 : prev - 1))
  }

  return {
    index: safeIndex,
    count,
    goTo,
    next,
    prev,
  }
}
