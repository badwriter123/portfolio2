'use client';

import { CommandBar } from '@/components/command-bar';
import { ScrollProgress } from '@/components/scroll-progress';
import { MouseFollower } from '@/components/mouse-follower';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/what-i-do-section';
import { SkillsSection } from '@/components/skills-section';
import { ScrollingSection } from '@/components/scrolling-section';

import { SocialsSection } from '@/components/socials-section';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-transparent">
      <MouseFollower />
      <CommandBar />
      <ScrollProgress />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <SocialsSection />
      <ScrollingSection />
      
      {/* Scroll to top arrow */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass group hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <ChevronUp className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            <span className="sr-only">Scroll to top</span>
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
