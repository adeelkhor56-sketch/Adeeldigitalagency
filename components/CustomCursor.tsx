'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only activate cursor follower on devices with fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.dataset.cursor === 'hover')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible || shouldReduceMotion) return null;

  return (
    <>
      {/* Precision inner center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold shadow-gold-sm"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 50 }}
        style={{ width: '6px', height: '6px' }}
      />
      {/* Ambient Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-gold/40 bg-gold/5"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.7 : 1,
          borderColor: isPointer ? 'rgba(245, 179, 1, 0.9)' : 'rgba(245, 179, 1, 0.35)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{ width: '36px', height: '36px' }}
      />
    </>
  );
}
