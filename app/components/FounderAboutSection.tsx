import Image from 'next/image';

export default function FounderAboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-3xl border-4 border-slate-800 overflow-hidden shadow-2xl">
                <Image
                  src="/image/founder image.jpeg"
                  alt="Saurabh Chaubey - Founder"
                  width={840}
                  height={1120}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                EST. 2024
              </div>
            </div>
          </div>

          <div className="space-y-6">
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

            <a
              href="https://wa.me/917307260253"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
            >
              Connect with founder
            </a>
            <p className="text-slate-600 text-sm">Available for strategy calls, brand consultations, and growth planning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
