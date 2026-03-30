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
    <section className="py-20 bg-white" id="core-values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#0c62a9] mb-2">OUR CORE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c345e]">Our Core Values</h2>
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
              className="rounded-2xl border border-[#e5f2ff] bg-gradient-to-br from-[#f8fdff] to-[#edf8ff] p-6 shadow-[0_12px_25px_rgba(61,104,157,0.15)]"
            >
              <h3 className="text-xl font-bold text-[#094b85]">{item.title}</h3>
              <p className="mt-2 text-[#5e738f]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}