const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Fun")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`Bot Prefix: **\`;\`**`)
.addField(`**\`cat\`**` , `\`Shows a random cat picture\``)
.addField(`**\`dog\`**` , `\`Shwos a random dog picture\``)
.addField(`**\`poll\`**` , `\`Creates a Poll\``)
.addField(`**\`giveaway\`**` , `\`Creates a cool giveaway!\``)
.addField(`**\`joke\`**` , `\`Tells you a funny joke\``)
.setTimestamp()


msg.channel.send(helpembed)

}