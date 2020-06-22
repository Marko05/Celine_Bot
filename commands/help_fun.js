const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Fun")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`**\`cat\`** , **\`dog\`** , **\`giraffe\`**`)



msg.channel.send(helpembed)

}