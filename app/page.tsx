

import ReviewsSection from './components/ReviewsSection';
import { AboutUsSection } from './components/AboutUsSection'
import { FAQSection } from './components/FaqSection'
import { ServiceArea } from './components/ServiceArea'
import ServiceSection from './components/ServiceSection'
import { ProductDetails } from './components/ProductDetails'
import Hero2 from './components/Hero2'
import FeatureSection from './components/FeatureSection';




export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero2 />


      <ServiceSection />

      <FeatureSection />

      <ProductDetails />

      <ServiceArea />
      <ReviewsSection />

      <AboutUsSection />
      <FAQSection />




    </div>
  )
}

