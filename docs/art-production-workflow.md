# Art Production Workflow

Version: 0.2

Status: Approved

## Purpose

This document defines how artwork moves from an idea to an approved website
asset. `docs/art-direction.md` defines what the artwork should look and feel
like; this document defines how it is requested, reviewed, preserved, and
integrated.

The workflow is generation-tool independent. The owner's custom art GPT is the
current preferred generation environment because it already contains the
project's style and operational doctrine.

## Sources of Truth

Apply guidance in this order:

1. An approved, asset-specific brief
2. `docs/art-direction.md`
3. Approved regional, cultural, species, or character doctrine
4. Tool-specific operational prompting instructions
5. Generator discretion

Higher entries override lower entries. Tool-specific repetition or corrective
language may help a model produce the target style but does not redefine canon.

## Workflow States

- `requested`: the project needs the asset, but its brief is incomplete
- `brief-ready`: requirements and canon decisions are ready for generation
- `drafting`: exploratory images are being generated or revised
- `review`: one or more candidates are ready for evaluation
- `approved`: the chosen revision is ready for production use
- `replace-later`: approved for current use but intentionally expected to change
- `retired`: retained for history but no longer used

These production states are more detailed than public content publication
status. They may initially live in the art registry or briefs rather than the
runtime content schema.

## Phase 1: Request

Record why the asset is needed and where it will appear. Confirm its role before
generation: `hero`, `card`, `background`, `portrait`, or `thumbnail`.

Do not request multiple speculative variants merely to fill a future directory.
Create assets when there is a real collection, page, character, or interface use
for them.

## Phase 2: Brief

Complete the generation brief template from `docs/art-direction.md`.

The brief must identify:

- Story and emotional purpose
- World, collection, track, or character context
- Confirmed and provisional canon
- Environment, culture, materials, and visible magic
- Character inclusion or exclusion
- Required composition, role, crop, and interface safe area
- Must-include and must-avoid details
- Approved references and continuity requirements

If a character design is unresolved, use environment-first artwork or mark the
relevant details provisional. Do not allow a generated draft to decide character
canon implicitly.

## Phase 3: Generation

Generate drafts outside production website paths. Preserve the exact approved
brief and enough generation context to reproduce or meaningfully revise the
result.

The generation operator may strengthen prompt language to correct predictable
model drift. Examples include emphasizing anime facial readability when a model
becomes photorealistic or emphasizing grounded material texture when it becomes
glossy. Corrective wording must not contradict the approved brief.

Generated typography, logos, watermarks, signatures, borders, and interface
elements are not acceptable unless the brief explicitly calls for an
illustrative element that cannot be assembled reliably in layout.

## Phase 4: Creative Review

Review candidates in this order:

1. Story and canon accuracy
2. Emotional effect and sense of place
3. Global and regional style consistency
4. Composition and focal hierarchy
5. Character and species anatomy, when present
6. Materials, architecture, costume, symbols, and visible magic
7. Obvious generation artifacts or continuity errors

Reject attractive images that establish incorrect canon or fail their intended
website role.

## Phase 5: Interface Review

Before approval, test likely crops or mockups for:

- Wide desktop hero presentation
- Narrow mobile hero presentation
- `16:10` desktop collection cards when applicable
- `4:3` smaller-screen cards when applicable
- Title, description, and action safe areas
- Focal readability at thumbnail size
- Sufficient text contrast with actual interface treatments

An image that succeeds as standalone art may still fail as interface artwork.
Create a deliberate role-specific crop or variant when one composition cannot
serve every use.

## Phase 6: Approval and Provenance

For the selected revision, record:

- Stable artwork ID
- Revision number
- Approval state and date
- Related content IDs
- Generator or creator
- Source prompt or brief reference
- Master filename and dimensions
- Intended placements and crop requirements
- Alt-text decision
- Rights and usage metadata
- Provisional details introduced by the generator
- Replacement expectation, if any

Approval does not automatically make incidental generated details canonical.
Canon decisions should be recorded explicitly.

## Phase 7: Master Preservation

Keep the highest-quality approved source master separate from generated drafts
and optimized website outputs. Do not overwrite an approved master when testing
a new revision.

Use the source naming convention from `docs/art-direction.md`:

```text
{artwork-id-lowercase}--{short-title}--r{revision}.{extension}
```

Source masters may eventually live outside the Git repository if their size or
working history makes that appropriate. Structured artwork records must remain
independent of a particular storage provider.

## Phase 8: Website Export

Derive web assets from the approved master. Choose formats, dimensions,
compression, and responsive variants during integration based on current
browser support and measured quality.

General requirements:

- Never repeatedly recompress previous web exports
- Preserve color and tonal intent
- Remove unnecessary metadata when appropriate for public delivery
- Use role-specific crops rather than destructive compromises
- Keep production filenames stable and descriptive
- Record image dimensions, MIME type, byte size, and provider in asset metadata

The public website should not present visual artwork as a separate downloadable
product. Any image delivered to a browser can still be technically saved, so the
project can discourage separate reuse through presentation and terms but cannot
guarantee technical prevention.

## Phase 9: Integration and Validation

Integrate artwork through the structured artwork and image-asset records rather
than hardcoding image paths into components.

Verify:

- All references resolve
- Every artwork entry has an explicit alt-text decision
- Responsive crops retain their focal point
- Text remains readable
- Images do not cause avoidable layout shifts
- File sizes and loading behavior meet the site's performance expectations
- Reduced-motion behavior does not depend on parallax or animated artwork
- Replacement does not require changing the stable artwork ID

## Phase 10: Replacement or Retirement

When improving artwork that serves the same conceptual role, preserve the stable
artwork ID and update its image asset or revision metadata. Keep enough history
to identify the previously published version.

Use `replace-later` when an image is knowingly temporary because of unresolved
canon, such as missing character designs. Use `retired` when an asset is no
longer appropriate for production and should not be selected by active content.

## Initial Production Order

The first proof set is:

1. World / Home scenery
2. Main Suite collection scenery
3. Tavern Music collection scenery
4. Forest collection scenery

Create and approve the individual brief for each piece before generation. The
proof set should establish consistency without requiring unresolved character
designs. Stingers, role-specific card variants, and character pieces follow only
after the initial set confirms the shared visual direction.

## Incoming Doctrine Files

The original custom-GPT instructions remain source material under
`incoming/image-instruction-gpt/`. They are not runtime website content and are
not copied verbatim into the design bible.

Before any of those documents are promoted to permanent project documentation:

- Normalize their text encoding to UTF-8
- Remove unnecessary repetition intended only for model reinforcement
- Resolve contradictions against the approved art direction
- Separate external setting references from original campaign canon
- Confirm whether named private style references can be preserved and where
  their source images live
