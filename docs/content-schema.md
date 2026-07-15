# Content Schema

Version: 0.2

Status: Approved

This specification defines the initial structured content model. Metadata must
describe media through stable asset references and must not depend on media
being stored in this repository.

## Shared Conventions

Every major object requires:

- `id`: permanent, unique, uppercase stable ID
- `slug`: unique, human-readable route segment
- `title`: non-empty display name
- `status`: `draft`, `planned`, `in-progress`, `released`, or `archived`

Stable IDs use ASCII uppercase letters, numbers, and hyphens:

```text
WRLD-SOF-001
COL-FOR-001
TRK-SOF-03-01-05-01
ART-FOR-HERO-001
AST-AUD-03-01-05-01-MP3
PLY-NARRATIVE-001
REL-2026-001
```

IDs never change after publication. Slugs may change, but must be lowercase
ASCII kebab-case matching `^[a-z0-9]+(?:-[a-z0-9]+)*$`. Redirects should be
recorded when a published slug changes.

Dates use ISO 8601 calendar dates (`YYYY-MM-DD`). Instants, if later needed,
use UTC ISO 8601 timestamps. Durations are non-negative integer seconds; the UI
is responsible for formatting them.

Optional fields should be omitted rather than set to empty strings or placeholder
values.

## World

There is initially one world entry.

Required fields:

- `id`, `slug`, `title`, `status`
- `description`
- `featuredCollectionIds`: ordered collection IDs

Optional fields:

- `logoAssetId`
- `heroArtworkId`
- `currentReleaseId`
- `composerName`
- `composerBiography`

## Collection

Required fields:

- Shared fields
- `kind`: `suite`, `biome`, `character`, `tavern`, `utility`, or `special`
- `description`
- `theme`: collection design tokens

Optional fields:

- `tagline`
- `completionPercentage`: integer from 0 through 100
- `featuredArtworkId`
- `relatedCollectionIds`
- `trackIds`: explicit presentation/playback order
- `composerNotes`

`theme` initially supports optional `accent`, `accentContrast`, `surface`, and
`atmosphere` color values. Values must pass the approved color parser and final
rendered combinations must meet the project's contrast requirements.

Tracks canonically own collection membership through `collectionIds`. A
collection's `trackIds` is only an ordering override. Every ID in that list must
refer to a track whose `collectionIds` includes the collection.

## Track

Required fields:

- Shared fields
- `sofId`: soundtrack catalog and ordering ID
- `description`
- `durationSeconds`
- `collectionIds`: one or more collection IDs
- `audioAssetIds`: one or more audio asset IDs

Optional fields:

- `subtitle`
- `artworkId`
- `tags`: unique normalized strings
- `moods`: unique normalized strings
- `instrumentation`: unique display strings
- `composerNotes`
- `credits`
- `releaseDate`
- `featured`: defaults to `false`
- `downloadEnabled`: defaults to `false`
- `defaultPlayOrder`

Credits are structured objects with required `name` and `role` fields and an
optional `url`. Download-enabled tracks must reference at least one downloadable
audio asset with complete rights metadata.

### SOF ID

`sofId` is a permanent hierarchical catalog key using `AA-BB-CC-DD`:

```text
AA  Major family
BB  Collection within that family
CC  Subtype within that collection
DD  Track order within that subtype
```

Initial major families are:

- `01`: Campaign Pieces
- `02`: Character Pieces
- `03`: Biome Specific Pieces

Examples include `01-02-00-01` for the first Tavern Music track,
`02-01-00-01` for the first track on the first character sheet, and
`03-02-04-01` for the first battle track in the second biome. Zero is used when
a hierarchy level does not require a subtype.

The value must match `^[0-9]{2}(?:-[0-9]{2}){3}$` and be globally unique across
tracks. Its numeric tuple defines canonical soundtrack order. New family,
collection, and subtype codes are append-only; an assigned code must not be
reused for a different meaning.

## Artwork

Required fields:

- Shared fields
- `imageAssetId`
- `role`: `hero`, `card`, `background`, `portrait`, or `thumbnail`
- `alt`: meaningful alternative text, or `""` only when explicitly decorative

Optional fields:

- `prompt`
- `revision`
- `creationDate`
- `creator`
- `relatedCollectionIds`
- `relatedTrackIds`

The artwork object records meaning and relationships; the referenced image asset
records the actual file variants. Replacing an image does not require changing
the artwork ID.

## Asset

All assets require:

- `id`
- `type`: `audio`, `image`, `document`, or `video`
- `sources`: one or more source objects
- `rights`

Optional common fields:

- `title`
- `revision`
- `checksum`
- `createdDate`

A source requires:

- `url`: repository-relative URL or absolute HTTPS URL
- `mimeType`

It may also contain `byteSize`, `provider`, and `integrity`. Production code must
treat source URLs as opaque locations. Moving audio from GitHub Pages to object
storage or a CDN must not require component changes.

### Audio Asset

Audio assets additionally require `purpose`: `stream`, `download`, or `both`.
Optional fields include `codec`, `bitrateKbps`, `sampleRateHz`, `bitDepth`, and
`channels`.

An audio asset may contain several sources ordered by editorial preference. A
typical track can reference a stream asset with Opus and MP3 sources plus a FLAC
download asset. FLAC is not assumed to be the only browser playback source.

### Image Asset

Image assets may include `width`, `height`, and `aspectRatio`. Sources may offer
AVIF, WebP, and fallback formats. Every referenced local source must exist at
build time; absolute external sources are validated structurally and may be
checked separately during deployment.

### Document and Video Assets

Document assets may specify `pageCount`; video assets may specify
`durationSeconds`, `width`, and `height`. These variants are reserved now so new
media does not require redesigning the base asset model.

## Rights

Every asset requires a `rights` object containing:

- `copyrightHolder`
- `usage`: `stream`, `download`, `display`, or an array of these values
- `licenseName`

Optional fields:

- `licenseUrl`
- `creditLine`
- `restrictions`
- `territories`
- `expiresDate`

Rights metadata describes what the site may do with an asset; it is not a claim
that visitors receive those rights. Download panels must display the applicable
license or usage terms.

## Playlist

Required fields:

- Shared fields
- `kind`: `narrative`, `world`, `mood`, `character`, `tavern`, or `special`
- `description`
- `trackIds`: ordered, unique track IDs

Optional fields include `artworkId` and `featured`. These are editorial
playlists. Any future user playlist must use a separate browser-local model.

## Release

Required fields:

- Shared fields
- `version`
- `releaseDate`
- `summary`

Optional fields:

- `artworkId`
- `addedTrackIds`
- `addedCollectionIds`
- `addedArtworkIds`
- `changes`

Release `version` identifies a soundtrack content milestone, not a site build or
asset revision.

## Representative Entries

```yaml
# Collection
id: COL-FOR-001
slug: forest
title: Forest
status: in-progress
kind: biome
description: Music of quiet paths, old trees, and hopeful exploration.
theme:
  accent: "#b89b52"
  surface: "#14261d"
featuredArtworkId: ART-FOR-HERO-001
trackIds:
  - TRK-SOF-03-01-05-01
```

```yaml
# Track
id: TRK-SOF-03-01-05-01
sofId: 03-01-05-01
slug: beneath-forgotten-boughs
title: Beneath Forgotten Boughs
status: released
description: A reflective forest exploration theme.
durationSeconds: 248
collectionIds:
  - COL-FOR-001
audioAssetIds:
  - AST-AUD-03-01-05-01-MP3
  - AST-AUD-03-01-05-01-FLAC
artworkId: ART-FOR-HERO-001
releaseDate: 2026-07-14
downloadEnabled: true
```

```yaml
# Audio asset stored independently of the website repository
id: AST-AUD-03-01-05-01-FLAC
type: audio
purpose: download
sources:
  - url: https://media.example.invalid/audio/forest/beneath-the-old-boughs.flac
    mimeType: audio/flac
    codec: flac
    byteSize: 98245120
    provider: external-media-origin
rights:
  copyrightHolder: Splinters of Faith
  usage: download
  licenseName: All Rights Reserved
```

## Validation Rules

The validation process must reject:

- Duplicate IDs or duplicate slugs within a routable object type
- Duplicate or malformed `sofId` values
- IDs or slugs that do not match their required syntax
- Broken object or asset references
- Missing required local files
- Released tracks without a playable stream source
- Download-enabled tracks without a downloadable source and rights metadata
- Unsupported or mismatched MIME types
- Artwork without an explicit alt-text decision
- Dates or durations in an invalid format
- Percentages or ordering values outside their allowed ranges
- Duplicate IDs within ordered reference lists
- Explicit collection track order inconsistent with canonical track membership
- Invalid status transitions or archived references used as active featured content
- Direct self-references and inappropriate relationship cycles
- Non-HTTPS absolute production media URLs

External media reachability and CORS suitability should be checked in deployment
validation because those resources may not be available during every local build.
