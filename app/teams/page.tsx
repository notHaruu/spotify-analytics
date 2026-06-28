"use client"


import { redirect } from "next/navigation"
import { getUserTeam } from "@/lib/teams"
import { useSpotifyProfile } from "@/lib/spotify-access-token"

export default async function TeamsPage() {
    const { data: spotifyProfile } = useSpotifyProfile();

    const team = getUserTeam(spotifyProfile?.id);

    if (team && team.name === "DevelopDoc") {
        redirect("/teams/developdoc")
    }

    return (
        <div className="p-10">
            <h1 className="text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Teams</h1>    
            <pre>{JSON.stringify(team?.name)}</pre>
        </div>
    )
}