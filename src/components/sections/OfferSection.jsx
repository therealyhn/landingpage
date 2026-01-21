import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const included = [
  'High-end landing page',
  'Gallery section',
  'Mixes embed section',
  'Booking/contact form (email)',
  'Deploy + basic SEO',
]

const excluded = [
  'No complex backend, no user accounts, no payments',
]

export default function OfferSection() {
  return (
    <section className="bg-bg text-text">
      <Container className="py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Offer"
              title="What you get"
              description="A focused build that keeps everything lean and booking-ready."
            />
            <div className="grid gap-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-surface border border-border bg-surface/80 px-6 py-4 transition duration-300 hover:border-accent"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-accent">
                    ✓
                  </span>
                  <span className="text-body text-muted transition duration-200 group-hover:text-text">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-surface border border-border bg-surface/70 p-8 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
                Not included
              </span>
              <span className="h-px w-16 bg-accent/60" />
            </div>
            <div className="grid gap-4">
              {excluded.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-surface border border-border bg-surfaceAlt/80 p-6"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-body text-muted">{item}</span>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-border" />
            <p className="text-body text-muted">
              Need something more complex? We can scope it separately after the
              core site ships.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
