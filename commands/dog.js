const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");

module.exports.run = async(bot, msg, args) => {
 
    let subreddits = ["Corgi", "wigglebutts", "dogswithjobs", "dogshowerthoughts", "bostonterrier", "blop", "puppysmiles", "whatswrongwithyourdog", "dogsmirin", "dogsonroofs", "dogtraining", "dogpictures", "dogs", "dogberg", "rarepuppers", "dogpictures", "puppies", "goldenretrievers", "dogpictures", "shiba", "Zoomies", "WhatsWrongWithYourDog", "Doggles", "BlurryPicturesOfDogs", "Dogue", "DogsWearingSigns", "FromPuppyToDog", "woofbarkwoof", "woofbarkwoof", "germanshepherds", "pitbulls", "watch_dogs", "corgi", "Bulldogs", "poodles", "labrador"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`Wuff :dog:`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("BROWN")
      .setImage(img);
    msg.channel.send(Embed);
  }
