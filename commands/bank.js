const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

    let user = msg.mentions.users.first() || msg.author
    let money = db.fetch(`money_${user.id}`)
    let avatar = user.avatarURL({size: 2048});
    
    let embed = new Discord.MessageEmbed()
    
    .setTitle(`**Bank from ${user.username}**`)
    .setDescription(`Coins:\n**${money}**`)
    .setColor("PURPLE")
    .setThumbnail(avatar)
    
    msg.channel.send(embed);
    
}
