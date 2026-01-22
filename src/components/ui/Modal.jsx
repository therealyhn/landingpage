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
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-0 text-text backdrop-blur sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className="relative z-10 h-full w-full overflow-y-auto rounded-none border border-border bg-surface p-6 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:h-auto sm:max-w-2xl sm:rounded-surface sm:p-8"
        ref={modalRef}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:right-6 sm:top-6"
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
