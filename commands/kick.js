const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'Kicks the specified member.',
	execute(message, args) {
   if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick members')
  
   let member = message.mentions.members.first()
   if (!member) return message.reply('Please specify a member for me to kick them')
   let reason = args.slice(1).join(" ");
   if (!reason) Reason = 'No Reason Given';
   if (!member.kickable) return message.reply('This member is not kickable')
  
   member.kick(reason).catch(err => console.log(err));
  }
};