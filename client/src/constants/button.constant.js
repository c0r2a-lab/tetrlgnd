const _BUTTON = [
    {
        abbr: "MP",
        title: "multiplayer",
        subtitle: "play online with friends and foes",
        classname: "btn-multiplayer",
        path: "/multiplayer",
        children: [
            {
                abbr: "TLG",
                title: "TETRA LEAGUE",
                subtitle: "fight players of your skill in ranked duels",
                classname: "btn-league",
                path: "/room",
            },
            {
                abbr: "COP",
                title: "COMPETITION",
                subtitle: "fight players who have similar abilities",
                classname: "btn-competition",
                path: "/room",
            },
            {
                abbr: "TR",
                title: "TRAIN",
                subtitle: "play using free scores in train mode",
                classname: "btn-train",
                path: "/room",
            },
        ]
    },
    {
        abbr: "1P",
        title: "SOLO",
        subtitle: "challenge yourself and top the leaderboards",
        classname: "btn-solo",
        path: "/solo",
        children: [
            {
                abbr: "40L",
                title: "40 LINES",
                subtitle: "complete 40 lines as quickly as possible",
                classname: "btn-40line",
                path: "/40line",
            },
            {
                abbr: "BLZ",
                title: "BLITZ",
                subtitle: "a two-minute race against the clock",
                classname: "btn-blitz",
                path: "/blitz",
            },
            {
                abbr: "PE",
                title: "PEACE",
                subtitle: "play using free scores in train mode",
                classname: "btn-peace",
                path: "/peace",
            },
            {
                abbr: "CTM",
                title: "CUSTOM",
                subtitle: "play, train and experiment by your rules",
                classname: "btn-custom",
                path: "/custom",
            },
        ]
    },
    {
        abbr: "LD",
        title: "leaderboard",
        subtitle: "leaderboards, replays and more",
        classname: "btn-leaderboard",
        path: "/leaderboard",
    },
    {
        abbr: "CFG",
        title: "config",
        subtitle: "tweak your tetris legend experience",
        classname: "btn-config",
        path: "/config",
    },
    {
        abbr: "ABT",
        title: "about",
        subtitle: "all about tetris legend",
        classname: "btn-about",
        path: "/about",
    },
]

export default _BUTTON