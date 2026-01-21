import Container from '../ui/Container'
import Modal from '../ui/Modal'
import SectionHeading from '../ui/SectionHeading'
import useModal from '../../hooks/useModal'

const previews = [
  {
    title: 'XTY Website',
    description:
      'Minimalist hero, bold type, and a fast booking path tuned for late-night venues.',
    image: {
      alt: 'XTY Music website preview',
      src: '/previews/xty-1280.png',
      srcSet:
        '/previews/xty-640.png 640w, /previews/xty-1024.png 1024w, /previews/xty-1280.png 1280w',
    },
  },
  {
    title: 'Booking Flow',
    description:
      'Short-form inquiry layout that moves from IG click to confirmed date.',
    image: {
      alt: 'AJ Creative CVA website preview',
      src: '/previews/ajcreative-1280.png',
      srcSet:
        '/previews/ajcreative-640.png 640w, /previews/ajcreative-1024.png 1024w, /previews/ajcreative-1280.png 1280w',
    },
  },
]

export default function WorkPreview() {
  const { activeItem, isOpen, modalRef, openModal, closeModal } = useModal()

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
                className={`group relative flex min-h-[200px] flex-col justify-between rounded-surface border border-border bg-surface/80 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                  index === 1 ? 'sm:translate-y-6' : ''
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
                    src={item.image.src}
                    srcSet={item.image.srcSet}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                    alt={item.image.alt}
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
          <div className="flex flex-col gap-8 rounded-surface border border-border bg-surface/70 p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                Layout Deck
              </span>
              <span className="h-px w-16 bg-accent/70" />
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {previews.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-surface border border-border bg-slate/40 p-6 transition duration-300 hover:border-accent"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body font-semibold text-text">
                      {item.title}
                    </span>
                    <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                      Live
                    </span>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-surface border border-border bg-surfaceAlt">
                    <img
                      src={item.image.src}
                      srcSet={item.image.srcSet}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      alt={item.image.alt}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="1280"
                      height="720"
                    />
                  </div>
                </div>
              ))}
            </div>
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
        <div className="flex flex-col gap-4">
          <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
            Full Preview
          </span>
          {activeItem?.image ? (
            <div className="overflow-hidden rounded-surface border border-border bg-surfaceAlt">
              <img
                src={activeItem.image.src}
                srcSet={activeItem.image.srcSet}
                sizes="(min-width: 1024px) 720px, 100vw"
                alt={activeItem.image.alt}
                className="aspect-video w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1280"
                height="720"
              />
            </div>
          ) : null}
        </div>
      </Modal>
    </section>
  )
}
