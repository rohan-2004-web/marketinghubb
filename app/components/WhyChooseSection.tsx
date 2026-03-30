'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Proven Results',
    description: '100+ brands grown and 500+ campaigns delivered with measurable ROI.',
  },
  {
    title: 'Local Expertise',
    description: "Deep Varanasi market knowledge with national strategy execution.",
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees, clear timelines, and accountable spending.',
  },
  {
    title: '360° Digital Services',
    description: 'All-in-one SEO, social, PPC, web design, and email solutions.',
  },
  {
    title: 'Data-Driven Approach',
    description: 'Decisions powered by real-time analytics and A/B testing.',
  },
  {
    title: 'Dedicated Support',
    description: 'Personal account manager on every project for rapid response.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-[#ebf8ff]" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#0f7db1] mb-2">REASONS TO PARTNER WITH US</p>
          <h2 className="text-5xl font-extrabold text-[#0d3f68]">
            WHY CHOOSE <span className="text-[#37d5a8]">MARKETINGHUBB</span>?
          </h2>
          <p className="mt-4 text-lg text-[#4b6c8e] max-w-3xl mx-auto">
            We don’t just run campaigns — we build partnerships, drive growth, and deliver results that impact your bottom line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.07 }}
              className="rounded-2xl bg-[#082443] p-6 border border-[#0f4c73] shadow-[0_20px_40px_rgba(9,22,58,0.3)]"
            >
              <h3 className="text-2xl font-bold text-[#64e8ca] mb-2">{item.title}</h3>
              <p className="text-[#b5d8f0]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}