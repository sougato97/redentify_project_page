# Project Homepage Architecture

## Product framing

This frontend is a compact project homepage.

Its job is to make one idea clear:

- ranking unstructured data is a systems problem
- index design, retrieval behavior, and reranking strategy all matter together
- the page should express that in a small number of strong blocks

## Page structure

### `/`

Single-page public homepage with a small set of sections:

- hero
- two idea cards
- three system blocks
- closing panel

## Primary component slices

Even though the implementation is static HTML/CSS/JS, the layout still maps cleanly to separable components later if needed.

### `FloatingNav`

- project name and short framing line
- theme toggle
- GitHub link

### `Hero`

- project-level positioning statement
- short explanation of the technical problem space
- two supporting cards

### `IdeaCards`

- two cards beneath the hero
- one about evidence-preserving indexing
- one about reranking and relevance stability

### `SystemsGrid`

- three blocks for:
  - retrieval breadth
  - ranking noise suppression
  - systems constraints

### `ClosingPanel`

- one compact statement of the project question
- ends the page without turning into a portfolio or resume

## State model

This homepage intentionally keeps state minimal:

```ts
type HomepageState = {
  theme: "light" | "dark";
};
```

## Why this shape

- The earlier frontend reference had a strong warm editorial layout, so that visual language was preserved.
- The page was intentionally reduced so it stops reading like a resume.
- The static implementation remains easy to host and easy to reshape later.
