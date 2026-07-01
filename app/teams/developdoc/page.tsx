export default async function DevelopDocPage() {
    return (
        <div className="p-10">
            <h1 className="text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">DevelopDoc</h1>
            
            <h2 className="mb-5 text-5xl text-black dark:text-white">Average Listening Time</h2>
            <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition"></div>

            <h2 className="mb-5 text-5xl text-black dark:text-white">Top Genres</h2>
            <div className="flex items-center gap-3 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg p-5 mb-10 theme-transition"></div>
        </div>
    )
}