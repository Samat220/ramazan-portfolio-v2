import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-secondary mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-accent border border-accent rounded hover:bg-accent/10 transition-all duration-300 font-mono"
          >
            ← Back to Home
          </Link>

          <div className="text-sm text-secondary">
            <p>Or navigate to:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="/#about"
                className="hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="hover:text-accent transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
