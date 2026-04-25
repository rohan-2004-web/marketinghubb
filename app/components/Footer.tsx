'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04172f] text-slate-200 py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0f4b8d]/30 blur-3xl" />
        <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-[#35d6b0]/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#35d6b0] mb-4">MarketingHubb</p>
            <h3 className="text-3xl font-extrabold text-white mb-4">Grow your brand with premium digital marketing</h3>
            <p className="text-sm leading-8 text-slate-300 mb-6">A trusted Digital Marketing Agency in Varanasi focused on SEO, PPC, social media, and website growth for small and medium businesses.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/917307260253" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#35d6b0] px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[#35d6b0]/20 transition hover:bg-[#24b38c]">WhatsApp Now</a>
              <a href="tel:+917307260253" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#35d6b0] hover:text-[#35d6b0]">Call 7307260253</a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.15)]">
            <h4 className="text-xl font-semibold text-white mb-5">Quick Links</h4>
            <ul className="grid gap-3 text-sm text-slate-300">
              <li><Link href="/" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#35d6b0] hover:bg-[#0b3f66] hover:text-white">Home</Link></li>
              <li><Link href="/about" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#35d6b0] hover:bg-[#0b3f66] hover:text-white">About</Link></li>
              <li><Link href="/service" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#35d6b0] hover:bg-[#0b3f66] hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#35d6b0] hover:bg-[#0b3f66] hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
            <h4 className="text-xl font-semibold text-white mb-5">Contact</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <p className="leading-7"><span className="font-semibold text-white">Phone</span>: <a href="tel:+917307260253" className="text-[#35d6b0] hover:text-white">+91 7307260253</a></p>
              <p className="leading-7"><span className="font-semibold text-white">WhatsApp</span>: <a href="https://wa.me/917307260253" target="_blank" rel="noopener noreferrer" className="text-[#35d6b0] hover:text-white">Chat Now</a></p>
              <p className="leading-7"><span className="font-semibold text-white">Email</span>: <a href="mailto:saurabhcgoubey200@gmail.com" className="text-[#35d6b0] hover:text-white">saurabhcgoubey200@gmail.com</a></p>
              <p className="leading-7"><span className="font-semibold text-white">Address</span>: Mahmoorganj, Varanasi 221010</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-lg text-slate-200">
              <a href="https://wa.me/917307260253" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/20 transition hover:bg-[#17b05c]"><FaWhatsapp /></a>
              <a href="tel:+917307260253" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f5c9c] text-white shadow-lg shadow-[#1f5c9c]/20 transition hover:bg-[#154772]"><FaPhone /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#35d6b0] hover:text-slate-950"><FaFacebookF /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#35d6b0] hover:text-slate-950"><FaTwitter /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#35d6b0] hover:text-slate-950"><FaInstagram /></a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#35d6b0] hover:text-slate-950"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 px-6 py-5 text-center text-sm text-slate-300 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <p className="font-medium text-white">Ready to scale your Varanasi business with expert digital marketing?</p>
          <p className="mt-2">We help local brands rank higher, convert traffic, and build trust online.</p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} MarketingHubb. All rights reserved. Designed for Varanasi businesses.
        </div>
      </div>
    </footer>
  );
}
