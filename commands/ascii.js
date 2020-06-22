const Discord = require(`discord.js`)
const figlet = require('figlet');

module.exports.run = async(bot, msg, args) => {

        if(!args[0]) return msg.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return msg.channel.send('Please provide text shorter than 2000 characters')

            msg.channel.send(data)

        })  
    }
