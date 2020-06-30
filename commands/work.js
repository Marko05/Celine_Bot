const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

let timeoutworked = 3600000
let worked =  db.fetch(`worked_${msg.author.id}`)

if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
    let time = ms(timeoutworked - (Date.now() - worked));
    msg.channel.send(`You have already worked please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

} else {
    let amountearned = Math.floor(Math.random() * 500) + 1

    let jobs = ["Developer", "Scientist", "Doctor", "Shopkeeper,", "Racer", "Manager", "Assistant", "Teacher", "Real estate agent"]
    let job = jobs[Math.floor(Math.random()* jobs.length)]

    let embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setAuthor(`${msg.author.tag}, it paid off`, msg.author.displayAvatarURL())
    .setDescription(`${msg.author}, you worked as a **${job}** and earnt **${amountearned}** coins`)

    msg.channel.send(embed)

    db.add(`money_${msg.author.id}`, amountearned)
    db.set(`worked_${msg.author.id}`, Date.now())
}

}
