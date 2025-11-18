# Instagram Carousel Preview Tool

A web application that allows users to preview how their multi-slide images will look in the Instagram carousel format before posting.

## Features

- Upload a single long image containing multiple slides
- Select the number of slides the image should be divided into
- Preview how the carousel will appear in the Instagram app
- Swipe through slides with touch/mouse gestures
- Generate unique shareable URLs for previews
- Authentic Instagram UI replica
- Mobile-first design with desktop phone frame view

## Project Plan

### Phase 1: Project Setup
- Initialize Next.js project (DONE)
- Set up Docker configuration
- Install required dependencies
  - Image processing library
  - Swipe/gesture library (swiper or react-swipeable)
  - UUID generation for unique URLs
  - Storage solution for uploaded images

### Phase 2: Core Components

#### Instagram UI Components
- **Header Component**: Plus icon (left), "For you" text (center), Heart icon (right)
- **Stories Component**: 3-8 circular story avatars with sample names
- **Carousel Component**: Main preview area with dot indicators
- **Navigation Component**: Bottom nav with 5 icons (Home, Reels, Messages, Search, Profile)

#### Upload & Processing
- Image upload component
- Slide count selector (2-10 slides)
- Image splitting logic (divide single image into N equal parts)
- Preview state management

### Phase 3: Carousel Functionality
- Swipe gesture detection
- Slide navigation (left/right)
- Dot indicator showing current slide
- Smooth transitions between slides
- Touch and mouse support

### Phase 4: URL Generation & Sharing
- Generate unique IDs for each upload
- Store image data (consider local storage, database, or cloud storage)
- Create shareable routes (/preview/[id])
- Handle preview retrieval by ID

### Phase 5: Responsive Layout
- Mobile-first CSS (full screen on mobile)
- Desktop view: centered phone frame (375px width typical)
- Safe area handling for modern phones

### Phase 6: Deployment
- Docker configuration
- Environment variables setup
- Build optimization
- Production deployment

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: CSS Modules / Tailwind CSS
- **Image Processing**: Canvas API / sharp
- **Carousel**: Swiper.js or custom implementation
- **Storage**: Local storage (MVP) or database for production
- **Deployment**: Docker container

## File Structure

```
/app
  /page.tsx                 # Upload page
  /preview/[id]/page.tsx    # Preview page
/components
  /instagram
    /Header.tsx
    /Stories.tsx
    /Carousel.tsx
    /Navigation.tsx
  /upload
    /ImageUpload.tsx
    /SlideCountSelector.tsx
  /layout
    /PhoneFrame.tsx
/lib
  /imageProcessor.ts        # Image splitting logic
  /urlGenerator.ts          # Unique URL generation
/public
  /icons                    # Instagram UI icons
```

## Development Phases

1. Basic upload and image splitting
2. Instagram UI components
3. Carousel with swipe functionality
4. URL generation and routing
5. Styling and polish
6. Docker setup
7. Testing and deployment

## Running the Project

```bash
# Development
npm install
npm run dev

# Docker
docker build -t carousel-preview .
docker run -p 3000:3000 carousel-preview
```
