const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

let timeoutstonks = 600000
let stonks =  db.fetch(`stonks${msg.author.id}`)

if (stonks != null && timeoutstonks - (Date.now() - stonks) > 0) {
    let time = ms(timeoutstonks - (Date.now() - stonks));
    msg.channel.send(`You have already invested in stonks please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

} else {
    let amountearned = Math.floor(Math.random() * 1000) + 1

    let jobs = ["Tesla", "Apple", "Google", "JP Morgan", "Wells Fargo", "Discord", "Facebook", "Instagram", "Snapchat"]
    let job = jobs[Math.floor(Math.random()* jobs.length)]

    let embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setAuthor(`${msg.author.username}, it paid off`, msg.author.displayAvatarURL())
    .setDescription(`You invested in **${job}** and earnt **${amountearned}** coins`)

    msg.channel.send(embed)

    db.add(`money_${msg.author.id}`, amountearned)
    db.set(`stonks${msg.author.id}`, Date.now())
}

}
