'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    icon: 'ⓦ',
    name: 'Wavely - Studio',
    description: 'Generate high-quality LinkedIn and Twitter Posts using Gemma3 LLM. Refine your posts with realtime Reach Score.',
    tech: ['Vite','React','TypeScript','Node.js', 'Gemma3-4B-Instruct'],
    links: {
      live: 'https://wavely-enhanced.vercel.app/',
      repo: 'https://github.com/badwriter123/Wavely-Enhanced'
      // caseStudy: '/projects/ai-content-generator'
    }
  },
  {
    id: 2,
    icon: '🔉',
    name: 'Hush - AI',
    description: 'Streamlit Dashboard Visualization of how Active Noise Cancellation works with further enhanced with AI.',
    tech: ['Python', 'Matplotlib', 'Numpy', 'Urbansound8k','StreamLit'],
    links: {
      // live: 'https://example.com',
      repo: 'https://github.com/badwriter123/hush_ai',
      // caseStudy: '/projects/analytics-dashboard'
    }
  },
  {
    id: 3,
    icon: '🎙️',
    name: 'Jack Up',
    description: 'Podcast research CLI tool to streamline podcast research time and Increase content creation focus.',
    tech: ['Mistral LLM', 'Llama3 LLM', 'Python', 'Ollama','Multi-Model'],
    links: {
      // live: 'https://example.com',
      repo: 'https://github.com/badwriter123/JackUp',
      // caseStudy: '/projects/saas-boilerplate'
    }
  },
  {
    id: 4,
    icon: '🤖',
    name: 'AI Agents / Automation Workflows',
    description: 'Built Automation AI agents to streamline workflow and reduce repetitive tasks',
    tech: ['n8n', 'Python', 'Node.js', 'TypeScript','Vue.js'],
    links: {
      // live: 'https://example.com',
      repo: 'https://github.com/badwriter123/my_ai_agents',
      // caseStudy: '/projects/mobile-pwa'
    }
  },
  {
    id: 5,
    icon: '🧠',
    name: 'Brain Pathology/Tumor Classification',
    description: 'A Hybrid Deep-Learning Algorithm to Analyse MRI Images and Identify Brain Tumors, Increase Accuracy to 99%.',
    tech: ['AlexNet', 'Transfer-Learning', 'User-Dashboard','Tumor Contour'],
    links: {
      // live: 'https://ai-chat-assistant.vercel.app/',
      download: '/research-paper.pdf'
    }
  },
  {
    id: 6,
    icon: '🤔',
    name: 'Twitter Sentiment Analysis',
    description: 'Conducted Sentiment Analysis of tweets during the covid-19 Pandemic to distinguish Emotions.',
    tech: ['Kaggle-Dataset', 'Twitter-API',  'Python', 'TypeScript','Node.JS'],
    links: {
      // live: 'https://example.com',
      repo: 'https://github.com/badwriter123/sentiment-analysis'
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Proof of Work
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Selected projects that showcase my ability to build and ship, leveraging AI to deliver faster and better. <span className='text-green-500 font-bold text-bold text-2xl'>And everyting is Open-source btw !!!</span>
          </p>
          {/* <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Do check out my github</p>
           */}
           {/* <p className="text-xl text-zinc-400 max-w-2xl mx-auto ">
              Do check out my{" "}
              <a
                href="https://github.com/badwriter123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline font-bold text-2xl text-bold"
              >
                Github
              </a>
            </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
                             <Card className="bg-black/90 backdrop-blur-sm border-2 border-zinc-700/50 hover:border-green-500/50 rounded-2xl p-4 group transition-all duration-300 aspect-square flex flex-col w-full max-w-xs mx-auto">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="text-3xl mb-3">{project.icon}</div>
                  <h3 className="text-lg font-bold font-heading mb-2  transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
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
                  {project.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:border-green-500/50 hover:bg-green-500/10"
                      onClick={() => window.open(project.links.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:border-green-500/50 hover:bg-green-500/10"
                      onClick={() => window.open(project.links.repo, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.links.download && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:border-green-500/50 hover:bg-green-500/10"
                      onClick={() => window.open(project.links.download, '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Download Paper
                    </Button>
                  )}
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 hover:border-green-500/50 hover:bg-green-500/10"
                    onClick={() => window.location.href = project.links.caseStudy}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Case Study
                  </Button> */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* And much more section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            <span className="text-green-500 font-bold text-2xl">And much more...</span>{" "}
            Check out my{" "}
            <a
              href="https://github.com/badwriter123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline font-bold text-2xl hover:text-green-400 transition-colors"
            >
              GitHub
            </a>{" "}
            for the complete collection!
          </p>
        </motion.div>
      </div>
    </section>
  );
} 