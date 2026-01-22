import Container from '../ui/Container'
import Chip from '../ui/Chip'

const items = [
  { label: '15+ years DJing', detail: 'Trusted by clubs & private clients.' },
  { label: 'React - Vite - Tailwind', detail: 'Modern stack, fast delivery.' },
  { label: 'Booking-focused design', detail: 'Built to convert IG traffic.' },
]

export default function CredibilityStrip() {
  return (
    <section className="bg-bg text-text">
      <Container className="py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <div className="flex flex-col gap-6">
            <Chip>Credibility</Chip>
            <div className="h-px w-16 bg-accent/60" />
            <p className="text-body text-muted">
              Built by someone who knows the booth and the browser.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={`group relative rounded-surface border border-border bg-surface/80 p-6 shadow-soft transition duration-300 hover:border-accent ${index === 1 ? 'lg:ml-12' : ''
                  } ${index === 2 ? 'lg:ml-24' : ''}`}
              >
                <span className="absolute -left-3 top-6 h-6 w-6 border-l-2 border-t-2 border-accent/80" />
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-h3 font-display text-text">
                    {item.label}
                  </h3>
                  <span className="h-px w-12 bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
                </div>
                <p className="mt-3 text-body text-muted transition duration-300 group-hover:text-text">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
