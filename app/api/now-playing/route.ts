import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENT_URL = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken(): Promise<string> {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    throw new Error('Spotify env vars are not set');
  }
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

type SpotifyTrack = {
  name: string;
  external_urls: { spotify: string };
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
};

function toPayload(track: SpotifyTrack) {
  return {
    title: track.name,
    artist: track.artists.map((a) => a.name).join(', '),
    album: track.album.name,
    albumArt: track.album.images[1]?.url ?? track.album.images[0]?.url ?? null,
    url: track.external_urls.spotify,
  };
}

export async function GET() {
  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const nowRes = await fetch(NOW_PLAYING_URL, { headers, cache: 'no-store' });
    if (nowRes.status === 200) {
      const data = (await nowRes.json()) as { is_playing: boolean; item: SpotifyTrack | null };
      if (data.item && data.is_playing) {
        return NextResponse.json({ isPlaying: true, track: toPayload(data.item) });
      }
    }

    // Nothing playing right now: fall back to the most recently played track.
    const recentRes = await fetch(RECENT_URL, { headers, cache: 'no-store' });
    if (recentRes.ok) {
      const data = (await recentRes.json()) as { items: { track: SpotifyTrack }[] };
      if (data.items?.[0]) {
        return NextResponse.json({ isPlaying: false, track: toPayload(data.items[0].track) });
      }
    }

    return NextResponse.json({ isPlaying: false, track: null });
  } catch {
    return NextResponse.json({ isPlaying: false, track: null, error: true }, { status: 200 });
  }
}
