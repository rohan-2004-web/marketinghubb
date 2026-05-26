import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404 — Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="px-5 py-2 bg-blue-600 text-white rounded-lg">Go Home</Link>
          <Link href="/service" className="px-5 py-2 border border-gray-200 rounded-lg">View Services</Link>
        </div>
      </div>
    </div>
  );
}
