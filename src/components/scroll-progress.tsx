'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showPercentage, setShowPercentage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      // Show progress bar after scrolling 100px
      setIsVisible(scrollTop > 100);
      // Always show percentage once user starts scrolling
      if (scrollTop > 0) {
        setShowPercentage(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Percentage indicator - always visible */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ 
          opacity: showPercentage ? 1 : 0, 
          x: showPercentage ? 0 : -50 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed left-6 bottom-4 z-50"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-3 py-2 bg-zinc-900/95 backdrop-blur-sm text-green-300 text-sm font-mono rounded border border-green-500/20 shadow-lg"
        >
          {Math.round(scrollProgress)}%
        </motion.div>
      </motion.div>

      {/* Progress bar - visible after scrolling */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : -50 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed left-6 top-0 bottom-0 z-50 flex items-center"
      >
        <div className="relative h-full py-16">
          {/* Background track */}
          <div className="w-1 h-full bg-zinc-800/50 rounded-full backdrop-blur-sm border border-zinc-700/30">
            {/* Progress bar */}
            <motion.div
              className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-full origin-bottom"
              style={{
                height: `${scrollProgress}%`,
              }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
} 