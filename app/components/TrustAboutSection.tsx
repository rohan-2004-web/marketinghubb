'use client';

import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), { ssr: false });

export default function TrustAboutSection() {
  const trustPoints = [
    {
      title: '2+ years serving Varanasi and national clients',
      icon: '🏢',
    },
    {
      title: '100+ successful digital campaigns',
      icon: '🎯',
    },
    {
      title: '5x average ROI for paid campaigns',
      icon: '📈',
    },
    {
      title: 'Google & Meta certified experts',
      icon: '✓',
    },
    {
      title: 'Proven local SEO domination strategy',
      icon: '🔍',
    },
    {
      title: 'Dedicated account manager with each project',
      icon: '👤',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-4">WHY TRUST MARKETINGHUBB</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Brands Across India
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver transparency, steady growth and accountability at every step from launch to scaling.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{point.icon}</span>
                <p className="font-semibold text-lg text-slate-900">{point.title}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
