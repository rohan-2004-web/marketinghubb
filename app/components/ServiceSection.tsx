'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaChartLine, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className="text-4xl text-blue-600" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic.',
  },
  {
    icon: <FaBullhorn className="text-4xl text-green-600" />,
    title: 'Social Media Marketing',
    description: 'Engage your audience across all social media platforms.',
  },
  {
    icon: <FaChartLine className="text-4xl text-amber-600" />,
    title: 'PPC Advertising',
    description: 'Targeted pay-per-click campaigns for maximum ROI.',
  },
  {
    icon: <FaUsers className="text-4xl text-violet-600" />,
    title: 'Content Marketing',
    description: 'Create compelling content that converts visitors into customers.',
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored for your business success.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}