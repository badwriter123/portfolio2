'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Github, Code, Brain } from 'lucide-react';
import { useRef } from 'react';

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
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.6', 'end 0.8'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-4">
            Experience
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Professional journey in{' '}
            <span className="text-green-500 font-bold">ML Research</span>,{' '}
            <span className="text-green-500 font-bold">Backend Development</span>{' '}
            and{' '}
            <span className="text-green-500 font-bold">Open-Source</span>.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-zinc-800">
            <motion.div
              className="w-full bg-gradient-to-b from-green-400 via-cyan-400 to-green-400 origin-top"
              style={{
                height: lineHeight,
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.4), 0 0 4px rgba(34, 197, 94, 0.6)',
              }}
            />
          </div>

          {/* Experience entries */}
          <div className="space-y-12">
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
                <div className="absolute left-6 md:left-8 top-2 -translate-x-1/2">
                  <div className="relative">
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-green-400/20"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    {/* Dot */}
                    <div
                      className="w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-black"
                      style={{
                        boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)',
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-black/80 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 rounded-xl p-6 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/15 transition-colors">
                        <exp.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-oswald uppercase tracking-wide">
                          {exp.role}
                        </h3>
                        <p className="text-green-400/80 font-mono text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end text-sm text-zinc-500 mt-2 lg:mt-0 gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-5 text-sm">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono bg-green-500/5 border border-green-500/15 rounded-md text-green-300/70 group-hover:text-green-300 group-hover:border-green-500/25 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
