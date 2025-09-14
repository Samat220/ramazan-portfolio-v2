'use client';

import { useState, useRef } from 'react';
import { notFound } from 'next/navigation';

// This component will do the check and render the upload form if successful
function Uploader({ isAuthorized }: { isAuthorized: boolean }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // If not authorized, immediately show a 404 page
  if (!isAuthorized) {
    notFound();
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected');
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(
        `/api/upload-resume?filename=ramazan_samat.pdf`,
        { method: 'POST', body: file }
      );
      const newBlob = await response.json();

      if (response.ok) {
        setMessage(`Success! Your new resume is live at: ${newBlob.url}`);
      } else {
        setMessage(`Error: ${newBlob.error || 'Upload failed'}`);
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-card-bg rounded-lg shadow-lg border border-border">
        <h1 className="text-2xl font-bold text-center text-primary">
          Update Resume
        </h1>
        <p className="text-center text-sm text-secondary">
          Upload a new resume PDF. This will overwrite the previous version and
          update your portfolio instantly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            accept=".pdf"
            className="block w-full text-sm text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-background hover:file:bg-accent-hover transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-background bg-accent rounded-lg hover:bg-accent-hover disabled:bg-muted disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isLoading ? 'Uploading...' : 'Upload New Resume'}
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-4 rounded-lg text-sm break-all ${
              message.includes('Success')
                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
            }`}
          >
            {message}
          </div>
        )}
        <div className="text-xs text-muted text-center">
          <p>🔒 Secure admin access</p>
          <p>Only PDF files • Max 10MB</p>
        </div>
      </div>
    </div>
  );
}

// This is the main page component that runs on the server first
export default function ResumeUploadPage({
  searchParams,
}: {
  searchParams: { secret?: string };
}) {
  const providedSecret = searchParams.secret;

  // Compare the secret from the URL with the one from your environment variables
  // Note: process.env is only available on the server, which is why we do the check here.
  const isAuthorized = providedSecret === process.env.ADMIN_SECRET_KEY;

  return <Uploader isAuthorized={isAuthorized} />;
}
