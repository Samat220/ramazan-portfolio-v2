import { useState, useEffect, useMemo } from 'react';
import { throttle } from '@/lib/utils';

export function useScrollDetection(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        setIsScrolled(window.scrollY > threshold);
      }, 100),
    [threshold]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isScrolled;
}
