'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#03111f] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#35d6b0]/10 text-[#35d6b0] font-semibold">M</div>
              <div>
                <p className="text-xl font-semibold text-white">MarketingHubb</p>
                <p className="text-sm text-slate-400">Digital marketing agency in Varanasi.</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400 max-w-md">
              Helping brands grow with simple, measurable, and effective digital campaigns backed by local expertise.
            </p>
            <div className="flex items-center gap-3 text-slate-300">
              <a href="https://wa.me/917307260253" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <FaWhatsapp />
              </a>
              <a href="tel:+917307260253" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <FaPhone />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <FaFacebookF />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <FaInstagram />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#35d6b0]">Quick Links</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
              <li><Link href="/service" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#35d6b0]">Contact Info</p>
            <div className="text-sm text-slate-400 space-y-3">
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> Mahmoorganj Akashwani, Varanasi 221010</p>
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> <a href="tel:+917307260253" className="transition hover:text-white">+91 73072 60253</a></p>
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> <a href="mailto:saurabhcgoubey200@gmail.com" className="transition hover:text-white">saurabhcgoubey200@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MarketingHubb. Best Digital Marketing Agency in Varanasi.
        </div>
      </div>
    </footer>
  );
}
