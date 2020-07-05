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


if (!serverQueue) return msg.channel.send("There is nothing playing.");
 return msg.channel.send(`
__**Song Queue**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}

**Now Playing: \`${serverQueue.songs[0].title}\`**
    `);

async function handleVideo(video, msg, voiceChannel, playlist = false) {
        const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 100,
                playing: true,
                loop: false
            };
            queue.set(msg.guild.id, queueConstruct);
    
            queueConstruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send(`I could not join the voice channel: **\`${error}\`**`);
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return;
            else return msg.channel.send(`:white_check_mark:  **|** **\`${song.title}\`** has been added to the queue!`);
        }
        return;
    }
    
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            return queue.delete(guild.id);
        }
    
        const dispatcher = serverQueue.connection.play(ytdl(song.url))
            .on("finish", () => {
                const shiffed = serverQueue.songs.shift();
                if (serverQueue.loop === true) {
                    serverQueue.songs.push(shiffed);
                };
                play(guild, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolume(serverQueue.volume / 100);
    
        serverQueue.textChannel.send({
            embed: {
                color: "PURPLE",
                description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
            }
        });
}
}
