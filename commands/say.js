const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

if (!msg.member.permissions.has("ADMINISTRATOR")) return;
const MSG = args.slice(0).join(" ")
if (!MSG)
  return msg.channel.send(`You did not specify your message to send!`);
msg.channel.send(MSG);

}
