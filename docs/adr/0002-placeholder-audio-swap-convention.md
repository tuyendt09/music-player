# Placeholder audio: silent clips at real durations, swapped by filename

Real AI-generated tracks don't exist yet, but the player must be fully demonstrable now. We ship **silent MP3s whose lengths equal each Song's displayed duration**, so play/pause/seek/progress all behave correctly without any misleading "fake music" sound (tone loops were rejected as they could be mistaken for the sample).

**Convention:** each Song's audio lives at a fixed path (e.g. `public/audio/<song-slug>.mp3`) referenced from the single song data file. To go live, drop a real MP3 at the same path/filename and, if its length differs, update the `duration` field in the data file. No code changes needed.
