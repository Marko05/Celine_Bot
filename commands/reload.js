const Discord = require(`discord.js`)

module.exports.run = async(bot, msg, args) => {

    if (msg.author.id !== '373424223823200256') return msg.channel.send(':x: **|** You can´t use this command!');
    let command;
    if (bot.commands.cache.has(args[0])) {
      command = args[0];
    } else if (bot.aliases.cache.has(args[0])) {
      command = bot.aliases.cache.get(args[0]);
    }
    if (!command) {
      return msg.channel.send(`I cannot find the command: ${args[0]}`);
    } else {
      msg.channel.send(`Reloading: ${command}`)
        .then(m => {
          bot.reload(command)
            .then(() => {
              m.edit(`Successfully reloaded: ${command}`);
            })
            .catch(e => {
              m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
  };