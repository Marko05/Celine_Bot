var Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {

let user;

user = msg.mentions.users.first();


let convert = require('parse-ms')

let status = user.presence.activities[0];

if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return msg.channel.send(":x: **|** This user isn't listening to Spotify.");

if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
  let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
      url = `https://open.spotify.com/track/${status.syncID}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText,
      timeStart = status.timestamps.start,
      timeEnd = status.timestamps.end,
      timeConvert = convert(timeEnd - timeStart);
  
  let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
  let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
  
  let time = `${minutes}:${seconds}`;
  
  const embed = new Discord.MessageEmbed()
  .setAuthor("Spotify Track Information", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
  .setColor(0x1ED768)
  .setThumbnail(image)
  .addField("Name:", name, true)
  .addField("Album:", album, true)
  .addField("Artist:", artist, true)
  .addField("Duration:", time, false)
  .addField("Listen now on Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
  msg.channel.send(embed)
}
}