'use client';

import { motion } from 'framer-motion';

interface ProjectImagePlaceholderProps {
  title: string;
  index: number;
}

export function ProjectImagePlaceholder({
  title,
  index,
}: ProjectImagePlaceholderProps) {
  const colors = [
    'from-blue-400 to-purple-600',
    'from-green-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-yellow-400 to-red-500',
    'from-indigo-400 to-purple-600',
    'from-pink-400 to-red-500',
  ];

  const gradientClass = colors[index % colors.length];

  return (
    <motion.div
      className={`relative aspect-video rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center overflow-hidden shadow-lg`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
        <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full" />
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/50 rounded-full" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white/50 rounded-full" />

        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id={`grid-${index}`}
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#grid-${index})`} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative text-center text-white z-10">
        <motion.div
          className="text-4xl mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          📱
        </motion.div>
        <motion.p
          className="text-sm font-medium opacity-90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.p>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}
