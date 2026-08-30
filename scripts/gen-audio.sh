#!/usr/bin/env bash
# Generate silent placeholder MP3s whose lengths match each song's durationSeconds.
# The player behaves exactly as it will with real tracks (play/pause/seek/progress);
# there is simply no sound. To go live, replace these files with the real MP3s
# (same filename in public/audio/) — see src/data/songs.ts.
#
# Requires ffmpeg. Run from the repo root:  bash scripts/gen-audio.sh
set -euo pipefail

OUT="public/audio"
mkdir -p "$OUT"

# slug:seconds — keep in sync with src/data/songs.ts
TRACKS=(
  "dau-trong-huyet-quan:178"
  "lua-trong-xuong:204"
  "vong-tua-may:161"
  "ban-tay-lam-dau:227"
  "no-may-len:192"
)

for t in "${TRACKS[@]}"; do
  slug="${t%%:*}"
  secs="${t##*:}"
  echo "→ ${slug}.mp3 (${secs}s silent)"
  ffmpeg -y -hide_banner -loglevel error \
    -f lavfi -i "anullsrc=channel_layout=stereo:sample_rate=44100" \
    -t "$secs" -c:a libmp3lame -b:a 64k \
    "$OUT/${slug}.mp3"
done

echo "Done. ${#TRACKS[@]} placeholder tracks in $OUT/"
