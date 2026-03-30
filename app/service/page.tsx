import ServiceSection from '../components/ServiceSection';

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
    </div>
  );
}