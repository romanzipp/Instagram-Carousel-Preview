# Project Notes for Claude

## Project Overview

This is an Instagram carousel preview tool that allows users to:
- Upload a single long horizontal image containing multiple slides
- Select the number of slides (2-10)
- Preview how it will look in the Instagram app
- Share previews via unique URLs

## Key Technical Decisions

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with Inter font
- **Image Processing**: No processing - uses CSS background-position to show different portions of the uploaded image
- **Carousel**: Swiper.js for slide navigation
- **Storage**: Server-side file storage in public/uploads/ with JSON metadata
- **Deployment**: Docker container

## Implementation Details

### Image Display Logic
- Images are stored as-is on the server (no splitting)
- Each slide uses CSS `backgroundPosition` to show a different horizontal section
- Formula: `${(index / (slideCount - 1)) * 100}% center`
- This horizontally shifts through the image (0%, 50%, 100% for 3 slides)

### API Routes
- `/api/upload` - Uploads image and saves metadata
- `/api/preview/[id]` - Retrieves preview metadata

### File Structure
```
/app
  /api/upload/route.ts
  /api/preview/[id]/route.ts
  /page.tsx                 # Upload page
  /preview/[id]/page.tsx    # Preview page
/components
  /instagram
    /Header.tsx
    /Stories.tsx
    /Carousel.tsx
    /PostHeader.tsx
    /PostActions.tsx
    /PostDetails.tsx
    /Navigation.tsx
  /upload
    /ImageUpload.tsx
/lib
  /imageProcessor.ts        # Minimal - just reads file
  /urlGenerator.ts          # Preview data management
/public
  /uploads                  # Uploaded images and metadata
  /users                    # Sample profile pictures
```

## Development Guidelines

- No emojis in code or comments
- Use React components for all UI elements
- Mobile-first approach (full screen on mobile, phone frame on desktop)
- Keep Instagram UI authentic to the real app
- Assume slide dimensions are always 4:5 aspect ratio (1080x1350)
