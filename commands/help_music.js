const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Music")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`Bot Prefix: **\`;\`**`)
.addField(`**\`join\`**` , `\`Joins to your channel\``)
.setTimestamp()


msg.channel.send(helpembed)

}