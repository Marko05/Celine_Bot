const Discord = require(`discord.js`)
const db = require(`quick.db`)

module.exports.run = async(bot, msg, args) => {

    if(!msg.member.hasPermission("ADMINISTRATOR")) {
        return msg.channel.send(":x: **|** You can´t use this command!")
      }
      
      const user = msg.mentions.members.first()
      
      if(!user) {
      return msg.channel.send("Please mention someone!")
      }
      
      if(msg.mentions.users.first().bot) {
        return msg.channel.send(":x: **|** Bot can´t have warnings!")
      }
      
      if(msg.author.id === user.id) {
        return msg.channel.send(":x: **|** You are not allowed to reset your warnings")
      }
      
      let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`)
      
      if(warnings === null) {
        return msg.channel.send(`:x: **|** **${msg.mentions.users.first().username}** don´t have any warnings!`)
      }
      
      db.delete(`warnings_${msg.guild.id}_${user.id}`)
      user.send(`Your warnings from **${msg.guild.name}** were reseted by **${msg.author.username}**.`)
      await msg.channel.send(`:white_check_mark: **|** Successfully Reseted all warnings of **${msg.mentions.users.first().username}**!`)
      
    
      
}