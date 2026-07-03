import {
    FavTrack,
    FavArtist
} from "@/components/spotify_profile";

export default function Dashboard() {
    return (
        <div className="p-10">
            <h1 className="pb-5 mb-10 text-7xl font-bold border-b-2 border-neutral-700">Dashboard</h1>

            <div className="flex flex-col md:flex-row md:gap-25 justify-center">
                <div className="flex-col">
                    <h2 className="mb-5 text-2xl md:text-3xl lg:text-5xl text-amber-400 theme-transition">Your #1 Track</h2>
                    <div className="items-center border-3 border-amber-400 gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-2 mb-10 w-75 theme-transition">
                        <FavTrack />
                    </div>
                </div>

                <div className="flex-col">
                    <h2 className="mb-5 text-2xl md:text-3xl lg:text-5xl text-amber-400 theme-transition">Your #1 Artist</h2>
                    <div className="items-center border-3 border-amber-400 gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-2 mb-10 w-75 theme-transition">
                        <FavArtist />
                    </div>
                </div>
            </div>
        </div>
    )
}