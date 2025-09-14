import { notFound } from 'next/navigation';
import { ResumeUploadClient } from './upload-client';

// This is the server component that handles authentication
export default async function ResumeUploadPage({
  searchParams,
}: {
  searchParams: Promise<{ secret?: string }>;
}) {
  const params = await searchParams;
  const providedSecret = params.secret;

  // Server-side authentication check
  const isAuthorized = providedSecret === process.env.ADMIN_SECRET_KEY;

  // If not authorized, show 404 immediately on the server
  if (!isAuthorized) {
    notFound();
  }

  // Only render the client component if authorized
  return <ResumeUploadClient />;
}
