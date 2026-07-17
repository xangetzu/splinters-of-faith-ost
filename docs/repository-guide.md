# Repository Guide

Version: 0.2

Status: Maintained reference

## Purpose

This document explains where everything belongs, which files are authoritative,
which directories are generated, and how to safely resume work after time away.

The project should remain tightly organized without creating speculative folders
before their first real file is needed.

## Sources of Truth

Apply project guidance in this order:

1. Approved architecture decisions and specifications in `docs/`
2. `AGENTS.md` and `.github/codex-instructions.md`
3. Structured content under `src/content/`
4. Implementation and tests
5. Exploratory or private material under `incoming/`

An incoming draft does not become project policy until it is reviewed, moved to
the appropriate tracked location, and marked approved where required.

## Root Directory

| Path | Ownership and purpose |
| --- | --- |
| `.github/` | Repository automation and consolidated Codex instructions |
| `docs/` | Tracked design bible, approved specifications, and maintained guides |
| `incoming/` | Ignored local/private staging for media, drafts, and future processing |
| `public/` | Tracked static files copied directly into the generated site |
| `scripts/` | Tracked utilities supporting builds, tests, imports, or future workflows |
| `src/` | Tracked application source and structured public content |
| `tests/` | Tracked automated tests |
| `.astro/` | Generated Astro cache; safe to regenerate |
| `dist/` | Generated production build; safe to regenerate |
| `node_modules/` | Installed npm dependencies; safe to reinstall |
| `playwright-report/` | Generated browser-test report when present |
| `test-results/` | Generated browser-test artifacts when present |

Root configuration files:

| File | Purpose |
| --- | --- |
| `AGENTS.md` | Automatic project entry point and priorities |
| `.editorconfig` | Encoding, whitespace, and line-ending defaults |
| `.gitattributes` | Git text and binary handling rules |
| `.gitignore` | Prevents generated and private local files from being committed |
| `astro.config.mjs` | Astro site and GitHub Pages base-path configuration |
| `package.json` | Project identity, commands, and direct development dependencies |
| `package-lock.json` | Reproducible npm dependency resolution |
| `playwright.config.ts` | Browser-test configuration |
| `tsconfig.json` | TypeScript configuration |
| `vitest.config.ts` | Unit-test configuration |
| `LICENSE` | License for website source code and documentation |
| `LICENSE-MUSIC.md` | License for soundtrack compositions and recordings |
| `ASSET-NOTICE.md` | Terms and explanation for visual assets |

## Source Directory

```text
src/
├── components/
├── content/
│   ├── assets/
│   ├── collections/
│   ├── tracks/
│   └── world/
├── layouts/
├── lib/
│   ├── audio/
│   └── content/
├── pages/
│   └── collections/
├── styles/
├── content.config.ts
└── env.d.ts
```

### `src/components/`

Reusable Astro interface components:

- `CollectionCard.astro`: artwork-led collection navigation card
- `Player.astro`: the one persistent global audio player and browser behavior
- `TrackList.astro`: accessible collection track listing and play commands

Create a new component when behavior or presentation is meaningfully reusable.
Avoid page-specific one-off components that duplicate existing patterns.

### `src/content/`

The public soundtrack's structured source of truth:

- `assets/`: deployable media sources, formats, sizes, providers, and rights
- `collections/`: collection identity, theme, descriptions, and ordering
- `tracks/`: track identity, catalog order, duration, membership, and assets
- `world/`: soundtrack-wide identity and featured collections

Relationships use stable IDs. Do not duplicate titles, media rights, or paths
across multiple content types merely for convenience.

Potential content groups such as artwork, playlists, releases, characters, or
chronicles should be added only when their first approved content is ready.

### `src/content.config.ts`

Defines the Astro content schemas. A content field is not considered supported
merely because it appears in a YAML file; it must be accepted and validated by
the schema and any cross-reference checks.

### `src/layouts/`

`BaseLayout.astro` owns the shared document structure, navigation, Astro client
router, and persistent player placement.

### `src/lib/`

- `audio/queue.ts`: pure queue and playback-order logic
- `content/validate.ts`: build-time relationship, media, rights, and reference
  validation
- `format.ts`: shared display formatting helpers

Keep library modules small and independent of page markup when practical.

### `src/pages/`

Astro's filesystem routes:

- `index.astro`: home page
- `collections/[slug].astro`: statically generated collection destinations

Collection routes are generated from structured content rather than individual
hardcoded page files.

### `src/styles/`

`global.css` currently holds design tokens, shared layout, component styling,
responsive rules, and reduced-motion behavior. Split styles only when the file's
size and ownership make a new boundary genuinely clearer.

## Public Assets

### `public/audio/`

Current deployment layout:

```text
public/audio/
└── {SOF_ID}/
    └── {normalized-track-slug}.mp3
```

Example:

```text
public/audio/03-01-05-01/beneath-forgotten-boughs.mp3
```

These are tracked deployment copies used by GitHub Pages. They are not the
archival FLAC masters. Every deployed file must have matching structured asset
metadata and a track reference.

Files placed under `public/` bypass Astro image or asset processing and are
copied directly to the output. Use it for stable static delivery paths, not as a
general dumping ground.

### Future artwork

The approved architecture reserves `src/assets/artwork/` for website artwork
when the first approved image is integrated. Astro-managed source images should
normally live there so optimized variants can be derived during the build.

Do not create that folder merely to hold drafts. Generation drafts and private
high-resolution working files belong under ignored staging or another private
art archive. Only approved source artwork needed by the website should enter
tracked source control, subject to repository-size decisions.

If production artwork later moves to an external media host, its content record
should change without requiring page-component changes.

## Incoming Staging

The entire `incoming/` directory is ignored by Git. It is intentionally outside
the public project history.

Current local uses include:

| Path | Purpose |
| --- | --- |
| `incoming/audio/` | Original FLAC hierarchy and archival source files |
| `incoming/mp3.320/` | Converted 320 kbps MP3 files before normalized import |
| `incoming/image-instruction-gpt/` | Private source instructions supplied to the custom art GPT |
| `incoming/sessions/` | Future private session recordings, transcripts, and editorial working files |

Rules for `incoming/`:

- Never assume it is backed up by Git.
- Never link deployed pages directly to an incoming path.
- Do not place the only copy of an irreplaceable master there without a separate
  backup.
- Review and intentionally promote material into tracked source locations.
- Keep private transcripts, recording drafts, generated art experiments, and
  other sensitive working files here or in a separate private archive.

Future local organization should group real workflows rather than file types at
random. When the deferred session-transcription work begins, use
`incoming/sessions/{session-id}/` with `raw/`, `working/`, and `review/`
subdirectories.

## Generated Directories

### `node_modules/`

Created by `npm install`. It can contain thousands of files and should never be
manually organized or committed. Delete and reinstall it only when dependency
repair is actually needed.

### `.astro/`

Astro's local cache and generated content data. Do not treat it as public
metadata or edit it directly.

### `dist/`

Created by `npm run build`. GitHub Actions generates its own clean copy for
deployment. Local edits disappear on the next build and must never be treated as
source changes.

### Browser-test output

`playwright-report/` and `test-results/` may appear after browser tests. They are
diagnostic artifacts and are ignored.

## Tests and Scripts

```text
tests/
├── e2e/site.spec.ts
└── unit/queue.test.ts

scripts/
└── test-server.mjs
```

- Unit tests verify deterministic playback-queue behavior.
- Browser tests verify navigation persistence, accessibility, and keyboard use.
- `test-server.mjs` serves the built static site with audio range support during
  browser tests.

Add workflow scripts under a cohesive subfolder only when multiple related
scripts exist. A single clearly named script can remain directly under
`scripts/`.

## Documentation Ownership

Current approved or foundational documents:

- `architecture-review-and-approval.md`: approved technology and architecture
- `content-schema.md`: approved structured content contract
- `player-behavior.md`: approved global-player contract
- `first-vertical-slice.md`: approved initial delivery scope
- `media-import-manifest.md`: approved initial catalog mapping
- `project-overview.md`: foundational purpose
- `site-design-vision.md`: foundational experience direction
- `design-system.md`: foundational visual design language
- `world-model.md`: foundational conceptual model
- `site-architecture.md`: foundational visitor information architecture
- `component-library.md`: foundational reusable component direction
- `art-direction.md`: approved global visual production language
- `art-production-workflow.md`: approved artwork generation and approval process
- `session-chronicle.md`: approved future Chronicle direction with implementation
  intentionally deferred

Keep version numbers and statuses inside Markdown files and Git history, not in
filenames.

## Routine Workflows

### Resume development

```powershell
git status
npm install
npm run build
npm test
```

Run browser tests when changing navigation, playback, interactive components,
responsive behavior, or accessibility-critical markup.

### Add a track

1. Back up and inspect the source master.
2. Confirm or assign its permanent `SOF_ID`.
3. Create the approved streaming export.
4. Normalize the public path and filename.
5. Add audio asset metadata.
6. Add track metadata.
7. Confirm collection membership and effective ordering.
8. Run validation, unit tests, and relevant browser tests.

### Add a collection

1. Confirm its permanent collection ID, slug, kind, and SOF scope.
2. Add collection metadata and theme values.
3. Associate tracks through their canonical `collectionIds`.
4. Add explicit `trackIds` only when a presentation override is needed.
5. Add approved artwork through artwork and image-asset metadata when available.
6. Build and inspect the generated route at desktop and mobile sizes.

### Add artwork

1. Approve an asset-specific brief under the art-production workflow.
2. Generate and review drafts outside production paths.
3. Preserve the selected high-quality master.
4. Add the approved website source or external source record.
5. Add explicit alt text or a decorative empty-alt decision.
6. Integrate through structured metadata.
7. Verify responsive crops, text contrast, file size, and loading behavior.

## Cleanup Rules

Safe routine cleanup means regenerating disposable output, removing obsolete
drafts only after confirmation, and keeping metadata synchronized with real
assets. It does not mean rearranging stable source folders for visual symmetry.

Before deleting or moving anything:

- Check `git status` and preserve unrelated user work.
- Determine whether the file is tracked, generated, staged, archival, or private.
- Confirm that archival media has another verified copy.
- Update every structured reference when a published asset path changes.
- Run build and tests after tracked source moves.

Avoid empty scaffolding. Add a directory when its first real, approved file is
ready.

## Repository Size Awareness

The currently tracked MP3 catalog is roughly 121 MiB. Archival FLAC masters are
much larger and remain outside Git.

As the soundtrack and artwork grow:

- Keep metadata independent of storage URLs.
- Monitor individual file size and total repository growth.
- Avoid committing generated variants that can be reproduced cheaply.
- Move production media to suitable external storage before repository limits
  or clone times become disruptive.
- Preserve archival masters separately from deployment media regardless of the
  eventual public host.

The storage provider is deliberately undecided. GitHub Pages, object storage, a
CDN, or the owner's server stack can all be represented by the existing asset
model without hardcoding a provider into components.

## Recovery Checklist

If returning after a long absence:

1. Read `README.md`, this guide, and `AGENTS.md`.
2. Check `git status` before changing or deleting anything.
3. Pull the latest `main` branch if the local tree is clean and remote work may
   exist.
4. Install the lockfile dependencies with `npm install`.
5. Run `npm run build` and `npm test`.
6. Confirm the live GitHub Pages site and latest deployment workflow.
7. Review document statuses before treating drafts as approved decisions.
8. Verify private incoming and archival media backups separately; Git cannot
   restore them.
9. Continue from the smallest approved next task rather than scaffolding future
   ideas.
