const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const helpembed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTitle("Economy")
.setThumbnail(bot.user.displayAvatarURL())
.setDescription(`My Prefix: **\`;\`**`)
.addField(`**\`bank\`** **\`[@user]\`**` , `\`Shows your coins\``)
.addField(`**\`daily\`**` , `\`Gives you an daily amount of coins\``)
.addField(`**\`buy\`** **\`[item]\`**` , `\`Buys an item from the sop\``)
.addField(`**\`shop\`**` , `\`Shows you the shop\``)
.addField(`**\`fish\`**` , `\`Fish some fishes\``)
.addField(`**\`work\`**` , `\`Work to get coins\``)
.addField(`**\`inventory\`**` , `\`Shows your items\``)
.addField(`**\`beg\`**` , `\`Beg for coins\``)
.addField(`**\`hunt\`**` , `\`Hunt some animals with the gun\``)
.addField(`**\`pay\`** **\`[@user]\`** **\`[amount]\`**`  , `\`Pays an user the amount of coins\``)
.addField(`**\`scout\`**` , `\`Finds some things\``)
.addField(`**\`stonks\`**` , `\`Invest for an industry\``)
.addField(`**\`mine\`**` , `\`Mine some ore\``)
.setTimestamp()


msg.channel.send(helpembed)

}