const Discord = require(`discord.js`);
const { prefix , token } = require(`./config.json`)
const bot = new Discord.Client()
const Client = new Discord.Client()
const { readdirSync } = require('fs');
const delay = (msec) => new Promise((response) => setTimeout(response, msec));
const name = `Marko`
const Canvas = require("canvas")


bot.on(`ready`, () => { 

bot.user.setActivity(`;help | ${bot.users.cache.size} Users` ,({type: "WATCHING"}))
})
bot.on('message', async msg => {
    if(msg.author.bot || !msg.content.startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(bot, msg, args, name);
    } catch(e) {
        return;
    }
})

bot.on('ready', async () => {
    const files = readdirSync('./commands/');
    files.forEach(file => {
        if(file.endsWith('.js')){
            console.log(`Loaded ${file}`);
        }
    })
    console.log(`Loaded ${files.length} commands.`)
    await delay(2000);
    console.log(`Everything is loaded and the bot works with a latency of ${bot.ws.ping}ms.`)

})

bot.on('guildMemberAdd', async member => {
        const channel = member.guild.channels.cache.find(ch => ch.name === '〔🚪〕welcome');
        if (!channel) return;
    

    
        channel.send(`Welcome to the Official Support Server of Celine, ${member}!\n\nIf you want to be verify, go to #〔✅〕verify.\n\nIf you have questions for the bot, feel free to ask our staff.\n\nEnjoy your Stay! 😄`);
    });


bot.login(token)
