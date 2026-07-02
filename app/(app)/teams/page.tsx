"use client"

import { getUserTeams } from "@/lib/teams"
import { useSpotifyProfile } from "@/lib/spotify-access-token"
import { useRouter } from "next/navigation"

export default function TeamsPage() {
    const { data: spotifyProfile } = useSpotifyProfile();
    const teams = getUserTeams(spotifyProfile?.account_id ?? "");
    const router = useRouter();

    return (
        <div className="p-10">
            <h1 className="text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Teams</h1>
            <div className="flex gap-2 flex-col">
                {teams.map((team) => (
                    <button
                    key={team.id}
                    type="button"
                    onClick={() => router.push(`/teams/${team.id}`)}
                    className="bg-green-500 rounded-lg w-30 text-white font-bold p-1 cursor-pointer">
                        {team.name}
                    </button>
                ))}
            </div>
        </div>
    )
}