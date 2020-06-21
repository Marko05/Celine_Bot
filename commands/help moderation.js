const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(`ForYou`, bot.user.displayAvatarURL())
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`The Bot prefix is \`fy!\`\n\n**Commands**`)
.addField(`
**Moderation [6]**` , 
`\`ban\`**\`[@user][reason]\`**
\`kick\`**\`[@user][reason]\`**
\`warn\`**\`[@user][reason]\`**
\`mute\`**\`[@user][reason]\`**
\`unmute\`**\`[@user]\`**
\`clear\`**\`[amount of messages]\`**`)

msg.channel.send(helpembed)

}