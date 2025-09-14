# Resume Management with Vercel Blob Storage

## Overview

Your portfolio now uses Vercel Blob Storage to host your resume, providing:

- ✅ Reliable CDN delivery
- ✅ Secure web-based upload interface
- ✅ Easy version management
- ✅ Professional PDF viewing

## Current Resume URL

```
https://oysrscezxk9outav.public.blob.vercel-storage.com/resume/ramazan_samat.pdf
```

## Setup Environment Variables

1. Copy `.env.example` to `.env.local`
2. Add your environment variables:

   ```bash
   # Your Vercel Blob Read-Write Token
   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_oysrsCeZXK9OUTaV_Kpozywm6N9ewqasa8EaVUvBf7HJfBA

   # Generate a secure admin key (use a password generator)
   ADMIN_SECRET_KEY=your_super_secure_secret_key_here
   ```

## Updating Your Resume

### Web Interface (Recommended)

Visit the secure admin page with your secret key:

```
https://your-domain.com/admin/upload-resume?secret=your_super_secure_secret_key_here
```

**Features:**

- 🎨 Clean, responsive interface matching your portfolio theme
- 📱 Works on desktop and mobile
- 🔒 Secret key protection (shows 404 if wrong key)
- ✅ Real-time upload feedback
- 📄 PDF validation and 10MB size limit
- 🔄 Automatic replacement of old versions

### Local Development

```bash
http://localhost:3000/admin/upload-resume?secret=your_super_secure_secret_key_here
```

### API Endpoint (Advanced)

```bash
curl -X POST \
  -H "Content-Type: application/pdf" \
  --data-binary @resume.pdf \
  "https://your-domain.com/api/upload-resume?filename=ramazan_samat.pdf"
```

## Security Features

- � **Secret Key Protection**: Admin page hidden behind secret parameter
- 🚫 **PDF Only**: Only PDF files allowed
- 📏 **Size Limit**: Maximum 10MB file size
- 🔄 **Auto Replacement**: Old versions automatically deleted
- �️ **404 Protection**: Wrong secret shows not found page

## File Management

- Resume files are stored in the `resume/` folder on Vercel Blob
- Old versions are automatically deleted when uploading new ones
- Files are publicly accessible but upload is restricted
- Direct CDN delivery for fast loading

## Benefits Over Previous Solutions

- **🎯 Professional Interface**: Clean upload form matching your portfolio
- **📱 Mobile Friendly**: Upload from anywhere, any device
- **🚀 Fast Performance**: Vercel CDN delivers files globally
- **🔒 Secure**: Hidden admin interface with secret key protection
- **💡 User Friendly**: Drag & drop, instant feedback, error handling
- **🔄 Automatic**: No manual file management needed

## Monitoring

Check current resume files via API:

```
GET https://your-domain.com/api/upload-resume
```

Returns metadata about current resume files.

## Troubleshooting

### File Too Large

- Maximum file size is 10MB
- Compress your PDF if needed

### Upload Failed

- Check your BLOB_READ_WRITE_TOKEN is correct
- Ensure PDF file format
- Try refreshing the page

### 404 Page

- Double-check your ADMIN_SECRET_KEY in .env.local
- Ensure the secret parameter matches exactly
- Case sensitive!
