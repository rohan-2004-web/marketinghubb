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
    <div className="min-h-screen bg-slate-50 pt-16">
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
                    <a href="mailto:saurabhcgoubey200@gmail.com" className="text-blue-600 hover:underline">saurabhcgoubey200@gmail.com</a>
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

      <FAQSection />
      <MarketingContentSection />
    </div>
  );
}
