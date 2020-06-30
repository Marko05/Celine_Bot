const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

let timeoutworked = 600000
let worked =  db.fetch(`scouted_${msg.author.id}`)

if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
    let time = ms(timeoutworked - (Date.now() - worked));
    msg.channel.send(`You have already searched please come back in **${time.minutes}m ${time.seconds}s**`)

} else {
    let amountearned = Math.floor(Math.random() * 30) + 1

    let jobs = ["pantry", "dog", "car", "bed", "parking lot", "store", "wallet", "mobile phone", "playstation", "cat", "xbox"]
    let job = jobs[Math.floor(Math.random()* jobs.length)]

    let embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setAuthor(`${msg.author.username}, it paid off`, msg.author.displayAvatarURL())
    .setDescription(`You searched a **${job}** and found **${amountearned}** coins`)

    msg.channel.send(embed)

    db.add(`money_${msg.author.id}`, amountearned)
    db.set(`scouted_${msg.author.id}`, Date.now())
}
}
