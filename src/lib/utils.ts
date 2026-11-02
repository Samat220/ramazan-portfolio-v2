import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EMAIL_REGEX } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};
