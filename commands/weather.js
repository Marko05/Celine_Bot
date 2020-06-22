const weather = require('weather-js');
const Discord = require('discord.js');

module.exports.run = async(bot, msg, args) => {

       weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            // 'C' can be changed to 'F' for farneheit results
            if(error) return msg.channel.send(error);
            if(!args[0]) return msg.channel.send('Please specify a location')
    
            if(result === undefined || result.length === 0) return msg.channel.send('**Invalid** location');
    
            var current = result[0].current;
            var location = result[0].location;
    
            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("BLUE")
            .addField('**Timezone**', `UTC${location.timezone}`, true)
            .addField('**Temperature**', `${current.temperature}°`, true)
            .addField('**Wind**', current.winddisplay, true)
            .addField('**Humidity**', `${current.humidity}%`, true)
            
    
            msg.channel.send(weatherinfo)
            })        
        }
    