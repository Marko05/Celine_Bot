const Discord = require('discord.js');
const ms = require('ms')

module.exports.run = async(bot, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_ROLES")) {
        return msg.channel.send(
          ":x: **|** You can´t use this command!"
        );
      }
  
      if (!msg.guild.me.hasPermission("MANAGE_ROLES")) {
        return msg.channel.send(":x: **|** I don´t have enough permissions!");
      }
      const user = msg.mentions.members.first();

      if (!user) {
        return msg.channel.send(
          "Please mention someone!"
        );
      }
   
      if(user.id === msg.author.id) {
        return msg.channel.send(":x: **|** You can´t mute yourself!");
      }
      let reason = args.slice(1).join(" ")
    
    
      if(!reason) {
        return msg.channel.send("Specify a reason.")
      }
      let muterole = msg.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return msg.channel.send("I can´t find a role with the name \`Muted\`")
    }
    if(user.roles.cache.has(muterole)) {
        return msg.channel.send("Given User is already muted")
    }
    
      user.roles.add(muterole)
      
      var log = new Discord.MessageEmbed()
      .setTitle('__**User Muted**__')
      .addField('**User:**', user, true)
      .addField('**By:**', msg.author, true)
      .addField('**Reason:**', reason)
      .setColor("BLUE")
      msg.channel.send(log);
          

}