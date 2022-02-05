const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'cry',
	description: 'Slap someone to show your disapproval.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   
   anime.cry().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} cries themselves to sleep ;-;.`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
	},
};