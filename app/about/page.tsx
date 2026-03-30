import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';

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
      <FAQSection />
    </div>
  );
}