# Export Settings

Every motion asset must conform to these specs before publish. Consistent export settings mean every video on the site has the same file-size behavior, the same color handling, and the same autoplay experience.

---

## Master Specs

| Spec | Value |
|---|---|
| Primary resolution | 1920 × 1080 (16:9) |
| Alternate resolution | 2560 × 1440 for hero only |
| Frame rate | 24 fps (cinematic) or 30 fps (web loops) |
| Primary codec | H.264 (MP4) |
| Alternate codec | VP9 (WebM) for bandwidth-sensitive delivery |
| Audio | None. All motion assets on the site are silent. |
| Bitrate (H.264) | 2–4 Mbps |
| Bitrate (VP9) | 1.5–3 Mbps |
| Color space | Rec.709 |
| Max file size | 5 MB per asset |
| Poster frame | Required, PNG, same name + `.png`, stored in `poster/` subdirectory |
| Autoplay behavior | Autoplay, muted, loop, `playsinline` |

---

## ffmpeg Recipes

### H.264 MP4 (primary)

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -preset slow -crf 23 \
  -pix_fmt yuv420p \
  -vf "scale=1920:1080,fps=24" \
  -movflags +faststart \
  -an \
  output.mp4
```

Flags explained:
- `-c:v libx264` — H.264 encoder.
- `-preset slow` — better compression at the cost of encode time.
- `-crf 23` — quality target. Lower = higher quality. 23 is a good web default.
- `-pix_fmt yuv420p` — required for browser compatibility.
- `-vf scale=1920:1080,fps=24` — resize and force frame rate.
- `-movflags +faststart` — moov atom at the start for progressive download.
- `-an` — strip audio.

### VP9 WebM (alternate)

```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -b:v 2M -crf 30 \
  -vf "scale=1920:1080,fps=24" \
  -pix_fmt yuv420p \
  -an \
  output.webm
```

### Seamless loop for dither variants and atmospheric loops

```bash
# Uses xfade to blend the end back into the start for an invisible loop point
ffmpeg -i input.mp4 -filter_complex \
  "[0:v]split[a][b];[a]trim=0:1,setpts=PTS-STARTPTS[head];
   [b]trim=19:20,setpts=PTS-STARTPTS[tail];
   [tail][head]xfade=fade:duration=1:offset=0[looped]" \
  -map "[looped]" \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -an \
  loop.mp4
```

Adjust `trim=0:1` and `trim=19:20` to match your clip duration.

### Poster frame extraction

```bash
# Extract the frame at 2 seconds as the poster
ffmpeg -i output.mp4 -ss 00:00:02 -vframes 1 \
  -vf "scale=1920:1080" \
  poster/<same-name>.png
```

### Cross-dissolve for EO time-series scrubs

```bash
# Input 1: date-a.png, Input 2: date-b.png
# 3s hold on A, 4s dissolve to B, 3s hold on B = 10 seconds total
ffmpeg \
  -loop 1 -t 10 -i date-a.png \
  -loop 1 -t 10 -i date-b.png \
  -filter_complex \
  "[0:v][1:v]xfade=fade:duration=4:offset=3[v]" \
  -map "[v]" \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -an \
  -r 30 -vf "scale=1920:1080" \
  eo-scrub.mp4
```

---

## File Size Budgets

Hard budgets by motion pattern:

| Pattern | Target | Hard cap |
|---|---|---|
| LIDAR sweep | 3 MB | 4 MB |
| EO scrub | 2 MB | 3 MB |
| RF waterfall | 2 MB | 2.5 MB |
| Splat orbit | 4 MB | 5 MB |
| Dither variant | N/A (runtime) | — |
| Root-network grow | 1.5 MB | 2 MB |
| Seedance mimic | 3 MB | 4 MB |

If an asset exceeds its hard cap, the fix is almost always one of:
1. Lower bitrate: `-crf 26` instead of `-crf 23`.
2. Lower frame rate: 24 fps instead of 30 fps.
3. Shorter duration: cut 2–3 seconds off the hold frames.
4. Lower resolution for delivery: 1280×720 with a 1920×1080 poster.

Do not ship 10 MB hero videos. Mobile bandwidth is the bottleneck.

---

## Color Space and Grading

All motion ships in Rec.709 color space. The Quatro palette is encoded in the source — no post-grading should shift outside the palette.

If a source clip arrives in Rec.2020 or sRGB:

```bash
ffmpeg -i input.mov \
  -vf "colorspace=all=bt709:iall=bt2020:fast=1" \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -an \
  output.mp4
```

---

## Audio

Audio is off. Across every motion asset on the site.

Reasons:
- Autoplay policies block sound on most browsers.
- Audio on hero surfaces is intrusive.
- The site's tone is operational, not cinematic.
- Every MB of audio is a MB not spent on video quality.

If a motion asset arrives with an audio track, strip it with `-an` in the ffmpeg recipe.

---

## Poster Frame Discipline

Every motion asset has a poster frame stored at `motion/<pattern>/poster/<same-name>.png`. The poster frame:

- Is the single still that appears before autoplay kicks in, and on mobile devices that defer autoplay.
- Must be a representative frame — usually 2–3 seconds into the clip.
- Must pass the same notation and caption rules as any other still sensor asset.
- Target file size: under 400 KB at 1920×1080.

The poster is a first-class asset. Do not ship a motion asset without a poster.

---

## HTML Embed Default

Default embed code for any `<video>` on the site:

```html
<video
  src="/motion/lidar-sweep/sit-gs04-20260405.mp4"
  poster="/motion/lidar-sweep/poster/sit-gs04-20260405.png"
  autoplay
  muted
  loop
  playsinline
  preload="metadata"
  class="img-technical"
></video>
```

Notes:
- `preload="metadata"` — avoid preloading the whole video on page load.
- `class="img-technical"` — apply the luminosity blend at rest, full color on hover, matching still images.
- `playsinline` — required for iOS autoplay.

---

## Validation

Before shipping, run:

```bash
# Check duration, bitrate, and audio
ffprobe -v error -show_format -show_streams input.mp4

# Expected output:
#   duration: 15.0 ± 1s for most patterns
#   bit_rate: 2000000–4000000
#   no audio stream
```

If any value is out of spec, re-encode with the canonical recipe above.
