# World Model

Version: 0.1

> This document defines the conceptual data model for the Splinters of
> Faith Soundtrack project.
>
> It intentionally describes **what exists** in the world, not how it is
> implemented.

------------------------------------------------------------------------

# Core Philosophy

Everything is data.

The website is merely one way of presenting it.

The goal is to create a flexible model that can grow with the soundtrack
for many years without requiring major architectural changes.

------------------------------------------------------------------------

# Object Hierarchy

    World
    │
    ├── Collections
    │   └── Tracks
    │
    ├── Artwork
    ├── Playlists
    ├── Releases
    ├── Assets
    └── Composer Notes

The website should present these objects in different ways, but they
remain independent concepts.

------------------------------------------------------------------------

# World

Represents the soundtrack as a whole.

Properties may include:

-   Title
-   Description
-   Logo
-   Hero artwork
-   Featured collections
-   Current release
-   Statistics
-   Composer information

------------------------------------------------------------------------

# Collection

Collections are the primary navigation units of the website.

Examples:

-   Main Suite
-   Forest
-   Mountains
-   Swamp
-   Characters
-   Tavern Music
-   Stingers

Suggested properties:

-   Stable ID
-   Title
-   Slug
-   Description
-   Theme
-   Accent colors
-   Status (Planning / In Progress / Released)
-   Completion percentage
-   Featured artwork
-   Related collections
-   Track references

Collections should reference tracks rather than own them exclusively.

A single track may belong to multiple collections.

------------------------------------------------------------------------

# Track

Tracks are the core musical content.

Suggested properties:

-   Stable ID
-   Title
-   Subtitle
-   Description
-   Duration
-   Collection references
-   Tags
-   Composer notes
-   Credits
-   Release date
-   Featured flag
-   Download enabled
-   Play order

Tracks should reference one or more audio assets instead of a single
file.

------------------------------------------------------------------------

# Audio Assets

A track may have multiple playable formats.

Examples:

-   FLAC
-   MP3
-   Opus
-   Future formats

The architecture should never assume only one audio file exists.

------------------------------------------------------------------------

# Artwork

Artwork is a first-class object.

Suggested properties:

-   Stable ID
-   Title
-   Role
-   Image asset
-   Alt text
-   Prompt
-   Version
-   Creation date
-   Artist or creator
-   Related collections
-   Related tracks

Possible roles:

-   Hero
-   Card
-   Portrait
-   Background
-   Thumbnail

Artwork should be replaceable without changing the rest of the website.

------------------------------------------------------------------------

# Assets

Assets are reusable media resources.

Examples:

-   Images
-   Audio
-   Logos
-   Icons
-   PDFs
-   Sheet music
-   Video

The architecture should anticipate new asset types.

------------------------------------------------------------------------

# Composer Notes

Composer notes document the creative process.

Possible fields:

-   Story context
-   Instrumentation
-   Purpose
-   Inspiration
-   Development notes
-   Trivia

These are optional but should be supported.

------------------------------------------------------------------------

# Playlists

Playlists are curated experiences rather than user-generated lists.

Examples:

-   Narrative Order
-   World Order
-   Peaceful
-   Combat
-   Character Themes
-   Tavern Evening

Playlists reference tracks.

------------------------------------------------------------------------

# Releases

A release represents a published milestone.

Example:

Version 0.4

Added: - Forest Dungeon - Kel Theme - Two Tavern Songs

Release information should remain available as project history.

------------------------------------------------------------------------

# Relationships

Objects should reference one another instead of duplicating information.

Examples:

Collection → references Tracks

Track → references Collections

Artwork → references Collections and Tracks

Playlist → references Tracks

Releases → reference Collections and Tracks

This model allows a single piece of content to appear naturally in
multiple places.

------------------------------------------------------------------------

# Stable IDs

Major objects should have permanent identifiers.

Examples:

COL-FOR-001 TRK-SOF-03-01-05-01 ART-FOR-HERO-001

Names may change.

IDs should not.

------------------------------------------------------------------------

# Scalability

The model should assume:

-   Hundreds of tracks
-   Multiple audio formats
-   Growing artwork libraries
-   New collections
-   New asset types
-   Future features that have not yet been designed

The architecture should support expansion rather than requiring
redesign.

------------------------------------------------------------------------

# Guiding Principle

Design the data first.

The user interface should emerge naturally from the underlying model,
ensuring consistency, maintainability, and long-term growth.
