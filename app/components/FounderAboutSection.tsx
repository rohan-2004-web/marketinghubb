'use client';

import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((m) => m.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then((m) => m.motion.button), { ssr: false });

export default function FounderAboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Image */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-3xl border-4 border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src="/image/founder.jpg"
                  alt="Saurabh Chaubey - Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                EST. 2024
              </div>
            </div>
          </MotionDiv>

          {/* Founder Info */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">MEET OUR FOUNDER</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Saurabh <span className="text-emerald-600">Chaubey</span>
              </h2>
              <p className="text-xl text-slate-600 mt-2">Digital Marketing Manager</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                <span className="text-emerald-700 font-semibold">2 years experience</span>
              </div>
              <div className="bg-slate-900 text-white rounded-full px-4 py-2">
                <span className="font-semibold">Leading growth since 2024</span>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">
              Saurabh Chaubey is a passionate digital marketing professional with hands-on experience in SEO, social media, and performance marketing. He founded MarketingHubb in 2024 with a vision to help Varanasi businesses grow online.
            </p>

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'https://wa.me/917307260253'}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 cursor-pointer"
            >
              Connect with founder
            </MotionButton>
            <p className="text-slate-600 text-sm">Available for strategy calls, brand consultations, and growth planning.</p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
