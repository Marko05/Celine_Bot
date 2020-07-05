const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

 let channel = msg.guild.channels.cache.get(args[0]);
 if(!channel) return msg.channel.send(`Please select a Channel.`)

 console.log(channel);
let MSG = args.slice(1).join(" ")

if (!MSG)
  return msg.channel.send(`You did not specify your message to send!`);
const _ = new Discord.MessageEmbed()
  .setTitle(`NEW ANNOUNCEMENT!`)
  .setDescription(`${MSG}`)
  .setColor("PURPLE");
msg.channel.send(_);


}
