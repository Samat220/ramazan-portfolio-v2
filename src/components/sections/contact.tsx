'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { ScrollReveal } from '@/components/common/scroll-reveal';
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
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send to an API endpoint
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
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
            <h2 className="numbered-heading mb-6 justify-center">What&apos;s Next?</h2>
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

              <div className="flex justify-center items-center space-x-4 pt-4">
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

                <a
                  href={personalInfo.resume}
                  download="RamazanSamat_Resume.pdf"
                  className="btn-glow inline-flex items-center justify-center text-lg font-mono px-8 py-3 h-12 min-w-[140px]"
                >
                  Resume
                </a>
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
      </div>
    </footer>
  );
}