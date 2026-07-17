# Codex Project Instructions

Welcome to the Splinters of Faith Original Soundtrack website.

`AGENTS.md` is the primary Codex entry point. Before making significant code,
architecture, or design changes, read it and the project documentation it
identifies in `docs/`.

## Documentation Authority

The documentation is the project's design bible. Approved architecture
decisions and specifications take precedence over earlier exploratory guidance.
If implementation conflicts with the documentation, the documentation wins.

Do not duplicate requirements between files unnecessarily. Keep schemas,
validation, implementation, and documentation synchronized.

## Project Identity

This is an interactive soundtrack companion for a fantasy role-playing game,
not a generic music player or file repository. Visitors should feel as though
they are exploring a world through its music.

Every design decision should support immersion, atmosphere, discovery,
accessibility, and an artwork-first presentation.

## Development Principles

- Prioritize maintainability and readability over cleverness.
- Use the approved Astro and TypeScript architecture.
- Keep the site static-first and compatible with GitHub Pages.
- Prefer semantic, accessible HTML and vanilla CSS.
- Keep client-side TypeScript modular and limited to behavior that requires it.
- Separate structured content, assets, presentation, and player behavior.
- Avoid hardcoded soundtrack entries and duplicated sources of truth.
- Build reusable components instead of one-off layouts.
- Add dependencies only when they provide a clear architectural benefit.
- Preserve backward compatibility whenever reasonable.
- Comment intent when it is not evident from the code itself.

## Organization

- Add a directory only when its first real file is needed.
- Use stable, descriptive filenames; keep versions in documents and Git history.
- Keep modules small and cohesive.
- Follow the approved content schema and stable-ID conventions.
- Record material architectural decisions instead of allowing conventions to
  emerge accidentally.

## Content and Assets

Everything is data; the website is one presentation of the world model.

The Session Chronicle is approved future scope, but its recording, ingestion,
and public-site implementation are intentionally deferred. Continue the current
soundtrack, artwork, and content work until the project owner explicitly resumes
Chronicle development.

Assume the soundtrack and artwork libraries will grow for many years. Tracks may
have multiple audio formats, artwork may serve multiple roles, and production
media may live outside the repository. Never couple components to a particular
media host or repository path.

## Audio and Navigation

The audio player is global and persistent. Internal navigation must not
interrupt playback. Track controls communicate with one audio engine and must
follow `docs/player-behavior.md`.

## User Experience

Favor exploration over utility-style navigation. Collections should feel like
destinations rather than folders. Keep the interface elegant, fast, responsive,
and accessible, with artwork and music as the focus.

When unsure, review the design bible and choose the solution that best supports
immersion, scalability, accessibility, and maintainability.
