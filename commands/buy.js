const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

let author = db.fetch(`money_${msg.author.id}`)
if (!args[0]) {
    msg.channel.send('what do you want to buy?')
}

if (args[0] === "sword") {
 if (author < 700) {
    return msg.channel.send(":x: **|** You need at least **700** coins")
 } else {
let items = db.fetch(msg.author.id, { items: [] })
db.push(msg.author.id, 'sword')
msg.channel.send(":white_check_mark: **|** Successfully bought 1x Sword")
db.subtract(`money_${msg.author.id}`, 700)
 }
}

if (args[0] === "rod") {
    if (author < 1000) {
        return msg.channel.send(":x: **|** You need at least **1000** coins to purchase this item")
    } else {
    let items = db.fetch(msg.author.id, { items: [] })
    db.push(msg.author.id, 'fishing rod')
    msg.channel.send(":white_check_mark: **|** Successfully bought 1x Rod")
    db.subtract(`money_${msg.author.id}`, 1000)
    }
}

if (args[0] === "pickaxe") {
    if (author < 2000) {
        return msg.channel.send(":x: **|** You need at least **2000** coins to purchase this item")
    } else {
        let items = db.fetch(msg.author.id, { items: [] })
        db.push(msg.author.id, 'pickaxe')
        msg.channel.send(":white_check_mark: **|** Successully bought 1x Pickaxe.")
        db.subtract(`money_${msg.author.id}`, 2000)
    }
}

if (args[0] === "gun") {
    if (author < 10000) {
        return msg.channel.send(":x: **|** You need at least **10,000** coins to purchase this item")
    } else {
        let items = db.fetch(msg.author.id, { items: [] })
        db.push(msg.author.id, 'gun')
        msg.channel.send(":white_check_mark: **|** Successfully bought 1x Gun, be careful!")
        db.subtract(`money_${msg.author.id}`, 10000)
    }
}

if (args[0] === "tea") {
    if (author < 50) {
        return msg.channel.send(":x: **|** You need at least **50** coins to purchase this item")
    } else {
        let items = db.fetch(msg.author.id, { items: [] })
        db.push(msg.author.id, 'tea')
        msg.channel.send(":white_check_mark: **|** Successfully bought 1x tea, enjoy!")
        db.subtract(`money_${msg.author.id}`, 50)
    }
}
}
