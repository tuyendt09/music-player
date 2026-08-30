# Castrol · Demo Âm Nhạc AI

A static, read-only **showcase** that presents AI-generated song samples to the Castrol Vietnam
marketing team so they can listen to and compare candidate music directions for the mechanic-community
campaign. No auth, no backend, no database, no API — pure static frontend.

> This is **not** the campaign platform (KOLs, the mechanic challenge, and community voting live
> elsewhere). It only covers **step 01 — the AI music**.

## Stack

- [Astro](https://astro.build) (static output, near-zero JS)
- Vanilla CSS design system (`src/styles/global.css`)
- One small client script for the audio player + modal (inline in `src/pages/index.astro`)

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # → dist/  (deployable static site)
npm run preview    # serve the built dist/ locally
```

## Deploy — GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every
push to `main` builds the site and publishes it.

**One-time setup:** in the GitHub repo → *Settings → Pages → Build and deployment → Source*,
choose **GitHub Actions**. (No branch to pick — the workflow does the publishing.)

After that, push to `main`; the **Deploy to GitHub Pages** action runs and the site goes live at:

```
https://tuyendt09.github.io/music-player/
```

This is a **project** site, so it's served under the `/music-player/` subpath. That path is set in
[`astro.config.mjs`](astro.config.mjs) (`site` + `base`) and applied to every asset via
`withBase()` in [`src/utils/base.ts`](src/utils/base.ts). If you rename the repo or attach a custom
domain, update `site`/`base` to match (a root custom domain uses `base: '/'`).

> **Other hosts:** the build output is a plain static `dist/` folder, so it also works on
> Cloudflare Pages / Netlify / Vercel (build `npm run build`, serve `dist`). Those serve from the
> domain root — set `base: '/'` for them.

## Editing the content

All the content lives in **one plain-text file you can edit by hand**:
[`src/data/songs.yaml`](src/data/songs.yaml). Each song has a title, genre, mood tags, BPM,
duration, concept, description, campaign fit, and full lyrics — the file starts with a comment
explaining every field. Edit the YAML, rebuild, done; no code to touch.

> The build reads and checks `songs.yaml` (via `src/data/songs.ts`). If a field is missing or
> mistyped, the build stops with a message naming the song and the field, so a broken edit can't
> ship.

### Swapping in the real audio

Audio files live in `public/audio/<slug>.mp3`, matching each song's `slug`.

1. Drop the real MP3 at the **same path/filename** (e.g. `public/audio/lua-trong-xuong.mp3`).
2. If its length differs from the placeholder, update `durationSeconds` for that song in
   `src/data/songs.yaml`.
3. Rebuild. No code changes needed.

The placeholders shipped today are **silent MP3s** whose lengths match `durationSeconds`, so the
player (play / pause / seek / progress / next-prev) behaves exactly as it will with real tracks —
there is simply no sound. Regenerate them any time with:

```bash
bash scripts/gen-audio.sh   # requires ffmpeg
```

## Project map

```
src/
├── data/songs.yaml          ← the single source of truth (edit here)
├── data/songs.ts            ← typed loader that reads + validates songs.yaml
├── layouts/Base.astro       ← page shell, fonts, ambient background
├── components/
│   ├── SongRow.astro        ← one row in the song list
│   ├── SongModal.astro      ← lyrics / concept / campaign-fit panel
│   └── MiniPlayer.astro     ← persistent bottom player
├── pages/index.astro        ← the single page + player/modal script
└── styles/global.css        ← design system
public/audio/*.mp3           ← track files (placeholder → real)
```

See `CONTEXT.md` for the domain glossary and `docs/adr/` for the key decisions.
