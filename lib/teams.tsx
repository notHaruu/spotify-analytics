export const TEAMS = {
    developdoc: {
        id: "developdoc",
        name: "DevelopDoc",
        members: [
            "7Re86QJFjD",
        ]
    },

    friends: {
        id: "friends",
        name: "Friends",
        members: [
            "7Re86QJFjD",
        ]
    }
};

export function getUserTeams(id: string) {
    return Object.values(TEAMS).filter((team) =>
        team.members.includes(id)
    );
}