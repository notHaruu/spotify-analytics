import { betterAuth } from "better-auth"

export const auth = betterAuth({
  socialProviders: { 
    spotify: { 
      clientId: process.env.SPOTIFY_CLIENT_ID as string, 
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      scope: [
        "user-read-email",
        "user-read-private",
        "user-top-read",
        "user-library-read",
        "user-read-recently-played",
        "playlist-read-private",
        "user-read-playback-state",
        "playlist-read-collaborative",
        "user-read-currently-playing"
      ]
    }
  }
})