const Discord = require(`discord.js`);
const { prefix , token } = require(`./config.json`)
const bot = new Discord.Client()
const Client = new Discord.Client()
const { readdirSync } = require('fs');
const delay = (msec) => new Promise((response) => setTimeout(response, msec));
const name = `Marko`
const Canvas = require("canvas")
const db = require("quick.db")
const default_prefix = ";"

bot.on(`ready`, () => { 

bot.user.setActivity(`;help | ${bot.guilds.cache.size} Servers` ,({type: "WATCHING"}))
})
bot.on('message', async msg => {
    if(msg.author.bot) return;
    if(!msg.guild) return;
    let prefix = db.get(`prefix_${msg.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    if(!msg.content.startsWith(prefix)) return;

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
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

    return ctx.font;
}
bot.on('guildMemberAdd', async member => {
    
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(`https://www.pixelstalk.net/wp-content/uploads/2016/10/Sunset-Dramatic-Photos.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    bot.channels.cache.get(`727189274620985474`).send(`Welcome to the Offcial Support Server of Celine, ${member}!`, attachment);
});

bot.login(token)
