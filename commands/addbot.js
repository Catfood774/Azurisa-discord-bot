const Discord = require('discord.js');
module.exports = {
	name: 'addbot',
	description: 'Gives information about the bot.',
	execute(message, args) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle('Add Azurisa to your server!')
    .setDescription('Click the following link to add this bot to your own server: https://discord.com/api/oauth2/authorize?client_id=856632516227629056&permissions=473132151&scope=bot')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856632516227629056/8f74eff0fc9997567585b356cd42899e.png?size=128')
     .setTimestamp();
		message.channel.send(exampleEmbed);
	}
};