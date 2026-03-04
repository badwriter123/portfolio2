'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState, useCallback } from 'react';

const projects = [
  {
    id: 1,
    icon: 'ⓦ',
    name: 'Wavely - Studio',
    description:
      'Generate high-quality LinkedIn and Twitter Posts using Gemma3 LLM. Refine your posts with realtime Reach Score.',
    tech: ['Vite', 'React', 'TypeScript', 'Node.js', 'Gemma3-4B-Instruct'],
    links: {
      live: 'https://wavely-enhanced.vercel.app/',
      repo: 'https://github.com/badwriter123/Wavely-Enhanced',
    },
    featured: true,
  },
  {
    id: 2,
    icon: '🔉',
    name: 'Hush - AI',
    description:
      'Streamlit Dashboard Visualization of how Active Noise Cancellation works with further enhanced with AI.',
    tech: ['Python', 'Matplotlib', 'Numpy', 'Urbansound8k', 'StreamLit'],
    links: {
      repo: 'https://github.com/badwriter123/hush_ai',
    },
  },
  {
    id: 3,
    icon: '🎙️',
    name: 'Jack Up',
    description:
      'Podcast research CLI tool to streamline podcast research time and Increase content creation focus.',
    tech: ['Mistral LLM', 'Llama3 LLM', 'Python', 'Ollama', 'Multi-Model'],
    links: {
      repo: 'https://github.com/badwriter123/JackUp',
    },
  },
  {
    id: 4,
    icon: '🤖',
    name: 'AI Agents / Automation Workflows',
    description:
      'Built Automation AI agents to streamline workflow and reduce repetitive tasks',
    tech: ['n8n', 'Python', 'Node.js', 'TypeScript', 'Vue.js'],
    links: {
      repo: 'https://github.com/badwriter123/my_ai_agents',
    },
  },
  {
    id: 5,
    icon: '🧠',
    name: 'Brain Pathology/Tumor Classification',
    description:
      'A Hybrid Deep-Learning Algorithm to Analyse MRI Images and Identify Brain Tumors, Increase Accuracy to 99%.',
    tech: ['AlexNet', 'Transfer-Learning', 'User-Dashboard', 'Tumor Contour'],
    links: {
      download: '/research-paper.pdf',
    },
  },
  {
    id: 6,
    icon: '🤔',
    name: 'Twitter Sentiment Analysis',
    description:
      'Conducted Sentiment Analysis of tweets during the covid-19 Pandemic to distinguish Emotions.',
    tech: ['Kaggle-Dataset', 'Twitter-API', 'Python', 'TypeScript', 'Node.JS'],
    links: {
      repo: 'https://github.com/badwriter123/sentiment-analysis',
    },
  },
];

function TiltCard({
  children,
  className = '',
  featured = false,
}: {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -6, y: x * 6 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div style={{ perspective: '1000px' }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative group ${className}`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Animated border glow */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: featured
              ? 'linear-gradient(135deg, #00ffff, #00ff66, #a855f7, #00ffff)'
              : 'linear-gradient(135deg, #22c55e, #06b6d4, #22c55e)',
            backgroundSize: '300% 300%',
            animation: isHovered ? 'borderGlow 3s linear infinite' : 'none',
            filter: 'blur(2px)',
          }}
        />

        {/* Card body */}
        <div className="relative bg-black/90 backdrop-blur-md border border-zinc-700/50 group-hover:border-transparent rounded-2xl p-6 h-full flex flex-col overflow-hidden">
          {/* CRT overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 3px)',
              }}
            />
          </div>

          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-4">
            Proof of Work
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Selected projects that showcase my ability to build and ship.{' '}
            <span className="text-green-500 font-bold">
              Everything is open-source.
            </span>
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={project.featured ? 'md:row-span-2' : ''}
            >
              <TiltCard
                className={`h-full ${project.featured ? 'min-h-[420px]' : ''}`}
                featured={project.featured}
              >
                {/* Status indicator */}
                {project.links.live && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-xs text-green-400 font-mono uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="mb-4">
                  <span className="text-3xl mb-3 block">{project.icon}</span>
                  <h3
                    className={`font-bold font-oswald uppercase tracking-wide ${
                      project.featured ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`text-zinc-400 leading-relaxed mb-5 ${
                    project.featured ? 'text-base' : 'text-sm line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-green-500/5 border border-green-500/15 rounded-md text-green-300/80 group-hover:border-green-500/30 group-hover:text-green-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
                  {project.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-500/30 bg-green-500/5 hover:bg-green-500/15 text-green-300 hover:text-green-200"
                      onClick={() => window.open(project.links.live, '_blank')}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Demo
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:border-green-500/30 hover:bg-green-500/5 text-zinc-300"
                      onClick={() => window.open(project.links.repo, '_blank')}
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </Button>
                  )}
                  {project.links.download && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:border-green-500/30 hover:bg-green-500/5 text-zinc-300"
                      onClick={() =>
                        window.open(project.links.download, '_blank')
                      }
                    >
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      Paper
                    </Button>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400">
            <span className="text-green-500 font-bold text-lg">
              And much more...
            </span>{' '}
            Check out my{' '}
            <a
              href="https://github.com/badwriter123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 hover:underline font-bold transition-colors"
            >
              GitHub
            </a>{' '}
            for the full collection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
