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

if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    return msg.channel.send("⏸  **|**  Paused the music for you!");
}
return msg.channel.send("There is nothing playing.");

}