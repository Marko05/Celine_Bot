const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

let days = 0;
let week = 0;

let uptime = ``;
let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

if(hours > 23){
    days = days + 1;
    hours = 0;
}

if(days == 7){
    days = 0;
    week = week + 1;
}

if(week > 0){
    uptime += `${week} week, `;
}

if(minutes > 60){
    minutes = 0;
}

uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

let serverembed = new Discord.MessageEmbed()
    .setTitle(`Uptime`)
    .setColor("PURPLE")
    .setTimestamp()
    .setDescription(`My Uptime is **${uptime}**` );

msg.channel.send(serverembed);

}