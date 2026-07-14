# AI Project Instructions

Welcome to the Splinters of Faith Original Soundtrack website.

Before making significant code changes, read the documentation in the
`docs/` directory.

The documentation describes the project's philosophy, architecture,
design language, and long-term goals.

## Documentation Priority

When making decisions, follow the documents in this order:

1.  project-overview.md
2.  site-design-vision.md
3.  design-system.md
4.  world-model.md
5.  site-architecture.md
6.  component-library.md

If implementation conflicts with the documentation, the documentation
takes precedence.

------------------------------------------------------------------------

# Development Philosophy

This project values:

-   Maintainability
-   Readability
-   Scalability
-   Accessibility
-   Reusable components

Prefer long-term solutions over short-term fixes.

Avoid unnecessary dependencies unless there is a clear architectural
benefit.

------------------------------------------------------------------------

# Design Philosophy

The website is not a generic music player.

It is an interactive soundtrack companion for a fantasy role-playing
game.

Visitors should feel like they are exploring a world through its music.

Every design decision should reinforce immersion, atmosphere, and
discovery.

------------------------------------------------------------------------

# Content Philosophy

Everything is data.

The website is one presentation of the underlying world model.

Favor structured metadata and reusable content.

------------------------------------------------------------------------

# Components

Build reusable components.

Avoid one-off layouts.

------------------------------------------------------------------------

# Artwork

Support multiple artwork roles such as Hero, Card, Background, Portrait,
and Thumbnail.

Assume the artwork library will continue growing over time.

------------------------------------------------------------------------

# Audio

The audio player is persistent.

Navigation should never interrupt playback.

Tracks may have multiple audio formats.

------------------------------------------------------------------------

# User Experience

Favor exploration over navigation.

Collections should feel like destinations rather than folders.

------------------------------------------------------------------------

# Coding Standards

-   Prefer semantic HTML.
-   Keep CSS modular.
-   Keep JavaScript readable.
-   Avoid duplication.
-   Build for future expansion.

------------------------------------------------------------------------

# When Unsure

Review the documentation and choose the solution that best supports
immersion, scalability, and maintainability.
