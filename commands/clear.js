const Discord = require('discord.js');
module.exports = {
	name: 'clear',
	description: 'Clear the specified number of messages(Manage messages permission required).',
	async execute(message, args) {
   if (!message.member.hasPermission('MANAGE_MESSAGES'))return message.channel.send("You cant use this command since you're missing `manage_messages` perm");
   if (message.channel.type == "dm") return;
   if(!args[0]) return message.reply("please state the amount of messages you wish to clear.")
   if(isNaN(args[0])) return message.reply("please state a correct quantity of messages to be cleared.")
  
   if(args[0] > 100) return message.reply("you can not clear more than 100 messages at any one time.")
   if(args[0] < 1) return message.reply("you have to enter a minimum of 1 message.")

   const deleteCount = parseInt(args[0], 10);

   message.channel.bulkDelete(deleteCount + 1).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	}
};