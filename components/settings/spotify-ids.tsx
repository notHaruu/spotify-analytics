import { useSpotifyProfile } from "@/lib/spotify-access-token"
import { useState } from "react"
import Link from "next/link"
import { ClipboardCopy } from "lucide-react"

export default function SpotifyIDs() {

    const { data: profile } = useSpotifyProfile();

    const userID = profile?.id ?? "";
    const accountID = profile?.account_id ?? "";

    const [visible, setVisible] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="group w-full bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-4 mb-5 theme-transition">
            <div>
                <h2 className="inline-flex pr-5 text-xl font-bold mb-3">Profile IDs</h2><span onClick={() => setShowInfo(!showInfo)} className="cursor-pointer">?</span>
            </div>
            <div className="flex-col inline-flex gap-2 w-full">
                <div className="group inline-block flex items-center bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white rounded-lg p-5 theme-transition">
                    <span>User ID: </span>
                    <button onClick={() => setVisible(!visible)} className="max-w-0 whitespace-nowrap transition-all duration-200 cursor-pointer">{visible ? userID : "*".repeat(userID.length)}</button>
                    <ClipboardCopy className="float-right cursor-pointer" onClick={() => navigator.clipboard.writeText(profile?.id ?? "")} />
                </div>
                {showInfo && (
                    <div className="mt-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 p-3 text-sm text-gray-400 theme-transition">
                        This ID is used by Spotify to identify your account and is linked to your <Link href={profile?.external_urls?.spotify} target="_blank" className="underline text-lime-500">profile</Link>. On this website, we use it to pull your analytics, like Top Tracks, Listening Time etc.
                    </div>
                )}
                <div className="group inline-block flex items-center bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white rounded-lg p-5 theme-transition">
                    <span>Account ID: </span>
                    <button onClick={() => setVisible(!visible)} className="max-w-0 whitespace-nowrap transition-all duration-200 cursor-pointer">{visible ? accountID : "*".repeat(accountID.length)}</button>
                    <ClipboardCopy className="float-right cursor-pointer" onClick={() => navigator.clipboard.writeText(profile?.account_id ?? "")} />
                </div>
                {showInfo && (
                    <div className="mt-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 p-3 text-sm text-gray-400 theme-transition">
                        This ID is a public, immutable, pseudoanonymous ID that is used to identify your account. It never changes over the liftime of your account and is stable. On this website, we use it for <Link href={"https://developer.spotify.com/documentation/open-access/tutorials/account"} target="_blank" className="underline text-lime-500">account linking</Link>, like making sure your account is a part of the teams you are in.
                    </div>
                )}
            </div>
        </div>
    )
}