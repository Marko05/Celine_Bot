const Discord = require(`discord.js`)
const db = require("quick.db")

module.exports.run = async(bot, msg, args) => {

    let user = msg.mentions.members.first() 

    let member = db.fetch(`money_${msg.author.id}`)

    if (!user) {
        return msg.channel.send('Please mention somebody.')
    }
    if (!args[1]) {
        return msg.channel.send('Please specify an amount.')
    }
    if (msg.content.includes('-')) { // if the message includes "-" do this.
        return msg.channel.send(':x: **|** Negative money can not be paid.')
    }

    if (member < args[0]) {
        return msg.channel.send(`:x: **|** You dont have enough coins, to pay that amount.`)
    }

    msg.channel.send(`:white_check_mark: **|** Successfully paid **${user.user.username}** **${args[1]} Coins**.`)
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${msg.author.id}`, args[1])

}
