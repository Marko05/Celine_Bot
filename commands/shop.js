const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("Celine Shop")
.setColor("PURPLE")
.setThumbnail(bot.user.displayAvatarURL())
.addField("**Rod**", "**1,000** coins")
.addField("**Sword**", "**700** coins")
.addField("**Pickaxe**", "**2000** coins")
.addField("**Gun**", "**10,000** coins")
.addField("**Tea**", "**50** coins")
.setTimestamp()
msg.channel.send(embed)

}
