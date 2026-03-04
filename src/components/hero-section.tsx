'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef, useCallback } from 'react';

export function HeroSection() {
  // Boot sequence
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [bootComplete, setBootComplete] = useState(false);
  const [showHero, setShowHero] = useState(false);

  // Scroll fade
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  // 3D tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);

  // ROHAN scramble
  const [scrambledName, setScrambledName] = useState('     ');

  // Terminal typing
  const [autoTypingCommand, setAutoTypingCommand] = useState(true);
  const [commandText, setCommandText] = useState('');
  const [commandExecuted, setCommandExecuted] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState(['', '', '', '', '', '']);

  const command = '--info';
  const lines = [
    "I build [Backend_Systems], Scalable_API's,",
    "leverage_AI() to ship_10x_faster();",
    "From distributed_systems, to payment_Infra",
    "I'm here to orchestrate.",
    "My AI-augmented workflows deliver fast MVP's.",
    "Finally, sudo rm -rf --> BOOM !!!"
  ];

  // ════════════════════════════════════
  // Boot Sequence
  // ════════════════════════════════════
  useEffect(() => {
    const messages = [
      { text: 'BIOS v4.2.0 ................... OK', delay: 100 },
      { text: 'CPU: Neural Engine @ 4.20 GHz', delay: 300 },
      { text: 'RAM: 32768 MB ................. OK', delay: 500 },
      { text: 'GPU: RTX QUANTUM .............. OK', delay: 700 },
      { text: 'NET: Stack initialized ........ OK', delay: 900 },
      { text: 'DSK: /dev/sda1 mounted', delay: 1100 },
      { text: '> Loading rohan_os v2.0 ...', delay: 1400 },
      { text: '> Mounting /home/rohan ...', delay: 1700 },
      { text: '> Starting portfolio.exe ...', delay: 2000 },
      { text: '[READY] All systems operational.', delay: 2300 },
    ];

    messages.forEach(({ text, delay }) => {
      setTimeout(() => setBootLines(prev => [...prev, text]), delay);
    });
    setTimeout(() => setBootComplete(true), 2700);
    setTimeout(() => setShowHero(true), 3200);
  }, []);

  // ════════════════════════════════════
  // ROHAN Name Scramble
  // ════════════════════════════════════
  useEffect(() => {
    if (!showHero) return;
    const target = 'ROHAN';
    const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!?<>{}[]';
    let iter = 0;

    const interval = setInterval(() => {
      setScrambledName(
        target.split('').map((_, i) =>
          i < iter ? target[i] : pool[Math.floor(Math.random() * pool.length)]
        ).join('')
      );
      if (iter >= target.length) clearInterval(interval);
      iter += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [showHero]);

  // ════════════════════════════════════
  // 3D Tilt
  // ════════════════════════════════════
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // ════════════════════════════════════
  // Auto-type Command
  // ════════════════════════════════════
  useEffect(() => {
    if (!showHero) return;
    if (autoTypingCommand && commandText.length < command.length) {
      const timer = setTimeout(() => {
        setCommandText(prev => command.slice(0, prev.length + 1));
      }, Math.random() * 3 + 3);
      return () => clearTimeout(timer);
    } else if (autoTypingCommand && commandText.length === command.length) {
      const timer = setTimeout(() => {
        setAutoTypingCommand(false);
        setCommandExecuted(true);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [commandText, autoTypingCommand, command, showHero]);

  // ════════════════════════════════════
  // Type Response Lines
  // ════════════════════════════════════
  useEffect(() => {
    if (commandExecuted && currentLine < lines.length) {
      const currentLineText = lines[currentLine];
      if (currentChar < currentLineText.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[currentLine] = currentLineText.slice(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        }, Math.random() * 30 + 20);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 800);
        return () => clearTimeout(timer);
      }
    }
  }, [currentChar, currentLine, lines, commandExecuted]);

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
    <section id="hero" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient Gradient Orbs - stays visible on scroll */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 100, 0.08) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 200, 255, 0.06) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Scroll-fading content wrapper */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >

      {/* ═══ Boot Sequence ═══ */}
      <AnimatePresence>
        {!showHero && (
          <motion.div
            key="boot"
            exit={{ opacity: 0, scale: 0.96, filter: 'blur(12px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/95"
          >
            <div className="font-mono text-sm max-w-xl w-full px-6">
              <motion.div
                className="border border-green-500/30 bg-black/90 p-6 rounded-lg"
                style={{
                  boxShadow: '0 0 40px rgba(0, 255, 0, 0.05), inset 0 0 40px rgba(0, 255, 0, 0.02)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-green-400 font-bold text-base tracking-[0.2em]">
                    ██ ROHAN_OS ██
                  </div>
                </div>
                <div className="h-px bg-green-500/20 mb-4" />

                {bootLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`mb-1.5 text-[13px] ${
                      line.includes('[READY]')
                        ? 'text-cyan-400 font-bold'
                        : line.startsWith('>')
                        ? 'text-green-300'
                        : line.includes('OK')
                        ? 'text-green-500'
                        : 'text-green-500/70'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}

                {!bootComplete && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-green-400 mt-2"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}

                {bootComplete && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-1 bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 mt-4 rounded origin-left"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Main Hero ═══ */}
      {showHero && (
        <>
          {/* Scrolling Quote at the top */}
          <div className="absolute top-8 left-0 right-0 overflow-hidden z-40">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -2000] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 25,
                    ease: 'linear',
                  },
                }}
              >
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-12 px-4 py-2 rounded bg-amber-950/15"
                      style={{ backdropFilter: 'blur(2px)' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 font-bold">⚠</span>
                        <p
                          className="text-sm md:text-base font-mono text-green-400 uppercase tracking-wide"
                          style={{
                            textShadow: '0 0 6px rgba(34, 197, 94, 0.3)',
                            filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4))',
                          }}
                        >
                          DISCLAIMER: BE THE GLITCH YOU WANT TO SEE IN THE MATRIX
                        </p>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="relative z-30 text-center max-w-4xl mx-auto px-6">
            {/* Name with scramble effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold mb-8 tracking-tight font-oswald uppercase"
            >
              Hello, I&apos;m{' '}
              <div className="inline-block relative">
                <div className="relative text-5xl md:text-8xl font-bold tracking-tight font-oswald uppercase">
                  <motion.span
                    className="absolute text-red-500 opacity-80"
                    animate={{
                      x: [0, -2, 2, -1, 1, 0],
                      y: [0, 1, -1, 2, -2, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    {scrambledName}
                  </motion.span>
                  <motion.span
                    className="absolute text-blue-600 opacity-80"
                    animate={{
                      x: [0, 2, -2, 1, -1, 0],
                      y: [0, -1, 1, -2, 2, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: 0.1,
                    }}
                  >
                    {scrambledName}
                  </motion.span>
                  <span>{scrambledName}</span>
                </div>
              </div>
            </motion.h1>

            {/* Terminal with CRT + 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto relative"
              style={{ perspective: '1000px' }}
            >
              <div
                ref={terminalRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative border border-cyan-500/30 bg-black/80 backdrop-blur-md p-6 rounded-lg shadow-2xl crt-screen"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                  boxShadow: `
                    0 0 30px rgba(0, 255, 0, 0.05),
                    0 ${20 + tilt.x}px ${40 + Math.abs(tilt.y) * 2}px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                {/* CRT Scanlines */}
                <div className="crt-scanlines" />
                {/* CRT Glow */}
                <div className="crt-glow" />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10 rounded-lg"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Terminal Header Bar */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-green-500/10 relative z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_6px_rgba(234,179,8,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                  <span className="ml-3 text-xs text-green-500/40 font-mono tracking-wide">
                    rohan@portfolio:~
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="text-green-400 leading-relaxed font-mono text-lg space-y-1 relative z-20">
                  {autoTypingCommand ? (
                    <div className="flex">
                      <span className="text-green-400">root@rohan:~$</span>
                      <span className="ml-2 text-green-400">{commandText}</span>
                      {autoTypingCommand && (
                        <motion.span
                          className="inline-block w-2 h-5 bg-green-400"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </div>
                  ) : (
                    <>
                      {/* Executed command */}
                      <div className="flex">
                        <span className="text-green-400">root@rohan:~$</span>
                        <span className="ml-2 text-green-400">{command}</span>
                      </div>

                      {/* Line 1 */}
                      {commandExecuted && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[0] &&
                              displayText[0]
                                .split('[Backend_Systems]')
                                .map((part, index, array) => (
                                  <span key={index}>
                                    {part.includes("Scalable_API's") ? (
                                      <>
                                        {part.split("Scalable_API's")[0]}
                                        <span className="text-yellow-400 font-bold glow-yellow">
                                          Scalable_API&apos;s
                                        </span>
                                        {part.split("Scalable_API's")[1]}
                                      </>
                                    ) : (
                                      part
                                    )}
                                    {index < array.length - 1 && (
                                      <span className="text-cyan-400 font-bold glow-cyan">
                                        [Backend_Systems]
                                      </span>
                                    )}
                                  </span>
                                ))}
                            {currentLine === 0 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {/* Line 2 */}
                      {displayText[1] && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[1].includes('leverage_AI()') ? (
                              <>
                                {displayText[1].split('leverage_AI()')[0]}
                                <span className="text-pink-400 font-bold glow-pink">
                                  leverage_AI()
                                </span>
                                {displayText[1]
                                  .split('leverage_AI()')[1]
                                  ?.includes('ship_10x_faster();') ? (
                                  <>
                                    {
                                      displayText[1]
                                        .split('leverage_AI()')[1]
                                        .split('ship_10x_faster();')[0]
                                    }
                                    <span className="text-yellow-400 font-bold glow-yellow">
                                      ship_10x_faster();
                                    </span>
                                    {
                                      displayText[1]
                                        .split('leverage_AI()')[1]
                                        .split('ship_10x_faster();')[1]
                                    }
                                  </>
                                ) : (
                                  displayText[1].split('leverage_AI()')[1]
                                )}
                              </>
                            ) : (
                              displayText[1]
                            )}
                            {currentLine === 1 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {/* Line 3 */}
                      {displayText[2] && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[2].includes('distributed_systems') ? (
                              <>
                                {displayText[2].split('distributed_systems')[0]}
                                <span className="text-orange-400 font-bold glow-orange">
                                  distributed_systems
                                </span>
                                {displayText[2]
                                  .split('distributed_systems')[1]
                                  ?.includes('payment_Infra') ? (
                                  <>
                                    {
                                      displayText[2]
                                        .split('distributed_systems')[1]
                                        .split('payment_Infra')[0]
                                    }
                                    <span className="text-purple-400 font-bold glow-purple">
                                      payment_Infra
                                    </span>
                                    {
                                      displayText[2]
                                        .split('distributed_systems')[1]
                                        .split('payment_Infra')[1]
                                    }
                                  </>
                                ) : (
                                  displayText[2].split('distributed_systems')[1]
                                )}
                              </>
                            ) : displayText[2].includes('payment_Infra') ? (
                              <>
                                {displayText[2].split('payment_Infra')[0]}
                                <span className="text-purple-400 font-bold glow-purple">
                                  payment_Infra
                                </span>
                                {displayText[2].split('payment_Infra')[1]}
                              </>
                            ) : (
                              displayText[2]
                            )}
                            {currentLine === 2 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {/* Line 4 */}
                      {displayText[3] && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[3].includes('high_performance_infrastructure') ? (
                              <>
                                {
                                  displayText[3].split(
                                    'high_performance_infrastructure'
                                  )[0]
                                }
                                <span className="text-purple-400 font-bold glow-purple">
                                  high_performance_infrastructure
                                </span>
                                {
                                  displayText[3].split(
                                    'high_performance_infrastructure'
                                  )[1]
                                }
                              </>
                            ) : (
                              displayText[3]
                            )}
                            {currentLine === 3 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {/* Line 5 */}
                      {displayText[4] && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[4].includes('AI-augmented workflows') ? (
                              <>
                                {displayText[4].split('AI-augmented workflows')[0]}
                                <span className="text-pink-400 font-bold glow-pink">
                                  AI-augmented workflows
                                </span>
                                {displayText[4].split('AI-augmented workflows')[1]}
                              </>
                            ) : (
                              displayText[4]
                            )}
                            {currentLine === 4 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {/* Line 6 - Danger */}
                      {displayText[5] && (
                        <div className="flex">
                          <span className="text-green-400">root@rohan:~$</span>
                          <span className="ml-2 text-green-400">
                            {displayText[5].includes('sudo rm -rf --> BOOM') ? (
                              <>
                                {displayText[5].split('sudo rm -rf --> BOOM')[0]}
                                <span className="text-red-400 font-bold glow-red">
                                  sudo rm -rf --&gt; BOOM
                                </span>
                                {displayText[5].split('sudo rm -rf --> BOOM')[1]}
                              </>
                            ) : (
                              displayText[5]
                            )}
                            {currentLine === 5 && (
                              <motion.span
                                className="inline-block w-2 h-5 bg-green-400"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <style jsx>{`
                  .glow-cyan {
                    text-shadow: 0 0 10px #00ffff;
                  }
                  .glow-pink {
                    text-shadow: 0 0 10px #ff1493;
                  }
                  .glow-yellow {
                    text-shadow: 0 0 10px #ffff00;
                  }
                  .glow-orange {
                    text-shadow: 0 0 10px #ffa500;
                  }
                  .glow-purple {
                    text-shadow: 0 0 10px #a855f7;
                  }
                  .glow-red {
                    text-shadow: 0 0 10px rgba(248, 113, 113, 0.9);
                  }
                `}</style>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                className="neumorphic-btn group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Your_Name_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Resume
              </Button>

              <Button
                className="neumorphic-btn group"
                onClick={() => (window.location.href = 'rohanam2000@gmail.com')}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get in touch
              </Button>
            </motion.div>
          </div>
        </>
      )}

      </motion.div>
    </section>
    </div>
  );
}
