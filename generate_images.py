#!/usr/bin/env python3
import csv
import replicate
import os
import time
from pathlib import Path
import httpx

api_token = "1697259f1f0cf1516d1e02bbada59686c8926c0a"
os.environ['REPLICATE_API_TOKEN'] = api_token

csv_path = '/sessions/laughing-admiring-gates/mnt/QuatroWebsite/image-prompts/capability-images.csv'
output_dir = '/sessions/laughing-admiring-gates/mnt/QuatroWebsite/public/images'

Path(output_dir).mkdir(parents=True, exist_ok=True)

with open(csv_path, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

target_rows = rows[34:50]
print(f"Processing {len(target_rows)} rows (data rows 35-50)\n", flush=True)

success_list = []
failed_list = []

for idx, row in enumerate(target_rows, start=35):
    output_filename = row['output_filename']
    scene_prompt = row['scene_prompt'].strip()
    title = row['title']
    output_path = os.path.join(output_dir, output_filename)

    print(f"[{idx}] {title[:40]}... ", end="", flush=True)

    try:
        output = replicate.run(
            "google/nano-banana-pro",
            input={
                "prompt": scene_prompt,
                "aspect_ratio": "4:3",
                "resolution": "1K",
                "output_format": "png",
                "safety_filter": "block_only_high"
            }
        )

        image_url = str(output.url) if hasattr(output, 'url') else str(output)
        response = httpx.get(image_url)
        response.raise_for_status()

        with open(output_path, 'wb') as f:
            f.write(response.content)

        file_size = os.path.getsize(output_path)
        print(f"OK ({file_size}B)", flush=True)
        success_list.append((idx, output_filename, file_size))

    except Exception as e:
        error = f"{type(e).__name__}: {str(e)[:50]}"
        print(f"FAIL ({error})", flush=True)
        failed_list.append((idx, output_filename, str(e)[:80]))

    if idx < 50:
        time.sleep(2)

print(f"\n{'='*70}")
print(f"SUMMARY: {len(success_list)} successful, {len(failed_list)} failed")
print(f"{'='*70}\n")

if success_list:
    print("Successful generations:")
    for row_num, filename, size in success_list:
        print(f"  Row {row_num}: {filename} ({size} bytes)")

if failed_list:
    print("\nFailed generations:")
    for row_num, filename, error in failed_list:
        print(f"  Row {row_num}: {filename}")
        print(f"    Error: {error}")
