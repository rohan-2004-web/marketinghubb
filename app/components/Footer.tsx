import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#03111f] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#35d6b0]/10 text-[#35d6b0] font-semibold">M</div>
              <div>
                <p className="text-xl font-semibold text-white">MarketingHubb</p>
                <p className="text-sm text-slate-400">Digital marketing agency in Varanasi.</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-400 max-w-md">
              Helping brands grow with simple, measurable, and effective digital campaigns backed by local expertise.
            </p>
            <div className="flex items-center gap-3 text-slate-300">
              <a href="https://wa.me/917307260253" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12c0 2.105.547 4.116 1.585 5.9L0 24l6.35-1.633A11.921 11.921 0 0012 24c6.627 0 12-5.373 12-12 0-3.187-1.244-6.191-3.48-8.52zM12 22.068c-1.886 0-3.721-.502-5.29-1.432l-.377-.217-3.773.971.994-3.66-.245-.375A9.918 9.918 0 012.988 12c0-5.523 4.477-10 10-10 2.663 0 5.174 1.036 7.062 2.924A9.914 9.914 0 0122 12c0 5.523-4.477 10-10 10zm5.176-7.437c-.211-.105-1.245-.615-1.438-.684-.193-.07-.333-.105-.472.105-.139.211-.538.684-.659.823-.121.14-.242.158-.453.053-.211-.105-.89-.327-1.693-.958-.626-.558-1.048-1.248-1.172-1.458-.121-.211-.013-.325.094-.43.097-.096.211-.242.316-.363.105-.12.14-.211.21-.352.07-.14.035-.263-.018-.368-.053-.105-.472-1.138-.647-1.56-.171-.41-.345-.354-.472-.359-.121-.006-.263-.007-.404-.007-.14 0-.368.053-.56.263-.193.211-.736.72-.736 1.758 0 1.038.754 2.042.858 2.182.105.14 1.48 2.258 3.588 3.167.5.216.889.345 1.193.442.501.16.958.137 1.32.083.403-.06 1.245-.51 1.421-1.001.175-.49.175-.91.122-.999-.053-.092-.193-.14-.404-.246z" />
                </svg>
              </a>
              <a href="tel:+917307260253" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.052 15.052 0 006.59 6.59l2.2-2.2a1.001 1.001 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C9.16 21.5 2.5 14.84 2.5 6.5a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.76 3.88.14.31.075.67-.21.92l-2.2 2.2z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M22 2.01H2C.9 2.01 0 2.9 0 4.01v15.99C0 21.1.9 22 2 22h10.9v-7.01H9.69v-2.75h3.22V9.07c0-3.19 1.95-4.93 4.8-4.93 1.36 0 2.53.1 2.87.14v3.32h-1.96c-1.54 0-1.84.73-1.84 1.8v2.38h3.69l-.48 2.75h-3.21V22H22c1.1 0 2-.9 2-2V4.01c0-1.11-.9-2-2-2z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.428.403a4.88 4.88 0 011.675.983 4.88 4.88 0 01.983 1.675c.163.459.348 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.428a4.88 4.88 0 01-.983 1.675 4.88 4.88 0 01-1.675.983c-.459.163-1.258.348-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.428-.403a4.88 4.88 0 01-1.675-.983 4.88 4.88 0 01-.983-1.675c-.163-.459-.348-1.258-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.428a4.88 4.88 0 01.983-1.675 4.88 4.88 0 011.675-.983c.459-.163 1.258-.348 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.01-4.795.069-1.02.047-1.57.216-1.93.36a3.02 3.02 0 00-1.09.706 3.02 3.02 0 00-.706 1.09c-.144.36-.313.91-.36 1.93-.059 1.247-.069 1.625-.069 4.795s.01 3.548.069 4.795c.047 1.02.216 1.57.36 1.93.18.443.43.84.706 1.09.25.25.647.526 1.09.706.36.144.91.313 1.93.36 1.247.059 1.625.069 4.795.069s3.548-.01 4.795-.069c1.02-.047 1.57-.216 1.93-.36a3.02 3.02 0 001.09-.706 3.02 3.02 0 00.706-1.09c.144-.36.313-.91.36-1.93.059-1.247.069-1.625.069-4.795s-.01-3.548-.069-4.795c-.047-1.02-.216-1.57-.36-1.93a3.02 3.02 0 00-.706-1.09 3.02 3.02 0 00-1.09-.706c-.36-.144-.91-.313-1.93-.36-1.247-.059-1.625-.069-4.795-.069zm0 4.897a4.94 4.94 0 110 9.88 4.94 4.94 0 010-9.88zm0 1.838a3.102 3.102 0 100 6.204 3.102 3.102 0 000-6.204zm4.945-3.513a1.14 1.14 0 11-2.28 0 1.14 1.14 0 012.28 0z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#35d6b0]/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 2H3.55C2.68 2 2 2.68 2 3.55v16.9C2 21.32 2.68 22 3.55 22h16.9c.87 0 1.55-.68 1.55-1.55V3.55C22 2.68 21.32 2 20.45 2zm-12 16H5V9h3.45v9zm-1.73-10.3a2 2 0 110-4 2 2 0 010 4zm13.28 10.3h-3.45v-4.5c0-1.07-.02-2.45-1.5-2.45-1.51 0-1.74 1.18-1.74 2.4V18H9.55V9h3.31v1.22h.05c.46-.87 1.58-1.78 3.25-1.78 3.47 0 4.11 2.29 4.11 5.28V18z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#35d6b0]">Quick Links</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
              <li><Link href="/service" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#35d6b0]">Contact Info</p>
            <div className="text-sm text-slate-400 space-y-3">
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> Mahmoorganj Akashwani, Varanasi 221010</p>
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> <a href="tel:+917307260253" className="transition hover:text-white">+91 73072 60253</a></p>
              <p className="flex items-center gap-2"><span className="text-[#35d6b0]">•</span> <a href="mailto:saurabhcgoubey200@gmail.com" className="transition hover:text-white">saurabhcgoubey200@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MarketingHubb. Best Digital Marketing Agency in Varanasi.
        </div>
      </div>
    </footer>
  );
}
