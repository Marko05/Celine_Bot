const Discord = require(`discord.js`)
const randomPuppy = require(`random-puppy`)
const api = require("imageapi.js");

module.exports.run = async(bot, msg, args) => {

let subreddits = ["dankmeme", "meme", "memes"];
let subreddit =
  subreddits[Math.floor(Math.random() * subreddits.length - 1)];
let img = await api(subreddit);
const Embed = new Discord.MessageEmbed()
  .setTitle(`Meme :joy:`)
  .setURL(`https://reddit.com/r/${subreddit}`)
  .setColor("PURPLE")
  .setImage(img);
msg.channel.send(Embed);
}
