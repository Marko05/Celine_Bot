const Discord = require(`discord.js`)
const db = require("quick.db")


module.exports.run = async(bot, msg, args) => {
    
const ms = require(`parse-ms`)

let daily = await db.fetch(`daily_${msg.author.id}`);
let amount = 500
let timeout = 86400000

if (daily != null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
    msg.channel.send(`You already collected your daily reward! You can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s!**`)

} else {
    let embed = new Discord.MessageEmbed()
    .setTitle(`**Daily Rewards**`)
    .addField(`**Collected**`, amount)
    .setColor("GREEN")
    
    msg.channel.send(embed)
    
    
    db.add(`money_${msg.author.id}`, amount)
    db.add(`daily_${msg.author.id}`, Date.now())
}
}
