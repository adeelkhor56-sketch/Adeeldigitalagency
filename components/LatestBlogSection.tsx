'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';

export default function LatestBlogSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
            >
              Growth Intelligence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver mt-2"
            >
              Latest Frameworks & Acquisition Playbooks
            </motion.h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:underline font-heading"
          >
            <span>Read all articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-surface-border bg-surface/50 backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-gold/40 transition-all duration-300"
            >
              <div className="p-7">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[11px] text-silver-muted mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-silver group-hover:text-gold transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-silver-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-7 py-4 border-t border-surface-border/50 flex items-center justify-between text-xs text-silver-dark">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gold-gradient text-black flex items-center justify-center font-bold text-[10px]">
                    A
                  </div>
                  <span className="text-silver">{post.author}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gold font-semibold flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
