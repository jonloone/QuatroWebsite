#!/usr/bin/env python3
"""
Quatro Image-to-Image Style Transfer
Uses Flux Kontext on Replicate to apply style transfer to an existing image.

Usage:
  python scripts/generate_img2img.py --input public/images/source.png --prompt "style description" --output public/images/result.png
"""

import os
import sys
import argparse
import requests

try:
    from dotenv import load_dotenv
except ImportError:
    os.system(f"{sys.executable} -m pip install python-dotenv --quiet")
    from dotenv import load_dotenv

script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(script_dir)
load_dotenv(os.path.join(project_root, ".env"))

try:
    import replicate
except ImportError:
    os.system(f"{sys.executable} -m pip install replicate requests --quiet")
    import replicate


def generate(input_image: str, prompt: str, output_path: str, model: str = "black-forest-labs/flux-kontext-max", aspect_ratio: str = "16:9"):
    """Run img2img style transfer via Replicate."""
    print(f"Model: {model}")
    print(f"Input: {input_image}")
    print(f"Prompt: {prompt[:100]}...")
    print(f"Generating...")

    with open(input_image, "rb") as f:
        output = replicate.run(
            model,
            input={
                "image": f,
                "prompt": prompt,
                "aspect_ratio": aspect_ratio,
                "safety_tolerance": 5,
                "output_format": "png",
            }
        )

    # Output is typically a URL or FileOutput
    url = str(output[0]) if isinstance(output, list) else str(output)
    print(f"Result URL: {url}")

    resp = requests.get(url, timeout=120)
    resp.raise_for_status()
    with open(output_path, "wb") as f:
        f.write(resp.content)

    size_kb = os.path.getsize(output_path) / 1024
    print(f"Saved: {output_path} ({size_kb:.0f} KB)")


def main():
    parser = argparse.ArgumentParser(description="Image-to-image style transfer via Replicate")
    parser.add_argument("--input", required=True, help="Path to source image")
    parser.add_argument("--prompt", required=True, help="Style transfer prompt")
    parser.add_argument("--output", required=True, help="Output image path")
    parser.add_argument("--model", default="black-forest-labs/flux-kontext-max", help="Replicate model")
    parser.add_argument("--aspect-ratio", default="16:9", help="Output aspect ratio")
    args = parser.parse_args()

    if not os.environ.get("REPLICATE_API_TOKEN"):
        print("ERROR: REPLICATE_API_TOKEN not set. Check .env file.")
        sys.exit(1)

    generate(args.input, args.prompt, args.output, args.model, args.aspect_ratio)


if __name__ == "__main__":
    main()
