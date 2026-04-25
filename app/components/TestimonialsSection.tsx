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
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-950 via-[#031d3f] to-[#0e2b54]" id="testimonials">
      <div className="absolute -left-24 top-24 h-60 w-60 rounded-full bg-[#35d6b0]/15 blur-3xl" />
      <div className="absolute right-10 -bottom-16 h-56 w-56 rounded-full bg-[#0c62a9]/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-[#35d6b0] mb-2">CLIENT SUCCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Real reviews from business owners who trusted MarketingHubb for SEO, web design, and digital growth.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-500 hover:border-[#35d6b0]/40 hover:bg-white/10"
            >
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#35d6b0]/10 blur-2xl" />
              <div className="absolute -left-6 bottom-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="rounded-full bg-[#35d6b0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">5.0</span>
                  <div className="flex gap-1 text-amber-300">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <p className="text-slate-100 text-base leading-8">“{item.comment}”</p>
                <p className="mt-6 text-sm font-semibold text-white">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
