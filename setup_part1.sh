#!/usr/bin/env bash
# Creates the files produced by the Part 1 tutorial (docs/part1_the_web.md)
# by copying the finished apps from samples/part1.

set -e

cd "$(dirname "$0")"

if [ -e part1 ]; then
  echo "part1/ already exists; remove it first." >&2
  exit 1
fi

cp -R samples/part1 part1
find part1 -name .DS_Store -delete

echo "Created:"
find part1 -type f | sort | sed 's/^/  /'
echo ""
echo "To serve app2 locally: cd part1/app2-files && bunx serve ."
