const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Utility")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`Bot Prefix: **\`;\`**`)
.addField(`**\`suggestion\`**` , `\`Sends a suggestion to a #suggestions channel\``)
.addField(`**\`serverinvite\`** **\`[Channel ID]\`**` , `\`Creates an invite for the channel\``)
.addField(`**\`invite\`**` , `\`Invites the bot to your server\``)
.addField(`**\`timer\`** **\`[time]\`**` , `\`Sets a timer\``)
.setTimestamp()



msg.channel.send(helpembed)

}