"use client"

import { authClient } from "@/auth-client"

export default function SignOut() {
  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <button onClick={handleSignOut} className="bg-red-500 text-white ml-3 px-5 py-1 rounded-full transition-transform duration-200 ease-in-out text-size cursor-pointer hover:scale-105 active:scale-95 hover:shadow-lg transition-all">Sign out</button>
  );
}