import { NextResponse } from 'next/server';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(await getNowPlaying());
  } catch {
    return NextResponse.json({ isPlaying: false, track: null, error: true });
  }
}
