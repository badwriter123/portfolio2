'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Calendar, MapPin, Github } from 'lucide-react';

const experiences = [
  {
    id: 1,
    icon: Github,
    role: 'Open Source Contributor',
    company: '@mdn-webdocs/content  @HuggingFace/transformers',
    duration: 'Mar 2025 - Present',
    location: 'Remote',
    description: 'Active contributor to top tier open-source projects including MDN Web Docs content repository, and Hugging Face Transformers. Implemented new features, fixed bugs, and improved documentation. Contributed to the development of machine learning frameworks.',
    skills: ['@mdn-webdocs/content',  '@huggingFace/transformers', 'Open Source', 'GitHub', 'Machine Learning']
  },
  {
    id: 2,
    icon: Code,
    role: 'Backend Developer',
    company: 'Freelance',
    duration: 'Dec 2024 - Present',
    location: 'Remote',
    description: 'Designed and Implemented scalable, secure and high-performance server-side systems. Built robust APIs, managing databases, and integrating authentication, real-time communication, and complex business logics.',
    skills: ['Node.js', 'Express.js','PostgreSQL','GraphQL','WebSockets','Cursor AI','Github Actions']
  },
  {
    id: 3,
    icon: Brain,
    role: 'Machine Learning Research Intern',
    company: 'Varcons Technologies',
    duration: 'June 2024 - December 2024',
    location: 'Bangalore, India',
    description: 'Conducted machine learning research and Sentiment Analysis of tweets during Covid-19 Pandemic. Worked on data analysis, model optimization, and research documentation. Sentiment analysis was used to conduct Marketing Campaign and increased the brand Reach-out by 35%.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Research', 'ML Models']
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Experience
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Professional journey in <span className="text-green-500 text-2xl font-bold">Machine Learning Research</span> ,  <br /> <span className="text-green-500 text-2xl font-bold">Backend Development</span> and <span className="text-green-500 text-2xl font-bold">Open-Source Contributions.</span>
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-black/90 backdrop-blur-sm border-2 border-zinc-700/50 hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Company */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 border border-green-500/20">
                      <experience.icon className="w-8 h-8 text-green-400" />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold font-heading mb-2">
                          {experience.role}
                        </h3>
                        <p className="text-xl text-zinc-300 font-medium mb-2">
                          {experience.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end text-sm text-zinc-400">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 