'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [autoTypingCommand, setAutoTypingCommand] = useState(true);
  const [commandText, setCommandText] = useState('');
  const [commandExecuted, setCommandExecuted] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState(['', '', '', '', '', '']);
  
  const command = '--info';
  const lines = [
    "I build fast [AI_DRIVEN_APPLICATIONS], ship quickly,",
    "learn/build_in_public() && leverage_AI_for_dev();",
    "From understanding_large_codebases, to ",
    "building_complex_codebases, I can Handle it.",
    // " I'm sure I can Handle it. ",
    "Currently contributing to open-source @huggingface/transformers and @mdn_webdocs/content",
    "Finally, sudo rm -rf --> BOOM !!!"
  ];

  // Auto-type the command
  useEffect(() => {
    if (autoTypingCommand && commandText.length < command.length) {
      const timer = setTimeout(() => {
        setCommandText(prev => command.slice(0, prev.length + 1));
      }, Math.random() * 3 + 3); // Random typing speed for command
      
      return () => clearTimeout(timer);
    } else if (autoTypingCommand && commandText.length === command.length) {
      // Command fully typed, execute it after a pause
      const timer = setTimeout(() => {
        setAutoTypingCommand(false);
        setCommandExecuted(true);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 1000); // 1 second pause before execution
      
      return () => clearTimeout(timer);
    }
  }, [commandText, autoTypingCommand, command]);

  // Type the response lines
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
        }, Math.random() * 30 + 20); // Random typing speed between 20-50ms
        
        return () => clearTimeout(timer);
      } else {
        // Move to next line after a pause
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 800);
        
        return () => clearTimeout(timer);
      }
    }
  }, [currentChar, currentLine, lines, commandExecuted]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Scrolling Quote at the top */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden z-40">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {Array(6).fill(null).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 px-4 py-2 rounded bg-amber-950/15"
              style={{
                backdropFilter: 'blur(2px)',
              }}
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
      </div>



      
      <div className="relative z-30 text-center max-w-4xl mx-auto px-6">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl font-bold mb-8 tracking-tight font-oswald uppercase"
        >
          Hello, I&apos;m{' '}
          <div className="inline-block relative">
            {/* Glitch effect layers */}
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
                  repeatType: "reverse",
                }}
              >
                ROHAN
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
                  repeatType: "reverse",
                  delay: 0.1,
                }}
              >
                ROHAN
              </motion.span>
              <span className="">
                ROHAN
              </span>
            </div>

            
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto relative"
          style={{ transform: 'rotate(0deg)' }}
        >
          {/* Terminal-style border */}
          <div className="relative border border-cyan-500/30 bg-black/80 backdrop-blur-md p-6 rounded-lg shadow-2xl">
            {/* Glitch lines */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />


            <div className="text-green-400 leading-relaxed font-mono text-lg space-y-1">
              {autoTypingCommand ? (
                /* Auto-typing Command */
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
                  {/* Show executed command */}
                  <div className="flex">
                    <span className="text-green-400">root@rohan:~$</span>
                    <span className="ml-2 text-green-400">{command}</span>
                  </div>

                  {/* Line 1 */}
                  {commandExecuted && (
                    <div className="flex">
                      <span className="text-green-400">root@rohan:~$</span>
                      <span className="ml-2 text-green-400">
                        {displayText[0] && displayText[0].split('[AI_DRIVEN_APPLICATIONS]').map((part, index, array) => (
                          <span key={index}>
                            {part}
                            {index < array.length - 1 && (
                              <span className="text-cyan-400 font-bold glow-cyan">
                                [AI-DRIVEN_APPLICATIONS]
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
                        {displayText[1].includes('learn/build_in_public()') ? (
                          <>
                            {displayText[1].split('learn/build_in_public()')[0]}
                            <span className="text-pink-400 font-bold glow-pink">learn/build_in_public()</span>
                            {displayText[1].split('learn/build_in_public()')[1]?.includes('leverage_AI_for_dev();') ? (
                              <>
                                {displayText[1].split('learn/build_in_public()')[1].split('leverage_AI_for_dev();')[0]}
                                <span className="text-yellow-400 font-bold glow-yellow">leverage_AI_for_dev();</span>
                                {displayText[1].split('learn/build_in_public()')[1].split('leverage_AI_for_dev();')[1]}
                              </>
                            ) : (
                              displayText[1].split('learn/build_in_public()')[1]
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
                        {displayText[2].includes('understanding_large_codebases') ? (
                          <>
                            {displayText[2].split('understanding_large_codebases')[0]}
                            <span className="text-orange-400 font-bold glow-orange">understanding_large_codebases</span>
                            {displayText[2].split('understanding_large_codebases')[1]?.includes('building_complex_ones') ? (
                              <>
                                {displayText[2].split('understanding_large_codebases')[1].split('building_complex_ones')[0]}
                                <span className="text-purple-400 font-bold glow-purple">building_complex_codebases</span>
                                {displayText[2].split('understanding_large_codebases')[1].split('building_complex_ones')[1]}
                              </>
                            ) : (
                              displayText[2].split('understanding_large_codebases')[1]
                            )}
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

                  {/* Line 4 - Highlight building_complex_codebases */}
                  {displayText[3] && (
                    <div className="flex">
                      <span className="text-green-400">root@rohan:~$</span>
                      <span className="ml-2 text-green-400">
                        {displayText[3].includes('building_complex_codebases') ? (
                          <>
                            {displayText[3].split('building_complex_codebases')[0]}
                            <span className="text-purple-400 font-bold glow-purple">building_complex_codebases</span>
                            {displayText[3].split('building_complex_codebases')[1]}
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

                  {/* Line 5 - Comment */}
                  {displayText[4] && (
                    <div className="flex">
                      <span className="text-green-400">root@rohan:~$</span>
                      <span className="ml-2 text-green-400">
                        {displayText[4].includes('@huggingface/transformers') ? (
                          <>
                            {displayText[4].split('@huggingface/transformers')[0]}
                            <span className="text-pink-400 font-bold glow-pink">@huggingface/transformers</span>
                            {displayText[4].split('@huggingface/transformers')[1]?.includes('@mdn_webdocs/content') ? (
                              <>
                                {displayText[4]
                                  .split('@huggingface/transformers')[1]
                                  .split('@mdn_webdocs/content')[0]}
                                <span className="text-purple-400 font-bold glow-purple">@mdn_webdocs/content</span>
                                {displayText[4]
                                  .split('@huggingface/transformers')[1]
                                  .split('@mdn_webdocs/content')[1]}
                              </>
                            ) : (
                              displayText[4].split('@huggingface/transformers')[1]
                            )}
                          </>
                        ) : displayText[4].includes('@mdn_webdocs/content') ? (
                          <>
                            {displayText[4].split('@mdn_webdocs/content')[0]}
                            <span className="text-purple-400 font-bold glow-purple">@mdn_webdocs/content</span>
                            {displayText[4].split('@mdn_webdocs/content')[1]}
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

                  {/* Line 6 - Danger highlight */}
                  {displayText[5] && (
                    <div className="flex">
                      <span className="text-green-400">root@rohan:~$</span>
                      <span className="ml-2 text-green-400">
                        {displayText[5].includes('sudo rm -rf --> BOOM') ? (
                          <>
                            {displayText[5].split('sudo rm -rf --> BOOM')[0]}
                            <span className="text-red-400 font-bold glow-red">sudo rm -rf --&gt; BOOM</span>
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
              .glow-cyan { text-shadow: 0 0 10px #00ffff; }
              .glow-pink { text-shadow: 0 0 10px #ff1493; }
              .glow-yellow { text-shadow: 0 0 10px #ffff00; }
              .glow-orange { text-shadow: 0 0 10px #ffa500; }
              .glow-purple { text-shadow: 0 0 10px #a855f7; }
              .glow-red { text-shadow: 0 0 10px rgba(248, 113, 113, 0.9); }
            `}</style>




          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            className="neumorphic-btn group"
            onClick={() => {
              // Create a link element and trigger download
              const link = document.createElement('a');
              link.href = '/resume.pdf'; // You'll need to add your resume.pdf to the public folder
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
            onClick={() => window.location.href = 'rohanam2000@gmail.com'}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get in touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 