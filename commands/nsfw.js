const Discord = require('discord.js');
const request = require('request');
const api = require("imageapi.js")
module.exports.run = async (bot, msg, args) => {

    if (msg.channel.nsfw === true) {

    let subreddits = ['gonewild','RealGirls','Ass','Asshole','AssOnTheGlass','SpreadEm','Booty','GirlsInYogaPants','GirlsInLeggings','CollegeSluts','CollegeNSFW','FuckYeahDrunkSluts','CumSluts'];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`Pussy`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("PURPLE")
      .setImage(img);
    msg.channel.send(Embed);

} else {
        msg.channel.send('Must be in a nsfw channel!')
    }
}