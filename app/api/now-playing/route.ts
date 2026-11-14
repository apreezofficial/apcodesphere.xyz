import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(await getNowPlaying());
  } catch (err) {
    // Message names the failing step (e.g. missing env vars or token status); no secrets.
    return NextResponse.json({ isPlaying: false, track: null, error: (err as Error).message });
  }
}
