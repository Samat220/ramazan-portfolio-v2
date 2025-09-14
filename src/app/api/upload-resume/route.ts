import { put, del, list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // ✅ Verify Authorization header
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (
      !token ||
      !process.env.ADMIN_SECRET_KEY ||
      token !== process.env.ADMIN_SECRET_KEY
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename') || 'ramazan_samat.pdf';

    // Validate file type
    if (!filename.endsWith('.pdf')) {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    const file = await request.blob();

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }

    // Delete existing resume if it exists
    try {
      const existingFiles = await list({ prefix: 'resume/' });
      for (const existingFile of existingFiles.blobs) {
        await del(existingFile.url);
      }
    } catch {
      // Ignore errors when deleting (file might not exist)
      console.log('No existing files to delete');
    }

    // Upload new resume
    const blob = await put(`resume/${filename}`, file, {
      access: 'public',
      contentType: 'application/pdf',
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: filename,
      uploadedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // ✅ Verify Authorization header for GET requests too
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (
      !token ||
      !process.env.ADMIN_SECRET_KEY ||
      token !== process.env.ADMIN_SECRET_KEY
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // List current resume files
    const files = await list({ prefix: 'resume/' });

    return NextResponse.json({
      files: files.blobs.map(blob => ({
        url: blob.url,
        filename: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    });
  } catch (error) {
    console.error('List error:', error);
    return NextResponse.json(
      { error: 'Failed to list files' },
      { status: 500 }
    );
  }
}
