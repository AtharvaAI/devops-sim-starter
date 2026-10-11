#!/usr/bin/env bash
# Placeholder deploy: prints what it would do. Replace with your pipeline's deploy step.
set -euo pipefail
echo "deploying ${1:-payments-api} from $(git rev-parse --short HEAD)"
