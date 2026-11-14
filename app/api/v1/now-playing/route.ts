import { NextRequest, NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

/**
 * Public API for the spotifyonwebsiteap package.
 * Requires an API key in the `x-api-key` header. Valid keys come from the
 * SPOTIFY_WIDGET_API_KEYS env var (comma-separated).
 */
export async function GET(req: NextRequest) {
  const allowed = (process.env.SPOTIFY_WIDGET_API_KEYS ?? '')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);
  const key = req.headers.get('x-api-key');

  if (!key || !allowed.includes(key)) {
    return NextResponse.json({ error: 'Invalid or missing API key' }, { status: 401 });
  }

  try {
    return NextResponse.json(await getNowPlaying(), {
      headers: { 'Cache-Control': 'public, max-age=0, s-maxage=20' },
    });
  } catch {
    return NextResponse.json({ error: 'Spotify is unavailable' }, { status: 502 });
  }
}
