'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e7f0ff] py-24">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#35d6b0]/20 blur-3xl" />
      <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-[#0c62a9]/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/80 bg-white/90 p-10 shadow-[0_25px_80px_rgba(12,98,169,0.12)] backdrop-blur-xl"
          >
            <span className="inline-flex rounded-full bg-[#35d6b0]/10 px-4 py-2 text-sm font-semibold text-[#0c62a9] mb-6">
              Trusted digital marketing partner in Varanasi
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c345e] mb-6 leading-tight">
              About MarketingHubb
            </h2>
            <p className="text-lg leading-8 text-[#50647f] mb-6">
              As the best digital marketing agency in Varanasi, MarketingHubb helps businesses thrive online with tailored SEO, web design, social media, and paid marketing solutions.
            </p>
            <p className="text-lg leading-8 text-[#50647f] mb-8">
              We build long-term partnerships by understanding your goals, using data to make smart decisions, and creating digital experiences that attract customers and grow revenue.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#0c62a9]/10 bg-[#f4fbff] p-5">
                <h3 className="text-xl font-semibold text-[#0c345e]">20+</h3>
                <p className="text-sm text-[#5f7d9c]">Projects delivered</p>
              </div>
              <div className="rounded-3xl border border-[#35d6b0]/10 bg-[#f3fff8] p-5">
                <h3 className="text-xl font-semibold text-[#0c345e]">Local Expertise</h3>
                <p className="text-sm text-[#5f7d9c]">Varanasi market and small business focused</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[520px] rounded-[32px] overflow-hidden shadow-[0_35px_80px_rgba(12,98,169,0.18)]"
          >
            <Image
              src="/image/about.jpg"
              alt="About MarketingHubb"
              width={900}
              height={700}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute left-6 top-6 rounded-3xl bg-white/90 px-5 py-4 shadow-lg shadow-slate-900/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#35d6b0] mb-2">Why choose us</p>
              <p className="text-lg font-semibold text-[#0c345e]">Fast support, real results, and transparent growth.</p>
            </div>
            <div className="absolute -bottom-10 right-6 h-24 w-24 rounded-full bg-[#35d6b0]/20 blur-2xl" />
            <div className="absolute top-24 left-8 h-16 w-16 rounded-full bg-[#0c62a9]/15 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
