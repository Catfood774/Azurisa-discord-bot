const Discord = require('discord.js');
const { poll } = require('discord.js-poll');
module.exports = {
	name: 'poll',
	description: 'Makes a poll about a chosen subject.',
	execute(message, args) {
	 poll(message, args, '+', '#00D1CD');
	
  }
};