const Discord = require(`discord.js`)
const db = require(`quick.db`)

module.exports.run = async(bot, msg, args) => {

    const user = msg.mentions.members.first() || msg.author
    
  
    let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    msg.channel.send(`**${user}** have **${warnings}** warning(s).`)
  
  
  }