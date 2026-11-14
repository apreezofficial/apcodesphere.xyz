'use client';

import { useEffect, useState } from 'react';

type Payload = {
  isPlaying: boolean;
  track: { title: string; artist: string; album: string; albumArt: string | null; url: string } | null;
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
      <a
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {track.albumArt && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={track.albumArt} alt="" width={56} height={56} className="rounded-md" />
        )}
        <span className="min-w-0">
          <span className="block font-semibold truncate">{track.title}</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400 truncate">{track.artist}</span>
        </span>
        {isPlaying && <span className="ml-auto text-green-600 text-sm">● Live</span>}
      </a>
    </div>
  );
}
