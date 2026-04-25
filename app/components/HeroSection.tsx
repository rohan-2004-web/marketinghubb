'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#031c3a] via-[#0a1f3c] to-[#0e2b54] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,214,176,0.25),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(12,98,169,0.2),transparent_50%),radial-gradient(circle_at_60%_75%,rgba(15,75,169,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031c3a]/80 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#35d6b0]/20 to-[#0c62a9]/20 border border-[#35d6b0]/30 px-5 py-2 rounded-full text-sm font-medium text-[#35d6b0] backdrop-blur-sm">
              #1 DIGITAL MARKETING AGENCY IN VARANASI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-[#e0f2ff] to-[#35d6b0] bg-clip-text text-transparent">
              GROW YOUR <span className="text-[#35d6b0]">BUSINESS</span> WITH <br /> DIGITAL MARKETING
            </h1>
            <p className="max-w-xl text-lg text-[#c8d8ee] leading-relaxed">
              Best Digital Marketing Agency in Varanasi — We help brands grow through data-driven strategies, creative campaigns, and measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#35d6b0] to-[#24b38c] text-[#031c3a] font-bold rounded-full shadow-lg shadow-[#35d6b0]/30 hover:shadow-[#35d6b0]/50 transition-all duration-300"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#35d6b0]/50 rounded-full text-white hover:bg-[#35d6b0]/10 hover:border-[#35d6b0] transition-all duration-300 backdrop-blur-sm"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[420px] rounded-3xl bg-gradient-to-tr from-[#082443] via-[#0b2d55] to-[#122d52] shadow-2xl overflow-hidden border border-white/10"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], x: [0, 6, -6, 0], y: [0, -4, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="absolute top-6 left-4 h-20 w-20 rounded-xl bg-gradient-to-br from-[#35d6b0]/30 to-[#0c62a9]/30 border border-[#35d6b0]/40 backdrop-blur-sm" />
              <div className="absolute bottom-10 right-6 h-16 w-16 rounded-xl bg-gradient-to-br from-[#0c62a9]/30 to-[#35d6b0]/30 border border-[#0c62a9]/40 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-[#0c62a9]/20 to-[#35d6b0]/20 border border-[#35d6b0]/30 shadow-[0_0_60px_rgba(53,214,176,0.3)] flex items-center justify-center text-6xl font-black text-[#35d6b0] backdrop-blur-sm">
                  M
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}