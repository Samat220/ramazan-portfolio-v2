'use client';

import { useState, useRef } from 'react';

export function ResumeUploadClient() {
  const [secretKey, setSecretKey] = useState('');
  const [secretInput, setSecretInput] = useState('');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setSecretKey(secretInput);
    setSecretInput('');
  };

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (!inputFileRef.current?.files?.[0]) {
      setMessage('Error: No file selected');
      setIsLoading(false);
      return;
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(
        `/api/upload-resume?filename=ramazan_samat.pdf`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${secretKey}`,
          },
          body: file,
        }
      );
      const newBlob = await response.json();

      if (response.ok) {
        setMessage(`Success! Your new resume is live at: ${newBlob.url}`);
      } else if (response.status === 401) {
        setMessage('Error: Invalid admin key');
        setSecretKey('');
      } else {
        setMessage(`Error: ${newBlob.error || 'Upload failed'}`);
      }
    } catch (error) {
      setMessage(
        `Error: ${error instanceof Error ? error.message : 'An unexpected error occurred'}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!secretKey) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-card-bg rounded-lg shadow-lg border border-border">
          <h1 className="text-2xl font-bold text-center text-primary">
            Admin Access
          </h1>
          <p className="text-center text-sm text-secondary">
            Enter the admin key to access the resume upload page.
          </p>
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              value={secretInput}
              onChange={e => setSecretInput(e.target.value)}
              placeholder="Admin key"
              required
              autoFocus
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-background bg-accent rounded-lg hover:bg-accent-hover transition-colors font-medium"
            >
              Unlock
            </button>
          </form>
          <div className="text-xs text-muted text-center">
            <p>🔒 Secure admin access</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-card-bg rounded-lg shadow-lg border border-border">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Update Resume</h1>
          <button
            onClick={() => {
              setSecretKey('');
              setMessage('');
            }}
            className="text-xs text-secondary hover:text-primary transition-colors"
          >
            🔒 Lock
          </button>
        </div>
        <p className="text-center text-sm text-secondary">
          Upload a new resume PDF. This will overwrite the previous version and
          update your portfolio instantly.
        </p>
        <form onSubmit={handleUpload} className="space-y-4">
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
          <p>Only PDF files • Max 10MB</p>
        </div>
      </div>
    </div>
  );
}
