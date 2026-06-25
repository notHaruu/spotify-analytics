"use client";

import { authClient } from "@/auth-client";

export default function SignIn() {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
       await authClient.signIn.social({provider: "spotify"})
      }}
    >

      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg
               transition-transform duration-200 ease-in-out text-size
               hover:scale-105
               active:scale-95 hover:shadow-lg transition-all">Sign in with Spotify</button>
    </form>
  )
}
