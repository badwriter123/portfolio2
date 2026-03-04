'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const quote = "BE THE GLITCH YOU WANT TO SEE IN THE MATRIX";

export function ScrollingSection() {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [glitchTrigger, setGlitchTrigger] = useState(0);

  useEffect(() => {
    // Generate random characters for matrix effect
    const generateMatrixChars = () => {
      const chars = ['0', '1', '█', '▓', '▒', '░', '|', '/', '\\', '-', '+', '×'];
      return Array(100).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)]);
    };
    
    setMatrixChars(generateMatrixChars());
    
    // Update matrix characters periodically
    const interval = setInterval(() => {
      setMatrixChars(generateMatrixChars());
    }, 120);

    // Random glitch trigger
    const glitchInterval = setInterval(() => {
      setGlitchTrigger(prev => prev + 1);
    }, 3000 + Math.random() * 2000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, []);

  const GlitchText = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return (
        <div className="relative inline-block">
          <h2 className="relative text-6xl md:text-8xl lg:text-9xl font-black font-mono uppercase tracking-tight z-10 text-green-400">
            {children}
          </h2>
        </div>
      );
    }

    return (
      <div 
        className="relative inline-block cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow */}
        <div className="absolute inset-0 blur-xl bg-green-500/20 rounded-lg transform scale-110" />
        
        {/* Red channel (RGB separation effect) */}
        <motion.h2 
          className="absolute text-6xl md:text-8xl lg:text-9xl font-black font-mono uppercase tracking-tight text-red-500 mix-blend-screen"
          animate={{
            x: isHovered ? [-2, 2, -1, 1, 0] : [0, -0.5, 0.5, 0],
            y: isHovered ? [1, -1, 0.5, -0.5, 0] : 0,
            opacity: isHovered ? [0.8, 0.6, 0.9, 0.7, 0.8] : 0.3,
          }}
          transition={{
            duration: isHovered ? 0.2 : 2,
            repeat: isHovered ? 3 : Infinity,
            repeatType: "reverse",
          }}
        >
          {children}
        </motion.h2>

        {/* Blue channel (RGB separation effect) */}
        <motion.h2 
          className="absolute text-6xl md:text-8xl lg:text-9xl font-black font-mono uppercase tracking-tight text-blue-500 mix-blend-screen"
          animate={{
            x: isHovered ? [2, -2, 1, -1, 0] : [0, 0.5, -0.5, 0],
            y: isHovered ? [-1, 1, -0.5, 0.5, 0] : 0,
            opacity: isHovered ? [0.8, 0.6, 0.9, 0.7, 0.8] : 0.3,
          }}
          transition={{
            duration: isHovered ? 0.2 : 2.5,
            repeat: isHovered ? 3 : Infinity,
            repeatType: "reverse",
            delay: 0.1,
          }}
        >
          {children}
        </motion.h2>

        {/* Main green text */}
        <motion.h2 
          className="relative text-6xl md:text-8xl lg:text-9xl font-black font-mono uppercase tracking-tight z-10 text-green-400"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 24px rgba(34, 197, 94, 0.3))',
            textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.4)',
          }}
          animate={{
            scale: isHovered ? [1, 1.02, 1] : 1,
            filter: isHovered 
              ? [
                  'drop-shadow(0 0 12px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 24px rgba(34, 197, 94, 0.3))',
                  'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8)) drop-shadow(0 0 40px rgba(34, 197, 94, 0.5))',
                  'drop-shadow(0 0 12px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 24px rgba(34, 197, 94, 0.3))'
                ]
              : 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 24px rgba(34, 197, 94, 0.3))',
          }}
          transition={{
            duration: isHovered ? 0.3 : 1,
            repeat: isHovered ? 2 : 0,
          }}
        >
          {children}
        </motion.h2>

        {/* Matrix glitch overlay */}
        <motion.div
          className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black font-mono uppercase tracking-tight text-green-300 opacity-0 z-5 mix-blend-screen"
          animate={{
            opacity: isHovered ? [0, 0.4, 0.8, 0.2, 0] : [0, 0.1, 0],
            x: isHovered ? [-3, 3, -2, 2, 0] : [0, -1, 1, 0],
            y: isHovered ? [2, -2, 1, -1, 0] : 0,
          }}
          transition={{
            duration: isHovered ? 0.15 : 3,
            repeat: isHovered ? 4 : Infinity,
            repeatType: "reverse",
          }}
          key={glitchTrigger} // Force re-render on glitch trigger
        >
          {String(children).split('').map((char, i) => (
            <motion.span 
              key={i}
              animate={{
                opacity: Math.random() > 0.7 ? [0, 1, 0] : 1,
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 0.5,
              }}
            >
              {matrixChars[i % matrixChars.length] || char}
            </motion.span>
          ))}
        </motion.div>

        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent h-1 z-20"
          animate={{
            y: ['-100%', '100%'],
            opacity: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: isHovered ? 0.5 : 0,
            repeat: isHovered ? Infinity : 0,
            ease: "linear",
          }}
        />
      </div>
    );
  };

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array(20).fill(null).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-sm"
            style={{
              left: `${(i * 5) % 100}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            {matrixChars.slice(i * 5, i * 5 + 10).join('')}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 