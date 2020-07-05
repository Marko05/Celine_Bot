const Discord = require('discord.js');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const dotenv = require("dotenv").config();
const { Util } = require("discord.js");


module.exports.run = async(client, msg, args) => {
    
    const GOOGLE_API_KEY = `AIzaSyAQgPePQ21VC4FqFJMuQU6rFOEG3NWaxhM`;
    const youtube = new YouTube(GOOGLE_API_KEY);
    const queue = new Map();
    const searchString = args.slice(1).join(" ");
    const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    const serverQueue = queue.get(msg.guild.id);

if (!msg.member.voice.channel) return msg.channel.send("I'm sorry but you need to be in a voice channel to play music!");
if (!serverQueue) return msg.channel.send("There is nothing playing.");
if (!args[1]) return msg.channel.send(`The current volume is: **\`${serverQueue.volume}%\`**`);
if (isNaN(args[1]) || args[1] > 100) return msg.channel.send("Volume only can be set in range **1** - **100**.");
serverQueue.volume = args[1];
serverQueue.connection.dispatcher.setVolume(args[1] / 100);
return msg.channel.send(`I set the volume to: **\`${args[1]}%\`**`);

}