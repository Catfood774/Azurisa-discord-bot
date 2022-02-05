const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'dance',
	description: 'Dance and spread the good vibes.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) message.channel.send(await anime.dance().then(gif =>{
      const embed1 = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} dances awkwardly by themselves, everyone slowly backs away 😬`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed1);
    }))
  if(args[0]) message.channel.send(await anime.dance().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} dances with ${message.mentions.users.first().username} and pulls out some groovy moves!`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    }))
  }
};