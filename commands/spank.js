const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async(bot, msg, args) => {

    if (!msg.mentions.users.first()) return msg.channel.send("Please mention someone to spank");
    if(!msg.channel.nsfw) return msg.channel.send(":x: **|** NSFW is not enabled in this channel!");
    
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`${msg.mentions.users.first().username}, you got spanked by ${msg.author.username}!`)
    .setImage(body.url) 
    .setTimestamp()
    msg.channel.send({embed})
};
