const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

return new Promise((resolve, reject) => {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel || voiceChannel.type !== 'voice') msg.channel.send(':x: **|** You need to join a Voice Channel first!');
    voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
});
}