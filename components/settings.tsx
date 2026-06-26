import { auth } from "@/auth";
import { headers } from "next/headers";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";
import { ThemeProvider } from "next-themes"
import SpotifyRange from "@/components/settings/spotify-settings"

export default async function Settings() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    
    if (!session?.user) {
        redirect("/");
    }
    
    return (
      <div>
        <SpotifySettings />
        <TeamSettings />
        <PreferencesSettings />
      </div>
    );
  }
  
    async function SpotifySettings() {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        return (
            <div>
                <h2 className="mb-5 text-5xl text-black dark:text-white theme-transition">Spotify</h2> {/* name, email, pfp, time range options */}

                <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-5">
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
                <SpotifyRange />
            </div>
        );
    }
  
    async function TeamSettings() {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        return (
            <div>
                <h2 className="mt-10 mb-5 text-5xl text-black dark:text-white theme-transition">Team</h2> {/* current team, member count */}
                <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10">
                    
                </div>
            </div>
        );
    }

    async function PreferencesSettings() {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        return (
            <div>
                <h2 className="mb-5 text-5xl text-black dark:text-white theme-transition">Preferences</h2> {/* profile */}
            </div>
        );
    }