const Discord = require(`discord.js`)
const db = require("quick.db")
const ms = require(`parse-ms`)
module.exports.run = async(bot, msg, args) => {

if (db.has(`${msg.author.id}`, "pickaxe") === true) {
    let timeoutmine = 600000
    let mined =  db.fetch(`mined_${msg.author.id}`)

    console.log(db.has(`${msg.author.id}`, "pickaxe"))
    if (mined != null && timeoutmine - (Date.now() - mined) > 0) {
        let time = ms(timeoutmine - (Date.now() - mined));
        msg.channel.send(`You have already mined please come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

    } else {
        let amountearned = Math.floor(Math.random() * 800) + 1

        let jobs = ["Diamond", "Gold", "Silver", "Iron", "Emerald", "Copper", "Bronze"]
        let job = jobs[Math.floor(Math.random()* jobs.length)]

        let embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setAuthor(`${msg.author.username}, it paid off`, msg.author.displayAvatarURL())
        .setDescription(`You mined **${job}** ore and earnt **${amountearned}** coins`)
        

        msg.channel.send(embed)

        db.add(`money_${msg.author.id}`, amountearned)
        db.set(`mined_${msg.author.id}`, Date.now())
    }

} else if(db.has(`${msg.author.id}`, "pickaxe") === false) {
    msg.channel.send(":x: **|** You need to buy a pickaxe first. You can buy staff at the shop, by typing \`;shop\`.")
}
}

