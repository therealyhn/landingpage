import { useEffect, useRef, useState } from 'react'

export default function useModal() {
  const [activeItem, setActiveItem] = useState(null)
  const modalRef = useRef(null)
  const lastActiveElement = useRef(null)

  const openModal = (item, triggerElement) => {
    lastActiveElement.current = triggerElement || document.activeElement
    setActiveItem(item)
  }

  const closeModal = () => {
    setActiveItem(null)
  }

  useEffect(() => {
    if (activeItem && modalRef.current) {
      modalRef.current.focus()
    }

    if (!activeItem && lastActiveElement.current) {
      lastActiveElement.current.focus()
    }
  }, [activeItem])

  return {
    activeItem,
    isOpen: Boolean(activeItem),
    modalRef,
    openModal,
    closeModal,
  }
}
