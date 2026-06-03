import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post | MarketingHubb',
      description: 'MarketingHubb blog post',
    };
  }

  return {
    title: `${post.title} | MarketingHubb Blog`,
    description: post.description,
    alternates: {
      canonical: `https://www.marketinghubb.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | MarketingHubb Blog`,
      description: post.description,
      url: `https://www.marketinghubb.in/blog/${post.slug}`,
      type: 'article',
      siteName: 'MarketingHubb',
      locale: 'en_IN',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-600">MarketingHubb Blog</p>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
              <span>{post.author}</span>
            </div>
            <p className="mt-6 text-lg text-slate-700">{post.description}</p>
          </header>

          <article className="prose prose-slate max-w-none">
            {post.content.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              ← Back to blog articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
