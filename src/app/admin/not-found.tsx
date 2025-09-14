import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-secondary max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or you don&apos;t
          have permission to access it.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors font-medium"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
