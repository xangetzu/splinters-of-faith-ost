# Splinters of Faith OST

The official interactive soundtrack companion for the **Splinters of Faith**
fantasy role-playing campaign.

The site is designed as a world to explore through music: part soundtrack
archive, part fantasy companion book, and part atmospheric atlas. It is not
intended to resemble a generic streaming service or file repository.

**Live site:** https://xangetzu.github.io/splinters-of-faith-ost/

## Current State

The first vertical slice is live and includes:

- Four collections: Main Suite, Tavern Music, Stingers, and Forest
- Sixteen playable 320 kbps MP3 tracks
- A persistent audio player that survives internal navigation
- Contextual queues, shuffle, repeat, seeking, and session recovery
- Responsive collection pages and atmospheric artwork placeholders
- Structured, validated soundtrack metadata
- Automated build, unit, browser, keyboard, and accessibility checks
- GitHub Pages deployment through GitHub Actions

Final artwork, character pages, production FLAC hosting, search, releases, and
expanded editorial features remain future work.

## Start Here After Time Away

1. Read [AGENTS.md](AGENTS.md) for the project priorities and documentation
   authority.
2. Read [Repository Guide](docs/repository-guide.md) to understand every major
   directory, asset location, generated folder, and maintenance workflow.
3. Review [Architecture Review and Approval](docs/architecture-review-and-approval.md)
   for the approved technical decisions.
4. Review [Content Schema](docs/content-schema.md) and
   [Player Behavior](docs/player-behavior.md) before changing metadata or audio
   behavior.
5. Run `git status`, `npm install`, and `npm run build` before resuming work.

The documents under `docs/` are the project's design bible. Approved
specifications take precedence over older exploratory guidance.

## Technology

- Astro with static generation
- Strict TypeScript
- Semantic HTML and vanilla CSS
- Native `HTMLAudioElement`
- Astro content collections with schema and relationship validation
- Vitest, Playwright, and axe accessibility checks
- GitHub Actions and GitHub Pages

The initial architecture intentionally has no React, Vue, Tailwind, backend,
database, authentication system, or CMS.

## Local Development

Requirements:

- Node.js 24 or another version compatible with the lockfile and current Astro
- npm
- Playwright Chromium for browser tests

Install dependencies:

```powershell
npm install
npx playwright install chromium
```

Run the development site:

```powershell
npm run dev
```

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Type-check and generate the production site in `dist/` |
| `npm run preview` | Preview the generated production build |
| `npm run check` | Run Astro and TypeScript checks |
| `npm test` | Run queue and other unit tests |
| `npm run test:e2e` | Run browser and accessibility tests |

Never edit `dist/` or `node_modules/` directly. They are generated locally and
are ignored by Git.

## Repository at a Glance

```text
splinters-of-faith-ost/
├── .github/        Codex guidance and deployment workflow
├── docs/           Design bible, specifications, and repository guide
├── incoming/       Local/private staging; entirely ignored by Git
├── public/         Files copied directly into the deployed site
├── scripts/        Build and test support scripts
├── src/            Website source, structured content, components, and styles
├── tests/          Unit and browser tests
├── dist/           Generated production site; disposable
└── node_modules/   Installed dependencies; disposable
```

See [Repository Guide](docs/repository-guide.md) for the complete annotated
structure.

## Assets and Their Locations

The word **asset** covers several different things in this project. Their
locations are intentionally separated so archival sources, deployment files,
metadata, and generated output are not confused.

| Asset type | Location | Tracked? | Purpose |
| --- | --- | ---: | --- |
| FLAC archival masters | `incoming/audio/` | No | Original lossless source library and folder hierarchy |
| Converted MP3 staging files | `incoming/mp3.320/` | No | Working 320 kbps exports before deployment import |
| Private art instructions and drafts | `incoming/` | No | Local source material that is not approved public documentation |
| Deployed streaming MP3s | `public/audio/{SOF_ID}/` | Yes | Current browser playback and download files |
| Audio asset metadata | `src/content/assets/` | Yes | MIME type, URL, byte size, provider, and rights information |
| Track metadata | `src/content/tracks/` | Yes | Titles, SOF IDs, durations, collections, descriptions, and asset references |
| Collection metadata | `src/content/collections/` | Yes | Visitor destinations, themes, descriptions, and track ordering |
| World metadata | `src/content/world/` | Yes | Site-wide soundtrack identity and featured collections |
| Future source artwork | `src/assets/artwork/` when first needed | Yes | Approved website artwork processed by Astro |
| Generated website | `dist/` | No | Build output deployed by GitHub Actions |

Important distinctions:

- `incoming/` is a local workbench and private archive, not part of the website.
- `public/audio/` contains normalized deployment copies, not archival masters.
- Files in `public/` are served as-is; their metadata lives separately under
  `src/content/`.
- Production media may later move to object storage, a CDN, or a private server
  without changing component code.
- Artwork delivered through a browser cannot be made technically impossible to
  save. The site does not offer visual assets as separate downloads, and their
  usage is governed by `ASSET-NOTICE.md`.

## Adding Soundtrack Content

Do not copy a source file directly into an arbitrary public folder.

The intended workflow is:

1. Preserve the FLAC master under ignored local storage.
2. Create or inspect the streaming export.
3. Confirm its permanent `SOF_ID` and collection classification.
4. Normalize the deployment filename and path.
5. Copy the approved streaming file to `public/audio/{SOF_ID}/`.
6. Add its audio asset record under `src/content/assets/`.
7. Add its track record under `src/content/tracks/`.
8. Update collection ordering only when an explicit override is needed.
9. Run `npm run build`, `npm test`, and the relevant browser tests.

The initial catalog mapping and SOF hierarchy are recorded in
[Media Import Manifest](docs/media-import-manifest.md).

## Documentation Map

| Document | Purpose |
| --- | --- |
| [Repository Guide](docs/repository-guide.md) | Directory ownership, assets, generated output, and maintenance |
| [Project Overview](docs/project-overview.md) | Original project purpose and goals |
| [Site Design Vision](docs/site-design-vision.md) | Intended visitor experience |
| [Design System](docs/design-system.md) | Visual and emotional design language |
| [World Model](docs/world-model.md) | Conceptual content relationships |
| [Site Architecture](docs/site-architecture.md) | Visitor-facing information architecture |
| [Component Library](docs/component-library.md) | Reusable interface concepts |
| [Architecture Approval](docs/architecture-review-and-approval.md) | Approved technical architecture |
| [Content Schema](docs/content-schema.md) | Structured content and validation rules |
| [Player Behavior](docs/player-behavior.md) | Canonical persistent-player behavior |
| [First Vertical Slice](docs/first-vertical-slice.md) | Approved initial implementation scope |
| [Media Import Manifest](docs/media-import-manifest.md) | Initial audio catalog and SOF codebook |
| [Art Direction](docs/art-direction.md) | Approved global visual production language |
| [Art Production Workflow](docs/art-production-workflow.md) | Approved artwork generation and approval process |
| [Session Chronicle](docs/session-chronicle.md) | Approved future campaign Chronicle direction; implementation deferred |

## Licensing

- Website source code and project documentation: CC0; see [LICENSE](LICENSE).
- Soundtrack compositions and recordings: CC BY-NC 4.0; see
  [LICENSE-MUSIC.md](LICENSE-MUSIC.md).
- Visual assets: separately governed; see [ASSET-NOTICE.md](ASSET-NOTICE.md).

Music is available for personal, noncommercial use with attribution under its
stated license. The code/documentation license does not apply to the music or
visual assets.
