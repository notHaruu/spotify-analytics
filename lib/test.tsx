import { auth } from "@/auth"
import { headers } from "next/headers"

export const TEAMS = {
    developdoc: {
        name: "DevelopDoc",
        members: [
            "31qyhbozjv2reckgfngnljftoweq",
        ],
    },

    // friends: {
    //   name: "Friends Team",
    //   members: [
    //     "user_789",
    //   ],
    // },
};

// export function getUserTeam(userId: string) {
//     return Object.values(TEAMS).find((team) =>
//         team.members.includes(userId)
//     );
// }

export const session = await auth.api.getSession({
    headers: await headers(),
});

export const userID = session?.user?.id;

export function getUserTeam(userId: string) {
    return (
        Object.values(TEAMS).find((userID) =>
            TEAMS.developdoc.members.includes(userId)
        )
    )
}