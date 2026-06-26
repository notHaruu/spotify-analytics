import { auth } from "@/auth"
import { headers } from "next/headers"
import SignOut from "@/components/sign-out"
import { redirect } from "next/navigation"
import { getUserTeam  } from "@/lib/teams"
import {
  TopTracks,
  TopArtists,
  ListeningTime
} from "@/components/spotify_profile"

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/");
  }

  const team = getUserTeam(session.user.id);             

  return (
    <div className="p-10">
      <h1 className="pb-5 mb-10 dark:text-white text-7xl font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Profile</h1>

      <h2 className="mb-5 text-5xl text-black dark:text-white">Account</h2>
      <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10">
        <img
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? "User avatar"}
          className="rounded-full w-20 h-20"
        />

        <div className="flex flex-col pl-2">
          <p className="text-xl">{session?.user?.name}</p>
          <p className="text-xs text-gray-500">{session?.user?.email}</p>
        </div>

        <SignOut />
      </div>

      <h2 className=" mb-5 text-5xl dark:text-white">
        Your Top Tracks
      </h2>

      <div className="pb-10 dark:text-white">
        <TopTracks />
      </div>

      <h2 className=" mb-5 text-5xl dark:text-white">
        Your Top Artists
      </h2>

      <div className="pb-10 dark:text-white">
        <TopArtists />
      </div>

      <h2 className=" mb-5 text-5xl dark:text-white">
        Your Listening Time
      </h2>

      <div className="pb-10 dark:text-white">
        <ListeningTime />
      </div>

    </div>
  )
}