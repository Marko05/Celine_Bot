const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Moderation")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`Bot Prefix: **\`;\`**`)
.addField(`**\`ban\`** **\`[@user][reason]\`**` , `\`Bans a user from the server\``)
.addField(`**\`kick\`** **\`[@user][reason]\`**` , `\`Kicks a user from the server\``)
.addField(`**\`warn\`** **\`[@user][reason]\`**` , `\`Warns a user\``)
.addField(`**\`warnings\`** **\`[@user]\`**` , `\`Shows the warnings of the user\``)
.addField(`**\`resetwarnings\`** **\`[@user]\`**` , `\`Resets the warnings of the user\``)
.addField(`**\`addrole\`** **\`[@user][Role name]\`**` , `\`Gives an user the role\``)
.addField(`**\`removerole\`** **\`[@user][Role name]\`**` , `\`Removes an user the role\``)
.addField(`**\`mute\`** **\`[@user][reason]\`**` , `\`Mutes a user\``)
.addField(`**\`unmute\`** **\`[@user]\`**` , `\`Unmutes a user\``)
.addField(`**\`clear\`** **\`[amount of messages]\`**` , `\`Clears an amount of messages\``)
.setTimestamp()

msg.channel.send(helpembed)

}