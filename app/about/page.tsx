import type { Metadata } from 'next';
import TrustAboutSection from '../components/TrustAboutSection';
import FounderAboutSection from '../components/FounderAboutSection';
import LocationsSection from '../components/LocationsSection';

export const metadata: Metadata = {
  title: 'About MarketingHubb | Digital Marketing Agency in Varanasi',
  description: 'Learn about MarketingHubb, the leading digital marketing agency in Varanasi. Our mission, vision, and the team behind your success.',
  keywords: [
    'about marketinghubb',
    'digital marketing agency varanasi',
    'our team',
    'our mission',
    'best digital marketing company',
  ],
  alternates: {
    canonical: 'https://www.marketinghubb.in/about',
  },
  openGraph: {
    title: 'About MarketingHubb | Digital Marketing Agency in Varanasi',
    description: 'Learn about MarketingHubb, the leading digital marketing agency in Varanasi. Our mission, vision, and the team behind your success.',
    url: 'https://www.marketinghubb.in/about',
    siteName: 'MarketingHubb',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About MarketingHubb</h1>
          <p className="text-xl md:text-2xl">Leading Digital Marketing Agency in Varanasi</p>
        </div>
      </div>
      
      <TrustAboutSection />
      <FounderAboutSection />
      <LocationsSection />
    </div>
  );
}
