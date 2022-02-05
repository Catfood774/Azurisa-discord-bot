const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'ping',
	description: 'Gives information about response times between discord messages and repl.it API response time.',
	execute(message, args) {
		var ping1 = Date.now() - message.createdTimestamp
    const pingEmbed = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle('Pong!')
    .setDescription('Ping- message response time and or response time to get information from APIs')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856632516227629056/8f74eff0fc9997567585b356cd42899e.png?size=128')
    .addFields(
    { name: 'Discord message ping:', value: `${ping1}ms`, inline: true },
    { name: 'API ping:', value: `${Math.round(message.client.ws.ping)}ms`, inline: true })
    .setTimestamp();
		message.channel.send(pingEmbed);
	}
};