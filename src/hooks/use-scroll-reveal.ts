import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    delay: 0,
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Apply delay if specified
            if (defaultOptions.delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
              }, defaultOptions.delay);
            } else {
              setIsVisible(true);
            }

            // Unobserve if triggerOnce is true
            if (defaultOptions.triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!defaultOptions.triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [
    defaultOptions.threshold,
    defaultOptions.rootMargin,
    defaultOptions.triggerOnce,
    defaultOptions.delay,
  ]);

  return { ref, isVisible };
};
