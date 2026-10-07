import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-7xl font-black font-heading gold-gradient-pure">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
          Page Not Found
        </h1>
        <p className="text-sm text-silver-muted leading-relaxed">
          The page or growth playbook you are looking for does not exist or has been relocated to another section.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-heading font-semibold uppercase tracking-wider text-black bg-gold-gradient shadow-gold-sm hover:shadow-gold-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-heading font-medium text-silver border border-surface-border bg-surface hover:text-gold transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
