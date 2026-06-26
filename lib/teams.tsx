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

export function getUserTeam(userId: string) {
    return Object.values(TEAMS).find((team) =>
        team.members.includes(userId)
    );
}