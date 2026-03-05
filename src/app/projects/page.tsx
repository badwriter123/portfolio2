'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'Generate high-quality content using advanced AI models with custom prompts and templates.',
    year: 2024,
    category: 'ai',
    tech: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma', 'PostgreSQL'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/username/project',
      caseStudy: '/projects/ai-content-generator'
    },
    cover: '🤖',
    highlights: [
      'Generated 10M+ words of content',
      '99.9% uptime with edge deployment',
      'Custom fine-tuned models'
    ]
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'Lightning-fast dashboard with real-time data visualization and interactive charts.',
    year: 2024,
    category: 'web',
    tech: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/username/project',
      caseStudy: '/projects/analytics-dashboard'
    },
    cover: '⚡',
    highlights: [
      'Processing 1M+ events/day',
      'Sub-100ms query response',
      'Real-time collaboration'
    ]
  },
  {
    id: 3,
    title: 'SaaS Boilerplate',
    slug: 'saas-boilerplate',
    description: 'Production-ready SaaS starter with authentication, payments, and multi-tenancy.',
    year: 2023,
    category: 'systems',
    tech: ['Next.js', 'Stripe', 'Supabase', 'TailwindCSS', 'Docker'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/username/project',
      caseStudy: '/projects/saas-boilerplate'
    },
    cover: '🚀',
    highlights: [
      '500+ developers using it',
      'Zero to production in 1 hour',
      'Enterprise-grade security'
    ]
  },
  {
    id: 4,
    title: 'Mobile-First PWA',
    slug: 'mobile-pwa',
    description: 'Progressive web app with offline-first architecture and native mobile experience.',
    year: 2023,
    category: 'web',
    tech: ['React', 'PWA', 'IndexedDB', 'Service Workers', 'WebAssembly'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/username/project',
      caseStudy: '/projects/mobile-pwa'
    },
    cover: '📱',
    highlights: [
      '100% Lighthouse score',
      'Works offline completely',
      'Native app performance'
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'Web' },
  { id: 'systems', label: 'Systems' }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Projects
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A collection of products and experiments that showcase my approach to building software.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                  : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-zinc-600/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <Card className="glass-card p-8 group hover:bg-zinc-900/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{project.cover}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold font-heading group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-zinc-500">({project.year})</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zinc-300 mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-center">
                        <span className="w-1 h-1 bg-gold-400 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 hover:border-gold-500/50 hover:bg-gold-500/10"
                    onClick={() => window.open(project.links.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 hover:border-electric-500/50 hover:bg-electric-500/10"
                    onClick={() => window.open(project.links.repo, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 hover:border-zinc-500/50 hover:bg-zinc-500/10"
                    onClick={() => window.location.href = project.links.caseStudy}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 