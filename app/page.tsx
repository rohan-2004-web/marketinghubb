import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import CoreValuesSection from './components/CoreValuesSection';
import WhyChooseSection from './components/WhyChooseSection';
import WhyTrustSection from './components/WhyTrustSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection';
import ContactSection from './components/ContactSection';
import LocationsSection from './components/LocationsSection';
import IndustriesSection from './components/IndustriesSection';
import MarketingContentSection from './components/MarketingContentSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceSection />
      <CoreValuesSection />
      <IndustriesSection />
      <WhyTrustSection />
      <WhyChooseSection />
      <LocationsSection />
      <AboutSection />
      <CourseSection />
      <ContactSection />
      <FAQSection />
      <MarketingContentSection />
    </div>
  );
}
