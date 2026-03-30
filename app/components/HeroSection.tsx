'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best Digital Marketing Agency in Varanasi
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Boost your online presence with MarketingHubb&apos;s expert digital marketing services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}