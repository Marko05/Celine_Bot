const Discord = require(`discord.js`)
const db = require(`quick.db`)

module.exports.run = async(bot, msg, args) => {

    if(!msg.member.hasPermission("ADMINISTRATOR")) {
        return msg.channel.send(":x: **|** You can´t use this command!")
      }
      
      const user = msg.mentions.members.first()
      
      if(!user) {
        return msg.channel.send("Please mention someone")
      }
      
      if(msg.mentions.users.first().bot) {
        return msg.channel.send(":x: **|** You can´t warn bots!")
      }
      
      if(msg.author.id === user.id) {
        return msg.channel.send(":x: **|** You can´t warn yourself!")
      }
      
      if(user.id === msg.guild.owner.id) {
        return msg.channel.send(":x: **|** You can´t warn the Owner!")
      }
      
      const reason = args.slice(1).join(" ")
      
      if(!reason) {
        return msg.channel.send("Please give a reason")
      }
      
      let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`)
      
      if(warnings === 3) {
        return msg.channel.send(`**${msg.mentions.users.first().username}** already reached his/her limit with 3 warnings!`)
      }
      
      if(warnings === null) {
        db.set(`warnings_${msg.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${msg.guild.name}** for ${reason}`)
        await msg.channel.send(`:white_check_mark: **|** Successfully warned **${msg.mentions.users.first().username}** for **${reason}**!`)
      } else if(warnings !== null) {
          db.add(`warnings_${msg.guild.id}_${user.id}`, 1)
         user.send(`You have been warned in **${msg.guild.name}** for ${reason}`)
        await msg.channel.send(`:white_check_mark: **|** Successfully warned **${msg.mentions.users.first().username}** for **${reason}**!`)
      }
      
    
    } 
  