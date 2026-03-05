'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ScrollingSection() {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const generateMatrixChars = () => {
      const chars = ['0', '1', '█', '▓', '▒', '░', '|', '/', '\\', '-', '+', '×'];
      return Array(100).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)]);
    };

    setMatrixChars(generateMatrixChars());

    const interval = setInterval(() => {
      setMatrixChars(generateMatrixChars());
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
