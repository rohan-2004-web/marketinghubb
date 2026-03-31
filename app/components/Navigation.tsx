'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image src="/image/logo.png" alt="MarketingHubb Logo" width={40} height={40} priority />
              <span className="ml-2 text-2xl font-bold text-blue-600">MarketingHubb</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/service" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}