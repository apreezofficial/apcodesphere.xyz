'use client';

import { useEffect, useState } from 'react';

type Payload = {
  isPlaying: boolean;
  track: { id: string; title: string; artist: string; album: string; albumArt: string | null; url: string } | null;
};

/** Live Spotify status pulled from /api/now-playing (refreshes every 30s). */
export function NowListening() {
  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = () =>
      fetch('/api/now-playing', { cache: 'no-store' })
        .then((r) => r.json())
        .then((d: Payload) => !cancelled && setData(d))
        .catch(() => {});
    load();
    const id = setInterval(load, 30_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (!data?.track) {
    return <p className="mb-4">I'm not listening to anything right now.</p>;
  }

  const { track, isPlaying } = data;
  return (
    <div className="mb-4">
      <p className="mb-3">
        {isPlaying ? 'Right now I am listening to' : 'Last I listened to'}
      </p>
      <iframe
        key={track.id}
        title={`Spotify player: ${track.title}`}
        src={`https://open.spotify.com/embed/track/${encodeURIComponent(track.id)}?utm_source=generator`}
        width="100%"
        height="152"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ border: 0, borderRadius: 12 }}
      />
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {track.title} by {track.artist}
        {isPlaying && <span className="text-green-600"> · Live</span>}
      </p>
    </div>
  );
}
