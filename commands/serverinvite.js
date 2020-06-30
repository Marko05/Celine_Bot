const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

const setChannelID = msg.content.split(' ');

try{
    msg.guild.channels.cache.get(setChannelID[1]).createInvite().then(invite =>
        msg.channel.send(":white_check_mark: **|** Successfully created the channel invite. \n" + invite.url)
    );
}

catch(error){
    console.error(`I could not create the invite for the channel: ${error}`);
    msg.channel.send(`:x: **|** You have to paste a correct channel ID!`);
}
}