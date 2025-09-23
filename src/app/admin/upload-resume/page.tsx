import { notFound } from 'next/navigation';
import { ResumeUploadClient } from './upload-client';

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

  if (!isAuthorized) {
    notFound();
  }

  return <ResumeUploadClient secretKey={process.env.ADMIN_SECRET_KEY!} />;
}
