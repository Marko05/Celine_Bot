const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const sChannel = msg.guild.channels.cache.find(channel => channel.name === "suggestions");
if(!sChannel) {
  return msg.channel.send(":x: **|** I can´t find any channel called \`suggestions\`.") 
}
if (!args [0]) { return msg.channel.send (`Please specify a suggestion`)
}

msg.channel.send(":white_check_mark: **|** Successfully submitted your suggestion.")
const suggestembed = new Discord.MessageEmbed()
.setFooter("")
.setTimestamp()
.setTitle(`New Suggestion!`)
.setDescription(`By: ${msg.author.tag}`)
.setThumbnail(`${msg.author.avatarURL({format: 'png', dynamic: true})}`)
.addField(`**Suggestion**:` , `${args}`)
.setColor('PURPLE');
sChannel.send(suggestembed).then(async msg => {
await msg.react("✅");
await msg.react("❌"); 
});
}