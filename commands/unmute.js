const Discord = require('discord.js');
const ms = require('ms')

module.exports.run = async(bot, msg, args) => {

    var Discord = require('discord.js');

    exports.run = async(client, msg, args) => {
    
        if (!msg.member.hasPermission("MANAGE_ROLES")) {
            return msg.channel.send(
              ":x: **|** You can´t use this command!"
            );
          }
      
          if (!msg.guild.me.hasPermission("MANAGE_ROLES")) {
            return msg.channel.send(":x: **|** I dont have enough permissions!");
          }
          const user = msg.mentions.members.first();
    
        if (!user) {
          return msg.channel.send(
            "Please mention someone!"
          );
        }
        let muterole = msg.guild.roles.cache.find(x => x.name === "Muted")
        if(user.roles.cache.has(muterole)) {
          return msg.channel.send(":x: **|** The user is not muted!")
        }
        user.roles.remove(muterole)
        
        await msg.channel.send(`:white_check_mark: **|** Successfully unmuted **${user}** by **${msg.author}**`)
        
        user.send(`:white_check_mark: **|** You are now unmuted from **${msg.guild.name}**`)
    
}
}