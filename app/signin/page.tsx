import SignIn from "@/components/sign-in";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="p-10">
      <h1 className="text-7xl pb-5 mb-10 font-bold border-b-2 border-neutral-200 dark:border-neutral-700 theme-transition">Homepage</h1>
      <SignIn />   
    </div>
  )
}