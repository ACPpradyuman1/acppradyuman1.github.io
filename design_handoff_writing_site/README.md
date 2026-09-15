# Handoff: Personal Writing Site

## Overview

A two-page personal writing site for publishing investment theses, company analysis, and shorter notes. Page one is a chronological index of pieces grouped by year; page two is the single-piece reading view. The visual direction is "light paper": warm off-white ground, serif body text at a narrow measure, monospace for all chrome and metadata, and a single muted-green accent. Decorative pixel-art bands close the pages.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. Each `.dc.html` file is a self-contained page that opens in a browser; `support.js` is the small runtime that renders them and has no place in a production build.

The task is to **recreate these designs in the target codebase's existing environment** (Next.js, Astro, Eleventy, SvelteKit, etc.) using its established patterns. If no codebase exists yet, this design suits a static site generator with Markdown content — the index page is a collection query grouped by year, and the post page is a Markdown layout. Nothing here needs a client-side framework; it can ship as fully static HTML with no JavaScript at all.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and hover states are final and exact. Recreate pixel-perfectly, substituting the codebase's own components where equivalents exist. Two caveats:

- All copy is **placeholder**. The five index entries and the entire post body are structural stand-ins that demonstrate every supported element. Replace with real content; do not ship the placeholder text.
- `Writing.dc.html` was hand-edited by the site owner after the last design pass, and several elements were deliberately removed (see **Known Gaps**). Where the two pages disagree, `Post.dc.html` shows the fuller intent.

## Screens / Views

### 1. Writing index (`Writing.dc.html`)

**Purpose:** Land, scan every published piece in reverse-chronological order, click into one.

**Layout:** Single centered column, `max-width: 760px`, `padding: 0 28px`, on a `#faf8f4` page ground with `min-height: 100vh`. The footer artwork band sits outside this column at `max-width: 1100px`. No sidebar, no hero image.

**Components, top to bottom:**

**Header** — `display: grid; grid-template-columns: 1fr auto 1fr; align-items: baseline; gap: 24px; padding: 30px 0`. Three groups: wordmark left, social links centered, nav right.
- Wordmark: text `prateek`, JetBrains Mono 12.5px/400, `letter-spacing: 0.02em`, color `#1a1917`. Currently `href="#"` — should link to home.
- Social group: `display: flex; gap: 14px; justify-content: center`, JetBrains Mono 11.5px, color `#66625a`, hover `#1a1917`. Items: `linkedin`, `email`, `x` (lowercase, no icons).
- Nav: `display: flex; gap: 20px; justify-content: flex-end`, JetBrains Mono 12.5px. Active item `writing` is `#1a1917` with `border-bottom: 1px solid #4c6b5a; padding-bottom: 2px`. Inactive `about` is `#66625a`, hover `#1a1917`.

**Page title block** — `display: flex; align-items: flex-start; justify-content: space-between; gap: 32px; padding: 56px 0 44px; border-top: 1px solid #e6e1d8`.
- `h1`: text `writing`, Newsreader 44px/300, `letter-spacing: -0.015em`, `line-height: 1.05`, color `#1a1917`, `margin: 0`.
- Standfirst: Newsreader 19px/400, `line-height: 1.55`, color `#55524a`, `margin-top: 18px`, `text-wrap: pretty`. Copy: "investment theses, company analysis, and whatever else is worth thinking through in public. long where it needs to be, short where it doesn't." Constrain to `max-width: 46ch` — the reference file carries a stray fixed `width: 789px; height: 98px` from a drag edit; **do not reproduce that**, it overflows the column.

**Filter chips** — `display: flex; flex-wrap: wrap; gap: 8px; padding-bottom: 34px`, JetBrains Mono 11.5px. Active chip: `padding: 5px 11px`, `background: #1a1917`, `color: #faf8f4`, `border: 1px solid #1a1917`. Inactive chip: transparent ground, `border: 1px solid #e6e1d8`, `color: #55524a`, hover `border-color: #1a1917; color: #1a1917`. Intended set: `all`, `theses`, `markets`, `teardowns`, `notes` — only `all` survives in the reference file.

**Year sections** — one per year, `border-top: 1px solid #e6e1d8; padding: 26px 0 8px`. Year label: JetBrains Mono 11.5px, `letter-spacing: 0.14em`, color `#6f6a5d`, `padding-bottom: 14px`.

**Post row** (the core component) — an `<a>` wrapping the whole row, `display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 20px; padding: 18px 0; border-bottom: 1px solid #f0ece3`, hover `background: #f5f2ea`. Two cells:
- Left rail: JetBrains Mono 11.5px, `line-height: 1.7`, `padding-top: 4px`. Date on line one in `#66625a` (format `Aug 2026`); kind on line two in the accent `#4c6b5a` (`thesis`, `analysis`, `teardown`, `note`).
- Right: title in Newsreader 22px/400, `line-height: 1.3`, `letter-spacing: -0.01em`, color `#1a1917`. Optional dek below at `margin-top: 7px`, Newsreader 16.5px, `line-height: 1.55`, color `#6a6659`, `text-wrap: pretty`. A meta line (read time · category, JetBrains Mono 11px, `#6f6a5d`) exists in the data model but is not currently rendered.

On narrow viewports collapse the 112px rail — stack date/kind as one horizontal mono line above the title.

**Footer artwork band** — `max-width: 1100px; margin: 64px auto 0; padding: 0 28px`, inner box `border: 1px solid #e6e1d8; background: #f7f4ed; overflow: hidden; line-height: 0`. Holds the pixel skyline SVG (see **Assets**). Height 150px.

### 2. Single piece (`Post.dc.html`)

**Purpose:** Read one piece end to end, then move to the next.

**Layout:** Same 760px column and header as the index. Body copy is constrained tighter, to `max-width: 62ch`.

**Components:**

**Header** — identical to the index, except wordmark and active nav item both link back to the index.

**Article masthead** — `border-top: 1px solid #e6e1d8; padding-top: 56px`.
- Meta row: `display: flex; flex-wrap: wrap; gap: 14px`, JetBrains Mono 11.5px. Kind in accent `#4c6b5a`, then date and read time in `#66625a`.
- `h1`: Newsreader 42px/300, `letter-spacing: -0.015em`, `line-height: 1.1`, `max-width: 26ch`, `margin-top: 16px`.
- Dek: Newsreader 20px/400, `line-height: 1.5`, color `#55524a`, `max-width: 52ch`, `margin-top: 18px`, `text-wrap: pretty`.
- Rule: `height: 1px; background: #e6e1d8; margin: 40px 0 44px`.

**Body prose** — `max-width: 62ch`, Newsreader 19px, `line-height: 1.68`, color `#241f1a`. Paragraph spacing `margin-top: 22px`.
- Opening lede run-in: JetBrains Mono 15px, `letter-spacing: 0.06em`, `text-transform: uppercase`, color `#4c6b5a`.
- `h2` section heading: JetBrains Mono 15px/500, `letter-spacing: 0.14em`, `text-transform: uppercase`, color `#6f6a5d`, `margin: 44px 0 0`, body follows at `margin-top: 14px`. One heading level only; two is the practical limit.
- Blockquote / pull quote: `margin: 32px 0`, `padding: 4px 0 4px 22px`, `border-left: 2px solid #4c6b5a`, Newsreader 21px, `line-height: 1.5`, color `#3a352e`.
- Emphasis: italic and 500 weight only — never color, so the page keeps its single accent.
- Inline figures and tickers: JetBrains Mono 16px on `background: #f2eee6`, `padding: 1px 5px`.

**Numbers block** — `border: 1px solid #e6e1d8; background: #fff; margin: 34px 0`. Caption bar: `padding: 14px 18px`, `border-bottom: 1px solid #e6e1d8`, JetBrains Mono 11px, `letter-spacing: 0.14em`, uppercase, `#6f6a5d`. Body: `display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))`, each cell `padding: 18px` with `border-right: 1px solid #f0ece3` except the last. Value JetBrains Mono 24px, label JetBrains Mono 11px `#66625a` at `margin-top: 4px`.

**Numbered list** (used for the risk/counter-argument section) — `display: flex; flex-direction: column; gap: 12px`. Each item `display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 6px`. Marker: JetBrains Mono 14px, accent `#4c6b5a`, `padding-top: 4px`, zero-padded (`01`, `02`, `03`).

**Tags** — `margin-top: 44px`, `padding: 22px 0`, `border-top: 1px solid #e6e1d8`, same chip styling as the index's inactive chips.

**Prev / next** — `display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px`. Each card: `border: 1px solid #e6e1d8; background: #fff; padding: 20px`, hover `border-color: #1a1917`. Label JetBrains Mono 11px, `letter-spacing: 0.14em`, uppercase, `#6f6a5d` (`← previous` / `next →`); title Newsreader 19px, `line-height: 1.35`, `margin-top: 10px`. The next card is `text-align: right`.

**Footer artwork band** — same treatment as the index but 96px tall with the tree motif.

**Footer** — `max-width: 760px; padding: 28px 28px 72px; display: flex; flex-wrap: wrap; gap: 18px; justify-content: space-between`, JetBrains Mono 11.5px, `#66625a`. Left: `← all writing` linking to the index. Right: a short standing note.

## Interactions & Behavior

Deliberately minimal — the site owner declined hotkey nav, command palette, now-playing, and visitor counters.

- **Navigation:** ordinary links. Post rows are fully clickable (`<a>` wraps the grid). Prev/next cards likewise.
- **Hover states**, all instant with no transition declared. Add `transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease` if the codebase's convention is to animate; the design does not require it.
  - Post row: background `transparent → #f5f2ea`
  - Prev/next card: border `#e6e1d8 → #1a1917`
  - Nav and social links: color `#66625a → #1a1917`
  - Filter chip: border and text `#e6e1d8`/`#55524a` → `#1a1917`
  - Any link, global default: color `#1a1917`, hover `#4c6b5a`, `text-decoration: none`
- **Text selection:** `::selection { background: #dfe7e0; }`
- **Filter chips:** not wired in the prototype. Intended behavior is client-side filtering of the index by category with the active chip inverted; a server-rendered `/writing/tag/<slug>` route is equally valid and cheaper.
- **Responsive:** the 760px column is the only fixed measure and should become fluid below ~820px. Collapse the post row's 112px date rail (stack date/kind above the title), let the numbers block's `auto-fit` grid reflow, and let prev/next stack. No fixed heights anywhere — strip the stray `width: 789px; height: 98px` noted above.
- **No loading, error, or form states** — there are no forms and no data fetching.

## State Management

None required. Both pages are fully static.

If filter chips are implemented client-side, the only state is `activeFilter: string` (default `"all"`), derived from the URL query or hash so a filtered view is linkable. Content — the list of pieces and each piece's body — should come from the build step (Markdown frontmatter), not runtime fetching.

Content model per piece:

| Field | Type | Notes |
|---|---|---|
| `title` | string | |
| `dek` | string, optional | one or two sentences; short notes omit it |
| `date` | date | displayed as `MMM YYYY`, grouped by year |
| `kind` | enum | `thesis` \| `analysis` \| `teardown` \| `note` |
| `readTime` | string | e.g. `12 min` |
| `tags` | string[] | drives the filter chips |
| `body` | Markdown | |

## Design Tokens

**Colors**

| Token | Hex | Use |
|---|---|---|
| paper | `#faf8f4` | page ground |
| card | `#ffffff` | numbers block, prev/next cards |
| band | `#f7f4ed` | artwork band ground, pixel-art sky |
| row hover | `#f5f2ea` | post row hover |
| inline tint | `#f2eee6` | inline ticker/figure background |
| ink | `#1a1917` | primary text, active chip ground |
| ink prose | `#241f1a` | body copy on the post page |
| ink quote | `#3a352e` | pull quote |
| muted strong | `#55524a` | standfirst, dek, inactive chip text |
| muted | `#66625a` | metadata, nav, footer |
| muted dek | `#6a6659` | index row dek |
| muted label | `#6f6a5d` | year and section labels |
| rule | `#e6e1d8` | section rules, card borders |
| rule light | `#f0ece3` | row dividers, cell dividers |
| accent | `#4c6b5a` | kind labels, list markers, quote bar, link hover |
| accent pale | `#dfe7e0` | selection highlight, pixel-art hills |
| pixel lamp | `#e8c97a` | lit windows, moon |
| pixel star | `#cfc8b8` | stars |

Muted greys were darkened from an earlier pass specifically to clear 4.5:1 against paper at small mono sizes — do not lighten them.

**Typography**

Two families, both on Google Fonts.
- **Newsreader** — weights 300, 400, 500, plus 400 italic. All serif text: titles, body, deks, quotes. Optical sizing axis `6..72` is enabled in the reference.
- **JetBrains Mono** — weights 400, 500. All chrome: nav, dates, labels, chips, section headings, figures.

Scale: 44 / 42 (page and article `h1`, weight 300) · 22 (index row title) · 21 (pull quote) · 20 / 19 (dek, body) · 16.5 (index dek) · 15 (mono section heading, lede run-in) · 12.5 (nav) · 11.5 (metadata, chips) · 11 (small mono labels). Line heights: 1.05–1.1 display, 1.5–1.68 prose, 1.7 mono rail. Letter spacing: `-0.015em` on display, `-0.01em` on row titles, `0.14em` on uppercase mono labels.

Body copy is lowercase-by-authoring in the chrome (nav, chips, wordmark) — that is an editorial choice in the content, not a CSS `text-transform`. Uppercase is applied via CSS only on mono section labels.

**Spacing** — 4px base, used loosely: 4 · 6 · 7 · 8 · 10 · 14 · 18 · 20 · 22 · 26 · 28 · 32 · 34 · 40 · 44 · 56 · 64 · 72.

**Measures** — 760px column · 62ch body · 52ch dek · 46ch standfirst · 26ch article title · 1100px artwork band · 112px date rail.

**Border radius** — none. Every corner is square, everywhere. This is load-bearing to the aesthetic.

**Shadows** — none. Depth comes from 1px rules and the `#fff` card ground against `#faf8f4` paper.

## Assets

No bitmap images, no icon set, no logo files. Everything is type, rules, or inline SVG.

**Pixel-art bands** — two hand-drawn inline SVGs, authored as a grid of `<rect>` cells:
- Index: a night skyline (buildings in ink and accent green, lit windows, crescent moon, stars, layered pale hills), `viewBox="0 0 88 14"`, rendered 150px tall.
- Post: a treeline in the same grid and palette, `viewBox="0 0 88 14"`, rendered 96px tall.

Both use `shape-rendering="crispEdges"` and `preserveAspectRatio="xMidYMax slice"`. **The `preserveAspectRatio` value matters:** `slice` with bottom anchoring keeps cells perfectly square at any viewport width, cropping a little sky at the sides rather than stretching. An earlier version used `preserveAspectRatio="none"`, which squashed cells to a 1.64:1 rectangle and made the motifs unreadable. Keep square pixels.

Note: the index page's SVG was removed during the owner's edit pass and its container is currently an empty 1px box — recover the markup from this bundle's git history or the Post page's equivalent, or replace both with real artwork. The owner asked for pixel art or GIF accents, so an animated GIF dropped into either band is in scope and expected; these SVGs are stand-ins drawn by hand, not generated imagery.

## Known Gaps

Carried forward honestly so they are not mistaken for defects to replicate:

1. **All copy is placeholder.** Five fake index entries; the post body is a structural demo of every supported element.
2. **Index artwork missing.** Empty 1px-tall band; the `showPixelArt` toggle currently changes nothing on that page.
3. **Stray fixed dimensions** on the index standfirst (`width: 789px; height: 98px`) — drop them.
4. **Filter chips incomplete** — only `all` remains, and nothing is wired.
5. **Read time not rendered** on index rows, though it is in the content model.
6. **Index footer removed** — the page ends on the artwork band with no closing line or RSS link. The post page's footer shows the intended treatment.
7. **Dead links** — `about` has no page, the wordmark points at `#`, and every index row links to the same post.
8. **No RSS feed, tag index, or search.** Reasonable for a small site; decide deliberately rather than by omission.

## Files

| File | Contents |
|---|---|
| `Writing.dc.html` | Writing index — header, page title, filter row, year-grouped post list, artwork band |
| `Post.dc.html` | Single-piece reading view — masthead, prose elements, numbers block, numbered list, tags, prev/next, footer |
| `support.js` | Prototype runtime only. Not part of the design and not to be ported. |

To view either page, open it directly in a browser — no build step, no server.
