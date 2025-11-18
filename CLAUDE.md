# Project Notes for Claude

## Project Plan Location

The complete project plan, architecture, and implementation phases are documented in **README.md**.

## Project Overview

This is an Instagram carousel preview tool that allows users to:
- Upload a single long image containing multiple slides
- Preview how it will look in the Instagram app
- Share previews via unique URLs

## Key Technical Decisions

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS for rapid UI development
- **Image Processing**: Client-side Canvas API (no server processing needed for MVP)
- **Carousel**: Custom implementation with swipe support
- **Storage**: Local storage for MVP, can migrate to database later
- **Deployment**: Docker container

## Development Guidelines

- No emojis in code or comments
- Use React components for all UI elements
- Mobile-first approach
- Keep Instagram UI authentic to the real app
