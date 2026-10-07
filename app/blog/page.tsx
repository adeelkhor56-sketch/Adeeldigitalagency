import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Growth Blog & Marketing Playbooks | Adeel Digital Agency',
  description:
    'Actionable blueprints on Meta Ads creative testing, local SEO dominance, Next.js web performance, and generative AI video ads.',
};

export default function BlogListingPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Actionable Playbooks
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            Marketing Frameworks & Acquisition Insights
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Direct operational learnings from running real ad spend, engineering high-speed web apps, and scaling brands.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl border border-surface-border bg-surface/60 backdrop-blur-xl p-8 flex flex-col justify-between group hover:border-gold/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-silver-muted mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold font-heading text-silver group-hover:text-gold transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-silver-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border/50 flex items-center justify-between text-xs">
                <div className="text-silver-muted">
                  <span className="text-silver font-medium">{post.author}</span> &bull; {post.date}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-gold font-semibold group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Quote Form */}
        <QuoteForm
          title="Turn These Insights Into Revenue For Your Brand"
          subtitle="Adeel can implement any of these proven frameworks into your business."
        />
      </div>
    </div>
  );
}
