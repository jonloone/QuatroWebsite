#!/usr/bin/env bash
# generate-seedance.sh — generate a Seedance 2.0 video via Replicate API
#
# Dependencies: curl, jq
# Credentials: export REPLICATE_API_TOKEN
#
# Usage:
#   ./generate-seedance.sh <prompt-file> <output-mp4> [duration] [seed]
#
# Example:
#   ./generate-seedance.sh prompts/esmeraldas-sensor-mimic.txt \
#     /tmp/seedance-esmeraldas.mp4 15 42

set -euo pipefail

PROMPT_FILE="${1:?missing prompt file path}"
OUTPUT="${2:?missing output mp4 path}"
DURATION="${3:-15}"
SEED="${4:-}"

if [[ -z "${REPLICATE_API_TOKEN:-}" ]]; then
  echo "ERROR: REPLICATE_API_TOKEN must be exported."
  echo "Get a token at https://replicate.com/account/api-tokens"
  exit 1
fi

PROMPT=$(cat "$PROMPT_FILE")

# Seedance 2.0 model version — update when ByteDance releases new versions.
# Check the current version at https://replicate.com/bytedance/seedance-pro
MODEL_VERSION="${SEEDANCE_MODEL_VERSION:-bytedance/seedance-2.0-pro}"

echo "Submitting Seedance 2.0 job..."
echo "  Prompt: $(echo "$PROMPT" | head -c 120)..."
echo "  Duration: ${DURATION}s"
echo "  Seed: ${SEED:-random}"

# Build the request body
REQUEST_BODY=$(jq -n \
  --arg model "$MODEL_VERSION" \
  --arg prompt "$PROMPT" \
  --argjson duration "$DURATION" \
  --arg seed "$SEED" \
  '{
    version: $model,
    input: {
      prompt: $prompt,
      duration: $duration,
      aspect_ratio: "16:9"
    } + (if $seed != "" then {seed: ($seed | tonumber)} else {} end)
  }')

# Submit prediction
RESPONSE=$(curl -sS -X POST https://api.replicate.com/v1/predictions \
  -H "Authorization: Bearer $REPLICATE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$REQUEST_BODY")

PREDICTION_ID=$(echo "$RESPONSE" | jq -r '.id')
GET_URL=$(echo "$RESPONSE" | jq -r '.urls.get')

if [[ "$PREDICTION_ID" == "null" ]]; then
  echo "ERROR: prediction failed to submit"
  echo "$RESPONSE" | jq .
  exit 1
fi

echo "Prediction ID: $PREDICTION_ID"
echo "Polling status..."

while true; do
  STATUS_RESPONSE=$(curl -sS "$GET_URL" \
    -H "Authorization: Bearer $REPLICATE_API_TOKEN")
  STATUS=$(echo "$STATUS_RESPONSE" | jq -r '.status')

  case "$STATUS" in
    succeeded)
      OUTPUT_URL=$(echo "$STATUS_RESPONSE" | jq -r '.output')
      echo "Complete. Downloading..."
      mkdir -p "$(dirname "$OUTPUT")"
      curl -sS -L -o "$OUTPUT" "$OUTPUT_URL"
      echo "Wrote $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
      exit 0
      ;;
    failed|canceled)
      echo "ERROR: prediction $STATUS"
      echo "$STATUS_RESPONSE" | jq '.error'
      exit 1
      ;;
    starting|processing)
      echo "  ${STATUS}..."
      sleep 8
      ;;
    *)
      echo "Unknown status: $STATUS"
      sleep 5
      ;;
  esac
done
