import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Problem } from '@/components/Problem'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Portals } from '@/components/Portals'
import { Pricing } from '@/components/Pricing'
import { Testimonial } from '@/components/Testimonial'
import { Security } from '@/components/Security'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Features />
        <HowItWorks />
        <Portals />
        <Pricing />
        <Testimonial />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
