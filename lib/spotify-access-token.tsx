import { useQuery } from "@tanstack/react-query";
import { authClient } from "@/auth-client";

{/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= spotify accesstoken =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */ }

export function useSpotifyProfile() {
    return useQuery({
        queryKey: ["spotify-profile"],
        queryFn: async () => {
            const { data } = await authClient.getAccessToken({
                providerId: "spotify",
            });

            const accessToken = data?.accessToken;

            const res = await fetch(
                "/api/spotify/me",
                { headers: { Authorization: `Bearer ${accessToken}` }, }
            )

            return res.json();
        }
    })
}