# Personal portfolio

A single-page portfolio website built with Astro, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Astro 7.x
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with @tailwindcss/vite
- **Package Manager:** pnpm
- **Deployment:** GitHub Actions

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── pages/
│   │   └── index.astro    # Main page
│   └── styles/
│       └── global.css
├── .github/workflows/
│   └── astro.yml
├── astro.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 11+

### Local Development

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:3000`
