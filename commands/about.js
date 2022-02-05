const Discord = require('discord.js');
module.exports = {
	name: 'about',
	description: 'Gives information about the bot.',
	execute(message, args) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle('About Azurisa')
    .setDescription('This is a discord.js chat/moderation bot made by Catfood#8225. Development started on the 21st of June 2021.')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856632516227629056/8f74eff0fc9997567585b356cd42899e.png?size=128')
     .setTimestamp();
		message.channel.send(exampleEmbed);
	}
};