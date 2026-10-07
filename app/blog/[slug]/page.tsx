import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';
import QuoteForm from '@/components/QuoteForm';
import { Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Adeel Digital Agency`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:underline font-heading"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-silver tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-silver-muted border-y border-surface-border py-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gold-gradient text-black flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div>
                <span className="font-semibold text-silver block">{post.author}</span>
                <span className="text-[10px] text-silver-dark">{post.authorRole}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-silver-muted text-base sm:text-lg leading-relaxed font-sans border-b border-surface-border pb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="p-6 rounded-2xl border border-surface-border bg-surface/50 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gold-gradient text-black flex items-center justify-center font-extrabold text-2xl font-heading flex-shrink-0">
            AD
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold font-heading text-silver">
              Written by Adeel
            </h3>
            <p className="text-xs text-silver-muted leading-relaxed">
              Founder & Growth Architect at Adeel Digital Agency in Bahawalpur, Pakistan. Specializing in high-ROAS Meta Ads, sub-second Next.js web experiences, and generative AI commercials.
            </p>
          </div>
        </div>

        {/* CTA Quote Form */}
        <div className="pt-6">
          <QuoteForm
            title="Want Adeel to Implement This Strategy For You?"
            subtitle="Get in touch to discuss a high-impact growth sprint tailored to your niche."
          />
        </div>
      </div>
    </article>
  );
}
