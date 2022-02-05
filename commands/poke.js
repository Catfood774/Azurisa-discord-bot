const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'poke',
	description: 'Poke someone.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("Poked some jello and observes it jiggle with intense curiosity.")
   anime.poke().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} poked ${message.mentions.users.first().username} with curiosity`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
	},
};