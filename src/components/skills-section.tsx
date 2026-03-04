'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: 'CORE MODULES',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'DSA', level: 95 },
      { name: 'Debugging', level: 80 },
    ],
  },
  {
    name: 'AI/ML SYSTEMS',
    skills: [
      { name: 'Fine-tuning LLMs', level: 85 },
      { name: 'RAG Pipelines', level: 80 },
      { name: 'Multimodal Models', level: 70 },
      { name: 'Agent Systems', level: 75 },
    ],
  },
  {
    name: 'TOOLCHAIN',
    skills: [
      { name: 'Cursor', level: 85 },
      { name: 'Langchain', level: 80 },
      { name: 'n8n Automation', level: 75 },
      { name: 'HuggingFace', level: 70 },
    ],
  },
  {
    name: 'PLATFORMS',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Claude', level: 90 },
      { name: 'LM Studio', level: 80 },
      { name: 'GCP', level: 75 },
    ],
  },
];

function bar(level: number): string {
  const w = 20;
  const filled = Math.round((level / 100) * w);
  return '\u2588'.repeat(filled) + '\u2591'.repeat(w - filled);
}

function statusColor(level: number): string {
  if (level >= 90) return 'text-cyan-400';
  if (level >= 80) return 'text-green-400';
  if (level >= 70) return 'text-yellow-400';
  return 'text-orange-400';
}

function statusLabel(level: number): string {
  if (level >= 90) return 'OPTIMAL';
  if (level >= 80) return 'ACTIVE';
  return 'STABLE';
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  let lineDelay = 0;
  const nextDelay = (step = 0.08) => {
    lineDelay += step;
    return lineDelay;
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-oswald uppercase"
        >
          System Diagnostics
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-zinc-400 mb-12"
        >
          Runtime skill analysis and subsystem status
        </motion.p>

        {/* Terminal Window */}
        <div className="crt-screen border border-cyan-500/30 bg-black/90 rounded-lg overflow-hidden backdrop-blur-md shadow-[0_0_40px_rgba(0,255,0,0.04)]">
          <div className="crt-scanlines" />
          <div className="crt-glow" />

          {/* Header bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green-500/10 relative z-20">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(234,179,8,0.4)]" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
            <span className="ml-3 text-xs text-green-500/40 font-mono tracking-wide">
              rohan@portfolio:~ diagnostics
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm relative z-20 space-y-0.5 overflow-x-auto">
            {/* Command */}
            <Line inView={inView} delay={nextDelay(0)}>
              <span className="text-green-500">root@rohan:~$</span>{' '}
              <span className="text-green-300">neofetch --skills</span>
            </Line>

            <div className="h-2" />

            {/* Neofetch header */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-2">
              {/* ASCII art */}
              <motion.pre
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-cyan-400 text-[10px] md:text-xs leading-tight select-none hidden md:block"
              >
{`    ____  ____  __  _____    _   __
   / __ \\/ __ \\/ / / /   |  / | / /
  / /_/ / / / / /_/ / /| | /  |/ /
 / _, _/ /_/ / __  / ___ |/ /|  /
/_/ |_|\\____/_/ /_/_/  |_/_/ |_/   `}
              </motion.pre>

              {/* System info */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-green-400 space-y-0.5"
              >
                <div><span className="text-cyan-400 font-bold">OS:</span> rohan_dev v2.0</div>
                <div><span className="text-cyan-400 font-bold">Kernel:</span> backend-core 4.2</div>
                <div><span className="text-cyan-400 font-bold">Uptime:</span> 3+ years</div>
                <div><span className="text-cyan-400 font-bold">Packages:</span> 16 skills loaded</div>
                <div><span className="text-cyan-400 font-bold">Shell:</span> zsh 5.9</div>
                <div><span className="text-cyan-400 font-bold">Resolution:</span> full-stack</div>
                <div className="flex gap-1.5 mt-2">
                  {['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-500', 'bg-cyan-500'].map((c) => (
                    <span key={c} className={`w-3.5 h-3.5 ${c} rounded-sm`} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Separator */}
            <Line inView={inView} delay={nextDelay(0.3)}>
              <span className="text-green-500/30">{'─'.repeat(56)}</span>
            </Line>

            <div className="h-1" />

            {/* Skill Categories */}
            {skillCategories.map((cat) => (
              <div key={cat.name} className="mb-3">
                <Line inView={inView} delay={nextDelay(0.15)}>
                  <span className="text-cyan-400 font-bold">
                    {'┌─ ' + cat.name + ' ' + '─'.repeat(Math.max(0, 44 - cat.name.length)) + '┐'}
                  </span>
                </Line>
                {cat.skills.map((skill) => (
                  <Line key={skill.name} inView={inView} delay={nextDelay(0.06)}>
                    <span className="text-green-500/40">│</span>
                    <span className={`ml-1 ${statusColor(skill.level)}`}>{bar(skill.level)}</span>
                    <span className="ml-2 text-green-300 inline-block w-28 md:w-36 truncate">{skill.name}</span>
                    <span className={`ml-auto ${statusColor(skill.level)}`}>[{skill.level}%]</span>
                    <span className={`ml-2 text-xs ${statusColor(skill.level)} hidden md:inline`}>{statusLabel(skill.level)}</span>
                    <span className="text-green-500/40 ml-2">│</span>
                  </Line>
                ))}
                <Line inView={inView} delay={nextDelay(0.04)}>
                  <span className="text-cyan-400/40">{'└' + '─'.repeat(50) + '┘'}</span>
                </Line>
              </div>
            ))}

            {/* Footer status */}
            <div className="h-1" />
            <Line inView={inView} delay={nextDelay(0.2)}>
              <span className="text-green-400">LOAD AVG:</span>
              <span className="text-cyan-400 ml-2">[0.87]</span>
              <span className="text-cyan-400 ml-1">[0.92]</span>
              <span className="text-cyan-400 ml-1">[0.85]</span>
              <span className="ml-auto text-cyan-400 font-bold">
                STATUS: <span className="text-green-400 animate-pulse">■</span> OPERATIONAL
              </span>
            </Line>

            {/* Blinking cursor */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: lineDelay + 0.3 }}
            >
              <motion.span
                className="inline-block w-2 h-3.5 bg-green-400 mt-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ children, inView, delay }: { children: React.ReactNode; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.2 }}
      className="flex items-center gap-0 whitespace-nowrap"
    >
      {children}
    </motion.div>
  );
}
