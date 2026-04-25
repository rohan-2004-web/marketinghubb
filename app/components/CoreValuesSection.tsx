'use client';

import { motion } from 'framer-motion';

const coreValues = [
  { title: 'Strategy First', description: 'Data-driven plans tailored for measurable growth.' },
  { title: 'Creative Excellence', description: 'Brand-led visuals that connect emotionally.' },
  { title: 'Transparent Reporting', description: 'Weekly analytics updates and full performance clarity.' },
  { title: 'Customer Focus', description: 'Strong client relationships with 24/7 support.' },
  { title: 'Result-Driven', description: 'Conversion optimization is a growth priority.' },
  { title: 'Ethical Practices', description: 'White-hat techniques for long-term sustainability.' },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#f8fcff] to-[#e8f4ff] relative overflow-hidden" id="core-values">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(53,214,176,0.05),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(12,98,169,0.05),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#0c62a9] mb-2">OUR CORE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c345e] bg-gradient-to-r from-[#0c345e] to-[#0c62a9] bg-clip-text text-transparent">Our Core Values</h2>
          <p className="mt-4 text-lg text-[#50647f] max-w-3xl mx-auto">
            MarketingHubb is built on transparency, creativity, and sustained performance to help businesses win.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {coreValues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-white via-[#f8fcff] to-[#e8f4ff] p-6 shadow-[0_12px_25px_rgba(12,98,169,0.08)] hover:shadow-[0_20px_40px_rgba(12,98,169,0.15)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#35d6b0]/5 to-[#0c62a9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#0c345e] group-hover:text-[#0c62a9] transition-colors duration-300">{item.title}</h3>
                <p className="mt-2 text-[#50647f] group-hover:text-[#334155] transition-colors duration-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}