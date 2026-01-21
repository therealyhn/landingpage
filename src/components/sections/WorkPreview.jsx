import Container from '../ui/Container'
import Modal from '../ui/Modal'
import SectionHeading from '../ui/SectionHeading'
import useCarousel from '../../hooks/useCarousel'
import useKeypress from '../../hooks/useKeypress'
import useModal from '../../hooks/useModal'

const previews = [
  {
    title: 'XTY Music',
    description:
      'Minimalist hero, bold type, and a fast booking path tuned for late-night venues.',
    images: [
      {
        label: 'Mashups',
        alt: 'XTY Music mashups section',
        src: '/previews/xty-mashups-desktop.png',
        srcSet:
          '/previews/xty-mashups-mobile.png 640w, /previews/xty-mashups-desktop.png 1280w',
      },
      {
        label: 'Mixes',
        alt: 'XTY Music mixes section',
        src: '/previews/xty-mixes-desktop.png',
        srcSet:
          '/previews/xty-mixes-mobile.png 640w, /previews/xty-mixes-desktop.png 1280w',
      },
      {
        label: 'Gallery',
        alt: 'XTY Music gallery section',
        src: '/previews/xty-gallery-desktop.png',
        srcSet:
          '/previews/xty-gallery-mobile.png 640w, /previews/xty-gallery-desktop.png 1280w',
      },
      {
        label: 'Booking',
        alt: 'XTY Music booking section',
        src: '/previews/xty-booking-desktop.png',
        srcSet:
          '/previews/xty-booking-mobile.png 640w, /previews/xty-booking-desktop.png 1280w',
      },
      {
        label: 'Booking Modal',
        alt: 'XTY Music booking modal',
        src: '/previews/xty-bookingmodal-desktop.png',
        srcSet:
          '/previews/xty-bookingmodal-mobile.png 640w, /previews/xty-bookingmodal-desktop.png 1280w',
      },
    ],
  },
  {
    title: 'AJCreative - Graphic Designer & Photographer Portfolio',
    description:
      'Short-form inquiry layout that moves from IG click to confirmed date.',
    images: [
      {
        label: 'Portfolio',
        alt: 'AJ Creative portfolio section',
        src: '/previews/aj-portfolio-desktop.png',
        srcSet:
          '/previews/aj-portfolio-mobile.png 640w, /previews/aj-portfolio-desktop.png 1280w',
      },
      {
        label: 'Portfolio Modal',
        alt: 'AJ Creative portfolio modal',
        src: '/previews/aj-modal-desktop.png',
        srcSet:
          '/previews/aj-modal-mobile.png 640w, /previews/aj-modal-desktop.png 1280w',
      },
      {
        label: 'Home',
        alt: 'AJ Creative home section',
        src: '/previews/aj-home-desktop.png',
        srcSet:
          '/previews/aj-home-mobile.png 640w, /previews/aj-home-desktop.png 1280w',
      },
    ],
  },
]

export default function WorkPreview() {
  const { activeItem, isOpen, modalRef, openModal, closeModal } = useModal()
  const carousel = useCarousel(activeItem?.images || [])

  useKeypress(
    'ArrowRight',
    () => {
      if (isOpen) carousel.next()
    },
    isOpen
  )

  useKeypress(
    'ArrowLeft',
    () => {
      if (isOpen) carousel.prev()
    },
    isOpen
  )

  return (
    <section className="bg-bg text-text">
      <Container className="py-24">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Work Preview"
            title="Proof of polish without the heavy build."
            description="Tap a preview card to view a larger frame and how the section feels."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {previews.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={(event) => openModal(item, event.currentTarget)}
                className={`group relative flex min-h-[200px] flex-col justify-between rounded-surface border border-border bg-surface/80 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${index === 1 ? 'sm:translate-y-6' : ''
                  }`}
              >
                <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-accent/80" />
                <div className="flex items-center justify-between">
                  <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                    Preview
                  </span>
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                </div>
                <h3 className="text-h3 font-display text-text">{item.title}</h3>
                <div className="mt-4 overflow-hidden rounded-surface border border-border bg-surfaceAlt">
                  <img
                    src={item.images[0].src}
                    srcSet={item.images[0].srcSet}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                    alt={item.images[0].alt}
                    className="aspect-video w-full object-cover opacity-75 transition duration-300 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                    width="1280"
                    height="720"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>

      <Modal
        isOpen={isOpen}
        modalRef={modalRef}
        title={activeItem?.title}
        description={activeItem?.description}
        onClose={closeModal}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
              {activeItem?.images?.[carousel.index]?.label || 'Preview'}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={carousel.prev}
                className="rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={carousel.next}
                className="rounded-chip border border-border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Next
              </button>
            </div>
          </div>
          {activeItem?.images?.length ? (
            <div className="overflow-hidden rounded-surface border border-border bg-surfaceAlt">
              <img
                src={activeItem.images[carousel.index].src}
                srcSet={activeItem.images[carousel.index].srcSet}
                sizes="(min-width: 1024px) 720px, 100vw"
                alt={activeItem.images[carousel.index].alt}
                className="aspect-video w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
              />
            </div>
          ) : null}
          {activeItem?.images?.length ? (
            <div className="flex flex-wrap gap-2">
              {activeItem.images.map((image, imageIndex) => (
                <button
                  key={image.label}
                  type="button"
                  onClick={() => carousel.goTo(imageIndex)}
                  className={`rounded-chip border px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${carousel.index === imageIndex
                    ? 'border-accent text-accent'
                    : 'border-border text-muted hover:border-accent hover:text-accent'
                    }`}
                >
                  {image.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </Modal>
    </section>
  )
}
