# Component Library

Version: 0.1

> This document defines the reusable user interface components that make
> up the Splinters of Faith soundtrack website.
>
> Components should be designed once and reused consistently throughout
> the site.

------------------------------------------------------------------------

# Philosophy

Components are building blocks.

Every page should be assembled from reusable components rather than
custom layouts.

Consistency is more important than uniqueness.

------------------------------------------------------------------------

# Hero Banner

Purpose: Introduce a collection or major page.

Contains:

-   Hero artwork
-   Collection title
-   Short description
-   Primary action (Play All)
-   Optional secondary action (Download / Explore)

Requirements:

-   Large cinematic presentation
-   Responsive
-   Supports parallax background
-   Supports collection-specific color palette

------------------------------------------------------------------------

# Collection Card

Purpose: Represent a major soundtrack collection.

Examples:

-   Forest
-   Mountains
-   Characters
-   Tavern Music

Contains:

-   Card artwork
-   Collection title
-   Track count
-   Short tagline

Interaction:

-   Hover animation
-   Click to enter collection

------------------------------------------------------------------------

# Track Card

Purpose: Represent a single composition.

Contains:

-   Track title
-   Duration
-   Play button
-   Download button
-   Optional artwork
-   Optional composer note indicator

Track cards should remain visually lightweight.

------------------------------------------------------------------------

# Persistent Audio Player

Purpose: Provide uninterrupted playback.

Contains:

-   Artwork thumbnail
-   Track title
-   Collection
-   Play / Pause
-   Previous / Next
-   Progress bar
-   Queue access
-   Playback mode

Requirements:

-   Never resets during navigation.
-   Responsive.
-   Always accessible.

------------------------------------------------------------------------

# Collection Header

Displayed at the beginning of every collection.

Contains:

-   Hero artwork
-   Collection title
-   Description
-   Play All
-   Statistics
-   Optional composer note

------------------------------------------------------------------------

# Download Panel

Purpose: Offer available download formats.

Displays:

-   Available formats
-   File size
-   License
-   Download action

Should be simple and unobtrusive.

------------------------------------------------------------------------

# Composer Notes Panel

Optional expandable panel.

May contain:

-   Story context
-   Instrumentation
-   Inspiration
-   Development notes
-   Trivia

The panel should enhance appreciation without distracting from
listening.

------------------------------------------------------------------------

# Search Result Card

Displays search results consistently.

May represent:

-   Track
-   Collection
-   Playlist
-   Character (future)

Each result should clearly communicate what type of object it
represents.

------------------------------------------------------------------------

# Release Card

Represents a published soundtrack update.

Contains:

-   Version
-   Release date
-   Summary
-   New content
-   Artwork (optional)

------------------------------------------------------------------------

# Navigation

Navigation should remain lightweight.

Primary destinations:

-   Home
-   Collections
-   Search
-   Downloads
-   Releases
-   About

Collections themselves should be discovered primarily through artwork
rather than deep menus.

------------------------------------------------------------------------

# Empty State

Every component should define an elegant empty state.

Examples:

-   "This collection is still being composed."
-   "Artwork coming soon."
-   "No tracks found."

Empty states should reinforce that the soundtrack is growing rather than
feeling unfinished.

------------------------------------------------------------------------

# Responsive Design

Every component should support:

-   Desktop
-   Tablet
-   Mobile

Components should adapt gracefully without sacrificing atmosphere.

------------------------------------------------------------------------

# Accessibility

Every component should support:

-   Keyboard navigation
-   Screen readers
-   Alt text for artwork
-   High color contrast where appropriate

Accessibility should be considered part of the design rather than an
afterthought.

------------------------------------------------------------------------

# Future Components

Potential future additions include:

-   Interactive world map
-   Character relationship panel
-   Timeline viewer
-   Sheet music viewer
-   Playlist builder
-   Recently added carousel

The library should evolve without replacing existing components.

------------------------------------------------------------------------

# Guiding Principle

When a new feature is proposed, first ask:

**Can it be built by extending an existing component?**

If not, create a new reusable component rather than a one-off solution.
