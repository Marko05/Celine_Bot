const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

let rMember = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);
    
if(!msg.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
    msg.channel.send(":x: **|** You don't have the permissions to use this command!");
}

else{

    if(!rMember) 
        return msg.channel.send(":x: **|** Couldn't find that user!");

    let role = args.join(" ").slice(23);
    if(!role) 
        return msg.channel.send("Specify a role!");

    let gRole = msg.guild.roles.cache.find(roles => roles.name === role);
    if(!gRole) 
        return msg.channel.send(":x: **|** Couldn't find that role.");

    if(rMember.roles.cache.has(gRole.id)) 
        return msg.channel.send(":x: **|** They already have that role.");

    else{
        rMember.roles.add(gRole.id).catch(console.error);
        
        try{
            msg.channel.send(`:white_check_mark: **|** Successfully gived the role **${gRole.name}** to ${rMember}!`);
        }
        catch(e){
            console.log(e.stack);
            msg.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}.`)
        }
    }
}
}