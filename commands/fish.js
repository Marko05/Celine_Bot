const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)

module.exports.run = async(bot, msg, args) => {

   if (db.has(`${msg.author.id}`, "rod") === true) {
        let timeoutfished = 6000
        let fished =  db.fetch(`fished_${msg.author.id}`)
    
        if (fished != null && timeoutfished - (Date.now() - fished) > 0) {
            let time = ms(timeoutfished - (Date.now() - fished));
            msg.channel.send(`You have already fished please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
    
        } else {
            let amountearned = Math.floor(Math.random() * 500) + 1
    
            let jobs = ["Guppy", "Gold Fish", "JellyFish", "Mahi-Mahi", "Shrimp", "blob fish", "catfish", "shark"]
            let job = jobs[Math.floor(Math.random()* jobs.length)]
    
            let embed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setAuthor(`${msg.author.username}, it paid off`, msg.author.displayAvatarURL())
            .setDescription(`You caught a **${job}** and earnt **${amountearned}** coins`)
    
            msg.channel.send(embed)
    
            db.add(`money_${msg.author.id}`, amountearned)
            db.set(`fished_${msg.author.id}`, Date.now())
        }
    
    } else {
        msg.channel.send(":x: **|** You need to buy a fishing rod first. You can buy staff at the shop, by typing \`;shop\`.")
    }
    }
    