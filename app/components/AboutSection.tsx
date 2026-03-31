'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About MarketingHubb
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              As the best digital marketing agency in Varanasi, MarketingHubb is dedicated to helping businesses thrive in the digital world. Our team of experts combines creativity with data-driven strategies to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600">
              We believe in building long-term partnerships with our clients, understanding their unique needs, and crafting customized solutions that drive growth and success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/image/about.jpg"
              alt="About MarketingHubb"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}