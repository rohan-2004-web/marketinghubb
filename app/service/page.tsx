import type { Metadata } from 'next';
import ServiceSection from '../components/ServiceSection';
import CoreValuesSection from '../components/CoreValuesSection';
import WhyTrustSection from '../components/WhyTrustSection';
import ContactSection from '../components/ContactSection';
import WhyChooseSection from '../components/WhyChooseSection';
import LocationsSection from '../components/LocationsSection';
import IndustriesSection from '../components/IndustriesSection';
import ServiceSEOContent from '../components/ServiceSEOContent';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Varanasi | MarketingHubb',
  description: 'Explore MarketingHubb services in Varanasi: SEO service, social media marketing, PPC, content marketing, web design, and email marketing from the best digital marketing agency in Varanasi.',
  keywords: [
    'digital marketing services varanasi',
    'seo service in varanasi',
    'best SEO company in Varanasi',
    'ppc in varanasi',
    'smm service in varanasi',
    'best digital marketing agency in varanasi',
  ],
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: 'Digital Marketing Services in Varanasi | MarketingHubb',
    description: 'Explore MarketingHubb services in Varanasi: SEO, social media marketing, PPC, content marketing, web design, and email marketing.',
    url: 'https://www.marketinghubb.in/service',
    siteName: 'MarketingHubb',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Service() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl">Comprehensive digital marketing solutions</p>
        </div>
      </div>
      <ServiceSection />
      <CoreValuesSection />
      <IndustriesSection />
      <WhyTrustSection />
      <WhyChooseSection />
      <LocationsSection />
      <ContactSection />
      <ServiceSEOContent />
    </div>
  );
}