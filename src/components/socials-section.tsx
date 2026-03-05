'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Send,
  Loader2,
  Shield,
  Globe,
  ArrowRight,
  Fingerprint,
  Radio,
  Cpu,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const socials = [
  {
    name: 'GitHub',
    handle: '@badwriter123',
    icon: Github,
    href: 'https://github.com/badwriter123',
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.25)',
    protocol: 'git://',
    status: 'ACTIVE',
    ping: '12ms',
  },
  {
    name: 'Twitter',
    handle: '@Rohan_541_LC',
    icon: Twitter,
    href: 'https://x.com/Rohan_541_LC',
    color: '#60a5fa',
    glowColor: 'rgba(96, 165, 250, 0.25)',
    protocol: 'https://',
    status: 'ACTIVE',
    ping: '8ms',
  },
  {
    name: 'LinkedIn',
    handle: 'rohan-a-m',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rohan-a-m-114850289/',
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    protocol: 'https://',
    status: 'ACTIVE',
    ping: '15ms',
  },
  {
    name: 'Email',
    handle: 'rohanam2000@gmail.com',
    icon: Mail,
    href: 'mailto:rohanam2000@gmail.com',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.25)',
    protocol: 'smtp://',
    status: 'ACTIVE',
    ping: '3ms',
  },
];

const connectionProtocols = [
  { label: 'ENCRYPTION', value: 'AES-256-GCM' },
  { label: 'PROTOCOL', value: 'HTTPS/2.0' },
  { label: 'FIREWALL', value: 'PASS' },
  { label: 'TLS', value: 'v1.3' },
];

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

/* ════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════ */
export function SocialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'transmitting' | 'success' | 'error'
  >('idle');
  const [transmissionProgress, setTransmissionProgress] = useState(0);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [typedChars, setTypedChars] = useState(0);

  const scrambledTitle = useScrambleText('ESTABLISH CONNECTION', inView);

  /* ── Transmission progress animation ── */
  useEffect(() => {
    if (submitStatus !== 'transmitting') return;
    const interval = setInterval(() => {
      setTransmissionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSubmitStatus('success');
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('transmitting');
    setTransmissionProgress(0);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch('https://formspree.io/f/xyzpzzzl', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
      }, 2500);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="socials"
      className="relative py-24 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* ── Ambient gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,255,100,0.04) 0%, transparent 70%)',
            top: '0%',
            right: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,100,255,0.04) 0%, transparent 70%)',
            bottom: '0%',
            left: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.035) 0%, transparent 70%)',
            top: '50%',
            left: '40%',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 40, -30, 0], y: [0, -25, 35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
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
            {'>'} initiating connection protocol...
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
            <span className="relative inline-block">
              {/* RGB glitch layers */}
              <motion.span
                className="absolute text-red-500/30 blur-[0.5px]"
                style={{ left: 0, top: 0 }}
                animate={{
                  x: [0, -2, 2, 0],
                  y: [0, 1, -1, 0],
                }}
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
                animate={{
                  x: [0, 2, -2, 0],
                  y: [0, -1, 1, 0],
                }}
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
            All channels are open and monitored. Choose your preferred protocol.
          </motion.p>
        </motion.div>

        {/* ═══════════════ Main 3-Column Grid ═══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ─── LEFT: Connection Status Dashboard ─── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="crt-screen border border-green-500/20 bg-black/90 rounded-lg overflow-hidden backdrop-blur-md h-full">
              <div className="crt-scanlines" />
              <div className="crt-glow" />

              {/* Header */}
              <div className="px-4 py-3 border-b border-green-500/10 relative z-20">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs font-mono text-green-500/70 tracking-wider">
                    SYS_STATUS
                  </span>
                </div>
              </div>

              {/* Status content */}
              <div className="p-4 space-y-3 relative z-20 font-mono text-xs">
                {/* Connection indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{
                      opacity: [1, 0.3, 1],
                      boxShadow: [
                        '0 0 8px rgba(34,197,94,0.6)',
                        '0 0 2px rgba(34,197,94,0.2)',
                        '0 0 8px rgba(34,197,94,0.6)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-400">ONLINE</span>
                  <span className="text-green-500/40 ml-auto">●●●●○</span>
                </div>

                {/* Protocol statuses */}
                {connectionProtocols.map((proto, i) => (
                  <motion.div
                    key={proto.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-zinc-500">{proto.label}</span>
                    <span className="text-cyan-400">{proto.value}</span>
                  </motion.div>
                ))}

                <div className="h-px bg-green-500/10 my-2" />

                {/* Signal strength bars */}
                <div className="space-y-2">
                  <div className="text-zinc-500">SIGNAL_STRENGTH</div>
                  <div className="flex items-end gap-[3px] h-6">
                    {[0.3, 0.5, 0.7, 0.85, 1].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-2 bg-green-500 rounded-sm"
                        style={{ height: `${h * 100}%` }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-zinc-500">UPTIME</span>
                  <span className="text-green-400">99.97%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">AVG_RESPONSE</span>
                  <span className="text-cyan-400">&lt; 24h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">BANDWIDTH</span>
                  <span className="text-green-400">UNLIMITED</span>
                </div>

                <div className="h-px bg-green-500/10 my-2" />

                {/* Auth fingerprint */}
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-3.5 h-3.5 text-cyan-500/50" />
                  <span className="text-zinc-600 text-[10px]">
                    SHA256:xY7...kQ9
                  </span>
                </div>

                {/* Mini waveform */}
                <div className="mt-3 pt-3 border-t border-green-500/10">
                  <MiniWaveform inView={inView} />
                </div>

                {/* Data stream */}
                <DataStream inView={inView} />
              </div>
            </div>
          </motion.div>

          {/* ─── CENTER: Terminal Contact Form ─── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="crt-screen border border-cyan-500/30 bg-black/90 rounded-lg overflow-hidden backdrop-blur-md shadow-[0_0_40px_rgba(0,255,0,0.04)]">
              <div className="crt-scanlines" />
              <div className="crt-glow" />

              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-green-500/10 relative z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(234,179,8,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                <span className="ml-3 text-xs text-green-500/40 font-mono tracking-wide">
                  rohan@portfolio:~ send_message
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-green-500/40" />
                  <motion.span
                    className="text-[10px] font-mono text-green-500/40"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    LIVE
                  </motion.span>
                </div>
              </div>

              {/* Form body */}
              <div className="p-5 md:p-6 relative z-20">
                {/* Command intro */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="font-mono text-xs text-green-500/60 mb-5"
                >
                  <span className="text-green-500">root@rohan:~$</span>{' '}
                  compose_message --encrypt --priority=high
                </motion.div>

                <form
                  action="https://formspree.io/f/xyzpzzzl"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TerminalInput
                      label="SENDER_ID"
                      name="name"
                      type="text"
                      placeholder="your_name"
                      required
                      active={activeField === 'name'}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      onChange={() => setTypedChars((p) => p + 1)}
                    />
                    <TerminalInput
                      label="RETURN_ADDR"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      active={activeField === 'email'}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      onChange={() => setTypedChars((p) => p + 1)}
                    />
                  </div>

                  <TerminalInput
                    label="SUBJECT_LINE"
                    name="subject"
                    type="text"
                    placeholder="message_subject"
                    required
                    active={activeField === 'subject'}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    onChange={() => setTypedChars((p) => p + 1)}
                  />

                  {/* Textarea */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-mono mb-2">
                      <span className="text-cyan-500">{'>>'}</span>
                      <span
                        className={`transition-colors ${activeField === 'message' ? 'text-green-400' : 'text-zinc-500'}`}
                      >
                        MSG_BODY
                      </span>
                      {activeField === 'message' && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-green-500 text-[10px]"
                        >
                          [RECORDING]
                        </motion.span>
                      )}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      onChange={() => setTypedChars((p) => p + 1)}
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-800/80 rounded-lg text-green-300 font-mono text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300 resize-none"
                      placeholder="// write your message here..."
                    />
                  </div>

                  {/* Transmission progress */}
                  <AnimatePresence>
                    {submitStatus === 'transmitting' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-cyan-400">
                            TRANSMITTING...
                          </span>
                          <span className="text-green-400">
                            {Math.min(
                              100,
                              Math.floor(transmissionProgress)
                            )}
                            %
                          </span>
                        </div>
                        <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(100, transmissionProgress)}%`,
                              background:
                                'linear-gradient(90deg, #06b6d4, #22c55e, #06b6d4)',
                              backgroundSize: '200% 100%',
                            }}
                            animate={{
                              backgroundPosition: ['0% 0%', '100% 0%'],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        </div>
                        <div className="text-[10px] font-mono text-zinc-600">
                          {transmissionProgress < 30 &&
                            'Encrypting payload...'}
                          {transmissionProgress >= 30 &&
                            transmissionProgress < 60 &&
                            'Establishing secure tunnel...'}
                          {transmissionProgress >= 60 &&
                            transmissionProgress < 90 &&
                            'Transmitting data packets...'}
                          {transmissionProgress >= 90 &&
                            'Verifying delivery...'}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group px-6 py-3.5 rounded-lg font-mono text-sm font-medium transition-all duration-300 disabled:opacity-50 connect-btn"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 connect-btn-glow" />
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                          <span className="text-cyan-400">
                            TRANSMITTING...
                          </span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                          <span className="text-green-400">
                            TRANSMIT_MESSAGE
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-green-500/50 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Success / Error messages */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-xs font-mono text-green-400 bg-green-500/5 border border-green-500/20 rounded-lg p-3"
                      >
                        <span className="text-green-500">&#10003;</span>
                        MESSAGE_DELIVERED — Transmission successful. Expect
                        response within 24h.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-500/5 border border-red-500/20 rounded-lg p-3"
                      >
                        <span className="text-red-500">&#10007;</span>
                        TRANSMISSION_FAILED — Please retry or use an alternate
                        channel.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Keystroke counter + buffer */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600">
                    <span>KEYSTROKES: {typedChars}</span>
                    <span>
                      BUFFER: {typedChars > 0 ? 'ACTIVE' : 'IDLE'}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: Social Network Nodes ─── */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-mono text-cyan-500/70 tracking-wider uppercase">
                  Network Nodes
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent ml-2" />
              </div>

              {/* Social node cards */}
              {socials.map((social, index) => (
                <SocialNode
                  key={social.name}
                  social={social}
                  index={index}
                  inView={inView}
                />
              ))}

              {/* Network stats panel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="mt-6 border border-zinc-800/50 rounded-lg bg-black/40 overflow-hidden"
              >
                {/* Stats header */}
                <div className="px-4 py-2.5 border-b border-zinc-800/50 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-cyan-500/50" />
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                    NETWORK_METRICS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono p-4">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">
                      NODES_ACTIVE
                    </span>
                    <span className="text-green-400 text-lg font-bold">4</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">
                      TOTAL_REACH
                    </span>
                    <motion.span
                      className="text-cyan-400 text-lg font-bold inline-block"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      &infin;
                    </motion.span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">
                      PREFERRED
                    </span>
                    <span className="text-yellow-400 text-sm">EMAIL</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">
                      AVAILABILITY
                    </span>
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-green-500"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-green-400 text-sm">OPEN</span>
                    </div>
                  </div>
                </div>

                {/* Mini throughput graph */}
                <div className="px-4 pb-3">
                  <ThroughputGraph inView={inView} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .connect-btn {
          background: linear-gradient(
            135deg,
            rgba(0, 255, 100, 0.1),
            rgba(0, 200, 255, 0.1)
          );
          border: 1px solid rgba(0, 255, 100, 0.3);
        }
        .connect-btn-glow {
          background: linear-gradient(
            135deg,
            rgba(0, 255, 100, 0.15),
            rgba(0, 200, 255, 0.15)
          );
          box-shadow:
            0 0 20px rgba(0, 255, 100, 0.1),
            inset 0 0 20px rgba(0, 255, 100, 0.05);
        }
      `}</style>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   SUB-COMPONENTS
   ════════════════════════════════════════════════════ */

/* ── Terminal Input ── */
function TerminalInput({
  label,
  name,
  type,
  placeholder,
  required,
  active,
  onFocus,
  onBlur,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  active: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: () => void;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs font-mono mb-2">
        <span className="text-cyan-500">{'>>'}</span>
        <span
          className={`transition-colors duration-200 ${active ? 'text-green-400' : 'text-zinc-500'}`}
        >
          {label}
        </span>
        {active && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
          />
        )}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        className="w-full px-4 py-3 bg-black/50 border border-zinc-800/80 rounded-lg text-green-300 font-mono text-sm placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
}

/* ── Social Node Card ── */
function SocialNode({
  social,
  index,
  inView,
}: {
  social: (typeof socials)[0];
  index: number;
  inView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={social.href}
      target={social.name !== 'Email' ? '_blank' : undefined}
      rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.12, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block relative group"
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `linear-gradient(135deg, ${social.color}33, transparent, ${social.color}33)`,
          backgroundSize: '200% 200%',
          animation: isHovered ? 'socialBorderGlow 3s linear infinite' : 'none',
          filter: 'blur(3px)',
        }}
      />

      <div className="relative bg-black/80 border border-zinc-800/50 group-hover:border-transparent rounded-xl p-4 overflow-hidden transition-all duration-300">
        {/* Scanline overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(0deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 3px)',
            }}
          />
        </div>

        <div className="relative flex items-center gap-4">
          {/* Icon with glow */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ background: social.glowColor }}
            />
            <div
              className="relative w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300"
              style={{
                borderColor: isHovered
                  ? social.color + '40'
                  : 'rgba(63,63,70,0.5)',
                background: isHovered
                  ? social.color + '10'
                  : 'rgba(0,0,0,0.3)',
              }}
            >
              <social.icon
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: isHovered ? social.color : '#a1a1aa' }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-white">
                {social.name}
              </span>
              <span className="text-[10px] font-mono text-green-500/60 group-hover:text-green-400/80 transition-colors">
                [{social.status}]
              </span>
            </div>
            <div className="text-xs font-mono text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">
              {social.protocol}
              {social.handle}
            </div>
          </div>

          {/* Ping indicator */}
          <div className="text-right shrink-0">
            <div className="text-[10px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
              PING
            </div>
            <motion.div
              className="text-xs font-mono font-bold"
              style={{ color: social.color }}
              animate={isHovered ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {social.ping}
            </motion.div>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
        </div>
      </div>

      <style jsx>{`
        @keyframes socialBorderGlow {
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
    </motion.a>
  );
}

/* ── Animated Data Stream ── */
function DataStream({ inView }: { inView: boolean }) {
  const [stream, setStream] = useState('');

  useEffect(() => {
    if (!inView) return;
    const chars = '01';
    const interval = setInterval(() => {
      setStream((prev) => {
        const newChar = chars[Math.floor(Math.random() * chars.length)];
        return (prev + newChar).slice(-32);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="text-[10px] font-mono text-green-500/30 overflow-hidden whitespace-nowrap">
      <span className="text-green-500/50">DATA:</span> {stream}
      <motion.span
        className="inline-block w-1.5 h-2.5 bg-green-500/50 ml-0.5"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}

/* ── Mini Waveform (audio-style bars) ── */
function MiniWaveform({ inView }: { inView: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-mono text-zinc-500">WAVE:</span>
      <div className="flex items-end gap-[2px] h-4 flex-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-green-500/40 rounded-sm min-w-[2px]"
            animate={
              inView
                ? {
                    height: [
                      `${20 + Math.random() * 40}%`,
                      `${40 + Math.random() * 60}%`,
                      `${20 + Math.random() * 40}%`,
                    ],
                  }
                : {}
            }
            transition={{
              duration: 0.8 + Math.random() * 0.5,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
            style={{ height: '30%' }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Throughput mini-graph (sparkline) ── */
function ThroughputGraph({ inView }: { inView: boolean }) {
  const [points, setPoints] = useState<number[]>(() =>
    Array.from({ length: 20 }, () => Math.random() * 60 + 20)
  );

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1), Math.random() * 60 + 20];
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [inView]);

  const max = 100;
  const h = 24;
  const w = 100;
  const pathD = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - (p / max) * h;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  const areaD = `${pathD} L${w},${h} L0,${h} Z`;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-mono text-zinc-600">THROUGHPUT</span>
        <span className="text-[10px] font-mono text-cyan-500">
          {Math.floor(points[points.length - 1])} kb/s
        </span>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-6"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#throughputGrad)" />
        <path
          d={pathD}
          fill="none"
          stroke="rgba(6,182,212,0.6)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
