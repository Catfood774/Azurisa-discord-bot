const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'bite',
	description: 'Bite someone.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("looks around frantically looking for someone to bite.")
    anime.bite().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} bites ${message.mentions.users.first().username}`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};