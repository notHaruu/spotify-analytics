import { auth } from "@/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function HomePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/signin");
    }

    if (session?.user) {
        redirect("/dashboard");
    }
}