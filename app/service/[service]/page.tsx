import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const services = [
  {
    slug: 'seo',
    aliases: ['seo-optimization', 'seoisko'],
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with our proven SEO strategies.',
    details: 'Keyword research, on-page optimization, technical SEO, backlink building, and local SEO for lasting growth.',
    relatedTopics: [
      'Local SEO for Varanasi businesses',
      'Technical SEO audits and fixes',
      'Keyword research and competitor analysis',
      'SEO content and backlink strategies',
    ],
  },
  {
    slug: 'smm',
    aliases: ['social-media-marketing'],
    title: 'Social Media Marketing',
    description: 'Engage your audience across all social media platforms and grow your brand awareness.',
    details: 'Content planning, community management, paid ads, and performance tracking on Facebook, Instagram, LinkedIn, and more.',
    relatedTopics: [
      'Instagram and Facebook advertising',
      'Organic social content calendars',
      'Influencer collaboration strategies',
      'Social media audience growth',
    ],
  },
  {
    slug: 'ppc',
    aliases: ['ppc-advertising'],
    title: 'PPC Advertising',
    description: 'Targeted pay-per-click campaigns for maximum ROI and qualified leads.',
    details: 'Campaign setup, keyword bidding, A/B landing page testing, and bid optimization on Google Ads and social networks.',
    relatedTopics: [
      'Google Ads campaign management',
      'Retargeting and conversion tracking',
      'Smart bidding and budget optimization',
      'Ad copy and landing page testing',
    ],
  },
  {
    slug: 'website',
    aliases: ['web-design'],
    title: 'Website Design',
    description: 'Beautiful, responsive websites designed to convert visitors into clients.',
    details: 'UI/UX design, performance optimization, mobile-first experiences, and CMS implementation.',
    relatedTopics: [
      'Responsive UX design',
      'Conversion-focused landing pages',
      'Website speed optimization',
      'CMS and website maintenance',
    ],
  },
  {
    slug: 'graphic',
    aliases: ['graphic-design'],
    title: 'Graphic Design',
    description: 'Creative graphic design services for logos, branding, social media, and marketing collateral.',
    details: 'Brand identity design, logo creation, social media graphics, brochures, and print materials that boost credibility.',
    relatedTopics: [
      'Brand identity and logo design',
      'Social media graphics and ads',
      'Brochure and flyer design',
      'Visual brand consistency',
    ],
  },
  {
    slug: 'email',
    aliases: ['email-marketing'],
    title: 'Email Marketing',
    description: 'Nurture and retain leads with engaging email campaigns and automation.',
    details: 'Newsletter design, drip campaigns, segmentation, and analytics to increase open rates and conversions.',
    relatedTopics: [
      'Automated email workflows',
      'Subscriber segmentation',
      'Email subject line optimization',
      'Campaign performance reporting',
    ],
  },
];

export const dynamicParams = false;

async function getService(slug: string) {
  const normalizedSlug = String(slug).toLowerCase();
  return services.find((service) => {
    return (
      service.slug.toLowerCase() === normalizedSlug ||
      service.aliases?.some((alias) => alias.toLowerCase() === normalizedSlug)
    );
  });
}

export async function generateStaticParams() {
  return services.flatMap((service) => [
    { service: service.slug },
    ...(service.aliases?.map((alias) => ({ service: alias })) ?? []),
  ]);
}

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = await getService(params.service);

  if (!service) {
    return {
      title: 'Service Not Found | MarketingHubb',
      description: 'The requested service could not be found. Explore other digital marketing services in Varanasi with MarketingHubb.',
      alternates: { canonical: 'https://www.marketinghubb.in/service' },
    };
  }

  return {
    title: `${service.title} | MarketingHubb`,
    description: `${service.description} Discover the best digital marketing agency in Varanasi for ${service.title}.`,
    keywords: [
      'best digital marketing agency in varanasi',
      `${service.title.toLowerCase()} in varanasi`,
      'seo service in varanasi',
    ],
    alternates: {
      canonical: `https://www.marketinghubb.in/service/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | MarketingHubb`,
      description: `${service.description} Discover the best digital marketing agency in Varanasi for ${service.title}.`,
      url: `https://www.marketinghubb.in/service/${service.slug}`,
      siteName: 'MarketingHubb',
      type: 'website',
      locale: 'en_IN',
    },
  };
}

function SEOServicePageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-12 text-white shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300 mb-4">SEO Services</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Professional SEO Services for Varanasi Businesses</h2>
            <p className="text-lg leading-8 text-slate-200">
              At MarketingHubb, we deliver SEO strategies that drive long-term growth, higher rankings, and more qualified leads. Our focus is on local visibility, organic traffic, and measurable business outcomes.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-700 bg-slate-950/80 p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Our promise</p>
            <ul className="space-y-4 text-slate-200">
              <li>Transparent SEO reporting every month</li>
              <li>Local SEO optimized for Varanasi search intent</li>
              <li>Improved rankings for service and brand keywords</li>
              <li>SEO built for traffic, leads, and conversions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'SEO Audit & Strategy',
            text: 'We analyze your website, competitors, and search landscape to create a tailored SEO roadmap that targets your highest-value opportunities.',
          },
          {
            title: 'On-Page Optimization',
            text: 'Content, meta tags, page speed, and structure are optimized for both users and search engines so your site can rank consistently.',
          },
          {
            title: 'Local SEO Growth',
            text: 'We strengthen your local presence with Google Business Profile optimization, local keyword targeting, and review management for Varanasi searches.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0c62a9]">What we do</p>
          <h3 className="text-3xl font-bold text-slate-900">SEO Services Tailored for Local and National Growth</h3>
          <p className="text-slate-600 leading-8">
            MarketingHubb helps businesses in Varanasi and across India rank higher in search results. We combine technical audits, content optimization, and outreach to build sustainable organic search performance.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Keyword research & intent mapping',
              'SEO-friendly website architecture',
              'Content optimization & page copy',
              'Authority building with backlinks',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-slate-900 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <h3 className="text-3xl font-semibold text-slate-900 mb-6">How Our SEO Process Works</h3>
          <ol className="space-y-6">
            {[
              {
                step: '01',
                title: 'Discovery & Audit',
                text: 'We review your website, competitors, and local market to uncover quick wins and long-term SEO opportunities.',
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                text: 'We choose the right keywords, content topics, and technical improvements for sustainable growth.',
              },
              {
                step: '03',
                title: 'Execution & Optimization',
                text: 'Our team implements on-page, technical, and local SEO improvements while monitoring performance closely.',
              },
              {
                step: '04',
                title: 'Reporting & Growth',
                text: 'We deliver clear reports, show progress, and refine the plan to scale organic leads and traffic.',
              },
            ].map((item) => (
              <li key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold">{item.step}</div>
                  <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#0c62a9] mb-4">Local SEO</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Built for Varanasi searchers</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Local buyers search with place names, services, and urgency. We optimize your Google Business Profile, local landing pages, and citation signals so your business appears first for nearby customers.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li>Local keyword targeting for Varanasi and nearby areas</li>
              <li>Google Business Profile optimization</li>
              <li>Review and reputation support</li>
              <li>Location-specific service page optimization</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0c62a9] mb-4">What you get</p>
            <div className="space-y-4 text-slate-700">
              <p className="font-semibold text-slate-900">Higher local visibility</p>
              <p>More people finding you on Google Search, Maps, and local directories.</p>
              <p className="font-semibold text-slate-900">Better lead quality</p>
              <p>Customers who are actively searching for your service in Varanasi.</p>
              <p className="font-semibold text-slate-900">Sustained growth</p>
              <p>Designing SEO with long-term results, not short-lived traffic spikes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#f8fdff] via-white to-[#f2f8ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Why choose MarketingHubb for your SEO?</h3>
            <p className="text-slate-600 leading-8 mb-6">
              We blend local know-how, technical expertise, and content strategy to build SEO campaigns that attract visitors and convert them into customers.
            </p>
            <ul className="space-y-4 text-slate-700">
              <li>Experienced team focused on measurable ROI</li>
              <li>Clear reporting and communication every month</li>
              <li>SEO plans aligned with your business goals</li>
              <li>Proven success with local brands and service providers</li>
            </ul>
          </div>
          <div className="rounded-[28px] bg-white p-8 shadow-sm border border-slate-200">
            <p className="text-sm uppercase tracking-[0.32em] text-[#0c62a9] mb-4">Ready to grow?</p>
            <p className="text-slate-700 leading-7 mb-6">
              Click below to schedule a free SEO consultation and see how MarketingHubb can help your business rank higher in Varanasi and beyond.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start Your SEO Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialMediaPageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-600 mb-4">Social Media Marketing</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Grow your brand with social media campaigns</h2>
            <p className="text-lg leading-8 text-slate-700">
              MarketingHubb builds social strategies that engage audiences, tell your brand story, and drive meaningful actions across Instagram, Facebook, LinkedIn, and more.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 mb-4">What we deliver</p>
            <ul className="space-y-4 text-slate-700">
              <li>Content calendars that keep your brand active and relevant</li>
              <li>Targeted ad campaigns for leads and conversions</li>
              <li>Community growth and engagement management</li>
              <li>Data-driven performance optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'Audience Growth',
            text: 'We help you find and grow the right audience with hashtag strategy, community building, and paid reach.',
          },
          {
            title: 'Creative Content',
            text: 'Engaging posts, reels, and ads that build brand recall and drive interactions.',
          },
          {
            title: 'Performance Tracking',
            text: 'Real-time reporting that measures engagement, leads, and campaign ROI.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Social media strategies for consistent growth</h3>
          <p className="text-slate-600 leading-8">
            From daily engagement to paid campaigns, our social media services are designed to increase brand awareness, nurture leads, and position your business as a trusted choice in Varanasi.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Content planning and storytelling</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Paid ads with optimized audience targeting</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Community management and customer responses</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Analytics and campaign optimization</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#effcff] to-[#f8f9ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Ready to amplify your social presence?</h3>
            <p className="text-slate-600 leading-8">
              We turn your social profiles into lead-generating channels with content, ads, and audience growth strategies that keep your business top of mind.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-600 mb-4">Let’s connect</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start Social Media Growth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PPCServicePageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] bg-gradient-to-r from-blue-900 via-blue-800 to-slate-950 p-12 text-white shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300 mb-4">PPC Advertising</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Targeted PPC campaigns for fast results</h2>
            <p className="text-lg leading-8 text-slate-200">
              MarketingHubb creates PPC campaigns that reach buyers when they are ready to act, reducing wasted spend and improving conversions for Varanasi businesses.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-700 bg-slate-950/80 p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">Our PPC edge</p>
            <ul className="space-y-4 text-slate-200">
              <li>Smart bidding and audience targeting</li>
              <li>Ad copy and landing page optimization</li>
              <li>Conversion tracking and ROI reporting</li>
              <li>Google Ads, Facebook, and LinkedIn campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'Campaign Setup',
            text: 'We build campaigns with the right keywords, audiences, and conversion goals so every rupee works harder.',
          },
          {
            title: 'Creative Optimization',
            text: 'Data-driven ad copy, images, and CTAs that improve click-through rates and lower cost per lead.',
          },
          {
            title: 'Performance Monitoring',
            text: 'We continuously test bids, placements, and landing pages to maximize your campaign ROI.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">PPC campaigns built for measurable growth</h3>
          <p className="text-slate-600 leading-8">
            We focus on targeting, creative, and conversions to deliver PPC campaigns that drive traffic, leads, and sales without wasting budget.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Keyword and audience research</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Ad testing and optimization</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Landing page and funnel improvements</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Analytics and conversion tracking</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#eff6ff] via-white to-[#eef4ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Ready to start high-impact PPC?</h3>
            <p className="text-slate-600 leading-8">
              Our PPC experts set up, optimize, and scale campaigns that attract ready-to-buy customers for your business.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700 mb-4">Get started</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start PPC Campaigns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function WebsiteDesignPageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 mb-4">Website Design</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Beautiful websites that convert visitors into customers</h2>
            <p className="text-lg leading-8 text-slate-700">
              We design responsive websites with strong branding, intuitive navigation, and fast performance to help your business stand out online.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-700 mb-4">Design focus</p>
            <ul className="space-y-4 text-slate-700">
              <li>Mobile-first UI/UX design</li>
              <li>Conversion-focused layout and copy</li>
              <li>Speed and accessibility optimization</li>
              <li>CMS-ready pages for easy updates</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'Brand-focused design',
            text: 'We create visuals and experiences that reflect your brand values and build trust with visitors.',
          },
          {
            title: 'Conversion-first pages',
            text: 'Every page is crafted to guide users toward contact, quote requests, or sales.',
          },
          {
            title: 'Fast and responsive',
            text: 'Websites built to load quickly and perform well on desktop and mobile.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Web design with performance built in</h3>
          <p className="text-slate-600 leading-8">
            We help businesses convert more visitors with better page structure, clear messaging, and fast page delivery.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">High-converting landing pages</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Modern brand visuals and UX</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Responsive mobile-first layouts</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">CMS and maintenance support</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#fff8f0] via-white to-[#f5f7ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Need a website that works harder?</h3>
            <p className="text-slate-600 leading-8">
              Whether you need a new site or a redesign, our team creates digital experiences that build credibility and drive leads.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-700 mb-4">Build your site</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start Website Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function GraphicDesignPageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-violet-600 mb-4">Graphic Design</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Creative design that brings your brand to life</h2>
            <p className="text-lg leading-8 text-slate-700">
              From branding to marketing assets, MarketingHubb delivers graphic design that helps your business make a memorable first impression.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-600 mb-4">Design expertise</p>
            <ul className="space-y-4 text-slate-700">
              <li>Brand identity and logo creation</li>
              <li>Social media and ad creatives</li>
              <li>Brochures, flyers and print-ready design</li>
              <li>Marketing collateral aligned with your goals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'Logo & branding',
            text: 'Professional identity design that reflects your business personality and builds trust.',
          },
          {
            title: 'Marketing creatives',
            text: 'Eye-catching visuals for ads, social media, and print campaigns.',
          },
          {
            title: 'Brand consistency',
            text: 'Design systems that keep your visuals strong across every customer touchpoint.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Design that supports your marketing goals</h3>
          <p className="text-slate-600 leading-8">
            Great design does more than look good. It communicates value, builds trust, and motivates customers to take action.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Brand and logo identity</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Social media post creatives</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Print and digital marketing assets</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Packaging and collateral design</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#fbf5ff] via-white to-[#eef4ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Want visuals that make an impact?</h3>
            <p className="text-slate-600 leading-8">
              We create brand identities and marketing assets that help your business stand out in a crowded marketplace.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-violet-600 mb-4">Design your brand</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start Graphic Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function EmailMarketingPageContent() {
  return (
    <div className="space-y-16 mt-10">
      <section className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700 mb-4">Email Marketing</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-6">Email campaigns that nurture and convert</h2>
            <p className="text-lg leading-8 text-slate-700">
              Build lasting relationships with customers through targeted email campaigns, automation, and content that keeps your brand top of mind.
            </p>
          </div>
          <div className="rounded-[28px] bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-700 mb-4">Email services</p>
            <ul className="space-y-4 text-slate-700">
              <li>Newsletter strategy and automation</li>
              <li>Subscriber segmentation and personalization</li>
              <li>Campaign analytics and optimization</li>
              <li>High-converting email design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'List Growth',
            text: 'We help you grow and segment your audience so your emails reach the right people with the right message.',
          },
          {
            title: 'Campaign Automation',
            text: 'Personalized drip campaigns and follow-ups that move subscribers through your sales journey.',
          },
          {
            title: 'Open & Click Optimization',
            text: 'Compelling subject lines, previews, and CTAs that improve open rates and engagement.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Email marketing that keeps customers engaged</h3>
          <p className="text-slate-600 leading-8">
            From newsletters to automated campaigns, we help you communicate with customers at the right time to increase retention and sales.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Personalized email journeys</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Welcome and nurture sequences</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">High-converting email layouts</li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5">Performance tracking and reporting</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-[#f0fcff] via-white to-[#eef8ff] border border-slate-200 p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Ready to start email campaigns that convert?</h3>
            <p className="text-slate-600 leading-8">
              Our email marketing strategies help you stay connected with customers and generate repeat business.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-slate-200 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700 mb-4">Let's launch</p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700">
              Start Email Marketing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function renderServicePageContent(service: { slug: string }) {
  switch (service.slug) {
    case 'seo':
      return <SEOServicePageContent />;
    case 'smm':
      return <SocialMediaPageContent />;
    case 'ppc':
      return <PPCServicePageContent />;
    case 'website':
      return <WebsiteDesignPageContent />;
    case 'graphic':
      return <GraphicDesignPageContent />;
    case 'email':
      return <EmailMarketingPageContent />;
    default:
      return (
        <div className="bg-white rounded-2xl shadow-lg p-10 mt-10">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Related Topics</h2>
            <p className="text-slate-700">Learn more about our service and how we can help your business grow.</p>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-semibold hover:from-blue-700 hover:to-cyan-600">
              Contact Us
            </Link>
          </div>
        </div>
      );
  }
}

export default async function ServiceDetailsPage({ params }: { params: { service: string } }) {
  const service = await getService(params.service);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-8 lg:px-10">
        <Link href="/service" className="text-blue-600 font-medium hover:text-blue-800 mb-8 inline-block">
          ← Back to All Services
        </Link>

        <div className="rounded-[32px] border border-slate-200 bg-white p-12 shadow-xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600 mb-4">{service.title}</p>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">{service.title} by MarketingHubb</h1>
            <p className="text-xl leading-8 text-slate-700 mb-6">{service.description}</p>
            <p className="text-base leading-8 text-slate-600">{service.details}</p>
          </div>
        </div>

        {renderServicePageContent(service)}
      </div>
    </div>
  );
}
