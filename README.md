# React Suspense Demo

A simple demonstration of React Suspense with client components, showcasing code splitting with `lazy()` and the Suspense boundary pattern.

## Overview

This demo illustrates how React Suspense works with:

- **Code splitting** using `React.lazy()` for component-level lazy loading
- **Suspense boundaries** with fallback UI during component loading
- **Suspender pattern** demonstrating how components can suspend rendering while waiting for data

## What You'll See

When you run the demo, you'll see:

1. A "Loading..." fallback message appears immediately
2. After 3 seconds, the `SuspendedComponent` loads and displays "Done"
3. This demonstrates the Suspense boundary in action with lazy-loaded components

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (package manager)

## Getting Started

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build

Build for production:

```bash
pnpm build
```

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

## How It Works

The demo uses:

- `React.lazy()` to dynamically import the `SuspendedComponent`
- `<Suspense>` boundary with a "Loading..." fallback
- A suspender pattern in `SuspendedComponent` that throws a promise, causing React to suspend rendering until the promise resolves

## Tech Stack

- React 19.2.0
- TypeScript
- Vite
- pnpm

## License

MIT
