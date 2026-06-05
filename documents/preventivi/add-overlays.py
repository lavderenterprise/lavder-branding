#!/usr/bin/env python3
"""
add-overlays.py — Stamp cover-bottom and footer overlays onto a Lavder preventivo PDF.

Usage:
    python3 add-overlays.py <main.pdf> <cover-overlay.pdf> <footer-overlay.pdf> <output.pdf>

The cover overlay is merged on top of page 1.
The footer overlay is merged on top of the last page.
All other pages pass through unchanged.

Both overlays are expected to be single-page A4 PDFs with content positioned via CSS
`position: absolute; bottom: 0` so the stamped content lands at the bottom of the
target page.

Why this exists:
    Chrome's print engine cannot reliably anchor a footer to "the bottom of the last
    page" or "the bottom of page 1 only". Pure CSS approaches fail in print rendering.
    Generating clean main + separate overlays and merging with pypdf is the most
    robust solution that survives across documents of different lengths.

Dependencies: pypdf (pip install --user --break-system-packages pypdf)
"""
import sys
from pypdf import PdfReader, PdfWriter


def merge_overlays(main_pdf_path: str, cover_overlay_path: str, footer_overlay_path: str, output_path: str) -> None:
    main = PdfReader(main_pdf_path)
    cover_page = PdfReader(cover_overlay_path).pages[0]
    footer_page = PdfReader(footer_overlay_path).pages[0]

    writer = PdfWriter()
    total = len(main.pages)

    for i, page in enumerate(main.pages):
        if i == 0:
            page.merge_page(cover_page)
        if i == total - 1:
            page.merge_page(footer_page)
        writer.add_page(page)

    with open(output_path, "wb") as f:
        writer.write(f)

    print(f"Wrote {output_path} ({total} pages, cover overlay on page 1, footer overlay on page {total})")


if __name__ == "__main__":
    if len(sys.argv) != 5:
        print(__doc__, file=sys.stderr)
        sys.exit(1)
    merge_overlays(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
