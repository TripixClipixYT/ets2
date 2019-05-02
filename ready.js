const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    let statuses = [`Over ${bot.users.size}`,
    `${bot.guilds.size} Servers`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity("", {type: "WATCHING", url:"https://twitch.tv/tripix_clipix"});

    }, 5000)

}