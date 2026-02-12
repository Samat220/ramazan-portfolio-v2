'use client';

import { motion } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/components/ui/modal-provider';
import { useContactFormLogic } from '@/hooks/useContactForm';

interface ContactFormContentProps {
  onSuccess?: () => void;
}

function ContactFormContent({ onSuccess }: ContactFormContentProps) {
  const { closeModal } = useModal();
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleInputChange,
  } = useContactFormLogic({
    onSuccess: () => {
      closeModal();
      onSuccess?.();
    },
  });

  return (
    <motion.div
      className="bg-card-bg rounded-lg p-8 max-w-md w-full border border-border"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 id="modal-title" className="text-2xl font-medium text-primary">
          Get In Touch
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={closeModal}
          className="text-secondary hover:text-primary"
          disabled={isSubmitting}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="modal-name"
            className="block text-sm font-medium text-primary mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="modal-name"
            value={formData.name}
            onChange={e => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            placeholder="Your name"
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'modal-name-error' : undefined}
          />
          {errors.name && (
            <p
              id="modal-name-error"
              role="alert"
              className="mt-1 text-sm text-red-500"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="modal-email"
            className="block text-sm font-medium text-primary mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="modal-email"
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            placeholder="your@email.com"
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'modal-email-error' : undefined}
          />
          {errors.email && (
            <p
              id="modal-email-error"
              role="alert"
              className="mt-1 text-sm text-red-500"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="modal-message"
            className="block text-sm font-medium text-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="modal-message"
            rows={4}
            value={formData.message}
            onChange={e => handleInputChange('message', e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Your message..."
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? 'modal-message-error' : undefined
            }
          />
          {errors.message && (
            <p
              id="modal-message-error"
              role="alert"
              className="mt-1 text-sm text-red-500"
            >
              {errors.message}
            </p>
          )}
        </div>

        <motion.div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={closeModal}
            disabled={isSubmitting}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className="flex-1 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : submitStatus === 'success' ? (
              'Sent!'
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </motion.div>

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
            Message sent successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export function useContactForm() {
  const { openModal } = useModal();

  const openContactForm = (onSuccess?: () => void) => {
    openModal(<ContactFormContent onSuccess={onSuccess} />);
  };

  return { openContactForm };
}
