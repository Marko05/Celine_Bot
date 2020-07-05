const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, msg, args) => {

if (!msg.mentions.users.first()) return msg.channel.send("Please mention someone to kiss");

if (msg.mentions.users.first().id == msg.author.id) return msg.channel.send(":x: **|** You can´t kiss yourself!")

const { body } = await superagent
.get("https://nekos.life/api/kiss");

const embed = new Discord.MessageEmbed()
.setColor("#ff9900")
.setTitle(`${msg.author.username} kissed ${msg.mentions.users.first().username} <3`)
.setImage(body.url) 
.setTimestamp()
msg.channel.send({embed})
};