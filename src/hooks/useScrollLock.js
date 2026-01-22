import { useEffect } from 'react'

let lockCount = 0
let originalStyle = null

export default function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return

    if (lockCount === 0) {
      originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
    }
    lockCount++

    return () => {
      lockCount--
      if (lockCount === 0) {
        document.body.style.overflow = originalStyle || ''
        originalStyle = null
      }
    }
  }, [locked])
}
