import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const serviceContent: Record<string, any> = {
  seo: {
    title: 'SEO Optimization Services in Varanasi | MarketingHubb',
    description: 'Improve your search engine rankings and drive organic traffic with focused SEO strategies. Expert SEO services for local and national businesses in Varanasi.',
    longTitle: 'SEO Optimization',
    icon: '🔎',
    shortDescription: 'Improve your search engine rankings and drive organic traffic with focused SEO strategies.',
    fullDescription: 'Our comprehensive SEO services are designed to boost your online visibility and drive qualified organic traffic to your website. We combine technical expertise, content optimization, and strategic link building to achieve sustainable results.',
    benefits: [
      'Increased organic traffic and qualified leads',
      'Higher search engine rankings for target keywords',
      'Improved website authority and domain credibility',
      'Better user experience and site performance',
      'Long-term sustainable growth',
      'Detailed monthly reporting and analytics'
    ],
    services: [
      {
        name: 'On-Page SEO',
        description: 'Optimize your website content, meta tags, and HTML structure for search engines.'
      },
      {
        name: 'Technical SEO',
        description: 'Improve site speed, mobile responsiveness, and technical health.'
      },
      {
        name: 'Link Building',
        description: 'Build high-quality backlinks to increase domain authority.'
      },
      {
        name: 'Keyword Research',
        description: 'Identify and target the right keywords for your business.'
      },
      {
        name: 'Content Optimization',
        description: 'Create SEO-friendly content that ranks and converts.'
      },
      {
        name: 'Local SEO',
        description: 'Dominate local search results in Varanasi and surrounding areas.'
      }
    ]
  },
  smm: {
    title: 'Social Media Marketing Services in Varanasi | MarketingHubb',
    description: 'Build brand awareness and engagement through powerful social media campaigns.',
    longTitle: 'Social Media Marketing',
    icon: '📢',
    shortDescription: 'Build brand awareness and engagement through powerful social media campaigns.',
    fullDescription: 'Connect with your audience on Facebook, Instagram, Twitter, LinkedIn, and YouTube. Our social media experts create engaging content and campaigns that build brand loyalty and drive conversions.',
    benefits: [
      'Increased brand awareness and reach',
      'Higher engagement rates',
      'Growing community of loyal followers',
      'Cost-effective customer acquisition',
      'Real-time customer interaction',
      'Data-driven campaign optimization'
    ],
    services: [
      {
        name: 'Social Media Strategy',
        description: 'Develop a comprehensive strategy tailored to your business goals.'
      },
      {
        name: 'Content Creation',
        description: 'Create engaging, shareable content for all platforms.'
      },
      {
        name: 'Community Management',
        description: 'Engage with your audience and build relationships.'
      },
      {
        name: 'Paid Social Campaigns',
        description: 'Run targeted ads on Facebook, Instagram, and LinkedIn.'
      },
      {
        name: 'Influencer Collaboration',
        description: 'Partner with influencers to amplify your message.'
      },
      {
        name: 'Social Analytics',
        description: 'Track performance and optimize your campaigns.'
      }
    ]
  },
  ppc: {
    title: 'PPC Advertising Services in Varanasi | MarketingHubb',
    description: 'Capture instant leads with targeted pay-per-click campaigns on Google and social platforms.',
    longTitle: 'PPC Advertising',
    icon: '📈',
    shortDescription: 'Capture instant leads with targeted pay-per-click campaigns.',
    fullDescription: 'Get instant visibility with Google Ads, Bing Ads, and social media advertising. Our PPC experts create highly targeted campaigns that deliver immediate results and maximize your ROI.',
    benefits: [
      'Instant visibility and immediate results',
      'Highly targeted audience reach',
      'Cost-effective customer acquisition',
      'Measurable ROI on ad spend',
      'Flexible budget control',
      'Quick campaign optimization'
    ],
    services: [
      {
        name: 'Google Ads Management',
        description: 'Create and manage high-converting Google Ads campaigns.'
      },
      {
        name: 'Search Ads',
        description: 'Target users actively searching for your products/services.'
      },
      {
        name: 'Display Ads',
        description: 'Build brand awareness with display network campaigns.'
      },
      {
        name: 'Remarketing',
        description: 'Re-engage visitors who left your website.'
      },
      {
        name: 'Social Ads',
        description: 'Run targeted ads on Facebook, Instagram, and LinkedIn.'
      },
      {
        name: 'Landing Page Optimization',
        description: 'Optimize landing pages for maximum conversions.'
      }
    ]
  },
  website: {
    title: 'Website Design Services in Varanasi | MarketingHubb',
    description: 'Craft responsive, high-converting websites that reflect your brand and build trust.',
    longTitle: 'Website Design & Development',
    icon: '🖥️',
    shortDescription: 'Craft responsive, high-converting websites that reflect your brand.',
    fullDescription: 'We design and develop beautiful, responsive websites that not only look stunning but also convert visitors into customers. Our websites are optimized for speed, SEO, and user experience.',
    benefits: [
      'Mobile-responsive design',
      'Fast loading speed',
      'SEO-optimized structure',
      'High conversion rates',
      'Professional appearance',
      'Easy content management'
    ],
    services: [
      {
        name: 'Website Design',
        description: 'Beautiful, modern website designs tailored to your brand.'
      },
      {
        name: 'E-commerce Solutions',
        description: 'Fully functional online stores for selling products.'
      },
      {
        name: 'CMS Development',
        description: 'Easy-to-manage content management systems.'
      },
      {
        name: 'Mobile App Development',
        description: 'iOS and Android app development services.'
      },
      {
        name: 'Website Maintenance',
        description: 'Ongoing support and updates for your website.'
      },
      {
        name: 'Performance Optimization',
        description: 'Speed optimization and performance improvements.'
      }
    ]
  },
  graphic: {
    title: 'Graphic Design Services in Varanasi | MarketingHubb',
    description: 'Design powerful brand visuals, logos, and creative assets that make your business memorable.',
    longTitle: 'Graphic Design',
    icon: '🎨',
    shortDescription: 'Design powerful brand visuals, logos, and creative assets.',
    fullDescription: 'From logos to social media graphics, our designers create visually stunning assets that elevate your brand and capture attention. We focus on creating memorable, cohesive visual identities.',
    benefits: [
      'Professional brand identity',
      'Memorable visual designs',
      'Consistent branding across channels',
      'Increased brand recognition',
      'Professional appearance',
      'Creative and original designs'
    ],
    services: [
      {
        name: 'Logo Design',
        description: 'Unique and memorable logo designs for your business.'
      },
      {
        name: 'Branding',
        description: 'Complete brand identity including colors, fonts, and guidelines.'
      },
      {
        name: 'Social Media Graphics',
        description: 'Eye-catching graphics for social media posts and stories.'
      },
      {
        name: 'Print Design',
        description: 'Business cards, brochures, flyers, and other print materials.'
      },
      {
        name: 'Product Packaging',
        description: 'Attractive packaging design for your products.'
      },
      {
        name: 'Illustration',
        description: 'Custom illustrations and artwork for your brand.'
      }
    ]
  },
  email: {
    title: 'Email Marketing Services in Varanasi | MarketingHubb',
    description: 'Retain customers and boost sales with smart email campaigns and automation.',
    longTitle: 'Email Marketing',
    icon: '✉️',
    shortDescription: 'Retain customers and boost sales with smart email campaigns.',
    fullDescription: 'Build stronger relationships with your customers through targeted, personalized email campaigns. Our email marketing strategies help retain customers and drive repeat sales.',
    benefits: [
      'High ROI on email campaigns',
      'Improved customer retention',
      'Increased repeat sales',
      'Personalized customer communication',
      'Automated marketing workflows',
      'Detailed performance analytics'
    ],
    services: [
      {
        name: 'Email Campaign Strategy',
        description: 'Develop strategic email campaigns for your goals.'
      },
      {
        name: 'List Building',
        description: 'Grow your email subscriber list organically.'
      },
      {
        name: 'Email Design',
        description: 'Beautiful, responsive email template design.'
      },
      {
        name: 'Marketing Automation',
        description: 'Automated workflows and triggered campaigns.'
      },
      {
        name: 'Segmentation',
        description: 'Target specific audience segments with personalized messages.'
      },
      {
        name: 'Analytics & Reporting',
        description: 'Track opens, clicks, conversions, and ROI.'
      }
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) {
    return {
      title: 'Service Not Found | MarketingHubb',
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://www.marketinghubb.in/service/${slug}`,
      siteName: 'MarketingHubb',
      type: 'website',
      locale: 'en_IN',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-6xl">{service.icon}</div>
            <div>
              <Link href="/service" className="text-green-100 hover:text-white transition-colors mb-2 inline-block">
                ← Back to Services
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold">{service.longTitle}</h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-green-50">{service.shortDescription}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{service.fullDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 rounded-full bg-green-100 text-green-600 items-center justify-center flex-shrink-0 font-semibold text-sm">
                    ✓
                  </span>
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Offer</h2>
            <div className="space-y-4">
              {service.services.map((svc: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-2">{svc.name}</h3>
                  <p className="text-slate-600 text-sm">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.longTitle} services can help grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
