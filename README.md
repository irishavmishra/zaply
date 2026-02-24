# Zaply

Client-side graphic design editor built for fast social-media style composition with AI-assisted image generation.

Live: still in production

## What It Does

Zaply provides a browser-based design workspace where users can build posters and graphics on a Fabric.js canvas. It includes shape and text tools, drawing mode, image insertion from Unsplash, upload support, styling controls (fill/stroke/opacity/font/filter), layer ordering actions, and AI image generation through a prompt sidebar.

## Key Technical Decisions

- Used Fabric.js as the core rendering engine to support object-level editing (text, vector shapes, bitmap images) with selection-aware controls and canvas-native transformations.
- Built the editor around a centralized `useEditor` hook that exposes a typed command surface (`Editor` interface), keeping UI sidebars simple while consolidating all canvas mutations in one place.
- Implemented API routes with Hono (`/api/ai`, `/api/images`) to keep server handlers lightweight and typed, while using React Query hooks on the client for async state and caching.
- Chose a dedicated fixed-size workspace (`clip` rectangle) inside a resizable canvas container to separate document dimensions from viewport dimensions, making zoom/resize behavior predictable.

## Hard Problems I Solved

1. Keeping many tool panels in sync with a single selected object state is difficult in canvas editors. Zaply uses centralized selection tracking plus “selection-dependent tool” rules, so panels like fill, stroke, filter, and font always reflect the active object and auto-reset safely when selection clears.

2. Mixing raster image workflows from different sources (Unsplash URLs, uploaded images, AI-generated URLs) can cause CORS and sizing issues. The editor handles image insertion through a unified `addImage` flow with cross-origin support and workspace-based scaling.

3. Preserving a smooth editing experience while handling many mutation actions (typing, shapes, filters, z-index, draw mode, clipboard) required clear separation of responsibilities. The project splits behavior into focused hooks (`use-editor`, `use-canvas-events`, `use-auto-resize`, `use-clipboard`) so interaction logic remains maintainable.

## Tech Stack

- Frontend: Next.js 14, React 18, TypeScript 5
- Canvas Editor: Fabric.js
- Styling/UI: Tailwind CSS, Radix UI, shadcn/ui
- API Layer: Hono + Zod validation
- Async State: TanStack React Query
- Integrations: Replicate (AI image generation), Unsplash API, UploadThing
- Deployment: Vercel-ready Next.js app

## Running Locally

1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies: `npm install`
3. Create environment variables in `.env.local` (Replicate, Unsplash, UploadThing keys)
4. Run dev server: `npm run dev`
5. Open `http://localhost:3000`
