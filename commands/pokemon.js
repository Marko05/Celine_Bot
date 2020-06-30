const Discord = require(`discord.js`)
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

module.exports.run = async(bot, msg, args) => {

const options = {
    url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
    json: true
    
  }
  if (!args[0]) {
    msg.channel.send("Please specify a pokemon");
  }

      let embed = new MessageEmbed()
      .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
      .setDescription(body.info.description)
      .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
      .setColor("#ff2050")
      .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
      
      msg.channel.send(embed)
      msg.delete()
  }






  
  

  
  