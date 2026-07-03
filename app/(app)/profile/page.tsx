"use client"

import SignOut from "@/components/sign-out"
import { useSpotifyProfile } from "@/lib/spotify-access-token"
import {
  TopTracks,
  TopArtists,
  ListeningTime
} from "@/components/spotify_profile"

export default function Profile() {
  const { data: profile } = useSpotifyProfile();

  return (
    <div className="p-4 md:p-10">
      <h1 className="pb-5 mb-10 dark:text-white text-4xl md:text-5xl lg:text-7xl font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Profile</h1>

      <h2 className="mb-5 text-2xl md:text-3xl lg:text-5xl text-black dark:text-white">Account</h2>
      <div className="flex flex-col md:flex-row items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">
        <img
          src={profile?.images[0]?.url ?? null}
          alt={profile?.display_name ?? "User avatar"}
          className="rounded-full"
          width={100}
        />

        <div className="flex flex-col pl-2">
          <p className="text-xl text-center lg:text-left">{profile?.display_name}</p>
          <p className="text-xs text-gray-500">{profile?.email}</p>
        </div>
        <SignOut />
      </div>

      <h2 className=" mb-5 text-2xl md:text-3xl lg:text-5xl dark:text-white theme-transition">
        Your Top Tracks
      </h2>

      <div className="pb-10 text-black dark:text-white">
        <TopTracks />
      </div>

      <h2 className=" mb-5 text-2xl md:text-3xl lg:text-5xl dark:text-white theme-transition">
        Your Top Artists
      </h2>

      <div className="pb-10 text-black dark:text-white">
        <TopArtists />
      </div>

      <h2 className=" mb-5 text-2xl md:text-3xl lg:text-5xl dark:text-white theme-transition">
        Your Listening Time
      </h2>

      <div className="pb-10 text-black dark:text-white">
        <ListeningTime />
      </div>

    </div>
  )
}