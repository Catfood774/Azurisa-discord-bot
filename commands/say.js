const Discord = require('discord.js');
module.exports = {
	name: 'say',
	description: 'Says the message stated by the user.',
	execute(message, args) {
    let msg = message.content.split("!say").join("")
    if(!msg)return message.channel.send("You have not told me what you want me to say")
    message.channel.send(msg)
    message.delete()
	}
};