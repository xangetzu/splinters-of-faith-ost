# Art Direction

Version: 0.2

Status: Approved

## Purpose

This document is the shared visual production brief for artwork created for the
Splinters of Faith soundtrack companion. It is intended to be portable: it may
be given to a custom image-generation GPT, a human artist, or a future creative
tool without requiring access to the website implementation.

This document defines the stable visual language and production requirements.
Individual images should receive separate asset briefs. Approved artwork and
its revisions should be tracked in the project's structured artwork and asset
metadata rather than embedded only in generation conversations.

## Creative Goal

Artwork should make the visitor feel that they are entering the world of
Splinters of Faith through its music. The presentation should resemble premium
fantasy RPG key art or an illustrated collector's-edition companion, not a
generic streaming service.

The canonical style identity is **painterly semi-anime fantasy realism**. Its
high-level qualities are:

- Grounded fantasy realism
- Painterly concept-art rendering
- Restrained anime-inspired character aesthetics
- Cinematic environmental storytelling
- Rich, atmospheric environments
- Elegant, emotionally subtle presentation
- Premium RPG key-art finish

The target balance is approximately 70% grounded realism and 30% stylization.
This ratio is descriptive rather than mathematical: an image should retain
anime-influenced elegance and readability without becoming conventionally anime
or photorealistic.

The custom generation workflow may use stronger anime-first corrective language
when a model drifts toward photographed humans or Western photorealism. That is
a prompting technique, not a change to the canonical visual target.

## Emotional Language

Across the project, the world should feel:

- Wistful
- Ancient
- Weathered
- Melancholic
- Adventurous
- Intimate
- Quietly magical

Emotional energy should be restrained rather than explosive. Characters should
feel emotionally intelligent and lived-in. Environments should imply history,
human presence, and events beyond the visible frame.

Individual collections may emphasize different emotions while remaining within
this shared language.

## Rendering Language

Images should resemble high-end fantasy concept art, illustrated cinematic
stills, premium RPG key art, or matte-painted fantasy scenes.

Prefer:

- Soft edge transitions and painterly blending
- Selective sharpness around the intended focal point
- Visible, believable material texture
- Layered atmospheric depth
- Naturalistic, emotionally motivated lighting
- Subtle brush-like softness
- Clear value grouping and focal hierarchy
- Detail concentrated where it supports story or recognition

Avoid:

- Uniformly sharp or uniformly detailed rendering
- Plastic surfaces and glossy skin
- Oversmoothed faces
- Photorealistic skin simulation or uncanny photographic rendering
- Generic AI hyper-detail
- Sterile or empty environments
- Flat color blocking, hard linework, or cel shading

## Anime Influence

Anime influence is welcome in:

- Eye expressiveness and emotional readability
- Elegant facial simplification
- Silhouette clarity
- Hair flow and shape language
- Compositional poetry
- Restrained stylization of anatomy and gesture

It should not produce:

- Oversized eyes or simplified tiny noses and mouths
- Chibi or cartoon proportions
- Exaggerated expressions
- Hyper-youthful facial construction
- Glossy gacha or mobile-game rendering
- Idol aesthetics
- Hypersexualized anatomy
- Modern anime fashion tropes

The intended result is anime influence without becoming conventional anime art.

## Visual Principles

1. Artwork is the visual focus; interface elements frame it.
2. Every collection should be recognizable by environment, atmosphere, light,
   and palette before its title is read.
3. Environments should feel inhabited and narratively meaningful even when no
   characters are visible.
4. Mood and storytelling matter more than decorative detail.
5. Images should invite exploration rather than depict a static catalog item.
6. A consistent world and rendering language should connect all collections.
7. Collection-specific identities should remain distinct within that shared
   language.
8. Artwork should support readable interface overlays and responsive crops.

## Initial Character Policy

The player characters are not yet visually settled. Initial collection artwork
must therefore be environment-first and must not establish an identifiable
player-character design.

For current scenery artwork:

- Prefer unoccupied environments or storytelling through architecture,
  objects, paths, weather, light, and traces of recent activity.
- Generic, distant figures may be used only when they are visually incidental
  and do not imply a canonical player-character appearance.
- Do not use close, detailed, or recognizable adventuring-party silhouettes.
- When a future character scene is anticipated, leave intentional visual and
  lighting space where characters can later be composed.
- Do not make empty character-shaped gaps conspicuous; the scenery must work as
  a finished image on its own.
- Preserve enough uncluttered foreground or midground separation to support a
  later character revision when requested.

Environment-first artwork is not considered disposable placeholder art. It may
remain the permanent collection artwork even after character-focused pieces are
added elsewhere.

## Character Artwork

Character artwork will begin only after the relevant appearance and design are
approved. Character pieces will generally be portraits with environmental or
narrative context rather than isolated model sheets.

Future character briefs should define:

- Approved physical appearance, clothing, equipment, and distinguishing traits
- Personality and emotional tone
- Relationship between the character and the surrounding scene
- Camera distance and portrait crop
- Canonical reference images, if available
- Details that must remain consistent across future artwork
- Details that are flexible or intentionally unresolved

Unapproved generated character details must not silently become canon.

When characters are introduced, faces should be anatomically grounded, softly
stylized, expressive, and emotionally restrained. Bodies should be believable,
agile, and lightly athletic rather than exaggerated. Hair should respond to
weather and movement rather than forming rigid spikes or plastic strands.

Non-human anatomy requires its own approved brief. Species features should be
integrated as coherent anatomy rather than added like costume accessories.
Duplicated anatomy, such as simultaneous human and replacement species ears,
is considered an error unless a specific canonical design says otherwise.

### Character Reference Sheets

A character reference sheet and a website character portrait are separate asset
types even when they share source art.

Reference sheets may use an archival fantasy-artbook presentation with a hero
portrait, turnarounds, meaningful detail panels, material and color swatches,
and concise annotations. They should use warm, lightly weathered presentation,
restrained manuscript ornament, and clear visual hierarchy rather than a modern
infographic or science-fiction interface.

Reference-sheet typography and labels should be assembled during layout rather
than baked into generated illustration panels whenever practical. This protects
legibility and makes corrections possible without regenerating the artwork.

## Collection Direction

### World / Home

Emotional goal: wonder, curiosity, and the beginning of a journey.

The home artwork should introduce the broader world without prematurely
defining unresolved characters or favoring one collection too strongly. It
should feel expansive and inviting, with a clear visual journey into the scene.

### Main Suite

Emotional goal: the beginning of an adventure, importance, and possibility.

Initial artwork should use evocative scenery capable of carrying the identity
of the soundtrack's central suite. It should feel foundational and cinematic
without requiring the adventuring party to appear.

### Tavern Music

Emotional goal: warmth, fellowship, rest, and lived-in comfort.

Initial artwork may focus on an inviting tavern interior or exterior,
firelight, tables, instruments, food, signs of recent company, and other
environmental storytelling. Identifiable party members should not appear.

### Stingers

Emotional goal: energy, surprise, punctuation, and dramatic transition.

Because Stingers contains short utility pieces rather than one physical place,
its artwork may be more symbolic or compositionally dramatic while remaining
grounded in the same world and painterly visual language.

### Forest

Emotional goal: peace, hope, age, quiet exploration, and natural mystery.

Forest is a collection and biome, not a character. Its initial artwork should
establish a forest destination through landscape, scale, paths, settlements,
ruins, sacred spaces, weather, or light. It should not depict a named or implied
"forest hero."

The current Forest music spans town, field, dungeon, battle, event, travel, and
sacred subtypes. A general collection image does not need to represent every
subtype literally; it should communicate the biome's unifying identity.

## Composition and Interface Safety

The website currently uses wide collection artwork and responsive crops. Each
asset brief must identify its intended role before generation.

General requirements:

- Keep important faces, landmarks, and story information away from extreme
  edges.
- Assume the image will be cropped differently on desktop, tablet, and mobile.
- Preserve a calm region for collection titles, descriptions, and actions.
- Avoid placing essential details beneath the lower portion of wide images,
  where gradients and interface content may appear.
- Avoid baked-in typography, logos, borders, controls, or decorative UI.
- Do not solve text readability by making the entire image uniformly dark; use
  composition, value grouping, atmosphere, and intentional negative space.
- Maintain a clear focal hierarchy at both full size and thumbnail size.

The current collection-card presentation is `16:10` on wider screens and `4:3`
on smaller screens. Hero artwork spans wide viewports and may receive a much
tighter mobile crop. Source compositions must tolerate both uses only when an
asset brief explicitly calls for a shared hero/card image; otherwise separate
role-specific crops or assets are preferred.

Preferred camera language includes a natural lens feel, cinematic asymmetry,
moderate depth of field, environmental framing, and strong separation between
foreground, midground, and background. Avoid extreme fisheye distortion,
unmotivated perspective warping, and compositions that read only as posed
posters.

## Materials, Costume, and Ornament

The world should look practical, traveled, tactile, and culturally grounded.
Materials should imply climate, lifestyle, social context, age, and use.

Preferred material language includes:

- Linen, cotton, wool, layered wraps, and woven textiles
- Weathered leather and wood
- Silk or brocade used as controlled accents
- Aged, tarnished, or oxidized metals
- Natural wrinkles, believable drape, repairs, wear, and weathering

Ornament should feel personal, inherited, cultural, symbolic, or lightly
mystical. Avoid pristine costume-like gear, indiscriminate ornament, generic MMO
armor clutter, and decorative elements that have no relationship to the world.

## Lighting and Atmosphere

Lighting should be cinematic, naturalistic, and emotionally motivated.
Appropriate treatments include golden hour, overcast diffusion, candlelight,
fog-filtered daylight, moonlit ambience, rain-reflected light, and restrained
volumetric shafts.

Air should feel present through selective mist, haze, dust, moisture, smoke,
rain, pollen, sea spray, or drifting particles. Atmospheric effects must support
depth and place rather than cover weak environmental design.

## Color Language

Palettes should generally be restrained, earthy, weathered, and cinematic.
Recurring useful tones include dusty blues, muted indigos, warm ivory, faded
crimson, aged gold, stone gray, and sea-washed browns.

Saturation should be controlled. Strong accents should be sparse, intentional,
and narratively meaningful. Avoid neon palettes, oversaturated fantasy color,
and indiscriminate high contrast. Collection-specific palettes defined in the
design system and content metadata take precedence over this shared baseline.

## World and Regional Continuity

Architecture, clothing, materials, symbols, climate, and magic should form a
coherent cultural system. A location brief should answer:

- What climate and geography shaped this place?
- What local materials are available?
- How do people travel, work, worship, trade, and build?
- What has weather, conflict, age, or ritual done to the environment?
- Which motifs are culturally meaningful here?
- How does magic manifest in this region, if it is visible at all?

Regional doctrine may define specific answers. These packets refine the world
but do not override the global rendering language. Details adapted from external
setting references must be distinguished from original Splinters of Faith canon
before they are published or treated as permanent visual continuity.

## Asset Roles

Artwork is a first-class project object and may have one of these initial roles:

- `hero`: immersive wide artwork for the home page or a collection destination
- `card`: collection navigation artwork designed to remain clear at small sizes
- `background`: atmospheric supporting imagery, usually less focal
- `portrait`: character-focused artwork with an approved character design
- `thumbnail`: compact player or track imagery with a simple focal read

One source image may support multiple roles only when its composition remains
strong in every required crop. Reusing an unsuitable crop is not preferred over
creating a deliberate variant.

## Source and Export Requirements

- Preserve the highest-quality generated or edited master outside the optimized
  website output.
- Generate without embedded text, logos, watermarks, signatures, or UI.
- Prefer a large landscape master for scenery; the first briefs should target at
  least `3840 x 2160` pixels when the generation workflow supports it.
- Do not repeatedly recompress a web export. Derive new web variants from the
  preserved master.
- Website formats, dimensions, compression, and responsive variants will be
  selected during integration and may change as browser support evolves.
- Do not place generation drafts directly into production asset paths.

## Accessibility and Content Decisions

Every approved artwork record must make an explicit alt-text decision:

- Use meaningful alt text when the image communicates content not already
  conveyed by nearby text.
- Use an empty alt value when the image is purely atmospheric or duplicates the
  adjacent title and description.
- Do not describe visual style, generation method, or every decorative detail
  unless that information is relevant to understanding the page.
- Avoid relying on color alone to communicate a collection or state.

Text placed over artwork must retain sufficient contrast across responsive
crops. The final rendered page, not the source image by itself, determines
whether that requirement is met.

## Generation Brief Template

Create one brief for each requested artwork piece using this structure:

```text
Asset title:
Proposed stable artwork ID:
Collection or world context:
Role: hero | card | background | portrait | thumbnail
Status: requested | drafting | review | approved | replace-later | retired

Story purpose:
Emotional goal:
Scene and environment:
Primary focal point:
Secondary storytelling details:
Time, weather, and lighting:
Collection palette:
Regional or cultural doctrine:
Character policy for this image:
Future character placement, if applicable:

Composition and camera:
Required aspect ratio and master dimensions:
Interface safe area:
Required responsive crops:

Must include:
Must avoid:
Approved references:
Continuity notes:
Alt-text decision:
Canon confidence: confirmed | provisional | generator-discretion
```

The custom art GPT may translate an approved brief into its own internal prompt
format and apply operational reinforcement language, but it should not invent
canonical story, character, or continuity details that are absent from the
brief. Generator-discretion details are visually useful but remain non-canonical
until explicitly approved.

## Asset Registry

The growing library should track at least:

- Stable artwork ID
- Human-readable title
- Related world, collection, or track IDs
- Artwork role
- Image asset ID and source filename
- Revision number
- Workflow status
- Creation date
- Creator or generation tool
- Source prompt or prompt reference when retained
- Master dimensions
- Intended website placements
- Alt-text decision
- Replacement expectation and reason
- Rights and usage metadata
- Canon status of newly introduced visual details

The registry should distinguish `replace-later` from an ordinary draft. A
replace-later image is approved for current use but intentionally expected to be
superseded, such as a scene awaiting finalized character designs.

## File Naming and Revisions

Use stable, descriptive lowercase filenames. A proposed source naming pattern
is:

```text
{artwork-id-lowercase}--{short-title}--r{revision}.{extension}
```

Example:

```text
art-for-hero-001--forest-path--r01.png
```

Revision numbers describe source-art iterations. Website optimization variants
should derive from the approved revision and use role or dimension suffixes as
needed. Do not overwrite an approved master while testing a replacement.

## Initial Proof Set

The first art pass should remain intentionally small:

1. World / Home scenery
2. Main Suite collection scenery
3. Tavern Music collection scenery
4. Forest collection scenery

These pieces should be character-free, or contain only incidental anonymous
figures that satisfy the initial character policy. After the set establishes a
cohesive direction, card variants and Stingers artwork can be briefed without
prematurely expanding the library.

## Review and Approval Workflow

1. Add or update an asset brief.
2. Generate exploratory versions outside production paths.
3. Review style, story accuracy, composition, responsive crop potential, and
   continuity.
4. Mark the selected revision as approved or replace-later.
5. Preserve the approved master and record its provenance.
6. Produce optimized website variants.
7. Integrate through structured artwork and asset metadata.
8. Verify responsive crops, text contrast, loading performance, and alt text in
   the actual interface.
9. Retire superseded versions without changing the artwork object's stable ID
   when the replacement serves the same conceptual role.

## Production Decisions to Resolve

The overall art direction is approved. Resolve the following production details
before generating or integrating the artwork they affect:

1. Recurring world motifs, materials, architecture, technology, and visual
   symbols that should establish continuity.
2. Whether the first master-size target matches the custom GPT's practical
   output workflow.
3. The actual story and scene briefs for the four initial proof pieces.
4. Whether the named Yuki portrait and character-sheet references should be
   preserved as private style anchors, and where their source files are stored.
5. Which regional doctrine applies to each initial collection scene.
