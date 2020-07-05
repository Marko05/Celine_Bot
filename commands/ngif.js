const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async(bot, msg, args) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/ngif");
    
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`Here is your Neko GIF, ${msg.author.username}`)
    .setImage(body.url) 
    .setTimestamp()
    msg.channel.send({embed})
};