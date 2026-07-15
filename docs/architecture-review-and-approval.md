# Architecture Review and Approval

Version: 0.1

## Decision

The proposed architecture is approved with conditions.

Use:

- Astro
- TypeScript
- Astro content collections with schema validation
- Semantic HTML
- Vanilla CSS with CSS custom properties
- A native `HTMLAudioElement`
- GitHub Actions for validation, build, and deployment
- No React, Vue, Tailwind, backend API, database, or CMS at this stage

The site should remain static-first and compatible with GitHub Pages.

---

# Approved Architectural Direction

## Rendering

Use build-time static generation.

Every collection, track, playlist, release, and informational page should be pre-rendered to ordinary HTML.

JavaScript should be limited to features that require it, primarily:

- Persistent audio playback
- Queue management
- Search and filtering
- Client-side navigation
- Purposeful transitions and interactions

Core content should remain readable if JavaScript fails.

## Navigation and Persistent Playback

Use Astro's current stable client-side navigation system.

Mount one global audio player in the root layout and persist it across internal route changes.

The player should preserve:

- Active track
- Playback position
- Queue
- Queue origin
- Volume
- Shuffle/repeat state
- Playback mode

Also serialize recoverable player state to `sessionStorage` so the experience can resume gracefully after a reload. Do not bypass browser autoplay restrictions.

## Content Model

Use separate structured content entries rather than one giant site data file.

Initial content groups:

- World
- Collections
- Tracks
- Artwork
- Assets
- Playlists
- Releases

All major objects must use stable IDs.

## Canonical Relationship Ownership

Tracks canonically own `collectionIds`.

Collection membership is normally derived from those references.

A collection may define an optional ordered `trackIds` list when it requires a specific presentation or playback order.

If both exist, build validation must confirm they are consistent.

## Collection Kinds

Add a required `kind` field to collections.

Initial values may include:

- `suite`
- `biome`
- `character`
- `tavern`
- `utility`
- `special`

The exact enum may be refined in the content-schema specification.

## Unified Asset Model

Use one `Asset` union with type-specific variants.

Initial variants:

- `audio`
- `image`
- `document`
- `video`

Audio assets should support multiple formats and should not assume a single source file.

Image assets should support multiple roles, including:

- Hero
- Card
- Background
- Portrait
- Thumbnail

## Media Storage

Store media locations as URLs or logical asset references.

Do not tightly couple metadata to GitHub repository paths.

This allows development media to live in the repository while production audio can later move to object storage, a CDN, or another media origin without changing the content model.

For initial development:

- Small MP3 samples may live in the repository.
- A small number of FLAC downloads may live in the repository.
- Full production audio storage should remain an explicit deployment decision.

## Folder Structure

Treat the proposed large folder tree as a long-term target, not a day-one scaffold.

Create only directories needed for the first vertical slice.

The initial project should probably include:

```text
src/
  assets/
    artwork/
  components/
    player/
  content/
    artwork/
    collections/
    tracks/
    world/
  layouts/
  pages/
  styles/
  content.config.ts

public/
  audio/

docs/
```

Additional folders should be introduced when their first real file is added.

## Testing

Begin with a minimal, useful test suite:

- Metadata and relationship validation
- Player queue unit tests
- One browser test confirming playback survives internal navigation
- One keyboard-navigation smoke test
- Basic accessibility checks

Expand test coverage as features are implemented.

## Fonts

Do not add font files until font choices and redistribution rights are confirmed.

Use system fallbacks or properly licensed web fonts during early development.

## Astro Version

Use the current stable Astro release and current official Astro documentation.

Do not target an old Astro version merely because an older documentation link appears in the architectural proposal.

---

# Documentation Corrections

Perform these housekeeping changes before implementation:

1. Consolidate Codex guidance in `.github/codex-instructions.md`, with
   `AGENTS.md` as the automatic entry point.
2. Rename `docs/design-system-v0.2.md` to `docs/design-system.md`.
3. Keep document version numbers inside the document and in Git history rather than in filenames.
4. Normalize all Markdown files to UTF-8.
5. Repair corrupted characters such as `â†’`, `â”‚`, and `â–¶`.
6. Add a basic `.editorconfig` defining UTF-8 encoding and consistent line endings.

---

# Build Validation Requirements

The build should eventually reject:

- Duplicate stable IDs
- Duplicate slugs
- Broken references
- Missing required media files
- Tracks with no playable audio source
- Downloadable tracks without rights/license metadata
- Artwork without alt text
- Unsupported MIME types
- Invalid explicit play ordering
- Inconsistent track/collection relationships
- Invalid publication status
- Inappropriate circular references

---

# Initial Player Rules

The first implementation should follow these minimum rules:

- `Play All` replaces the queue with the selected collection or playlist.
- Playing an individual track starts that track and creates a sensible queue from its current collection context.
- Previous and Next operate on the active queue.
- Shuffle should not immediately repeat the current track.
- Playback must survive internal Astro navigation.
- Recoverable player state should be saved to `sessionStorage`.
- Playback must not begin before a user gesture.
- If one audio source fails, the player should attempt another supported source.
- Track cards send commands to one global audio engine.
- Do not create a separate `HTMLAudioElement` for every track card.

---

# GitHub Pages Constraint

The site must remain deployable as a static GitHub Pages site.

That means the initial architecture must not depend on:

- Server-side rendering at request time
- A persistent application server
- A database connection from the deployed site
- Server-only API routes
- Authentication requiring a custom backend
- Dynamic media processing at request time

Client-side features, pre-rendered routes, static metadata, browser storage, and external media URLs are allowed.

---

# Next Task

Do not implement the full website yet.

Create these two concise specifications for review:

```text
docs/content-schema.md
docs/player-behavior.md
```

## `content-schema.md`

Include:

- Required and optional fields
- Stable ID format
- Slug rules
- Enumerated values
- Publication status
- Relationship ownership
- Asset variants
- Audio source structure
- Image roles
- Rights and license metadata
- Date and duration formats
- Representative sample entries
- Validation rules

## `player-behavior.md`

Include:

- Queue replacement and append behavior
- Individual-track playback context
- Previous and Next behavior
- Shuffle behavior
- Repeat modes
- Source selection and fallback
- Loading and error states
- Session persistence
- Internal navigation persistence
- Reload recovery
- Preload policy
- Keyboard controls
- Media Session behavior
- Reduced-motion considerations
- Accessibility announcements

Pause implementation after producing these two files so they can be reviewed.
