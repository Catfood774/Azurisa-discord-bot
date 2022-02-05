const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'yeet',
	description: 'Yeet someone.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("yeets their phone at the wall, it breaks.Well that was a bad decision wasn't it?.")
    anime.yeet().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} yeets ${message.mentions.users.first().username} into the stratosphere, au revoir 👋`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};