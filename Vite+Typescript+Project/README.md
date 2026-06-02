# Vibe Planner (Vite + TypeScript)

An interactive starter project built with Vite and TypeScript. It includes a small task-planner UI with vibe selection, task management, and filtering.

## Project Goal

This project is designed to be a clean baseline that other developers can quickly run, understand, and extend.

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)

## Initialize and Run

1. Open a terminal in the project directory:

```bash
cd /home/labadmin/Vite-Typescript-Project/Vite-Typescript-Project/Vite+Typescript+Project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Vite will start a local server and (with the current script) open your browser automatically.

## Build for Production

```bash
npm run build
```

This compiles TypeScript and creates optimized assets in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Code Types Used (and Why)

### TypeScript (`.ts`)
- Used for application logic (state, events, rendering behavior).
- Adds static typing for safer refactors and clearer contracts.
- Helps catch errors at compile time before runtime.

### HTML (`index.html`)
- Provides the root page and app mount point.
- Keeps browser entry point simple and standard.

### CSS (`.css`)
- Controls visual styles, layout, responsiveness, and theme-like vibe effects.
- Keeps presentation concerns separate from logic.

### JavaScript (generated output)
- You do not hand-write `.js` source files here.
- Vite + TypeScript compiles `.ts` into browser-ready JavaScript during `dev` and `build`.

## Main Files

- `src/main.ts` — App entry and initial UI shell setup.
- `src/counter.ts` — Interactive planner logic (vibes, tasks, filters, events).
- `src/style.css` — Styling and responsive layout.
- `package.json` — Scripts and dependencies.

## Scripts

- `npm run dev` — Run local development server.
- `npm run build` — Type-check and build production bundle.
- `npm run preview` — Preview production build locally.

## Extending This Project

Good next steps for contributors:
- Add persistent storage (for example, `localStorage`) for tasks and vibe.
- Split logic into feature modules as the app grows.
- Add tests for task operations and filtering behavior.
