#!/usr/bin/env bash
# fetch-sentinel.sh — pull a Sentinel-1 or Sentinel-2 image via Sentinel Hub
#
# Dependencies: sentinelhub-py (`pip install sentinelhub`)
# Credentials: export SH_CLIENT_ID and SH_CLIENT_SECRET from a Sentinel Hub account.
#
# Usage:
#   ./fetch-sentinel.sh sentinel-1 <bbox> <start-date> <end-date> <output.tif>
#   ./fetch-sentinel.sh sentinel-2 <bbox> <start-date> <end-date> <bandcombo> <output.tif>
#
# Example:
#   ./fetch-sentinel.sh sentinel-2 \
#     "-79.1,-1.1,-78.9,-0.9" \
#     2026-03-01 2026-03-14 \
#     nir \
#     /tmp/esmeraldas-nir.tif

set -euo pipefail

MISSION="${1:?missing mission (sentinel-1|sentinel-2)}"
BBOX="${2:?missing bbox (W,S,E,N)}"
START_DATE="${3:?missing start date}"
END_DATE="${4:?missing end date}"

if [[ "$MISSION" == "sentinel-2" ]]; then
  BANDCOMBO="${5:?missing band combo (natural|nir|swir|agriculture|thermal)}"
  OUTPUT="${6:?missing output path}"
else
  OUTPUT="${5:?missing output path}"
fi

if [[ -z "${SH_CLIENT_ID:-}" || -z "${SH_CLIENT_SECRET:-}" ]]; then
  echo "ERROR: SH_CLIENT_ID and SH_CLIENT_SECRET must be exported."
  echo "Get credentials at https://apps.sentinel-hub.com/dashboard/"
  exit 1
fi

python3 <<PYEOF
from sentinelhub import (
    SHConfig, DataCollection, SentinelHubRequest,
    MimeType, CRS, BBox,
)
import os
from pathlib import Path

config = SHConfig()
config.sh_client_id = os.environ["SH_CLIENT_ID"]
config.sh_client_secret = os.environ["SH_CLIENT_SECRET"]

w, s, e, n = [float(x) for x in "${BBOX}".split(",")]
bbox = BBox([w, s, e, n], crs=CRS.WGS84)
time_interval = ("${START_DATE}", "${END_DATE}")

if "${MISSION}" == "sentinel-1":
    data_collection = DataCollection.SENTINEL1_IW
    evalscript = """
        //VERSION=3
        function setup() {
            return { input: ["VV"], output: { bands: 1 } };
        }
        function evaluatePixel(s) {
            return [Math.min(1.0, Math.max(0, (10 * Math.log10(s.VV) + 25) / 30))];
        }
    """
elif "${MISSION}" == "sentinel-2":
    data_collection = DataCollection.SENTINEL2_L2A
    bandcombo = "${BANDCOMBO:-natural}"
    if bandcombo == "nir":
        evalscript = """
            //VERSION=3
            function setup() { return { input: ["B08","B04","B03"], output: { bands: 3 } }; }
            function evaluatePixel(s) { return [2.5*s.B08, 2.5*s.B04, 2.5*s.B03]; }
        """
    elif bandcombo == "swir":
        evalscript = """
            //VERSION=3
            function setup() { return { input: ["B12","B08","B04"], output: { bands: 3 } }; }
            function evaluatePixel(s) { return [2.5*s.B12, 2.5*s.B08, 2.5*s.B04]; }
        """
    elif bandcombo == "agriculture":
        evalscript = """
            //VERSION=3
            function setup() { return { input: ["B11","B08","B02"], output: { bands: 3 } }; }
            function evaluatePixel(s) { return [2.5*s.B11, 2.5*s.B08, 2.5*s.B02]; }
        """
    else:  # natural
        evalscript = """
            //VERSION=3
            function setup() { return { input: ["B04","B03","B02"], output: { bands: 3 } }; }
            function evaluatePixel(s) { return [2.5*s.B04, 2.5*s.B03, 2.5*s.B02]; }
        """
else:
    raise ValueError("Mission must be sentinel-1 or sentinel-2")

request = SentinelHubRequest(
    evalscript=evalscript,
    input_data=[SentinelHubRequest.input_data(
        data_collection=data_collection,
        time_interval=time_interval,
    )],
    responses=[SentinelHubRequest.output_response("default", MimeType.TIFF)],
    bbox=bbox,
    size=(2560, 1440),
    config=config,
)

data = request.get_data()[0]
output_path = Path("${OUTPUT}")
output_path.parent.mkdir(parents=True, exist_ok=True)

from PIL import Image
import numpy as np
arr = np.array(data)
if arr.dtype != np.uint8:
    arr = (255 * np.clip(arr, 0, 1)).astype(np.uint8)
Image.fromarray(arr).save(output_path)
print(f"Wrote {output_path} ({output_path.stat().st_size // 1024} KB)")
PYEOF
