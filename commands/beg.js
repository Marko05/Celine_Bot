const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

let timeoutworked = 600000
let worked =  db.fetch(`begged_${msg.author.id}`)

if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
    let time = ms(timeoutworked - (Date.now() - worked));
    msg.channel.send(`You have already begged please come back in **${time.minutes}m ${time.seconds}s**`)

} else {
    let amountearned = Math.floor(Math.random() * 50) + 1

    let jobs = ["Justin Bieber", "Ariana Grande", "Adele", "JT", "Your Mom", "Kim Kardashian", "Buddy from HR", "Raj", "Kim Kardashian", "Cristiano Ronaldo", "Drake", "6ix9ine", "Post Malone", "Lionel Messi"]
    let job = jobs[Math.floor(Math.random()* jobs.length)]

    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor(`${msg.author.username}, your begging worked`, msg.author.displayAvatarURL())
    .setDescription(`**${job}** donated **${amountearned}** coins. Feels good man!`)

    msg.channel.send(embed)

    db.add(`money_${msg.author.id}`, amountearned)
    db.set(`begged_${msg.author.id}`, Date.now())
}

}
