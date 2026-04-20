# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
npm start          # or: ng serve

# Production build
npm run build

# Watch build
npm run build:watch

# Run tests (Vitest)
npm test
```

## Architecture

Angular 21 standalone components (no NgModules), TypeScript strict mode, SCSS + Bootstrap 5, RxJS. No backend — all data is static mock data in `src/app/core/models/services.data.ts`.

### Routing

```
/ → LayoutComponent
  /           → HomeComponent (landing page)
  /servicios  → ServicesComponent (lazy-loaded)
  /servicios/:id → ServicesDetailComponent (lazy-loaded)
  **          → redirect to /
```

### Layers

- `src/app/core/models/` — Static data (`services.data.ts` exports `SERVICES` array) and TypeScript interfaces
- `src/app/core/services/` — `LegalService` (returns mock observables), `ThemeService` (light/dark via body classes)
- `src/app/layout/` — `LayoutComponent` wraps navbar + `<router-outlet>` + footer
- `src/app/features/` — One folder per route: `home`, `services`, `services-detail`, `about`, `contact`, `mision-vision`

`HomeComponent` composes the About, Services, Contact, Hero, and MisionVision feature components directly (no routing between them on the landing page).

### Styles

Global SCSS entry: `src/styles/styles.scss`. Design tokens live in `src/styles/abstracts/_variables.scss` (primary gold: `#c9a96e`). Component styles use scoped SCSS files alongside each `.ts` file.
