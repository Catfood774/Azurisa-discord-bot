const Discord = require('discord.js');
const math = require('discord-math');

module.exports = {
	name: 'calc',
	description: 'Solves an arithmetical problem.',
	execute(message, args) {
       try {
            let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.reply('Number 1 needs to be specified. Example !calc 1 + 1');
            if (!operation) return message.reply('An operation was not specified!');
            if (!num2) return message.reply('Number 2 needs to be specified make sure to include spaces between the numbers and operation');
 
            message.channel.send(`Answer: ${math.calculate(num1, operation, num2)}`);
        } catch (e) {
            console.log(e);
            message.reply("There was a problem executing this command, sorry!")
        }
    }
}