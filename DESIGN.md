# Design System

## Register
brand

## Concept: Wajeeh's notebook
The portfolio is a personal engineering notebook, deliberately the opposite of a generated template. The notebook is the setting, not a gimmick: content stays printed and skimmable; handwriting is used only where a person would actually scribble.

- **Graph paper** page with a red double margin line.
- **Index tabs** on the right edge are the navigation on wide screens; a plain handwritten strip on narrow ones.
- **Cover**: handwritten greeting, printed intro, an index card of facts, the photo taped in, a "that's me" note, a red Vyrothon stamp, and a sticky note holding the résumé links.
- **Project entries**: printed summary, a **hand-drawn system sketch** of the real pipeline (roughjs, drawn stroke by stroke when scrolled into view; feedback loops in red pen), checkmarked highlights, a blue margin note, "read the code →" pen links.
- **Pen marks** (rough-notation): red underlines on headings, yellow highlighter on the win, a red circle on "580+ applicants".

## Pens and paper (tokens in `src/index.css`)
- Paper `--paper` with `--grid` lines; `--card` for the index card and photo border.
- `--ink` printed text and felt-tip headings; `--blue-pen` notes, links, labels; `--red-pen` marks, numbers, stamp, loops; `--highlighter`; `--sticky`; `--tape`.
- Light only: it's paper.

## Typography
- **Literata** for everything printed (body, summaries, lists).
- **Kalam** for handwriting: headings (700, in ink), notes and labels (400, in blue pen).

## Motion
- Sketches draw themselves; pen marks draw on when visible; tabs slide out on hover.
- Everything is static under `prefers-reduced-motion`.

## Content rules
- No em dashes. Each project needs `pipeline` steps, a short factual `note`, and optionally `loopTo` (index the last step loops back to). Keep notes factual; no invented opinions. Optional `repos` lists several code links under one entry; optional `shots` tapes screenshots into an entry.
- Fonts are self-hosted (@fontsource); no italic is loaded, so don't use `font-style: italic`.
