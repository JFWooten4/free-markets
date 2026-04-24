#!/usr/bin/env bash
set -euo pipefail

ruby scripts/generate-content.rb
"${HUGO_BIN:-hugo}" "$@"
