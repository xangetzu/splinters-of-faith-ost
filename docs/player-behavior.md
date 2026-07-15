# Player Behavior

Version: 0.1

Status: Approved

The site uses one global `HTMLAudioElement`. Track cards and page controls send
commands to that player; they never create independent audio elements.

## Queue Model

The player state contains the active track, ordered queue, queue origin, current
index, playback mode, repeat mode, volume, mute state, and recoverable position.

Queue origin identifies the context that created the queue, such as a collection,
playlist, search result, or single track. This context is shown to the visitor and
used when rebuilding a queue after metadata changes.

### Replacement and Append

- `Play All` replaces the queue with the chosen collection or playlist and starts
  its first playable track after a user gesture.
- Choosing a track in a collection replaces the queue with that collection's
  effective order and starts at the chosen track.
- Choosing a track in a playlist uses that playlist and starts at the chosen
  track.
- Choosing a track without a meaningful context creates a one-track queue.
- Search results preserve their displayed track order as the queue context.
- The initial release does not expose an append action. The internal player API
  may support `append` and `playNext` for future queue UI, without changing the
  default replacement rules.

Unreleased, archived, missing, and unplayable tracks are excluded from generated
queues and reported by validation where appropriate.

## Previous and Next

`Next` selects the next track according to the current shuffle and repeat rules.
At the end of a non-repeating queue, playback stops and the active track remains
selected.

If more than five seconds have elapsed, `Previous` restarts the active track.
Otherwise it selects the previous queue entry. At the beginning of a
non-repeating queue, it restarts the first track.

Tracks that fail all sources are skipped when advancing, with an accessible error
announcement. The player stops after every remaining candidate has failed rather
than looping indefinitely.

## Shuffle

Shuffle creates a randomized traversal of the current queue while keeping the
currently playing track active. The next track must not be the current track when
another playable track exists.

The randomized order remains stable until the queue changes, shuffle is toggled
off and on, or a new shuffle cycle begins. History is retained so `Previous`
follows what the visitor actually heard rather than generating another random
choice.

## Repeat Modes

The modes are:

- `off`: stop at the end of the queue
- `queue`: continue from the first track after the last
- `track`: replay the active track

Repeat-track applies to natural track completion. A visitor pressing `Next`
still advances.

## Source Selection and Fallback

Only assets permitting streaming are playback candidates. The player evaluates
sources in metadata order and uses browser capability checks to avoid known
unsupported types. A capability result is a preference, not proof that a remote
file will load.

On a source error, the player attempts the next source for the same track while
preserving intent to play. If every source fails, it reports the failure and
advances according to the queue rules.

Absolute external media URLs are supported. The player must not assume that audio
shares the site's origin or repository path. Waveform analysis and other
cross-origin processing are out of scope unless the future media host explicitly
supports the necessary CORS policy.

## Loading and Error States

Player states are `idle`, `loading`, `ready`, `playing`, `paused`, and `error`.

- Loading controls remain operable and expose a busy state.
- A stalled source may offer Retry and Skip; it must not silently spin forever.
- Recoverable source errors are announced once, not for every internal retry.
- An exhausted track shows a concise message and preserves enough context to
  retry it.
- Network recovery must not trigger playback without an existing user-authorized
  playback intent.

## Persistence

### Internal Navigation

The root player and its audio element persist across Astro client-side route
changes. Playback, queue, position, volume, and controls must not reset. Route
changes must not create duplicate event listeners or player instances.

### Session Storage

After meaningful state changes, save a versioned record containing:

- Active track ID
- Queue track IDs and queue origin
- Queue index and stable shuffle order
- Playback position
- Volume and mute state
- Shuffle and repeat modes
- Whether playback was active
- Schema version and saved timestamp

Writes should be throttled during time updates. Do not store media blobs or
signed credentials. Invalid, expired, or incompatible records are discarded
safely.

### Reload Recovery

On reload, restore the queue and seek position after metadata and the selected
source are ready. Restore volume and modes immediately. Do not automatically
resume audible playback; if it was previously active, show a clear Resume action
because browser autoplay policies and visitor intent take precedence.

Missing or newly unpublished tracks are removed from the recovered queue. If the
active track is unavailable, select the next valid entry without beginning
playback.

## Preload Policy

Before a visitor chooses a track, audio elements use `preload="none"`. After a
track is selected, use `metadata` until playback is requested, then allow the
browser to buffer normally.

Do not preload FLAC downloads or the next full track. Artwork and metadata may be
prefetched independently when this remains within the performance budget. This
policy protects visitors from downloading large soundtrack files unintentionally.

## Keyboard Controls

All visible controls use native buttons or equivalent accessible semantics and
have visible focus indicators.

Required behavior:

- `Space` or `Enter` activates the focused control.
- Arrow keys operate sliders only while those sliders are focused.
- Progress and volume controls expose names, values, and value text.
- Queue items and track cards are reachable in a logical tab order.
- No single-key global shortcut fires while focus is in an input, textarea,
  select, editable region, or another interactive control.

Optional global shortcuts may be added only when documented in the UI and when
they can be disabled. Playback must remain fully operable without them.

## Media Session

Where supported, publish track title, composer/artist, collection, and suitable
artwork through the Media Session API. Register play, pause, previous-track,
next-track, and seek handlers when supported.

Media Session is progressive enhancement. Its absence or failure must not affect
the visible player.

## Motion

Player motion should communicate state through brief, subtle transitions. When
`prefers-reduced-motion: reduce` is active, remove nonessential movement,
parallax, animated seeking effects, and large queue-panel transitions. Playback
and state changes must never depend on animation completing.

## Accessibility Announcements

Use a polite live region for meaningful asynchronous changes, including:

- Now playing
- Paused when initiated outside the focused control
- Queue replaced and its track count
- Source failure and fallback outcome
- Track unavailable or skipped
- End of queue

Do not announce routine progress updates or duplicate information already spoken
from the focused control. Errors requiring immediate visitor action may use an
assertive alert. Track artwork follows its content-defined alt-text decision;
decorative thumbnails use empty alt text.

After client-side navigation, the page route/title must be announced and focus
managed according to Astro's current accessibility guidance without moving focus
away from a player control the visitor is actively using.

## Acceptance Criteria

The initial player is acceptable when automated and manual checks confirm:

- Playback survives an internal route change without an audible restart.
- Reload recovery restores state but does not violate autoplay restrictions.
- Queue, shuffle, repeat, Previous, and Next follow this specification.
- A failed preferred source falls back or produces a usable error.
- All controls work with keyboard-only navigation and have accessible names.
- Status announcements are useful and not repetitive.
- Reduced-motion preferences are honored.
