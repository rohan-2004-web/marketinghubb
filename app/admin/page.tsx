import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | MarketingHubb',
  robots: 'noindex, nofollow',
};

export default function Admin() {
  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admin Panel</h1>
          <p className="text-xl md:text-2xl">Dashboard Coming Soon</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-slate-600">Admin panel is currently under development.</p>
        </div>
      </div>
    </div>
  );
}
