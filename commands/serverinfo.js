const Discord = require(`discord.js`)
const dateformat = require(`dateformat`);
module.exports.run = async(bot, msg, args) => {


let icon = msg.guild.iconURL({size: 2048}); 
    
let region = {
  "brazil": "Brazil",
  "europe": "Europe",
  "singapore": "Singapore",
  "london": "London",
  "russia": "Russia",
  "japan": "Japan",
  "hongkong": "Hongkong",
  "sydney": "Sydney",
  "us-central": "U.S. Central",
  "us-east": "U.S. East",
  "us-south": "U.S. South",
  "us-west": "U.S. West",
  "eu-west": "Western Europe"
}


let member = msg.guild.members;
let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
    online = member.cache.filter(m => m.user.presence.status === "online").size,
    idle = member.cache.filter(m => m.user.presence.status === "idle").size,
    dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
    robot = member.cache.filter(m => m.user.bot).size,
    total = msg.guild.memberCount;


let channels = msg.guild.channels;
let text = channels.cache.filter(r => r.type === "text").size,
    vc = channels.cache.filter(r => r.type === "voice").size,
    category = channels.cache.filter(r => r.type === "category").size,
    totalchan = channels.cache.size;


let location = region[msg.guild.region];


let x = Date.now() - msg.guild.createdAt;
let h = Math.floor(x / 86400000)
let created = dateformat(msg.guild.createdAt); 

const embed = new Discord.MessageEmbed()
.setColor("PURPLE")
.setTimestamp(new Date())
.setThumbnail(icon)
.setAuthor(msg.guild.name, icon)
.setDescription(`**Server-ID:** ${msg.guild.id}`)
.addField("**Region**", location)
.addField("**Date Created**", `${created} \nsince **${h}** day(s)`)
.addField("**Owner**", `${msg.guild.owner.user.tag}`)
.addField(`**Members [${total}]**`, `Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}`)
.addField(`**Channels [${totalchan}]**`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
msg.channel.send(embed);

}