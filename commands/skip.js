const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {
    
const queue = new Map();
const serverQueue = queue.get(msg.guild.id);

if (!msg.member.voice.channel) return msg.channel.send("❌  **|**  You need to be in a voice channel to play a music!");
if (!serverQueue) return msg.channel.send("There is nothing playing that I could **\`skip\`** for you.");
serverQueue.connection.dispatcher.end("Skip command has been used!");
return msg.channel.send("⏭️  **|**  Skip command has been used!");

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



