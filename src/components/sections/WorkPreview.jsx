import Container from '../ui/Container'
import Modal from '../ui/Modal'
import SectionHeading from '../ui/SectionHeading'
import useModal from '../../hooks/useModal'

const previews = [
  {
    title: 'XTY Website',
    description:
      'Minimalist hero, bold type, and a fast booking path tuned for late-night venues.',
  },
  {
    title: 'Portfolio',
    description:
      'Curated project grid with hover reveals and mixes, styled like a record sleeve.',
  },
  {
    title: 'Booking Flow',
    description:
      'Short-form inquiry layout that moves from IG click to confirmed date.',
  },
]

export default function WorkPreview() {
  const { activeItem, isOpen, modalRef, openModal, closeModal } = useModal()

  return (
    <section className="bg-bg text-text">
      <Container className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Work Preview"
              title="Proof of polish without the heavy build."
              description="Tap a preview card to view a larger frame and how the section feels."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {previews.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={(event) => openModal(item, event.currentTarget)}
                  className="group relative flex min-h-[180px] flex-col justify-between rounded-surface border border-border bg-surface/80 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                      Preview
                    </span>
                    <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                  </div>
                  <h3 className="text-h3 font-display text-text">{item.title}</h3>
                  <div className="mt-3 h-1.5 w-12 rounded-full bg-accent/70 opacity-60 transition duration-300 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-surface border border-border bg-surface/70 p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                Layout Deck
              </span>
              <span className="h-px w-16 bg-accent/70" />
            </div>
            <div className="grid gap-4">
              {previews.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-surface border border-border bg-slate/40 p-6"
                >
                  <div className="absolute inset-0 animate-shimmer bg-[length:200%_200%] bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-70" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-body font-semibold text-text">
                      {item.title}
                    </span>
                    <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                      Placeholder
                    </span>
                  </div>
                  <div className="relative mt-4 h-2 w-20 rounded-full bg-border" />
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
        <div className="relative overflow-hidden rounded-surface border border-border bg-slate/50 p-8">
          <div className="absolute inset-0 animate-shimmer bg-[length:200%_200%] bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-70" />
          <div className="relative flex flex-col gap-4">
            <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
              Full Preview
            </span>
            <div className="h-48 rounded-surface border border-border bg-surfaceAlt" />
          </div>
        </div>
      </Modal>
    </section>
  )
}
