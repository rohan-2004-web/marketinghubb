'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Kishan Chaubey',
    comment: 'Great experience with genuine SEO service in Varanasi. Professional team, good support, and noticeable improvement in my business visibility.',
  },
  {
    name: 'Anand Choubey',
    comment: 'Best digital marketing agency in Varanasi. Best company hai. MarketingHubb ne meri business growth mein bahut madad ki.',
  },
  {
    name: 'Akarsh Shrivastava',
    comment: 'SEO service in Varanasi, best agency. Maine website banwaya aur mujhe best website mila aur time se aur kam price mein. Thanks MarketingHubb.',
  },
  {
    name: 'Ankit Seth',
    comment: 'Best agency in Varanasi MarketingHubb. Maine ek website banwaya tha aur service best thi. Company ki thank you MarketingHubb.',
  },
  {
    name: 'Shubham Upadhyaya',
    comment: 'MarketingHubb is the best digital marketing agency in Varanasi. Great SEO results, fast support, and genuine business growth.',
  },
  {
    name: 'Enlive Trip',
    comment: 'Best digital marketing agency in Varanasi! MarketingHubb ne mere business ki online growth kaafi fast kar di. SEO aur ads dono mein great results mile.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#0c62a9] mb-2">CLIENT SUCCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c345e]">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-[#50647f] max-w-3xl mx-auto">
            Real reviews from business owners who trusted MarketingHubb for SEO, web design, and digital growth.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="min-w-[280px] max-w-xl snap-start rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_25px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center gap-2 mb-4 text-[#0c345e]">
                  <span className="rounded-full bg-[#0c62a9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">5.0</span>
                  <span className="text-sm font-semibold">Verified Review</span>
                </div>
                <p className="text-[#334155] text-base leading-8">“{item.comment}”</p>
                <p className="mt-6 text-sm font-semibold text-[#0c345e]">{item.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
