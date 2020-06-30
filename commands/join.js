const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

return new Promise((resolve, reject) => {
    const voiceChannel = msg.member.voice.channel;
    if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
    voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
});
}