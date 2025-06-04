# AGENT.md - Luminos Next.js Project

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **Components**: Use functional components with React hooks
- **Client components**: Start with `"use client"` directive for client-side components
- **Imports**: Import React first, then Next.js, then third-party libraries, then local components
- **Naming**: PascalCase for components, camelCase for functions/variables
- **File structure**: Components in `/src/components/[category]/ComponentName.js`
- **Images**: Use Next.js `Image` component with width/height props
- **Styling**: Use className with Bootstrap classes and custom CSS
- **AOS**: Use AOS (Animate On Scroll) with data attributes for animations
- **No TypeScript**: This is a JavaScript project, avoid TypeScript syntax

## Project Structure
- `/src/app/` - Next.js App Router pages
- `/src/components/` - Reusable React components organized by category
- `/src/data/` - Static data files
- `/src/styles/` - CSS and styling files
- `/public/assets/` - Static assets (images, icons, etc.)

## ESLint Configuration
- Extends `next/core-web-vitals`
- HTML link pages rule disabled for flexibility
