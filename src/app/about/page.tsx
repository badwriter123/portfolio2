'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Code, Zap } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Engineer',
    company: 'Tech Startup',
    description: 'Leading development of AI-powered products, scaling to 100k+ users.',
    current: true
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Built 15+ client projects using modern web technologies, delivered on time and budget.'
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'E-commerce Company',
    description: 'Improved site performance by 40%, increased conversion rates through better UX.'
  },
  {
    year: '2021',
    title: 'Started Coding Journey',
    company: 'Self-taught',
    description: 'Began learning programming through online courses and building personal projects.'
  }
];

const stack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
  ai: ['OpenAI API', 'LangChain', 'Pinecone', 'Hugging Face', 'TensorFlow'],
  tools: ['VS Code', 'Git', 'Figma', 'Vercel', 'AWS', 'Linear']
};

const uses = [
  {
    category: 'Hardware',
    items: [
      'MacBook Pro 16" M2 Max',
      'LG 34" Ultrawide Monitor',
      'Magic Keyboard & Mouse',
      'Sony WH-1000XM4 Headphones'
    ]
  },
  {
    category: 'Software',
    items: [
      'VS Code with Vim bindings',
      'Arc Browser',
      'Raycast for productivity',
      'CleanMyMac for maintenance'
    ]
  },
  {
    category: 'Services',
    items: [
      'Vercel for deployment',
      'PlanetScale for databases',
      'Resend for emails',
      'Linear for project management'
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            About
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Building products that matter, one line of code at a time.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500/20 to-electric-500/20 p-1">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-2">Your Name</h2>
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <Coffee className="w-4 h-4" />
                    Coffee enthusiast
                  </div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-zinc prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-zinc-300">
                I&apos;m a full-stack developer passionate about building products that solve real problems. 
                With 3+ years of experience, I specialize in modern web technologies and AI integration.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                I believe in shipping fast, learning in public, and building with purpose. When I&apos;m not coding, 
                you&apos;ll find me writing about tech, exploring new frameworks, or contributing to open source.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.year} className="glass-card p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.current 
                        ? 'bg-gold-500/20 border-2 border-gold-500/50' 
                        : 'bg-zinc-800 border-2 border-zinc-700'
                    }`}>
                      <Calendar className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold font-heading">{item.title}</h3>
                      {item.current && (
                        <span className="px-2 py-1 text-xs bg-gold-500/20 text-gold-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-zinc-400 mb-2">{item.company} • {item.year}</div>
                    <p className="text-zinc-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(stack).map(([category, technologies]) => (
              <div key={category} className="glass-card p-6">
                <h3 className="text-lg font-semibold capitalize mb-4 text-gold-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Uses Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uses.map((section) => (
              <div key={section.category} className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-electric-400">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-zinc-300 flex items-center">
                      <span className="w-1 h-1 bg-electric-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 