"use client"

import SignOut from "@/components/sign-out";
import { ThemeProvider } from "next-themes"
import { useSpotifyProfile } from "@/lib/spotify-access-token";
import SpotifyIDs from "./settings/spotify-ids";
import SpotifyRange from "@/components/settings/spotify-settings"



export default function Settings() {
    return (
        <div>
            <SpotifySettings />
            <TeamSettings />
            <PreferencesSettings />
        </div>
    );
}

function SpotifySettings() {

    const { data: profile } = useSpotifyProfile();

    return (
        <div>
            <h2 className="mb-5 text-5xl text-black dark:text-white theme-transition">Spotify</h2> {/* name, email, pfp, time range options */}

            <pre>{JSON.stringify(profile, null, 2)}</pre>

            {/* profile information (picture, name, email, sign out) */}
            <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-5 theme-transition">
                <img
                    src={profile?.images[0]?.url ?? ""}
                    alt={profile?.display_name ?? "User avatar"}
                    className="rounded-full w-20 h-20"
                />

                <div className="flex flex-col pl-2">
                    <p className="text-xl">{profile?.display_name}</p>
                    <p className="text-xs text-gray-500">{profile?.email}</p>
                </div>

                <SignOut />
            </div>

            {/* IDs (profile link, account id) */}
            <SpotifyIDs />

            {/* time range setting */}
            <SpotifyRange />

        </div>
    );
}

function TeamSettings() {
    return (
        <div>
            <h2 className="mt-10 mb-5 text-5xl text-black dark:text-white theme-transition">Team</h2> {/* current team, member count */}
            <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">

            </div>
        </div>
    );
}

function PreferencesSettings() {
    return (
        <div>
            <h2 className="mb-5 text-5xl text-black dark:text-white theme-transition">Preferences</h2> {/* profile */}
            <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition">

            </div>
        </div>
    );
}