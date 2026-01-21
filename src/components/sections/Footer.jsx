import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="bg-bg text-text">
      <Container className="py-12">
        <div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-body font-semibold text-text">
              DM ‘BOOKINGS’ on Instagram
            </span>
            <span className="text-body text-muted">yourdomain.com</span>
          </div>
          <span className="text-label font-semibold uppercase tracking-[0.12em] text-muted">
            Proof Asset Landing
          </span>
        </div>
      </Container>
    </footer>
  )
}
