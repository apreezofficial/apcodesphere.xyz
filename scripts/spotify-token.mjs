// One-time helper: prints a Spotify refresh token for SPOTIFY_REFRESH_TOKEN.
// Run: node scripts/spotify-token.mjs   (needs SPOTIFY_CLIENT_ID/SECRET in .env.local)
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => l.split('=').map((s, i) => (i ? s.trim() : s.trim())))
    .map(([k, ...v]) => [k, v.join('=')]),
);
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = env;
const REDIRECT_URI = 'http://127.0.0.1:3000/callback';
const SCOPES = 'user-read-currently-playing user-read-recently-played';

const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
  });

console.log('\nOpen this URL in your browser and approve access:\n\n' + authUrl + '\n');

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:3000');
  if (url.pathname !== '/callback') {
    res.writeHead(404).end();
    return;
  }
  const code = url.searchParams.get('code');
  if (!code) {
    res.writeHead(400).end('No code returned from Spotify.');
    return;
  }
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const r = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: REDIRECT_URI }),
  });
  const data = await r.json();
  if (!data.refresh_token) {
    console.error('Token exchange failed:', data);
    res.writeHead(500).end('Token exchange failed. See terminal.');
  } else {
    console.log('\nSPOTIFY_REFRESH_TOKEN=' + data.refresh_token + '\n');
    res.writeHead(200, { 'Content-Type': 'text/plain' }).end('Done. Check your terminal and close this tab.');
  }
  setTimeout(() => process.exit(0), 500);
}).listen(3000, '127.0.0.1', () => console.log('Waiting for Spotify redirect on http://127.0.0.1:3000/callback ...'));
