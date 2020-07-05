const Discord = require(`discord.js`)
const prefix = `;`

module.exports.run = async(bot, msg, args) => {

const embed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(`Help`)
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`${prefix}\`**`)
.addField(`Moderation [14]` , `\`;help_moderation\`` , true)
.addField(`Fun [14]` , `\`;help_fun\`` , true)
.addField(`Information [9]` , `\`;help_information\`` , true)
.addField(`Economy [13]` , `\`;help_economy\`` , true)
.addField(`Music [10]` , `\`;help_music\`` , true)
.addField(`Utility [5]` , `\`;help_utility\`` , true)
.setFooter(`Created by Magg#9999`)
.setTimestamp()


msg.channel.send(embed)


}