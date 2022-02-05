const Discord = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'Ban the specified member.',
	execute(message, args) {
   if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You cannot ban members')
  
   let member = message.mentions.members.first()
   if (!member) return message.reply('Please specify a member for me to ban them')
   let reason = args.slice(1).join(" ");
   if (!reason) Reason = 'No Reason Given';
   if (!member.bannable) return message.reply('This member is not ban-able.')
  
   member.ban(reason).catch(err => console.log(err));
  }
};