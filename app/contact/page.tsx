import ContactSection from '../components/ContactSection';
import WhyTrustSection from '../components/WhyTrustSection';
import FAQSection from '../components/FAQSection';

export default function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-amber-600 to-violet-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl">Get in touch with the best digital marketing agency in Varanasi</p>
        </div>
      </div>
      <ContactSection />
      <WhyTrustSection />
      <FAQSection />
    </div>
  );
}