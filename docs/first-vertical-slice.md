# First Vertical Slice

Version: 0.2

Status: Approved

## Purpose

Prove the approved architecture end to end with the smallest coherent visitor
experience. This slice is infrastructure and one representative destination,
not the full website.

## Scope

Create:

- A minimal Astro and TypeScript project configured for static GitHub Pages
  output
- The initial content collections and validation for one world, the four current
  visitor-facing collections, the required artwork records, all 16 current
  tracks, and their MP3 audio assets
- A shared layout with semantic navigation and a persistent global player
- A simple home page linking to one collection page
- Collection heroes, `Play All`, and accessible track listings for Main Suite,
  Tavern Music, Stingers, and Forest
- The complete current 320 kbps MP3 catalog, with FLAC masters remaining ignored
  staging assets
- Session recovery, source fallback, and the initial queue rules
- Minimal design tokens, global styles, collection theming, and reduced-motion
  behavior
- The approved baseline validation and smoke tests

## Explicitly Out of Scope

- Final artwork, typography, or production FLAC hosting
- Search, downloads, releases, composer-note panels, and expanded queue UI
- Empty future collections, including character and additional biome pages
- A backend, database, CMS, authentication, analytics, or user playlists
- Premature component and directory scaffolding

## Implementation Order

1. Initialize the approved toolchain and static deployment configuration.
2. Define the smallest content schemas and cross-reference validation.
3. Import the approved 16-track manifest and deployment MP3s.
4. Build the shared layout, home route, and generated collection route.
5. Build one persistent audio engine and its compact accessible UI.
6. Connect track and `Play All` commands to contextual queues.
7. Add session recovery, source fallback, and navigation persistence.
8. Add focused unit, browser, keyboard, and accessibility checks.
9. Verify the production build and GitHub Pages path behavior.

## Acceptance Criteria

- The site builds to ordinary static files with no server runtime.
- Content is readable and navigable when JavaScript is unavailable.
- Invalid metadata or broken local references fail validation.
- The collection route is generated from metadata rather than a hardcoded track
  list.
- `Play All` and individual track controls create the specified queues.
- Playback continues through internal navigation without restarting.
- Reload recovery restores recoverable state without autoplay.
- A failed preferred source attempts the next supported source.
- The primary experience works by keyboard and passes basic automated
  accessibility checks.
- Reduced-motion preferences are respected.
- No production hosting choice is embedded in components or schemas.

Implementation should begin only after this slice is reviewed and approved.
