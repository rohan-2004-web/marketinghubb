import type { Metadata } from 'next';
import ServiceSection from '../components/ServiceSection';
import CoreValuesSection from '../components/CoreValuesSection';
import WhyTrustSection from '../components/WhyTrustSection';
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
    canonical: 'https://www.marketinghubb.in/service',
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
    <div className="min-h-screen pt-16 bg-slate-50">
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

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="grid gap-10 md:grid-cols-[1fr_320px] p-10 sm:p-14">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Visit Our Office in Mahmoorganj</h2>
                <p className="text-gray-600 text-lg max-w-3xl mb-6">
                  MarketingHubb is based in Mahmoorganj, Varanasi 221010. View our location and reach out by phone, email or WhatsApp.
                </p>
                <div className="space-y-4 text-slate-700 text-base">
                  <div>
                    <span className="font-semibold">Address:</span> Mahmoorganj, Varanasi, Uttar Pradesh 221010
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span>{' '}
                    <a href="tel:+917307260253" className="text-blue-600 hover:underline">+91 73072 60253</a>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:contact@marketinghubb.in" className="text-blue-600 hover:underline">contact@marketinghubb.in</a>
                  </div>
                  <div>
                    <span className="font-semibold">Office Hours:</span> Mon - Sat, 10:00 AM – 7:00 PM
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://wa.me/917307260253" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
                    Chat on WhatsApp
                  </a>
                  <a href="https://maps.google.com/maps?q=Mahmoorganj%20Varanasi%20221010" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-slate-300 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-slate-50">
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="h-[520px] sm:h-[620px]">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Mahmoorganj%20Varanasi%20221010&z=15&output=embed"
                  title="Mahmoorganj Varanasi map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSEOContent />
    </div>
  );
}