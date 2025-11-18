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

## Deployment

### Using Pre-built Docker Image

Pull and run the latest version from GitHub Container Registry:

```bash
docker pull ghcr.io/roman/carousel-preview:latest
docker run -p 3000:3000 -v $(pwd)/uploads:/app/public/uploads ghcr.io/roman/carousel-preview:latest
```

Or with Docker Compose:

```yaml
services:
  app:
    image: ghcr.io/roman/carousel-preview:latest
    ports:
      - "3000:3000"
    volumes:
      - ./uploads:/app/public/uploads
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## Running the Project

### Development

```bash
npm install
npm run dev
```

### Docker

```bash
docker build -t carousel-preview .
docker run -p 3000:3000 -v $(pwd)/public/uploads:/app/public/uploads carousel-preview
```

### Docker Compose

Create a `docker-compose.yml` file:

```yaml
services:
  app:
    image: carousel-preview
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./public/uploads:/app/public/uploads
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```
