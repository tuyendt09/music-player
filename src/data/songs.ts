// ─────────────────────────────────────────────────────────────────────────
//  SONG DATA — typed loader for the showcase.
//
//  You almost certainly DON'T need to edit this file. All the content lives in
//  songs.yaml (right next to this file) — edit that instead. This module just
//  reads songs.yaml at build time, checks every field is present and the right
//  type, and hands the rest of the site a clean, typed `songs` array.
//
//  If a field is missing or misspelled in the YAML, the build stops with a
//  message naming the song and the field — so a broken edit can never ship.
// ─────────────────────────────────────────────────────────────────────────

import yaml from 'js-yaml';
// `?raw` inlines songs.yaml's contents as a string at build time — no runtime
// file access, so it survives bundling and stays fully static.
import songsYaml from './songs.yaml?raw';

export interface Song {
  /** Stable slug — also the audio filename: public/audio/<slug>.mp3 */
  slug: string;
  /** Song title (Vietnamese). */
  title: string;
  /** Literal English gloss of the title, shown small for non-Vietnamese stakeholders. */
  titleGloss: string;
  /** Music direction / genre label. */
  genre: string;
  /** Short mood / tempo chips for at-a-glance comparison. */
  moodTags: string[];
  /** Beats per minute. */
  bpm: number;
  /** Track length in seconds — must match the audio file. */
  durationSeconds: number;
  /** One line: the creative idea behind the direction. */
  concept: string;
  /** Short pitch description (1–2 sentences). */
  description: string;
  /** How this direction could serve the campaign. */
  campaignFit: string;
  /** Full lyrics (Vietnamese). Blank line = stanza break. */
  lyrics: string;
}

// ── Load + validate songs.yaml at build time ──────────────────────────────
function fail(message: string): never {
  throw new Error(`songs.yaml: ${message}`);
}

function parseSongs(): Song[] {
  const raw = yaml.load(songsYaml);
  if (!Array.isArray(raw)) {
    fail('expected a list of songs at the top level (each item starts with "- slug:").');
  }

  const stringFields = [
    'slug',
    'title',
    'titleGloss',
    'genre',
    'concept',
    'description',
    'campaignFit',
    'lyrics',
  ] as const;
  const numberFields = ['bpm', 'durationSeconds'] as const;

  const seen = new Set<string>();

  return (raw as unknown[]).map((entry, i) => {
    const where = () => {
      const s = (entry as { slug?: unknown })?.slug;
      return typeof s === 'string' && s ? `song "${s}"` : `song #${i + 1}`;
    };
    if (typeof entry !== 'object' || entry === null) {
      fail(`${where()} is not a set of fields — check the indentation.`);
    }
    const o = entry as Record<string, unknown>;

    for (const field of stringFields) {
      if (typeof o[field] !== 'string' || (o[field] as string).trim() === '') {
        fail(`${where()} is missing text field "${field}".`);
      }
    }
    for (const field of numberFields) {
      if (typeof o[field] !== 'number' || !Number.isFinite(o[field])) {
        fail(`${where()} needs a number for "${field}".`);
      }
    }
    if (
      !Array.isArray(o.moodTags) ||
      o.moodTags.length === 0 ||
      !o.moodTags.every((t) => typeof t === 'string' && t.trim() !== '')
    ) {
      fail(`${where()} needs "moodTags" as a list of at least one text tag.`);
    }

    const slug = o.slug as string;
    if (seen.has(slug)) fail(`duplicate slug "${slug}" — each song needs a unique slug.`);
    seen.add(slug);

    return {
      slug,
      title: o.title as string,
      titleGloss: o.titleGloss as string,
      genre: o.genre as string,
      moodTags: o.moodTags as string[],
      bpm: o.bpm as number,
      durationSeconds: o.durationSeconds as number,
      concept: o.concept as string,
      description: o.description as string,
      campaignFit: o.campaignFit as string,
      lyrics: (o.lyrics as string).replace(/\s+$/, ''),
    };
  });
}

export const songs: Song[] = parseSongs();

export function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
