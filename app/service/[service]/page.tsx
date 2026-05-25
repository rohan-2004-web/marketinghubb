import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const services = [
  {
    slug: 'seo-optimization',
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
    slug: 'social-media-marketing',
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
    slug: 'ppc-advertising',
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
    slug: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create compelling content that converts visitors into customers.',
    details: 'Blog strategy, copywriting, video scripts, lead magnets, and email sequences aligned with your funnel.',
    relatedTopics: [
      'Blog and article writing',
      'Video script creation',
      'Lead magnet development',
      'Email nurture sequences',
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
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
    slug: 'email-marketing',
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
  return services.find((service) => service.slug.toLowerCase() === normalizedSlug);
}

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
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

export default async function ServiceDetailsPage({ params }: { params: { service: string } }) {
  const service = await getService(params.service);

  if (!service) {
    notFound();
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

          {service.relatedTopics?.length ? (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Related Topics</h2>
              <ul className="space-y-3 text-slate-700 list-disc list-inside">
                {service.relatedTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ) : null}

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
