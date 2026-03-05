'use client';

import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  Github,
  FileText,
  Server,
  Activity,
  ArrowRight,
  Cpu,
  HardDrive,
  Layers,
} from 'lucide-react';
import { useRef, useState, useCallback, useEffect } from 'react';

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
    pid: '0x7A1',
    mem: '128MB',
    cpu: '12%',
    status: 'DEPLOYED' as const,
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
    pid: '0x3B2',
    mem: '96MB',
    cpu: '8%',
    status: 'STABLE' as const,
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
    pid: '0x5C4',
    mem: '256MB',
    cpu: '15%',
    status: 'STABLE' as const,
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
    pid: '0x9D6',
    mem: '512MB',
    cpu: '22%',
    status: 'ACTIVE' as const,
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
    pid: '0x2E8',
    mem: '1.2GB',
    cpu: '45%',
    status: 'ARCHIVED' as const,
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
    pid: '0x4F3',
    mem: '384MB',
    cpu: '18%',
    status: 'ARCHIVED' as const,
  },
];

const statusColors: Record<string, string> = {
  DEPLOYED: 'text-green-400',
  ACTIVE: 'text-cyan-400',
  STABLE: 'text-yellow-400',
  ARCHIVED: 'text-zinc-400',
};
const statusDots: Record<string, string> = {
  DEPLOYED: 'bg-green-500',
  ACTIVE: 'bg-cyan-500',
  STABLE: 'bg-yellow-500',
  ARCHIVED: 'bg-zinc-500',
};

/* ──────────────── scramble text hook ──────────────── */
function useScrambleText(text: string, trigger: boolean, speed = 50) {
  const [display, setDisplay] = useState('');
  const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!?<>{}[]01';

  useEffect(() => {
    if (!trigger) {
      setDisplay(text.replace(/[^ ]/g, ' '));
      return;
    }
    let iter = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            return i < iter
              ? text[i]
              : pool[Math.floor(Math.random() * pool.length)];
          })
          .join('')
      );
      if (iter >= text.length) clearInterval(interval);
      iter += 1 / 2;
    }, speed);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, text]);

  return display;
}

/* ══════════════════════════════════════════════════════
   TILT CARD
   ══════════════════════════════════════════════════════ */
function TiltCard({
  children,
  className = '',
  status,
}: {
  children: React.ReactNode;
  className?: string;
  status: string;
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

  const glowColor =
    status === 'DEPLOYED'
      ? '#22c55e'
      : status === 'ACTIVE'
        ? '#06b6d4'
        : status === 'STABLE'
          ? '#eab308'
          : '#71717a';

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
          className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `linear-gradient(135deg, ${glowColor}, #06b6d4, ${glowColor})`,
            backgroundSize: '300% 300%',
            animation: isHovered
              ? 'projectBorderGlow 3s linear infinite'
              : 'none',
            filter: 'blur(2px)',
          }}
        />

        {/* Card body */}
        <div className="relative bg-black/90 backdrop-blur-md border border-zinc-800/50 group-hover:border-transparent rounded-xl h-full flex flex-col overflow-hidden">
          {/* CRT scanline overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 3px)',
              }}
            />
          </div>
          {children}
        </div>
      </div>

      <style jsx>{`
        @keyframes projectBorderGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════ */
export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const scrambledTitle = useScrambleText('PROOF OF WORK', inView);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* ── Ambient gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)',
            top: '-5%',
            left: '-5%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.035) 0%, transparent 70%)',
            bottom: '10%',
            right: '-5%',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)',
            top: '40%',
            left: '50%',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 50, -30, 0], y: [0, -20, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ═══════════════ Section Header ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="text-xs font-mono text-green-500/60 tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {'>'} loading deployed_modules...
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
            <span className="relative inline-block">
              <motion.span
                className="absolute text-red-500/30 blur-[0.5px]"
                style={{ left: 0, top: 0 }}
                animate={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                aria-hidden
              >
                {scrambledTitle}
              </motion.span>
              <motion.span
                className="absolute text-cyan-500/30 blur-[0.5px]"
                style={{ left: 0, top: 0 }}
                animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.1,
                }}
                aria-hidden
              >
                {scrambledTitle}
              </motion.span>
              <span className="text-white">{scrambledTitle}</span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-zinc-400 max-w-lg mx-auto font-mono text-sm mt-4"
          >
            Selected builds that showcase my ability to ship.{' '}
            <span className="text-green-400">Everything is open-source.</span>
          </motion.p>
        </motion.div>

        {/* ═══════════════ Process Table Header ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-2 mb-4 px-2"
        >
          <Server className="w-3.5 h-3.5 text-cyan-500/50" />
          <span className="text-[10px] font-mono text-cyan-500/50 tracking-wider uppercase">
            PROCESS_TABLE
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/15 to-transparent ml-2" />
          <span className="text-[10px] font-mono text-zinc-600">
            {projects.length} MODULES LOADED
          </span>
        </motion.div>

        {/* ═══════════════ Bento Grid ═══════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <TiltCard
                className="h-full"
                status={project.status}
              >
                {/* ── Card Header Bar ── */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 ml-2 truncate">
                    pid:{project.pid}
                  </span>
                  <div className="ml-auto flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono ${statusColors[project.status]}`}
                    >
                      [{project.status}]
                    </span>
                    {(project.status === 'DEPLOYED' ||
                      project.status === 'ACTIVE') && (
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full ${statusDots[project.status]}`}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Live indicator for deployed */}
                  {project.links.live && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-[10px] text-green-400 font-mono uppercase tracking-wider">
                        Live on Production
                      </span>
                    </div>
                  )}

                  {/* Icon + Name */}
                  <div className="mb-3">
                    <span className="text-2xl mb-2 block">{project.icon}</span>
                    <h3
                      className="font-bold font-heading uppercase tracking-wide text-base"
                    >
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-zinc-400 leading-relaxed mb-4 text-xs line-clamp-3"
                  >
                    {project.description}
                  </p>

                  {/* Resource usage bar */}
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-cyan-500/50" />
                      <span>{project.cpu}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3 text-cyan-500/50" />
                      <span>{project.mem}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-green-500/50" />
                      <span className={statusColors[project.status]}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Tech dependencies */}
                  <div className="flex items-center gap-1.5 mb-1">
                    <Layers className="w-3 h-3 text-zinc-600" />
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                      Dependencies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono bg-green-500/5 border border-green-500/15 rounded text-green-300/70 group-hover:text-green-300 group-hover:border-green-500/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 bg-green-500/5 border-green-500/20 text-green-400 hover:bg-green-500/15 hover:border-green-500/40"
                      >
                        <ExternalLink className="w-3 h-3" />
                        DEMO
                        <ArrowRight className="w-3 h-3 opacity-50" />
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 bg-transparent border-zinc-800 text-zinc-400 hover:border-green-500/30 hover:bg-green-500/5 hover:text-green-400"
                      >
                        <Github className="w-3 h-3" />
                        SOURCE
                        <ArrowRight className="w-3 h-3 opacity-50" />
                      </a>
                    )}
                    {project.links.download && (
                      <a
                        href={project.links.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 bg-transparent border-zinc-800 text-zinc-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                      >
                        <FileText className="w-3 h-3" />
                        PAPER
                        <ArrowRight className="w-3 h-3 opacity-50" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ═══════════════ System Summary Footer ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="border border-zinc-800/50 rounded-lg bg-black/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-500/50" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                SYSTEM_SUMMARY
              </span>
            </div>
            <div className="px-5 py-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 font-mono text-xs">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-zinc-500 block text-[10px]">
                    MODULES
                  </span>
                  <span className="text-green-400 font-bold">
                    {projects.length}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">
                    DEPLOYED
                  </span>
                  <span className="text-green-400 font-bold">
                    {
                      projects.filter((p) => p.status === 'DEPLOYED').length
                    }
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">
                    ACTIVE
                  </span>
                  <span className="text-cyan-400 font-bold">
                    {projects.filter((p) => p.status === 'ACTIVE').length}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">
                    OPEN_SOURCE
                  </span>
                  <span className="text-green-400 font-bold">100%</span>
                </div>
              </div>
              <div className="md:ml-auto flex items-center gap-2">
                <span className="text-zinc-500">MORE_MODULES:</span>
                <a
                  href="https://github.com/badwriter123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 group"
                >
                  github.com/badwriter123
                  <ArrowRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
