'use client';

import { motion } from 'framer-motion';

const upCities = [
  'Varanasi',
  'Lucknow',
  'Agra',
  'Kanpur',
  'Prayagraj',
  'Ghaziabad',
  'Noida',
  'Greater Noida',
  'Meerut',
  'Aligarh',
  'Moradabad',
  'Bareilly',
  'Gorakhpur',
  'Mathura',
  'Vrindavan',
  'Ayodhya',
  'Jhansi',
  'Saharanpur',
  'Muzaffarnagar',
  'Firozabad',
  'Hapur',
  'Rampur',
  'Shahjahanpur',
  'Azamgarh',
  'Mirzapur',
  'Bhadohi',
  'Jaunpur',
];

const otherStates = ['Delhi NCR', 'Maharashtra', 'Rajasthan', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Kerala'];

export default function LocationsSection() {
  return (
    <section className="py-20 bg-[#06172f] text-white" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.4em] text-[#2fe1b3] mb-3">OUR LOCATIONS</p>
          <h2 className="text-5xl font-extrabold text-white">
            WE SERVE <span className="text-[#2fe1b3]">28 CITIES</span> ACROSS INDIA
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            From metro cities to tier-2 towns — MarketingHubb delivers world-class digital marketing everywhere in India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid gap-8"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="h-12 w-12 rounded-2xl bg-[#2fe1b3]/10 flex items-center justify-center text-[#2fe1b3] text-xl">🏛️</div>
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7ee7ce]">Uttar Pradesh</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Trusted across the state</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upCities.map((city) => (
                <div key={city} className="rounded-3xl bg-slate-900/80 border border-white/10 px-5 py-4 text-center shadow-[0_25px_50px_rgba(15,23,42,0.12)]">
                  <p className="text-base font-semibold text-white">{city}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="h-12 w-12 rounded-2xl bg-[#2fe1b3]/10 flex items-center justify-center text-[#2fe1b3] text-xl">🌍</div>
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#7ee7ce]">In Other States</p>
                <h3 className="mt-2 text-2xl font-bold text-white">National coverage</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherStates.map((state) => (
                <div key={state} className="rounded-3xl bg-slate-900/80 border border-white/10 px-5 py-4 text-center shadow-[0_25px_50px_rgba(15,23,42,0.12)]">
                  <p className="text-base font-semibold text-white">{state}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
