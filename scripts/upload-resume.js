#!/usr/bin/env node

/**
 * Resume Upload Utility
 *
 * Usage: node scripts/upload-resume.js path/to/resume.pdf
 *
 * Make sure to set RESUME_UPLOAD_TOKEN in your environment variables
 */

import fs from 'fs';
import path from 'path';

async function uploadResume(filePath) {
  if (!filePath) {
    console.error('Usage: node upload-resume.js <path-to-pdf>');
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const token = process.env.RESUME_UPLOAD_TOKEN;
  if (!token) {
    console.error('RESUME_UPLOAD_TOKEN environment variable is required');
    process.exit(1);
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const filename = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);

  try {
    console.log('Uploading resume...');

    const response = await fetch(
      `${baseUrl}/api/upload-resume?filename=${filename}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/pdf',
        },
        body: fileBuffer,
      }
    );

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Resume uploaded successfully!');
      console.log(`📄 URL: ${result.url}`);
      console.log(`📅 Uploaded at: ${result.uploadedAt}`);
    } else {
      console.error('❌ Upload failed:', result.error);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Upload error:', error.message);
    process.exit(1);
  }
}

// Get file path from command line arguments
const filePath = process.argv[2];
uploadResume(filePath);
