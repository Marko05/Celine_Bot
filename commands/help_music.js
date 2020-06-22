const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Music")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`The Bot prefix is \`;\`\n\n`)
.addField(`**\`ban\`**` , `**\`[@user][reason]\`**`)
.addField(`**\`kick\`**` , `**\`[@user][reason]\`**`)
.addField(`**\`warn\`**` , `**\`[@user][reason]\`**`)
.addField(`**\`mute\`**`, `**\`[@user][reason]\`**`)
.addField(`**\`unmute\`**`, `**\`[@user]\`**`)
.addField(`**\`clear\`**` , `**\`[amount of messages]\`**`)

msg.channel.send(helpembed)

}