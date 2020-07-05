const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Information")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`;\`**`)
.addField(`**\`userinfo\`** **\`[@user]\`**` , `\`Shows some Informations of a user\``)
.addField(`**\`weather\`** **\`[city]\`**` , `\`Shows the weather of the city\``)
.addField(`**\`pokemon\`** **\`[pokemon]\`**` , `\`Shows Informations of the pokemon\``)
.addField(`**\`serverinfo\`**` , `\`Gives you Information of the server\``)
.addField(`**\`csgo\`** **\`[steamid64]\`**` , `\`Gives you Information about an csgo account\``)
.addField(`**\`covid\`**` , `\`Gives you Informations about Covid-19 worldwide\``)
.addField(`**\`covid\`** **\`[state]\`**` , `\`Gives you Informations about Covid-19 in the state\``)
.addField(`**\`botinfo\`**` , `\`Gives you Informations about Celine\``)
.addField(`**\`emoji\`**` , `\`Shows all emojis in the server\``)
.setTimestamp()

msg.channel.send(helpembed)

}