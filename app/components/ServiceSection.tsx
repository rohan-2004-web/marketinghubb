'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaChartLine, FaUsers, FaDesktop, FaEnvelope } from 'react-icons/fa';

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
  {
    icon: <FaDesktop className="text-4xl text-cyan-500" />,
    title: 'Web Design',
    description: 'Beautiful, responsive websites designed to convert visitors into clients.',
  },
  {
    icon: <FaEnvelope className="text-4xl text-pink-500" />,
    title: 'Email Marketing',
    description: 'Nurture and retain leads with engaging email campaigns and automation.',
  },
];

export default function ServiceSection() {
  return (
    <section className="py-24 bg-[#f4fcff] relative overflow-hidden" id="services">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_30%,rgba(56,202,165,0.25),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(33,150,243,0.2),transparent_42%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest text-[#2F7065] mb-3">WHAT WE DO</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0f2d4a] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-[#56667f] max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored for growth in the Indian market and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-2xl border border-[#cde5f9] bg-gradient-to-br from-[#0f3354] to-[#0b2c4f] p-8 shadow-[0_25px_45px_rgba(5,21,61,0.22)]"
            >
              <div className="mb-5 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-[#0d4c7f] text-[#2fd8ba] shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#c6dbf6] mb-6">{service.description}</p>
              <a className="inline-flex items-center gap-2 text-[#2fd8ba] font-semibold" href="#contact">
                Learn More <span className="text-xl">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}