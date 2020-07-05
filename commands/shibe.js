const Discord = require('discord.js');
const superagent = require('superagent');


module.exports.run = async(bot, msg, args) => {
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Here's Your Shibe")
    .setImage(body[0]) 
    .setTimestamp()
    msg.channel.send({embed});

};