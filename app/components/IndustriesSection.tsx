const industries = [
  'E-commerce',
  'Healthcare',
  'Real Estate',
  'Education',
  'Restaurant',
  'Hotels',
  'Finance',
  'Legal',
  'Automotive',
  'Fashion',
  'Pharma',
  'Construction',
  'Technology',
  'Startups',
  'Manufacturing',
  'Travel',
  'Agriculture',
  'Fitness',
  'Entertainment',
  'Services',
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-[#031726] text-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#39d4b1] mb-3">INDUSTRIES</p>
          <h2 className="text-5xl md:text-6xl font-extrabold">
            DRIVING RESULTS ACROSS <span className="text-[#39d4b1]">EVERY INDUSTRY</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Our expertise spans 20+ industries with customized strategies for every business sector.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_50px_rgba(6,24,41,0.25)] backdrop-blur-xl">
              <p className="text-base font-semibold text-white">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
