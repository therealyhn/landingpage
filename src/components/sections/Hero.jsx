import Button from '../ui/Button'
import Chip from '../ui/Chip'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg text-text">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-spotlight"
        aria-hidden="true"
      />
      <Container className="relative py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Chip>Proof Asset</Chip>
              <div className="h-px w-24 bg-accent opacity-40" />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-display text-text">
                Turn Your IG Into Paid Bookings
              </h1>
              <p className="text-body text-muted">
                High-end DJ websites built by a DJ + Front-End Dev.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-l border-border pl-6">
              {[
                'Premium dark club aesthetic (fast, responsive)',
                'Gallery + mixes + booking-ready contact flow',
                'Delivered in 14–21 days',
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 text-body text-text"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="flex-1 text-muted transition duration-200 group-hover:text-text">
                    {item}
                  </span>
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-12" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="https://www.instagram.com/jovanljusic_asdf/" target="_blank">DM ‘BOOKINGS’ on Instagram</Button>
              <Button variant="secondary">
                <a href="https://www.instagram.com/jovanljusic_asdf/" target="_blank">See Demo</a>
              </Button>
            </div>
          </div>
          <div className="relative lg:pl-16">
            <div className="relative rounded-surface border border-border bg-surface/90 p-8 shadow-soft backdrop-blur">
              <span className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-accent" />
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                    Delivery
                  </span>
                  <span className="text-body font-semibold text-text">
                    14–21 days
                  </span>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="flex flex-col gap-4">
                  <p className="text-body text-muted">
                    Booking-first structure with gallery, mixes, and a contact
                    flow that feels premium on every screen.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-12 bg-accent opacity-60" />
                    <span className="text-label font-semibold uppercase text-muted">
                      Club-ready aesthetic
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-accent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
