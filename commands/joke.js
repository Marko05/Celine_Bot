var Discord = require('discord.js');
var giveMeAJoke = require (`discord-jokes`)

module.exports.run = async(bot, msg, args) => {

    giveMeAJoke.getRandomDadJoke (function(joke) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle (`Joke`)
    .setColor("PURPLE")
    .setDescription(joke)
    .setTimestamp()

    msg.channel.send(embed)
    })
}