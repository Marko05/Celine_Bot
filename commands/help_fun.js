const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Fun")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`;\`**`)
.addField(`**\`cat\`**` , `\`Shows a random cat picture\``)
.addField(`**\`dog\`**` , `\`Shows a random dog picture\``)
.addField(`**\`shibe\`**` , `\`Shows some shibs\``)
.addField(`**\`meme\`**` , `\`Shows a random meme\``)
.addField(`**\`poll\`**` , `\`Creates a Poll\``)
.addField(`**\`giveaway\`**` , `\`Creates a cool giveaway!\``)
.addField(`**\`say\`** **\`[text]\`**` , `\`Let the bot say something\``)
.addField(`**\`slap\`** **\`[@user]\`**` , `\`Slaps a user\``)
.addField(`**\`kiss\`** **\`[@user]\`**` , `\`Kisses a user\``)
.addField(`**\`cuddle\`** **\`[@user]\`**` , `\`Cuddles a user\``)
.addField(`**\`spank\`** **\`[@user]\`**` , `\`Spanks a user\``)
.addField(`**\`ngif\`**` , `\`Shows some Neko GIF´s\``)
.addField(`**\`joke\`**` , `\`Tells you a funny joke\``)
.setTimestamp()


msg.channel.send(helpembed)

}