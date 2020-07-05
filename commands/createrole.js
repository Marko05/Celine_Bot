const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

if (!msg.member.permissions.has("ADMINISTRATOR"))
return msg.channel.send(
  `You do not have admin, ${msg.author.username}`
);
let rName = args.slice(0).join(" ");
let rColor;
args.forEach((arg) => {
  if (arg.startsWith("#")) {
    rColor = arg;
  }
});
if (!rName) {
  return msg.channel.send(
    `Please specify a \`Role Name\`!`
  );
}
if (!rColor) {
  return msg.channel.send(
    `Please specify a \`Hex Color\`! (Example: #7CFC00)`
  );
}
if (rColor >= 16777215)
  return msg.channel.send(
    `:x: **|** That hex color range was too big! Keep it between 0 and 16777215`
  );
if (rColor <= 0)
  return msg.channel.send(
    `:x: **|** That hex color range was too small! Keep it between 0 and 16777215`
  );
rName = rName.replace(`${rColor}`, ``);
let rNew = await msg.guild.roles.create({
  data: {
    name: rName,
    color: rColor,
  },
});
const Embed = new Discord.MessageEmbed()
  .setTitle(`New role!\nCreated by ${msg.author.username}`)
  .setDescription(
    `\`Role Name: ${rName}\n\nHex Color Code: ${rColor}\n\nRole ID: ${rNew.id}\``
  )
  .setColor(rColor);
msg.channel.send(Embed);

}







