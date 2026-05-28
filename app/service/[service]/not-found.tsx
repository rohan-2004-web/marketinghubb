import Link from 'next/link';

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen pt-16 bg-slate-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto p-8 text-center">
        <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">Service not found</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Sorry, we couldn’t find that service.</h1>
        <p className="text-slate-600 mb-8">
          The service page you tried to open is not available. Please choose from our available services below.
        </p>
        <Link href="/service" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700">
          View All Services
        </Link>
      </div>
    </div>
  );
}
