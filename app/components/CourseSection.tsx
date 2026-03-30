'use client';

import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaCertificate } from 'react-icons/fa';

const courses = [
  {
    icon: <FaBook className="text-4xl text-blue-600" />,
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the basics of digital marketing from SEO to social media.',
  },
  {
    icon: <FaVideo className="text-4xl text-green-600" />,
    title: 'Advanced PPC Strategies',
    description: 'Master pay-per-click advertising for maximum ROI.',
  },
  {
    icon: <FaCertificate className="text-4xl text-amber-600" />,
    title: 'Content Marketing Mastery',
    description: 'Create compelling content that drives engagement and conversions.',
  },
];

export default function CourseSection() {
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
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our comprehensive digital marketing courses.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}