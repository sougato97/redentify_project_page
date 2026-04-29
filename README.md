# ML Architect Homepage

This package hosts a small project homepage focused on ranking strategies for unstructured data.

It intentionally stays closer to the original block-based landing-page shape:

- one hero
- two idea cards
- a small grid of system blocks
- one closing panel

It is not meant to read like a resume or a full portfolio site.

## Files

- `index.html`: homepage structure and content
- `styles.css`: visual system, layout, and responsive behavior
- `app.js`: small interaction layer for theme toggling
- `architecture.md`: section map and implementation notes

## Run

Serve this folder with a simple static server:

```bash
cd apps/project_frontend
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Design notes

- The warm palette, floating navigation, and panel-based composition were adapted from the earlier frontend reference.
- The copy is centered on indexing, retrieval, and ranking behavior over unstructured data.
- The implementation stays static and intentionally minimal.
