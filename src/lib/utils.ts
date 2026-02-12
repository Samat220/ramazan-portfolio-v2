import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EMAIL_REGEX } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const debounce = <A extends unknown[]>(
  func: (...args: A) => void,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: A) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <A extends unknown[]>(
  func: (...args: A) => void,
  limit: number
) => {
  let inThrottle: boolean;
  return (...args: A) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
