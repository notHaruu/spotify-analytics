import Settings from "@/components/settings";
import { auth } from "@/auth"
import { headers } from "next/headers"

export default async function SettingsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
      });

    return (
    <div className="p-10">
        <h1 className="pb-5 mb-10 dark:text-white text-7xl font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Settings</h1>
        <Settings />
        <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
    )
}