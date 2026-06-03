import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'MarketingHubb Blog | Latest Marketing Articles',
  description: 'Read the latest MarketingHubb blog posts on local SEO, social media marketing, web design, and digital growth strategies for Varanasi businesses.',
  alternates: {
    canonical: 'https://www.marketinghubb.in/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-100 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Blog</p>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">MarketingHubb Insights</h1>
            <p className="mt-5 text-lg text-slate-600">
              Explore our latest posts on digital marketing, local SEO, social media, web design, and strategies crafted for businesses in Varanasi.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{post.title}</h2>
              <p className="mt-4 text-slate-600">{post.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Read article →
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg">
          <div className="grid gap-6 sm:grid-cols-[1fr_300px] items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Want more help with your digital strategy?</h2>
              <p className="mt-4 text-slate-600">
                Our team helps local businesses improve their SEO, social media, and website performance. If you want a custom plan for Varanasi customers, we can help.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
