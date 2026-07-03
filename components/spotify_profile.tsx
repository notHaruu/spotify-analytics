"use client"

import { authClient } from '@/auth-client'
import { useQuery } from '@tanstack/react-query'
import { useSettings } from "@/lib/settings"

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
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3 theme-transition">
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
            className="w-10 h-10 md:w-12 md:h-12 rounded"
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

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= favorite track =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function FavTrack() {

  const { settings } = useSettings();
  const { data: topTracks } = useQuery({
    queryKey: ["spotify-top-tracks", settings.spotifyTimeRange],
    queryFn: async () => {
      const { data } = await authClient.getAccessToken({ providerId: "spotify" });
      const accessToken = data?.accessToken;
      const res = await fetch(
        `/api/spotify/me/top/tracks?time_range=${settings.spotifyTimeRange}&limit=1`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      return res.json();
    },
  });

  return (
    <div className="p-2 items-center bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3 theme-transition">
      {topTracks?.items?.map((track: any) => (
        <a
          key={track.id}
          href={track.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <img
            src={track.album.images?.[0]?.url}
            className="w-30 h-30 md:w-55 md:h-55 rounded-lg"
          />

          <div className="flex flex-col pt-5">
            <span className="text-lg font-medium">{track.name}</span>
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
      const { data } = await authClient.getAccessToken({ providerId: 'spotify' });
      const accessToken = data?.accessToken;
      const res = await fetch(
        `/api/spotify/me/top/artists?&limit=5&time_range=${settings.spotifyTimeRange}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log(JSON.stringify(topArtists, null, 2));

      return res.json();
    },
  });

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3 theme-transition">

      {topArtists?.items?.map((artist: any) => (
        <a
          key={artist.id}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-101"
        >
          <img
            src={artist.images?.[0]?.url}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-medium">{artist.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= favorite artist =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function FavArtist() {
  const { settings } = useSettings();
  const { data: topArtists } = useQuery({
    queryKey: ['spotify-top-artists', settings.spotifyTimeRange],
    queryFn: async () => {
      const { data } = await authClient.getAccessToken({ providerId: 'spotify' });
      const accessToken = data?.accessToken;
      const res = await fetch(
        `/api/spotify/me/top/artists?&time_range=${settings.spotifyTimeRange}&limit=1`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log(JSON.stringify(topArtists, null, 2));

      return res.json();
    },
  });

  return (
    <div className="p-4 items-center bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3 theme-transition">

      {topArtists?.items?.map((artist: any) => (
        <a
          key={artist.id}
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-101"
        >
          <img
            src={artist.images?.[0]?.url}
            className="w-30 h-30 md:w-55 md:h-55 rounded-lg"
          />

          <div className="flex flex-col pt-5 pb-5">
            <span className="text-lg">{artist.name}</span>
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
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg theme-transition">
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

// {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= top genres =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

// export function TopGenres() {

//   const { settings } = useSettings();
//   const { data: topArtists } = useQuery({
//     queryKey: ['spotify-top-genres', settings.spotifyTimeRange, 50],
//     queryFn: async () => {
//       const { data } = await authClient.getAccessToken({
//         providerId: 'spotify',
//       });

//       const accessToken = data?.accessToken;

//       const res = await fetch(
//         `/api/spotify/me/top/artists?time_range=${settings.spotifyTimeRange}&limit=50`,
//         { headers: { Authorization: `Bearer ${accessToken}` } }
//       );

//       return res.json();
//     },
//   });

//   const genreCounts: Record<string, number> = {};

//   topArtists?.items?.forEach((artist: any, index: number) => {
//     const weight = 50 - index;
//     artist.genres?.forEach((genre: string) => {
//       genreCounts[genre] = (genreCounts[genre] || 0) + weight
//     })
//   })

//   const topGenres = Object.entries(genreCounts)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 5)

//   return (
//     <div className="p-4 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg space-y-3 theme-transition">
//       {topGenres?.map(([genre, score], index) => (
//         <div
//           key={genre}
//           className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700"
//         >
//           <span>
//             #{index + 1} {genre} hello
//           </span>

//           <span className="text-sm text-gray-500">
//             {score}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }