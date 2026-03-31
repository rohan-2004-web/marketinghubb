import Link from 'next/link';

const services = [
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with our proven SEO strategies.',
    details: 'Keyword research, on-page optimization, technical SEO, backlink building, and local SEO for lasting growth.',
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Engage your audience across all social media platforms and grow your brand awareness.',
    details: 'Content planning, community management, paid ads, and performance tracking on Facebook, Instagram, LinkedIn, and more.',
  },
  {
    slug: 'ppc-advertising',
    title: 'PPC Advertising',
    description: 'Targeted pay-per-click campaigns for maximum ROI and qualified leads.',
    details: 'Campaign setup, keyword bidding, A/B landing page testing, and bid optimization on Google Ads and social networks.',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create compelling content that converts visitors into customers.',
    details: 'Blog strategy, copywriting, video scripts, lead magnets, and email sequences aligned with your funnel.',
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    description: 'Beautiful, responsive websites designed to convert visitors into clients.',
    details: 'UI/UX design, performance optimization, mobile-first experiences, and CMS implementation.',
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    description: 'Nurture and retain leads with engaging email campaigns and automation.',
    details: 'Newsletter design, drip campaigns, segmentation, and analytics to increase open rates and conversions.',
  },
];

async function getService(slug: string) {
  return services.find(service => service.slug === slug);
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export default async function ServiceDetailsPage({ params }: { params: { service: string } }) {
  const service = await getService(params.service);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100">
        <div className="max-w-xl text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we cannot find the service you are looking for.</p>
          <Link href="/service" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="max-w-5xl mx-auto py-20 px-6 sm:px-8 lg:px-10">
        <Link href="/service" className="text-blue-600 font-medium hover:text-blue-800 mb-8 inline-block">
          ← Back to All Services
        </Link>
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{service.description}</p>
          <div className="text-gray-600 leading-relaxed text-lg">{service.details}</div>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-semibold hover:from-blue-700 hover:to-cyan-600">
              Contact Us for {service.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
