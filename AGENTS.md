# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Install dependencies: `pnpm install`
- Local development server: `pnpm run dev`
- Build the site: `pnpm run build`
- Preview the build: `pnpm run preview`
- Sync Astro content: `pnpm run sync`
- Unit tests: `pnpm run test:unit` (Run single: `pnpm run test:unit <file>`)
- E2E tests: `pnpm run test:e2e` (Run single: `pnpm run test:e2e <file>`)

## Architecture & Structure

This is a single-page portfolio website built with **Astro**, **TypeScript**, and **Tailwind CSS v4**.

### High-Level Structure
- `src/pages/`: Contains the routing. i18n is implemented using directory-based routing with subdirectories for each language (`/en`, `/es`).
- `src/components/`: Reusable UI components (`.astro` files).
- `src/layouts/`: Base layout wrapper for pages.
- `src/data/`: Site configuration, types, and content collections.
- `src/i18n/`: Internationalization utilities and UI strings.
- `src/scripts/`: Client-side JavaScript for interactive features like dark mode and language switching.
- `src/styles/`: Global CSS styles.
- `src/constants/`: Shared constants used across the application.

### Key Design Patterns
- **i18n:** Language switching is handled both via routing and client-side scripts (`src/scripts/lang-switch.ts`).
- **Content Management:** Site data is centralized in `src/data` and typed for safety.
- **Styling:** Uses Tailwind CSS v4 with `@tailwindcss/vite` for modern, utility-first styling.
