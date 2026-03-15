# Interactive Resume & Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shared-8867s-projects/v0-archive)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=three.js)](https://threejs.org)

## Overview

An interactive resume and portfolio built with Next.js, featuring a WebGL particle simulation background powered by React Three Fiber / Three.js. The site presents professional information across dedicated sections — About, Skills, Experience, Projects, Education and Contact — with smooth animations and dark/light theme support.

## Features

- **WebGL particle system** — GPU-driven GPGPU simulation rendered with custom GLSL shaders
- **Section-based layout** — About, Skills, Experience, Projects, Education and Contact
- **Dark / Light theme** — powered by `next-themes`
- **Responsive design** — mobile menu included
- **Radix UI + shadcn/ui** components for accessible, composable UI primitives
- **Tailwind CSS** for styling
- **Vercel Analytics** integrated

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| 3D / WebGL | Three.js, React Three Fiber, @react-three/drei |
| Styling | Tailwind CSS, tailwindcss-animate |
| Components | Radix UI, shadcn/ui |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Package Manager | pnpm |
| Deployment | Vercel |

## Project Structure

```
├── app/                  # Next.js App Router (layout + root page)
├── components/
│   ├── gl/               # WebGL — particle simulation & GLSL shaders
│   ├── sections/         # Page sections (About, Skills, Experience…)
│   └── ui/               # Reusable UI primitives (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Shared utilities
└── public/               # Static assets
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
pnpm build

# Start the production server
pnpm start
```

## Deployment

Live at: **[https://vercel.com/shared-8867s-projects/v0-archive](https://vercel.com/shared-8867s-projects/v0-archive)**
