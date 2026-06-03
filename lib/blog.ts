export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  author: string;
  tags: string[];
  content: string;
};

const posts: BlogPost[] = [
  {
    slug: 'how-social-media-marketing-helps-local-brands-in-varanasi',
    title: 'How Social Media Marketing Helps Local Brands in Varanasi',
    description: 'Learn how local SMM strategies can boost visibility, engagement, and sales for Varanasi businesses without overcomplicating social media.',
    date: '2026-06-03',
    readingTime: '4 min read',
    author: 'Saurabh G.',
    tags: ['Social Media', 'Local Marketing', 'Varanasi'],
    content: `Social media marketing is not just about posting every day. For local businesses in Varanasi, the right social content helps customers discover your services, trust your brand, and take action.

When you share local stories, customer success, and timely offers, your audience begins to recognize the value your business brings. This is especially true for neighbourhood shops, restaurants, and service providers who rely on local customers.

A smart social media plan in Varanasi includes consistent visuals, clear messaging, and community-focused posts. Use WhatsApp, Instagram, and Facebook to show your work, share testimonials, and answer common questions.

Remember: engagement matters more than followers. A meaningful interaction from a local customer is worth far more than a large anonymous audience.

By combining strong social content with clear local details, your business can turn social media into a reliable source of leads and repeat customers.`,
  },
  {
    slug: 'seo-strategies-for-small-businesses-in-2026',
    title: 'SEO Strategies for Small Businesses in 2026',
    description: 'A practical SEO checklist for small businesses that want more local search traffic, better visibility, and faster results in 2026.',
    date: '2026-06-03',
    readingTime: '5 min read',
    author: 'Saurabh G.',
    tags: ['SEO', 'Small Business', '2026'],
    content: `SEO in 2026 is about being useful, local, and easy to understand. Small businesses should focus on content that answers customer questions and solves real problems.

Start with the pages that matter most: your services, location, and contact information. Make sure those pages clearly explain what you do and where you operate.

Next, use simple keywords that match how customers speak. For example, local search terms like "seo service in varanasi", "smm in varanasi", and "mobile-friendly website" are valuable for businesses targeting nearby customers.

Finally, measure what matters. Track calls, form submissions, and online direction requests rather than just pageviews. When you focus on local intent, your SEO efforts translate into real customer conversations.

Good SEO is steady progress, not a quick trick. A consistent local strategy helps small businesses build trust, get found, and grow sustainably.
`,
  },
  {
    slug: 'why-your-website-needs-a-mobile-first-design',
    title: 'Why Your Website Needs a Mobile-First Design',
    description: 'Discover why mobile-first design matters for conversions, search visibility, and customer trust, especially for local brands in India.',
    date: '2026-06-03',
    readingTime: '4 min read',
    author: 'Saurabh G.',
    tags: ['Web Design', 'Mobile', 'UX'],
    content: `More than half of local searches happen on mobile devices. That means your website must work first and best on phones.

A mobile-first website loads quickly, shows clear calls to action, and makes it easy for visitors to call, message, or find your address. For businesses in Varanasi, that can be the difference between a new customer and a missed opportunity.

Design should be simple: readable text, touch-friendly buttons, and a fast loading time. Avoid clutter and focus on helping the visitor do one thing well.

Mobile-first sites also perform better in search engines. Google rewards pages that deliver a good experience on phones, which is essential for keywords like "seo service in varanasi" and "smm in varanasi".

If you want your website to convert local visitors into customers, start with the mobile experience and keep improving from there.
`,
  },
  {
    slug: 'simple-content-ideas-for-local-business-blogs',
    title: 'Simple Content Ideas for Local Business Blogs',
    description: 'Five easy blog ideas that local businesses can publish quickly to improve SEO, trust, and customer engagement.',
    date: '2026-06-03',
    readingTime: '3 min read',
    author: 'Saurabh G.',
    tags: ['Content', 'Blogging', 'Local Business'],
    content: `If you manage a local business, blogging does not have to be difficult. The best blog topics are the ones your customers already ask about.

Start with FAQs. Write a short post answering a question like "How much does social media marketing cost for a local shop?" or "What should I expect from a local SEO service?"

Share a customer story. Describe a recent project, the problem you solved, and the results. This helps readers understand your process and trust your work.

Create a local guide. Write about how your neighborhood, area, or city influences what you do. That helps search engines connect your business to local search queries.

Keep the writing simple, real, and useful. A local business blog can be one of the strongest ways to show expertise without spending too much time.
`,
  },
  {
    slug: 'how-ppc-and-seo-work-together-for-faster-leads',
    title: 'How PPC and SEO Work Together for Faster Leads',
    description: 'Learn how combining paid ads and organic search can deliver faster leads while building long-term visibility for your brand.',
    date: '2026-06-03',
    readingTime: '4 min read',
    author: 'Saurabh G.',
    tags: ['PPC', 'SEO', 'Leads'],
    content: `Paid ads and SEO are not competing channels; they are teamwork. PPC can bring quick visibility while SEO builds trust and organic momentum.

Use PPC to test which headlines, offers, and keywords work best. Then apply those learnings to your website content and SEO landing pages.

For local businesses, PPC can help you appear at the top of search results while your organic profile gains strength. This combination is especially useful when you need leads quickly.

Over time, SEO reduces your dependency on paid campaigns by capturing more traffic from the same keywords. But paid ads remain valuable for promotions, seasonality, and awareness.

When PPC and SEO work together, you get faster leads today and better search performance tomorrow.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPostSlugs() {
  return posts.map((post) => post.slug);
}
