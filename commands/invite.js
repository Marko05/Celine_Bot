const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const embed = new Discord.MessageEmbed()

.setTitle("Invite")
.setColor("PURPLE")
.setDescription("[Invite](https://discord.com/api/oauth2/authorize?client_id=724324879830220902&permissions=8&scope=bot)\n[Support Server](https://discord.gg/MCYwfU4)")
.setTimestamp()

msg.channel.send(embed)

}

