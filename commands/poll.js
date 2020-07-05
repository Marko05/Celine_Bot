const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {


if (
    msg.member.hasPermission("MANAGE_CHANNELS") ||
    msg.author.id === "3734242238232002561323"
  ) {
    if (!args[0]) {
      msg.channel.send("Please Specify a Poll!");
    } else {
      if (!msg.member.nickname) {
        var pollCreator = msg.author.username;
      } else {
        var pollCreator = msg.member.nickname;
      }
      let msgArgs = args.slice(0).join(" ");
      const Embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("📊 Poll - By " + pollCreator)
        .setDescription(`Poll: **${msgArgs}**`)
        .setThumbnail(msg.author.avatarURL())
        .addField("Vote", "👍 = Yes\n\n🤷‍♀️ = Maybe\n\n👎 = No");
      msg.channel.send(Embed).then((msgReaction) => {
        msgReaction.react("👍");
        msgReaction.react("🤷‍♀️");
        msgReaction.react("👎");
        msg.delete({ timeout: 500 }).catch(console.error);
      });
    }
  } else {
    msg.channel.send(":x: **|** You do not have permission to do that!");
  }
}
