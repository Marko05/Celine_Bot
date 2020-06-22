const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Information")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`The Bot prefix is \`;\`\n\n`)
.addField(`**\`weather\`**` , `**\`pokemon\`**`)


msg.channel.send(helpembed)

}