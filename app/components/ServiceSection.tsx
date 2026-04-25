'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaChartLine, FaUsers, FaDesktop, FaEnvelope } from 'react-icons/fa';

const services = [
  {
    slug: 'seo-optimization',
    icon: <FaSearch className="text-4xl text-[#35d6b0]" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with focused SEO strategies.',
  },
  {
    slug: 'social-media-marketing',
    icon: <FaBullhorn className="text-4xl text-[#35d6b0]" />,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engagement through powerful social media campaigns.',
  },
  {
    slug: 'ppc-advertising',
    icon: <FaChartLine className="text-4xl text-[#35d6b0]" />,
    title: 'PPC Advertising',
    description: 'Capture instant leads with targeted pay-per-click campaigns on Google and social platforms.',
  },
  {
    slug: 'content-marketing',
    icon: <FaUsers className="text-4xl text-[#35d6b0]" />,
    title: 'Content Marketing',
    description: 'Convert visitors into customers with compelling content and storytelling that sells.',
  },
  {
    slug: 'web-design',
    icon: <FaDesktop className="text-4xl text-[#35d6b0]" />,
    title: 'Web Design',
    description: 'Craft responsive, high-converting websites that reflect your brand and build trust.',
  },
  {
    slug: 'email-marketing',
    icon: <FaEnvelope className="text-4xl text-[#35d6b0]" />,
    title: 'Email Marketing',
    description: 'Retain customers and boost sales with smart email campaigns and automation.',
  },
];

export default function ServiceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fcff] via-[#eef4ff] to-[#d4e9ff] relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(53,214,176,0.1),transparent_50%),radial-gradient(circle_at_85%_20%,rgba(12,98,169,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest text-[#0c62a9] mb-3">WHAT WE DO</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0c345e] mb-4 bg-gradient-to-r from-[#0c345e] to-[#0c62a9] bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <p className="text-lg text-[#50647f] max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored for growth in the Indian market and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/80 bg-white/95 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_35px_80px_rgba(15,23,42,0.14)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#35d6b0]/10 to-[#0c62a9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center justify-center h-16 w-16 rounded-3xl bg-[#eef9ff] text-[#35d6b0] shadow-lg shadow-[#35d6b0]/10 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0c345e] mb-3 group-hover:text-[#0c62a9] transition-colors duration-300">{service.title}</h3>
                <p className="text-[#50647f] mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={`/service/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0c62a9] font-semibold hover:text-[#35d6b0] transition-colors duration-300"
                >
                  Explore <span className="text-xl">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
