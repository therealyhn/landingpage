import { useEffect } from 'react'

export default function useKeypress(key, handler, active = true) {
  useEffect(() => {
    if (!active) return undefined

    const onKeyDown = (event) => {
      if (event.key === key) {
        handler(event)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [key, handler, active])
}
