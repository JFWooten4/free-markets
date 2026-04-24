#!/usr/bin/env bash
set -euo pipefail

node scripts/generate-content.mjs
"${HUGO_BIN:-hugo}" "$@"
