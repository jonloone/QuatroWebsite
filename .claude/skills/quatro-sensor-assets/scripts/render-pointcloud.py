#!/usr/bin/env python3
"""
render-pointcloud.py

Render a .las/.laz LIDAR point cloud to a PNG in the Quatro palette.

This is a starter script. Tune point size, elevation scaling, and camera angle
per asset. The palette is canonical — do not change colors without updating
quatro-ui-system.

Usage:
    python render-pointcloud.py \\
        --input input.laz \\
        --output public/images/sensor/lidar/sit-gs04-20260405.png \\
        --palette forest-on-charcoal \\
        --size 2560x1440 \\
        --point-size 1.5

Dependencies:
    pip install pdal numpy pillow matplotlib

Tested with:
    PDAL 2.6+
    Python 3.10+
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image

# Quatro palette — do not edit without updating quatro-ui-system.
PALETTES = {
    "forest-on-charcoal": {
        "background": (10, 10, 10),        # #0a0a0a
        "point_base": (15, 76, 58),        # #0f4c3a
        "point_highlight": (82, 166, 138), # brightened forest
    },
    "height-mapped": {
        "background": (10, 10, 10),        # #0a0a0a
        "stops": [
            (249, 250, 251),   # paper at high elevation
            (82, 166, 138),    # brightened forest mid
            (15, 76, 58),      # forest low
        ],
    },
    "luminance-only": {
        "background": (10, 10, 10),
        "point_base": (255, 255, 255),
        "point_highlight": (255, 255, 255),
    },
}


def read_points(input_path: Path, decimate: float = 1.0):
    """Use PDAL to read and decimate a point cloud. Returns XYZ + intensity."""
    pipeline = {
        "pipeline": [
            {"type": "readers.las", "filename": str(input_path)},
        ]
    }
    if decimate < 1.0:
        pipeline["pipeline"].append(
            {"type": "filters.sample", "radius": 1.0 / decimate}
        )

    result = subprocess.run(
        ["pdal", "pipeline", "--stdin"],
        input=json.dumps(pipeline),
        capture_output=True,
        text=True,
        check=True,
    )
    # TODO: parse PDAL JSON output to numpy. Using laspy is often simpler
    # for this step — consider swapping.
    raise NotImplementedError(
        "Flesh out with laspy.read() or PDAL numpy bindings for your workflow."
    )


def render_orthographic(points: np.ndarray, palette: dict, size: tuple, point_size: float):
    """
    Render an orthographic top-down projection.
    points: (N, 4) array of X, Y, Z, Intensity.
    """
    w, h = size
    img = np.full((h, w, 3), palette["background"], dtype=np.uint8)

    # Map X/Y to pixel space
    xs, ys, zs, intensity = points.T
    xn = (xs - xs.min()) / (xs.ptp() + 1e-9)
    yn = (ys - ys.min()) / (ys.ptp() + 1e-9)
    px = (xn * (w - 1)).astype(int)
    py = ((1 - yn) * (h - 1)).astype(int)

    # Color per palette
    if "stops" in palette:
        # height-mapped
        zn = (zs - zs.min()) / (zs.ptp() + 1e-9)
        colors = interpolate_stops(zn, palette["stops"])
    else:
        # forest-on-charcoal or luminance-only
        intensity_n = (intensity - intensity.min()) / (intensity.ptp() + 1e-9)
        colors = np.array(palette["point_base"]) * intensity_n[:, None] + \
                 np.array(palette["point_highlight"]) * (1 - intensity_n[:, None])

    # Splat points with simple box filter at point_size
    r = int(max(1, point_size))
    for i in range(len(px)):
        img[max(0, py[i] - r):py[i] + r + 1,
            max(0, px[i] - r):px[i] + r + 1] = colors[i].astype(np.uint8)

    return Image.fromarray(img)


def interpolate_stops(values: np.ndarray, stops: list) -> np.ndarray:
    """Linear interp between color stops."""
    n = len(stops)
    # TODO: vectorize properly. Starter implementation only.
    result = np.zeros((len(values), 3))
    for i, v in enumerate(values):
        pos = v * (n - 1)
        lo = int(np.floor(pos))
        hi = min(lo + 1, n - 1)
        t = pos - lo
        result[i] = np.array(stops[lo]) * (1 - t) + np.array(stops[hi]) * t
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--palette", choices=list(PALETTES.keys()),
                        default="forest-on-charcoal")
    parser.add_argument("--size", default="2560x1440",
                        help="WxH in pixels")
    parser.add_argument("--point-size", type=float, default=1.5)
    parser.add_argument("--decimate", type=float, default=1.0,
                        help="Sample rate (1.0 = full, 0.5 = half)")
    args = parser.parse_args()

    w, h = [int(x) for x in args.size.lower().split("x")]
    palette = PALETTES[args.palette]

    print(f"Reading {args.input}...")
    points = read_points(args.input, decimate=args.decimate)

    print(f"Rendering {w}x{h} with palette {args.palette}...")
    img = render_orthographic(points, palette, (w, h), args.point_size)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    img.save(args.output, optimize=True)
    print(f"Wrote {args.output} ({args.output.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
