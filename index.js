const Discord = require(`discord.js`);
const { prefix , token } = require(`./config.json`)
const bot = new Discord.Client()
const { readdirSync } = require('fs');
const delay = (msec) => new Promise((response) => setTimeout(response, msec));
const name = `Marko`
const Canvas = require(`canvas`)

bot.on(`ready`, () =>{ 

    bot.user.setActivity(`;help` , ({type: "PLAYING"}))
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

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

bot.login(token)
