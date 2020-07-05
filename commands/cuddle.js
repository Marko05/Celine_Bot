const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async(bot, msg, args) => {
    if (!msg.mentions.users.first()) return msg.reply("You need to mention someone to cuddle them");
    if (msg.mentions.users.first().id == msg.author.id) return msg.channel.send(":x: **|** You can´t cuddle yourself!")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`${msg.author.username} cuddled ${msg.mentions.users.first().username} Sweet!`)
    .setImage(body.url) 
    .setTimestamp()
    msg.channel.send({embed})
};