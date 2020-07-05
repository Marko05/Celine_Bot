const ms = require('ms');
module.exports.run = async(bot, msg, args) => {
  
    if (!bot.lockit) bot.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send(":x: **|** You can\'t use this command!");
  if (!time) return msg.channel.send('Please specify the duration (Example: 10s)');

  if (validUnlocks.includes(time)) {
    msg.channel.createOverwrite(msg.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      msg.channel.send('Lockdown lifted.');
      clearTimeout(bot.lockit[msg.channel.id]);
      delete bot.lockit[msg.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    msg.channel.createOverwrite(msg.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      msg.channel.send(`:white_check_mark: **|** Successfully locked down the channel for **${ms(ms(time), { long:true })}**`).then(() => { 

        bot.lockit[msg.channel.id] = setTimeout(() => {
          msg.channel.createOverwrite(msg.guild.id, {
            SEND_MESSAGES: null
          }).then(msg.channel.send('Lockdown Disabled!')).catch(console.error);
          delete bot.lockit[msg.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};