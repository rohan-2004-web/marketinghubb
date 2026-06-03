import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../../lib/blog';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | MarketingHubb Blog',
    };
  }

  return {
    title: `${post.title} | MarketingHubb Blog`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.marketinghubb.in/blog/${slug}`,
      type: 'article',
      locale: 'en_IN',
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.marketinghubb.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.marketinghubb.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.marketinghubb.in/blog/${slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": "https://www.marketinghubb.in/image/logo.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.marketinghubb.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MarketingHubb",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.marketinghubb.in/image/logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.marketinghubb.in/blog/${slug}`
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-slate-600 mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-slate max-w-none rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-slate-700 leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Call to Action */}
        <section className="mt-12 rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="grid gap-6 sm:grid-cols-[1fr_300px] items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Ready to grow your business?</h2>
              <p className="mt-4 text-slate-600">
                Our team specializes in digital marketing strategies tailored for businesses in Varanasi and across India.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">More from the Blog</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span>{relatedPost.date}</span>
                    <span>•</span>
                    <span>{relatedPost.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{relatedPost.title}</h3>
                  <p className="mt-4 text-slate-600 text-sm">{relatedPost.description}</p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
