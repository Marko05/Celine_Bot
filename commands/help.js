const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const embed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(`Help`)
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`The Bot prefix is \`;\``)
.addField(`Moderation [8]` , `\`;help_moderation\`` , true)
.addField(`Fun [0]` , `\`;help_fun\`` , true)
.addField(`Information [0]` , `\`;help_information\`` , true)
.addField(`Economy [0]` , `\`;help_economy\`` , true)
.addField(`Music [0]` , `\`;help_music\`` , true)
.addField(`Utility [0]` , `\`;help_utility\`` , true)


msg.channel.send(embed)


}