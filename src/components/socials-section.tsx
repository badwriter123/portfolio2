'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Rss, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/badwriter123',
    color: 'hover:text-white'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/Rohan_541_LC',
    color: 'hover:text-blue-400'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rohan-a-m-114850289/',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:rohanam2000@gmail.com',
    color: 'hover:text-gold-400'
  }
];

export function SocialsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzpzzzl', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // This helps with CORS issues
      });

      // With no-cors mode, we can't read the response, so we assume success
      // Formspree will handle the actual submission
      setTimeout(() => {
        setSubmitStatus('success');
        // e.currentTarget.reset();
      }, 500); // Small delay to show the loading state
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="socials" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Find me across the web and stay updated with my latest work.
          </p>
        </motion.div>

        {/* Contact Form and Social Media Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold font-heading mb-6">Send me a message</h3>
              <form action="https://formspree.io/f/xyzpzzzl" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2 text-left">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2 text-left">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2 text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full neumorphic-btn group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center mt-4">
                    Message sent successfully! Thank you for reaching out.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">
                    Failed to send message. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Social Media - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold font-heading mb-8">Connect with me</h3>
            <div className="flex flex-col items-center gap-6">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`p-4 rounded-full glass-card group transition-all duration-300 ${social.color} w-full max-w-xs border-2 border-zinc-700/50 hover:border-green-500/50`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-6 h-6 text-zinc-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-zinc-300 font-medium">{social.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 