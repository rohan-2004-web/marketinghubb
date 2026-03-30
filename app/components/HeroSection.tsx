'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#031c3a] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(61,213,172,0.45),transparent_43%),radial-gradient(circle_at_80%_20%,rgba(0,144,255,0.22),transparent_44%),radial-gradient(circle_at_60%_75%,rgba(126,58,255,0.3),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#0f3b69] px-5 py-2 rounded-full text-sm font-medium text-[#7DE2C0]">
              #1 DIGITAL MARKETING AGENCY IN VARANASI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              GROW YOUR <span className="text-[#37d5a8]">BUSINESS</span> WITH <br /> DIGITAL MARKETING
            </h1>
            <p className="max-w-xl text-lg text-[#c8d8ee]">
              Best Digital Marketing Agency in Varanasi — We help brands grow through data-driven strategies, creative campaigns, and measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#35d1a1] text-[#031c3a] font-bold rounded-full shadow-lg hover:bg-[#25b08a] transition-all"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[420px] rounded-3xl bg-gradient-to-tr from-[#082443] via-[#0b2d55] to-[#122d52] shadow-2xl flex items-center justify-center"
          >
            <div className="h-64 w-64 rounded-2xl bg-[#0c3e74] border border-[#1f7cb7]/50 shadow-[0_0_60px_rgba(57,165,255,0.45)] flex items-center justify-center text-6xl font-black text-[#60e9d7]">
              M
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}