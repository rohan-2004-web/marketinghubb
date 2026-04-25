import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] items-center rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.32)] ring-1 ring-slate-200/80">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-emerald-500/20 bg-slate-900 shadow-[0_30px_80px_-40px_rgba(32,40,60,0.6)]">
            <div className="aspect-[4/5] w-full">
              <Image
                src="/image/about.jpg"
                alt="Saurabh Chaubey"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute bottom-5 right-5 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-500/20">
              Est. 2024
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Meet our founder</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Saurabh <span className="text-emerald-600">Chaubey</span>
              </h2>
              <p className="mt-3 text-lg font-medium text-slate-600">Digital Marketing Manager</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                2 years experience
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                Leading growth since 2024
              </span>
            </div>

            <p className="max-w-xl text-base leading-8 text-slate-600">
              Saurabh Chaubey is a passionate digital marketing professional with hands-on experience in SEO, social media, and performance marketing. He founded MarketingHubb in 2024 with a vision to help Varanasi businesses grow online.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:saurabhcgoubey200@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Connect with founder
              </a>
              <p className="text-sm text-slate-500">
                Available for strategy calls, brand consultations, and growth planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
