const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async(bot, msg, args) => {
    if (!msg.mentions.users.first()) return msg.channel.send("Please mention someone to slap");
    
    if (msg.mentions.users.first().id == bot.user.id && msg.author.id === "242263403001937920"){
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");
      
      const embed = new Discord.MessageEmbed()
      .setColor("PURPLE")
      .setTitle(`No u! *slaps*${msg.mentions.users.first().username}`)
      .setImage(body.url) 
      .setTimestamp()
      return msg.channel.send({embed})
    }else if (msg.mentions.users.first().id == bot.user.id && msg.author.id !== "242263403001937920"){
      return msg.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU **owwie**")
    }
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(`${msg.mentions.users.first().username} You got slapped by ${msg.author.username}! That Hurt!`)
    .setImage(body.url) 
    .setTimestamp()
    msg.channel.send({embed})
};