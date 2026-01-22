import useKeypress from '../../hooks/useKeypress'
import useScrollLock from '../../hooks/useScrollLock'

export default function Lightbox({
  items = [],
  activeIndex = 0,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) {
  const shouldShow = isOpen && items.length > 0
  useScrollLock(shouldShow)
  useKeypress('Escape', () => onClose?.(), shouldShow)
  useKeypress('ArrowLeft', () => onPrev?.(), shouldShow)
  useKeypress('ArrowRight', () => onNext?.(), shouldShow)

  if (!shouldShow) return null

  const current = items[activeIndex]

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/95 text-text backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-label={current?.label || 'Image preview'}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose?.()
        }}
        className="absolute right-4 top-4 rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:right-6 sm:top-6"
        aria-label="Close lightbox"
      >
        Close
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onPrev?.()
        }}
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:flex"
        aria-label="Previous image"
      >
        Prev
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onNext?.()
        }}
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:flex"
        aria-label="Next image"
      >
        Next
      </button>

      <div
        className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 pb-20 pt-20 sm:px-12"
        onClick={(event) => event.stopPropagation()}
      >
        {current ? (
          <img
            src={current.src}
            srcSet={current.srcSet}
            sizes="(min-width: 1024px) 1200px, 100vw"
            alt={current.alt}
            className="max-h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : null}

        <div className="absolute bottom-6 left-0 flex w-full justify-center">
          <div className="inline-flex items-center gap-4 rounded-chip border border-border bg-surface/80 px-4 py-2 text-label font-semibold uppercase tracking-[0.12em] text-muted">
            <span>
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(items.length).padStart(2, '0')}
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="text-text">{current?.label || 'Preview'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
