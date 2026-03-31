'use client';

import { motion } from 'framer-motion';

const trustItems = [
  '2+ years serving Varanasi and national clients',
  '100+ successful digital campaigns',
  '5x average ROI for paid campaigns',
  'Google & Meta certified experts',
  'Proven local SEO domination strategy',
  'Dedicated account manager with each project',
];

export default function WhyTrustSection() {
  return (
    <section className="py-20 bg-[#f7fbff]" id="why-trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#0f7db1] mb-2">WHY TRUST MARKETINGHUBB</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d3652]">Trusted by Brands Across India</h2>
          <p className="mt-4 text-lg text-[#5a728a] max-w-3xl mx-auto">
            We deliver transparency, steady growth and accountability at every step from launch to scaling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustItems.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-xl border-l-4 border-[#0f7db1] bg-white p-5 shadow-sm"
            >
              <p className="text-[#1f415d] text-lg font-semibold">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}