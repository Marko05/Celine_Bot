const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async(bot, msg, args) => {

    let subreddits = ["panda"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`:hamster:`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    msg.channel.send(Embed);
  }
