'use client';

import { motion } from 'framer-motion';
import { Brain, Database, GraduationCap, Settings } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'Programming',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'DSA', level: 95 },
      { name: 'Debugging', level: 80 },
    ]
  },
  {
    icon: Database,
    title: 'Tools',
    skills: [
      { name: 'Cursor', level: 85 },
      { name: 'Langchain', level: 80 },
      { name: 'n8n Automation', level: 75 },
      { name: 'HuggingFace', level: 70 },
    ]
  },
  {
    icon: Settings,
    title: 'Platforms & Frameworks',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Claude', level: 90 },
      { name: 'LM Studio', level: 80 },
      { name: 'GCP', level: 75 },
    ]
  },
  {
    icon: GraduationCap,
    title: 'AI / ML Systems',
    skills: [
      { name: 'Fine-tuning LLMs', level: 85 },
      { name: 'RAG Pipelines', level: 80 },
      { name: 'Multimodal Models', level: 70 },
      { name: 'Agent Systems', level: 75 },
    ]
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My Skills
          </h2>
          <div className="w-12 h-0.5 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            I&apos;m constantly improving my skills and learning new technologies to stay current in the ever-evolving <span className= "text-2xl text-green-500 font-bold">AI landscape</span> and Use that Expertise in <span className = "text-2xl text-green-500 font-bold">Software Development</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:bg-black transition-all duration-300 border-2 border-zinc-700/50 hover:border-green-500/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-black group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold font-heading  transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full  rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-green-400"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 