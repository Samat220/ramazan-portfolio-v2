'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { personalInfo } from '@/data/config';

export function Socials() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: <GithubIcon size={20} />,
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: <LinkedinIcon size={20} />,
    },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-6 sm:left-12 md:left-24 hidden md:flex flex-col items-center space-y-6 z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-secondary hover:text-accent hover:-translate-y-1 transition-all duration-300 p-2"
            aria-label={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <motion.div
        className="w-px h-24 bg-secondary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      />
    </motion.div>
  );
}
