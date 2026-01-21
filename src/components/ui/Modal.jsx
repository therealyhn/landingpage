import { useEffect } from 'react'
import useKeypress from '../../hooks/useKeypress'
import useScrollLock from '../../hooks/useScrollLock'

export default function Modal({
  isOpen,
  title,
  description,
  onClose,
  children,
  modalRef,
}) {
  useScrollLock(isOpen)
  useKeypress('Escape', () => onClose?.(), isOpen)

  useEffect(() => {
    if (!isOpen || !modalRef?.current) return

    const focusable = modalRef.current.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusable) {
      focusable.focus()
    } else {
      modalRef.current.focus()
    }
  }, [isOpen, modalRef])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4 text-text backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className="relative z-10 w-full max-w-2xl rounded-surface border border-border bg-surface p-8 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label="Close modal"
        >
          Close
        </button>
        <div className="flex flex-col gap-4">
          <h3 className="text-h3 font-display text-text">{title}</h3>
          <p className="text-body text-muted">{description}</p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
