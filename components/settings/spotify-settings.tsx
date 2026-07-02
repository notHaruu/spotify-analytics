"use client"

import { useSettings } from "@/lib/settings"

export default function SpotifyRange() {
  const { settings, updateSetting } = useSettings();

  const options = [
    { label: "Last 4 Weeks", value: "short_term" },
    { label: "Last 6 Months", value: "medium_term" },
    { label: "All Time", value: "long_term" },
  ] as const;

  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 p-4 rounded-lg space-y-2 theme-transition">
      <h2 className="text-xl font-bold mb-3">
        Spotify Time Range
      </h2>

      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => updateSetting("spotifyTimeRange", opt.value)}
          className={`block w-full text-left p-2 rounded transition ${
            settings.spotifyTimeRange === opt.value
              ? "bg-green-500 cursor-pointer theme-transition"
              : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 cursor-pointer theme-transition"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}