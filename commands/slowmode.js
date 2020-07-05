const Discord = require(`discord.js`)
const ms = require("ms");

module.exports.run = async(bot, msg, args) => {


  if (!msg.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return msg.channel.send(":x: **|** You can´t use this command!");
  }
  
  let channel = msg.mentions.channels.first(),
      time = args.slice(1).join(" ");
  
  if (!channel) time = args.join(" "), channel = msg.channel;
 
  
  if (msg.flags[0] === "off") {
    channel.setRateLimitPerUser(0);
    return msg.channel.send(`<#${channel.id}> slowmode has been deactivated.`);
  }
  
  if (!time) return msg.channel.send("Please includes the time format.");
  
  let convert = ms(time);
  let toSecond = Math.floor(convert / 1000);
  
  if (!toSecond || toSecond == undefined) return msg.channel.send("Please insert the valid time format!");
  
  if (toSecond > 21600) return msg.channel.send(":x: **|** The Time has to be 6 hours or less!");
  else if (toSecond < 1) return msg.channel.send(":x: **|** The Time has to be more than 1 second!");
  
  await channel.setRateLimitPerUser(toSecond);
  return msg.channel.send(`:white_check_mark: **|** Successfully slowmoded <#${channel.id}> to **${ms(ms(time), {long: true})}**.`);
}