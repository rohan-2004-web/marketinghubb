import type { Metadata } from 'next';
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
    canonical: 'https://www.marketinghubb.in/contact',
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
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="bg-gradient-to-r from-amber-600 to-violet-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl">Get in touch with the best digital marketing agency in Varanasi</p>
        </div>
      </div>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden border border-slate-200 bg-white shadow-lg">
            <div className="p-10 sm:p-14">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Visit Our Office in Mahmoorganj</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Find MarketingHubb's location in Mahmoorganj, Varanasi 221010. Use the map below to reach us easily from any part of the city.
              </p>
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
      </section>
      <WhyChooseSection />
      <WhyTrustSection />
    </div>
  );
}