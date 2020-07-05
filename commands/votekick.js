const Discord  = require('discord.js');


const agree    = "✅";
const disagree = "❎";

module.exports.run = async(bot, msg, args) => {

  if (msg.mentions.users.size === 0){
    return msg.channel.send("Please Mention someone to votekick");
  }

  let kickmember = msg.guild.member(msg.mentions.users.first());
  if(!kickmember){
    msg.channel.send(":x: **|** That User Does Not Seem Valid!");
  }

  if(!msg.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return msg.channel.send(":x: " + "| I need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }

  let msg = await msg.channel.send(`Vote to kick ${msg.mentions.users.first().username}${msg.mentions.users.first().discriminator}(50 Seconds)`);
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.MessageEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Votes needed to kick (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")
            .setTimestamp()
  await msg.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
    })
  }else{

    msg.channel.send("\n" + "SAFE..... FOR NOW");
  }

}