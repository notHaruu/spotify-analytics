"use client";

import { authClient } from "@/auth-client"; // or wherever your client is

export default function SignOut() {
  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/"; // redirect after logout
  };

  return (
    <button onClick={handleSignOut} className="bg-red-500 text-white ml-3 px-5 py-1 rounded-full hover:scale-105 hover:cursor-pointer">Sign out</button>
  );
}