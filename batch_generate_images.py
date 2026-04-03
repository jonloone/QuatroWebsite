#!/usr/bin/env python3
import os
import csv
import time
import replicate
from pathlib import Path

# Configuration
API_TOKEN = "1697259f1f0cf1516d1e02bbada59686c8926c0a"
CSV_FILE = "/sessions/laughing-admiring-gates/mnt/QuatroWebsite/image-prompts/challenge-icons.csv"
OUTPUT_DIR = "/sessions/laughing-admiring-gates/mnt/QuatroWebsite/public/images"
MODEL = "google/nano-banana-pro"
ROWS_TO_PROCESS = range(15, 28)  # rows 15-27 (0-indexed, so actual rows 16-28 in the file)
DELAY = 2  # seconds between API calls

# Ensure output directory exists
Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)

# Set API token
os.environ["REPLICATE_API_TOKEN"] = API_TOKEN

# Read CSV
rows = []
with open(CSV_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# Process rows 15-27 (0-indexed)
results = []
for idx in ROWS_TO_PROCESS:
    if idx >= len(rows):
        print(f"Row {idx} out of range, skipping.")
        continue

    row = rows[idx]
    output_filename = row['output_filename']
    scene_prompt = row['scene_prompt']

    output_path = os.path.join(OUTPUT_DIR, output_filename)

    print(f"\n[{idx+1}] Processing: {output_filename}")
    print(f"    Prompt: {scene_prompt[:80]}...")

    try:
        # Call Replicate API
        output = replicate.run(
            MODEL,
            input={
                "prompt": scene_prompt,
                "aspect_ratio": "1:1",
                "resolution": "1K",
                "output_format": "png",
                "safety_filter": "block_only_high"
            }
        )

        # The output from nano-banana-pro is typically a URL
        if isinstance(output, str):
            # Download the image from the URL
            import urllib.request
            urllib.request.urlretrieve(output, output_path)
            print(f"    ✓ SUCCESS: Saved to {output_path}")
            results.append({"row": idx+1, "filename": output_filename, "status": "success"})
        elif isinstance(output, list) and len(output) > 0:
            # Sometimes it returns a list of URLs
            import urllib.request
            urllib.request.urlretrieve(output[0], output_path)
            print(f"    ✓ SUCCESS: Saved to {output_path}")
            results.append({"row": idx+1, "filename": output_filename, "status": "success"})
        else:
            print(f"    ✗ FAILED: Unexpected output format: {output}")
            results.append({"row": idx+1, "filename": output_filename, "status": "failed", "reason": "Unexpected output format"})

        # Delay between requests
        if idx < max(ROWS_TO_PROCESS):
            time.sleep(DELAY)

    except Exception as e:
        print(f"    ✗ FAILED: {str(e)}")
        results.append({"row": idx+1, "filename": output_filename, "status": "failed", "reason": str(e)})

# Print summary
print("\n" + "="*60)
print("BATCH IMAGE GENERATION SUMMARY")
print("="*60)
successes = [r for r in results if r['status'] == 'success']
failures = [r for r in results if r['status'] == 'failed']

print(f"\nTotal Processed: {len(results)}")
print(f"Successes: {len(successes)}")
print(f"Failures: {len(failures)}")

if successes:
    print("\nSuccessful generations:")
    for r in successes:
        print(f"  - Row {r['row']:2d}: {r['filename']}")

if failures:
    print("\nFailed generations:")
    for r in failures:
        print(f"  - Row {r['row']:2d}: {r['filename']} ({r.get('reason', 'Unknown error')})")

print("\n" + "="*60)
