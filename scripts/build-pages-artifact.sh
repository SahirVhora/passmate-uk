#!/usr/bin/env bash
set -euo pipefail

output="${1:-_site}"
case "$output" in
  ""|/|.)
    echo "Refusing unsafe artifact path: $output" >&2
    exit 1
    ;;
esac

rm -rf "$output"
mkdir -p "$output/data"

cp index.html manifest.json sw.js favicon.svg preview.svg robots.txt sitemap.xml _headers "$output/"
cp -R assets pages "$output/"
cp data/questions.js data/questions.json "$output/data/"
printf '' > "$output/.nojekyll"

for forbidden in tests docs src source scripts .github run-tests.js README.md CONTRIBUTING.md SECURITY.md; do
  if [ -e "$output/$forbidden" ]; then
    echo "Forbidden path in Pages artifact: $forbidden" >&2
    exit 1
  fi
done
