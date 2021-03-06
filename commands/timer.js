const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(bot, msg, args) => {

  let Timer = args[0];

  if(!args[0]){
    return msg.channel.send(":x: " + "**|** Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return msg.channel.send(":x: " + "**|** Please Enter a time period followed by \"s, m or h\"");
  }

  msg.channel.send(":white_check_mark: " + "**|** Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    msg.channel.send(msg.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}