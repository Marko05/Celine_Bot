const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const embed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(`Help`)
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`The Bot prefix is \`;\``)
.addField(`Moderation [1]` , `\`;help Moderation\`` , true)
.addField(`Fun [0]` , `\`;help Fun\`` , true)
.addField(`Information [0]` , `\`;help Information\`` , true)
.addField(`Economy [0]` , `\`;help Economy\`` , true)
.addField(`Music [0]` , `\`;help Music\`` , true)
.addField(`Utility [0]` , `\`;help Utility\`` , true)


msg.channel.send(embed)


}