'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  MapPin,
  Github,
  Code,
  Brain,
  Terminal,
  Clock,
  Activity,
  Cpu,
  Layers,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const experiences = [
  {
    id: 1,
    icon: Github,
    role: 'Open Source Contributor',
    company: '@mdn-webdocs/content  @HuggingFace/transformers',
    duration: 'Mar 2025 - Present',
    location: 'Remote',
    description:
      'Active contributor to top tier open-source projects including MDN Web Docs content repository, and Hugging Face Transformers. Implemented new features, fixed bugs, and improved documentation. Contributed to the development of machine learning frameworks.',
    skills: [
      '@mdn-webdocs/content',
      '@huggingFace/transformers',
      'Open Source',
      'GitHub',
      'Machine Learning',
    ],
    pid: '0xA01',
    status: 'RUNNING' as const,
    runtime: '12mo+',
    threads: 8,
  },
  {
    id: 2,
    icon: Code,
    role: 'Backend Developer',
    company: 'Freelance',
    duration: 'Dec 2024 - Present',
    location: 'Remote',
    description:
      'Designed and Implemented scalable, secure and high-performance server-side systems. Built robust APIs, managing databases, and integrating authentication, real-time communication, and complex business logics.',
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'GraphQL',
      'WebSockets',
      'Cursor AI',
      'Github Actions',
    ],
    pid: '0xB02',
    status: 'RUNNING' as const,
    runtime: '15mo+',
    threads: 12,
  },
  {
    id: 3,
    icon: Brain,
    role: 'Machine Learning Research Intern',
    company: 'Varcons Technologies',
    duration: 'June 2024 - December 2024',
    location: 'Bangalore, India',
    description:
      'Conducted machine learning research and Sentiment Analysis of tweets during Covid-19 Pandemic. Worked on data analysis, model optimization, and research documentation. Sentiment analysis was used to conduct Marketing Campaign and increased the brand Reach-out by 35%.',
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Data Analysis',
      'Research',
      'ML Models',
    ],
    pid: '0xC03',
    status: 'COMPLETED' as const,
    runtime: '6mo',
    threads: 6,
  },
];

const statusColors: Record<string, string> = {
  RUNNING: 'text-green-400',
  COMPLETED: 'text-cyan-400',
};
const statusDots: Record<string, string> = {
  RUNNING: 'bg-green-500',
  COMPLETED: 'bg-cyan-500',
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
   MAIN COMPONENT
   ══════════════════════════════════════════════════════ */
export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.6', 'end 0.8'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const scrambledTitle = useScrambleText('EXECUTION HISTORY', inView);

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* ── Ambient gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,255,100,0.04) 0%, transparent 70%)',
            top: '10%',
            right: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.035) 0%, transparent 70%)',
            bottom: '5%',
            left: '-5%',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            {'>'} cat /var/log/career.log
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
            Professional processes in{' '}
            <span className="text-green-400">ML Research</span>,{' '}
            <span className="text-cyan-400">Backend Development</span> &{' '}
            <span className="text-yellow-400">Open-Source</span>.
          </motion.p>
        </motion.div>

        {/* ═══════════════ Process Log Header ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-6 px-2"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-500/50" />
          <span className="text-[10px] font-mono text-cyan-500/50 tracking-wider uppercase">
            PROCESS_LOG
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/15 to-transparent ml-2" />
          <span className="text-[10px] font-mono text-zinc-600">
            {experiences.length} PROCESSES |{' '}
            {experiences.filter((e) => e.status === 'RUNNING').length} RUNNING
          </span>
        </motion.div>

        {/* ═══════════════ Timeline ═══════════════ */}
        <div ref={timelineRef} className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-zinc-800/50">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background:
                  'linear-gradient(180deg, #22c55e, #06b6d4, #22c55e)',
                boxShadow:
                  '0 0 12px rgba(34,197,94,0.4), 0 0 4px rgba(34,197,94,0.6)',
              }}
            />
          </div>

          {/* Experience entries */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2">
                  <div className="relative">
                    <motion.div
                      className={`absolute -inset-2.5 rounded-full ${exp.status === 'RUNNING' ? 'bg-green-400/20' : 'bg-cyan-400/15'}`}
                      animate={
                        exp.status === 'RUNNING'
                          ? {
                              scale: [1, 1.8, 1],
                              opacity: [0.5, 0, 0.5],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 border-black ${statusDots[exp.status]}`}
                      style={{
                        boxShadow: `0 0 10px ${exp.status === 'RUNNING' ? 'rgba(34,197,94,0.6)' : 'rgba(6,182,212,0.5)'}`,
                      }}
                    />
                  </div>
                </div>

                {/* ── Card ── */}
                <div className="bg-black/80 backdrop-blur-md border border-zinc-800/50 hover:border-zinc-700/60 rounded-xl overflow-hidden transition-all duration-300 group relative">

                  {/* Card header bar */}
                  <div className="flex items-center gap-2 px-5 py-2.5 border-b border-zinc-800/50 bg-black/40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 ml-1">
                      pid:{exp.pid}
                    </span>
                    <div className="ml-auto flex items-center gap-3 text-[10px] font-mono">
                      <span className="text-zinc-600">
                        threads:{exp.threads}
                      </span>
                      <span className="text-zinc-600">
                        runtime:{exp.runtime}
                      </span>
                      <span className={statusColors[exp.status]}>
                        [{exp.status}]
                      </span>
                      {exp.status === 'RUNNING' && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-green-500"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 relative z-20">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"
                            style={{
                              background:
                                exp.status === 'RUNNING'
                                  ? 'rgba(34,197,94,0.3)'
                                  : 'rgba(6,182,212,0.3)',
                            }}
                          />
                          <div
                            className="relative p-2.5 rounded-lg border transition-all duration-300"
                            style={{
                              borderColor:
                                exp.status === 'RUNNING'
                                  ? 'rgba(34,197,94,0.2)'
                                  : 'rgba(6,182,212,0.2)',
                              background:
                                exp.status === 'RUNNING'
                                  ? 'rgba(34,197,94,0.05)'
                                  : 'rgba(6,182,212,0.05)',
                            }}
                          >
                            <exp.icon
                              className="w-5 h-5"
                              style={{
                                color:
                                  exp.status === 'RUNNING'
                                    ? '#4ade80'
                                    : '#22d3ee',
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold font-heading uppercase tracking-wide">
                            {exp.role}
                          </h3>
                          <p className="text-green-400/80 font-mono text-xs mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col lg:items-end text-xs text-zinc-500 mt-2 lg:mt-0 gap-1 font-mono">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-cyan-500/50" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-cyan-500/50" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
                      {exp.description}
                    </p>

                    {/* Loaded modules label */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <Layers className="w-3 h-3 text-zinc-600" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                        Loaded Modules
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[11px] font-mono bg-green-500/5 border border-green-500/15 rounded text-green-300/70 group-hover:text-green-300 group-hover:border-green-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════ Process Summary ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="border border-zinc-800/50 rounded-lg bg-black/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-500/50" />
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                PROCESS_SUMMARY
              </span>
            </div>
            <div className="px-5 py-4 flex flex-wrap items-center gap-6 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px]">
                  TOTAL_PROCESSES
                </span>
                <span className="text-green-400 font-bold text-lg">
                  {experiences.length}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">
                  RUNNING
                </span>
                <span className="text-green-400 font-bold text-lg">
                  {experiences.filter((e) => e.status === 'RUNNING').length}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">
                  COMPLETED
                </span>
                <span className="text-cyan-400 font-bold text-lg">
                  {
                    experiences.filter((e) => e.status === 'COMPLETED')
                      .length
                  }
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px]">
                  TOTAL_THREADS
                </span>
                <span className="text-yellow-400 font-bold text-lg">
                  {experiences.reduce((s, e) => s + e.threads, 0)}
                </span>
              </div>
              <div className="md:ml-auto flex items-center gap-2 text-[10px]">
                <Cpu className="w-3 h-3 text-green-500/40" />
                <span className="text-zinc-500">LOAD:</span>
                <span className="text-green-400">[0.92]</span>
                <span className="text-green-400">[0.87]</span>
                <span className="text-cyan-400">[0.95]</span>
                <span className="ml-2 text-green-400 font-bold">
                  STATUS:{' '}
                  <motion.span
                    className="inline-block"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ■
                  </motion.span>{' '}
                  OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
