import { useCallback } from 'react';
import { scrollToElement } from '@/lib/utils';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId: string, offset: number = 80) => {
    scrollToElement(elementId, offset);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToElement: scrollTo, scrollToTop };
};
