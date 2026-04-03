#!/usr/bin/env python3
"""
Quatro Image Generation Script
Reads prompt CSVs and generates images via Replicate API (google/nano-banana-pro).

Usage:
  python scripts/generate_images.py --csv image-prompts/homepage-network-section.csv --output public/images

Reads REPLICATE_API_TOKEN from .env file automatically. No manual export needed.

Prerequisites:
  pip install replicate requests python-dotenv
"""

import csv
import os
import sys
import json
import time
import argparse
import requests

# Auto-load .env file from project root
try:
    from dotenv import load_dotenv
except ImportError:
    os.system(f"{sys.executable} -m pip install python-dotenv --quiet")
    from dotenv import load_dotenv

# Walk up from script dir to find .env at project root
script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(script_dir)
load_dotenv(os.path.join(project_root, ".env"))

try:
    import replicate
except ImportError:
    print("Installing replicate package...")
    os.system(f"{sys.executable} -m pip install replicate requests --quiet")
    import replicate

# ─── Configuration ───────────────────────────────────────────────────
MODEL = "google/nano-banana-pro"
FALLBACK_MODEL = "google/seedream-5"
RESOLUTION_DEFAULT = "2K"
OUTPUT_FORMAT = "png"
SAFETY_FILTER = "block_only_high"
ALLOW_FALLBACK = True
DELAY_BETWEEN_CALLS = 2  # seconds

# ─── Dimension → Aspect Ratio Mapping ────────────────────────────────
ASPECT_RATIOS = {
    "1920x1080": "16:9",
    "1200x750": "16:9",
    "800x600": "4:3",
    "400x400": "1:1",
    "1080x1920": "9:16",
}

def get_resolution(dimensions: str) -> str:
    """Higher res for heroes and proof points, 1K for smaller images."""
    if dimensions in ("1920x1080", "1200x750"):
        return "2K"
    return "1K"

def get_aspect_ratio(dimensions: str) -> str:
    return ASPECT_RATIOS.get(dimensions, "16:9")

def generate_image(prompt: str, aspect_ratio: str, resolution: str, model: str = MODEL) -> str:
    """Call Replicate API and return the output image URL."""
    output = replicate.run(
        model,
        input={
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "resolution": resolution,
            "output_format": OUTPUT_FORMAT,
            "safety_filter": SAFETY_FILTER,
        }
    )
    # Output can be a URL string or a list with one URL
    if isinstance(output, list):
        return str(output[0])
    return str(output)

def download_image(url: str, filepath: str) -> bool:
    """Download image from URL to local filepath."""
    try:
        resp = requests.get(url, timeout=60)
        resp.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(resp.content)
        size_kb = os.path.getsize(filepath) / 1024
        print(f"  Downloaded: {filepath} ({size_kb:.0f} KB)")
        return True
    except Exception as e:
        print(f"  Download failed: {e}")
        return False

def process_csv(csv_path: str, output_dir: str, force: bool = False) -> list:
    """Process a prompt CSV and generate all images."""
    os.makedirs(output_dir, exist_ok=True)
    results = []

    with open(csv_path, "r") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"\nProcessing {len(rows)} image(s) from {csv_path}")
    print(f"Output directory: {output_dir}\n")

    for i, row in enumerate(rows):
        filename = row["output_filename"].strip()
        filepath = os.path.join(output_dir, filename)
        prompt = row["scene_prompt"].strip()
        dimensions = row.get("dimensions", "1920x1080").strip()
        aspect_ratio = get_aspect_ratio(dimensions)
        resolution = get_resolution(dimensions)

        print(f"[{i+1}/{len(rows)}] {row.get('title', filename)}")
        print(f"  Dimensions: {dimensions} → Aspect: {aspect_ratio}, Resolution: {resolution}")

        # Skip if already exists (unless --force)
        if os.path.exists(filepath) and not force:
            print(f"  Skipped (already exists): {filepath}")
            results.append({"filename": filename, "status": "skipped"})
            continue

        # Generate
        try:
            print(f"  Generating with {MODEL}...")
            url = generate_image(prompt, aspect_ratio, resolution, MODEL)
            success = download_image(url, filepath)
            results.append({
                "filename": filename,
                "status": "success" if success else "download_failed",
                "model": MODEL,
                "url": url,
            })
        except Exception as e:
            print(f"  Primary model failed: {e}")
            if ALLOW_FALLBACK:
                try:
                    print(f"  Retrying with fallback model {FALLBACK_MODEL}...")
                    url = generate_image(prompt, aspect_ratio, resolution, FALLBACK_MODEL)
                    success = download_image(url, filepath)
                    results.append({
                        "filename": filename,
                        "status": "success_fallback" if success else "download_failed",
                        "model": FALLBACK_MODEL,
                        "url": url,
                    })
                except Exception as e2:
                    print(f"  Fallback also failed: {e2}")
                    results.append({
                        "filename": filename,
                        "status": "failed",
                        "error": str(e2),
                    })
            else:
                results.append({
                    "filename": filename,
                    "status": "failed",
                    "error": str(e),
                })

        # Rate limit delay
        if i < len(rows) - 1:
            time.sleep(DELAY_BETWEEN_CALLS)

    return results

def main():
    parser = argparse.ArgumentParser(description="Generate images from prompt CSVs via Replicate API")
    parser.add_argument("--csv", required=True, help="Path to prompt CSV file")
    parser.add_argument("--output", default="public/images", help="Output directory for generated images")
    parser.add_argument("--force", action="store_true", help="Regenerate even if image already exists")
    args = parser.parse_args()

    # Check for API token
    if not os.environ.get("REPLICATE_API_TOKEN"):
        print("ERROR: REPLICATE_API_TOKEN environment variable not set.")
        print("  export REPLICATE_API_TOKEN='r8_your_token_here'")
        sys.exit(1)

    results = process_csv(args.csv, args.output, args.force)

    # Write log
    log_path = os.path.join(args.output, "generation-log.json")
    with open(log_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nLog written to {log_path}")

    # Summary
    success = sum(1 for r in results if r["status"] in ("success", "success_fallback"))
    skipped = sum(1 for r in results if r["status"] == "skipped")
    failed = sum(1 for r in results if r["status"] == "failed")
    print(f"\nDone: {success} generated, {skipped} skipped, {failed} failed")

if __name__ == "__main__":
    main()
