'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Calendar, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Button } from '@/components/ui/button';
import { validateEmail } from '@/lib/utils';
import { personalInfo } from '@/data/config';
import type { ContactFormData } from '@/types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        'access_key',
        '5b3926b7-6e7c-4a94-afd3-f6b0cf9d4c0f'
      );
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.error('Web3Forms Error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <footer id="contact" className="py-32 fade-in-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <ScrollReveal animationType="fadeUp">
            <h2 className="numbered-heading mb-6 justify-center">
              What&apos;s Next?
            </h2>
          </ScrollReveal>

          <ScrollReveal animationType="fadeUp" delay={100}>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4 transition-colors duration-300">
              Get In Touch
            </h3>
          </ScrollReveal>

          <ScrollReveal animationType="fadeUp" delay={200}>
            <p className="max-w-xl mx-auto mb-8 text-secondary transition-colors duration-300">
              I&apos;m actively looking for new opportunities and my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </ScrollReveal>

          <ScrollReveal animationType="fadeUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://calendly.com/samatramazan-dev/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center text-lg font-mono px-8 py-3 h-12 min-w-[180px]"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Set Up Meeting
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center text-lg font-mono px-8 py-3 h-12 min-w-[180px]"
              >
                View Résumé
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animationType="fadeUp" delay={300}>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Your message..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-start pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="btn-glow inline-flex items-center justify-center text-lg font-mono px-8 py-3 h-12 min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              {submitStatus === 'error' && (
                <motion.p
                  className="text-red-500 text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}

              {submitStatus === 'success' && (
                <motion.p
                  className="text-green-500 text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </form>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="border-t border-border mt-16 pt-8">
          <ScrollReveal animationType="fadeUp" delay={400}>
            <div className="text-center text-secondary">
              <p className="mb-2">
                Designed & Built by{' '}
                <span className="text-primary font-medium">Ramazan Samat</span>
              </p>
              <p className="text-sm mb-2">
                Next.js 15 • TypeScript • Tailwind CSS • Framer Motion • Zustand
              </p>
              <p className="text-xs text-secondary/60">© 2025</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
