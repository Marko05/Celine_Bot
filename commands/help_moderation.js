const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Moderation")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`;\`**`)
.addField(`**\`ban\`** **\`[@user][reason]\`**` , `\`Bans a user from the server\``)
.addField(`**\`kick\`** **\`[@user][reason]\`**` , `\`Kicks a user from the server\``)
.addField(`**\`warn\`** **\`[@user][reason]\`**` , `\`Warns a user\``)
.addField(`**\`warnings\`** **\`[@user]\`**` , `\`Shows the warnings of the user\``)
.addField(`**\`resetwarnings\`** **\`[@user]\`**` , `\`Resets the warnings of the user\``)
.addField(`**\`addrole\`** **\`[@user][Role name]\`**` , `\`Gives a user the role\``)
.addField(`**\`removerole\`** **\`[@user][Role name]\`**` , `\`Removes a user the role\``)
.addField(`**\`lockdown\`** **\`[time s/m/h]\`**` , `\`Lock Down a Channel\``)
.addField(`**\`mute\`** **\`[@user][reason]\`**` , `\`Mutes a user\``)
.addField(`**\`unmute\`** **\`[@user]\`**` , `\`Unmutes a user\``)
.addField(`**\`createrole\`** **\`[Role Name]\`** **\`[Hex Color Code]\`**` , `\`Creates a role\``)
.addField(`**\`deleterole\`** **\`[Role Name/Role ID]\`**` , `\`Deletes a role\``)
.addField(`**\`slowmode\`** **\`[time s/m/h]\`**` , `\`Sets a slowmode for the channel\``)
.addField(`**\`clear\`** **\`[amount of messages]\`**` , `\`Clears an amount of messages\``)
.setTimestamp()

msg.channel.send(helpembed)

}