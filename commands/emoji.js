const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

let Emojis = "";
let EmojisAnimated = "";
let EmojiCount = 0;
let Animated = 0;
let OverallEmojis = 0;
function Emoji(id) {
  return bot.emojis.cache.get(id).toString();
}
msg.guild.emojis.cache.forEach((emoji) => {
  OverallEmojis++;
  if (emoji.animated) {
    Animated++;
    EmojisAnimated += Emoji(emoji.id);
  } else {
    EmojiCount++;
    Emojis += Emoji(emoji.id);
  }
});
let Embed = new Discord.MessageEmbed()
.setTitle(`Emojis in ${msg.guild.name}`)
.setDescription(
  `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}`
)
.setColor(`PURPLE`);
msg.channel.send(Embed);
}
