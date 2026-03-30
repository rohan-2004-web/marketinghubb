'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#031c3a] text-[#c7d9f3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MarketingHubb</h3>
          <p className="text-sm leading-relaxed">Best Digital Marketing Agency in Varanasi. Helping brands grow with data-driven strategies and creative campaigns.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#37d5a8]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#37d5a8]">About</Link></li>
            <li><Link href="/service" className="hover:text-[#37d5a8]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#37d5a8]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">Phone: +91 12345 67890</p>
          <p className="text-sm">Email: info@marketinghubb.in</p>
          <p className="text-sm">Address: Varanasi, UP, India</p>
          <div className="flex items-center mt-4 gap-3">
            <a href="#" className="text-[#c7d9f3] hover:text-[#37d5a8]"><FaFacebookF /></a>
            <a href="#" className="text-[#c7d9f3] hover:text-[#37d5a8]"><FaTwitter /></a>
            <a href="#" className="text-[#c7d9f3] hover:text-[#37d5a8]"><FaInstagram /></a>
            <a href="#" className="text-[#c7d9f3] hover:text-[#37d5a8]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#234064] mt-8 pt-6 text-center text-sm text-[#8aa8ce]">
        © {new Date().getFullYear()} MarketingHubb. All rights reserved.
      </div>
    </footer>
  );
}