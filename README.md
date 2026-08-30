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

## Deploy — Cloudflare Pages

**Option A — Git (recommended):** push this repo, then in the Cloudflare dashboard →
*Workers & Pages → Create → Pages → Connect to Git* and use:

| Setting              | Value          |
| -------------------- | -------------- |
| Framework preset     | `Astro`        |
| Build command        | `npm run build`|
| Build output directory | `dist`       |

**Option B — Direct upload:** run `npm run build`, then drag the `dist/` folder into
*Workers & Pages → Create → Pages → Upload assets*.

Works the same on Vercel / Netlify / GitHub Pages — just build and serve `dist/`.

## Editing the content

Everything lives in **one file**: [`src/data/songs.ts`](src/data/songs.ts). Each song has a title,
genre, mood tags, BPM, duration, concept, description, campaign fit, and full lyrics.

### Swapping in the real audio

Audio files live in `public/audio/<slug>.mp3`, matching each song's `slug`.

1. Drop the real MP3 at the **same path/filename** (e.g. `public/audio/lua-trong-xuong.mp3`).
2. If its length differs from the placeholder, update `durationSeconds` for that song in
   `src/data/songs.ts`.
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
├── data/songs.ts            ← the single source of truth (edit here)
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
