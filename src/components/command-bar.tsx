'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, FolderOpen, FileText, User, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: FolderOpen, label: 'Projects', href: '#projects' },
  { icon: User, label: 'Experience', href: '#experience' },
  { icon: FileText, label: 'Skills', href: '#skills' },
  { icon: Mail, label: 'Contact', href: '#socials' },
];

export function CommandBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling 300px
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 100 
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed right-6 top-1/4 -translate-y-1/2 z-50"
    >
      <nav className="bg-zinc-900/95 backdrop-blur-xl px-4 py-12 rounded-[2rem] border border-green-500/20 shadow-xl">

        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "p-3 rounded-2xl transition-all duration-200 group",
                "hover:bg-green-500/10 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-green-500/40"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20,
              }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <item.icon className="w-5 h-5 text-white/70 group-hover:text-green-400 transition-colors duration-200" />
              <span className="sr-only">{item.label}</span>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                whileHover={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-full mr-3 px-3 py-2 bg-zinc-900/95 backdrop-blur-sm text-green-300 text-sm rounded-xl border border-green-500/20 whitespace-nowrap pointer-events-none shadow-lg"
              >
                {item.label}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-zinc-900/95" />
              </motion.div>
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.div>
  );
} 