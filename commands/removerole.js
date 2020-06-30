const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

let rMember = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0]);

if(!msg.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")){
    msg.channel.send("You don't have the permissions to use this command!");
}

else{

    if(!rMember) 
        return msg.channel.send(":x: **|** I couldn´t find the user!");
    
    let role = args.join(" ").slice(23);
    if(!role) 
        return msg.channel.send("Specify a role!");
    
    let gRole = msg.guild.roles.cache.find(roles => roles.name === role);
    if(!gRole) 
        return msg.channel.send(":x: **|** I couldn't find that role!");

    if(!rMember.roles.cache.has(gRole.id)) 
        return msg.reply(":x: **|** They don't have that role.");
    
    else{
        rMember.roles.remove(gRole.id).catch(console.error);
        
        try{

            msg.channel.send(`:white_check_mark: **|** Successfully removed the role **${gRole.name}** from **${rMember}**!`);
        }
        catch(e){
            console.log(e.stack);
            msg.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them.`)
        }
    }
}
}