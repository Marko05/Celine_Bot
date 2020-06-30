const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

let items = db.get(msg.author.id)
let user = msg.mentions.users.first || msg.author
if (items === null) items = "--"
let embed = new Discord.MessageEmbed()
.setTitle(`**Inventory from ${msg.author.username}**`)
.addField("**Inventory**", items)
.setColor("PURPLE")
.setTimestamp()
msg.channel.send(embed)
}
