const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

    let roleDelete =
    msg.guild.roles.cache.get(args[0]) ||
    msg.guild.roles.cache.find((r) => r.name == args[0]);
  if (!roleDelete)
    return msg.channel.send(
      `Please specify the Name or Role ID of the role!`
    );
  roleDelete.delete();
  const Embed1 = new Discord.MessageEmbed()
    .setTitle(`Deleted role!\nBy ${msg.author.username}`)
    .setColor(roleDelete.color)
    .setDescription(
      `\`Deleted Role: ${roleDelete.name}\n\nHex Color Code: ${roleDelete.color}\n\nRole ID: ${roleDelete.id}\``
    );
  msg.channel.send(Embed1);
}


