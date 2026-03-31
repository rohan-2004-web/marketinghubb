import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import CoreValuesSection from './components/CoreValuesSection';
import WhyChooseSection from './components/WhyChooseSection';
import WhyTrustSection from './components/WhyTrustSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceSection />
      <CoreValuesSection />
      <WhyTrustSection />
      <FAQSection />
      <WhyChooseSection />
      <AboutSection />
      <CourseSection />
      <ContactSection />
    </div>
  );
}
