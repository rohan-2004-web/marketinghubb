import type { Metadata } from 'next';
import ContactSection from '../components/ContactSection';
import WhyChooseSection from '../components/WhyChooseSection';
import WhyTrustSection from '../components/WhyTrustSection';

export const metadata: Metadata = {
  title: 'Contact MarketingHubb | Digital Marketing Agency in Varanasi',
  description: 'Contact MarketingHubb for expert digital marketing services in Varanasi including SEO, social media, PPC, and website solutions.',
  keywords: [
    'contact digital marketing agency varanasi',
    'seo service in varanasi',
    'best digital marketing agency in varanasi',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact MarketingHubb | Digital Marketing Agency in Varanasi',
    description: 'Contact MarketingHubb for expert digital marketing services in Varanasi including SEO, social media, PPC, and website solutions.',
    url: 'https://www.marketinghubb.in/contact',
    siteName: 'MarketingHubb',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-amber-600 to-violet-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl">Get in touch with the best digital marketing agency in Varanasi</p>
        </div>
      </div>
      <WhyChooseSection />
      <ContactSection />
      <WhyTrustSection />
    </div>
  );
}