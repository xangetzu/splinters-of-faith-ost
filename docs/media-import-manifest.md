# Media Import Manifest

Version: 0.1

Status: Approved

## Purpose

This manifest maps the initial local media import to the approved content model.
It is a review document, not the eventual runtime data source. Original FLAC
masters remain under ignored staging storage; stripped 320 kbps MP3 files are the
proposed initial GitHub Pages playback assets.

## Catalog Convention

`SOF_ID` uses `AA-BB-CC-DD`, where the segments identify major family,
collection, subtype, and track order. The confirmed initial codebook is:

```text
01 Campaign Pieces
  01 Main Suite
  02 Tavern Music
  03 Stingers

02 Character Pieces
  01 First character sheet (future)

03 Biome Specific Pieces
  01 Forest
    01 Town
    02 Field
    03 Dungeon
    04 Battle
    05 Event
    06 Travel
    07 Sacred
  02 Swamp (future)
```

Future codes are append-only. Within the soundtrack's canonical order, IDs sort
as four numeric segments rather than as titles or filesystem paths.

## Proposed Collections

| Stable ID | Slug | Title | Kind | SOF scope |
| --- | --- | --- | --- | --- |
| `COL-SUI-001` | `main-suite` | Main Suite | `suite` | `01-01` |
| `COL-TAV-001` | `tavern-music` | Tavern Music | `tavern` | `01-02` |
| `COL-STG-001` | `stingers` | Stingers | `utility` | `01-03` |
| `COL-FOR-001` | `forest` | Forest | `biome` | `03-01` |

Forest subtypes are metadata facets within the Forest collection, not separate
visitor-facing collections in the initial slice.

## Track Manifest

All proposed MP3 asset URLs use `/audio/{sofId}/{slug}.mp3`. This keeps deployed
paths shallow, stable, collision-resistant, and independent of the incoming
folder hierarchy.

| SOF ID | Stable track ID | Title | Slug | Collection | Subtype | Duration | MP3 bytes | Audio asset ID |
| --- | --- | --- | --- | --- | --- | ---: | ---: | --- |
| `01-01-00-01` | `TRK-SOF-01-01-00-01` | Splinters of Faith | `splinters-of-faith` | Main Suite | — | 10:23 | 24,922,154 | `AST-AUD-01-01-00-01-MP3` |
| `01-02-00-01` | `TRK-SOF-01-02-00-01` | Reed and Hearthfire | `reed-and-hearthfire` | Tavern Music | — | 1:19 | 3,162,154 | `AST-AUD-01-02-00-01-MP3` |
| `01-02-00-02` | `TRK-SOF-01-02-00-02` | Oak and Ale | `oak-and-ale` | Tavern Music | — | 1:37 | 3,882,089 | `AST-AUD-01-02-00-02-MP3` |
| `01-03-00-01` | `TRK-SOF-01-03-00-01` | Glory Enough | `glory-enough` | Stingers | — | 0:13 | 522,743 | `AST-AUD-01-03-00-01-MP3` |
| `01-03-00-02` | `TRK-SOF-01-03-00-02` | Their Watch Has Ended | `their-watch-has-ended` | Stingers | — | 0:18 | 708,735 | `AST-AUD-01-03-00-02-MP3` |
| `03-01-01-01` | `TRK-SOF-03-01-01-01` | Lonely Lanterns | `lonely-lanterns` | Forest | Town | 2:19 | 5,562,285 | `AST-AUD-03-01-01-01-MP3` |
| `03-01-02-01` | `TRK-SOF-03-01-02-01` | Under Verdant Skies | `under-verdant-skies` | Forest | Field | 5:41 | 13,642,480 | `AST-AUD-03-01-02-01-MP3` |
| `03-01-03-01` | `TRK-SOF-03-01-03-01` | Whispers Below | `whispers-below` | Forest | Dungeon | 1:57 | 4,682,480 | `AST-AUD-03-01-03-01-MP3` |
| `03-01-04-01` | `TRK-SOF-03-01-04-01` | Between Thorn and Fang | `between-thorn-and-fang` | Forest | Battle | 3:25 | 8,202,742 | `AST-AUD-03-01-04-01-MP3` |
| `03-01-04-02` | `TRK-SOF-03-01-04-02` | Ash and Iron | `ash-and-iron` | Forest | Battle | 2:58 | 7,135,901 | `AST-AUD-03-01-04-02-MP3` |
| `03-01-05-01` | `TRK-SOF-03-01-05-01` | Beneath Forgotten Boughs | `beneath-forgotten-boughs` | Forest | Event | 5:25 | 13,003,003 | `AST-AUD-03-01-05-01-MP3` |
| `03-01-05-02` | `TRK-SOF-03-01-05-02` | Where Echoes Linger | `where-echoes-linger` | Forest | Event | 2:18 | 5,536,162 | `AST-AUD-03-01-05-02-MP3` |
| `03-01-06-01` | `TRK-SOF-03-01-06-01` | Running the Green | `running-the-green` | Forest | Travel | 3:49 | 9,163,003 | `AST-AUD-03-01-06-01-MP3` |
| `03-01-07-01` | `TRK-SOF-03-01-07-01` | Upon the Verdant Hollow | `upon-the-verdant-hollow` | Forest | Sacred | 3:43 | 8,922,676 | `AST-AUD-03-01-07-01-MP3` |
| `03-01-07-02` | `TRK-SOF-03-01-07-02` | Upon the Hollow | `upon-the-hollow` | Forest | Sacred | 3:43 | 8,921,631 | `AST-AUD-03-01-07-02-MP3` |
| `03-01-07-03` | `TRK-SOF-03-01-07-03` | Upon the Sanguine Hollow | `upon-the-sanguine-hollow` | Forest | Sacred | 3:46 | 9,055,378 | `AST-AUD-03-01-07-03-MP3` |

Total proposed playback media: 127,025,616 bytes (approximately 121 MiB) and
52:54 of music.

## Shared Technical and Rights Metadata

Unless overridden during content review, every initial MP3 asset uses:

```yaml
type: audio
purpose: both
mimeType: audio/mpeg
codec: mp3
bitrateKbps: 320
sampleRateHz: 44100
channels: 2
provider: github-pages
rights:
  copyrightHolder: Kevin Larsson
  usage:
    - stream
    - download
  licenseName: CC BY-NC 4.0
  licenseUrl: https://creativecommons.org/licenses/by-nc/4.0/
```

Music licensing is defined separately in `LICENSE-MUSIC.md`. The repository's
CC0 source-code license and visual-asset notice do not apply to soundtrack
compositions or recordings.

## Source Metadata Observations

- Artist, composer, and album artist are `Kevin Larsson` on all current files.
- Album is `Splinters of Faith OST`; genre is `Soundtrack`.
- `SOF_ID` survived FLAC-to-MP3 conversion on every file.
- Source dates use locale-formatted tags and will be normalized to ISO dates in
  content metadata.
- Titles are intentionally derived from filenames using title case.
- The Main Suite source filename contains an inconsistent space; its proposed
  deployment filename is normalized to `splinters-of-faith.mp3`.
- Embedded cover images were removed losslessly from deployment candidates;
  artwork will be represented separately through the site asset model.

## Required Review Decisions

Approve or amend:

1. Proposed collection boundaries and kinds.
2. Stable track and asset ID formats.
3. Title casing and slugs.
4. Forest subtype labels.
5. Deployment URL structure.
6. Copyright holder and public streaming terms. (Approved: Kevin Larsson,
   CC BY-NC 4.0.)

No media should be copied into `public/audio/` until these decisions and the
revised vertical slice are approved.
