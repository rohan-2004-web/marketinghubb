import type { Metadata } from 'next';
import WhyChooseSection from '../components/WhyChooseSection';
import WhyTrustSection from '../components/WhyTrustSection';
import FloatingContactForm from '../components/FloatingContactForm';

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
            <div className="grid gap-10 md:grid-cols-[1fr_320px] p-10 sm:p-14">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Visit Our Office in Mahmoorganj</h2>
                <p className="text-gray-600 text-lg max-w-3xl mb-6">
                  Find MarketingHubb's location in Mahmoorganj, Varanasi 221010. Reach us for SEO, SMM, PPC, web design and local business growth services.
                </p>
                <div className="space-y-4 text-slate-700 text-base">
                  <div>
                    <span className="font-semibold">Address:</span> Mahmoorganj, Varanasi, Uttar Pradesh 221010
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span> <a href="tel:+917307260253" className="text-blue-600 hover:underline">+91 73072 60253</a>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span> <a href="mailto:saurabhcgoubey200@gmail.com" className="text-blue-600 hover:underline">saurabhcgoubey200@gmail.com</a>
                  </div>
                  <div>
                    <span className="font-semibold">Office Hours:</span> Mon - Sat, 10:00 AM – 7:00 PM
                  </div>
                  <div>
                    <span className="font-semibold">Service Area:</span> Varanasi, Uttar Pradesh and pan-India digital marketing support.
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
      <FloatingContactForm isFloating={false} />
      <WhyChooseSection />
      <WhyTrustSection />
    </div>
  );
}