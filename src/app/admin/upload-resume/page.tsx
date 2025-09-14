import { notFound } from 'next/navigation';
import { ResumeUploadClient } from './upload-client';

// This is the server component that handles authentication
export default async function ResumeUploadPage({
  searchParams,
}: {
  // The 'searchParams' can sometimes be a promise, so awaiting it is a good practice.
  searchParams: { secret?: string };
}) {
  const providedSecret = searchParams.secret;

  const isAuthorized =
    !!process.env.ADMIN_SECRET_KEY &&
    providedSecret === process.env.ADMIN_SECRET_KEY;

  // If not authorized, show 404 immediately on the server
  if (!isAuthorized) {
    notFound();
  }

  // Only render the client component if authorized
  return <ResumeUploadClient />;
}
