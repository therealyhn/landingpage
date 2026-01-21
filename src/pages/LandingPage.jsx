import CTASection from '../components/sections/CTASection'
import CredibilityStrip from '../components/sections/CredibilityStrip'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
import OfferSection from '../components/sections/OfferSection'
import WorkPreview from '../components/sections/WorkPreview'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WorkPreview />
      <OfferSection />
      <CTASection />
      <Footer />
    </>
  )
}
