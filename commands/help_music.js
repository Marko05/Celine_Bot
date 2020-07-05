const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Music")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`;\`**`)
.addField(`**\`join\`**` , `\`Joins to your channel\``)
.addField(`**\`play\`** **\`[Title/URL]\`**` , `\`Plays the Url or Title (in development...)\``)
.addField(`**\`search\`** **\`[Title]\`**` , `\`Search a Title from YouTube (in development...)\``)
.addField(`**\`skip\`**` , `\`Skips the current song\``)
.addField(`**\`stop\`**` , `\`Stops the current song\``)
.addField(`**\`pause\`**` , `\`Pause the current song\``)
.addField(`**\`resume\`**` , `\`Resume the current song\``)
.addField(`**\`np\`**` , `\`Shows the song what is playing right now\``)
.addField(`**\`queue\`**` , `\`Shows the queue\``)
.addField(`**\`volume\`** **\`[1-100]\`**` , `\`Sets the volume of the song\``)
.setTimestamp()


msg.channel.send(helpembed)

}