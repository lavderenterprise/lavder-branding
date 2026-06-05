#!/usr/bin/env bash
# render-with-overlays.sh — Render a Lavder preventivo to PDF with cover-bottom and footer
# overlays placed at the actual bottom of page 1 and the last page.
#
# Usage:
#   ./render-with-overlays.sh <basename>
#
#   where <basename> is the path prefix without extension. The script expects:
#     <basename>.html                # main content (no cover-bottom, no footer in HTML)
#     <basename>-overlay-cover.html  # single-page A4 with cover-bottom anchored at bottom
#     <basename>-overlay-footer.html # single-page A4 with footer anchored at bottom
#
#   And produces:
#     <basename>.pdf                 # final merged PDF
#
# Why overlays:
#   Chrome's print engine cannot reliably anchor an element to the bottom of a specific
#   page (especially "last page only"). Pure CSS approaches (@page :last, position:
#   running(), flex with min-height) either fail or apply to every page. The overlay
#   approach generates a clean main PDF without cover-bottom/footer, then stamps those
#   elements on top of the correct pages via pypdf. Each overlay HTML positions its
#   content with position: absolute; bottom: 0, so the stamped output lands exactly at
#   the bottom of the target page.

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <basename>" >&2
  echo "Expects <basename>.html, <basename>-overlay-cover.html, <basename>-overlay-footer.html" >&2
  exit 1
fi

BASE="$1"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ ! -f "${BASE}.html" ]]; then
  echo "Missing ${BASE}.html" >&2; exit 1
fi
if [[ ! -f "${BASE}-overlay-cover.html" ]]; then
  echo "Missing ${BASE}-overlay-cover.html" >&2; exit 1
fi
if [[ ! -f "${BASE}-overlay-footer.html" ]]; then
  echo "Missing ${BASE}-overlay-footer.html" >&2; exit 1
fi

MAIN_PDF=$(mktemp -t lavder-main).pdf
COVER_PDF=$(mktemp -t lavder-cover).pdf
FOOTER_PDF=$(mktemp -t lavder-footer).pdf
trap 'rm -f "$MAIN_PDF" "$COVER_PDF" "$FOOTER_PDF"' EXIT

echo "→ Rendering main..."
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$MAIN_PDF" "file://${BASE}.html" 2>/dev/null

echo "→ Rendering cover-bottom overlay..."
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$COVER_PDF" "file://${BASE}-overlay-cover.html" 2>/dev/null

echo "→ Rendering footer overlay..."
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$FOOTER_PDF" "file://${BASE}-overlay-footer.html" 2>/dev/null

echo "→ Merging overlays into final PDF..."
python3 "$SCRIPT_DIR/add-overlays.py" "$MAIN_PDF" "$COVER_PDF" "$FOOTER_PDF" "${BASE}.pdf"

echo "Done: ${BASE}.pdf"
