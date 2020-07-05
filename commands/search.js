const Discord = require('discord.js');
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const dotenv = require("dotenv").config();
const { Util } = require("discord.js");


module.exports.run = async(client, msg, args) => {
    
    const GOOGLE_API_KEY = `AIzaSyBM5Ne5in25lkwmd6DBSf0mVE9abKQGC-Y`;
    const youtube = new YouTube(GOOGLE_API_KEY);
    const queue = new Map();
    const searchString = args.slice(1).join(" ");
    const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    const serverQueue = queue.get(msg.guild.id);

const voiceChannel = msg.member.voice.channel;
if (!voiceChannel) return msg.channel.send("I'm sorry but you need to be in a voice channel to play a music!");
const permissions = voiceChannel.permissionsFor(msg.client.user);
if (!permissions.has("CONNECT")) {
    return msg.channel.send("Sorry, but I need **`CONNECT`** permissions to proceed!");
}
if (!permissions.has("SPEAK")) {
    return msg.channel.send("Sorry, but I need **`SPEAK`** permissions to proceed!");
}
if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    const playlist = await youtube.getPlaylist(url);
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }
    return msg.channel.send(`<:yes:591629527571234819>  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue!`);
} else {
    try {
        var video = await youtube.getVideo(url);
    } catch (error) {
        try {
            var videos = await youtube.searchVideos(searchString, 10);
            let index = 0;
            msg.channel.send(`
__**Song selection**__

${videos.map(video2 => `**\`${++index}\`  |**  ${video2.title}`).join("\n")}

Please provide a value to select one of the search results ranging from 1-10.
            `);
            // eslint-disable-next-line max-depth
            try {
                var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                    max: 1,
                    time: 10000,
                    errors: ["time"]
                });
            } catch (err) {
                console.error(err);
                return msg.channel.send("No or invalid value entered, cancelling video selection...");
            }
            const videoIndex = parseInt(response.first().content);
            var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
            console.error(err);
            return msg.channel.send("🆘  **|**  I could not obtain any search results.");
        }
    }
    return handleVideo(video, msg, voiceChannel);
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
            else return msg.channel.send(`<:yes:591629527571234819>  **|** **\`${song.title}\`** has been added to the queue!`);
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
                color: "RANDOM",
                description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
            }
        });
    }
}
}
