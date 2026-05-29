# Documents

Templates and conventions for institutional documents produced under the Lavder Enterprise brand: preventivi (quotes), proposte, contracts, reports, decks.

Each subfolder documents one document type with:
- A markdown guide for structure, voice, and conventions
- One or more reference HTML templates (Chrome-headless renderable to PDF)
- Any reusable CYA clauses or boilerplate

## Subfolders

| Folder | Document type |
|---|---|
| [`preventivi/`](./preventivi) | Preventivi e proposte commerciali B2B (quotes & proposals) |
| [`case-studies/`](./case-studies) | Client case-study decks (landscape 16:9, narrative project walkthroughs) |

## Rendering to PDF

All Lavder documents are authored in HTML+CSS using tokens from [`/tokens`](../tokens) and fonts from [`/assets/fonts`](../assets/fonts). They render to PDF via Chrome headless:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="output.pdf" \
  "file://$(pwd)/input.html"
```

A4 page size, 18mm vertical / 16mm horizontal margins by default. See each subfolder's README for document-specific overrides.
