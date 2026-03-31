'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <motion.a
        href="https://wa.me/917307260253"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
      <motion.a
        href="tel:+917307260253"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhone size={24} />
      </motion.a>
    </div>
  );
}