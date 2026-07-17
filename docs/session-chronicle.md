# Session Chronicle

Version: 0.2

Status: Approved — implementation deferred

Audience: Campaign owner, Dungeon Master, and player characters

## Document Status

This specification records an approved future direction for the project. The
Dungeon Master and regular players have approved session recording and the
Chronicle build-out in principle. Implementation is intentionally deferred while
the existing soundtrack experience, artwork, and current content are developed.

Before the first recording, document the practical consent, access, retention,
pause, guest, review, and publication rules described below. Every participant
must understand the active process, and a guest joining a recorded session must
receive the same notice and choice.

## Direction in One Sentence

Expand the Splinters of Faith soundtrack companion into an illustrated campaign
chronicle where visitors can follow the party's journey through approved session
chapters, progressively revealed maps, locations, discoveries, characters,
artwork, and the music associated with those moments.

## Why This Fits the Existing Project

The website already presents music as a way to explore a fantasy world. A
campaign chronicle would extend that idea rather than replace it:

- Music remains the emotional guide.
- Artwork establishes place, mood, and memory.
- The campaign provides a lived path through the world.
- Maps reveal the physical journey.
- Session chapters preserve discoveries and consequences.

The result could feel like an illustrated fantasy travel journal, campaign
codex, and soundtrack companion rather than a transcript archive or actual-play
site.

The project would still be valuable if its only regular readers were the people
at the table. It would preserve a long-running shared story in a form that is
more lasting and expressive than scattered notes or chat history.

## Desired Visitor Experience

A visitor should be able to choose how deeply to engage.

### Read the Journey

Follow the campaign as a sequence of concise, illustrated chapters. Each chapter
would summarize one session or a coherent group of sessions in a polished,
book-like narrative rather than reproduce table conversation verbatim.

A chapter might contain:

- A title and date
- A short "previously" introduction
- A curated narrative recap
- Important decisions and consequences
- Locations visited
- Discoveries and lore learned by the party
- Characters and NPCs encountered
- Selected quotations
- Associated music
- Approved maps and artwork
- Unresolved questions known to the party

### Follow the Map

Explore a map that reflects only what the party has discovered at that point in
the story. The map should grow with the campaign rather than reveal the complete
setting immediately.

A visitor could:

- Switch between approved chapter or act states
- See the route traveled so far
- Select discovered locations
- Open location summaries and related chapters
- Listen to associated biome, settlement, battle, or character music
- View approved map annotations and artwork
- Distinguish visited, known-but-unvisited, and currently hidden places

The initial map does not need to be a complex geographic application. It could
begin as a high-quality illustrated map with positioned interactive markers and
chapter-specific overlays. More advanced zoom, region layers, routes, and
timeline controls should be added only if the simpler experience proves useful.

### Explore a Location

Each approved location could become a small destination containing:

- What the party currently knows
- The chapters in which it appeared
- Associated characters, factions, and discoveries
- Location or biome artwork
- Relevant music and Play All actions
- The map state when it was discovered

Descriptions must remain bounded by player knowledge. The public location page
must not quietly become an omniscient setting encyclopedia.

### Follow Characters

After player-character designs and publication boundaries are approved,
character pages could connect:

- Portraits and environmental scenes
- Character themes
- Public biography and known history
- Important decisions and relationships
- Selected chapter moments
- Changes in appearance, equipment, or outlook over time

Players should retain meaningful control over how their characters are
summarized and portrayed.

### Listen Alongside the Story

Chapters could recommend soundtrack cues for locations or scenes. The existing
persistent player could create a contextual chapter queue without interrupting
navigation.

Playback should remain visitor-controlled. Opening a chapter must not begin
audible playback without a user gesture.

## Editorial Principle

The public artifact is a curated chronicle, not a raw transcript.

Tabletop sessions naturally include rules discussion, interruptions, jokes,
corrections, cross-talk, private conversation, and mistaken assumptions. Those
elements belong in the private record when needed for context, but they should
not automatically appear in the public narrative.

The intended public reading length might be approximately five to ten minutes
per session chapter, adjusted when a session contains unusually little or much
story progression.

AI may draft and organize, but it must not decide canon, reveal secrets, or
publish material without review.

## Proposed Content Model

The eventual conceptual hierarchy could be:

```text
Campaign
└── Acts
    └── Chapters
        └── Sessions
            ├── Scenes
            ├── Locations
            ├── Discoveries
            ├── Characters and NPCs
            ├── Factions
            ├── Map state
            └── Soundtrack cues
```

This hierarchy is a conceptual proposal, not an instruction to create all of
these content types immediately. The smallest useful implementation might need
only chapters, locations, map markers, and music relationships.

Potential stable objects include:

- `Campaign`: the played adventure as a whole
- `Act`: a large narrative phase, if the campaign naturally has them
- `Chapter`: the polished visitor-facing narrative unit
- `Session`: the private or editorial record of one play session
- `Scene`: an important sequence within a session
- `Location`: a place the party can discover or visit
- `Discovery`: lore, evidence, an artifact, or another learned fact
- `Character`: a player character or approved public-facing character record
- `NPC`: a non-player character with a controlled knowledge boundary
- `MapState`: the approved visible map at a particular point in the journey
- `ChronicleCue`: a relationship between a narrative moment and soundtrack
  content

Relationships should reference existing soundtrack collections and tracks by
stable ID rather than duplicate music metadata.

## Possible Site Redesign

This expansion would add a second major exploration path while preserving the
soundtrack as the foundation.

A possible high-level structure is:

```text
Home
├── Listen / Soundtrack
│   ├── Main Suite
│   ├── Biomes
│   ├── Tavern Music
│   ├── Stingers
│   └── Characters
├── Chronicle
│   ├── Read the Journey
│   ├── Explore the Map
│   ├── Locations
│   └── Characters
├── Downloads
├── Releases
└── About
```

The home page could eventually introduce two complementary invitations:

- Explore the world through its music.
- Follow the footsteps of the party.

This should not turn the home page into a dense application dashboard. Large
artwork-led destinations, progressive disclosure, and the persistent player
should remain central.

### Chronicle Reading Layout

A chapter page could use:

```text
Chapter artwork or map detail
Chapter title and date
Short introductory summary
Contextual soundtrack action
Narrative sections
Location and discovery callouts
Selected artwork or map progression
Previous / Next chapter navigation
```

The visual treatment should resemble a premium fantasy chronicle or illustrated
companion book. It should avoid blog-post conventions, wiki density, or a social
media feed.

### Map Interaction Model

The map should initially prioritize clarity and atmosphere over simulation.

Recommended first interaction model:

1. Display an illustrated campaign map.
2. Overlay accessible HTML controls at known marker coordinates.
3. Allow markers to open a location summary panel or page.
4. Draw or reveal the party's approved traveled route.
5. Filter or step through map states by chapter or act.
6. Provide a non-map list containing the same locations and information.

The non-map alternative is required for accessibility and also helps visitors on
small screens. All map markers must be keyboard operable, labeled, and usable
without relying solely on color or hover.

Potential later enhancements include smooth pan and zoom, region layers, route
animation, discovery transitions, and links from narrative passages to map
locations. These are not necessary for a first chronicle slice.

### Spoiler-Aware Experience

If the public site follows the party's current progress, content could simply be
published only after discovery. If historical chapter states need to preserve
what was known at the time, the site may provide a chapter-based perspective.

The safest initial rule is:

> If the party has not discovered it and the DM has not approved it, it does not
> exist in public site data.

Avoid implementing complicated client-side spoiler locks around secrets that
are already shipped in static files. Hidden static content can still be found in
page source or deployment artifacts. True secrets must remain outside the public
build entirely.

## Session Capture Proposal

### Recording with Craig

Craig is a third-party Discord bot that records voice channels and produces a
separate synchronized audio track for each participant. Its current public
documentation states that standard recordings may run for up to six hours and
remain available for download for seven days.

Relevant features:

- `/join` begins recording the current voice channel.
- `/stop` ends the recording.
- `/note` adds a timestamped note to the recording package.
- Separate speaker tracks reduce speaker-identification problems.
- Recordings can be exported in formats such as FLAC and AAC.

Craig records audio but does not currently advertise automatic transcription.
Transcription would therefore be a separate local step.

References:

- https://craig.chat/
- https://docs.craig.chat/
- https://craig.chat/commands/
- https://craig.chat/faq/

### Useful In-Session Notes

The group would not need to mark every event. A few `/note` entries could serve
as landmarks:

```text
discovery: ruined shrine beneath the old oak
location: party entered Dunmarrow
npc: first meeting with Captain Vey
decision: party refused the magistrate's offer
combat: ash wolves at the northern bridge
quote: memorable character line
private: DM must review before publication
```

The transcript remains the detailed source. Notes help direct editorial
attention to the moments most likely to matter.

## Local Transcription Proposal

Use `faster-whisper` as the likely long-term local transcription engine. It is a
scriptable implementation of Whisper that supports timestamps, local CPU or
NVIDIA GPU execution, batching, and voice-activity detection.

Potential alternatives remain available:

- Buzz for an easy desktop proof of concept
- whisper.cpp for a lightweight or CPU-focused command-line setup
- Subtitle Edit for careful timeline review and correction

References:

- https://github.com/SYSTRAN/faster-whisper
- https://github.com/chidiwilliams/buzz
- https://github.com/ggml-org/whisper.cpp
- https://subtitleedit.github.io/subtitleedit/features/speech-to-text.html

### Proposed Repository Command

After a one-time local setup, an operator could place a Craig export under an
ignored incoming directory and run a command such as:

```powershell
npm run chronicle:ingest -- session-001
```

The exact command and implementation will be designed when the deferred work
resumes and a real recording sample is available.

The ingestion process could:

1. Validate the session folder and supported audio files.
2. Derive speaker names from Craig track metadata or filenames.
3. Transcribe each synchronized speaker track independently.
4. Preserve segment or word timestamps.
5. Merge statements into one chronological transcript.
6. Apply a campaign spelling glossary cautiously.
7. Incorporate Craig timestamped notes.
8. Flag uncertain names and low-confidence passages.
9. Produce structured extraction and recap drafts.
10. Stop before any public content is created.

### Restartability

Multi-hour transcription may be slow, especially without a supported GPU. The
pipeline should preserve completed per-speaker results so it can resume after an
interruption without retranscribing finished tracks.

### Campaign Glossary

Fantasy names are a predictable transcription weakness. Maintain a private,
reviewed glossary containing approved spellings for:

- Player characters
- Important NPCs
- Locations and regions
- Deities and factions
- Spells, artifacts, and setting-specific terminology

The glossary may guide recognition and suggest corrections. It must not blindly
replace similar-sounding ordinary words or turn an uncertain mention into a
confirmed discovery.

## Proposed Incoming Organization

Raw recordings and private transcripts must not enter public source control.

```text
incoming/
└── sessions/
    └── session-001/
        ├── raw/
        │   ├── dm.flac
        │   ├── kevin.flac
        │   └── player-name.flac
        ├── working/
        │   ├── dm.json
        │   ├── kevin.json
        │   └── player-name.json
        └── review/
            ├── transcript.md
            ├── transcript.json
            ├── uncertain-terms.md
            ├── session-extraction.md
            └── recap-draft.md
```

All of `incoming/sessions/` should be ignored by Git before the first recording
is placed there. Model files, private glossaries where necessary, caches, and
working transcription environments should also be ignored.

## Private-to-Public Boundary

Use three explicit information layers:

### Raw / Private

- Audio recordings
- Full transcripts
- Table talk and personal conversation
- Unapproved DM discussion
- Private campaign glossary
- Uncertain automated interpretations

### Review

- Extracted events
- Candidate quotations
- Possible discoveries
- Location and map changes
- Recap drafts
- Suggested soundtrack relationships
- Questions and confidence flags

### Public

- DM- and player-approved chapter
- Approved quotations
- Approved discoveries and lore
- Public map state
- Approved character and NPC information
- Artwork and soundtrack relationships

No automated process should cross from review into public content without an
explicit approval action.

## Review Classifications

Extracted information could be classified as:

- `public`: confirmed and safe for publication
- `party-only`: safe within the group but not approved for public use
- `dm-review`: uncertain, inferred, or potentially secret
- `spoiler`: known to the DM but not discovered by the party
- `rejected`: irrelevant, incorrect, or transcription noise

Only `public` material may enter the deployed site.

AI-generated claims should retain transcript timestamps or another source trail
during review. This makes it possible to check doubtful statements and reduces
the risk of invented connective details becoming campaign history.

## Consent and Participant Control

Before any pilot:

- Every regular participant should affirmatively consent to recording and local
  transcription.
- The group should decide whether consent applies to every future session or is
  renewed each time.
- The recording bot must be visibly present and recording should be announced.
- Guests must be informed before joining a recorded channel.
- A participant must have a practical way to decline or request a pause.
- The group must agree who can access recordings and raw transcripts.
- The group must agree how long raw recordings and transcripts are retained.
- Players should be able to review public portrayals and attributed quotations.
- The DM must control spoilers, undiscovered lore, map revelation, and the
  timing of publication.

Recording-consent law varies by location. The group should confirm applicable
requirements based on where all participants are located rather than relying on
this project proposal as legal advice.

## Security and Retention

Recommended principles:

- Download Craig recordings before their service expiration.
- Store raw audio only in a private, access-controlled location.
- Do not place raw audio, full transcripts, or secrets in the Git repository.
- Delete working copies when they are no longer needed under the agreed policy.
- Avoid sending recordings or transcripts to additional cloud AI services
  without renewed group approval.
- Back up approved public prose separately from disposable transcription caches.
- Never embed secret content in a static deployment and rely on CSS or
  JavaScript to hide it.

## Site and Technical Impact

The approved Astro static-first architecture can support the public Chronicle.
Approved chapters, locations, map states, and relationships can be structured
content rendered at build time.

The deployed site would not perform recording, transcription, AI processing, or
secret management. Those remain private editorial operations before approved
content reaches the repository.

Likely future work includes:

- New structured content schemas and validation
- Chronicle, chapter, location, and map routes
- Reusable narrative and discovery components
- Accessible interactive map components
- Content relationships to existing tracks and collections
- Image assets and responsive map variants
- Additional navigation and home-page information architecture
- Private ingestion and editorial scripts
- Tests for chronology, references, spoiler exclusion, accessibility, and map
  alternatives

The persistent player and existing soundtrack content model should be extended,
not replaced.

## Hosting and Storage Impact

Approved chapter text and structured metadata would be small enough for the Git
repository. Raw recordings and full transcripts could become very large and
must remain elsewhere.

Potential storage categories are:

- Repository: approved public text and lightweight metadata
- Public media origin: optimized approved maps and artwork
- Private archive: raw recordings, raw transcripts, and DM review material
- Local model cache: transcription model files and disposable processing data

No particular cloud, server, or CDN provider needs to be selected during the
discussion phase.

## Risks and Mitigations

### Recording Changes Table Behavior

Knowing a session is recorded may make participants self-conscious.

Mitigation: obtain genuine agreement, keep raw recordings private, and allow
recording pauses or a decision not to continue the experiment.

### Accidental Spoilers

DM narration or table talk may contain information the characters did not
actually learn.

Mitigation: strict DM review and no direct automated publishing.

### Transcription Errors

Fantasy names, crosstalk, accents, poor microphones, and jokes may be
misunderstood.

Mitigation: separate Craig tracks, timestamps, a controlled glossary,
uncertainty reports, and human correction.

### AI Hallucination

A recap generator may invent transitions, motives, or facts.

Mitigation: source-linked extraction, explicit confidence, separation of facts
from prose, and human approval.

### Editorial Workload

Automation may still leave too much review work after every session.

Mitigation: pilot one session, measure actual review time, publish only important
chapters, and allow multiple sessions to become one chapter.

### Scope Overwhelms the Soundtrack

The Chronicle could make the original music experience feel secondary.

Mitigation: preserve music as the emotional spine, retain the soundtrack-first
journey, and introduce the Chronicle as a complementary exploration path.

### Privacy and Personal Conversation

Raw recordings may capture material never intended for publication.

Mitigation: private storage, limited access, retention rules, participant review,
and deletion rights.

### Map Complexity

A fully interactive map could become expensive to build and maintain.

Mitigation: start with an illustrated static map, accessible markers, route
overlays, and a parallel location list.

## Recommended Pilot

When the deferred Chronicle work resumes, do not redesign the site immediately.

Run one private pilot:

1. Confirm written or clearly documented participant consent.
2. Record one representative session with Craig.
3. Add a few timestamped notes during play.
4. Download and privately archive the speaker-separated audio.
5. Test local transcription on a short excerpt before processing the full
   session.
6. Merge a speaker-labeled transcript.
7. Generate a structured extraction and one recap draft.
8. Have the DM and players review accuracy, privacy, tone, and effort.
9. Create one non-public mock chapter and map concept.
10. Decide whether the value justifies continued work.

The pilot should measure:

- Recording reliability
- Transcription accuracy
- Processing time on the available hardware
- Human correction time
- DM spoiler-review burden
- Player comfort
- Quality of the resulting chapter
- Whether the Chronicle strengthens or distracts from the soundtrack experience

## Possible Implementation Phases

### Phase 0: Discussion

- Principle-level DM and player approval is complete.
- Resolve the operational consent, privacy, ownership, retention, and
  publication boundaries before recording begins.
- Make no site changes.

### Phase 1: Private Capture Pilot

- Install and test Craig.
- Select a local transcription engine based on hardware.
- Process one session privately.
- Do not publish.

### Phase 2: Editorial Proof

- Produce one approved recap.
- Create one mock chapter and simple map state.
- Evaluate the proposed visual and reading experience.

### Phase 3: Small Chronicle Slice

- Add only the schemas and components required for one public chapter.
- Integrate existing soundtrack relationships.
- Verify accessibility and spoiler boundaries.

### Phase 4: Map and Discovery Expansion

- Add location relationships and progressive map states.
- Add accessible map interaction and corresponding list views.
- Expand only after observing how the first chapter is used.

### Phase 5: Ongoing Editorial Workflow

- Automate repeatable private ingestion.
- Maintain glossary and continuity data.
- Add character and location experiences as approved content becomes available.

## Operational Questions for the Dungeon Master

The broad recording and Chronicle direction is approved. These questions remain
the pre-pilot checklist for how that approval will operate in practice.

1. Does recording approval apply to all regular sessions, and how should
   exceptions be handled?
2. What DM speech or information must never enter player-facing transcripts?
3. Who determines whether a discovered fact is public and canonically correct?
4. Can completed-region maps be supplied, and in what form?
5. Should the public map show only visited locations or also known destinations?
6. How long after play should a chapter wait before publication?
7. Are there sourcebook-derived names, maps, text, or artwork that should not be
   reproduced publicly?
8. Should some campaign arcs remain permanently private?
9. Who approves NPC descriptions, lore summaries, and map annotations?
10. How should retcons or corrected interpretations appear in the Chronicle?

## Operational Questions for the Players

The broad recording and Chronicle direction is approved. These questions remain
the pre-pilot checklist for participant control, privacy, and publication.

1. Should recording consent remain active for regular sessions or be renewed
   before every session?
2. Is everyone comfortable with approved summaries being publicly readable?
3. May character names and selected quotations be attributed publicly?
4. Should players approve every quotation and character-focused summary?
5. What personal or table conversation should always be excluded?
6. Should raw recordings be deleted after transcription or retained privately?
7. How long should private transcripts be retained?
8. Can a participant request removal or correction of a public passage later?
9. Does recording feel likely to diminish spontaneity or comfort at the table?
10. Would players contribute occasional notes, corrections, or character
    reflections if the automated draft substantially reduced the workload?

## Approved Direction

- Session recording and private transcription are approved in principle.
- The Chronicle is approved as future project scope.
- Implementation is deferred while the current soundtrack companion, artwork,
  and existing content are developed.
- Work will resume with one private pilot and no publication commitment.
- Public Chronicle content will be added only after the pilot demonstrates a
  sustainable, accurate, comfortable editorial workflow and the relevant
  material receives DM and player review.

## Current Recommendation

Keep the approved Chronicle direction documented but dormant. When the group is
ready, conduct one private pilot and measure the real editorial effort before
changing the site architecture.

Until work resumes:

- Continue developing the approved soundtrack experience.
- Do not add Chronicle content types or navigation to the production site.
- Do not install the recording and transcription workflow yet.
- Continue artwork production and fill out the existing structured content.


---

## Additional Architectural and Editorial Observations

These observations were added after reviewing the proposal as a whole. They are
approved guidance for future implementation planning, but they do not change the
current decision to defer the work.

### The Chronicle Can Remain a Static GitHub Pages Site

Nothing in the currently proposed public experience requires a traditional
application server, database, account system, or content-management backend.

The public workflow can remain:

```text
Campaign session occurs
        ↓
Private recording, transcription, and editorial review occur locally
        ↓
Approved chapters, map states, artwork, and soundtrack relationships are added
        to the repository
        ↓
Astro validates and rebuilds the site
        ↓
GitHub Pages publishes the new edition
```

The deployed site may still include sophisticated browser-side interaction:

- Progressive map states and fog-of-war-style overlays
- Pan, zoom, markers, routes, and chapter timeline controls
- Search, filtering, galleries, and relationship views
- Persistent music playback and contextual queues
- Animated transitions and illustrated story presentation
- Character and location pages that change as the campaign progresses

In this architecture, "static" means that visitors do not modify the site's
canonical shared data. It does not mean that the visitor experience must be
visually simple or non-interactive.

A backend would become necessary only if the project later requires features
such as visitor accounts, player-authored submissions through the website,
comments, live collaborative editing, uploads, personalized saved progress, or
private content served according to user permissions.

### Public Media May Be Hosted Separately

The Git repository and GitHub Pages deployment should eventually contain only
lightweight public content such as prose, metadata, code, and appropriately
optimized interface assets.

Music, large illustrations, downloadable lossless files, and high-resolution
maps may be delivered from a separate public media origin or object-storage
service. The Astro site would continue to store stable asset metadata and URLs,
while the visitor's browser would request the media directly from that external
host.

This does not change the static architecture. It separates the publishing layer
from large-file storage and delivery.

### Lead with Preservation, Not Recording

When discussing the concept with the group, the central proposal should be:

> Preserve the campaign as a beautiful illustrated chronicle because the shared
> story may be worth revisiting years later.

Recording is only one possible production tool for reducing lost details and
editorial labor. It should not become the emotional center of the pitch.

This framing helps distinguish the desired artifact from an actual-play archive,
a surveillance record, or a transcript repository.

### The Long-Term Artifact Is More Than a Website

The strongest version of the concept is a growing campaign companion that could
remain meaningful after the campaign ends. It may eventually resemble a
combination of:

- An illustrated fantasy travel journal
- A campaign companion book
- A party-perspective historical record
- An interactive map of a lived journey
- A soundtrack album with narrative context

The website is the delivery format. The lasting product is the curated artifact.

### Preserve the Party's Historical Perspective

The Chronicle should present what the party knew, believed, suspected, and
misunderstood at a particular point in the journey. Later revelations should not
silently rewrite earlier chapters.

For example, an early chapter may truthfully state that the party became
convinced a particular noble was responsible for a crime. A later chapter may
then reveal that the conclusion was wrong. This preserves the experience of the
mystery and allows visitors to follow the same evolving understanding.

This principle implies that the Chronicle should preserve:

- Incorrect theories that genuinely influenced decisions
- Trust placed in deceptive characters
- Failed investigations and abandoned leads
- Consequences of incomplete information
- Retcons and corrections as later historical developments rather than invisible
  edits, when practical

The public artifact should distinguish between an inaccurate player belief and
an inaccurate editorial statement. The former is part of the story; the latter
should be corrected.

### Preserve Failure and Uncertainty

The Chronicle should not sanitize the campaign into a sequence of clean heroic
victories. Misjudgments, costly choices, failed plans, incomplete victories, and
unresolved questions are often the most memorable parts of a tabletop story.

Likewise, the editorial process should avoid turning ambiguity into certainty.
Language such as "the party suspected," "Yuki believed," or "the evidence
appeared to suggest" may be more accurate and dramatically useful than an
omniscient declaration.

### Music Can Become Structural Navigation

Music should remain more than ambient accompaniment. It can become connective
tissue across the entire experience.

A visitor might move through the project in either direction:

```text
Track or collection
        ↓
Associated biome, character, location, or event
        ↓
Relevant chapter
        ↓
Related discovery or character moment
```

or:

```text
Chapter
        ↓
Location or character
        ↓
Associated musical cue
        ↓
Broader soundtrack collection
```

This creates a distinct identity that separates the project from both a normal
campaign wiki and a conventional soundtrack page.

### Character Pages Should Show Change Over Time

Character pages may be most compelling when designed as records of development
rather than static biographies.

Potential chronological elements include:

- Portrait and appearance changes
- Equipment, scars, titles, and visual motifs
- Themes and musical variations
- Important choices and consequences
- Relationships as they become known or change
- Publicly approved character reflections
- Changes in goals, outlook, or allegiance
- Chapters marking major turning points

The page itself can communicate a character arc without exposing private
backstory or undiscovered information.

### Avoid Becoming a Conventional Wiki

Reference information will be useful, but the project should resist becoming a
dense encyclopedia that feels like homework to maintain or read.

The preferred experience remains:

- Artwork-led rather than table-led
- Narrative rather than exhaustive
- Contextual rather than omniscient
- Discoverable rather than densely indexed
- Cinematic and emotionally paced rather than dashboard-like

Location and character pages should answer useful questions while still feeling
like destinations within the journey.

### Suggested Discussion Framing for the Dungeon Master

The first conversation does not need to resolve implementation details. Useful
high-level talking points include:

1. **Preservation:** Is this campaign something the group would value preserving
   in a lasting form?
2. **Audience:** Is the intended audience only the table, invited friends, or the
   general public?
3. **Tone:** Should the Chronicle feel like a fantasy novel, travel journal,
   historical account, party memoir, or another form?
4. **Knowledge boundary:** Should all public writing remain strictly limited to
   what the party knew at that point in the story?
5. **Historical uncertainty:** Should incorrect theories and failed assumptions
   remain visible as part of the narrative?
6. **DM authority:** What does the DM need to approve regarding spoilers, lore,
   NPCs, map changes, and publication timing?
7. **Player control:** How much review should players have over quotations,
   portrayals, and character-focused material?
8. **Recording comfort:** Is private recording acceptable as an editorial aid,
   and what practical pause or opt-out process would make everyone comfortable?
9. **Sustainable effort:** How much post-session work is realistic before the
   project becomes burdensome?
10. **Music's role:** Does the group agree that the soundtrack should remain the
    emotional and structural backbone rather than becoming a secondary feature?

### Suggested Success Test for the Pilot

The pilot should answer more than whether transcription technically works. Its
most important question is:

> Does the resulting chapter feel valuable enough that the group would be happy
> to have it years from now?

A technically successful pipeline is not sufficient if the result feels generic,
creates discomfort, requires excessive correction, or weakens the experience at
the table.

Conversely, a somewhat manual workflow may still be worthwhile if the resulting
artifact feels personal, accurate, beautiful, and emotionally connected to the
campaign and its music.
