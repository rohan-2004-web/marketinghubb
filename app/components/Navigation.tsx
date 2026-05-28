'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/logo.jpg"
              alt="MarketingHubb Logo"
              width={40}
              height={40}
              priority
              className="w-auto h-auto"
            />
            <span className="text-2xl font-bold text-blue-600">MarketingHubb</span>
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
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

        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                href="/"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/service"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
