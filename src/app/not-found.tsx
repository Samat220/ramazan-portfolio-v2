import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="me-mesh me-grain relative flex min-h-svh flex-col items-start justify-center gap-6 px-6 md:px-12">
      <h1 className="me-display text-[clamp(3.5rem,12vw,10rem)] uppercase text-white">
        Not found
      </h1>
      <p className="max-w-[34ch] text-[18px] leading-relaxed text-[#2b2833]">
        This page doesn&apos;t exist or has moved. The work is on the home page.
      </p>
      <Link href="/" className="me-pill me-pill--ink">
        Back to the home page
      </Link>
    </main>
  );
}
