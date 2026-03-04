'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-zinc-500 text-sm">
            © {currentYear} Built by Rohan A M with ❤️.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <span>•</span>
            <span>The Oracle has told us Little NEO is the ONE !!!</span>
            <span>•</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 