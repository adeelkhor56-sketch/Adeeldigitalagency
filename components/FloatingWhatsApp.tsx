'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={AGENCY_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with Adeel Digital Agency"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[990] flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-shadow hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] group"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
        <MessageCircle className="w-5 h-5 fill-current" />
      </div>
      <span className="hidden sm:inline-block text-xs font-semibold tracking-wide font-sans">
        Chat with Adeel
      </span>
    </motion.a>
  );
}
