'use client';

import { authClient } from '@/auth-client';
import { useQuery } from '@tanstack/react-query';
import { useSettings } from "@/lib/settings";

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= top tracks =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function TopTracks() {

  const { settings } = useSettings();
  const { data: topTracks } = useQuery({
    queryKey: ["spotify-top-tracks", settings.spotifyTimeRange],
    queryFn: async () => {
      const { data } = await authClient.getAccessToken({ providerId: "spotify" });
      const accessToken = data?.accessToken;
      const res = await fetch(
        `/api/spotify/me/top/tracks?time_range=${settings.spotifyTimeRange}&limit=5`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return res.json();
    },
  });

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3">
      {topTracks?.items?.map((track: any) => (
        <a
          key={track.id}
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <img
            src={track.album.images?.[0]?.url}
            className="w-12 h-12 rounded"
          />

          <div className="flex flex-col">
            <span className="font-medium">{track.name}</span>
            <span className="text-sm text-gray-400">
              {track.artists.map((a: any) => a.name).join(", ")}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= top artists =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function TopArtists() {
  const { settings } = useSettings();
  const { data: topArtists } = useQuery({
    queryKey: ['spotify-top-artists', settings.spotifyTimeRange],
    queryFn: async () => {
      const { data } = await authClient.getAccessToken({
        providerId: 'spotify',
      });

      const accessToken = data?.accessToken;

      const res = await fetch(
        `/api/spotify/me/top/artists?time_range=${settings.spotifyTimeRange}&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return res.json();
    },
  });

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3">

      {topArtists?.items?.map((artist: any) => (
        <a
          key={artist.id}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-101 theme-transition"
        >
          <img
            src={artist.images?.[0]?.url}
            className="w-12 h-12 rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-medium">{artist.name}</span>
            <span className="text-sm text-gray-400">
              {artist.genres?.slice(0, 2).join(', ')}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= listening time =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function ListeningTime() {
  const { data: recentlyPlayed } = useQuery({
    queryKey: ['spotify-recently-played'],
    queryFn: async () => {
      const { data } = await authClient.getAccessToken({ providerId: 'spotify' });
      const accessToken = data?.accessToken;
      const res = await fetch('/api/spotify/me/player/recently-played?limit=50',
        { headers: { Authorization: `Bearer ${accessToken}` } }
      ); return res.json();
    },
  });

  const listeningTime =
    (recentlyPlayed?.items?.reduce(
      (sum: number, item: any) => sum + item.track.duration_ms,
      0
    ) ?? 0) / 60000;

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg">
      <h2 className="text-lg font-semibold">
        Recent Listening Time
      </h2>

      <p className="text-gray-400">
        {listeningTime.toFixed(1)} minutes
      </p>

      <p className="text-xs text-gray-500">
        Based on your last 50 plays
      </p>
    </div>
  )
}