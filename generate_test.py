#!/usr/bin/env python3
import os
import replicate

# Set API token
os.environ["REPLICATE_API_TOKEN"] = "1697259f1f0cf1516d1e02bbada59686c8926c0a"

# Assembled prompt for predictive maintenance blog image
prompt = """Cinematic documentary photograph of Industrial/Manufacturing — a production facility where predictive maintenance sensor networks monitor critical equipment to prevent catastrophic failure.

A large production motor with integrated sensor network: temperature sensors mounted on bearing housings, 3-axis vibration accelerometers mounted on motor feet and driven equipment, ultrasonic sensors for bearing condition monitoring, color-coded cables routed to a condition monitoring unit nearby. The monitoring equipment displays real-time trend data and health metrics on its screen. The scene shows the prevention of catastrophic failure through continuous sensing—the technical infrastructure of reliability.

Focal anchor on the sensor cluster mounted on the motor; motor base and support structure in lower division; monitoring unit screen visible in right-third showing real-time metrics. The workspace is industrial, operational, authentic.

Afternoon natural light from facility windows combined with task lighting on the monitoring station. Technical precision visible in cable routing and sensor placement. Cool white lighting on the monitoring screen showing vibration signatures and temperature trends. The light reveals the care taken in sensor installation and the importance of real-time health monitoring.

Shot on 35mm lens, f/2.8 aperture. Kodak Portra 800 film stock.
Warm analog color palette — forest green (#0f4c3a) shadows, Brass (#C4944A) from practical light sources and sensor housings.
Fine organic film grain. Natural vignetting. Editorial documentary quality.
The image feels like a frame from a film — the viewer is immersed in the world of predictive maintenance and industrial reliability.
No typography, no logos, no words, no lettering of any kind, no identifiable human faces."""

# Generate image using Replicate
print("Generating image with Replicate...")
try:
    output = replicate.run(
        "google/nano-banana-pro",
        input={
            "prompt": prompt,
            "aspect_ratio": "4:3",
            "resolution": "1K",
            "output_format": "png",
            "safety_filter": "block_only_high"
        }
    )

    print(f"Generation successful!")
    print(f"Output type: {type(output)}")

    # Handle FileOutput object or URL string
    image_url = str(output)  # Convert to string to get URL
    print(f"Image URL: {image_url}")

    # Download the image
    import urllib.request
    output_path = "/sessions/laughing-admiring-gates/mnt/QuatroWebsite/public/images/blog-predictive-maintenance-test.png"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    urllib.request.urlretrieve(image_url, output_path)

    # Check file size
    file_size = os.path.getsize(output_path)
    print(f"\nImage saved to: {output_path}")
    print(f"File size: {file_size} bytes ({file_size / 1024:.1f} KB)")

except Exception as e:
    print(f"Error generating image: {e}")
    import traceback
    traceback.print_exc()
