# Instagram Carousel Preview Tool

Preview how your multi-slide images will look in the Instagram carousel format before posting.

![](art/preview.jpg)

> [!WARNING]
> This project is a complete vibe-coded hellhole of garbage. Read code at your own caution. Redirect frustration at [Anthropic](https://support.claude.com/en/articles/9015913-how-to-get-support).

## Features

- Upload a single horizontal image containing multiple slides
- Select the number of slides (2-10)
- Preview in authentic Instagram UI
- Swipe through slides with touch/mouse gestures
- Share previews via unique URLs
- Mobile-first design with desktop phone frame view

## Running the Project

```bash
# Development
npm install
npm run dev

# Docker
docker build -t carousel-preview .
docker run -p 3000:3000 carousel-preview
```

## Tech Stack

- Next.js 14+ (App Router)
- Tailwind CSS with Inter font
- Swiper.js for carousel
- Server-side file storage
