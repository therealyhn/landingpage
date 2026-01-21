import Button from '../ui/Button'
import Chip from '../ui/Chip'
import Container from '../ui/Container'

export default function CTASection() {
  return (
    <section className="bg-bg text-text">
      <Container className="py-24">
        <div className="relative overflow-hidden rounded-surface border border-border bg-surface/80 px-8 py-16 text-center shadow-soft">
          <div
            className="pointer-events-none absolute inset-0 bg-spotlight opacity-70"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <Chip>Ready to book</Chip>
            <h2 className="text-h2 font-display text-text">
              DM ‘BOOKINGS’ on Instagram
            </h2>
            <p className="max-w-2xl text-body text-muted">
              Keep it simple: send the word, get a response, and lock your
              build window.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#">DM ‘BOOKINGS’ on Instagram</Button>
              <Button href="#" variant="secondary">
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
