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

  const isAuthorized =
    !!process.env.ADMIN_SECRET_KEY &&
    providedSecret === process.env.ADMIN_SECRET_KEY;

  // If not authorized, show 404 immediately on the server
  if (!isAuthorized) {
    notFound();
  }

  // ✅ 2. Pass the secret key as a prop to the client component
  return <ResumeUploadClient secretKey={process.env.ADMIN_SECRET_KEY!} />;
}
