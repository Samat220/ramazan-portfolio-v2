import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="frame flex min-h-svh flex-col justify-center gap-8">
      <h1 className="display" style={{ fontSize: 'var(--step-display)' }}>
        Not found
      </h1>
      <p style={{ fontSize: 'var(--step-lead)' }} className="max-w-[32ch]">
        This page doesn&apos;t exist or has moved. The work is on the home page.
      </p>
      <Link href="/" className="button self-start">
        Back to the home page
      </Link>
    </main>
  );
}
