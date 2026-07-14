# Site Architecture

Version: 0.1

> This document describes how the Splinters of Faith soundtrack website
> is organized from the visitor's perspective. It intentionally focuses
> on user experience and information architecture rather than
> implementation details.

------------------------------------------------------------------------

# Architectural Philosophy

The website is an interactive soundtrack companion.

It should feel like exploring a fantasy world through music rather than
navigating folders or albums.

Navigation should always reinforce discovery.

------------------------------------------------------------------------

# High-Level Structure

    Home
    │
    ├── Main Suite
    ├── Collections
    │    ├── Forest
    │    ├── Mountains
    │    ├── Swamp
    │    ├── Characters
    │    ├── Tavern Music
    │    └── Stingers
    │
    ├── Search
    ├── Downloads
    ├── Releases
    └── About

The persistent audio player exists outside this hierarchy and remains
active at all times.

------------------------------------------------------------------------

# Home

The home page is the front door to the soundtrack.

Primary goals:

-   Introduce the soundtrack
-   Showcase hero artwork
-   Offer immediate playback
-   Encourage exploration

Primary actions:

-   ▶ Play Entire Soundtrack
-   ▶ Continue Listening (future)
-   Browse Collections
-   View Latest Release

The homepage should feature large artwork cards representing major
collections.

------------------------------------------------------------------------

# Collections

Collections are the primary navigation units.

Each collection should contain:

-   Hero artwork
-   Title
-   Description
-   Play All
-   Track listing
-   Related collections (future)
-   Composer notes (optional)

Collections should feel like destinations, not folders.

------------------------------------------------------------------------

# Track Experience

Selecting a track should never interrupt the visitor's sense of place.

Track pages or panels may contain:

-   Artwork
-   Audio controls
-   Description
-   Composer notes
-   Credits
-   Download options
-   Related tracks

The audio player remains persistent.

------------------------------------------------------------------------

# Audio Player

The audio player is global.

Requirements:

-   Never stop playback when changing sections.
-   Maintain queue.
-   Support:
    -   Play Entire Soundtrack
    -   Narrative Order
    -   World Order
    -   Shuffle
-   Display current artwork and track information.

The player should be elegant and unobtrusive.

------------------------------------------------------------------------

# Search

Search should eventually span the entire world model.

Visitors should be able to search by:

-   Track
-   Collection
-   Character
-   Tags
-   Mood
-   Instrumentation (future)

Search results should feel curated rather than technical.

------------------------------------------------------------------------

# Downloads

Downloads should be simple.

Each track may provide one or more downloadable formats.

Downloads should clearly display:

-   Format
-   File size
-   License
-   Version (future)

------------------------------------------------------------------------

# Releases

The website should maintain a release history.

Each release summarizes:

-   Newly added tracks
-   New artwork
-   New collections
-   Improvements

This allows visitors to follow the growth of the soundtrack.

------------------------------------------------------------------------

# Navigation Principles

Navigation should answer one question:

"Where would you like to explore next?"

Avoid deep nested menus whenever possible.

Prefer visual navigation through artwork.

Collections should be reachable within one or two interactions.

------------------------------------------------------------------------

# Future Expansion

The architecture should anticipate:

-   Hundreds of tracks
-   Many collections
-   Additional artwork roles
-   Character pages
-   Lore pages
-   Interactive maps
-   Sheet music
-   Additional media types

Future additions should integrate naturally without restructuring the
site.

------------------------------------------------------------------------

# Success Criteria

A first-time visitor should be able to:

1.  Understand the purpose of the website within seconds.
2.  Start listening immediately.
3.  Explore collections intuitively.
4.  Continue listening while navigating.
5.  Download music with minimal effort.
6.  Feel like they are exploring a fantasy world rather than browsing a
    file archive.

------------------------------------------------------------------------

# Guiding Principle

Every architectural decision should support immersion, simplicity,
scalability, and long-term maintainability.

The world model defines the content.

The design system defines the presentation.

The site architecture defines the journey.
