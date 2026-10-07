'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          {/* Subtle Ambient Pulsing Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gold/10 blur-[80px] pointer-events-none animate-pulse-slow" />

          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-28 h-28 mb-6"
          >
            <Image
              src="/logo.png"
              alt="Adeel Digital Agency Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-medium text-gold font-heading"
          >
            Your Growth Partner
          </motion.p>

          {/* Progress bar line */}
          <div className="w-36 h-[2px] bg-surface-border mt-5 overflow-hidden rounded-full">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'easeInOut' }}
              className="w-full h-full bg-gold-gradient"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
