import { authClient } from "@/auth-client"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"


export default async function LoginPage() {
    const signIn = async () => {
        await authClient.signIn.social({
            provider: "spotify",
        });
    };

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session?.user) {
        redirect("/profile");
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <button
                onClick={signIn}
                className="px-6 py-3 bg-green-500 text-black rounded-lg"
            >
                Login with Spotify
            </button>
        </div>
    );
}