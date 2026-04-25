import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import CoreValuesSection from './components/CoreValuesSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseSection from './components/WhyChooseSection';
import WhyTrustSection from './components/WhyTrustSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import CourseSection from './components/CourseSection';
import ContactSection from './components/ContactSection';
import LocationsSection from './components/LocationsSection';
import IndustriesSection from './components/IndustriesSection';
import MarketingContentSection from './components/MarketingContentSection';
import FounderSection from './components/FounderSection';

export const metadata: Metadata = {
  title: 'MarketingHubb | Best Digital Marketing Agency in Varanasi',
  description: 'MarketingHubb offers top digital marketing services in Varanasi including SEO service, social media marketing, PPC, and web design for local businesses.',
  keywords: [
    'best digital marketing agency in varanasi',
    'seo service in varanasi',
    'smm service in varanasi',
    'ppc in varanasi',
    'digital marketing service varanasi',
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'MarketingHubb | Best Digital Marketing Agency in Varanasi',
    description: 'MarketingHubb offers top digital marketing services in Varanasi including SEO service, social media marketing, PPC, and web design for local businesses.',
    url: 'https://www.marketinghubb.in',
    siteName: 'MarketingHubb',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceSection />
      <FounderSection />
      <CoreValuesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <WhyTrustSection />
      <WhyChooseSection />
      <LocationsSection />
      <AboutSection />
      <CourseSection />
      <ContactSection />
      <MarketingContentSection />
      <FAQSection />
    </div>
  );
}
