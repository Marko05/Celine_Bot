const Discord = require(`discord.js`)
const db = require("quick.db")
const default_prefix = (";")
module.exports.run = async(bot, msg, args) => {

  if(!msg.member.hasPermission("ADMINISTRATOR")) {
    return msg.channel.send(":x: **|** You can´t use this command!")
  }
  
  if(!args[0]) {
    return msg.channel.send("Specify a prefix!")
  } 
  
  if(args[1]) {
    return msg.channel.send(":x: **|** You can´t set a prefix with double argument!")
  }
  
  if(args.join("") === default_prefix) {
    db.delete(`prefix_${msg.guild.id}`)
   return await msg.channel.send(":white_check_mark: **|** Successfully reseted Prefix.")
  }
  
  db.set(`prefix_${msg.guild.id}`, args[0])
await msg.channel.send(`:white_check_mark: **|** Successfully Seted the Bot Prefix to \`${args[0]}\``)
  
}
