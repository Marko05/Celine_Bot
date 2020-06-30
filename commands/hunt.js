const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

if (db.has(`${msg.author.id}`, "gun") === true) {
    let timeoutstonks = 600000
    let stonks =  db.fetch(`hunt_${msg.author.id}`)

    if (stonks != null && timeoutstonks - (Date.now() - stonks) > 0) {
        let time = ms(timeoutstonks - (Date.now() - stonks));
        msg.channel.send(`You have already hunted please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

    } else {
        let amountearned = Math.floor(Math.random() * 500) + 1

        let jobs = ["Bird", "Rabbit", "Duck", "Chicken", "Pig", "Deer", "Wild boar", "Cow"]
        let job = jobs[Math.floor(Math.random()* jobs.length)]

        let embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setAuthor(`${msg.author.username}, it paid off`, msg.author.displayAvatarURL())
        .setDescription(`You hunted a **${job}** and earnt **${amountearned}** coins`)

        msg.channel.send(embed)

        db.add(`money_${msg.author.id}`, amountearned)
        db.set(`hunt_${msg.author.id}`, Date.now())
    }
} else {
    msg.channel.send(":x: **|** You need to buy a gun first. You can buy staff at the shop, by typing \`;shop\`.")
}
}

