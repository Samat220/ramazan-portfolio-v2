'use client';

import { useThemeStore } from '@/lib/store';
import { useEffect, useState } from 'react';

interface ThemeAwareImageProps {
  darkSrc: string;
  lightSrc?: string;
  alt: string;
  className?: string;
}

export function ThemeAwareImage({
  darkSrc,
  lightSrc,
  alt,
  className,
}: ThemeAwareImageProps) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until after hydration
  if (!mounted) {
    return <img src={darkSrc} alt={alt} className={className} />;
  }

  // If no light mode image is provided, always use dark mode image
  if (!lightSrc) {
    return <img src={darkSrc} alt={alt} className={className} />;
  }

  // Determine which image to show based on theme
  const imageSrc = theme === 'light' ? lightSrc : darkSrc;

  return <img src={imageSrc} alt={alt} className={className} />;
}
