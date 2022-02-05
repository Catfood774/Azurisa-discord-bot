const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Gives a list of all currently avaliable commands.',
	execute(message, args) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle('Azurisa commands')
    .setDescription('Here is a list of current commands for this bot:')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856632516227629056/8f74eff0fc9997567585b356cd42899e.png?size=128')
    .addFields(
    { name: 'Information', value: 'The following commands are for informative purposes.'},
		{ name: '!help', value: 'This command lists all the commands for this bot.', inline: true },
		{ name: '!about', value: 'Gives you information about the bot', inline: true },
    { name: '!ping', value: 'This command shows ping response times.', 
    inline: true },
    { name: '!userinfo', value: 'Shows information about the user target.', inline: true },
    { name: '!serverinfo', value: 'Shows information about the server this message is sent in.', inline: true },
    { name: 'Fun', value: 'The following commands are for entertainment purposes.'},
    { name: '!8ball', value: 'Responds to a random question with a random sarcastic answer.', inline: true },
     { name: '!say', value: 'Make the bot say whatever you want.(Do not abuse this please)', inline: true },
    { name: '!urban', value: 'Defines a term using urban dictionary api,please refrain from using outside of a nsfw channel.', inline: true },
    { name: '!calc', value: 'Solves a arithemetical problem (Operations: +,-,*,**).', inline: true },
    { name: '!poll', value: 'Make a poll of your subject of choice', inline: true },
    { name: 'Moderation', value: 'The following commands are for moderation purposes, they may require special permissions in order to use them.'},
    { name: '!clear', value: 'Clear a specified number of messages', inline: true },
    { name: '!ban', value: 'Ban that one guy who is getting on your nerves.', inline: true },
    { name: '!kick', value: 'Kick a member for minor disruption.', inline: true },
    { name: '!addbot', value: 'Add this bot to your own server.', inline: true }
    )
    .setTimestamp();

    const exampleEmbed2 = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle('Azurisa commands')
    .setDescription('Here is a list of current commands for this bot:')
	  .setThumbnail('https://cdn.discordapp.com/avatars/856632516227629056/8f74eff0fc9997567585b356cd42899e.png?size=128')
    .addFields(
    { name: 'Roleplay', value: 'The following commands are for roleplay.'}, { name: '!hug', value: 'Send a hug to your bestie :heart:.', inline: true },
    { name: '!cuddle', value: 'Cuddle the selected user and send them some love.', inline: true },
    { name: '!kiss', value: 'Kiss the selected user that is close to you.', inline: true },
    { name: '!poke', value: 'Poke someone curiously.', inline: true },
    { name: '!slap', value: 'Slap someone to show your disapproval.', inline: true },
    { name: '!cry', value: 'Cry.', inline: true },
    { name: '!yeet', value: 'Yeet annoying people.', inline: true },
    { name: '!dance', value: 'Dance, just remember do not have too much fun.', inline: true },
    { name: '!stare', value: 'Use your beautiful eyes to someones disadvantage.', inline: true },
    { name: '!scream', value: 'Scream your life away.', inline: true },
    { name: '!bite', value: 'Bite someone, do not take it personally.', inline: true },
    { name: '!bonk', value: 'Bonk someone to restart their brain.', inline: true },
    { name: '!confused', value: 'For when your completely perplexed.', inline: true },
    )
    .setTimestamp();

		message.author.send(exampleEmbed);
    message.author.send(exampleEmbed2);
	},
};