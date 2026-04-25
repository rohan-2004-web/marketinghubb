import type { Metadata } from 'next';
import AboutSection from '../components/AboutSection';
import MarketingContentSection from '../components/MarketingContentSection';

export const metadata: Metadata = {
  title: 'About MarketingHubb | Digital Marketing Agency in Varanasi',
  description: 'Learn about MarketingHubb, a trusted digital marketing agency in Varanasi delivering SEO, social media, PPC, and web design services.',
  keywords: [
    'best digital marketing agency in varanasi',
    'digital marketing company varanasi',
    'seo service in varanasi',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About MarketingHubb | Digital Marketing Agency in Varanasi',
    description: 'Learn about MarketingHubb, a trusted digital marketing agency in Varanasi delivering SEO, social media, PPC, and web design services.',
    url: 'https://www.marketinghubb.in/about',
    siteName: 'MarketingHubb',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl">Learn more about MarketingHubb</p>
        </div>
      </div>
      <AboutSection />
      <MarketingContentSection />
    </div>
  );
}