export const TEAMS = {
    developdoc: {
        id: "developdoc",
        name: "DevelopDoc",
        members: [
            "31qyhbozjv2reckgfngnljftoweq",
        ]
    },

    friends: {
        id: "friends",
        name: "Friends",
        members: [
            "31qyhbozjv2reckgfngnljftoweq",
        ]
    }
};

export function getUserTeams(userId: string) {
    return Object.values(TEAMS).filter((team) =>
        team.members.includes(userId)
    );
}