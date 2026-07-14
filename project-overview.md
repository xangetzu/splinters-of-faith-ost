# Splinters of Faith OST Website

Version: 0.1

## Project Purpose

This repository contains the source code for the official website of the
**Splinters of Faith Original Soundtrack (OST)**.

The website is intended to be a polished, easy-to-use destination where
visitors can:

-   Browse the soundtrack by category.
-   Stream music directly from the website.
-   Download available tracks.
-   View artwork associated with each composition.
-   Read descriptions or notes about each track.
-   Discover new music as additional soundtrack pieces are released.

The website should feel like a dedicated soundtrack archive rather than
a generic file repository.

------------------------------------------------------------------------

# Primary Goals

The project should prioritize:

1.  Simple navigation
2.  Beautiful presentation
3.  Fast loading
4.  Responsive design for desktop and mobile
5.  Easy maintenance
6.  Easy expansion as new music is added

Adding a new track should require little more than:

-   Placing the audio file into the appropriate folder
-   Adding artwork
-   Adding a metadata entry

Whenever practical, the site should generate listings automatically from
metadata instead of requiring manual HTML edits.

------------------------------------------------------------------------

# Repository Contents

The repository will eventually contain:

-   Website source code
-   Images and artwork
-   Audio files
-   Metadata describing tracks
-   Documentation

Suggested structure:

    /
        css/
        js/
        images/
        audio/
        data/
        docs/

------------------------------------------------------------------------

# Audio

Preferred audio format:

-   FLAC (preferred whenever practical)

Alternative streaming formats (MP3, Opus, etc.) may be used if necessary
for browser compatibility or bandwidth efficiency.

The site should be designed so that changing audio formats in the future
requires minimal code changes.

------------------------------------------------------------------------

# Artwork

Each soundtrack piece may have associated artwork.

Artwork should be considered an important part of the presentation
rather than an optional extra.

Where appropriate, artwork should appear alongside:

-   Title
-   Audio player
-   Description
-   Download links

------------------------------------------------------------------------

# Metadata

The long-term goal is to keep soundtrack information in structured data
rather than hard-coded into HTML.

Potential metadata fields include:

-   Title
-   Category
-   Duration
-   Artwork
-   Audio file
-   Description
-   Release date
-   Download availability

------------------------------------------------------------------------

# Design Philosophy

The site should not resemble a generic music streaming service.

Instead, it should feel like an official soundtrack companion for a
fantasy game or tabletop RPG.

The soundtrack is the focus of the experience.

------------------------------------------------------------------------

# Technical Goals

Favor:

-   HTML
-   CSS
-   JavaScript

Avoid unnecessary frameworks unless there is a clear long-term benefit.

Write clean, readable, maintainable code.

------------------------------------------------------------------------

# Possible Future Features

-   Search
-   Category filtering
-   Playlist creation
-   Continuous music player
-   Album pages
-   Character pages
-   Download statistics
-   Theme switching
-   Composer notes
-   Release history

These are future ideas and should not dictate the initial
implementation.

------------------------------------------------------------------------

# Success Criteria

The project is successful if:

-   Visitors can easily find music.
-   Streaming is reliable.
-   Downloads are simple.
-   The site is visually polished.
-   Adding new soundtrack pieces remains straightforward as the
    collection grows.
