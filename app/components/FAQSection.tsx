'use client';

import { motion } from 'framer-motion';

const faqItems = [
  { q: 'What services does MarketingHubb provide?', a: 'We offer SEO, social media management, PPC, content marketing, web design, email campaigns and analytics-driven strategies.' },
  { q: 'How do I get started with your agency?', a: 'Reach out via contact form or call/WhatsApp icon, then we schedule a free strategy consultation.' },
  { q: 'Can you support small local businesses?', a: 'Absolutely — we specialize in local SEO and hyperlocal marketing for small to mid-sized businesses.' },
  { q: 'Will you share performance reports?', a: 'Yes, we provide monthly and weekly reports that cover KPIs, traffic, conversions, and improvement steps.' },
  { q: 'Do you work with budgets of all sizes?', a: 'We tailor plans for different budgets and help maximize ROI at every investment level.' },
  { q: 'How quickly can I expect results?', a: 'PPC results can be immediate; organic growth (SEO) takes 2–6 months depending on competitiveness.' },
  { q: 'Do you provide custom website design?', a: 'Yes, our web design team builds conversion-focused sites with responsive design and fast performance.' },
  { q: 'Are your marketing practices compliant?', a: 'We use white-hat strategies only and align with advertising platform policies to protect your account.' },
  { q: 'Can I continue with my existing marketing vendor?', a: 'Yes, we can collaborate or transition smoothly while minimizing disruption to campaigns.' },
  { q: 'Do you provide campaign onboarding support?', a: 'Yes, each client gets a dedicated onboarding specialist and strategy roadmap.' },
  { q: 'How do you set pricing?', a: 'Pricing is based on scope, channels, and objectives, and we provide a clear proposal before work begins.' },
  { q: 'Is MarketingHubb available outside Varanasi?', a: 'Yes, we serve clients across India and internationally with remote and hybrid engagement models.' },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-[#e9f5ff]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#0b69a3] mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f3b68]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[#496a86] max-w-3xl mx-auto">
            Everything you need to know before partnering with MarketingHubb.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-xl bg-white p-6 border border-[#dbe8f5] shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#0f3b68]">{item.q}</h3>
              <p className="mt-2 text-[#537a9a]">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}