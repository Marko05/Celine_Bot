const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

    let data = db.get(`snipe.${msg.guild.id}`);
    if (!data) return msg.channel.send("I don't see any stored deleted message here.");
    
    let content = data.content,
        user = data.user,
        channel = data.channel;
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("Sniped Message")
    .setDescription(`I got a deleted message from **${user}** in **<#${channel}>** \n> ${content}`)
    msg.channel.send(embed);
  }